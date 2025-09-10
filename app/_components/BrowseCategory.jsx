'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

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
function BrowseCategory() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    function handleChangeCategory(e){
        const target = e.target;
        if(target.classList.contains('category')){
            const {category} = target.dataset;
            const params = new URLSearchParams(searchParams);
            params.set('category',category);
            router.replace(`${pathname}?${params}`);
        }
    }
  return (
    <div className="border- w-full mt-4 flex justify-center gap-2 text-gray-800 flex-wrap" onClick={handleChangeCategory}>
      {categoryOptions.map((el) => (
        <p data-category = {el.value}
          key={el.value}
          className="category px-2 py-1 bg-gray-200 rounded-sm shadow-sm hover:cursor-pointer hover:bg-gray-300 duration-300 transition-all ease-in-out"
        >
          {el.label}
        </p>
      ))}
    </div>
  );
}

export default BrowseCategory;
