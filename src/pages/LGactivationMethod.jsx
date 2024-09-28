import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import lg_activation from '../assets/images/content/lg_activation.jpg';
import { LG_APP_STORE_LINK_LIST } from '../constant/appStoreLinktList';
import { LGactivationMethodPageMetas } from '../metadatas/metadats';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: ${props => (props.$isMobile ? 24 : 32)}px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const LgActivation = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  text-decoration: none;
  color: white;
  padding: 10px 10px;
  display: inline-block;
  background-color: #1f1f1f;
  position: relative;
  border: 1px solid #1f1f1f;
  border-radius: 15px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
  margin-bottom: 15px;
`;
const LGactivationMethod = () => {
  const { isMobile } = useViewport();

  return (
    <>
      <LGactivationMethodPageMetas />
      <Container $isMobile={isMobile}>
        <ButtonWrapper $isMobile={isMobile}>
          {LG_APP_STORE_LINK_LIST.map(item => (
            <a href={item.href}>
              <Button>{item.label}</Button>
            </a>
          ))}
        </ButtonWrapper>

        <Title $isMobile={isMobile}>앤텔레콤 멤버십 K망 접수방법</Title>
        <Content>
          <LgActivation src={lg_activation} alt="샘플"></LgActivation>
        </Content>
      </Container>
    </>
  );
};

export default LGactivationMethod;
