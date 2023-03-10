import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row, InputGroup, Button, Form } from 'reactstrap';
import { DivActivity, ButtonColor, Buttons, Wrapper, Directories } from './styles.js';
import * as FeatherIcons from 'react-feather';
import { useModalContext } from '../../../modal.context.js';
import { createFlow, deleteFlow, getFlows, updateFlow } from '../../../services/api'

// components
import PageTitle from '../../../components/PageTitle';
import FluxArchive from '../../../components/FluxArchive/index.js';
import FluxItem from '../../../components/FluxItem/index.js';
//
import CreateFluxModal from '../../../components/CreateFluxModal/index.js';

import Modal from '../../../components/ModalF/index.js';




function ChatFlux() {
    const folders = [
        'Novos Agendamentos',
        'Não entrou no relatório',
        'Não saiu para entrega',
        '2x Não saiu para a entrega',
        'Acumulo RJ',
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
        // console.log(true)
    };

    const handleClose = () => {
        setIsOpen(false);
        //console.log(false)
    };

    //envio
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [newFlowName, setNewFlowName] = useState('');
    const [createFlowName, setCreateFlowName] = useState('')
    const [flows, setFlows] = useState([]);
  

    useEffect(() => {

        console.log(createFlowName)


    }, [createFlowName])

    const userToken = localStorage.getItem("userToken")

    useEffect(() => {
        const findFlows = async () => {
          const {data} = await getFlows(userToken)
        //   setFlows(data)
          console.log('puxar do banco')
          console.log(data)
        }
        findFlows()
      }, [formSubmitted])


    const handleCreateFlow = useCallback(async (e) => {
        e.preventDefault();
        // name: string,
        // execution: number,
        // ctr: number,
        // user_token: string
        let data = {
            name: createFlowName,
            execution: 20,
            ctr: 20,
            user_token: localStorage.getItem("userToken")
        }
        console.log(data)
        await createFlow({name: createFlowName, execution: "20", ctr: "20", user_token: localStorage.getItem("userToken")})

        setFormSubmitted(true)

    }, [createFlowName])

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
                    <FluxArchive createNew title="Criar Nova Pasta" onClick={handleClick}>


                    </FluxArchive>
                </Directories>
            </Col>
            <br />
            <hr />
            <Col md={12}>
                <FluxItem fluxName="Esquenta chip 1" executions={710} ctr={100} createdAt="04/02/2022" />
            </Col>

            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    title="Criar pasta"
                    content="Criar pasta"
                    onChange={setCreateFlowName}
                    submit={handleCreateFlow}
                // (e) => setCreateFlowName(e.target.value)
                />
            )

            }


        </Wrapper>
    );
}

export default ChatFlux;
