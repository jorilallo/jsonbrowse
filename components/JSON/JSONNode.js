const objectType = object => (
  Object.prototype.toString.call(object).slice(8, -1)
);

const JSONNode = ({ data, indent, colors }) => {
  const updatedColors = {
    base: '#9599a7',
    string: '#050505',
    number: '#00bcd4',
    boolean: '#9c27b0',
    ...colors,
  };

  const props = {
    indent: indent + 1,
    colors: updatedColors,
  };

  switch (objectType(data)) {
    case 'Object': {
      const keys = Object.keys(data);
      return (
        <BaseNode { ...props }>
          <span>{'{'}</span>
          { keys.map((key, index) => (
            <div key={ index }>
              <KeyValue
                objectKey={ key }
                value={ data[key] }
                { ...props }
              />
              { index !== keys.length - 1 && ',' }
            </div>
          )) }
          <Indent m={ indent } /><span>{'}'}</span>
        </BaseNode>
      );
    }
    case 'Array': {
      return (
        <BaseNode { ...props }>
          <span>{'['}</span>
          { data.map((value, index) => (
            <div key={ index }>
              <ArrayValue
                value={ value }
                { ...props }
              />
              { index !== data.length - 1 && ',' }
            </div>
          )) }
          <Indent m={ indent } /><span>{']'}</span>
        </BaseNode>
      );
    }
    case 'String':
      return (<Value>&quot;<StringNode { ...props }>{ data }</StringNode>&quot;</Value>);
    case 'Number':
      return (<Value><NumberNode { ...props }>{ data }</NumberNode></Value>);
    case 'Boolean':
      return (<Value><BooleanNode { ...props }>{ data.toString() }</BooleanNode></Value>);
    case 'Null':
      return (<Value>null</Value>);
    default:
      return null;
  }
};

JSONNode.defaultProps = {
  indent: 0,
};

const BaseNode = ({ children, colors }) =>
  <span style={{ color: colors.base }}>{ children }</span>;
const StringNode = ({ children, colors }) =>
  <span style={{ color: colors.string }}>{ children }</span>;
const BooleanNode = ({ children, colors }) =>
  <span style={{ color: colors.boolean }}>{ children }</span>;
const NumberNode = ({ children, colors }) =>
  <span style={{ color: colors.number }}>{ children }</span>;

const Indent = ({ m }) => (
  <span dangerouslySetInnerHTML={{ __html: '&nbsp;&nbsp;'.repeat(m) }} /> // eslint-disable-line
);

const KeyValue = ({ objectKey, value, indent, colors }) => (
  <span>
    <Indent m={ indent } />
    &quot;<StringNode colors={ colors }>{ objectKey }</StringNode>&quot;:&nbsp;
    <JSONNode data={ value } indent={ indent } />
  </span>
);

const ArrayValue = ({ value, indent, colors }) => (
  <span>
    <Indent m={ indent } />
    <JSONNode data={ value } indent={ indent } colors={ colors } />
  </span>
);

const Value = ({ children }) => (
  <span>
    <Indent />
    { children }
  </span>
);

export default JSONNode;
