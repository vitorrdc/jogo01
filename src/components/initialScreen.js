import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import alvopic from '../images/alvopic.png'
import style from '../components/initialScreen.module.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'
import {useState} from 'react';

function InitialScreen() {

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
    <div className='container'>
      <h1 className='text-center'>Bem-vindo(a) ao ShotGame!</h1>
      <div className={style.imgcontainer}>
        <img className={style.imgbeggin} width='400px' src={alvopic} alt="foto_alvo" />
        <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sobre o ShotGame:</ModalHeader>
        <ModalBody>
          ShotGame é um jogo de 2 dimensões, desenvolvido à titulo de estudo e composição de portifólio utilizando ReactJs e FrameworkCSS (Bootstrap). Este jogo simula uma prática de jogos de FPS.
          <br />
          <Button color="success" onClick={toggleNested}>
            Objetivo
          </Button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Como jogar:</ModalHeader>
            <ModalBody>
             Quanto <strong>mais</strong> "bolinhas" acertar, <strong>melhor.</strong> Elas irão aparecer de modo aleatório na tela, portanto, seja <strong>ágil</strong> e acerte-as com <strong>precisão.</strong>
            
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Entendi!
              </Button>{' '}
              <Button color="secondary" onClick={toggleAll}>
                Fechar tudo
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
        <Link to="/dificultymode">
          <Button color="primary" onClick={toggle}>
            Escolher dificuldade
          </Button>{' '}
        </Link>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
      </div>
    </div>
      <Button className={style.button} color="primary" onClick={toggle}>
        Avançar
      </Button>
    </div>
  )
}

export default InitialScreen;