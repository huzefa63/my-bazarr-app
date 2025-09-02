import { FaCircleUser } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

function CommentSection() {
    return (
      <div>
        <div className="flex rounded-md flex-col gap-5 w-full shadow-sm py-5 px-3">
          <div className="flex items-center gap-3">
            <FaCircleUser className="text-5xl" />
            <div>
              <div className="flex items-center gap-5">
                <p className="text-2xl">John Doe</p>
                <p className="text-gray-600 ">April 4,2025</p>
              </div>
              <p className="flex text-yellow-400 text-2xl">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </p>
            </div>
          </div>
          <p>
            Great Quality headphones . I just love the design and the comfort it
            provides is like from out of this world
          </p>
        </div>
      </div>
    );
}

export default CommentSection
