import s from 'styled-components';

export default (props) => (
  <Input
    name={ props.name }
    onChange={ props.onChange }
    placeholder={ props.placeholder }
    value={ props.value }
    autoFocus={ props.autoFocus }
  >
    { props.children }
  </Input>
);

const placeholderColor = 'rgb(159, 212, 255)';

const Input = s.input`
  margin: 0;
  padding: 8px 20px;
  width: 100%;

  background-color: rgb(54, 165, 253);
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
