import { useState } from "react";
import HomeDireccion from "../components/Components_Q/HomeDirecion";
import HomeEstructura from "../components/Components_Q/HomeEstructura";
import HomeHistorico from "../components/Components_Q/HomeHistorico";
import HomeMision from "../components/Components_Q/HomeMision";
import HomeVision from "../components/Components_Q/HomeVision";
import HomeAnalisis  from "./Components_P/HomeAnalisis";  
import HomeSol from "./Components_P/HomeSol";
import HomeArt from "./Components_P/HomeArt";
import HomePosgrado from "./Componentes_OA/HomePosgrado"
import HomePregrado from "./Componentes_OA/HomePregado"
import Homecontinua from "./Componentes_OA/HomeContinua"

const HomePages = () => {
  const [selectedConcept, setSelectedConcept] = useState("");

  // Función para manejar el cambio en el select
  const handleSelectChange = (event) => {
    setSelectedConcept(event.target.value);
  };

  // Función que devuelve el componente correspondiente
  const renderComponent = () => {
    switch (selectedConcept) {
      case "direccion":
        return <HomeDireccion />;
      case "historia":
        return <HomeHistorico />;
      case "mision":
        return <HomeMision />;
      case "vision":
        return <HomeVision />;
      case "estructura":
        return <HomeEstructura />;
      case  "analisis":
        return <HomeAnalisis/>;
      case "sol":
        return <HomeSol/>;
      case "arte":
      return <HomeArt/>
      case "pos":
        return <HomePosgrado/>
      case "pre":
        return <HomePregrado/>
        case "con":
          return <Homecontinua/>
      default:
        return <p>Seleccione una opción para ver el contenido.</p>;
    }
  };

  return (
    <main>
      <h3>Prueba técnica Universidad Santo Tomás</h3>
      <div className="container_menu">
        <div className="menu_1">
          <select id="framework_1" onChange={handleSelectChange}>
            <option value="">¿Quiénes somos?</option>
            <option value="direccion">Docentes de la Dirección</option>
            <option value="historia">Presentación / Reseña Histórica</option>
            <option value="mision">Misión</option>
            <option value="vision">Visión</option>
            <option value="estructura">Estructura Orgánica</option>
          </select>
        </div>
        <div className="menu_2">
          <select id="framework_2" onChange={handleSelectChange}>
            <option value="">¿Qué publicamos?</option>
            <option value="analisis">Revista Análisis</option>
            <option value="sol">Revista Sol de Aquino</option>
            <option value="arte">Revista Arte-Facto</option>
          </select>
        </div>
        <div className="menu_3">
          <select id="framework_3" onChange={handleSelectChange}>
            <option value="">Nuestra Oferta Académica</option>
            <option value="pre">Pregrado</option>
            <option value="pos">Posgrado</option>
            <option value="con">Educación Continua</option>
          </select>
        </div>
      </div>
          <div className="SalidaState">
            {renderComponent()}
          </div>
          {/* <div className='Containercerrar'>
              <footer className='footer'>
                REDES SOCIALES
              </footer>
          </div> */}
    </main>
  );
};

export default HomePages;
