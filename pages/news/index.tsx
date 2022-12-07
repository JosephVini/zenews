import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updateAt: string;
  };
  
interface PostsProps {
    posts: Post[];
}

export default function News({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Notícias | Zé.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map((post) => (
                        <Link href={`/news/${post.slug}`} key={post.slug}>
                            <time>{post.updateAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.get();
  
    const posts = response.results.map((post) => {
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        excerpt:
          post.data.content.find((content: any) => content.type === "paragraph")
            ?.text ?? "",
        updateAt: new Date(post.last_publication_date).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        ),
      };
    });
  
    return {
      props: { posts },
    };
  };