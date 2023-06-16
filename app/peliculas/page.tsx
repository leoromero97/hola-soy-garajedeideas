import Movies from "@/components/Sections/Movies";
import Layout from "@/components/Layout";

export default function Peliculas() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Layout>
        <Movies />
      </Layout>
    </main>
  )
}
