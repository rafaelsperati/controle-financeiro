import * as DateFns from "date-fns";
import { Item } from "../types/Item";
import ptBr from "date-fns/locale/pt-BR";

export const getCurrentYearMonth = () => {
  let now = new Date();
  return DateFns.format(now, "yyyy-MM");
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];

  for (let i in list) {
    let itemDate = DateFns.format(list[i].date, "yyyy-MM");
    if (itemDate === date) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatedDate = (date: Date): string => {
  return DateFns.format(date, "yyyy/MM/dd");
};

export const formatDateLong = (date: string): string => {
  let parsedDate = DateFns.parse(date, "yyyy-MM", new Date());
  return DateFns.format(parsedDate, "MMMM 'de' yyyy", { locale: ptBr });
};

export const addMonthToString = (date: string, amount: number): string => {
  let parsedDate = DateFns.parse(date, "yyyy-MM", new Date());
  let addMonth = DateFns.addMonths(parsedDate, amount);
  return DateFns.format(addMonth, "yyyy-MM");
};

export const stringToDate = (date: string): Date => {
  console.log(date);
  let parsedDate = DateFns.parseISO(date);
  console.log(parsedDate);
  return parsedDate;
};
