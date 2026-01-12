import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (


     <section 
     id="projects" 
     className="min-h-screen flex flex-col items-center justify-center py-20"
     >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center">
                {""}
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        AWS Landing Zone (PwC)</h3>{""}
                    <p className="text-gray-300 mb-4">A provisioning project which aims to productionizes the provisions of basic practice, modular, 
                        and scalable landing zones for consumption by business teams and platform service functions.
                    </p>
                    <div>
                        {["AWS", "Terraform", "GitHub Actions", "Azure","GO", "Jinja"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Global Performance Dashboard (Appnovation)</h3>{""}
                    <p className="text-gray-300 mb-4">A unified data platform that uses several data sources 
                    that are key to Managed Services operations. This platform would serve as a centralized point to get many pieces of information for Appnovation clients.
                    </p>
                    <div>
                        {["GCP", "Python", "Django", "Google Data Analytics","Jenkins"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}

            </div>

        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        IP Components Microsite (Appnovation)</h3>{""}
                    <p className="text-gray-300 mb-4">A microsite built with React and Next.js to showcase IP components.
                    </p>
                    <div>
                        {["React", "TypeScript", "Next.js", "Contentful","Jenkins"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Appno Jira Add-on (Appnovation)</h3>{""}
                    <p className="text-gray-300 mb-4">An Python based application used to create Jira external applications.
                    </p>
                    <div>
                        {["Python", "Flask", "Jira Confleuence","Jenkins"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Barclays' microsite (Capita)</h3>{""}
                    <p className="text-gray-300 mb-4">An Java based Barclays application.
                    </p>
                    <div>
                        {["Java", "Spring Boot", "AWS","Jenkins"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Delta Fish (Pentascape)</h3>{""}
                    <p className="text-gray-300 mb-4">An a web-based notification system used to notify registered users of different changes on the Pentascape website.
                    </p>
                    <div>
                        {["JavaScript", "TypeScript", "AWS","Bitbucket"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        TFL Journey Planner (Personal Project)</h3>{""}
                    <p className="text-gray-300 mb-4">Built a Java application calculating shortest routes, using graph algorithms, OOP, and data structures.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Java", "Spring Boot", "Excel"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>
           

            <div className="flex justify-between items-center">
            <a 
            href="https://github.com/PlayerOne007/journeyplannertfl" className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                {""}
                View Project</a>
                

            </div>

           

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Fibonacci Generator  (Personal Project)</h3>{""}
                    <p className="text-gray-300 mb-4">Developed a Java program for generating Fibonacci sequences, demonstrating algorithm design and computational efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Java", "Spring Boot"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

              <div className="flex justify-between items-center">
            <a 
            href="https://github.com/PlayerOne007/FibonacciII" className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                {""}
                View Project</a>
                

            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Alpha Vantage (Personal Project)</h3>{""}
                    <p className="text-gray-300 mb-4">Created a Python application integrating REST APIs to deliver real-time and historical financial data.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "AWS", "REST API"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

               <div className="flex justify-between items-center">
            <a 
            href="https://github.com/PlayerOne007/Alpha-Vantage" className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                {""}
                View Project</a>
                

            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Weather App (Personal Project)</h3>{""}
                    <p className="text-gray-300 mb-4">Built a live web app using React.js, API integration, state management, and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React.js", "REST API"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

             <div className="flex justify-between items-center">
            <a 
            href="https://github.com/PlayerOne007/weather-app" className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                {""}
                View Project</a>
                

            </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{""}
                        {""}
                        Learnstorybook-design-system (Personal Project)</h3>{""}
                    <p className="text-gray-300 mb-4">Chromatic's Design Systems for Developers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Chromatic", "Storybook", "React.js"].map((tech,key) => (
                            <span>
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            </span>
                        ))}
            </div>

            <div className="flex justify-between items-center">
            <a 
            href="https://github.com/PlayerOne007/learnstorybook-design-system" className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                {""}
                View Project</a>
                

            </div>

            </div>

        </div>

        </div>
        </RevealOnScroll>
    
        </section>
    );
};