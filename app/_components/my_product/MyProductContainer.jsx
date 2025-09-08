import MyProductItem from "./MyProductItem";
import { cookies } from "next/headers";
async function MyProductContainer() {
  const cookie = await cookies();
  let products = [];
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getMyProducts`,{
        headers:{
          Cookie:`token=${cookie.get('token')?.value}`
        },
        next:{revalidate:30}
      })
      const resJson = await res.json();
      products = resJson?.products;
    }catch(err){
      console.log(err);
    }
    return (
      <div className="h-full overflow-auto rounded-md">
            {products.map((el) => (
              <MyProductItem
                key={el._id}
                name={el.name}
                price={el.price}
                description={el.description}
                id={el._id}
                image={el.coverImage}
              />
            ))}
      </div>
    );
}

export default MyProductContainer
