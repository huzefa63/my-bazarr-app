import AppNav from "../_components/AppNav";

function AppLayout({children}) {
    return (
      <div className="h-screen overflow-hidden w-full bg-[var(--background)]">
        <AppNav />
        <main className="overflow-auto h-[90%]">{children}</main>
      </div>
    );
}

export default AppLayout
