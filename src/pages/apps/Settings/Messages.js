import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Card, Table, Form, Row, Col } from 'reactstrap';

const Messages = ({ messages }) => {
    return (
        <>
            <Row>
                <div className="grid text-right">
                    <Button variant="secondary" className="btn btn-md" style={{borderRadius: "6px 0 0 6px", padding: "12px 28px"}}> Campos do Usuário </Button>
                    <Button variant="secondary" className="btn btn-md" style={{borderRadius: "0 6px 6px 0", padding: "12px 28px"}}> Campos do Robô </Button>
                </div>
                <div className="grid text-end">
                    <Button variant="success" className="g-col-4 btn-lg" style={{ width: "100px", justifyContent: "space-around", alignItems: "center"}}> <i className="uil uil-plus"></i> </Button>
                </div>
            </Row>
            <br></br>
            <ul className="list-unstyled">
                <Card>
                <Card.Body>
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                                <th scope="row">Nome</th>
                                <th>Descrição</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">ajuda_cliente</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">cidade_cliente</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">cor_blusa</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">data_pedido</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">data_reagendamento</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">data_retorno</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">dia_da_semana</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">dúvida</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">dúvida_cliente</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">endereço_cliente</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">horário_recebido</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">método_de_pgto</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">motivo_cancelamento</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">pedido foi entregue?</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_amarela</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_azul</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_depilatta</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_parcelas</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Resposta_recuperação</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">tamanho_blusa</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">tamanho_cinta</th>
                                <td>Texto</td>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </ul>
        </>
    );
};

export default Messages;
