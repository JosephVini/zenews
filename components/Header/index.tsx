import { useSession } from "next-auth/react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
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
                    <ActiveLink activeClassName={styles.active} href="/">
                        <p>Home</p>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/news" prefetch>
                        <p>Notícias</p>
                    </ActiveLink>
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