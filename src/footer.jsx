import React from 'react';



var time = new Date();
var year = time.getFullYear();

function Footer() {
    return ( < div > < footer > Copyright { year } < /footer></div > )
}

export default Footer;