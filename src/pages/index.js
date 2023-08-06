import styles from '../styles/index.module.css'

export const getStaticProps=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data=await res.json();
  return{
    props:{
      data,
    }
  }
}

const index = ({data}) => {
  return (
    <>
    {data.map((item)=>{
        return(
            <div key={item.id}>
              {item.title}
            </div>)
        
      })
    }
    </>
  )
}

export default index