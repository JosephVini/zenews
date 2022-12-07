import { GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head"
import iconHand from "../public/images/IconHand.svg"
import mainImage from "../public/images/avatar.svg"

import styles from "./home.module.scss"
import { SubscribeButton } from "../components/SubscribeButton"
import { stripe } from "../services/stripe"

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Zé.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.infosContainer}>
          <div>
            👏
            <span className={styles.welcomeText}>Hey, Seja bem vindo!</span>
          </div>
          <h1 className={styles.title}>Notícias sobre <span>Tecnologia</span></h1>
          <p className={styles.priceText}>Tenha acesso a conteúdos de tecnologias <span>por {product.amount}/mês</span></p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src={mainImage} alt="" width={500} height={500} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JoaqxCVAOjluQRkfhfJK7w4");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount as number / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
