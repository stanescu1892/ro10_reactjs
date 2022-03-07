import React, { useCallback, useMemo } from 'react';
import './header.css';



const Header = (props) => {
    const handleButton = useCallback(() => {
        console.log("login")
    }, [])

    return (
        <div className="header-container">
            <div>{props.title}</div>{props.showClock ? <span>{props.clock}</span> : null}
            {props.showButton ? <button className="login-button" onClick={handleButton}>{props.btnLabel}</button> : null}
        </div>
    )
}

export default Header;