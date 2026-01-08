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
                            Senior Associate Cloud Engineer at PwC (January 2023 - February 2024){" "}
                            </h4>
                            <li>
                        <p>Responsible for managing cloud infrastructure and deploying scalable solutions on AWS platform 
                        for the AWS Landing Zone Project</p>
                        </li>
                        <li>
                        <p>Designed and deployed modular Terraform IaC with GitHub Actions, 
                            standardising and automating multi-account AWS infrastructure provisioning</p>
                        </li>
                        <li>
                            <p>Built Go and Jinja templates to streamline configuration 
                                and accelerate secure environment deployments.</p>
                        </li>
                        <li>
                        <p>Automated infrastructure provisioning, configuration management, and operations, 
                            improving reliability and reducing manual effort</p>
                        </li>
                        <li>
                        <p> Implemented AWS security, governance, and compliance controls, including tagging standards, 
                            centralised logging, and change/records management</p>
                        </li>
                        <li>
                            <p>Managed AWS compute and network services (EC2, IAM, VPC, ECS/EKS), ensuring scalability, 
                                high availability, and maintainabilit</p>
                        </li>
                        <li>
                                <p>Developed secure CI/CD pipelines with Terraform, GitHub Actions, 
                                    and CyberArk Conjur for secrets management, RBAC, and IAM automation</p>
                        </li>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {""}
                            DevOps Engineer at Appnovation (April 2021 - October 2022)</h4>{" "}
                            <li>
                        <p>Built data-driven dashboards and automated reports in Python, 
                            integrating Jenkins CI/CD, Google Analytics, and Jira Service Management for monitoring and operational insights.</p>
                            </li>
                            <li>
                                <p>Utilised GCP BigQuery for large-scale data querying, ETL pipelines, data transformation, 
                                    and dataset management in cloud analytics workflows</p>
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
                            <p>Collaborated with cross-functional teams to evaluate architecture designs, technical requirements, and system integration needs</p>
                        </li>
                        <li>
                            <p>Automated provisioning and management workflows using BDD/TDD, 
                                enhancing system stability, reducing manual operations, and improving deployment efficiency</p>
                        </li>
                        <li>
                            <p>Diagnosed and resolved complex infrastructure and performance issues, 
                                improving system reliability, scalability, and operational efficiency</p>
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

                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
};