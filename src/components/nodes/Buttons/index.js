import { NodeResizer } from "@reactflow/node-resizer";
import React from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BsWhatsapp } from "../../../styles/Icons";
import {
  Container,
  WhatsappLogo,
  Header,
  Text,
  MiniChat,
  Message,
  ButtonMessage,
  Buttons,
  HandleBtns,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/flows/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ButtonSquare = ({ selected, data, id }) => {
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ id, type: "button" }));
  } else {
    dispatch(undoChange());
  }

  return (
    <Container>
      <Header>
        <WhatsappLogo>
          <BsWhatsapp size={25} fill="#FFF" />
        </WhatsappLogo>
        <Text>
          <p>enviar whatsapp</p>
          <sub>Botões</sub>
        </Text>
      </Header>
      <MiniChat className="text-center mt-6">
        <Message>
          Texto da pergunta:
          {data ? (
            <p>
              <b>{data.answers}</b>
            </p>
          ) : (
            <></>
          )}
          <sub>
            {new Date().toLocaleTimeString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
            })}
          </sub>
        </Message>
        {data ? (
          <>
            {data.textAreaB.map((con, index) => {
              return <ButtonMessage key={index}>{con.value}</ButtonMessage>;
            })}
          </>
        ) : (
          <ButtonMessage>Número de pedido</ButtonMessage>
        )}

      </MiniChat>
      <Buttons>
        <HandleBtns>
          Número do pedido
          <Handle id="right" type="source" position={Position.Right} />
        </HandleBtns>
        <HandleBtns parent>
          Email
          <Handle id="right" type="source" position={Position.Right} />
        </HandleBtns>
      </Buttons>
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
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

export default ButtonSquare;
