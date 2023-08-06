import Link from "next/link"

export const getStaticProps=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    return{
        props:{
            data,
        }
    }
}
const index = ({data}) => {
  return (
         <>
    {data.slice(0,5).map((item)=>{
        return(
            <div key={item.id}>
                <Link href={`/blog/${item.id}`}>
                    <h1>{item.title}</h1> 
                </Link>
            </div>)
        
      })
    }
    </>
      )
}

export default index