import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Head from "next/head";
import Link from "next/link";
import styles from "../news.module.scss";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updateAt: string;
    };
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { data: session, status }: any = useSession()
    const { push } = useRouter();
    useEffect(() => {
        if (session?.activeSubscription) {
            push(`/news/${post.slug}`);
        }
    }, [session]);

    return (
        <>
            <Head>
                <title>{post.title} | TecNews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                    <div
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.continueReading}>
                        Quer continuar lendo?
                        <Link href="/">
                            Inscreva-se agora 🤗
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug }: any = params;

    const prismic = getPrismicClient();

    const response = await prismic.getByUID("post", String(slug), {});

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 4)),
        updateAt: new Date(response.last_publication_date).toLocaleDateString(
            "pt-BR",
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }
        ),
    };

    return {
        props: { post },
        revalidate: 60 * 30, // 30 minutes
    };
};