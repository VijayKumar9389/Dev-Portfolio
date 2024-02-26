import './Work.scss';
import ImageOne from '../../assets/images/ImageThree.png';
import ImageTwo from '../../assets/images/ImageTwo.png';
import ImageSix from '../../assets/images/ImageSix.png';
import ImageFour from '../../assets/images/ImageFour.png';
import ImageFive from '../../assets/images/ImageFive.png';

const project = {
    title: 'OnTract Project',
    sections: [
        {
            title: 'Secure Login',
            description: 'Secured user data with hash passwords and JWT tokens in HTTP cookies, ensuring authorized endpoint access.',
            imageUrl: ImageFive,
        },
        {
            title: 'Single Page Application',
            description: 'Utilizing custom-built components, data retrieval from the server, Redux for state management, and efficient routing techniques to craft a cohesive single-page application.',
            imageUrl: ImageTwo,
        },
        {
            title: 'Simplified Data Management',
            description: 'Streamline data management with a user-friendly interface that allows for easy data entry and comprehensive view of all data to remove the need for manual data entry and analysis.',
            imageUrl: ImageFour,
        },
        {
            title: 'Streamlined Operations',
            description: 'Extend the application\'s functionality to encompass additional operational aspects, such as managing deliveries and inventory, interconnected through relational databases.',
            imageUrl: ImageSix,
        },
        {
            title: 'Access on variety of devices',
            description: 'Clear UX/UI design to ensure the application is accessible and user-friendly across a variety of devices.',
            imageUrl: ImageOne,
        },
        // Add more sections as needed
    ],
};

const WorkSection = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string } & { index: number }) => {
    // const isEven = index % 2 === 0;
    return (
        <div className="work-section">
            <div className="work-wrapper">
                <img src={imageUrl} alt={title} className="work-image" data-aos="fade-right"/>
                <div className="work-content" data-aos="fade-left">
                    <h3 className="work-title">{title}</h3>
                    <p className="work-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

const Work = () => {

    return (
        <div className="work-container">
            <div className="heading-wrapper">
                <h1 className="heading">My Work</h1>
                <p className="paragraph">
                    Working closely with clients, I specialize in creating customized technical solutions to meet business needs.
                </p>
            </div>
            {project.sections.map((section, index) => (
                <WorkSection key={index} {...section} index={index}/>
            ))}
        </div>
    );
};

export default Work;
