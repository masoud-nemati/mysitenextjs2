import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@/app/_components/ui/icons/icons";
import { FC } from "react";
import { IBlogDetailsProps } from "./blog-details.types";
import Tag from "@/app/_components/ui/tag/tag";
import Author from "../author/author";

const BlogDetailsComponent: FC<IBlogDetailsProps> = (props) => {
  const { srcImage, label, title, content, author } = props;

  return (
    <>
      {/* blog title & details */}
      <section className="containerD my-6 md:my-10">
        <div>
          <Tag tag_title={label} />

          {/* blog title - responsive font size */}
          <h1 className="mb-4 pr-5 md:mb-6 mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#425a8b] text-right">
            {title}
          </h1>

          {/* blog author info (top) - فقط روی دسکتاپ نمایش بده */}
          {author && (
            <div className="hidden md:flex items-center gap-4 mt-6">
              <Author
                authorName={author.authorName}
                authorPostCount={author.authorPostCount}
                authorStartDate={author.authorStartDate}
                authorProfileImage={author.authorProfileImage}
                authorBio={author.authorBio}
                variant="minimal"
              />
            </div>
          )}
        </div>
      </section>

      {/* blog image - کاملاً responsive */}
      <section className="containerD my-6 md:my-8">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={srcImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>
      </section>

      {/* blog content */}
<section dir="rtl" className="containerD my-12">
        <article
          className="blog-content"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: content ?? "" }}
        />
      </section>



      <div className="containerD my-8 border-t-4 border-secondary-300" />

      {/* blog author info (bottom) - روی موبایل هم نمایش بده، روی دسکتاپ کامل‌تر */}
      {author && (
        <section className="containerD pb-8">
          <Author
            authorName={author.authorName}
            authorPostCount={author.authorPostCount}
            authorStartDate={author.authorStartDate}
            authorProfileImage={author.authorProfileImage}
            authorBio={author.authorBio}
            variant={author ? "default" : "minimal"} // یا می‌تونی variant جداگانه برای موبایل تعریف کنی
          />
        </section>
      )}

      <section className="containerD py-8 md:py-12">
        <div className="flex justify-start">
          <Link
            href="/blog" // اگر مسیر لیست مقالاتت چیز دیگه‌ای هست، اینجا تغییر بده مثلاً /articles یا /
            className="
              inline-flex items-center gap-3
              px-6 py-3
              text-sm md:text-base font-medium
              text-[#425a8b]
              bg-gray-100 hover:bg-gray-200
              rounded-xl
              transition-all duration-200
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-[#425a8b] focus:ring-offset-2
            "
          >
            <IconArrowLeft className="w-5 h-5" />
            <span></span>
          </Link>
        </div>
      </section>


    </>
  );
};

export default BlogDetailsComponent;