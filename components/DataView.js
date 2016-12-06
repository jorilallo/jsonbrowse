import s, { injectGlobal } from 'styled-components';
import { Flex } from 'reflexbox';

const CodeMirror = require('react-codemirror');

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript'); // eslint-disable-line
}

export default (props) => {
  const options = {
    mode: 'javascript',
    json: true,
    readOnly: true,
    viewportMargin: Infinity,
    tabSize: 2,
    tabIndex: 2,
    lineNumbers: true,
  };

  // Re-indent
  const data = JSON.parse(props.json);
  const json = JSON.stringify(data, undefined, 2);

  // Expose for console access
  global.json = json;
  global.data = data;

  return (
    <Flex auto>
      <StyledCodeMirror
        value={ json }
        options={ options }
      />
    </Flex>
  );
};

const StyledCodeMirror = s(CodeMirror)`
  display: flex;
  flex: 1;
`;

injectGlobal`
  .CodeMirror {
    border: none;
    height: auto;
    width: 100%;
    margin: 0 15px;
  }
`;
