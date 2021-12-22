import { useRouter } from "next/router"
import Layout from "../../components/Layout"

const SinglePostPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.slug}</h1>
    </Layout>
  )
}

export default SinglePostPage
