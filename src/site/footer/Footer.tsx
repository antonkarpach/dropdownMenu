import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer__left">Left text</div>
                <div className="footer__right">Right text</div>
            </div>
        </div>
    );
};

export default Footer;
