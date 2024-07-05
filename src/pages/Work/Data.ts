import StakeholderInfo from "../../assets/screenshoots/Stakeholders.png";
import Deliveries from "../../assets/screenshoots/Deliveries.png";
import Users from "../../assets/screenshoots/Users.png";
import Inventory from "../../assets/screenshoots/Inventory.png";
import Losses from "../../assets/screenshoots/Losses.png";
import Upload from "../../assets/screenshoots/Upload.png";
import Mobile from "../../assets/screenshoots/MobileComp.png";
import Validation from "../../assets/screenshoots/Validation.png";

export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

export interface WorkData {
    title: string;
    desc?: string;
    sections: WorkSectionData[];
}

export const workData: WorkData[] = [
    {
        title: 'Outreach Management',
        desc: 'Facilitates stakeholder information, delivery tracking, and inventory management to streamlined outreach program for Triton Public Awareness.',
        sections: [
            {
                description: 'Organize and visualize stakeholder information for accurate and up-to-date interactions.',
                imageUrl: StakeholderInfo,
            },
            {
                description: 'Track delivery and inventory efficiently to ensure safety package distribution.',
                imageUrl: Deliveries,
            },
            {
                description: 'Upload Excel projects and generate instant insights, eliminating manual data analysis.',
                imageUrl: Upload,
            },
            {
                description: 'Access from mobile devices for seamless caller and delivery team coordination.',
                imageUrl: Mobile,
            },
        ],
    },
    {
        title: 'Inventory Management',
        desc: 'Track and manage inventory for a property rental company, ensuring accurate record-keeping and receipt storage.',
        sections: [
            {
                description: 'Maintain accurate records by adding, updating, and removing inventory items and receipts.',
                imageUrl: Inventory,
            },
            {
                description: 'Track losses by assigning values and marking items as missing to generate insights across locations.',
                imageUrl: Losses,
            },
            {
                description: 'Prevent discrepancies and errors in operations with validation and error handling.',
                imageUrl: Validation,
            },
            {
                description: 'Enhance security by managing users and protecting features with admin account access.',
                imageUrl: Users,
            },
        ],
    }

    // Add more projects as needed
];

