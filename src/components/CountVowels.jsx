import React, { useState } from "react";
// Componente para contar vocales
const CountVowels = ({ text }) => {
    const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
    return <div>Vocales en "{text}": {countVowels(text)}</div>;
};
export default CountVowels