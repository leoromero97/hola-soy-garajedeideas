import Random from "@/components/Sections/Random";
import Layout from "@/components/Layout";

export default function RandomPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Layout>
        <Random />
      </Layout>
    </main>
  )
}
