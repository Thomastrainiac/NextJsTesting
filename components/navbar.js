import styles from './styles/navbar.module.css'
import Link from "next/link"

export default function navbar() {
    return (
        <>
            <div class={styles.navbar}>
                <Link href="/">
                    <a class={styles.icon}>
                        <p class={styles.title}>Bulk Games</p>
                        <img class={styles.icon} src="/scpf-logo.png" height="50px" width="75px"></img>
                    </a>
                </Link>
                <div class={styles.rightcontainer}>
                     <Link href='/'>
                        <a class={styles.navitem}>Home</a>
                    </Link>
                    <Link href='/Area27Roadmap'>
                        <a class={styles.navitem}>Area 27</a>
                    </Link>
                    <Link href='/Area47Roadmap'>
                        <a class={styles.navitem}>Area 47</a>
                    </Link>
                </div>
            </div>
        </>
    )
}