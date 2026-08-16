import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
         "JavaScript",
        "Typescript",
        "Tailwind CSS",
        "Vue.js",
    ];

    const backendSkills = ["Node.js","Python","Django","Flask","Java"];

    const cloudSkills =["AWS","Azure","GCP"];

    const automationSkills = ["Terraform","Bitbucket","Jenkins","GitHub Actions","Docker","Kubernetes"];

    const databaseSkills = ["MySQL","PostgreSQL","SQL Server","Oracle DB","MongoDB"];

    const methodologiesskills = ["Agile","Scrum","Kanban","CI/CD","TDD"];

    return (
    <section 
    id="about" 
    className="min-h-screen flex items-center py-20"
    >
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center">
                {""}
                About Me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a passionate DevOps Engineer with expertise in cloud platforms and automation.
                    I also implement and deliver long-term maintainable solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                    </div>

                     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            {cloudSkills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Automation</h3>
                        <div className="flex flex-wrap gap-2">
                            {automationSkills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {databaseSkills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Methodologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {methodologiesskills.map((tech,key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0,_2px_8px_rgba(59,130,2246,0.2)] tranistion
                                
                                "
                                >
                                    {tech}
                                </span>
                            ))}    
                        </div>        
                </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>Bachelor's Degree in Software Engineering</strong> -University of Greenwich, 2016-2019
                    </li>
                     <li>
                        <strong>Relevant Coursework:</strong> Data Structures, Computer Networking, Application Web Development, Computer Algorithm and Modelling,
                          Software Engineering Management, Mobile Development, Database Technologies, Component Programming and Advanced Programming
                            
                            
                    </li> 
                    <li>
                        <strong> Final Year Project:</strong> My Final Year Project was an Android based attendance system called "PAAS" (Performance Attendance Absence System)
                            
                    </li> 
                    <li>
                        <strong> Certifications</strong>
                        <p> - Google Adavanced Data Analytics Professional</p>
                        <p> - AWS Generative AI Applications</p>
                        <p> - Advanced Google Analytics</p>
                        <p> - Google AI Essentials</p>
                        <p> - Google Analytics for Beginners</p>
                        <p> - Databricks Academy Accreditation: Generative AI Fundamentals</p>
                        <p> - LinkedIn AWS for Developers</p>
                        <p> - Microsoft Azure Data Fundamentals</p>
                        <p> - AWS Certified Cloud Practitioner</p>
                        <p> - Microsoft Azure Fundamentals</p>
                        <p> - AWS Cloud Practitioner Essentials</p>
                            
                    </li> 
                </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                            {" "}
                            Independent DevOps & AI Engineering (Freelance) (February 2024 - Present){" "}
                        </h4>
                        <li>
                            <p>I took time to support a family member, but I continued builing projects
                                and developing my skills in DevOps and AI Engineering, including cloud infrastructure management,
                                automation, and AI model deployment. I also contributed to open-source projects and participated in online communities to stay updated with the latest trends and best practices in the field.
                            </p>
                        </li>
                        <li>
                            <p>Designed and deployed cloud-based applications to automate operational workflows, reducing manual effort and improving efficiency through Python scripting and API integrations.</p>
                        </li>
                        <li>
                            <p>
                                Developed AI-powered tools, including chatbot systems, to automate customer interaction and support processes, improving response times and overall user experience.
                            </p>
                            <li>
                                <p>Built REST API integrations to collect, process, and visualise financial data, enabling real-time insights for analysis and decision-making.</p>
                            </li>
                            <li>
                                <p>Created automation solutions to optimise routine system tasks and internal processes, increasing productivity and minimising human error.</p>
                            </li>
                            <li>
                                <p>Completed industry-recognised certifications across AWS, Databricks, and Google AI, strengthening expertise in cloud and AI technologies.</p>
                            </li>
                            <li>
                                <p>
                                Maintained continuous hands-on development by building real-world projects and exploring AI-driven and cloud-native solutions.
                                </p>
                            </li>
                        </li>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {" "}
                            Senior Associate Cloud Engineer at PwC (January 2023 - February 2024){" "}
                            </h4>
                            <li>
                        <p>Designed and implemented modular Terraform infrastructure across multi-account AWS environments</p>
                        </li>
                        <li>
                        <p>Automated infrastructure provisioning using GitHub Actions and Go templates</p>
                        </li>
                        <li>
                            <p>Managed core AWS services ensuring scalability, high availability, and secure architecture</p>
                        </li>
                        <li>
                        <p>Implemented RBAC, secrets management, and centralised logging for governance</p>
                        </li>
                        <li>
                        <p>Diagnosed and resolved infrastructure bottlenecks to improve performance</p>
                        </li>
                        <li>
                            <h3>Impact:</h3>
                        </li>
                        <li>
                                <p>Reduced infrastructure provisioning time by 60%</p>
                        </li>
                        <li>
                                <p>Decreased configuration errors by 40%</p>
                        </li>
                        <li>
                                <p>Improved relaibility across distributed cloud environments</p>
                        </li>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {""}
                            DevOps Engineer at Appnovation (April 2021 - October 2022)</h4>{" "}
                            <li>
                        <p>Built Python-based dashboards integrating CI/CD, analytics, and service management tools</p>
                            </li>
                            <li>
                                <p>Developed ETL pipelines using BigQuery for large-scale data processing</p>
                            </li>
                            <li>
                                <p>Developed UI components using Storybook and implemented automated visual regression testing with Chromatic; 
                                    deployed via Bitbucket Pipelines and Jenkins for consistent front-end delivery</p>
                            </li>
                            <li>
                                <p>Designed and implemented microservices architectures using Java, Spring Boot, REST APIs, 
                                    and reusable service components, improving scalability and maintainability</p>
                            </li>
                            <li>
                                <p>Modernised CI/CD pipelines (Jenkins, Bitbucket), improving deployment automation, reliability, performance, and developer productivity</p>
                            </li>
                            <li>
                        <p>Delivered cloud-native deployments using Kubernetes, Docker, Helm, ensuring scalable, portable, and containerised application delivery across environments</p>
                            </li>
                            <li>
                                <p>Built a Go and TypeScript-based microsite to manage reusable IP components, improving developer experience and internal tooling</p>
                            </li>
                            <li>
                                <p>Implemented risk management, data-quality frameworks, and security controls, including data protection policies, 
                                    anomaly detection, access control, and compliance best practices</p>
                            </li>

                            <li>
                                <h3>Impact:</h3>

                                <li>
                                    <p>Developed ETL pipelines using BigQuery for large-scale data processing</p>
                                </li>

                                <li>
                                    <p>Reduced incident resolution time by 25%</p>
                                </li>

                                <p>
                                    Enabled large-scale analytics processing across millions of data points
                                </p>
                            </li>

                            <li>
                                <p>Increased developer productivity by 20%</p>
                            </li>
                    </div>
                     <div>
                        <h4 className="font-semibold">
                            {""}
                            DevOps Engineer at Capita (July 2020 - April 2021)</h4>{""}
                            <li>
                        <p>
                        Built and delivered client-ready releases using AWS resource tagging, ensuring consistent, automated, and traceable deployments.
                        </p>
                        </li>
                        <li>
                            <p>Implemented CI/CD automation with Jenkins, integrating Selenium end-to-end testing for improved quality and reliability</p>
                        </li>
                        <li>
                            <p>Improved system performance through infrastructure optimisation and debugging</p>
                        </li>
                        
                        <li>
                            <p>Automated provisioning and management workflows using BDD/TDD, 
                                enhancing system stability, reducing manual operations, and improving deployment efficiency</p>
                        </li>
                        <li>
                            <p>Diagnosed and resolved complex infrastructure and performance issues, 
                                improving system reliability, scalability, and operational efficiency</p>
                        </li>
                        <li>
                            <h3>Impact:</h3>
                        </li>
                        <li>
                            <p>Increased test coverage by 40%</p>
                        </li>
                        <li>
                            <p>Reduced production defects by 25%</p>
                        </li>
                        <li>
                            <p>Improved system performance by 20%</p>
                        </li>
                        <li>
                        </li>
                    </div>
                     <div>
                        <h4 className="font-semibold">
                            {""}
                            Graduate Software Engineer at Pentascape (September 2019 - December 2019)</h4>{""}
                            <li>
                        <p>Developed and enhanced a web-based notification system using JavaScript, TypeScript, improving DOM element selection, adding dynamic UI labelling, 
                            and resolving data de-duplication issues for monitored website changes</p>
                        </li>
                        <li>
                            <p>Implemented automated testing with Jest, mocks, and test suites, 
                                increasing code quality, test coverage, and reducing regression defects</p>
                        </li>
                        <li>
                            <p>Applied Agile/Scrum practices using Jira and Confluence, contributing to sprint planning, documentation, 
                                and cross-team collaboration</p>
                        </li>
                        <li>
                            <p>Took full end-to-end ownership of features, delivering user-focused improvements and 
                                ensuring a reliable, high-performance notification experience</p>
                        </li>
                        <li>
                            <p>Drove automation, optimisation, and performance improvements, proactively identifying issues and 
                                enhancing system usability and operational efficiency</p>
                        </li>
                    </div>
                     <div>
                        <h4 className="font-semibold">
                            {""}
                            Software Engineering Intern at Santander (June 2018 - August 2018)</h4>{""}
                            <li>
                        <p>Developed an Android-based attendance system using a microservices architecture, 
                            contributing to core service integration, backend API performance, and system scalability</p>
                            </li>
                            <li>
                                <p>Monitored and optimised application performance, resolving software defects and 
                                    improving reliability, throughput, and scalability across distributed services</p>
                                </li>
                                <li>
                                <p>Diagnosed and troubleshot technical issues efficiently, supporting stable releases, production deployments, 
                                    and high-quality delivery</p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated with architecture, infrastructure, and engineering teams to design scalable, modern solutions, adopt new technologies, 
                                        and improve system maintainability
                                    </p>
                                </li>
                                <div>
                                <h4 className="font-semibold">
                            {""}
                            Additional Information</h4>{" "}
                                    <li>
                                        <p>Strong interest in cloud architecture, AI systems and emerging technologies</p>  
                                        </li>
                                        <li>
                                            <p>Actively builds and experiments with new tools and frameworks</p>
                                        </li>
                                        <li>
                                            <p>Enjoys continuous learning and staying up-to-date with industry trends</p>
                                        </li>
                                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
};