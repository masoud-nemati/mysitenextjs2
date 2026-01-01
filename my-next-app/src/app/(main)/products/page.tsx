import ProductsSection from "@/app/_components/features/products/product-list/product-list";
import BreadCrumbs from "@/app/_components/ui/bread-crumbs/bread-crumbs";
import type { BreadCrumbItem } from "@/app/_components/ui/bread-crumbs/bread-crumbs.types";

const breadcrumbItems: BreadCrumbItem[] = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
];



export default function ProductsPage() {
  return (
    <>
      <section>
        <BreadCrumbs items={breadcrumbItems} />
      </section>



      <ProductsSection />



    </>)
}
