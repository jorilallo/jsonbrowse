import { Flex } from 'reflexbox';
import JSONView from './JSON/JSONView';

export default (props) => {
  // Re-indent
  const data = JSON.parse(props.json);
  const json = JSON.stringify(data, undefined, 2);

  // Expose for console access
  global.json = json;
  global.data = data;

  return (
    <Flex auto style={{ overflow: 'scroll' }}>
      <JSONView data={ data } filter="" />
    </Flex>
  );
};
