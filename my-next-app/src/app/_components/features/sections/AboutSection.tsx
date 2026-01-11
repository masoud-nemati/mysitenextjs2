
"use client";


import ImageComponent from "@/app/_components/section/image/ImageComponent";
import CommentSection from "../../section/CommentSection";
import "@/tailwind/component/aboutcopm.css";

export default function AboutSection() {
  return (
    <section className="about-section bg-background text-foreground py-16">
      <div className="container mx-auto max-w-6xl space-y-12 px-4">


        <h1 className="about-title">I am:</h1>


        <div className="about-block">
          <h2 className="about-subtitle">My Journey</h2>

          <p className="about-text">
            Programming is my passion, and{" "}
            <span className="about-highlight">
              I love it and am constantly striving to grow in coding
            </span>.
            Right now, I&apos;m diving into JavaScript, TypeScript, React, and Kotlin.
          </p>

          <p className="about-text strong">
            God has helped me a lot and has changed my life.
          </p>

          <p className="about-text">
            But above all, my family means so much to me. I live with my wonderful
            wife and our two amazing kids, and I love them more than anything.
            They are my biggest motivation to keep going.
          </p>

          <p className="about-text">
            I used to live in Iran, but now I&apos;m in Turkey. Moving here has come
            with its challenges, but it has also given me the chance to learn new
            things and face new experiences.
          </p>

          <p className="about-text">
            I&apos;m always eager to learn and improve my skills. My dreams are big,
            and I hope that one day, I can make a positive impact on the world
            through my work.
          </p>
        </div>


        <div className="about-image">
          <ImageComponent
            src="/images/imagslider/aboutimg1.jpg"
            alt="About me"
            maxWidth={600}
            ratio="4 / 3"
          />
        </div>


        <div className="about-block">
          <h2 className="about-subtitle">Our Team</h2>

          <p className="about-text">
            Throughout my life, I have gained various experiences and developed
            skills in different fields. From technology and programming to
            industrial welding and theology, all of these skills have been part
            of my growth journey.
          </p>
        </div>


        <div className="about-block">
          <h3 className="about-subtitle">Industry and Technical Skills</h3>
          <ul className="about-list">
            <li>
              <strong>CO2 Welding</strong> – Skilled in semi-automatic welding with
              carbon dioxide gas.
            </li>
            <li>
              <strong>Argon Welding (TIG)</strong> – Experienced in precise and
              clean welding on various metals.
            </li>
            <li>
              <strong>Laser Welding</strong> – Using laser technology for
              high-precision welding of parts.
            </li>
          </ul>
        </div>


        <div className="about-block">
          <h3 className="about-subtitle">Theology and Writing</h3>
          <ul className="about-list">
            <li>
              <strong>Christian Theology</strong> – Studying and examining faith,
              spirituality, and biblical teachings.
            </li>
            <li>
              <strong>Editor</strong> – Writing and editing articles.
            </li>
          </ul>
        </div>


        <div className="about-block">
          <h3 className="about-subtitle">Now</h3>
          <ul className="about-list">
            <li>Working at <strong>Townlit Company</strong></li>
            <li>Working at a <strong>Welding Company</strong></li>
            <li>Student of <strong>Programming</strong></li>
            <li>Student of <strong>Christian Theology</strong></li>
          </ul>
        </div>


        <div className="pt-6">
          <CommentSection />
        </div>

      </div>
    </section>
  );
}
