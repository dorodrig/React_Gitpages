import React, { useState } from "react";
// Componente para eliminar duplicados
const RemoveDuplicates = ({ array }) => {
    const uniqueArray = [...new Set(array)];
    return <div>Sin duplicados: {JSON.stringify(uniqueArray)}</div>;
  };