import useListItem from "../hooks/useListItem";
import ListItem from "./ListItme";
import styled from "styled-components";

const ListItems = () => {
  const { lists } = useListItem();
  return (
    <MainStyled>
      {lists.length < 1 ? (
        <div>no items</div>
      ) : (
        <ListItemsStyled>
        {lists.map((item, i) => {
          return <ListItem key={i} {...item}/>
        })}
      </ListItemsStyled>)}
    </MainStyled>
  );
};

export default ListItems;
const ListItemsStyled = styled.div`
display: flex;
align-items: center;
align-self:  center;
justify-content: center;
flex-wrap: wrap;
background-color: antiquewhite;
max-width: 800px;
`;

const MainStyled = styled.div`
display: flex;
align-items: center;
align-self:  center;
justify-content: center;
`;