"use client";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner, FaTrash } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import Select from "react-select";

const inputStyles =
  "shadow-sm bg border-gray-300 col-span-2 border-1 transition duration-300 ease-in-out resize-none focus:border-blue-500 focus:border-1 outline-none px-4 py-3 rounded-xl placeholder:text-sm";

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "mobiles-accessories", label: "Mobiles & Accessories" },
  { value: "computers-laptops", label: "Computers & Laptops" },
  { value: "home-appliances", label: "Home Appliances" },
  { value: "furniture", label: "Furniture" },
  { value: "fashion-men", label: "Men's Fashion" },
  { value: "fashion-women", label: "Women's Fashion" },
  { value: "kids-toys", label: "Kids & Toys" },
  { value: "sports-outdoors", label: "Sports & Outdoors" },
  { value: "beauty-personal-care", label: "Beauty & Personal Care" },
  { value: "health-wellness", label: "Health & Wellness" },
  { value: "groceries", label: "Groceries" },
  { value: "books-stationery", label: "Books & Stationery" },
  { value: "automotive", label: "Automotive" },
  { value: "tools-hardware", label: "Tools & Hardware" },
  { value: "jewelry-watches", label: "Jewelry & Watches" },
  { value: "pet-supplies", label: "Pet Supplies" },
  { value: "musical-instruments", label: "Musical Instruments" },
  { value: "gaming", label: "Gaming" },
  { value: "home-decor", label: "Home Decor" },
];

export default function AddItemForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const onSubmit = async (data) => {
    // console.log(data);
    // Example payload:
    // data = { name, price, category: {value,label}, description, about, cover:File, images:{one:File,...} }
    setIsSubmitting(true);
    console.log(data)
    const formData = new FormData();
    formData.append('price',data.price);
    formData.append('category',data.category.value);
    formData.append('about',data.about);
    formData.append('description',data.description);
    formData.append('name',data.name);
    formData.append('images',data.images.one);
    formData.append('images',data.images.two);
    formData.append('images',data.images.three);
    formData.append('images',data.images.four);
    formData.append('cover',data.cover);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/product/uploadProduct`,
        formData,
        { withCredentials: true }
      );
      queryClient.refetchQueries(['myProducts']);
      toast.success("Product uploaded!");
      router.replace('/app/my-store/items')
    } catch (err) {
      console.log(err);
      toast.error("Can't upload product now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  async function handleFileChange(e) {
    if (!e.target.files || e.target.files.length < 1) return null;
    return e.target.files[0];
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full flex flex-col mt-5 min-h-full bg-white"
    >
      <div className="w-full gap-5">
        {/* Product Name & Price */}
        <div className="w-full lg:flex gap-5">
          <div className="min-w-[38%]">
            {/* Name */}
            <div className="flex flex-col gap-2 mb-1">
              <label className="text-lg">Product Name</label>
              <input
                {...register("name", { required: "Product name is required" })}
                type="text"
                placeholder="Enter product name"
                className={inputStyles}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2 mb-1">
              <label className="text-lg">Item Price</label>
              <input
                {...register("price", { required: "Price is required" })}
                type="number"
                placeholder="Enter price"
                className={inputStyles}
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2 mb-1">
              <label className="text-lg">Category</label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={categoryOptions}
                    isSearchable
                    placeholder="Select category"
                    instanceId="category-select"
                  />
                )}
              />
              {errors.category && (
                <span className="text-red-500 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mb-1">
              <label className="text-lg">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter product details"
                className={inputStyles}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

         {window.innerWidth < 1024 && <div className="flex flex-col gap-2 mb-1 mt-3 lg:hidden">
            <label className="text-lg">About product in detail</label>
            <textarea
              {...register("about", { required: "About is required" })}
              placeholder="Enter product details"
              className={`${inputStyles} h-26`}
            />
            {errors.about && (
              <span className="text-red-500 text-sm">
                {errors.about.message}
              </span>
            )}
          </div>}

          {/* Cover Image */}
          <div className="w-full space-y-2 h-full">
            <label className="text-lg">Cover Image</label>
            <Controller
              name="cover"
              control={control}
              rules={{ required: "Cover image is required" }}
              render={({ field }) => (
                <UploadImage {...field} id="cover" styles="h-90" />
              )}
            />
            {errors.cover && (
              <span className="text-red-500 text-sm">
                {errors.cover.message}
              </span>
            )}
          </div>
        </div>

        {/* About */}
        {window.innerWidth >= 1024 && <div className="lg:flex flex-col gap-2 mb-1 mt-3 hidden">
          <label className="text-lg">About product in detail</label>
          <textarea
            {...register("about", { required: "About is required" })}
            placeholder="Enter product details"
            className={`${inputStyles} h-26`}
          />
          {errors.about && (
            <span className="text-red-500 text-sm">{errors.about.message}</span>
          )}
        </div>}

        {/* Reference Images */}
        <div className="flex flex-col w-full gap-3 mt-8 mb-3 h-1/4">
          <h1>Reference Images</h1>
          <div className="w-full space-y-5 lg:space-y-0 lg:grid grid-cols-4 gap-2 h-full">
            {["one", "two", "three", "four"].map((id) => (
              <Controller
                key={id}
                name={`images.${id}`}
                control={control}
                render={({ field }) => (
                  <UploadImage {...field} id={id} styles="h-64" />
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        className="disabled:cursor-not-allowed relative ml-auto bg-purple-500 w-fit transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-purple-600 text-white rounded-sm px-6 py-2 flex items-center justify-center gap-2"
      >
        <span className={`${isSubmitting && "opacity-0"}`}>Upload Product</span>
        {isSubmitting && (
          <FaSpinner className="text-lg absolute top-1/2 left-1/2 -translate-1/2 animate-spin" />
        )}
      </button>
    </form>
  );
}

// UploadImage Component
function UploadImage({ value, onChange, id, styles = "" }) {
  const [image, setImage] = useState(value ? URL.createObjectURL(value) : "");
  const ref = useRef(null);

  const handleImageChange = async (e) => {
    if (!e.target.files || e.target.files.length < 1) return;
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    onChange(file);
  };

  return (
    <label
      className={`w-full relative block border-dashed border-1 border-gray-500 ${styles}`}
    >
      {image && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setImage("");
            ref.current.value = "";
            onChange(null);
          }}
          type="button"
          className="w-fit h-10 absolute right-0 -top-11 bg-red-500 hover:bg-red-600 rounded-sm px-3 py-2 flex justify-center gap-2"
        >
          <FaTrash className="text-white" />
        </button>
      )}
      <input
        ref={ref}
        onChange={handleImageChange}
        type="file"
        id={id}
        className="opacity-0 absolute top-1/2 left-1/2 -translate-1/2"
      />
      {image ? (
        <img
          src={image}
          className="w-full h-full transition-all duration-300 ease-in-out object-fill"
        />
      ) : (
        <div className="absolute inset-0 space-y-3 flex justify-center items-center flex-col">
          <LuUpload className="text-gray-600 text-4xl" />
          <span className="text-sm">Upload image here</span>
        </div>
      )}
    </label>
  );
}
