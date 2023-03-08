import { NodeResizer } from "@reactflow/node-resizer";
import React from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BsArrowsAngleContract } from "../../../styles/Icons";
import {
  Container,
  Header,
  ConnectionLogo,
  Text,
  Sub,
  ButtonConnection,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/flows/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ConnectionSquare = ({ selected, data, id }) => {
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ id, type: "connection" }));
  } else {
    dispatch(undoChange());
  }

  return (
    <Container>
      <Header>
        <ConnectionLogo>
          <BsArrowsAngleContract size={32} style={{ color: "#fff" }} />
        </ConnectionLogo>
        <Text>
          <p>Conexão</p>
          <Sub>Se conecte com outro fluxo</Sub>
         {data ? (
          <>
             {data.connection && (
            <>
              <p>{data.connection}</p>
              <ButtonConnection>Abrir esse fluxo</ButtonConnection>
            </>
          )}
          </>
         ): (
          <></>
         )}
        </Text>
      </Header>
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="bootom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />
    </Container>
  );
};

export default ConnectionSquare;
