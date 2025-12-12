import { fetchBlogBySlug } from '@/data/blogs.data';
import { notFound } from 'next/navigation';
import { BlogDetailsComponent } from '@/app/_components/blogs/blog-details/blog-details';
import BreadCrumbs from '@/app/_components/bread-crumbs/bread-crumbs';
import { BreadCrumbItem } from '@/app/_components/bread-crumbs/bread-crumbs.types';

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {

    const { slug } = await params;  // ⬅⬅ این لازم است

    const blog = await fetchBlogBySlug(slug);

    console.log("BLOG DATA:", blog); // برای تست

    if (!blog) return notFound();

    const breadcrumbItems: BreadCrumbItem[] = [
        { label: "Home", url: "/" },
        { label: "Blog", url: "/blog" },
        { label: blog.title, url: `/blog/${blog.slug}` }
    ];

    return (
        <>
            <BreadCrumbs items={breadcrumbItems} />
            <BlogDetailsComponent {...blog} />
        </>
    );
}
