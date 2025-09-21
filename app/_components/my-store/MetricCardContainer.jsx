import formatCurrency from "@/helpers/formatCurrency";
import { cookies } from "next/headers";

async function MetricCardContainer({params}) {
  const param = await params;
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    let totalRevenue;
    let totalSold;
    let ordersPending;
    let ordersCancelled;
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProductMetricDetails/${param?.id}`,{headers:{Cookie:`token=${token}`}});
        const resJson = await res.json();
        totalRevenue = resJson.productDetails.totalRevenue;
        totalSold = resJson.productDetails.sold;
        ordersPending = resJson.productDetails.ordersPending;
        ordersCancelled = resJson.productDetails.totalOrdersCancelled;
    }catch(err){
        console.log(err);
    }
    return (
      <div className="h-full grid grid-cols-2 md:grid-cols-4 gap-3 relative">
        <MetricCard label="Total Sold" value={totalSold} />
        <MetricCard label="Total Revenue" value={formatCurrency(totalRevenue)} />
        <MetricCard label="not shipped" value={ordersPending} />
        <MetricCard label="Orders cancelled" value={ordersCancelled} />
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