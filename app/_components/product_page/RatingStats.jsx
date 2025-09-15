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
    // console.log(resjson)
    data = resjson;
    // totalRatings = resjson.avgRating[0].totalRatings;
    progress = resjson.eachAvgRating;
    console.log(progress);
  }catch(err){
    console.log(err)
  }if(!data) return null;

    return (
      <div className="mt-10 flex items-center justify-around lg:justify-normal lg:gap-30 gap-5 w-full">
        <div className="flex-col flex gap-1 items-center w-fit">
          <p className="lg:text-7xl text-3xl">{avgRating[0]?.ratingsAvg?.toFixed(1)}</p>
          <RatingStars size="text-sm" length={avgRating[0]?.ratingsAvg}/>
          <p className="lg:text-2xl text-sm">{format(new Date(),'d MMM, yyyy')}</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-3/4 w-[60%]">
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