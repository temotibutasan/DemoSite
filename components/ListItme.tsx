import React from "react";
import styled from "styled-components";
import {myFunctionJPYC} from "../pages/api/index2" 

export interface  ListItemProps {
  name: string;
  key: number;
};

const sendJPYC = () => {
  myFunctionJPYC();
}

const ListItem = (item: ListItemProps
  ) => {
  return (
    <ListItemStyled key={'ListItem_$(item.key)' } >
      <Title>応援者:{item.name}</Title>
      <Coast>支援合計:10000JPYC</Coast>
      <ButtonWrapper 
        onClick={sendJPYC}
      >
      応援する
      </ButtonWrapper>
    </ListItemStyled>
  );
};

export default ListItem;

// 名前 = styled.要素名
const Title = styled.text`
  text-decoration: underline;
  left:10px;
  justify-content: flex-start;
`;
// 名前 = styled.要素名
const Coast = styled.text`
  left:10px;
`;

const ListItemStyled = styled.div`
  width:100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  border: 2px;
  margin-left: 10px;
  margin-rigth: 10px;

`;

const ButtonWrapper = styled.button`
  padding: 5px;
  width: 200px;
  left: 10px;
  border-radius: 20px;
  justify-content: flex-end;
`;