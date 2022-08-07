import * as C from "./style";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { formatDateLong, addMonthToString } from "../../helpers/dateFilter";
import { useCallback } from "react";
import ResumeItem from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ income, expense, currentMonth, onMonthChange }: Props) => {
  const handleAddMonth = useCallback(
    (amount: number) => {
      let newMonth = addMonthToString(currentMonth, amount);
      onMonthChange(newMonth);
    },
    [currentMonth, onMonthChange]
  );

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => handleAddMonth(-1)}>
          <FaArrowCircleLeft />
        </C.MonthArrow>
        <C.MonthTitle>{formatDateLong(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={() => handleAddMonth(1)}>
          <FaArrowCircleRight />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};

export default InfoArea;
