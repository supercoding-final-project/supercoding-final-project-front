// import React from 'react';

// import { useState } from 'react';
import { NavBarContainer } from 'src/pages/my/mentiMyLayout.style';

import LeftNavbar_Items from './LeftNavbar_Items';

const LeftNavbar = () => {
    // const [select, setSelect] = useState("정보수정")

    return (
        <div>
            <NavBarContainer>
                <LeftNavbar_Items type={"정보수정"} />
                <LeftNavbar_Items type={"시간수정"} />
                <LeftNavbar_Items type={"예약확인"} />
                <LeftNavbar_Items type={"포인트충전"} />
            </NavBarContainer>
        </div>
    );
};

export default LeftNavbar;