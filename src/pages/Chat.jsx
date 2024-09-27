import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import callImg from '../assets/images/resource/callImg.png';
import kakaoChannelChatImg from '../assets/images/resource/kakaoChannelChatImg.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0px;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
  margin: ${props => (props.$isMobile ? '0 0 15px 0' : '10px')};
  cursor: pointer;
`;
const CallImg = styled.img`
  width: ${props => (props.$isMobile ? 60 : 95)}%;
  max-width: 350px;
  height: auto;
`;
const KakaoImg = styled.img`
  width: ${props => (props.$isMobile ? 60 : 95)}%;
  max-width: 350px;
  height: auto;
`;

const Chat = () => {
  const { isMobile } = useViewport();

  return (
    <Container $isMobile={isMobile}>
      <Content $isMobile={isMobile} onClick={() => window.open('https://pf.kakao.com/_XpAvK')}>
        <KakaoImg $isMobile={isMobile} src={kakaoChannelChatImg} alt="카카오톡연결"></KakaoImg>
      </Content>
      <a href="tel:010-4419-4451">
        <Content $isMobile={isMobile}>
          <CallImg $isMobile={isMobile} src={callImg} alt="전화연결"></CallImg>
        </Content>
      </a>
    </Container>
  );
};
export default Chat;
