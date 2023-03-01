import styled from 'styled-components';

export const Wrapper = styled.div`
    gap: 10px;
    width: 100%;
    padding: 16px;
`;

export const Directories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Buttons = styled.div`
    text-align: end;
    .color-button {
        background-color: #34af23;
        color: white;
        border-color: #91cc89;
    }
    .color-button:hover {
        background-color: #91cc89;
        color: white;
        border-color: #34af23;
    }
`;

export const ButtonColor = styled.div`
    .color-button {
        background-color: #34af23;
        color: white;
        border-color: #91cc89;
    }
    .color-button:hover {
        background-color: #91cc89;
        color: white;
        border-color: #34af23;
    }
    .color-button2 {
        background-color: #91cc89;
        color: white;
        border-color: #34af23;
    }
    .color-button2:hover {
        background-color: #34af23;
        color: white;
        border-color: #91cc89;
    }
    .color-button3 {
        background-color: #27861b;
        color: white;
        border-color: #27861b;
    }
    .color-button3:hover {
        background-color: #34af23;
        color: white;
        border-color: #34af23;
    }
    .color-button4 {
        background-color: white;
        color: black;
        border-color: #34af23;
    }
    .color-button4:hover {
        background-color: white;
        color: #34af23;
        border-color: #34af23;
    }
`;

export const DivGrid = styled.div`
    .titles {
        display: grid;
        margin-bottom: 0.75%;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        align-items: center;
        color: #909090;
        grid-template-columns: 30% 25% 30% 15%;
    }
    .info {
        display: grid;
        background-color: #fff;
        align-items: center;
        color: black;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 2px rgba(35, 43, 37, 0.175);
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        grid-template-columns: 30% 25% 30% 15%;
        text-align: left;
    }
    .info:hover {
        border-color: #34af23;
    }
`;

export const DivInvoice = styled.div`
    .titles {
        display: grid;
        margin-bottom: 0.75%;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        align-items: center;
        color: #909090;
        grid-template-columns: 10% 18% 34% 14% 9% 13%;
    }
    .info {
        display: grid;
        background-color: #fff;
        align-items: center;
        color: black;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 2px rgba(35, 43, 37, 0.175);
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        grid-template-columns: 10% 18% 34% 14% 9% 13%;
    }
    .info:hover {
        border-color: #34af23;
    }
`;

export const DivMaintenance = styled.div`
    .titles {
        display: grid;
        margin-bottom: 0.75%;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        align-items: center;
        color: #909090;
        grid-template-columns: 35% 20% 15% 15% 15%;
    }
    .info {
        display: grid;
        background-color: #fff;
        align-items: center;
        color: black;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 2px rgba(35, 43, 37, 0.175);
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        grid-template-columns: 35% 20% 15% 15% 15%;
    }
    .info:hover {
        border-color: #34af23;
    }
`;

export const DivActivity = styled.div`
    .titles {
        display: grid;
        margin-bottom: 0.75%;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        align-items: center;
        color: #909090;
        grid-template-columns: 40% 15% 10% 25% 10%;
    }
    .info {
        display: grid;
        background-color: #fff;
        align-items: center;
        color: black;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 80%;
        height: 60px;
        box-shadow: 0 1px 2px rgba(35, 43, 37, 0.175);
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        grid-template-columns: 10% 80% 10%;
    }
    .info:hover {
        border-color: #34af23;
    }
    .info-2 {
        display: grid;
        background-color: #fff;
        align-items: center;
        color: black;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 2px rgba(35, 43, 37, 0.175);
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        grid-template-columns: 40% 15% 10% 25% 10%;
    }
    .info-2:hover {
        border-color: #34af23;
    }
`;
