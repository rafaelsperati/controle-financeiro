import * as Component from "./App.style";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { useImmer } from "use-immer";
import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentYearMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

const App = () => {
  const [list, setList] = useImmer(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentYearMonth, setcurrentYearMonth] =
    useState<string>(getCurrentYearMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentYearMonth));
  }, [list, currentYearMonth]);

  return (
    <Component.Container>
      <Component.Header>
        <Component.HeaderText>Sistema Financeiro</Component.HeaderText>
      </Component.Header>
      <Component.Body>
        <InfoArea currentMonth={currentYearMonth}></InfoArea>
        <TableArea list={filteredList}></TableArea>
      </Component.Body>
    </Component.Container>
  );
};

export default App;
