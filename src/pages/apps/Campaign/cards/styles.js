import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
transform: translate3d(0px, 0px, 0px);
border: 1px solid #e5e5e5;
border-radius: 6px;
background-color: #fff;
font-weight: 100;
font-style: normal;
font-size: 15px;
text-align: center;
letter-spacing: 0;
color: #383838;
width: 300px;
height: 300px;
margin-right: 35px;
margin-bottom: 20px;
`

export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 0;
margin-left: 7%;
`

export const CardName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 6%;
font-weight: 600;
font-size: 16px;
font-style: normal;
`

export const CardNameFlow = styled.div`
cursor: pointer;
background-color: #9e9e9e;
padding: 5px;
margin-top: 5px;
border-radius: 3px;
font-weight: 400;
font-size: 12px;
color: #fff;
`

export const CardIcons = styled.span`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
`
export const ButtonEdit = styled.button`
flex: 0 0 auto;
color: rgba(0, 0, 0, 0.54);
padding: 12px;
overflow: visible;
font-size: 1.5rem;
text-align: center;
transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 50%;
`
export const LabelButton = styled.span`
width: 100%;
display: flex;
align-items: inherit;
justify-content: inherit;
`

export const ButtonRoot = styled.span`
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 0;
overflow: hidden;
position: absolute;
border-radius: inherit;
pointer-events: none;
`

export const CardIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const CardIconLink = styled.div`
width: 70px;
height: 70px;
background-size: 100% 100%;
border-width: 0;
border-style: solid;
border-color: #d1d1d1;
background-image: url(/staic-files/ads-source-link.png);
`

export const CardFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 20px;
`

export const CardInfo = styled.div`
margin-left: 7%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
min-width: 95px;
height: 48px;
`

export const CardInfoBlock = styled.div`
display: flex;
flex-direction: column;
`

export const CardInfoData = styled.div`
line-height: 13px;
letter-spacing: 0;
color: #29292f;
font-weight: 300;
font-style: normal;
font-size: 13px;
`

export const CardButtons = styled.div`
margin-top: 5%;
margin-right: 5%;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ButtonLink = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
cursor: pointer;
vertical-align: middle;
padding: 12px 28px;
border-radius: 4px;
height: 48px;
outline: none;
border: 1px solid rgba(0,0,0,0);
font-weight: 600;
font-size: 13px;
line-height: 20px;
color: #fff;
background-color: #6445e0;
`