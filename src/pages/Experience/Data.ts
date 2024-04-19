export interface ExperienceItem {
    year: string;
    title: string;
    details: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        year: 'May 2015 - Aug 2016',
        title: 'Systems Trainee Internship (SGI)',
        details: [
            'Managed and prioritized tasks across multiple teams.',
            'Installed and configured Linux and Windows servers.',
            'Traveled to multiple branches for server and router installation.',
            'Coordinated with weekend staff for supply orders and new switch installations.',
        ],
    },
    {
        year: '2014 - 2016',
        title: 'Business Information Systems (Two-Year Diploma)',
        details: [
            'Developed a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL.',
            'Gained expertise in Linux and Windows server administration.',
            'Studied various business and IT-related courses.',
            'Deepened understanding of data structures, algorithms, and Java programming.',
        ],
    },
    {
        year: '2017 - 2019',
        title: 'Software Developer',
        details: [
            'Led the development of a Java application for Cross Borders Drilling, employing Swing for the user interface and SQLite for data storage enabling efficient recording of drilled hole data',
            'Contributed to game development using C# in Unity at Melcher Studios.',
            "Designed Python and Java applications for data processing, integration tasks, and producing Excel reports at Triton Public Awareness.",
        ],
    },
    {
        year: '2020 - 2022',
        title: 'Full-Stack Developer',
        details: [
            'Developed a responsive content management web app with React.',
            'Implemented RESTful API with Node.js and Express for seamless data interaction.',
            'Designed security with JWT authentication to safeguard endpoints against unauthorized access.',
            'Scaled to meet evolving business requirements including implementing responsive design for mobile use.',
            'Configured AWS cloud environment to facilitate deployment of the database, client, and server.'

        ],
    },
    {
        year: '2022 - Current',
        title: 'Full-Stack Developer',
        details: [
            'Designed new application with delivery, inventory, project, and user modules.',
            'Revamped client and server architecture written all in TypeScript for clean, type-safe, maintainable code.',
            'Transitioned to Postgres with Prisma ORM for seamless data mapping between stakeholders, delivery, and inventory within projects.',
            'Strengthened security with http-only cookies and strict authentication to limit access to sensitive features exclusively to admin accounts.',
            'Introduced server-side features like file upload and data normalization for clean database storage.',
        ],
    },
];