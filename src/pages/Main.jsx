import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${props => (props.$isMobile ? '100%' : '100vh')};
`;

const Main = () => {
  const { isMobile, isLoaded } = useViewport();

  return (
    <Container $isMobile={isMobile}>
      <Banner isMobile={isMobile} isLoaded={isLoaded} />
    </Container>
  );
};

export default Main;
