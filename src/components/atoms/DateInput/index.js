import React, { useState } from "react";
import "./style.css";
import { ReactComponent as DateIcon } from "../../../assets/date.svg";

const DateInput = () => {
    const [date, setDate] = useState('')
  return (
    <div className="_dateInput">
        <label htmlFor="readyDate">{<DateIcon />}</label>
      <input className="oldInput" type="date" id="readyDate" value={date} onChange={(e) => setDate(e.target.value)} />
        <input className="newInput" type="text" name="readyDate" value={date} placeholder="Ready Date" readOnly />
    </div>
  );
};

export default DateInput;
