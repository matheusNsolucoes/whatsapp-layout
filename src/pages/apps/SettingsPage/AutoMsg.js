import React from "react"
import Select from 'react-select';
import { Row, Col, Card, Form, Input, Button, Dropdown, ButtonGroup, DropdownButton, DropdownToggle, DropdownMenu, DropdownItem, FormGroup } from 'reactstrap';

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
                        <FormGroup as={Row}>
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
                                            <DropdownToggle variant="light" className="cursor-pointer">
                                                Selecione <i className="uil-arrow-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Primeiro Nome</DropdownItem>
                                                <DropdownItem href="#">Sobrenome</DropdownItem>
                                                <DropdownItem href="#">Nome completo</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </ButtonGroup>
                                </ul>
                            </Row>
                            <Col lg={10}>
                                <Input as="textarea" rows={5} id="example-textarea" />
                            </Col>
                        </FormGroup>
                    </div>

                </Col>
            </Row>

        </>
    )
}

export default AutoMsg;