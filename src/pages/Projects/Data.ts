import bookCompareImg from "../../assets/images/bookCompare.png";
import extractPDFImg from "../../assets/images/extractPDF.png";
import bookOrgImg from "../../assets/images/bookOrg.png";
import lblGenImg from "../../assets/images/lbl-gen.png";
import Server from "../../assets/images/serverTwo.png";
import OntractClient from "../../assets/images/client.png";
import InventoryClient from "../../assets/images/invclient.png";

export const projectsData = [
    {
        title: 'OnTract Server',
        description: 'Node/Express API for Triton Public Awareness',
        image: Server,
        link: 'https://github.com/VijayKumar9389/OnTract-ServerV2.0'
    },
    {
        title: 'OnTract Client',
        description: 'React CMS for Triton Public Awareness',
        image: OntractClient,
        link: 'https://github.com/VijayKumar9389/OnTract-ClientV2.0'
    },
    {
        title: 'Inventory Server',
        description: 'Node/Express API for Emerald Inventory',
        image: Server,
        link: 'https://github.com/VijayKumar9389/OnTract-ServerV2.0' // Consider using a different image if it applies specifically to Inventory
    },
    {
        title: 'Inventory Client',
        description: 'React CMS for Emerald Inventory',
        image: InventoryClient,
        link: 'https://github.com/VijayKumar9389/OnTract-ClientV2.0'
    },
    {
        title: 'Book Comparison (Python)',
        description: 'Compares & highlights changes in Triton Excel files',
        image: bookCompareImg,
        link: 'https://github.com/VijayKumar9389/Book-Comparison'
    },
    {
        title: 'Bank Statement Extractor (Python)',
        description: 'Automates bank statement processing to Excel',
        image: extractPDFImg,
        link: 'https://github.com/VijayKumar9389/Extract-Bank-PDF'
    },
    {
        title: 'Project Organizer (Java)',
        description: 'Organizes stakeholder data for communication',
        image: bookOrgImg,
        link: 'https://github.com/VijayKumar9389/Book-Organizer'
    },
    {
        title: 'Label Generator (Java)',
        description: 'Manages drilled hole data for Cross Borders Drilling',
        image: lblGenImg,
        link: 'https://github.com/VijayKumar9389/Label-Generator'
    },
];
