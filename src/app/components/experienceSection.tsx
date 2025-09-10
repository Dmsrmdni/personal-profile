import experienceData from "../../data/experience.json";
import educationData from "../../data/education.json";


export default function ExperienceSection() {
    return (
        <section id="experience" className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-3xl md:text-4xl text-almost-black font-semibold border-b-2 border-gray-200 pb-4">Experience</h2>
                <div className="flex flex-col gap-4">
                    {experienceData
                        .slice()
                        .sort((a, b) => b.id - a.id)
                        .map((experience) => (
                            <div key={experience.id} className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4 justify-between border-b-2 border-gray-200 pb-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-lg md:text-xl text-gray-800 font-medium">{experience.company}</p>
                                        <p className="text-md text-gray-600">{experience.position}</p>
                                    </div>
                                    <p className="text-md lg:text-lg text-gray-600 leading-relaxed">{experience.description}</p>
                                </div>
                                <div className="flex flex-col gap-0 md:text-end">
                                    <p className="text-md text-gray-800 font-medium text-nowrap">{experience.startDate} - {experience.endDate}</p>
                                    <p className="text-md text-gray-600">{experience.location}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-4xl text-almost-black font-semibold border-b-2 border-gray-200 pb-4">Education</h2>
                <div className="flex flex-col gap-4">
                    {educationData
                        .slice()
                        .sort((a, b) => b.id - a.id)
                        .map((education) => (
                            <div key={education.id} className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4 justify-between border-b-2 border-gray-200 pb-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-lg md:text-xl text-gray-800 font-medium">{education.name}</p>
                                        <p className="text-md text-gray-600">{education.major}</p>
                                    </div>
                                    <p className="text-md lg:text-lg text-gray-600 leading-relaxed">{education.description}</p>
                                </div>
                                <div className="flex flex-col gap-0 md:text-end">
                                    <p className="text-md text-gray-800 font-medium text-nowrap">{education.startDate} - {education.endDate}</p>
                                    <p className="text-md text-gray-600">{education.location}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}