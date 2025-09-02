import AddItemForm from "@/app/_components/AddItemForm"

function Page() {
    return (
        <div className="h-full overflow-auto pt-5 px-2">
            <header className="text-3xl text-[var(--text)] tracking-wide">
                Add an item to sell on My Bazarr
            </header>
            <AddItemForm />
        </div>
    )
}

export default Page
