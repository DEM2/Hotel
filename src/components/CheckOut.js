import React, {useState} from 'react';
import {BsFillCalendar2EventFill} from "react-icons/bs";
import DatePiker from "react-datepicker";

const CheckOut = () => {
  const [startDate, setStartDate] = useState();
  return (
    <div className="relative flex  items-center justify-end h-full">
    <div className="absolute z-10 pr-8">
      <div>
        <BsFillCalendar2EventFill className="text-accent text-base"/>
      </div>
    </div>
    <DatePiker
      className="w-full h-full"
      selected={startDate}
      placeholderText="Check out"
      onChange={(date)=> setStartDate(date)}
    />
  </div>);
};

export default CheckOut;
