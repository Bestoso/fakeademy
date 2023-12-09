import { useEffect } from "react";
import { RoutesComponent } from "./components/RoutesComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initMercadoPago } from '@mercadopago/sdk-react';

function App (){

  useEffect(() => {
    initMercadoPago('APP_USR-f4ee0560-b1b6-433b-80f8-397a12d4d84b');
  }, []);

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