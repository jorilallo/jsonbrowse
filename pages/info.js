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
          You can fetch JSON data directly from a publicly readable API,
          localhost or paste from your own clipboard.
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
          At any point, filtered or unfiltered, you can copy the output as a JSON
          string or as a Javascript object which you can be directly used in your code.
        </p>
        <ImageContainer>
          <Image src="/static/images/console.png" alt="Console" />
        </ImageContainer>
        <p>
          To do more advanced filtering and manipulation of data, currently filtered
          data is exposed as global variables and can be accessed with browser&apos;s
          Javascript console. <a href="https://lodash.com/docs/">lodash</a> is available
          as well.
        </p>

        <Subtitle>About</Subtitle>
        <p>
<<<<<<< HEAD
          <i>json.browse</i> was build by <a href="https://twitter.com/jorilallo" target="_blank">
          Jori Lallo</a>. Source code is available in <a href="https://github.com/jorilallo/jsonbrowse" target="_blank">
=======
          <i>json.browse</i> is build by <a href="https://twitter.com/jorilallo" target="_blank">
          Jori Lallo</a>. Source code is available on <a href="https://github.com/jorilallo/jsonbrowse" target="_blank">
>>>>>>> origin/refactor
          GitHub</a>.
        </p>
      </Container>
    </Flex>
  </Layout>
);

const Container = s.div`
  width: 640px;
  padding: 20px;
  overflow: auto;

  font-weight: 14px;

  @media only screen and (max-width : 640px) {
    width: 100%;
  }
`;

const Title = s.h2`
  font-weight: 500;
`;

const Subtitle = s.h3`
  font-weight: 500;
`;

const Codeblock = s.pre`
  padding: 10px 5px;
  background: #eaf6ff;

  font-size: 14px;
`;

const ImageContainer = s.p`
  margin: 20px 0;
  text-align: center;
`;

const Image = s.img`
  max-width: 400px;

  @media only screen and (max-width : 640px) {
    width: 100%;
  }
`;
