import CommentSection from "@/app/_components/product_page/CommentSection";
import ProductDetailSection from "@/app/_components/product_page/ProductDetailSection"
import ProductImageSection from "@/app/_components/product_page/ProductImageSection"
import RatingStats from "@/app/_components/product_page/RatingStats"

function Page() {
    return (
      <div className="h-full w-full p-5">
        <div className="flex h-full w-full  p-3 ">
          <ProductImageSection />
          <ProductDetailSection />
        </div>
        <hr className="text-gray-300 my-5"/>
        <div className="flex flex-col gap-5 p-3 h-full pl-10">
          <div className="shadow-sm rounded-md p-5">
            <header className="text-4xl font-bold ">Ratings & Reviews</header>
            <RatingStats />
          </div>
          <CommentSection />
        </div>
      </div>
    );
}

export default Page
