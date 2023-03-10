import React from 'react';
import { Mainmodal, modalClose, modalContent, modalHeader, modalFormGroup, modalInput, btn, Background } from './styles'

function Modal(props) {
    return (
        <div className={`${props.isOpen ? 'open' : ''}`} style={Mainmodal}>
            <div style={modalContent}>
                <span className="" onClick={props.onClose} style={modalClose}>
                    &times;
                </span>
                <div style={modalHeader}>
                    <h2>{props.title}</h2>
                </div>
                <form onSubmit={(e) => { props.submit(e) }} >
                    <div style={modalFormGroup}>
                        <input style={modalInput} placeholder={'Digite o nome da pasta'} onChange={(e) => props.onChange(e.target.value)} ></input>
                    </div>
                    <div style={modalFormGroup}>
                        <button style={btn}>{props.content}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;