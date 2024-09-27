import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import kt_phone_plan from '../assets/images/content/kt_phone_plan.jpg';
import kt_phone_contract_plan from '../assets/images/content/kt_phone_contract_plan.jpg';
im;
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

const KTpaymentsystem = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Content>
        <Img src={kt_phone_plan} alt="kt망 요금제"></Img>
      </Content>
      <Content>
        <Img src={kt_phone_contract_plan} alt="kt망 약정플랜"></Img>
      </Content>
    </Container>
  );
};
export default KTpaymentsystem;
