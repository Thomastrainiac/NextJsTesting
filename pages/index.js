import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch('https://v2roadmap-default-rtdb.firebaseio.com/Blog.json')
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
      <div class={styles.welcome}>
        <h4 class={styles.welcome}>Welcome</h4>
      <h4 class={styles.welcome}>Choose a game</h4>
      </div>
      <p class={styles.blogtitle}>Developer Blog</p><>
        {data.map((obj) => (
          <div class={styles.blog}>
            <p class={styles.blogtitle}>{obj.title}</p>
            <p class={styles.blogdescription}>{obj.description}</p>
            <i class={styles.editor}>~{obj.by}</i>
          </div>
        ))}
      </>
    </>
  )
}
