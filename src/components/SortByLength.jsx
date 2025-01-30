import React, { useState } from "react";
// Componente para ordenar por longitud
const SortByLength = ({ words }) => {
  const sortedWords = [...words].sort((a, b) => a.length - b.length);
  return <div>Ordenadas por longitud: {JSON.stringify(sortedWords)}</div>;
};
export default SortByLength