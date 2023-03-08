import React from "react"
import { Row, Col, Card, Form, Container, Button, Dropdown } from 'reactstrap';

const Bills = () => {
    return (
        <>
            <Row>
                <Col>
                    <p>Sua assinatura termina em: <b>Tue, May 30 2023, 9:00 PM</b></p>
                </Col>
                <br></br>
                <p>Seu plano: <b>Starter</b></p>
                <Row>
                    <Button className="btn btn-success" style={{width: "200px", margin: "0 15px"}}>
                        Comprar Plano Pro
                    </Button>
                    <Button className="btn btn-success" style={{width: "200px"}}>
                        Comprar Plano Starter
                    </Button>
                </Row>
            </Row>
        </>
    )
}

export default Bills;