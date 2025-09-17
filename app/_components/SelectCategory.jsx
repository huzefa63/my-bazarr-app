'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";
const categoryOptions = [
  { value: "all", label: "all Categories" },
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
function SelectCategory() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleChangeCategory({value}){
        const params = new URLSearchParams(searchParams);
      if (searchParams.get("category") === value && searchParams.get('category') !== 'all') {
        params.delete("category");
      } else params.set("category", value);
      router.replace(`${pathname}?${params}`, { scroll: false });
    }
    const selectedCategory = categoryOptions.find(el => el.value === searchParams.get('category'));
  return (
    <div className="max-w-[45%] min-w-[45%] lg:hidden">
      <Select
    //   defaultInputValue={searchParams.get('category') || 'all'}
        value={selectedCategory}
      onChange={handleChangeCategory}
        options={categoryOptions}
        isSearchable
        placeholder="Select category"
        instanceId="category-select"
      />
    </div>
  );
}

export default SelectCategory;
