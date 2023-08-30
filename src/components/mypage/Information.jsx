import { InformationContainer } from 'src/pages/my/mentiMyLayout.style'

import FIxInformation from './menti/FIxInformation';

const Information = () => {

    return (
        <>
            <InformationContainer>
                <div>
                    <FIxInformation />
                </div>

                <div>
                    <FIxInformation />
                </div>
            </InformationContainer>

        </>
    );
};

export default Information;