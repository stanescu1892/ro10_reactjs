import Header from '../header/header';

const Footer = () => {
    const brand = "facebook";
    return (
        <footer>
            <Header 
            title="First React APP Footer" 
            btnLabel="-" 
            showButton={false}
            showClock={false}/>
        </footer>
    )
}

export default Footer;