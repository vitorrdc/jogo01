import { useState, useEffect } from "react";
import style from '../components/game.module.css'
import {Button} from 'reactstrap'
import {Link, useParams} from 'react-router-dom'
import { useTheme } from "./themeContext";

function Game() {
  const [ball, setBall] = useState(gerarCoordenadas())
  const [running, setRunning] = useState(false);
  const [contador, setContador] = useState(0)
  const [temporizer, setTemporizer] = useState(30)
  const [initialTemporazer, setInitialTemporazer] = useState(5)
  const [runningInitialTemporazer, setRunningInitialTemporazer] = useState(false)
  const [finishGame, setFinishGame] = useState(false)
  const [restart, setRestart] = useState(false)
  const {id} = useParams()
  

  function gerarCoordenadas() {
    const x = Math.round(Math.random() * 1100)
    const y = Math.round(Math.random() *600)
    return {
      x,y
    }
  }

  function onClickBall() {
    setBall(gerarCoordenadas())
    setContador(contador + 1)
  }

  function restartGame() {
    setRestart(true)
    setFinishGame(!finishGame)
    setInitialTemporazer(5)
    setTemporizer(30)
    setContador(0)
  }

  useEffect(() => { 
    if(!running) return
     setTimeout(() => {
      if(temporizer > 0) {
      setTemporizer((oldValue) => oldValue - 1)
      } else if (temporizer  === 0 ) {
        setRunning(false)
        setFinishGame(true)
      }
    }, 1000)
  },[running, temporizer])


  useEffect(() => {
    setTimeout(() => {
      if (runningInitialTemporazer && initialTemporazer > 1) {
        setInitialTemporazer((oldValue) => oldValue - 1)
      } else if (initialTemporazer === 1){
        setRunning(true)
        setRunningInitialTemporazer(false)
      }
    },1000)
  },[initialTemporazer, runningInitialTemporazer])

  useEffect(() => {
    if(restartGame(true)) {
    setRunning(!running)
    setRunningInitialTemporazer(!runningInitialTemporazer)
    setFinishGame(!finishGame)
    }
  }, [restart])



  const theme = useTheme()
  if (theme.theme === 'dark') {
    return (
      <div className={style.container_dark}>
    {finishGame && (
      <>
      <div className={style.headertemporizador}>
      <div>
      <div className={style.container}>
      <div className={style.divprincipal}>
        <div className={style.tittle}>
        <h3>FIM DE JOGO!</h3>
        </div>
        <div className={style.pcontainer}>
          <p>Voc?? teve um total de {contador} acertos!</p>
        </div>
        <div className={style.buttondiv}>
          <Button onClick={restartGame} color='primary'>Reiniciar</Button> 
          <Link to='/dificultymode'>
            <Button onClick={restartGame} color='primary'>Escolher dificuldade</Button> 
          </Link>
        </div>
      </div>
    </div>
  </div>      
  </div>
      </>
    )} 
    {!running && !runningInitialTemporazer && !finishGame &&(
      <div>
        <div className={style.container}>
        <div className={style.divprincipal}>
          <div className={style.tittle}>
          <h3>Vai come??ar...</h3>
          </div>
          <div className={style.pcontainer_dark}>
            <p>Ap??s clicar em "Iniciar" ir?? come??ar uma contagem regressiva e estar?? valendo!</p>
          </div>
          <div className={style.buttondiv}>
            <Button onClick={() => setRunningInitialTemporazer(true)} color='success'>Iniciar!</Button> 
          </div>
        </div>
      </div>
    </div>
    )}
    {runningInitialTemporazer && (
      <>
      <div className={style.initialtemporazer}>
        <h1>{initialTemporazer}</h1>
      </div>
    </>
    )} 
    {running && (
      <>
      <div className={style.headertemporizador}>
        <div className={style.temporizador}>
          <h1>{temporizer}</h1>
        </div>
        <div onClick={onClickBall} className={style[id]} style={{left: ball.x, top: ball.y}}></div>
      </div>
    </>
    )} 
    
    </div>
    )
  }
  

  return (
    <div>
    {finishGame && (
      <>
      <div className={style.headertemporizador}>
      <div>
      <div className={style.container}>
      <div className={style.divprincipal}>
        <div className={style.tittle}>
        <h3>FIM DE JOGO!</h3>
        </div>
        <div className={style.pcontainer}>
          <p>Voc?? teve um total de {contador} acertos!</p>
        </div>
        <div className={style.buttondiv}>
          <Button onClick={restartGame} color='primary'>Reiniciar</Button> 
          <Link to='/dificultymode'>
            <Button onClick={restartGame} color='primary'>Escolher dificuldade</Button> 
          </Link>
        </div>
      </div>
    </div>
  </div>      
  </div>
      </>
    )} 
    {!running && !runningInitialTemporazer && !finishGame &&(
      <div>
        <div className={style.container}>
        <div className={style.divprincipal}>
          <div className={style.tittle}>
          <h3>Vai come??ar...{JSON.stringify(theme)}</h3>
          </div>
          <div className={style.pcontainer}>
            <p>Ap??s clicar em "Iniciar" ir?? come??ar uma contagem regressiva e estar?? valendo!</p>
          </div>
          <div className={style.buttondiv}>
            <Button onClick={() => setRunningInitialTemporazer(true)} color='success'>Iniciar!</Button> 
          </div>
        </div>
      </div>
    </div>
    )}
    {runningInitialTemporazer && (
      <>
      <div className={style.initialtemporazer}>
        <h1>{initialTemporazer}</h1>
      </div>
    </>
    )} 
    {running && (
      <>
      <div className={style.headertemporizador}>
        <div className={style.temporizador}>
          <h1>{temporizer}</h1>
        </div>
        <div onClick={onClickBall} className={style[id]} style={{left: ball.x, top: ball.y}}></div>
      </div>
    </>
    )} 
    
    </div>
  );
}

export default Game;