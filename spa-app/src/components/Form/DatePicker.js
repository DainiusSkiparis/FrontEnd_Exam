import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({ value, onChange }) {
  const [date, setDate] = useState(value || new Date());
  const weekend = (date) => new Date() < date;
  const minTime = new Date();
  minTime.setHours(8, 0, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(19, 30, 0, 0);

  const handleChange = (date) => {
    setDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="Laikas"
      filterDate={weekend}
      selected={date}
      onChange={handleChange}
      minTime={minTime}
      maxTime={maxTime}
    />
  );
}
