import { useRouter } from "next/router"

const pageNo = () => {
 const router=useRouter()
 const pageNumber=router.query.pageNo;
    return (
    <div>pageNo {pageNumber}</div>
  )
}
// link to={'/xyz'}        link herf='/xyz'
export default pageNo