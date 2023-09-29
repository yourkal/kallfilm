import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
const Intro = () => {
  return (
    <div className=' intro'>
        <Container className='text-white d-flex text-center justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title'>Nonton GRATIS</div>
            <div className='title'>Gak Pake KARCIS</div>
            <div className='introButton mt-4 text-center'>
                <Button variant='dark'>Tonton Semua Film</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Intro
