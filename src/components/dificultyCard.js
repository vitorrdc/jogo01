import { useNavigate } from 'react-router-dom'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import style from '../components/dificultyCard.module.css'


function DificultyCard({dificulty, levelText, startPracticeText, describeText, classNameDiv, classNameCircle}) {
  const navigate = useNavigate()

  function handleSelectDificulty() {
    navigate(`/gameeasy/${dificulty}`)
  }
  return (
    <Card style={{width: '18rem'}}>
          <div className={classNameDiv}><div className={classNameCircle}/></div>
            <CardBody>
              <CardTitle tag="h5">
                {levelText}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {startPracticeText}
              </CardSubtitle>
              <CardText>
                {describeText}
              </CardText>
                <Button onClick={handleSelectDificulty} color='success'>Jogar</Button>
            </CardBody>
        </Card>
  )
}
export default DificultyCard;