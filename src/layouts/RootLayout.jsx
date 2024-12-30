import Sidebar from "./Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <Sidebar />
      <header className="w-[calc(100%-80px)] h-[80px] bg-secondary z-10 fixed top-0 right-0 px-9 flex items-center text-white">
        header
      </header>
      <main className="w-full min-h-[80vh] bg-primary pl-20 pt-20 text-white">{children}</main>
      <footer className="w-full h-[200px] bg-secondary text-white">footer</footer>
    </div>
  );
}

export default RootLayout;
