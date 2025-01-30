import { useState } from 'react'

import AuthContext from './context/AuthContext'
import HomePages from './components/HomePages'

function App() {
  const [step, setStep] = useState("home");

  return (
    <AuthContext.Provider value = {{step, setStep}}>
      <div className="container">
        <div className="container_homepage">
        <img src="https://corferias.com/img/logo.svg" alt="Logo_C" />   
        <h1>Explorando tus conocimientos en Javascript</h1>     
        </div>
        <div className="container_State">
        {step === "home" && <HomePages/>}      
        </div>
      </div>
    </AuthContext.Provider>
  )
}
export default App
