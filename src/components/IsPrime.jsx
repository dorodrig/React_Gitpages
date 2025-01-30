import React, { useState } from "react";
// Componente para comprobar si un número es primo
const IsPrime = ({ number }) => {
    const isPrime = (n) => {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
      return true;
    };
    return <div>{number} {isPrime(number) ? "es primo" : "no es primo"}</div>;
  };
  export default IsPrime