import Sidebar from "./Sidebar";

function RootLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

export default RootLayout;
