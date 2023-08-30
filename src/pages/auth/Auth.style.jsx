import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  width: 100%;
  height: 100%;
`;

export const LogoWrap = styled.div`
  justify-self: flex-end;
  margin-right: 2rem;
`;

export const SideWrap = styled.div`
  justify-self: flex-start;
  margin-left: 2rem;

  h1,
  p,
  button {
    margin-block: 1rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
