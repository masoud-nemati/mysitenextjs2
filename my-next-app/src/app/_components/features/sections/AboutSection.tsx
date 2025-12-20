// src/app/_components/sections/AboutSection.tsx
import AppText from "@/app/_components/features/contact/AppText";
import ImageComponent from "@/app/_components/section/image/ImageComponent";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="space-y-8 text-lg">

        {/* سفر من */}
        <div className="space-y-4">
          {/* عنوان اصلی - فاصله کمتر شده */}
          <AppText name="aboutTitle" className="about-main-title mb-4" />

          {/* زیرعنوان سفر من */}
          <AppText name="aboutJourneyTitle" className="about-section-title mb-4" />

          {/* پاراگراف‌های بدنه - فاصله کمتر */}
          <div className="space-y-3 text-justify bg-amber-300">
            <AppText name="aboutJourney" />
            <AppText name="aboutFamily" />
            <AppText name="aboutLocation" />
            <AppText name="aboutDreams" />
          </div>
        </div>

        {/* تصویر خانواده - فاصله کمتر */}
        <div className="flex justify-center my-8">
          <ImageComponent
            src="/images/imagslider/Picsart1.jpg"
            alt="خانواده من"
            width={800}
            height={500}
            className="rounded-2xl shadow-2xl object-cover w-full max-w-2xl"
          />
        </div>

        {/* تجربیات */}
        <div className="bg-gray-500 p-1 rounded-3xl space-y-5">
          <AppText name="aboutExperiencesIntro" className="text-justify" />

          {/* مهارت‌های صنعتی */}
          <AppText name="aboutIndustryTitle" className="about-subsection-title " />
          <AppText name="aboutIndustryList" className="about-list-industry" />

          {/* الهیات و نوشتن - فاصله از بخش قبلی */}
          <AppText name="aboutTheologyTitle" className="about-subsection-title mb-4 mt-6" />
          <AppText name="aboutTheologyList" className="about-list-theology" />
        </div>

        {/* وضعیت فعلی - فاصله از بخش قبلی */}
        <div className="bg-primary/5 p-1 rounded-3xl space-y-4 mt-8  bg-amber-300">
          <AppText name="aboutNowTitle" className="about-section-title " />
          <AppText name="aboutNowList" className="about-list-now" />
        </div>

      </div>
    </section>
  );
}