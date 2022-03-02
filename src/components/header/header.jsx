import './header.css';

const Header = (props) => {
    console.log(props)
    return(
        <div className="header-container">
            <div>{props.title}</div>
            {props.showButton ? <button className="login-button">{props.btnLabel}</button> : null}
        </div>
    )
}

export default Header;