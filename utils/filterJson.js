export default (json, filter) => {
  // Don't filter if user has removed the filter
  if (
    !filter ||
    filter.length === 0 ||
    filter === "."
  ) return json;

  const filters = filter.split('.');
  // FIXME: Should not prepend `.` if an array
  const newFilter = `.${ filters.join('.') }`;
  const data = JSON.parse(json);

  // Very naive filtering using eval()
  return JSON.stringify(eval(`data${ newFilter }`));
};
