import { useEffect, useState } from 'react';
import './header.css';

const Header = (props) => {
    const [clock, setClock] = useState();

    useEffect(() => {
      setInterval(() => {
        setClock(new Date().toLocaleString())
      }, 1000)
    }, [])

    return(
        <div className="header-container">
            <div>{props.title}</div>{props.showClock ? <span>{clock}</span> : null}
            {props.showButton ? <button className="login-button">{props.btnLabel}</button> : null}
        </div>
    )
}

export default Header;