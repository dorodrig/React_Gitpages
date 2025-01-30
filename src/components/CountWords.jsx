import React, { useState } from "react";
// Componente para contar palabras
const CountWords = ({ text }) => {
    const wordCount = text.trim().split(/\s+/).length;
    return <div>Número de palabras: {wordCount}</div>;
};
  