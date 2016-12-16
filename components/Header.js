import Link from 'next/link';
import { Flex } from 'reflexbox';
import s from 'styled-components';

const linkProps = {
  style: { color: '#ffffff' },
};

const SAMPLE_URL = 'https://api.github.com/repos/jorilallo/jsonbrowse';

export default props => (
  <Container justify="space-between">
    <Link href="/">
      <Title onClick={ props.onClear }>json.browse()</Title>
    </Link>
    <Actions align="center">
      <Link href={ `/?url=${encodeURIComponent(SAMPLE_URL)}` }>
        <a { ...linkProps }>
          Demo
        </a>
      </Link>
      <Separator />
      <Link href="/info">
        <a { ...linkProps }>
          Info
        </a>
      </Link>
      <Separator />
      <Link href="https://github.com/jorilallo/jsonbrowse">
        <a { ...linkProps }>
          GitHub
        </a>
      </Link>
    </Actions>
  </Container>
);

const breakpoint = '425px';

const Container = s(Flex)`
  padding: 12px 20px;
  flex-shrink: 0;
  height: 52px;

  background-color: rgb(35, 9, 198);
  color: #FFFFFF;

  @media only screen and (max-width: ${breakpoint}) {
    flex-direction: column;
  }
`;

const Title = s.span`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;

const Actions = s(Flex)`
  margin-top: 3px;

  @media only screen and (max-width: ${breakpoint}) {
    margin-top: 12px;
  }
`;

const Separator = s.div`
  margin: 0 7px;

  &::after {
    content: " · ";
    color: #3c73bd;
  }
`;
