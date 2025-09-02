import MyStoreSidebar from "@/app/_components/MyStoreSidebar"

function layout({children}) {
    return (
      <div className=" flex h-full bg-gray-100">
        <MyStoreSidebar />
        <main className="p-5 w-full">{children}</main>
      </div>
    );
}

export default layout
