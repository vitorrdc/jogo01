import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

function DificultyCard({style, alt, src, tag, className, tagtwo, to, color, }) {
  <Card style={{style}}>
          <img  alt={alt} src={src}/>
            <CardBody>
              <CardTitle tag={tag}>
                Iniciante
              </CardTitle>
              <CardSubtitle className={className} tag={tagtwo}>
                Para aprender
              </CardSubtitle>
              <CardText>
                Essa é a melhor pra você que está começando, vai por mim! A "bolinha" tem um tamanho maior, o que facilita o acerto.
              </CardText>
                <Link to={to}>
                  <Button color={color}>Jogar!</Button>
               </Link>
            </CardBody>
        </Card>
} 
export default DificultyCard;