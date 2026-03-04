import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlight = [{
    icon: Code2,
    title: "Clean Code",
    description: "writing clean, maintainable, and well-documented code that is easy to understand and extend."
},
{
    icon: Rocket,
    title: "Problem Solving",
    description: "approaching challenges with a logical and analytical mindset, breaking down complex problems into manageable parts."
},
{
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life "
},
{
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "staying ahead with the latest technologies and best practices"
}
]
export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="conainer mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    {/** Left Column  */}
                    <div className="space-y-8">
                       <div className="animate-fade-in">
                         <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase" >About Me</span>
                       </div>
                       {/** headline */}
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                          Building the future, <span className="font-serif italic font-medium text-white" > one component at a time</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                As a final-year software engineering student, I approach development with structure and analytical thinking. I focus on designing scalable architectures, writing clean and maintainable code, and delivering interfaces that are both intuitive and performant.
                            </p>
                            
                            <p>
                                Beyond coding, I value collaboration, problem analysis, and continuous learning. I am particularly motivated by projects that solve real-world problems and require thoughtful technical decisions rather than just implementation.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                              I build user-focused web applications with clean architecture and scalable backend systems.
                              My objective is to deliver performant and maintainable solutions that align technical execution 
                              with real-world needs.
                            </p>
                        </div>
                    </div>
                    {/** Right Column  */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {highlight.map((item, index) => (
                            <div key={index}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(index+1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10  flex items-center justify-center mb-4 hover:bg-primary/20"> 
                                    <item.icon className="w-6 h-6 text-primary" /> 
                                </div>
                                 <h3 className="text-lg font-semibold mb-2"> {item.title} </h3>
                                 <p className="text-sm text-muted-foreground"> {item.description} </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}