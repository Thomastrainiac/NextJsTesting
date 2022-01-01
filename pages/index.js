import styles from "../styles/Home.module.css"

export async function getStaticProps() {
  const res = await fetch("https://v2roadmap-default-rtdb.firebaseio.com/Blog.json")
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, 
  }
}

export default function Home({ data }) {
  return(
    <>
      <div className={styles.welcome}>
        <h4 className={styles.welcome}>Welcome</h4>
      <h4 className={styles.welcome}>Choose a game</h4>
      </div>
      <p className={styles.blogtitle}>Developer Blog</p><>
        {data.map((obj) => (
          <div key={obj.title} className={styles.blog}>
            <p className={styles.blogtitle}>{obj.title}</p>
            <p className={styles.blogdescription}>{obj.description}</p>
            <i className={styles.editor}>~{obj.by}</i>
          </div>
        ))}
      </>
    </>
  )
}
