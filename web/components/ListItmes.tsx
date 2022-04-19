import useListItem from "../hooks/useListItem";
import ListItem from "./ListItme";
import styled from "styled-components";

const ListItems = () => {
  const { lists } = useListItem();
  return (
    <>
      {lists.length < 1 ? (
        <div>no items</div>
      ) : (
        <ListItemsStyled>
        {lists.map((item, i) => {
          return <ListItem key={i} {...item}/>
        })}
      </ListItemsStyled>)}
    </>
  );
};

export default ListItems;
const ListItemsStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 800px;
`;