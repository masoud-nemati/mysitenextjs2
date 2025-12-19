// src/app/_components/sections/AboutSection.tsx
import AppText from "@/app/_components/features/contact/AppText";
import ImageComponent from "@/app/_components/section/image/ImageComponent";

export default function AboutSection() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto">
            <div className="space-y-12 text-lg leading-relaxed">

                <AppText
                    name="aboutTitle"
                    className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
                />
                <div className="space-y-8">
                    <AppText name="aboutJourneyTitle" className="text-3xl font-bold text-center" />

                    <AppText name="aboutJourney" className="text-justify" />

                    <AppText name="aboutFamily" className="text-justify" />

                    <AppText name="aboutLocation" className="text-justify" />
                    <AppText name="aboutDreams" className="text-justify" />
                </div>

                <div className="flex justify-center my-10">
                    <ImageComponent
                          src="/images/imagslider/Picsart1.jpg"
                          alt="خانواده من"
                          width={800}
                          height={500}
                        className="rounded-2xl shadow-2xl object-cover w-full max-w-2xl"
                    />
                </div>

                <div className="bg-gray-50 p-10 rounded-3xl space-y-10">
                    <AppText name="aboutExperiencesIntro" className="text-justify" />

                    <AppText name="aboutIndustryTitle" className="text-2xl font-bold text-center" />

                    <AppText name="aboutIndustryList" />

                    <AppText name="aboutTheologyTitle" className="text-2xl font-bold text-center" />
                    <AppText name="aboutTheologyList" />
                </div>

                {/* وضعیت فعلی */}
                <div className="bg-primary/5 p-10 rounded-3xl text-left space-y-8">
                    <AppText name="aboutNowTitle" className="text-3xl font-bold" />
                    <AppText name="aboutNowList" />
                </div>

            </div>
        </section>
    );
}