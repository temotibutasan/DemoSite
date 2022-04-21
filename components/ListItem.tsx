import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {myFunctionJPYC} from "../pages/api/index2" 


export interface  ListItemProps {
  key: number;
  index: number;
  name: string;
  twitterId: string;
  totalJpyc: string;
};

const sendJPYC = () => {
  myFunctionJPYC("1");
}

const ListItem = (item: ListItemProps
  ) => {
  return(
      <TableRow key={item.name}>
        <TableCell component="th" scope="row" >
          <img
          src={"2021_Twitter_logo_blue.png"}
          width={64} height={64}
          loading="lazy"
        />
        </TableCell>
        <TableCell align="left">
          {item.name}
        </TableCell>
        <TableCell align="left">{"@xxxxx"}</TableCell>
        <TableCell align="left">{"xxxxxxJPYC"}</TableCell>
        <TableCell align="left">      
          <ButtonWrapper 
          onClick={sendJPYC}
          >
          支援する
          </ButtonWrapper>
        </TableCell>
      </TableRow>
 );
};

export default ListItem;

const ButtonWrapper = styled.button`
  padding: 5px;
  width: 200px;
  left: 10px;
  border-radius: 20px;
`;