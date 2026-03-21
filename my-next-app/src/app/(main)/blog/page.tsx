
export const dynamic = "force-static";
import { BLOGS_PER_PAGE } from '@/configs/itemsPerPage';
import { BlogsData } from '@/data/blogs.data';
import { BreadCrumbItem } from '@/app/_components/ui/bread-crumbs/bread-crumbs.types';
import AllBlogs from '@/app/_components/features/blogs/all-blogs/all-blogs';
import BigBanner from '@/app/_components/section/big-banner/big-banner';
import BreadCrumbs from '@/app/_components/ui/bread-crumbs/bread-crumbs';
import Pagination from '@/app/_components/ui/pagination/pagination';

interface BlogPageProps {
  searchParams: {
    page?: string; // فقط key "page" استفاده می‌شود
    [key: string]: string | string[] | undefined; // بقیه کلیدها اختیاری
  };
}

export default function Blog({ searchParams }: BlogPageProps) {
  const breadcrumbItems: BreadCrumbItem[] = [
    { label: "Home", url: "/" },
    { label: "blog", url: "/blog" }
  ];

  const blogsPerPage = BLOGS_PER_PAGE;
  const activePage = Number(searchParams.page) || 1;
  const startIndex = (activePage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const visibleBlogs = BlogsData.slice(startIndex, endIndex);

  return (
    <>
      <section>
        <BreadCrumbs items={breadcrumbItems} />
      </section>

      <section>
        <AllBlogs visibleBlogs={visibleBlogs} />
      </section>

      <section className="containerD my-6 p-2">
        <Pagination totalItems={BlogsData.length} activePage={activePage} itemPerPage={blogsPerPage} />
      </section>

      <section className="!mx-0 !w-full bg-green-200 !px-0">
        <BigBanner />
      </section>
    </>
  );
}
