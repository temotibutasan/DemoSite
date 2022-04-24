import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export interface  ListItemProps {
  key: number;
  iconUrl: string;
  index: number;
  name: string;
  twitterId: string;
  totalJpyc: string;
  showSendJpycDialog: (to:string)=>void;
};

const ListItem = (item: ListItemProps
  ) => {  
  const getImageSize = () => {
    // 画像元サイズ
    let width = 1034;
    let height = 851;
    let scale = 64 / 1034;
    return {width: width* scale,height:height*scale};
  }
  const imageSize = getImageSize();
  return(
      <TableRow key={item.name}>
        <TableCell component="th" scope="row" >
          <img
          src={"2021_Twitter_logo_blue.png"}
          width={imageSize.width}
          height={imageSize.height}
          loading="lazy"
        />
        </TableCell>
        <TableCell align="left">
          {item.name}
        </TableCell>
        <TableCell align="left">{item.twitterId}</TableCell>
        <TableCell align="left">{`${item.totalJpyc}JPYC`}</TableCell>
        <TableCell align="left">      
          <ButtonWrapper onClick={()=>{
            item.showSendJpycDialog(item.twitterId);
            }}
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