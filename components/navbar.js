import styles from './styles/navbar.module.css'
import Link from "next/link"

export default function navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <Link href="/">
                    <a className={styles.icon}>
                        <p className={styles.title}>Bulk Games</p>
                        <img className={styles.icon} src="/scpf-logo.png" height="50px" width="75px"></img>
                    </a>
                </Link>
                <div className={styles.rightcontainer}>
                     <Link href="/">
                        <a className={styles.navitem}>Home</a>
                    </Link>
                    <Link href="/Area27Roadmap">
                        <a className={styles.navitem}>Area 27</a>
                    </Link>
                    <Link href="/Area47Roadmap">
                        <a className={styles.navitem}>Area 47</a>
                    </Link>
                </div>
            </div>
        </>
    )
}