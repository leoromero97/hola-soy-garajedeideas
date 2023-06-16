import Layout from "./components/Layout";
import AboutMe from "./components/Sections/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Layout>
        <AboutMe />
      </Layout>
    </main>
  )
}
