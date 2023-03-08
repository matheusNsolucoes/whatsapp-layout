import React from 'react';
import { Button, Card, Table, Row, Form, Col, CardBody, FormGroup, Input } from 'reactstrap';
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
                <CardBody>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled />
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled />
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup as={Row} className="mb-3">
                                        <Col lg={10}>
                                            <Input type="text" id="simpleinput" placeholder="Digite aqui..." disabled/>
                                        </Col>
                                    </FormGroup>
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
                </CardBody>
            </Card>
            </ul>
        </>
    );
};

export default Projects;
