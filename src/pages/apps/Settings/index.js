import React, { useRef, useState } from "react";
import { Card, Nav, Pagination, TabContent, TabPane } from "reactstrap";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from 'styled-components';

// components
import Activity from "./Activity";
import Messages from "./Messages";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Files from "./Files";
import AutoMsg from "./AutoMsg";
import Company from "./Company";
import Logs from "./Logs";
import Bills from "./Bills";

import { activityTimeline, messages, files } from "./data";

const Settings = () => {
  const [activeTab, setactiveTab] = useState("activity");
  const tabScroll = useRef(null);

  const handleSelect = (eventKey) => {
    setactiveTab(eventKey)
  }

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
    transition: .2s;
    margin: 0;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  `

  return (
    <Card>
      <Card.Body>
        <div className="overflow-hidden" style={{display: "flex", flexDirection: "row", gap: "20px"}}>
        <ScrollBtn onClick={() => scroll(-500)}>{`<`}</ScrollBtn>
          <Nav
            as="ul"
            variant="tabs"
            justify
            className="navtab-bg d-flex flex-nowrap"
            role="navigation"
            activeKey={activeTab}
            onSelect={handleSelect}
            style={{overflow: "hidden", scrollBehavior: "smooth"}}
            ref={tabScroll}
          >
            <Nav.Item as="li">
              <Nav.Link style={{ width: "180px" }} eventKey="activity">
                WhatsApp
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="messages">
                Campos Personalizados
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "180px" }} eventKey="projects">
                Etiquetas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="tasks">
                Administradores
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="files">
                Respostas rápidas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "350px" }} eventKey="automsg">
                Boas vindas, resposta padrão e erro padrão
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="company">
                Companhia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="logs">
                Logs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ width: "200px" }} eventKey="bills">
                Faturamento
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <ScrollBtn onClick={() => scroll(500)}>{`>`}</ScrollBtn>
        </div>

        <TabContent>
          <TabPane active={activeTab === "activity"} eventKey="activity">
            <Activity activityTimeline={activityTimeline} />
          </TabPane>
          <TabPane active={activeTab === "messages"} eventKey="messages">
            <Messages messages={messages} />
          </TabPane>
          <TabPane active={activeTab === "projects"} eventKey="projects">
            <Projects />
          </TabPane>
          <TabPane active={activeTab === "tasks"} eventKey="tasks">
            <Tasks />
          </TabPane>
          <TabPane active={activeTab === "files"} eventKey="files">
            <Files files={files} />
          </TabPane>
          <TabPane active={activeTab === "automsg"} eventKey="automsg">
            <AutoMsg />
          </TabPane>
          <TabPane active={activeTab === "company"} eventKey="company">
            <Company />
          </TabPane>
          <TabPane active={activeTab === "logs"} eventKey="logs">
            <Logs />
          </TabPane>
          <TabPane active={activeTab === "bills"} eventKey="bills">
            <Bills />
          </TabPane>
        </TabContent>
      </Card.Body>
    </Card>
  );
};

export default Settings;