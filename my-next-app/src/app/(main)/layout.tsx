
import { Header } from "../_components/header";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <main className="flex-1">{children}</main>
        <footer className="h-24 bg-amber-100  flex justify-center items-center ">footer</footer>

    </>
  );
}
