// eslint-disable
const ascii = `%c
   _                   _
  (_)                 | |
   _ ___  ___  _ __   | |__  _ __ _____      _____  ___
  | / __|/ _ \\| '_ \\  | '_ \\| '__/ _ \\ \\ /\\ / / __|/ _ \\
  | \\__ \\ (_) | | | |_| |_) | | | (_) \\ V  V /\\__ \\  __/
  | |___/\\___/|_| |_(_)_.__/|_|  \\___/ \\_/\\_/ |___/\\___|
 _/ |
|__/

`;

console.log(ascii, 'color: rgb(54, 165, 253);');

console.log(`%cWelcome to json.browse() console. To give you more
freedom over your data, you can manipulate your loaded
and filtered data here with following variables:`, 'color: blue;');
console.log('');
console.log('%c    data  ' + '%c- ' + 'Parsed data as Javascript object', 'color: #9c27b0;', 'color: grey;');
console.log('%c    json  ' + '%c- ' + 'Filtered JSON as a string', 'color: #9c27b0;', 'color: grey;');
console.log('');
console.log('%cLodash is also available (e.g. ' + '%c_.last(data.items);' + '%c)', 'color: blue;', 'font-style: italic; color: #9c27b0;', 'color: blue;');
