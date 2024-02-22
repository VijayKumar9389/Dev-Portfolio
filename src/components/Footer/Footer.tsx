import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <h1>Vijay Kumar</h1>
            <p>{new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;