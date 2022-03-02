import React, { useEffect, useState } from 'react';
import './header.css';

const Header = (props) => {
    const [clock, setClock] = useState();

    // the returned callback will be called at component will unmount
    useEffect(() => {
        const tickId = setInterval(() => {
            setClock(new Date().toLocaleString())
        }, 1000);

        return () => clearInterval(tickId);
    }, [])

    return (
        <React.Fragment>
            <div className="header-container">
                <div>{props.title}</div>{props.showClock ? <span>{clock}</span> : null}
                {props.showButton ? <button className="login-button">{props.btnLabel}</button> : null}
            </div>
            <div>

            </div>
        </React.Fragment>
    )
}

export default Header;