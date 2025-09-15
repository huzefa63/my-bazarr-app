'use client'
import { PiPackageFill } from "react-icons/pi"
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CustomDateRangeSelector from "./CustomDateRangeSelector";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function FilterOptions({allFilters=true}) {
    const [showDateRange,setShowDateRange] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const filter = searchParams.get('filter');
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    useEffect(() => {
      const urlParams = new URLSearchParams(searchParams);
      urlParams.set("startDate", dateRange[0].startDate);
      urlParams.set("endDate", dateRange[0].endDate);
      urlParams.set('date','filter');
      router.replace(`${pathname}?${urlParams}`);
    },[dateRange[0].startDate,dateRange[0].endDate])
    
    function handleChangeQuery(query){
      const urlParams = new URLSearchParams(searchParams);
      urlParams.set('filter',query);
      router.replace(`${pathname}?${urlParams}`);
    }
    useEffect(() => {
      const urlParams = new URLSearchParams(searchParams);
      if(!allFilters){
        urlParams.delete('filter')
      }else{
        urlParams.set("filter", 'all');
      }
      router.replace(`${pathname}?${urlParams}`);
    },[])
    function handleResetDate(){
      const url = new URLSearchParams(searchParams);
      url.delete('startDate')
      url.delete('endDate');
      url.delete('date');
      router.replace(`${pathname}?${url}`);
    }
    return (
      <div className="flex lg:justify-between overflow-x-auto">
        {allFilters && (
          <ul className="flex items-center gap-4 lg:text-lg text-sm">
            <button
              onClick={() => handleChangeQuery("all")}
              className={`smooth-transition border ${
                filter === "all"
                  ? "border-red-500 text-red-400"
                  : "border-gray-300"
              } hover:bg-gray-200 px-4 py-1 rounded-full`}
            >
              All
            </button>
            <button
              onClick={() => handleChangeQuery("processing")}
              className={`smooth-transition hover:bg-gray-200 px-4 py-1 border  ${
                filter === "processing"
                  ? "border-red-500 text-red-400"
                  : "border-gray-300"
              } rounded-full`}
            >
              Processing
            </button>
            <button
              onClick={() => handleChangeQuery("delivered")}
              className={`smooth-transition hover:bg-gray-200 px-4 py-1 border  ${
                filter === "delivered"
                  ? "border-red-500 text-red-400"
                  : "border-gray-300"
              } rounded-full`}
            >
              Delivered
            </button>
            <button
              onClick={() => handleChangeQuery("cancelled")}
              className={`smooth-transition hover:bg-gray-200 px-4 py-1 border  ${
                filter === "cancelled"
                  ? "border-red-500 text-red-400"
                  : "border-gray-300"
              } rounded-full`}
            >
              Cancelled
            </button>
          </ul>
        )}
        <div className={`relative ${!allFilters && "ml-auto"} ml-3 lg:ml-0 min-w-fit flex items-center gap-2`}>
          <button
            onClick={() => setShowDateRange(!showDateRange)}
            className="bg-gray-100 px-4 py-1 rounded-full flex items-center gap-1 smooth-transition hover:bg-gray-200"
          >
            Select date range
            <IoIosArrowDown
              className={`smooth-transition ${showDateRange && "rotate-180"}`}
            />
          </button>
          {showDateRange && (
            <CustomDateRangeSelector
              setShow={setShowDateRange}
              setDateRange={setDateRange}
              dateRange={dateRange}
            />
          )}
          {searchParams.get('startDate') && <button onClick={handleResetDate} className="bg-gray-100 px-4 py-1 rounded-full flex items-center gap-1 smooth-transition hover:bg-gray-200">
            reset date
          </button>}
        </div>
      </div>
    );
}

export default FilterOptions
