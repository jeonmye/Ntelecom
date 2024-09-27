import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import lg_phone_plan from '../assets/images/content/lg_phone_plan.jpg';
import lg_phone_contract_plan from '../assets/images/content/lg_phone_contract_plan.jpg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const LGpaymentsystem = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Content>
        <Img src={lg_phone_plan} alt="lg망 요금제"></Img>
      </Content>
      <Content>
        <Img src={lg_phone_contract_plan} alt="lg망 약정플랜"></Img>
      </Content>
    </Container>
  );
};
export default LGpaymentsystem;
