import * as S from './Auth.style';
import googlePath from '../../assets/google-logo.svg';
import kakaoPath from '../../assets/kakao-logo.svg';
import logoPath from '../../assets/login-logo.svg';
import Button from '../../components/button/Button';

const Auth = () => {
  return (
    <S.Container>
      <S.LogoWrap>
        <img src={logoPath} alt="logo" />
      </S.LogoWrap>

      <S.SideWrap>
        <h1>안녕하세요?</h1>

        <p>
          저희 멘토링에 오신걸
          <br />
          환영해요.
        </p>

        <S.ButtonBox>
          <Button label="카카오" color="#FAE500" imgSrc={kakaoPath} hoverColor="#EEDA00" />

          <Button label="구글" color="#F8F8F8" imgSrc={googlePath} hoverColor="#EAEAEA" />
        </S.ButtonBox>
      </S.SideWrap>
    </S.Container>
  );
};

export default Auth;
