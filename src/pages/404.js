import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const err = () => {
    const router=useRouter()

    const handleClick=()=>{
        router.push('/')
    }
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 1000);
    },[])
  return (
    <div>Ham pe to h hi naw
        <Link href={'/'}>
        <button onClick={handleClick}>Click me</button>
        </Link>
    </div>
    )
}

export default err