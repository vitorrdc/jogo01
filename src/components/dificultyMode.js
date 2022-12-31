import style from './dificultyMode.module.css'
import iniciante from '../images/iniciante.png'
import facil from '../images/facil.png'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import testedificil from '../images/testedificil.png'

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
      <Card style={{width: '18rem'}}>
          <img  alt="Sample" src={facil}/>
            <CardBody>
              <CardTitle tag="h5">
                Fácil
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Comece a praticar!
              </CardSubtitle>
              <CardText>
                Pra você que está começando, este é o modo indicado, vai por mim!
              </CardText>
              <Link to='/gameeasy'>
                <Button color='success'>Jogar!</Button>
              </Link>
            </CardBody>
        </Card>
        <Card style={{width: '18rem'}}>
          <img  alt="Sample" src={iniciante}/>
            <CardBody>
              <CardTitle tag="h5">
                Intermediário
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Pra quem já conhece...
              </CardSubtitle>
              <CardText>
                Se o modo anterior ficou "fácil", vem se testar nesse. Está no caminho certo!
              </CardText>
              <Link to='/gameMedium'>
                <Button color='success'>Jogar!</Button>
              </Link>
            </CardBody>
        </Card>
        <Card style={{width: '18rem'}}>
          <img  alt="Sample" width='25px' className={style.imgdificil} src={testedificil}/>
            <CardBody>
              <CardTitle tag="h5">
                Profissional
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Já domina modos anteriores!
              </CardSubtitle>
              <CardText>
                Esse é o modo que é recomendado para quem já praticou nos anteriores, e já manda bem nos games FPS. Será que você é capaz? Vem praticar aqui!
              </CardText>
              <Link to='/gamehard'>
                <Button color='success'>
                  Jogar!
                </Button>
              </Link>
            </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default DificultyMode;