import BrowseCategory from "@/app/_components/BrowseCategory";
import BrowseResultContainer from "@/app/_components/BrowserResultContainer";
import ProductCard from "@/app/_components/ProductCard";
import SearchBar from "@/app/_components/SearchBar";
import { Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

async function Page() {
  let products;
  let totalResults;
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProducts`);
    console.log('res: ',res)
    const resJson = await res.json();
    console.log('resjson: ',resJson)
    products = resJson.products;
    totalResults = resJson.totalResults;
  }catch(err){
    products = [];
    console.log(err);
  }
    return (
      <div className="flex flex-col items-center h-full">
        <div className="w-3/4 mx-auto px-4 py-8">
          <SearchBar />
          <Suspense>
            <BrowseCategory />
          </Suspense>
        </div>
        <div className="w-[95%] px-3 space-y-1">
          <div className="w-full flex justify-between">
            <h1 className="text-3xl font-bold">Search Results</h1>
            <button className="hover:bg-gray-300 p-2 rounded-sm duration-300 transition-all ease-in-out hover:cursor-pointer">
              <IoFilterSharp className="text-3xl" />
            </button>
          </div>

          <p className="text-gray-700">{totalResults} Results Found</p>
        </div>
        <BrowseResultContainer products={products} />
        {/* <div className="w-[95%] h-full p-3 grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 gap-y-8 ">
          {products.map(el => <ProductCard key={el._id} price={el.price} rating={el.ratingsAvg} id={el._id} image={el.coverImage} name={el.name} description={el.description}/>)}
        </div> */}
      </div>
    );
}

export default Page
