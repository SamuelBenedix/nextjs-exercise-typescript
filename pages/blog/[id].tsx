import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Layout>
        <h1>Blog Page {id}</h1>
      </Layout>
    </div>
  );
}
