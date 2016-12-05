import Link from 'next/link';
import s from 'styled-components';

export default (props) => (
  <Container>
    <Link href="/">
      <Title>json.browse()</Title>
    </Link>
    <Actions>

    </Actions>
  </Container>
);

const Container = s.div`
  padding: 12px 20px;

  background-color: rgb(35, 9, 198);
  color: #FFFFFF;
`;

const Title = s.span`
  margin: 0;
  font-size: 22px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;

const Actions = s.div`

`;
