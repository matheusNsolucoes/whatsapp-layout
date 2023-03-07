import React from "react"
import Select from 'react-select';
import { Row, Col, Card, Form, Button, Dropdown, ButtonGroup, DropdownButton } from 'reactstrap';

const AutoMsg = () => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <Row><h5>Boas Vindas:</h5></Row>
                    <Select
                        className="react-select react-select-container"
                        classNamePrefix="react-select"
                        options={[
                            { value: 'acumulo rj', label: 'Acúmulo RJ' },
                            { value: 'retorno', label: 'Retorno' },
                            { value: 'teste fluxo aula', label: 'Teste Fluxo Aula' },
                            { value: 'esquenta chip 1', label: 'Esquenta Chip 1' },
                            { value: 'pedidos agendados', label: 'Pedidos Agendados' },
                            { value: 'random inicio', label: 'Ramdom Inicio' },
                            { value: 'esquenta chip 2', label: 'Esquenta Chip 2' },
                        ]}></Select>
                    <br></br>
                    <h5>Resposta Padrão:</h5>
                    <Select
                        className="react-select react-select-container"
                        classNamePrefix="react-select"
                        options={[
                            { value: 'acumulo rj', label: 'Acúmulo RJ' },
                            { value: 'retorno', label: 'Retorno' },
                            { value: 'teste fluxo aula', label: 'Teste Fluxo Aula' },
                            { value: 'esquenta chip 1', label: 'Esquenta Chip 1' },
                            { value: 'pedidos agendados', label: 'Pedidos Agendados' },
                            { value: 'random inicio', label: 'Ramdom Inicio' },
                            { value: 'esquenta chip 2', label: 'Esquenta Chip 2' },
                        ]}></Select>
                    <br></br>
                    <h5>Fluxo Padrão Para Mídia:</h5>
                    <Select
                        className="react-select react-select-container"
                        classNamePrefix="react-select"
                        options={[
                            { value: 'acumulo rj', label: 'Acúmulo RJ' },
                            { value: 'retorno', label: 'Retorno' },
                            { value: 'teste fluxo aula', label: 'Teste Fluxo Aula' },
                            { value: 'esquenta chip 1', label: 'Esquenta Chip 1' },
                            { value: 'pedidos agendados', label: 'Pedidos Agendados' },
                            { value: 'random inicio', label: 'Ramdom Inicio' },
                            { value: 'esquenta chip 2', label: 'Esquenta Chip 2' },
                        ]}></Select>
                </Col>
                <Col md={4} style={{marginLeft: "200px"}}>
                    <h5> Horário de atendimento</h5>
                    <p>Segunda-feira <b>20:30</b> - <b>20:30</b></p>
                    <p>Terça-feira <b>20:30</b> - <b>20:30</b></p>
                    <p>Quarta-feira <b>20:30</b> - <b>20:30</b></p>
                    <p>Quinta-feira <b>20:30</b> - <b>20:30</b></p>
                    <p>Sexta-feira <b>20:30</b> - <b>20:30</b></p>
                    <p>Sábado <b>20:30</b> - <b>20:30</b></p>
                    <p>Domingo <b>20:30</b> - <b>20:30</b></p>
                    <br></br>
                    <h5>Texto a cada 3 botões:</h5>
                    <div style={{display: "flex", position: "relative"}}>
                        <Form.Group as={Row}>
                            <Row md={12}>
                                <ul>
                                    <Button className="btn btn-light">
                                        <i className="uil-bold"></i>
                                    </Button>
                                    <Button className="btn btn-light">
                                        <i className=" uil-italic"></i>
                                    </Button>
                                    <Button className="btn btn-light">
                                    <i className="bi-type-strikethrough"></i>
                                    </Button>
                                    <ButtonGroup>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" className="cursor-pointer">
                                                Selecione <i className="uil-arrow-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Primeiro Nome</Dropdown.Item>
                                                <Dropdown.Item href="#">Sobrenome</Dropdown.Item>
                                                <Dropdown.Item href="#">Nome completo</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                </ul>
                            </Row>
                            <Col lg={10}>
                                <Form.Control as="textarea" rows={5} id="example-textarea" />
                            </Col>
                        </Form.Group>
                    </div>

                </Col>
            </Row>

        </>
    )
}

export default AutoMsg;