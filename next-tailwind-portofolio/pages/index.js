// Components
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <section>
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <h2 className="font-ibm">Hello from Home</h2>
    </section>
  );
}
