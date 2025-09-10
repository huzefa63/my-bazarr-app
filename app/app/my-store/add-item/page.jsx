import AddItemForm from "@/app/_components/AddItemForm"

function Page() {
    return (
      <div className="h-full pt-5 px-2">
        <div className="h-full bg-white p-5 rounded-md shadow-sm overflow-auto">
          <header className="text-3xl w-fit text-[var(--text)] tracking-wide mb-3">
            Add an item to sell on My Bazarr
          <hr className="my-3 text-gray-300"/>
          </header>
          <AddItemForm />
        </div>
      </div>
    );
}

export default Page
