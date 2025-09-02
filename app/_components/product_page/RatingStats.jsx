import { IoMdStar } from "react-icons/io"

const progress = [{rating:5,value:72},{rating:4,value:63},{rating:3,value:23},{rating:2,value:11},{rating:1,value:4}]
function RatingStats() {
    return (
      <div className="mt-10 flex items-center justify-cente gap-30 w-full">
        <div className="flex-col flex gap-1 items-center w-fit">
          <p className="text-7xl">4.5</p>
          <div className="flex gap-1 text-yellow-400 text-3xl">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className="text-2xl">April 4, 2025</p>
        </div>
        <div className="flex flex-col gap-3 w-3/4">
          {progress.map(el => <ProgressBar key={el.rating} rating={el.rating} value={el.value}/>)}
        </div>
      </div>
    );
}

export default RatingStats

function ProgressBar({rating,value}){
    return (
      <div className="flex items-center gap-3">
        <p>{rating}</p>
        <progress className="progress flex-1" value={value} max="100"></progress>
        <span className="">{value} %</span>
      </div>
    );
}