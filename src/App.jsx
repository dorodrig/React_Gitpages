import { useState } from 'react'

import AuthContext from './context/AuthContext'
import HomePages from './components/HomePages'


function App() {
  const [step, setStep] = useState("home");

  return (
    <AuthContext.Provider value = {{step, setStep}}>
      <div className="container">
        <div className="container_homepage">
       <img className='img_log' src="https://usantotomas.edu.co/hs-fs/hubfs/Logo%20Santoto%20-%20SP%20Bogota%20Horizontal%20blanco.png?width=188&height=43&name=Logo%20Santoto%20-%20SP%20Bogota%20Horizontal%20blanco.png"/>
        <h1>Universidad Santo Tomás</h1>     
        </div>
        <div className="container_State">
        {step === "home" && <HomePages/>}      
        </div>
      </div>
    </AuthContext.Provider>
  )
}
export default App
