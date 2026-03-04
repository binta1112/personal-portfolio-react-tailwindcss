 import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const projects = [
    
    {
        title : "LYnkEdu",
        description: "A platform that connects students with tutors for personalized learning experiences. Built using ReactJS, Spring Boot, and PostgreSQL.",
        image : "/projects/lynkedu.png",
        tags: ["ReactJS", "Spring Boot", "PostgreSQL"],
        link: "#",
        github: "https://github.com/binta1112/LynkEdu-backend"
    },
    {
        title : "EVMap",
        description: "An application that helps users find electric vehicle charging stations nearby. Built using ReactJS , Mapbox,Spring Boot,PostgreSQL and Kafka.",
        image : "/projects/evmap.png",
        tags: ["ReactJS", "Mapbox", "Spring Boot", "PostgreSQL", "Kafka"],
        link: "#",
        github: "https://github.com/Salah1779/EVmap/tree/master"
    },
    {
        title : "E-commerce Peluches",
        description : "An e-commerce website for selling plush toys.Built using Asp.net Core MVC and SQL Server.",
        image : "/projects/ecommerce_peluches.png",
        tags: ["Asp.net Core MVC", "SQL Server"],
        link: "#",
        github: "https://github.com/binta1112/FrameWorkDotNet"
    },
    {
        title : "Paradise Nursery Plants",
        description: "A web application for managing and selling plants in a nursery. Built using ReactJS.",
        image : "/projects/paradise_nursery_plants.png",
        tags: ["ReactJS"],
        link: "https://binta1112.github.io/e-plantShopping/",
        github: "https://github.com/binta1112/e-plantShopping"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/** Section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground" >
                        Projects that 
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            I've worked on.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200" >
                        Here are some of the projects I've worked on, showcasing my skills in full-stack development, problem-solving, and delivering real-world solutions.
                         Each project highlights my ability to design scalable architectures, write clean code, and create user-friendly interfaces.                        
                    </p>
                </div>
                {/** Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                        key={index}
                         className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
                          style={{ animationDelay: `${(index+1) * 100}ms` }}>
                            {/** Project image */}
                            <div className=" relative overflow-hidden aspect-video">
                                <img 
                                src= {project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 " 
                                />
                                <div
                                className="absolute inset-0 
                                bg-gradient-to-t from-card via-card/50 
                                to-transparent opacity-60"
                                />
                                {/** Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    { project.link !== "#" && <a 
                                    href={project.link}
                                    className="p-3 rounded-full glass hover:bg-primary-foreground hover:text-foreground"
                                     >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>}
                                    <a 
                                    href={project.github}
                                    className="p-3 rounded-full glass hover:bg-primary-foreground hover:text-foreground"
                                     
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/** Project content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors"> 
                                        {project.title} 
                                    </h3>
                                    <ArrowUpRight 
                                    className="w-5 h-5
                                    text-muted-foreground group-hover:text-primary 
                                    group-hover:translate-x-1 
                                    group-hover:-translate-y-1 
                                    transition-all " 
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 ">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}
                                        className=" px-4 py-1.5  rounded-full text-xs bg-surface font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/** View all projects button */}
               <div className="text-center mt-12 animate-fade-in animation-delay-500">
                 <AnimatedBorderButton>
                    <ArrowUpRight className="w-5 h-5" />
                    <a href="https://github.com/binta1112">
                        View All Projects
                    </a>
                </AnimatedBorderButton>
               </div>
            </div>
        </section>
    )
}