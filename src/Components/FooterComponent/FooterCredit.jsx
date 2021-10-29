import React from 'react';

function FooterCredit(props) {
    return (
        <>
            <div className="container-fluid px-0 py-5 bg-darken">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-0" style={{fontSize: '14px'}}>Copyright © All rights reserved | <a className="text-dark" target="_blank" href="https://sabbirinfo.com">sabbirinfo.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterCredit;