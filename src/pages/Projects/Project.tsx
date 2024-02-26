import './Project.scss';
import bookCompareImg from '../../assets/images/bookCompare.png';
import extractPDFImg from '../../assets/images/extractPDF.png';
import bookOrgImg from '../../assets/images/bookOrg.png';
import lblGenImg from '../../assets/images/lbl-gen.png';
import serverOneImg from '../../assets/images/serverOne.png';
import serverTwoImg from '../../assets/images/serverTwo.png';
import clientOneImg from '../../assets/images/clientOne.png';
import clientTwoImg from '../../assets/images/clientTwo.png';

const Project = () => {
    return (
        <div className="project-container">
            <h1 className="heading">View Projects</h1>
            <p className="paragraph">Explore my code on GitHub</p>

            <div className="project-wrapper">
                {projects.map((project, index) => (
                    <div className="project" style={{backgroundImage: `url(${project.image})`}} key={index}
                         onClick={() => window.open(project.link, "_blank")}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

const projects = [
    {
        title: 'Book Comparison',
        description: 'Python app to compare Excel books and highlight changes with styled text',
        image: bookCompareImg,
        link: 'https://github.com/VijayKumar9389/Book-Comparison'
    },
    {
        title: 'Extract Bank PDF',
        description: 'Python app to extract bank statements and generate an Excel file of debits and credits',
        image: extractPDFImg,
        link:'https://github.com/VijayKumar9389/Extract-Bank-PDF'
    },
    {
        title: 'Excel Organizer',
        description: 'Java app to organize stakeholder records from Excel for efficient stakeholder communication',
        image: bookOrgImg,
        link:'https://github.com/VijayKumar9389/Book-Organizer'
    },
    {
        title: 'Label Generator',
        description: 'Java app to manage drilled hole data in SQLite database for drilling company',
        image: lblGenImg,
        link:'https://github.com/VijayKumar9389/Label-Generator'
    },
    {
        title: 'OnTract Server 1.0',
        description: 'Initial Node.js server to handle stakeholder data',
        image: serverOneImg,
        link:'https://github.com/VijayKumar9389/OnTract-ServerV1.0'
    },
    {
        title: 'OnTract Client 1.0',
        description: 'First client application for data analysis and management',
        image: clientOneImg,
        link:'https://github.com/VijayKumar9389/OnTract-ClientV1.0'
    },
    {
        title: 'OnTract Server 2.0',
        description: 'Advanced Node.js server to manage deliveries, inventory, and other operational areas',
        image: serverTwoImg,
        link:'https://github.com/VijayKumar9389/OnTract-ServerV2.0'
    },
    {
        title: 'OnTract Client 2.0',
        description: 'Updated client application with scalable architecture, managing deliveries, inventory, etc.',
        image: clientTwoImg,
        link:'https://github.com/VijayKumar9389/OnTract-ClientV2.0'
    }
];

export default Project;
