import "./App.css";
import Agenda from "./agenda/agenda";
import Biography from "./biography/biography";
import Footer from "./footer/footer";
import Header from "./header/header";
import Proposals from "./proposals/proposals";

function App() {
  return (
    <>
      <Header></Header>
      <Biography></Biography>
      <Proposals></Proposals>
      <Agenda></Agenda>
      <Footer></Footer>
    </>
  );
}

export default App;
