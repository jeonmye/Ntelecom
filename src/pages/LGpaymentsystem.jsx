import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import ExampleImage from '../assets/images/exampleImage.png';
import slice from './slice';

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
const SubTitle = styled.p`
  font-size: ${props => (props.$isMobile ? 18 : 28)}px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const ExampleImg = styled.img`
  width: 100%;
  height: auto;
`;

const LGpaymentsystem = () => {
  const { isMobile } = useViewport();
  slice();
  return (
    <Container>
      <Title $isMobile={isMobile}>L망 선불요금제</Title>
      <Content>
        <SubTitle $isMobile={isMobile}>추천 요금제</SubTitle>
        <ExampleImg src={ExampleImage} alt="샘플"></ExampleImg>
      </Content>
      <Content>
        <SubTitle $isMobile={isMobile}>선불 LTE 요금제</SubTitle>
        <ExampleImg src={ExampleImage} alt="샘플" />
      </Content>
    </Container>
  );
};
export default LGpaymentsystem;
