import React from "react"
import { Row, Col, Card, Form, Container, Button, Dropdown } from 'reactstrap';
import Select from 'react-select';

const Logs = () => {
    return (
        <>
            <Row className="mb-5">
                <Col lg={2}>
                    <Select
                    className="react-select react-select-container"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'todos', label: 'Todos' },
                        { value: 'erro', label: 'Erro' },
                        { value: 'sucesso', label: 'Sucesso' },
                    ]}></Select>
                </Col>
                <div className="list-inline text-center mb-0" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h4 style={{alignItems: "center"}}>Tudo bem por aqui! Nada de erro, nem avisos!</h4>
                </div>
                
            </Row>
        </>
    )
}

export default Logs;