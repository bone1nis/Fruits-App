import { ReactElement } from 'react';

import { NavLink } from 'react-router';

import "./appFooter.scss"

const AppFooter = (): ReactElement => {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <NavLink to="/products" className='footer__link'>Main</NavLink>
                <NavLink to="/create-product" className='footer__link'>Create Card</NavLink>
            </div>
        </footer>
    )
}

export default AppFooter;