import React from 'react';
import { Flex } from 'reflexbox';
import s from 'styled-components';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Flex auto justify="center">
      <Container>
        <Title>What is json.browse?</Title>
        <p>
          <i>json.browse</i> allows you to browse, prettify, filter and
          manipulate JSON right inside your browser.
        </p>
        <p>
          You can fetch JSON data directly from a publicly readable API
          endpoint or paste from your clipboard.
        </p>
        <p>
          Once you have your data, you can filter it like you would filter
          any Javascript object. For example the following will fetch the name of
          the changed file from <a href="https://api.github.com/repos/jorilallo/jsonbrowse/commits/54516f2ec071abd81d0d9945e6ce5d45d99010f7">
          this project&apos;s commit</a>:
        </p>
        <Codeblock>
files[0].filename
        </Codeblock>
        <p>
          At any point, filtered or unfiltered, you can copy the output as JSON
          string or as Javascript object which you can use directly in your code.
        </p>
        <ImageContainer>
          <Image src="/static/images/console.png" alt="Console" />
        </ImageContainer>
        <p>
          To do more advanced filtering and manipulation of data, currently filtered
          data is exposed as global variables and can be accessed with browser&apos;s
          Javascript console. Also <a href="https://lodash.com/docs/">lodash</a> is available.
        </p>
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

const Title = s.h2`
  font-weight: 500;
`;

const Codeblock = s.pre`
  padding: 10px;
  background: #eaf6ff;

  font-size: 18px;
`;

const ImageContainer = s.p`
  margin: 20px 0;
  text-align: center;
`;

const Image = s.img`
  max-width: 400px;
`;
