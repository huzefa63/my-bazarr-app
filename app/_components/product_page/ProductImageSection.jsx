function ProductImageSection() {
  const link =
    "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg";
  return (
    <div className="w-full h-3/4 ">
      <div className="h-full w-full">
        <img className="h-full w-full object-fit rounded-md" src={link} alt="" />
      </div>
      <div className="h-[20%] overflow-hidden max-w-full grid grid-cols-5 gap-2 mt-5 ">
        <img className="h-full object-fit rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out" src={link} alt="" />
        <img className="h-full object-fit rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out" src={link} alt="" />
        <img className="h-full object-fit rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out" src={link} alt="" />
        <img className="h-full object-fit rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out" src={link} alt="" />
        <img className="h-full object-fit rounded-md hover:opacity-90 hover:cursor-pointer duration-300 transition-all ease-in-out" src={link} alt="" />
      </div>
    </div>
  );
}

export default ProductImageSection;
