import React from 'react';
import Select from 'react-select';
import { Row, Col, Card, Form, Container, Button, FormGroup, Control, Input, CardBody } from 'reactstrap';

// components

const Company = () => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <h5>Nome:</h5>
                    <FormGroup as={Row} className="mb-3">
                        <Col lg={10}>
                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." />
                        </Col>
                    </FormGroup>

                    <h5>Fuso horário</h5>
                    <Col lg={10}>
                        <Select
                            className="react-select react-select-container"
                            classNamePrefix="react-select"
                            options={[
                                { value: 'america', label: 'América/SP' },
                                { value: 'utc', label: 'UTC' },
                                { value: 'africa', label: 'Africa/Accra' },
                            ]}></Select>
                    </Col>
                    <br></br>
                    <Button className="btn btn-success" style={{ width: '100px' }}>
                        Atualizar
                    </Button>
                    <br></br>
                    <br></br>
                    <Container>
                        <Row>
                            <h5>Zerar Companhia/Audiência:</h5>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignContent: 'stretch',
                                    alignItems: 'center',
                                }}>
                                <Button className="btn btn-secondary" style={{ width: '250px' }}>
                                    Zerar Contatos da Audiência
                                </Button>
                                <span
                                    style={{
                                        margin: '0 15px',
                                        fontSize: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        width: '60%',
                                        alignItems: 'center',
                                        color: '#9e9e9e',
                                    }}>
                                    Aviso! Deletar todos os contatos da audiência e estatísticas de interações.
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignContent: 'stretch',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                }}>
                                <Button className="btn btn-secondary" style={{ width: '250px' }}>
                                    Zerar Companhia
                                </Button>
                                <span
                                    style={{
                                        margin: '0 15px',
                                        fontSize: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        width: '60%',
                                        alignItems: 'center',
                                        color: '#9e9e9e',
                                    }}>
                                    Aviso! Restaurar companhia ao estado original, completamente vazia, sem fluxos, sem
                                    audiência... nada.
                                </span>
                            </div>
                        </Row>
                    </Container>
                </Col>
                <Col md={4} style={{ marginLeft: '200px' }}>
                    <>
                        <h5>Logotipo:</h5>
                        <Row>
                            <Col xs={10}>
                                <Card>
                                    <CardBody></CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </>
                </Col>
            </Row>
        </>
    );
};

export default Company;
