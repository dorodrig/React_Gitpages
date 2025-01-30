import { useState } from 'react'

import AuthContext from './context/AuthContext'

function App() {
  const [count, setStep] = useState("signup");

  return (
    <AuthContext.Provider value={{step, setStep}}>
      <div className="container_homepage">
       <h1>PRUEBA TECNICA</h1>        
      </div>

    </AuthContext.Provider>
  )
}

export default App
