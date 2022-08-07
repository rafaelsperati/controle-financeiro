import * as Components from "./style";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { formatDateLong } from "../../helpers/dateFilter";

type Props = {
  currentMonth: string;
};

const InfoArea = ({ currentMonth }: Props) => {
  return (
    <Components.Container>
      <Components.MonthArea>
        <Components.MonthArrow>
          <FaArrowCircleLeft />
        </Components.MonthArrow>
        <Components.MonthTitle>
          {formatDateLong(currentMonth)}
        </Components.MonthTitle>
        <Components.MonthArrow>
          <FaArrowCircleRight />
        </Components.MonthArrow>
      </Components.MonthArea>
      <Components.ResumeArea></Components.ResumeArea>
    </Components.Container>
  );
};

export default InfoArea;
