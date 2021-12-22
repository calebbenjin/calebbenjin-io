import { useRouter } from "next/router"
import Layout from "../../components/Layout"

const SingleProjectPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.slug}</h1>
    </Layout>
  )
}

export default SingleProjectPage
