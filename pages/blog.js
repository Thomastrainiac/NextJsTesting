import styles from '../styles/Blog.module.css'
// import { getEditorImg } from '../components/functions'

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

export default function Blog({ data }) {
    return(
      <>
        <p className={styles.blogtitle}>Developer Blog</p>
        {data.map((obj) => (
          <div key={obj.title} className={styles.blog}>
            <p className={styles.blogtitle}>{obj.title}</p>
            <p className={styles.blogdescription}>{obj.description}</p>
            <i className={styles.editor}>~{obj.by}</i>
            {/* {getEditorImg(obj.by)} */}
          </div>
        ))}
      </>
    )
}
