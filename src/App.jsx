import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./view/Inicio";
import { Abaout } from "./view/Abaout";
import { SectionMen } from "./view/SectionMen";
import { SectionWoman } from "./view/SectionWoman";
import { Contact } from "./view/Contact";

function App(){
  return (
    <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" exact element={<Inicio/>} />
            <Route path="/conocenos" element={<Abaout/>} />
            <Route path="/hombre" element={<SectionMen/>} />
            <Route path="/mujer" element={<SectionWoman/>} />
            <Route path="/contacto" element={<Contact/>} />
          </Routes>

        </div>
    </Router>
  )
}

export default App;


