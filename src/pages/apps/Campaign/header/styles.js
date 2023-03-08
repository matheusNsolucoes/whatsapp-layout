import styled from "styled-components";

export const Container = styled.div`
border-bottom: 1px solid #e5e5e5;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
position: sticky;
top: 0;
z-index: 1;
background-color: #fff;
transform: translate3d(0, 0, 0);
`

export const ContentHeader = styled.div`
flex-grow: 1;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 70px;
margin-right: 40px;
`

export const LeftSide = styled.div`
display: flex;
flex-direction: row;
`
export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 33px;
color: #29292f;
`

export const SearchInput = styled.input`
width: 320px;
height: 40px;
box-sizing: border-box;
border: 1px solid #e5e5e5;
border-radius: 4px;
font-size: 16px;
background-color: #fff;
background-position: 10px 10px;
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
margin-left: 30px;
`

export const ButtonsContainer = styled.div`
display: flex;
gap: 12px;
`

export const ButtonDownload = styled.button`
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
color: #000;

`

export const ButtonCreate = styled.button`
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
background-color: #00c64b;
`


