import s from 'styled-components';

export default (props) => (
  <Container>
    <Title>json.browse()</Title>
    <Actions>

    </Actions>
  </Container>
);

const Container = s.div`
  padding: 10px 20px;

  background-color: rgb(35, 9, 198);
  color: #FFFFFF;
`;

const Title = s.h1`
  margin: 0;
  font-size: 22px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 500;
`;

const Actions = s.div`

`;
