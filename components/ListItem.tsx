import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {finishedProjectAllowance,projectFinish} from "../pages/api/index2" 

export interface  ListItemProps {
  key: number;
  iconUrl: string;
  index: number;
  name: string;
  twitterId: string;
  totalJpyc: string;
  showSendJpycDialog: (to:string)=>void;
};

const finishedProject = async () => {
  const result= await projectFinish("toTwId1", 0);;
  alert(`Finish Project! ${result}`);
}

const getJpyc = async () => {
  //スマートコントラクトから情報を取得(
  const result= await finishedProjectAllowance("toTwId1");
  alert(`Finish Project allowance! ${result}`);
}

const getImageSize= () => {
  // 画像元サイズ
  let width = 1034;
  let height = 851;
  let scale = 64 / 1034;
  return {width: width* scale,height:height*scale};
}

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
        <TableCell align="center">      
          <button
          onClick={finishedProject}
          >
            募集期間終了
          </button>
        </TableCell>
        <TableCell align="center">      
          <button 
          onClick={getJpyc}
          >
            結果
          </button>
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