import BackButton from "@/app/_components/BackButton";
import CommentSection from "@/app/_components/product_page/CommentSection";
import ProductDetailSection from "@/app/_components/product_page/ProductDetailSection"
import ProductImageSection from "@/app/_components/product_page/ProductImageSection"
import RatingStats from "@/app/_components/product_page/RatingStats"


async function Page({params}) {
  const searchParams = await params;
    let product;
    let commentCounts;
    let avgRating;
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProductDetails/${searchParams.id}`)
        const resJson = await res.json();
        product = resJson?.product;
        commentCounts = resJson?.commentsCount;
        avgRating = resJson.avgRating

        console.log(product)
      }catch(err){
        console.log(err);
      }
    return (
      <div className="relative h-full w-full lg:p-5">
        <div className="ml-3 mt-3 lg:mt-0 lg:ml-0">
          <BackButton route='/app/browse'/>
        </div>
        <div className="lg:flex h-full w-full  p-3">
          <ProductImageSection
            coverImage={product.coverImage}
            images={product.images}
          />
          <ProductDetailSection
            avgRating={avgRating}
            commentsCount={commentCounts}
            coverImage={product.coverImage}
            product={product}
            id={searchParams.id}
            name={product?.name}
            email={product.seller?.email}
            ratingsAvg={product?.ratingsAvg}
            description={product?.description}
            price={product?.price}
            about={product.about}
            seller={product.seller}
          />
          {commentCounts > 0 && (
            <div className="lg:hidden flex flex-col gap-5 lg:p-3 lg:h-full lg:pl-10">
              <div className="shadow-sm rounded-md p-5">
                <header className="lg:text-4xl text-2xl font-bold ">
                  Ratings
                </header>
                <RatingStats
                  id={searchParams.id}
                  avgRating={avgRating}
                  commentCounts={commentCounts}
                />
              </div>
              <div>
                <h1 className="lg:text-4xl text-2xl p-5 font-bold">Reviews</h1>
                <CommentSection id={searchParams.id} />
              </div>
            </div>
          )}
          {commentCounts === 0 && (
            <h1 className="lg:hidden w-full text-center lg:text-3xl text-xl">
              no Ratings & Comments
            </h1>
          )}
        </div>

        {/* ----------------------------------------------------------------- */}
        <hr className="text-gray-300 my-5 hidden lg:block" />
        {commentCounts > 0 && (
          <div className="lg:flex hidden flex-col gap-5 p-3 h-full pl-10">
            <div className="shadow-sm rounded-md p-5">
              <header className="text-4xl font-bold ">Ratings</header>
              <RatingStats
                id={searchParams.id}
                avgRating={avgRating}
                commentCounts={commentCounts}
              />
            </div>
            <div className="shadow-sm border border-gray-100 h-[500px]">
              <h1 className="lg:text-4xl text-2xl p-5 font-bold">Reviews</h1>
              <CommentSection id={searchParams.id} />
            </div>
          </div>
        )}
        {commentCounts === 0 && (
          <h1 className="lg:block hidden w-full text-center text-3xl">
            no Ratings & Comments
          </h1>
        )}
      </div>
    );
}

export default Page
