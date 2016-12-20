export default (uri) => {
  const parser = document.createElement('a');
  parser.href = uri;
  return parser;
};
