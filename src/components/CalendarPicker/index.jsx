import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";

const CalendarPicker = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US"
        formatDay={(locale, date) => dayjs(date).format("DD")}
        formatShortWeekday={(locale, date) => dayjs(date).format("ddd")}
        navigationLabel={({ date }) => (
          <>
            <div className="month">{dayjs(date).format("MMMM")}</div>
            <div className="days">{dayjs(date).format("D dddd YYYY")}</div>
          </>
        )}
        next2Label={null}
        prev2Label={null}
        className={["c1", "c2"]}
      />
    </div>
  );
};

export default CalendarPicker;
