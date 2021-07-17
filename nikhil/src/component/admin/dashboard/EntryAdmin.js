import React from 'react';
import clsx from 'clsx';
import Iframe from 'react-iframe';

export default function EntryAdmin() {
    return (
<Iframe url="http://localhost:3000/Intro/user/welcome/admin"
width="100%"
height="950px"
id="myId"
className="myClassname"
display="initial"
position="relative"/>
);
}
