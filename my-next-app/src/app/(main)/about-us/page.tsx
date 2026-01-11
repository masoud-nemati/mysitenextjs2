"use client";


import AboutSection from "@/app/_components/features/sections/AboutSection";
import BreadCrumbs from "@/app/_components/ui/bread-crumbs/bread-crumbs";
import type { BreadCrumbItem } from "@/app/_components/ui/bread-crumbs/bread-crumbs.types";

const breadcrumbItems: BreadCrumbItem[] = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <section>
        <BreadCrumbs items={breadcrumbItems} />
      </section>

      <AboutSection />
    </>
  );
}
