import React from 'react';
import { Container, Table, TableRow, EmptyTableRow, TableHeader, Rows, IconsGroup, Middle } from './styles';
import { Col, Row } from 'reactstrap';
import PageTitle from '../../../components/PageTitle';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

function Transmission() {
    return (
        <Container>
            <Row className="page-title">
                <Col className="col-12">
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/transmission' },
                            { label: 'Transmissão', path: '/apps/transmission', active: true },
                        ]}
                        title={'Transmissão'}
                    />
                </Col>
            </Row>
            <hr />
            <Table>
                {/* <TableHeader>
                    <Row style={{ paddingLeft: '10px' }}>Nome</Row>
                    <Middle>
                        <Col md={4}>Robô</Col>
                        <Col>Enviado</Col>
                    </Middle>
                    <p>Controles</p>
                </TableHeader> */}
                <Rows>
                    <EmptyTableRow>
                        <p>Sem Dados</p>
                    </EmptyTableRow>
                    <TableRow>
                        <p>Jorge</p>
                        <Middle>
                            <p>Pedidos agendados - Nova york</p>
                            <p>0/5242</p>
                        </Middle>

                        <IconsGroup>
                            <AiOutlineInfoCircle size={20} />
                            <AiOutlinePlayCircle size={20} />
                            <TiDeleteOutline size={22} />
                        </IconsGroup>
                    </TableRow>
                </Rows>
            </Table>
        </Container>
    );
}

export default Transmission;
