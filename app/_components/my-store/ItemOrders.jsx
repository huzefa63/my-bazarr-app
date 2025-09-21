import formatCurrency from "@/helpers/formatCurrency";
import { format } from "date-fns";
import { cookies } from "next/headers";
import Link from "next/link";

async function ItemOrders({params,searchParams}) {
  const param = await params;
  const s = await searchParams;
      const cookie = await cookies();
         const token = cookie.get('token')?.value;
         const statusFilter = s?.filter;
         const startDate = s?.startDate;
         const endDate = s?.endDate;
         let orders;
         // let totalRevenue;
         try{
             const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getAllItemOrders/${params.id}?filter=${statusFilter || 'all'}&startDate=${startDate || ''}&endDate=${endDate || ''}`,{headers:{Cookie:`token=${token}`}});
             const resJson = await res.json();
             orders = resJson.orders;
         }catch(err){
             console.log(err);
             orders = [];
         }
    return (
      <div className="space-y-4">
        {orders.map((el) => (
          <OrderCard
            id={el._id}
            key={el._id}
            date={format(new Date(el.createdAt),'dd MMM, yyyy')}
            status={el.status}
            amount={formatCurrency(el.totalAmount)}
            items="1"
            coverImage={el.coverImage}
          />
        ))}
      </div>
    );
}

export default ItemOrders

function OrderCard({ id, date, status, amount, items,coverImage }) {
  let badgeColor;
  if(status === 'processing') badgeColor = "bg-orange-100 text-orange-500";
  if(status === 'delivered') badgeColor = 'bg-green-100 text-green-500';
  if(status === 'shipped') badgeColor = 'bg-blue-100 text-blue-500';
  return (
    <Link href={`/app/order/${id}`} className="flex smooth-transition hover:bg-gray-100 items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3">
        <img src={coverImage} className="w-18 h-18 object-cover rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold" />
        <div>
          <p className="font-semibold">{id}</p>
          <p className="text-sm text-gray-500">{date}</p>
          <span
            className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full ${badgeColor}`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">{amount}</p>
        <p className="text-xs text-gray-500">{items} items</p>
      </div>
    </Link>
  );
}