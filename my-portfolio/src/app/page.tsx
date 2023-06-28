import { Header } from "./components/Header/header";
import { Experience } from "./components/Experience/experience";
import { Button } from "./components/Button/button";


import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Tecnical</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Analysis and Systems Development at Faculdades Metropolitanas Unidas</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <Button text="CONTACT ME"/>
      </div>
    </main>
  )
}
