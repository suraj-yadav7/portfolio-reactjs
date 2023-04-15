import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      <Toaster/>
      <Contact/>
 
    </>
  );
}

export default App;
