import { format } from "date-fns";
import { cookies } from "next/headers";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import RatingStars from "../UI/RatingStars";

async function CommentSection({id}) {
  const cookie = await cookies();
    let reviews;
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/rating/getReviews/${id}`,{
        headers:{
          Cookie:`token=${cookie.get('token')?.value}`
        }
      })
      const resjson = await res.json();
      console.log(resjson)
      reviews = resjson.reviews;
    }catch(err){
      console.log(err)
    }if(!reviews) return null;
    return (
      <div className="space-y-4 bg-white rounded-md">
        {reviews.map((el) => (
          <Review key={el._id} name={el.rater?.username} date={el.createdAt} comment={el.comment} rating={el.rating}/>
        ))}
      </div>
    );
}

export default CommentSection

export function Review({ name, image, date, comment, rating, bg }) {
  const formattedDate = format(new Date(date), "d MMM, yyyy");
  return (
    <div>
      <div className={`flex bg-gray-10 ${bg} rounded-md flex-col gap-5 w-full shadow-s border-b border-gray-200 py-5 px-3`}>
        <div className="flex items-center gap-3">
          <FaCircleUser className="text-4xl" />
          <div className="">
            <div className="flex items-center gap-5">
              <p className="text-xl">{name}</p>
              <p className="text-gray-600 ml-auto text-sm">{formattedDate}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {rating.toFixed(1)}{" "}
              <RatingStars gap={0} size="text-sm" length={rating} />
            </div>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}