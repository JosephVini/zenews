import Image from "next/image"
import iconHand from "../public/images/IconHand.svg"
import mainImage from "../public/images/avatar.svg"

import styles from "./home.module.scss"

export default function Home() {

  return (
    <main className={styles.contentContainer}>
      <section className={styles.infosContainer}>
        <div className={styles.welcomeMessage}>
          <Image src={iconHand} alt="" />
          <span className={styles.welcomeText}>Hey, Seja bem vindo!</span>
        </div>
        <h1 className={styles.title}>Notícias sobre <span className={styles.orangeColor}>Tecnologia</span></h1>
        <p className={styles.priceText}>Tenha acesso a conteúdos de tecnologias <span className={styles.orangeColor}>por R$9,90/mês</span></p>
        <button className={styles.buttonSubscribe}>Inscreva-se agora</button>
      </section>
      <Image src={mainImage} alt="" />
    </main>
  )
}
