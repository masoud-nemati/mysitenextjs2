import SkillCard from "@/app/_components/features/skills/skillcard";

import {
  programmingSkills,
  industrialSkills,
} from "@/data/skills.data";

export default function LatestSkills() {
  // ترکیب همه مهارت‌ها
  const allSkills = [...programmingSkills, ...industrialSkills];

  // فقط ۴ مهارت
  const latestSkills = allSkills.slice(0, 4);

  return (
    <>
      {/* category title – مشابه بلاگ */}
      <div className="flex flex-col gap-2 border-b border-shop-gray-border pb-5">
        <h2 className="text-3xl text-shop-gray-900">
          My Skills
        </h2>
        <span className="text-md text-shop-gray-500">
          What I’m good at
        </span>
      </div>

      {/* skills card wrapper – مشابه blog card wrapper */}
      <div className="mt-9 flex w-full flex-wrap justify-center gap-5">
        {latestSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </>
  );
}
