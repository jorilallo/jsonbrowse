export default (json, filter) => {
  // Don't filter if user has removed the filter
  if (
    !filter ||
    filter.length === 0 ||
    filter === '.'
  ) return json;

  const data = JSON.parse(json); // eslint-disable-line
  const filters = filter.split('.');
  let newFilter = filters.join('.');

  // Add leading . unless root is an array
  if (newFilter[0] !== '[') newFilter = `.${ newFilter }`;

  // Very naive filtering using eval() but at least we validated user input
  try {
    return JSON.stringify(eval(`data${ newFilter }`)); // eslint-disable-line
  } catch (e) {
    return null;
  }
};
