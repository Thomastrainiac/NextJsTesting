import styles from "../styles/Area27Roadmap.module.css"

export async function getStaticProps() {
  const res = await fetch("https://v2roadmap-default-rtdb.firebaseio.com/Roadmap.json")
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


export default function Area27Roadmap({ data }) {
    return(
      <>
        {/* <div className={styles.card}>asd</div> */}
      </>
    )
}
