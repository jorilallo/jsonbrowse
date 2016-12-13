import { Flex } from 'reflexbox';
import JSONNode from './JSONNode';

const LINE_COUNT_REGEX = /\r\n|\r|\n/;

export default (props) => {
  const {
    data,
  } = props;

  // Calculate line count
  const jsonString = JSON.stringify(data, null, 2);
  const lineCount = jsonString.split(LINE_COUNT_REGEX).length;

  return (
    <Flex style={{ whiteSpace: 'nowrap', padding: '5px 0' }}>
      <LineNumbers count={ lineCount } />
      <JSONNode { ...props } />
    </Flex>
  );
};

const LineNumbers = ({ count }) => (
  <div style={{ padding: '0 6px 0 20px', textAlign: 'right' }}>
    { Array.from(Array(count).keys()).map(lineNumber => (
      <div style={{ color: '#e0e0e0', userSelect: 'none' }}>
        { lineNumber + 1 }
      </div>
    )) }
  </div>
);
