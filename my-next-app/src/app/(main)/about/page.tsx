// src/app/about/page.tsx
import AppText from "@/app/_components/features/contact/AppText";
// import Image from "next/image";
// import profileImg from "@/public/images/imagsslider/mg2.jpg"; // عکس خودت

export default function AboutPage() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">

        <AppText name="aboutTitle" className="text-center text-primary" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <AppText name="aboutJourneyTitle" />
            <AppText name="aboutJourney" />
            <AppText name="aboutFamily" />
            <AppText name="aboutLocation" />
            <AppText name="aboutDreams" />
          </div>

          {/* <div className="flex justify-center">
            <Image
              src={profileImg}
              alt="عکس من"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
          </div> */}
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl space-y-8">
          <AppText name="aboutExperiencesIntro" />
          <AppText name="aboutIndustryTitle" />
          <AppText name="aboutIndustryList" />
          <AppText name="aboutTheologyTitle" />
          <AppText name="aboutTheologyList" />
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl text-center">
          <AppText name="aboutNowTitle" />
          <AppText name="aboutNowList" />
        </div>

      </div>
    </section>
  );
}