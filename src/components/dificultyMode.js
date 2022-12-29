import style from './dificultyMode.module.css'
import iniciante from '../images/iniciante.png'
import intermediario from '../images/intermediario.png'
import facil from '../images/facil.png'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

function DificultyMode() {
  return (
    <div className='container bg-light'>
      <div className={style.div_img}>
        <h1>Escolha a Dificuldade:</h1>
      </div>
      <div className={style.card_area}>
      <Card style={{width: '18rem'}}>
          <img  alt="Sample" src={facil}/>
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
              <Link to='/waitingpage'><Button color='success'>Jogar!</Button></Link>
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
              <Button color='success'>
                Jogar!
              </Button>
            </CardBody>
        </Card>
        <Card style={{width: '18rem'}}>
          <img  alt="Sample" src={intermediario}/>
            <CardBody>
              <CardTitle tag="h5">
                Profissional
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Já domina modos anteriores
              </CardSubtitle>
              <CardText>
                Esse é o modo que é recomendado para quem já praticou nos anteriores, e já manda bem nos games FPS. Vem praticar aqui!
              </CardText>
              <Button color='success'>
                Jogar!
              </Button>
            </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default DificultyMode;