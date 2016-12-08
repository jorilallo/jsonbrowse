import React from 'react';
import { Flex } from 'reflexbox';
import s from 'styled-components';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Flex auto justify="center">
      <Container>
        Hello there
      </Container>
    </Flex>
  </Layout>
);

const Container = s.div`
  width: 640px;
  padding: 20px;

  @media only screen and (max-width : 640px) {
    width: 100%;
  }
`;
