
import { Header } from "../_components/section/header";
import Footer from "../_components/section/footer/footer";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>

    </>
  );
}
