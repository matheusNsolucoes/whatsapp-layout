import React from "react";
import { useModalContext } from "../../../../modal.context";

const CamapignModal = () => {

    const {
        modalState: { message, visible },
        closeModal,
    } = useModalContext();


    return (
        <></>
    );
}

export default CamapignModal;