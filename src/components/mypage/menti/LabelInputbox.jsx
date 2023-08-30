import { DivFlex } from "src/pages/my/mentiMyLayout.style";
import { styled } from "styled-components";


const LabelInputbox = ({ label, description }) => {
    return (
        <>
            <DivFlex>
                <Label htmlFor="">{label}</Label>
                <Value>{description}</Value>
            </DivFlex>

        </>
    );
};

export default LabelInputbox;



const Label = styled.label`
text-align: center;
width: 100px;
color: #000000;
font-weight: 900;
    background-color: aqua;
    padding: 1rem;
    border-radius: 10px 0px 0px 10px;
`

const Value = styled.div`
text-align: center;
        width: 250px;
        color: #000000;
font-weight: 900;
    background-color: #d5ffff;
    padding: 1rem;
    border-radius: 0 10px 10px 0;
`