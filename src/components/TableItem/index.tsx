import { categories } from "../../data/categories";
import { formatedDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as Components from "./style";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <Components.TableLine>
      <Components.TableColumn>{formatedDate(item.date)}</Components.TableColumn>
      <Components.TableColumn>
        <Components.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Components.Category>
      </Components.TableColumn>
      <Components.TableColumn>{item.title}</Components.TableColumn>
      <Components.TableColumn>
        <Components.Value
          color={categories[item.category].expense ? "red" : "green"}
        >
          R$ {item.value}
        </Components.Value>
      </Components.TableColumn>
    </Components.TableLine>
  );
};

export default TableItem;
