"use client";
import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
const inputStyles =
  "shadow-sm bg border-gray-300 col-span-2 border-1 transition duration-300 ease-in-out resize-none focus:border-blue-500 focus:border-1 outline-none px-4 py-3 rounded-xl placeholder:text-sm ";

function AddItemForm() {
  const [images, setImages] = useState({
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
  });

  // ✅ Simplified image handler
  async function handleChangeImages(e) {
    if (!e.target.files || e.target.files.length < 1) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file); // Direct browser preview URL
    return url;
  }

  return (
    <form
      className="p-5 w-full shadow-md rounded-sm flex flex-col  mt-5 min-h-full bg-white"
    >
      <div className="w-full  gap-5">
        {/* Product Name */}
        <div className="w-full flex gap-5">
          <div className="min-w-[38%]">
            <div className="flex flex-col gap-2 mb-1">
              <label htmlFor="itemName" className="text-lg">
                Product name
              </label>
              <input
                name="name"
                required
                type="text"
                id="itemName"
                placeholder="Enter product name"
                className={inputStyles}
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2 mb-1">
              <label htmlFor="itemPrice" className="text-lg">
                Item price
              </label>
              <input
                name="price"
                required
                type="number"
                minLength={1}
                id="itemPrice"
                placeholder="Enter price"
                className={inputStyles}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mb-1">
              <label htmlFor="category" className="text-lg ">
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                className={inputStyles}
              >
                <option value="">Electronics</option>
                <option value="">Clothes</option>
                <option value="">Smartphone</option>
                <option value="">home appliances</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-1">
              <label htmlFor="itemDesc" className="text-lg ">
                Description
              </label>
              <textarea
                name="description"
                required
                id="itemDesc"
                placeholder="Enter product details"
                className={inputStyles}
              />
            </div>
          </div>
          {/* Cover Image */}

          <div className="w-full space-y-2 h-full">
              <label htmlFor="image" className="text-lg ">
                Cover Image
              </label>
            <UploadImage
              styles="h-90"
              id="cover"
              fieldName="cover"
              handler={handleChangeImages}
              required={true}
            />
          </div>
        </div>

        {/* Reference Images */}
        <div className="flex flex-col w-full gap-3 mt-8 mb-3 h-1/4">
            <h1>Reference Images</h1>
            <div className="w-full grid grid-cols-4 gap-2 h-full">
              <UploadImage
              styles="h-64"
                fieldName="images"
                required={true}
                id="one"
                handler={handleChangeImages}
              />
              <UploadImage
              styles="h-64"
                fieldName="images"
                id="two"
                handler={handleChangeImages}
              />
              <UploadImage
              styles="h-64"
                fieldName="images"
                id="three"
                handler={handleChangeImages}
              />
              <UploadImage
              styles="h-64"
                fieldName="images"
                id="four"
                handler={handleChangeImages}
              />
            </div>
        </div>
      </div>

      <button className="ml-auto bg-purple-500 w-fit transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-purple-600 text-white rounded-sm px-6 py-2 flex items-center gap-2">
        Upload Product
      </button>
    </form>
  );
}

export default AddItemForm;

function UploadImage({ fieldName, handler, id, required, styles = "" }) {
  const [image, setImage] = useState("");
  const ref = useRef(null);

  async function handleImageChange(e) {
    const url = await handler(e);
    setImage(url);
  }

  return (
    <label
      className={`w-full relative block border-dashed border-1 border-gray-500 ${styles} h-72`}
    >
      {image && (
        <button
        onClick={(e) => {
          e.preventDefault();
          setImage("");
        }}
          type="button"
          className="w-fit h-10 absolute right-0 -top-11 border-1 border-[var(--border)] text-[var(--text)] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-red-600 bg-red-500 rounded-sm px-3 py-2 flex justify-center gap-2"
        >
          <FaTrash className="text-white" />
        </button>
      )}
      <label htmlFor={id} className={`h-full w-full`}>
        <input
          ref={ref}
          onChange={handleImageChange}
          type="file"
          hidden
          id={id}
          name={fieldName}
          required={required}
        />
        {image ? (
          <img
            src={image}
            className={`w-full h-full transition-all duration-300 ease-in-out object-fill`}
          />
        ) : (
          <div className="w-full absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300 ease-in-out rounded-sm px-3 py-2 flex justify-center gap-2">
            <div className="w-fit flex justify-center items-center flex-col">
              <LuUpload className="text-gray-600 text-5xl " />
              <label
                type="button"
                htmlFor={id}
                className="w-full text-[var(--text)] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[var(--surface)] rounded-sm px-3 py-2 flex justify-center gap-2"
              >
                upload image here
              </label>
            </div>
          </div>
        )}
      </label>
    </label>
  );
}
