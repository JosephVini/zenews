import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react"
import { toast, ToastOptions } from 'react-toastify';
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {

  const optsToast: ToastOptions<{}> = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  function alertNotAutenticate() {
    return toast.warn('Para realizar a inscrição é necessário a autenticação!', optsToast);
  }

  const { data, status }: any = useSession();
  const { push } = useRouter();
  let [isLoading, setIsloading] = useState(false);
  async function handleSubscribe() {
    setIsloading(isLoading = true)
    if (!data) {
      alertNotAutenticate();
      return;
    }

    if (data!.activeSubscription) {
      push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe!.redirectToCheckout({ sessionId });
      setIsloading(isLoading = false)
    } catch (err: any) {
      return toast.error(`${err!.message}`)
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={isLoading ? styles.loading : styles.subscribeButton}
    >
      Inscreva-se agora
    </button>
  );
}