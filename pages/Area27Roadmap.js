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

const Header = (props) => {
  const headerText = props.index
  return(
    <h4 className={styles.updateText}>{headerText}</h4>
  )
}

const Status = (props) => {
  const status = props.status
  
  if (status == 0) {
    return(
      <span className={styles.status0}>Not Started</span>
    )
  } else if (status == 1){
    return(
      <span className={styles.status1}>In Progress</span>
    )
  } else if (status == 2){
    return(
      <span className={styles.status2}>Live</span>
    )
  } else if (status == 3){
    return(
      <span className={styles.status3}>Testing Phase</span>
    )
  } else if (status == 4){
    return(
      <span className={styles.status4}>Concept Phase</span>
    )
  } else {
    return(
      <></>
    )
  }
}

const Information = (props) => {
  const data = props.data
  const indexVar = props.index
  return(
    data[indexVar].map((obj) => (
      <>
      <div className={styles.spacer}></div>
      <div className={`${styles.card} w3-card`}>
        <div className={styles.container}>
          <p className={styles.dataText}>{obj.name}</p>
          <p className={styles.description}>{obj.description}</p>
          <Status status={obj.status}/>
        </div>
      </div>
      </>
    ))
  )
}

export default function Area27Roadmap({ data }) {
    return(
      <>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        {Object.keys(data).map((index)=>(
          <>
            <Header index={index} />
            <Information index={index} data={data} />
          </>
        ))}
        <div className={styles.spacer}></div>
      </>
    )
}
