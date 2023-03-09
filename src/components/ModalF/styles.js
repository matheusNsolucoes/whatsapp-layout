import styled from 'styled-components';
import theme from '../../styles/theme';

export const Mainmodal = {
    position: "absolute",
    inset: " 50% auto auto 50%",
    border: 'none',
    background: 'none',
    overflow: 'auto',
    'border-radius': '4px',
    outline: 'none',
    padding: '20px 16px',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    zIndex: 9999,
};

export const modalClose = {
    position: 'absolute',
    top: '10px',
    right: 0,
    cursor: 'pointer',
}

export const modalContent = {
    'background-color': '#fff',
    'border-radius': '6px',
    display: 'flex',
    'flex-direction': 'column',
    'box-shadow': theme.boxShadow
}


export const modalHeader = {
    'line-height': '65px',
    'letter-spacing': 0,
    color: '#29292f',
    'font-weight': 600,
    'font-style': 'normal',
    'font-size': '25px',
    'text-align': 'center',
    'height': '65px',
    'margin-bottom': '15px',
    'border-bottom': '1px solid #e5e5e5'
}

export const modalFormGroup = {
    padding: '15px 0',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
}

export const modalInput = {
    font: 'inherit',
    color: 'currentColor',
    width: '100%',
    border: '4px solid #c2c7cf',
    height: '1.1876em',
    margin: 0,
    display: 'block',
    padding: '18.5px 14px',
    'min-width': 0,
    background: 'none',
    'box-sizing': 'content-box',
    'animation-name': 'mui-auto-fill-cancel',
    'letter-spacing': 'inherit',
    'animation-duration': '10ms',
    '-webkit-tap-highlight-color': 'transparent',
    'border-radius': '10px',
    margin: '15px',
}

export const btn ={
    'cursor': 'pointer',
    'vertical-align': 'middle',
    padding: '12px 28px',
    'border-radius': '4px',
    height: '48px',
    outline: 'none',
    border: '1px solid rgba(0,0,0,0)',
   'font-weight': 600,
    'font-size': '13px',
    'line-height': '20px',
    color: '#fff',
    background: theme.accentColor
}


