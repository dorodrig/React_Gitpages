import React, { useState } from "react";
// Componente para sumar números pares
const SumEvenNumbers = ({ limit }) => {
    const sumEven = (n) => {
      let sum = 0;
      for (let i = 2; i <= n; i += 2) sum += i;
      return sum;
    };
    return <div>Suma de pares hasta {limit}: {sumEven(limit)}</div>;
  };
  export default SumEvenNumbers