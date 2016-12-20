import s from 'styled-components';

export default ({
  children,
  onClick,
}) => (
  <Error>
    { children }
    <Close onClick={ onClick }>✕</Close>
  </Error>
);

const Error = s.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  background-color: #f63939;
  color: #FFFFFF;
`;

const Close = s.span`
  cursor: pointer;
`;
