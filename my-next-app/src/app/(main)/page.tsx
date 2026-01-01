import { AttributeSection } from "../_components/features/attribute-section";
import { SmallBanner } from "../_components/section/small-baner/small-baner"
import { smallBannerData } from "@/data/small-baner-data";
import LatestBlogs from "@/app/_components/features/blogs/latest-blogs/latest-blogs";
import ImageSlider from "@/app/_components/section/ImageSlider/ImageSlider";
import AboutSection from "@/app/_components/features/sections/AboutSection";
import { homeSliderImages } from "@/data/sliders";
import Reveal from "@/app/_components/ui/animation/Reveal"
import LatestSkills from "../_components/features/skills/latestskills/LatestSkills";
// import { FlexBoxes } from "../_components/section/testcomp/testbox";
// import { Button } from "../_components/ui/button"
// import { Input } from "../_components/ui/input";
// import { IconAccount, IconCart, IconEmail } from "../_components/ui/icons/icons"
// import SpecialOffersBanner from "../_components/section/special-offers-banner/special-offers-banner";
// import ProductList from "../_components/features/products/product-list/product-list";
// import CommentSection from "../_components/section/CommentSection";
// import ImageComponent from "@/app/_components/section/image/ImageComponent";
// import { COUNTDOWN_TARGET_DATE } from '@/configs/countdown'
// import { ProductGroups } from "../_components/features/products/product-groups/product-groups";
// import { CountdownTimer } from "../_components/ui/timer/timer";
// import { redirect } from "next/navigation";







export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container-fluid mx-auto flex flex-col items-center space-y-[50px] py-16">

        <Reveal>
          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
              tracking-tight
              text-blue-900 dark:text-blue-300
              mb-3
            "
          >
            Welcome to my site Masoud
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="containerD w-full">
            <ImageSlider
              images={homeSliderImages}
              height={500}
              maxWidth="max-w-6xl"
            />
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section className="containerD w-full">
            <AttributeSection />
          </section>
        </Reveal>

        <Reveal delay={0.3}>
          <section className="containerD w-full">
            <SmallBanner data={smallBannerData} />
          </section>
        </Reveal>

        <Reveal delay={0.4}>
          <section className="containerD w-full">
            <LatestBlogs />
          </section>
        </Reveal>

        <Reveal delay={0.5}>
          <section className="containerD w-full">
            <LatestSkills />
          </section>
        </Reveal>

        <Reveal delay={0.6}>
          <section className="containerD w-full">
            <AboutSection />
          </section>
        </Reveal>

      </section>
    </main>
  );
}



{/* <ProductGroups /> */ }

{/* <CountdownTimer targetDate={COUNTDOWN_TARGET_DATE} /> */ }

{/* <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>

      <Input id="simple" label="Simple Input" placeholder="Enter text..." variant="info" color="primary" compsize="xm" byIcon={true} icon={<IconEmail width={18} height={18} color="black" />} />
      <Input id="with-icon" label="Input with Icon" placeholder="Search..." byIcon={true} variant="secondary" color="yellow" compsize="xl" icon={<IconAccount width={18} height={18} color="red" />} />
      <Input id="helper-text" label="Input with Helper" placeholder="Enter email..." helperText="Email is required" variant="info" color="other" compsize="xs" byIcon={true} icon={<IconCart width={18} height={18} />} />
      <Input id="disabled" label="Disabled Input" placeholder="Cannot type..." isdisabled={true} variant="danger" color="success" compsize="sm" />
      <Input id="large" label="Large Input" placeholder="Large size..." variant="info" color="warning" compsize="lg" />
      <Input id="test" label="test input" placeholder="تست میکنم" variant="danger" color="green" compsize="md" helperText="دارم تست میکنم" />
      <Input variant="primary" compsize="md" placeholder="Primary input" />
      <Input variant="secondary" compsize="md" placeholder="Secondary input" />
      <Input variant="success" compsize="md" placeholder="Success input" />
      <Input variant="danger" compsize="md" placeholder="Danger input" />
      <Input variant="warning" compsize="md" placeholder="Warning input" />
      <Input variant="info" compsize="md" placeholder="Info input" /> */}

{/* <section className="containerD">
        <ImageComponent
          src="/images/imagslider/Picsart.jpg"
          alt="Family"
          className="responsive-img"
        />
      </section> */}

{/* <section className="containerD">
        <CommentSection />
      </section> */}

{/* <section className="containerD">
        <ProductList />
      </section> */}
{/* <section className="containerD">
        <SpecialOffersBanner />
      </section> */}