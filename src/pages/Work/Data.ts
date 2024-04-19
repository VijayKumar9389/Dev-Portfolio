import StakeholderStats from "../../assets/images/StakeholderStats.png";
import StakeholderInteract from "../../assets/images/StakeholderInteraction.png";
import MobileCompatible from "../../assets/images/MobileCompatible.png";
import DesignPackage from "../../assets/images/DesignPackage.png";
import ManageInventory from "../../assets/images/ManageInventory.png";
import StakeholderVisual from "../../assets/images/StakeholderVisual.png";
import StakeholderReport from "../../assets/images/StakeholderReport.png";
import ProjectManagement from "../../assets/images/ProjectManagement.png";
import LoginScreen from "../../assets/images/LoginScreen.png";
import UploadFile from "../../assets/images/UploadFile.png";
import UserAuth from "../../assets/images/UserAuth.png";
import ImageStorage from "../../assets/images/ImageStorage.png";

export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

export interface WorkData {
    title: string;
    sections: WorkSectionData[];
}

export const workData: WorkData[] = [
    {
        title: 'Data Analysis Automation:',
        sections: [
            {
                description: 'Efficient automation to handle complex data analysis tasks seamlessly.',
                imageUrl: StakeholderStats,
            },
            {
                description: 'Streamline stakeholder communication for a smoother user experience and fewer errors.',
                imageUrl: StakeholderInteract,
            },
            {
                description: 'Well-organized design to visualize large amounts of information effectively.',
                imageUrl: StakeholderVisual,// need a picture of the filtering system
            },
            {
                description: 'Generate automatic reports, reducing repetitive data analysis tasks.',
                imageUrl: StakeholderReport,
            },
        ],
    },
    {
        title: 'Streamlined Delivery Management:',
        sections: [
            {
                description: 'Design, assign, and track packages seamlessly for streamlined delivery management.',
                imageUrl: DesignPackage,
            },
            {
                description: 'Manage inventory with ease, including tracking and monitoring stock effectively.',
                imageUrl: ManageInventory,
            },
            {
                description: 'Empower field agents with a user-friendly mobile interface for on-the-go efficiency.',
                imageUrl: MobileCompatible,
            },
            {
                description: 'Precise stakeholder, delivery, item management within each project.',
                imageUrl: ProjectManagement,
            },
        ],
    },
    {
        title: 'Data Security and Management:',
        sections: [
            {
                description: 'Upload Excel files effortlessly, with automatic data normalization for clean database storage.',
                imageUrl: UploadFile,
            },
            {
                description: 'Protect client data with secure access through a user-friendly login interface.',
                imageUrl: LoginScreen,
            },
            {
                description: 'Safeguard sensitive features with robust user authentication.',
                imageUrl: UserAuth,
            },
            {
                description: 'Upload images to store for easy access and retrieval.',
                imageUrl: ImageStorage,
            },
        ],
    },
    // Add more projects as needed
];