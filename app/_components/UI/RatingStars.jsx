import { IoMdStar, IoMdStarOutline } from "react-icons/io"

function RatingStars({length,size='text-3xl',gap=1}) {
    return (
        <div className={`flex gap-${gap} text-yellow-400 ${size}`}>
                    {Array.from({length:length}).map((el,i) => <IoMdStar key={i}/>)}
                    {Array.from({length:5 - length}).map((el,i) => <IoMdStarOutline key={i}/>)}
                  </div>
    )
}

export default RatingStars
