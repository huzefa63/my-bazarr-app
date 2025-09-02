import MyStoreSidebar from "@/app/_components/MyStoreSidebar"

function Layout({children}) {
    return (
        <div className="flex h-full bg-gray-100">
            <MyStoreSidebar />
            <main className="h-full w-full">{children}</main>
        </div>
    )
}

export default Layout
