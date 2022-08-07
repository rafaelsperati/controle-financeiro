import * as Component from "./App.style";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { useImmer } from "use-immer";
import { useEffect, useState, useCallback } from "react";
import { filterListByMonth, getCurrentYearMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import InputArea from "./components/InputArea";

const App = () => {
  const [list, setList] = useImmer(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [currentYearMonth, setcurrentYearMonth] =
    useState<string>(getCurrentYearMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentYearMonth));
  }, [list, currentYearMonth]);

  useEffect(() => {
    let newIncome = 0;
    let newExpense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        newExpense += filteredList[i].value;
      } else {
        newIncome += filteredList[i].value;
      }

      setIncome(newIncome);
      setExpense(newExpense);
    }
  }, [filteredList]);

  const handleMonthChange = useCallback((newMonth: string) => {
    setcurrentYearMonth(newMonth);
  }, []);

  const handleAddItem = (item: Item) => {
    setList((currentList) => {
      currentList.push(item);
    });
  };

  return (
    <Component.Container>
      <Component.Header>
        <Component.HeaderText>Sistema Financeiro</Component.HeaderText>
      </Component.Header>
      <Component.Body>
        <InfoArea
          income={income}
          expense={expense}
          onMonthChange={handleMonthChange}
          currentMonth={currentYearMonth}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList}></TableArea>
      </Component.Body>
    </Component.Container>
  );
};

export default App;
