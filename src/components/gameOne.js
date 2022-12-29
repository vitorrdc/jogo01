import { useState, useEffect } from "react";
import style from '../components/gameOne.module.css'
import {Button} from 'reactstrap'

function GameOne() {
  const [ball, setBall] = useState(gerarCoordenadas())
  const [running, setRunning] = useState(false);
  const [contador, setContador] = useState(0)
  const [temporizer, setTemporizer] = useState(3)
  const [initialTemporazer, setInitialTemporazer] = useState(5)
  const [runningInitialTemporazer, setRunningInitialTemporazer] = useState(false)

  function gerarCoordenadas() {
    const x = Math.round(Math.random() * 700)
    const y = Math.round(Math.random() *600)
    return {
      x,y
    }
  }

  function onClickBall() {
    setBall(gerarCoordenadas())
    setContador(contador + 1)
  }

  useEffect(() => { 
    if(!running) return
     setTimeout(() => {
      if(temporizer > 0) {
      setTemporizer((oldValue) => oldValue - 1)
      } else if (temporizer  === 0 ) {
        setRunning(false)
        window.alert(`você teve ${contador} acertos`)
      }
    }, 1000)
  },[running, temporizer])

  console.log(contador)

  useEffect(() => {
    setTimeout(() => {
      if (runningInitialTemporazer && initialTemporazer > 0) {
        setInitialTemporazer((oldValue) => oldValue - 1)
      } else if (initialTemporazer === 0){
        setRunning(true)
        setRunningInitialTemporazer(false)
      }
    },1000)
  },[initialTemporazer, runningInitialTemporazer])

  return (
    <div>
    {!running && !runningInitialTemporazer &&(
      <div>
        <div className={style.container}>
        <div className={style.divprincipal}>
          <div className={style.tittle}>
          <h3>Vai começar...</h3>
          </div>
          <div className={style.pcontainer}>
            <p>Após clicar em "iniciar" irá começar uma contagem regressiva e estará valendo!</p>
          </div>
          <div className={style.buttondiv}>
            <Button onClick={() => setRunningInitialTemporazer(true)} color='primary'>Iniciar!</Button> 
          </div>
        </div>
      </div>
    </div>
    )}
    {runningInitialTemporazer && (
      <>
      <div className={style.headertemporizador}>
        <div>{initialTemporazer}</div>
      </div>
    </>
    )} 
    {running && (
      <>
      <div className={style.headertemporizador}>
        <div className={style.temporizador}>
          <h1>{temporizer}</h1>
        </div>
        <div onClick={onClickBall} className={style.ball} style={{left: ball.x, top: ball.y}}></div>
      </div>
    </>
    )} 
    </div>
  );
}

export default GameOne;