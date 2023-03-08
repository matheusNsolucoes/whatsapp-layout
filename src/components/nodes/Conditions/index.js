import { NodeResizer } from "@reactflow/node-resizer";
import React from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { TbArrowFork } from "../../../styles/Icons";
import {
  Container,
  Header,
  ConditionLogo,
  Text,
  Conditions,
  True,
  False,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/flows/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ConditionSquare = ({ selected, data, id }) => {
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ id, type: "condition" }));
  } else {
    dispatch(undoChange());
  }


  return (
    <Container>
      <Header>
        <ConditionLogo>
          <TbArrowFork size={32} style={{ color: "#fff" }} />
        </ConditionLogo>
        <Text>
          <p>Condições</p>
        </Text>
      </Header>
      <Conditions>
        <True>
          <p>Alguma condição abaixo é verdadeira</p>
        </True>
        {data ? (
          <>
            {data.condition ? (
              <>
                <p>
                  <strong>Horário de Atendimento</strong> é <b>{data.isOpen}</b>
                </p>
                <hr />
              </>
            ) : (
              <></>
            )}
          </>
        ): (
          <></>
        )}
        <False>
          <p>Todas as condições acima são falsas</p>
        </False>
      </Conditions>
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

export default ConditionSquare;
