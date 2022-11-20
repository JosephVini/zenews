import { Modal } from "./components/Modal"
import { useState } from "react";
export default function Home() {
  let [open, setOpen] = useState(false)
  function abrirModal(){
    setOpen(
      open = !open
    )
  }

  return (
    <div>
      {open ? <Modal /> : null}
      <button onClick={abrirModal} >Abrir Modal</button>
      
    </div>
    
  )
}
