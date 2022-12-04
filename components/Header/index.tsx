import { useSession } from "next-auth/react";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
    const { status } = useSession();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>
                    Zé<span>.news</span>
                </h1>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Notícias</a>
                </nav>

                {status === "authenticated" ? (
                    <SignInButton title="Entrar com Google" icon="Google" signInWith="google" />
                ) : (
                    <>
                        <SignInButton title="Entrar com Google" icon="Google" signInWith="google" />
                        <SignInButton title="Entrar com Github" icon="Github" signInWith="github" />
                    </>
                )}
            </div>
        </header>
    )
}