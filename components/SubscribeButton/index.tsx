import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
    priceId: string;
  }

export function SubscribeButton(props: SubscribeButtonProps) {
    // const [session] = useSession();
    const { push } = useRouter();

    async function handleSubscribe() {
        // if (!session) {
        //   signIn("github");
        //   return;
        // }
    
        // if (session.activeSubscription) {
        //   push("/posts");
        //   return;
        // }
    
        try {
        //   const response = await api.post("/subscribe");
    
        //   const { sessionId } = response.data;
    
        //   const stripe = await getStripeJs();
    
        //   await stripe.redirectToCheckout({ sessionId });
        } catch (err) {
        //   alert(err.message);
        }
      }

    return (
        <button
            type="button"
            onClick={handleSubscribe}
            className={styles.subscribeButton}
            >
            Inscreva-se agora
        </button>
    );
}