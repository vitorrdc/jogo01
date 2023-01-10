import style from './dificultyMode.module.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import DificultyCard from './dificultyCard'
import {  useTheme } from './themeContext'

const ThemeSwitcher = () => {
  const theme = useTheme()
  const lightTheme = () => {
    theme.setTheme('light')
  }
  const darkTheme = () => {
    theme.setTheme('dark')
  }
  return (
    <div className={style.switcher}>
    <h6>Tema:</h6>
    <Button onClick={lightTheme} className={style.themeMode}  outline color="primary" size="sm">Light</Button>
    <Button onClick={darkTheme} className={style.themeMode}  outline color="secondary" size="sm">Dark</Button>
    </div>
  )
}

function DificultyMode() {

  const theme = useTheme()
  if (theme.theme === 'dark') {
    return (
      <div className='container'>
      <Link to='/'>
      <div>
        <Button className={style.button} color='secondary'>Voltar</Button>
      </div>    
      </Link>
      <ThemeSwitcher />
        <div className={style.div_img}>
          <h1>Escolha a Dificuldade:</h1>
        </div>
        <div className={style.card_area}>
        <DificultyCard 
          classNameDiv={style.divCircle_Dark}
          classNameCircle={style.circleEasy_Dark}
          levelText={'Fácil'}
          startPracticeText={'Modo para iniciantes.'}
          describeText={'Pra você que está começando, este é o modo indicado, vai por mim!'}
          dificulty='easy_dark'
        />
        <DificultyCard 
          classNameDiv={style.divCircle_Dark}
          classNameCircle={style.circleMedium_Dark}
          levelText={'Intermediário'}
          startPracticeText={'Pra quem já conhece...'}
          describeText={'Se o modo anterior ficou "fácil", vem se testar nesse. Está no caminho certo!'}      
          dificulty='medium_dark'     
          />  
        <DificultyCard 
          classNameDiv={style.divCircle_Dark}
          classNameCircle={style.circleHard_Dark}
          levelText={'Profissional'}
          startPracticeText={'Manda bem nos anteriores? Bora!'}
          describeText={'Esse modo é recomendado para quem já se considera bom nos módulos anteriores. Será que você é capaz? Vem praticar aqui!'}
          dificulty='hard_dark'
          />  
        </div>
      </div>
    )
  }

  return (
      <div className='container'>
      <Link to='/'>
      <div>
        <Button className={style.button} color='secondary'>Voltar</Button>
      </div>    
      </Link>
      <ThemeSwitcher />
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