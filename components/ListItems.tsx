import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import ListItem from "./ListItem";
import { useState } from "react";
import useProjects, { ListData } from "../hooks/useProjects";
import { Project } from "../hooks/useJpycSupportContract";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

export interface  ListItemsProps {
  showSendJpycDialog: (to:string) => void;
};


function convertListData(projects:Project[]) {
  return projects.map((item) => {
    return({
      iconUrl : "icon",
      name : item.fromTwID,
      twitterId :item.toTwID,
      totalJpyc: item.amount
    });
  });
};

const ListItems = (info:ListItemsProps) => {
  const classes = useStyles();
  const result = useProjects();
  const [lists, setLists] = useState([]);
  result().then((data)=>{
    setLists(convertListData(data));
  });

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>アイコン</TableCell>
              <TableCell align="left">ユーザ名</TableCell>
              <TableCell align="left">TwitterID</TableCell>
              <TableCell align="left">合計支援額</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
          {lists.map((item, i) => {
            return <ListItem showSendJpycDialog={info.showSendJpycDialog} key={i} twitterId={item.twitterId} totalJpyc={item.totalJpyc} index={i} name={item.name}/>
          })}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default ListItems;
