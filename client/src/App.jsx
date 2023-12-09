import { useEffect } from "react";
import { RoutesComponent } from "./components/RoutesComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App (){
  useEffect(() => {
    window.document.title = "Coderhouse";
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);

  return (
    <>
      <RoutesComponent /> 
    </>
  )
}

export default App;