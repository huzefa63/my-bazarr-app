import formatCurrency from "@/helpers/formatCurrency";
import { cookies } from "next/headers";

async function MetricCardContainer({productId}) {
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    let totalRevenue;
    let totalSold;
    let ordersPending;
    // let totalRevenue;
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProductMetricDetails/${productId}`,{headers:{Cookie:`token=${token}`}});
        const resJson = await res.json();
        totalRevenue = resJson.productDetails.totalRevenue;
        totalSold = resJson.productDetails.sold;
        ordersPending = resJson.productDetails.ordersPending;
    }catch(err){
        console.log(err);
    }
    return (
      <div className="h-full grid grid-cols-2 md:grid-cols-4 gap-3 relative">
        <MetricCard label="Total Sold" value={totalSold} />
        <MetricCard label="Total Revenue" value={formatCurrency(totalRevenue)} />
        <MetricCard label="Orders" value="56" />
        <MetricCard label="Pending" value={ordersPending} />
      </div>
    );
}

export default MetricCardContainer

function MetricCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-1">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-xl font-bold">{value}</span>
    </div>
  );
}