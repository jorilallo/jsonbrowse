import stringifyObject from 'stringify-object';

const objectifyJson = json => (
  stringifyObject(JSON.parse(json), {
    indent: '  ',
    singleQuotes: true,
  })
);

export {
  objectifyJson,
};
