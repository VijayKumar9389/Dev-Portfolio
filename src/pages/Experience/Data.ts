export interface ExperienceItem {
    year: string;
    title: string;
    description: string;
}

export const experienceData: ExperienceItem[] = [
    {
        year: '2014-2016',
        title: 'Completed Business Information Systems Diploma',
        description: 'Completed a two-year diploma in Business Information Systems at Saskatchewan Polytechnic. Interned at Saskatchewan Government Insurance, gaining valuable experience with the server and network teams.',
    },
    {
        year: '2017-2019',
        title: 'First Professional Projects',
        description: 'Developed first paid application in Java for Cross Borders Drilling, using Swing for the user interface and SQLite for data storage, enabling efficient recording of drilled hole data. Also worked at Triton Public Awareness, developing an application to automate data organization from Excel files, facilitating efficient planning and communication.',
    },
    {
        year: '2020-2022',
        title: 'Started Full Stack Development',
        description: 'Built a full-stack web application using React and Node.js to visualize and manage stakeholder information, enhancing security with an access token system. Scaled the application to include a responsive design for field agents and features to handle deliveries.',
    },
    {
        year: '2022-2024',
        title: 'Reaching Enterprise Standards',
        description: 'Rebuilt the application in TypeScript for improved stability while maintaining and scaling the existing system to meet business needs. Implemented Prisma ORM to map new database architecture, supporting multiple projects. Developed new modules for delivery tracking and inventory management, using table per hierarchy design. Added admin authentication for enhanced security.',
    },
    {
        year: '2024-Present',
        title: 'Project Management',
        description: 'Deployed a new contract application that includes solutions for inventory tracking and delivery management, along with various new features to assist in operations. Began development of an inventory application for Emerald Executive Housing to assist in tracking inventory and handling losses.',
    },
];
