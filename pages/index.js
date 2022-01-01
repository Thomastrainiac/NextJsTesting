import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return(
    <>
      <div className={styles.welcome}>
        <h4 className={styles.welcome}>Welcome</h4>
        <h4 className={styles.welcome}>Choose a game</h4>
        <div className={styles.main}>
          <Link href="/Area27Roadmap">
            <div className={styles.card}>
              <h2>Area-27</h2>
              <Image src='/twentyseven.png' width={200} height={120}></Image>
            </div>
          </Link>
          <Link href="/Area47Roadmap">
            <div className={styles.card}>
              <h2>Area-47</h2>
              <Image src={'/fortyseven.png'} width={200} height={120}></Image>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
