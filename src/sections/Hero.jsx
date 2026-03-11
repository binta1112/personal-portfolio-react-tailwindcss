import { Button } from "@/components/Button"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react"

const skills= [
    "React",
    "Nest.js",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "Express",
    "MongoDB",
    "Redis",
    "PostgreSQL",
    "Docker",    
    "Git",
    ".NET",
    "Python",
    "Java",    ,
    "CI/CD",
    "PowerBI",
    "REST APIs",
    "Microservices",
    

]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.png"
                    alt="Hero image"
                    className="w-full h-full object-cover capacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>
            {/*Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20b2a6",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `slow-drift ${20 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                    />                  
                ))}
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/**Left Colum - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                   Software Engineer • Final year student                                 
                            </span>                           
                        </div>
                        {/**Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision
                                </span>                            
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                               Hi, I'm Binta Traoré, a final-year software engineering student (Bac+5).
                                I develop full-stack applications  and scalable backends, 
                                focusing on usability, maintainability, and real user value. 
                                I am eager to put my skills and creativity to work on exciting new projects that have a significant impact.
                            </p>
                        </div>
                        {/**Call to Action */}
                        <div className="flex flex-wrap gap-4 animate-fade-in amimation-delay-300">
                            <Button size="lg" className="animate-fade-in animation-delay-1200">
                                <a href="#contact" className=""> Contact Me </a> 
                                <ArrowRight className=" w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton >
                                <Download className="w-5 h-5 " />
                                    <a 
                                    href="/binta_traore_cv_en (3).pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"                                    
                                    download="Binta-Traore-CV.pdf"
                                    >
                                    Download CV
                                    </a>
                            </AnimatedBorderButton>
                        </div>
                        {/**Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow Me:</span>
                            {[
                                {icon: Linkedin, href: "https://www.linkedin.com/in/binta-traore-4049b82a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},
                                {icon: Github, href: "https://github.com/binta1112"},
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5 " />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/**Right Colum - Profile Image */}
                     <div className="relative animate-fade-in animation-delay-300">
                        {/**Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                             className="absolute inset-0
                             rounded-3xl bg-gradient-to-br
                             from-primary/30 via-transparent
                             to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                 src="/profile-photo.png"
                                 alt="Binta Traoré" 
                                 className="w-full aspect-[4/5] object-cover rounded-2xl" 
                                 />
                                 {/** Floating badge */}
                                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                 </div>
                                 {/** Stats badge 
                                 <div className="absolute -top-4 left-4 rounded-xl px-4 py-3 glass animate-float animation-delay-100 ">
                                    <div className="text-2xl font-bold text-primary">5+</div>
                                    <div className="text-xs text-muted-foreground">Years Exp.</div>                             
                                 </div>
                                 */}
                            </div>
                        </div>
                     </div>
                </div>
                {/**Skills section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className=" text-sm text-muted-foreground text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, index) => (
                                <div key={index} className="flex-shrink-0  px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors "> {skill} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/**Animated floating elements */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" 
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span>Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}
