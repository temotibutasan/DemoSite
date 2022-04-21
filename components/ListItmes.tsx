import useListItem from "../hooks/useListItem";
import ListItem from "./ListItme";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const ListItems = () => {
  const classes = useStyles();
  const { lists } = useListItem();
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
            </TableRow>
          </TableHead>
          <TableBody>
          {lists.map((item, i) => {
            return <ListItem twitterId={""} totalJpyc={""} index={i} name={""} {...item}/>
          })}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default ListItems;