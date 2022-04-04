import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";
// styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToChart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToChart }) => {
  return (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.title} />
        <h3>{item.description}</h3>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
      </div>
      <Button onClick={() => handleAddToChart(item)}>Add to Chart</Button>
    </Wrapper>
  );
};

export default Item;
