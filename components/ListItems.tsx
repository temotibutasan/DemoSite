import useListItem, { ListDataProps } from "../hooks/useListItem";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import ListItem from "./ListItem";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

export interface  ListItemsProps {
  showSendJpycDialog: (to:string) => void;
};


const ListItems = (info:ListItemsProps) => {
  const classes = useStyles();
  const lists:ListDataProps[] = useListItem();
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
            return <ListItem showSendJpycDialog={info.showSendJpycDialog} key={i} twitterId={""} totalJpyc={""} index={i} name={""} {...item}/>
          })}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default ListItems;
