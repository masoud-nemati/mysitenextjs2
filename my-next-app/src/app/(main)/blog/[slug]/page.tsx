import { fetchBlogBySlug, BlogsData } from '@/data/blogs.data';
import { notFound } from 'next/navigation';
import BlogDetailsComponent from '@/app/_components/features/blogs/blog-details/blog-details';
import BreadCrumbs from '@/app/_components/ui/bread-crumbs/bread-crumbs';
import { BreadCrumbItem } from '@/app/_components/ui/bread-crumbs/bread-crumbs.types';

// ✅ تعریف تایپ
interface IBlog {
  title: string;
  slug: string;
  content: string;

  tag_type?: string;
  discount?: number;
  rate?: number;
  ratersNumber?: number;
}

// ✅ مهم‌ترین قسمت برای export
export async function generateStaticParams() {
  return BlogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ صفحه
export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {

  const { slug } = params;

  const blog = await fetchBlogBySlug(slug);
  

  if (!blog) return notFound();

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" },
    { label: blog.title, url: `/blog/${blog.slug}` }
  ];

  return (
    <>
      <BreadCrumbs items={breadcrumbItems} />
      <BlogDetailsComponent
        {...blog}
        content={blog.content}
      />
    </>
  );
}
