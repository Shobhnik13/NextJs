
export const getStaticPaths=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()

    const paths=data.map((item)=>{
        return{
            params:{
                pageNo:item.id.toString()
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.pageNo 
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=await res.json()
    return{
        props:{
            data,
        }
    }
}
const dynamic = ({data}) => {
  return (
    <>
    <h1>{data.id}</h1>
    <h1>{data.title}</h1>
    </>
  )
}

export default dynamic