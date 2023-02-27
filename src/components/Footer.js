import React, { Component } from 'react';

/**
 * Renders the Footer
 */
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            2023 - AtendeZap <i className='uil uil-heart text-danger font-size-12'></i> por
                                <a href="https://coderthemes.com" target="_blank" rel="noopener noreferrer" className="ml-1">N Soluções</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;