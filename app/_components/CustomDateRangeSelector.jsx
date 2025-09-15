'use client';
import { useEffect, useRef } from "react";
import { DateRangePicker } from "react-date-range";

function CustomDateRangeSelector({setDateRange,dateRange,setShow}) {
    const ref = useRef(null);
    useEffect(()=>{
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)) setShow(false)
        }
        document.addEventListener('click',handleClick);
    },[])
    return (
      <div ref={ref} >
        <DateRangePicker
          className="absolute lg:w-fit  z-50 right-0 top-10 border border-gray-300 rounded-md overflow-hidden"
          onChange={(item) => setDateRange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          staticRanges={[]}
          inputRanges={[]}
        />
      </div>
    );
}

export default CustomDateRangeSelector
