import styled from 'styled-components';

import { device } from '../../styles/global/device';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const Text = styled.h1`
  align-self: center;
  font-size: 1.5rem;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;

export { Text, Container };
