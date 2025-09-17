import BrowseCategory from "@/app/_components/BrowseCategory";
import BrowseResultContainer from "@/app/_components/BrowserResultContainer";
import ProductCard from "@/app/_components/ProductCard";
import SearchBar from "@/app/_components/SearchBar";
import SelectCategory from "@/app/_components/SelectCategory";
import { Suspense } from "react";
import { IoFilterSharp } from "react-icons/io5";

async function Page() {
  let products;
  let totalResults;
  // try{
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProducts`);
  //   console.log('res: ',res)
  //   const resJson = await res.json();
  //   console.log('resjson: ',resJson)
  //   products = resJson.products;
  //   totalResults = resJson.totalResults;
  // }catch(err){
  //   products = [];
  //   console.log(err);
  // }
    return (
      <div className="flex flex-col items-center h-full overflow-y-scroll">
        <div className="lg:w-3/4 w-full mx-auto px-4 py-8">
          <Suspense>
            <SearchBar />
            <BrowseCategory />
          </Suspense>
        </div>
        <div className="lg:w-[95%] w-full lg:px-3 space-y-1 px-1">
          <div className="w-full flex justify-between items-center px-2 lg:px-0">
            <h1 className="lg:text-3xl text-2xl font-bold">Search Results</h1>
            <Suspense>
              <SelectCategory />
            </Suspense>
          </div>

          <Suspense>
            <BrowseResultContainer />
          </Suspense>
        </div>
        {/* <div className="w-[95%] h-full p-3 grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 gap-y-8 ">
          {products.map(el => <ProductCard key={el._id} price={el.price} rating={el.ratingsAvg} id={el._id} image={el.coverImage} name={el.name} description={el.description}/>)}
        </div> */}
      </div>
    );
}

export default Page
