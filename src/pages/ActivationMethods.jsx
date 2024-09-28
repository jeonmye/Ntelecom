import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import ktMembershipImg from '../assets/images/resource/ktMembershipImg.png';
import lgMembershipImg from '../assets/images/resource/lgMembershipImg.png';
import { ActivationMethodsPageMetas } from '../metadatas/metadats';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${props => (props.$isMobile ? '0 0 15px 0' : '60px')};
  cursor: pointer;
`;

const SubTitle = styled.p`
  font-size: ${props => (props.$isMobile ? 18 : 28)}px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const MembershipImg = styled.img`
  width: ${props => (props.$isMobile ? 60 : 95)}%;
  height: auto;
`;

const ActivationMethods = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <>
      <ActivationMethodsPageMetas />
      <Container $isMobile={isMobile}>
        <Content $isMobile={isMobile} onClick={() => navigate('/activation-method/KT')}>
          <SubTitle $isMobile={isMobile}>앤텔레콤 멤버십 K망 개통방법</SubTitle>
          <MembershipImg src={ktMembershipImg} alt="샘플" $isMobile={isMobile}></MembershipImg>
        </Content>
        <Content $isMobile={isMobile} onClick={() => navigate('/activation-method/LG')}>
          <SubTitle $isMobile={isMobile}>앤텔레콤 멤버십 L망 개통방법</SubTitle>
          <MembershipImg src={lgMembershipImg} alt="샘플" $isMobile={isMobile} />
        </Content>
      </Container>
    </>
  );
};
export default ActivationMethods;
