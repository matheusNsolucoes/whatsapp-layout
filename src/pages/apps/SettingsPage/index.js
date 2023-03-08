import React, { useRef, useState } from 'react';
import { Card, Nav, Pagination, TabContent, TabPane, CardBody, NavLink, NavItem } from 'reactstrap';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';

// // components
import Activity from './Activity';
import Messages from './Messages';
import Projects from './Projects';
import Tasks from './Tasks';
import Files from './Files';
import AutoMsg from './AutoMsg';
import Company from './Company';
import Logs from './Logs';
import Bills from './Bills';

import { activityTimeline, messages, files } from './data';

const SettingsPage = () => {
    const [activeTab, setactiveTab] = useState('1');
    const tabScroll = useRef(null);

    const handleSelect = (eventKey) => {
        setactiveTab(eventKey);
    };

    const scroll = (scrollOffset) => {
        if (tabScroll.current !== null) {
            tabScroll.current.scrollLeft += scrollOffset;
        }
    };

    const ScrollBtn = styled.div`
        width: 40px;
        height: 100%;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 5.8px;
        border-radius: 2px;
        transition: 0.2s;
        margin: 0;
        cursor: pointer;
        :hover {
            background-color: rgba(0, 0, 0, 0.15);
        }
    `;

    return (
        <Card className="settings-card">
            <CardBody>
                <div className="overflow-hidden" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <ScrollBtn onClick={() => scroll(-500)}>{`<`}</ScrollBtn>
                    <Nav
                        tabs
                        justified
                        className="navtab-bg d-flex flex-nowrap"
                        ref={tabScroll}
                        role="navigation"
                        activeKey={activeTab}
                        onSelect={handleSelect}
                        style={{ overflow: 'hidden', scrollBehavior: 'smooth', cursor: 'pointer' }}>
                        <NavItem>
                            <NavLink style={{ width: '180px' }} onClick={() => setactiveTab('1')}>
                                WhatsApp
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('2')}>
                                Campos Personalizados
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '180px' }} onClick={() => setactiveTab('3')}>
                                Etiquetas
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('4')}>
                                Administradores
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('5')}>
                                Respostas rápidas
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '350px' }} onClick={() => setactiveTab('6')}>
                                Boas vindas, resposta padrão e erro padrão
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('7')}>
                                Companhia
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('8')}>
                                Logs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ width: '200px' }} onClick={() => setactiveTab('9')}>
                                Faturamento
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <ScrollBtn onClick={() => scroll(500)}>{`>`}</ScrollBtn>
                </div>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Activity activityTimeline={activityTimeline} />
                    </TabPane>
                    <TabPane tabId="2">
                        <Messages messages={messages} />
                    </TabPane>
                    <TabPane tabId="3">
                        <Projects />
                    </TabPane>
                    <TabPane tabId="4">
                        <Tasks />
                    </TabPane>
                    <TabPane tabId="5">
                        <Files files={files} />
                    </TabPane>
                    <TabPane tabId="6">
                        <AutoMsg />
                    </TabPane>
                    <TabPane tabId="7">
                        <Company />
                    </TabPane>
                    <TabPane tabId="8">
                        <Logs />
                    </TabPane>
                    <TabPane tabId="9">
                        <Bills />
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
};

export default SettingsPage;
