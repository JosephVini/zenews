import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image"
import styles from "./styles.module.scss";

interface PropsType {
    title: string;
    color?: string;
    icon: string;
    signInWith: string;
}

export function SignInButton(props: PropsType) {
    const { data, status } = useSession();

    console.log(data);
    return data ? (
        <button 
            className={styles.signInButton} 
            type="button"
            onClick={() => signOut()}
        >
            {(status === "authenticated" && data.user?.image) ? <Image src={data.user?.image as string} alt='' width={32} height={32} /> : props.icon === "Github" ? <FaGithub color="#04D361" /> : <FaGoogle color="#04D361" /> }
            {data.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button className={styles.signInButton} type="button" onClick={() => signIn(`${props.signInWith}`)}>
            {props.icon === "Github" ? <FaGithub color="#FF4B33" /> : <FaGoogle color="#FF4B33" />}
            {props.title}
        </button>
    )
}