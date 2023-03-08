import React from 'react';
import { Card, Row, Col, Button, Table, Form, Input, CardBody } from 'reactstrap';

// types
const Tasks = ({ tasks }) => {
    return (
        <>
            <Row>
                <div>
                    <div className="grid text-end">
                        <Button variant="success" className="btn btn-lg" style={{ width: "100px"}}> + </Button>
                    </div>
                    <Input type="checkbox" id="checkmeout" label="Mostrar o nome do admin (atendente) nas mensagens enviadas pelo Bate Papo?"/>
                    
                </div>
            </Row>
            
            <br></br>
            <ul className="list-unstyled">
                <Card>
                <CardBody>
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                            <th scope="row">Nome</th>
                                <th className="grid text-center">Painel de Controle</th>
                                <th className="grid text-center">Audiência</th>
                                <th className="grid text-center">Campanhas</th>
                                <th className="grid text-center">Transmissão</th>
                                <th className="grid text-center">Automação</th>
                                <th className="grid text-center">Fluxos de conversa</th>
                                <th className="grid text-center">Configurações</th>
                                <th className="grid text-center">Bate-papo ao vivo</th>
                                <th className="grid text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Marcos Santos</th>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md">
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md">
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Geovana Venâncio Freitas</th>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md">
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md">
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Logzz - Nilton</th>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <Input aria-label="option 1" />
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md">
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <li className="list-inline-item pe-1">
                                        <Input aria-label="option 1"/>
                                        <Button className="btn btn-light btn-md" style={{display: "inline-block"}}>
                                            <i className="bi-sliders"></i>
                                        </Button>
                                    </li>
                                </td>
                                <td className="grid text-center">
                                    <Button className='btn btn-light btn-md'>
                                        <i className="uil-trash-alt"></i>
                                    </Button>
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

export default Tasks;
