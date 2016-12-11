import s from 'styled-components';
import { Flex } from 'reflexbox';

import Spinner from './Spinner';

export default props => (
  <Wrapper>
    <Loading align="center" justify="center">
      { props.loading && (<Spinner color="#FFFFFF" />) }
    </Loading>
    <Input
      name={ props.name }
      onChange={ props.onChange }
      placeholder={ props.placeholder }
      value={ props.value }
      autoFocus={ props.autoFocus }
    />
  </Wrapper>
);

const placeholderColor = 'rgb(159, 212, 255)';

const Input = s.input`
  margin: 0;
  padding: 8px 20px 8px 0;
  width: 100%;

  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;

  color: #FFFFFF;
  font-size: 16px;

  &::-webkit-input-placeholder {
   color: ${ placeholderColor };
  }

  &:-moz-placeholder { /* Firefox 18- */
   color: ${ placeholderColor };
  }

  &::-moz-placeholder {  /* Firefox 19+ */
   color: ${ placeholderColor };
  }

  &:-ms-input-placeholder {
   color: ${ placeholderColor };
  }
`;

const Wrapper = s(Flex)`
  background-color: rgb(54, 165, 253);
`;

const Loading = s(Flex)`
  width: 20px;
`;
