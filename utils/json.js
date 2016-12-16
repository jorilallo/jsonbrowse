import stringifyObject from 'stringify-object-with-one-liners';

const objectifyJson = json => (
  stringifyObject(JSON.parse(json), {
    indent: '  ',
    singleQuotes: true,
  })
);

export {
  objectifyJson,
};
