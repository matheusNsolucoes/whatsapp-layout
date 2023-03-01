import React from 'react';
import { Col, Row, InputGroup, Button, Form } from 'reactstrap';
import { DivActivity, ButtonColor, Buttons, Wrapper, Directories } from './styles.js';
import * as FeatherIcons from 'react-feather';
import { useModalContext } from '../../../modal.context.js';

// components
import PageTitle from '../../../components/PageTitle';
import FluxArchive from '../../../components/FluxArchive/index.js';
import FluxItem from '../../../components/FluxItem/index.js';
import CreateFluxModal from '../../../components/CreateFluxModal/index.js';

function ChatFlux() {
    const folders = [
        'Novos Agendamentos',
        'Não entrou no relatório',
        'Não saiu para entrega',
        '2x Não saiu para a entrega',
        'Acumulo RJ',
    ];

    return (
        <Wrapper>
            <Row className="page-title">
                <Col className="col-12">
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/chatflux' },
                            { label: 'Fluxo', path: '/apps/chatflux', active: true },
                        ]}
                        title={'Fluxos de Conversas'}
                    />
                </Col>
            </Row>
            <hr />
            <Col>
                <p>Fluxos</p>
                <Directories>
                    {folders.map((folder, index) => {
                        return <FluxArchive title={folder} key={index} />
                    })}
                    <FluxArchive createNew title="Criar Nova Pasta" />
                </Directories>
            </Col>
            <br />
            <hr />
            <Col md={12}>
                <FluxItem fluxName="Esquenta chip 1" executions={710} ctr={100} createdAt="04/02/2022" />
            </Col>
        </Wrapper>
    );
}

export default ChatFlux;
