import React from 'react';
import classNames from 'classnames';
import { Card, Table, Form, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// types
import { FileItemTypes } from './data';

const Files = ({ files }) => {
    return (
        <>
            <div className="grid text-end">
                <Button variant="success" className="btn btn-lg" style={{ width: "100px"}}> + </Button>
            </div>
            <br></br>
            <ul className="list-unstyled">
                <Card>
                <Card.Body>
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                                <th scope="row">Nome</th>
                                <th>Resposta Rápida</th>
                                <th></th>
                            </tr>
                        </thead>
                    </Table>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Sem dados
                    </div>
                </Card.Body>
            </Card>
            </ul>
        </>
    );
};

export default Files;
