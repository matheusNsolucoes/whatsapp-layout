import React from 'react';
import { Button, Card, Table, Row, Form, Col } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// types
const Projects = ({ projects }) => {
    return (
        <>
            <div className="grid text-end">
                <Button variant="success" className="btn btn-lg" style={{ width: "100px",  justifyContent: "space-around", alignItems: "center"}}> <i className="uil uil-plus"></i> </Button>
            </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">01/12</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">01/13</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">02/12</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">24/11_GeralDepi</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">27/11/2022</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">29/11</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2_por_R$199,90</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2xreag</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">30/11</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">30/12</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">30/13</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled />
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">método_de_pgto</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">motivo_cancelamento</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">pedido foi entregue?</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_amarela</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_azul</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_depilatta</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Qtd_parcelas</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Resposta_recuperação</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">tamanho_blusa</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
                                        <Button className='btn btn-light btn-md'>
                                            <i className="uil-trash-alt"></i>
                                        </Button>
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">tamanho_cinta</th>
                                <td>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Form.Control type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </Form.Group>
                                </td>
                                <td>
                                    <li className="list-inline-item pe-1">
                                        <Button className="btn btn-light btn-md">
                                            <i className="uil uil-edit"></i>
                                        </Button>
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

export default Projects;
