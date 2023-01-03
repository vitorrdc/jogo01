import style from './dificultyMode.module.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import DificultyCard from './dificultyCard'

function DificultyMode() {
  
  return (
    <div className='container'>
    <Link to='/'>
      <Button className={style.button} color='secondary'>Voltar</Button>
    </Link>
      <div className={style.div_img}>
        <h1>Escolha a Dificuldade:</h1>
      </div>
      <div className={style.card_area}>
      <DificultyCard
        classNameDiv={style.divCircle}
        classNameCircle={style.circleEasy}
        levelText={'Fácil'}
        startPracticeText={'Modo para iniciantes.'}
        describeText={'Pra você que está começando, este é o modo indicado, vai por mim!'}
        dificulty='easy'
      />
      <DificultyCard 
        classNameDiv={style.divCircle}
        classNameCircle={style.circleMedium}
        levelText={'Intermediário'}
        startPracticeText={'Pra quem já conhece...'}
        describeText={'Se o modo anterior ficou "fácil", vem se testar nesse. Está no caminho certo!'}      
        dificulty='medium'     
        />  
      <DificultyCard 
        classNameDiv={style.divCircle}
        classNameCircle={style.circleHard}
        levelText={'Profissional'}
        startPracticeText={'Manda bem nos anteriores? Bora!'}
        describeText={'Esse modo é recomendado para quem já se considera bom nos módulos anteriores. Será que você é capaz? Vem praticar aqui!'}
        dificulty='hard'
        />  
      </div>
    </div>
  )
}

export default DificultyMode;