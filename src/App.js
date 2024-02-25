
import './App.css';
import SecondsCounter from './components/SecondsCounter';
import React, { useState, useEffect } from 'react';



function ContadorSeg(Contador,divisor){
  return Math.floor(Contador/divisor)%10

}

function App() {
  const [counter,setCounter]=useState(0);

  useEffect(()=>{
      const Intervalo= setInterval(()=>{
          setCounter(counter=>counter+1)
      },1000)
      return ()=>clearInterval(Intervalo)
  })
  
  return (
    <div className="App">
      <body>
      <SecondsCounter seconds= {ContadorSeg(counter,1)} TenUnit={ContadorSeg(counter,10)} HundredUnit={ContadorSeg(counter,100)} ThousandUnit={ContadorSeg(counter,1000)} TenThousandUnit={ContadorSeg(counter,10000)} HundredThousandUnit={ContadorSeg(counter,100000)}></SecondsCounter>
      </body>
    </div>
  );
}

export default App; 
