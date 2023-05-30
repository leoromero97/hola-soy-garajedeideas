import Layout from "./components/Layout";
import AboutMe from "./components/Sections/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Layout>
        <AboutMe />
      </Layout>
    </main>
  )
}
