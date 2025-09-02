'use client'
import { PiPackageFill } from "react-icons/pi"
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CustomDateRangeSelector from "./CustomDateRangeSelector";
function FilterOptions() {
    const [showDateRange,setShowDateRange] = useState(false);
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    return (
      <div className="flex justify-between">
        <ul className="flex items-center gap-4">
          <li className="smooth-transition hover:bg-gray-200 px-4 py-1 border border-red-700 text-red-700 rounded-full">
            All
          </li>
          <li className="smooth-transition hover:bg-gray-200 px-4 py-1 border border-gray-300 rounded-full">
            in Progress
          </li>
          <li className="smooth-transition hover:bg-gray-200 px-4 py-1 border border-gray-300 rounded-full">
            Delivered
          </li>
          <li className="smooth-transition hover:bg-gray-200 px-4 py-1 border border-gray-300 rounded-full">
            Cancelled
          </li>
        </ul>
        <div className="relative">
          <button
            onClick={() => setShowDateRange(!showDateRange)}
            className="bg-gray-100 px-4 py-1 rounded-full flex items-center gap-1 smooth-transition hover:bg-gray-200"
          >
            Select date range
            <IoIosArrowDown
              className={`smooth-transition ${showDateRange && "rotate-180"}`}
            />
          </button>
          {showDateRange && <CustomDateRangeSelector setShow={setShowDateRange} setDateRange={setDateRange} dateRange={dateRange}/>}
        </div>
      </div>
    );
}

export default FilterOptions
