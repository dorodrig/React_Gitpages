import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePages = ()=>{

    let {setStep}= useContext(AuthContext);
    let lista = ''
    return(
        <>
        <main>
         <h3>Prueba tecnica Corferias</h3>
         <fieldset>
            <label htmlFor="Select">Seleccione por Favor el concepto a Evaluar</label>
            <ol className="Lista_conceptos" value={lista} >
                <li>Suma de Números Pares</li>
                <li>Contador de Vocales</li>
                <li>Eliminar Duplicados</li>
                <li>Ordenar por Longitud</li>
                <li>Contar Palabras</li>
                <li>Comprobar Número Primo</li>
                <li>Generar Números Primos</li>
                <li>Ordenar Números Primos</li>
            </ol>
            <button type="submit" onClick={setStep({lista})}> Verificar</button>
         </fieldset>

        </main>
        </>

    )
}
export default HomePages;