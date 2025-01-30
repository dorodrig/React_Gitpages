import { useState } from "react";
import SumEvenNumbers from "./SumEvenNumbers";
import CountVowels from "./CountVowels";
import RemoveDuplicates from "./RemoveDuplicates";
import SortByLength from "./SortByLength";
import CountWords from "./CountWords";
import IsPrime from "./IsPrime";
import SortPrimeNumbers from "./SortPrimeNumbers";

const HomePages = () => {
  const [selectedConcept, setSelectedConcept] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleSelect = (concept) => {
    setSelectedConcept(concept);
    setResult(null);
  };

  const handleVerify = () => {
    switch (selectedConcept) {
      case "Suma de Números Pares":
        setResult(<SumEvenNumbers limit={parseInt(inputValue, 10)} />);
        break;
      case "Contador de Vocales":
        setResult(<CountVowels text={inputValue} />);
        break;
      case "Eliminar Duplicados":
        setResult(
          <RemoveDuplicates array={inputValue.split(",").map((item) => item.trim())} />
        );
        break;
      case "Ordenar por Longitud":
        setResult(<SortByLength words={inputValue.split(",")} />);
        break;
      case "Contar Palabras":
        setResult(<CountWords text={inputValue} />);
        break;
      case "Comprobar Número Primo":
        setResult(<IsPrime number={parseInt(inputValue, 10)} />);
        break;
      case "Ordenar Números Primos":
        setResult(
          <SortPrimeNumbers primes={inputValue.split(",").map(Number)} />
        );
        break;
      default:
        setResult("Seleccione un concepto válido");
    }
  };

  return (
    <main>
      <h3>Prueba técnica Corferias</h3>
      <fieldset>
        <label htmlFor="Select">Seleccione el concepto a Evaluar</label>
        <ol className="Lista_conceptos">
          {["Suma de Números Pares", "Contador de Vocales", "Eliminar Duplicados", "Ordenar por Longitud", "Contar Palabras", "Comprobar Número Primo", "Ordenar Números Primos"].map((concept, index) => (
            <li key={index} onClick={() => handleSelect(concept)} style={{ cursor: "pointer" }}>
              {concept}
            </li>
          ))}
        </ol>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese el valor requerido"
        />
        <button type="button" onClick={handleVerify}>Verificar</button>
      </fieldset>
      <div>{result}</div>
    </main>
  );
};

export default HomePages;
