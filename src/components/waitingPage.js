import style from '../components/waitingPage.module.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

function WaitingPage() {
  return (
    <div className={style.container}>
      <div className={style.divprincipal}>
        <div className={style.tittle}>
         <h3>Vai começar...</h3>
        </div>
        <div className={style.pcontainer}>
          <p>Após clicar em "iniciar" irá começar uma contagem regressiva e estará valendo!</p>
        </div>
        <div className={style.buttondiv}>
        <Link to='/game01'>
          <Button color='primary'>Iniciar!</Button>
        </Link>  
        </div>
      </div>
    </div>
  )
}

export default WaitingPage;