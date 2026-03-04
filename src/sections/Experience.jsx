
const experiences = [
    {
        period: "2025 - Present",
        title: "Freelance Software Engineer",
        company: "Self-employed - Remote",
        description: "Providing software development services to clients, including web application development, API integration, and custom software solutions.",
        technologies: ["React", "Node.js", "Python", "Java", "CI/CD", "PowerBI", "REST APIs", "Microservices"],
        current: true

    },
    {
        period: "04/2025 - 07/2025",
        title: "Software Engineer Intern",
        company: "Algo Consulting Group - Rabat, Morocco",
        description: "Worked on developing a job search web application using ReactJs and .Net.",
        technologies: ["ReactJs", ".Net"],
        current: false
    },
    {
        period: "08/2024 - 09/2024",
        title: "Initiation Internship",
        company: "Baye Conception - Casablanca, Morocco",
        description: "Gained hands-on experience in software development, contributing to various projects and learning industry best practices.",
        technologies: ["React", "Node.js", "HTML", "CSS","PHP","Symphony"],
        current: false
    }
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full"/>
            <div className="container mx-auto px-6 relative z-10">
                {/** Section header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
                        Carrier journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground" >
                        Experiences that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            I've gained.
                        </span>
                    </h2>
                    <p 
                        className="text-muted-foreground animate-fade-in animation-delay-200" 
                    >
                        Here are some of the experiences I've had, showcasing my growth as a software engineer.
                    </p>
                </div>
                {/** Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:transform md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] "/>
                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                                style={{animationDelay: `${(index + 1)*150}ms`}}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-2 ring-background z-10">
                                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                                </div>
                                {/* Experience content */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'} `}>
                                    <div 
                                     className={`glass pl-6 rounded-xl border border-primary/30
                                         hover:border-primary/50  transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium ">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className= " px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}