import React from "react";
import styled from "styled-components";

export interface  ListItemProps {
  name: string;
  key: number;
};

const sendJPYC = () => {}

const ListItem = (item: ListItemProps
  ) => {
  return (
    <ListItemStyled key={'ListItem_$(item.key)' } >
      <Title>応援者:{item.name}</Title>
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
  justify-content: flex-start;
`;

const ListItemStyled = styled.div`
  max-width: 600px;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #eaeaea;
`;

const ButtonWrapper = styled.button`
  padding: 10px;
  right: 10px;
  border-radius: 20px;
  justify-content: flex-end;
`;