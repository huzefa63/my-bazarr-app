import { format } from "date-fns";
import { cookies } from "next/headers";
import { IoMdStar, IoMdStarOutline } from "react-icons/io"
import RatingStars from "../UI/RatingStars";

async function RatingStats({id,avgRating,commentCounts}) {
  const cookie = await cookies();
  let data;
  let totalRatings;
  let progress;
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/rating/getAvgRatings/${id}`,{
      headers:{
        Cookie:`token=${cookie.get('token')?.value}`
      }
    })
    const resjson = await res.json();
    console.log(resjson)
    data = resjson;
    // totalRatings = resjson.avgRating[0].totalRatings;
    progress = resjson.eachAvgRating;
  }catch(err){
    console.log(err)
  }if(!data) return null;
    return (
      <div className="mt-10 flex items-center justify-cente gap-30 w-full">
        <div className="flex-col flex gap-1 items-center w-fit">
          <p className="text-7xl">{avgRating[0].ratingsAvg.toFixed(1)}</p>
          <RatingStars length={avgRating[0].ratingsAvg}/>
          <p className="text-2xl">{format(new Date(),'d MMM, yyyy')}</p>
        </div>
        <div className="flex flex-col gap-3 w-3/4">
          {progress.map(el => <ProgressBar key={el.rating} rating={el.rating} value={el.value / commentCounts * 100}/>)}
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
        <span className="">{value.toFixed(0)} %</span>
      </div>
    );
}