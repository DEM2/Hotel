import React, { useState } from "react";
import DatePiker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import {BsFillCalendar2EventFill}  from "react-icons/bs";

const CheckIn = () => {
  const [endDate, setEndDate] = useState();
  return (
    <div className="relative flex  items-center justify-end h-full ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsFillCalendar2EventFill className="text-accent text-base"/>
        </div>
      </div>
      <DatePiker
        className="w-full h-full "
        selected={endDate}
        placeholderText="Check in"
        onChange={(date)=> setEndDate(date)}
      />
    </div>
  );
};

export default CheckIn;