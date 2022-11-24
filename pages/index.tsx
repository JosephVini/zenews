import { useState } from "react"
import { Modal } from "./components/Modal"
import styles from "./home.module.scss"

export default function Home() {
  let [open,setOpen] = useState(false)
  function openModal() {
    setOpen(
      open = !open
    )
  }
  return (
    <main className={styles.contentContainer}>
      <div className="text">Teste</div>
      <img src="" alt="" />
    </main>
  )
}
