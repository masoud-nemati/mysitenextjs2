import Image from "next/image";
import { FC } from "react";
import { IBlogDetailsProps } from "./blog-details.types";
import Tag from "../../tag/tag";
import Author from "../author/author";

export const BlogDetailsComponent: FC<IBlogDetailsProps> = (props) => {
    const { srcImage, label, title, content, readingTime, author } = props;
    return (
        <>

            {/* blog title & details */}
            <section className="containerD my-4">
                <div>
                    {/* <Tag tag_title={label} /> */}

                    {/* blog title */}
                    <h1 className="mb-6 mt-[15px] text-3xl font-bold leading-[41px] text-[#425a8b] text-right">
                        {title}
                    </h1>

                    {/* blog author info */}
                    {
                        (author ?
                            <div className="flex items-center gap-4">
                                <Author
                                    authorName={author.authorName}
                                    authorPostCount={author.authorPostCount}
                                    authorStartDate={author.authorStartDate}
                                    authorProfileImage={author.authorProfileImage}
                                    authorBio={author.authorBio}
                                    variant="minimal"
                                />
                            </div> : "")
                    }
                </div>
            </section>

            {/* blog image */}
            <section className="containerD my-5">
                <div className="relative h-full w-full">
                    <Image
                        src={srcImage} // بدون اضافه کردن /images/blog-img/
                        alt={title}
                        fill
                        className="!static h-1/2 w-full object-cover"
                    />

                </div>
            </section>

            {/* blog content */}
            <section dir="rtl" className="containerD my-5 py-4 text-right">
                <div
                    className="prose prose-slate lg:prose-lg font-sans text-[#212529] leading-8"
                    dangerouslySetInnerHTML={{ __html: content ?? "" }}
                />
            </section>
            <div className="containerD my-5 border border-b-4 border-secondary-300"></div>

            {/* blog author info */}
            {
                (author ?
                    <section className="containerD">
                        <Author
                            authorName={author.authorName}
                            authorPostCount={author.authorPostCount}
                            authorStartDate={author.authorStartDate}
                            authorProfileImage={author.authorProfileImage}
                            authorBio={author.authorBio}
                            variant="default"
                        />
                        <br />
                    </section>
                    : "")
            }
        </>
    )

}
export default BlogDetailsComponent;
