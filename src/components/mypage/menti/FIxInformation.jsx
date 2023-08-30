

import { DivFlex } from "src/pages/my/mentiMyLayout.style";
import { styled } from "styled-components";

import LabelInputbox from "./LabelInputbox";


const FIxInformation = () => {
    return (
        <>
            <FIxInformationContainer>

                <DivFlex>
                    <LabelInputbox label={"닉네임"} description={"하츠네미쿠"}></LabelInputbox> <button>수정</button>
                </DivFlex>

                <LabelInputbox label={"이메일"} description={"MIKU@MIKU.COM"}></LabelInputbox>
                <LabelInputbox label={"비밀번호"} description={"하츠네미쿠"}></LabelInputbox>
                <LabelInputbox label={"닉네임"} description={"하츠네미쿠"}></LabelInputbox>

            </FIxInformationContainer>

        </>
    );
};

export default FIxInformation;

const FIxInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 1px solid gray;
    gap: 0.5rem;
    
`