import React, { useState } from "react";
// Componente para ordenar números primos
const SortPrimeNumbers = ({ primes }) => {
    const sortedPrimes = [...primes].sort((a, b) => a - b);
    return <div>Números primos ordenados: {JSON.stringify(sortedPrimes)}</div>;
  };
  export default SortPrimeNumbers