// import React from 'react'
import { NavBarItems } from "src/pages/my/mentiMyLayout.style";


const LeftNavbar_Items = ({ type }) => {

    return (
        <>
            <NavBarItems>{type}</NavBarItems>
        </>
    );
};

export default LeftNavbar_Items;