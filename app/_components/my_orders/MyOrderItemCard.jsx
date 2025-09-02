function MyOrderItemCard() {
    const link =
      "https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg";
    return (
      <div className="mt-5 p-3 w-full border border-gray-300 shadow-sm rounded-md bg-white">
        <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
          <header className="font-bold text-lg">Order Item</header>
          <div className="flex items-center gap-2 bg-orange-100 w-fit px-3 rounded-full text-orange-400 text-sm">
            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
            <p>in progress</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-md overflow-hidden mt-3 ">
            <img src={link} alt="" className="h-full w-full" />
          </div>
          <div className="">
            <h1 className="font-semibold">fancy T-shirt</h1>
            <p>1,299 rs only</p>
            <p className="text-gray-600">
              delivery expected on jun 10, saturday
            </p>
          </div>
        </div>
      </div>
    );
}

export default MyOrderItemCard
