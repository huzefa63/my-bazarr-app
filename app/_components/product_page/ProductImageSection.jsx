'use client';

import { useState } from "react";

function ProductImageSection({coverImage,images}) {
  const  [previewImage,setPreviewImage] = useState(coverImage);
  return (
    <div className="w-full lg:h-full overflow-hidden">
      <div className="lg:h-[450px] lg:w-[820px]">
        <img
          className="h-full w-full object-cover rounded-md"
          src={previewImage}
          alt=""
        />
      </div>
      <div className="lg:h-[20%] overflow-hidden max-w-full grid grid-cols-5 gap-2 mt-5 ">
        <img
        onClick={() => setPreviewImage(coverImage)}
          className={`lg:h-full h-16 object-fit ${previewImage !== coverImage && 'scale-85'} rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out`}
          src={coverImage}
          alt=""
        />

        {images.map((el) => (
          <img
          onClick={() => setPreviewImage(el)}
            key={el}
            className={`lg:h-full h-16 object-fit ${previewImage !== el && 'scale-85 '} rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out`}
            src={el}
            alt="images"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImageSection;
