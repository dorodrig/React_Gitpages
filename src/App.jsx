import { useState } from 'react'

import AuthContext from './context/AuthContext'

function App() {
  const [step, setStep] = useState("home_pages");

  return (
    <AuthContext.Provider value={{step, setStep}}>
      <div className="container_homepage">
       <h1>PRUEBA TECNICA</h1>        
      </div>

    </AuthContext.Provider>
  )
}

export default App
