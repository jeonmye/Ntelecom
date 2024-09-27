import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Container = styled.div`
  color: #5c5c5c;
  font-size: ${props => (props.$isMobile ? 8 : 14)}px;
  line-height: ${props => (props.$isMobile ? 5 : 20)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  align-items: center;
`;

const Bar = styled.div`
  border-left: 1px solid #aaaaaa;
  height: ${props => (props.$isMobile ? 8 : 16)}px;
`;
const Footer = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Wrapper>
        <span>앤텔레콤 셀프개통</span>
        <Bar $isMobile={isMobile} />
        <span>010-4419-4451</span>
        <Bar $isMobile={isMobile} />
        <span>대표 임효진</span>
      </Wrapper>
    </Container>
  );
};
export default Footer;
