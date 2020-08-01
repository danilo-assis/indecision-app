console.log('App is running')

//JSX - JavaScript XML
// var template = <p>This is JSX from app.js!!</p>;

var template = /*#__PURE__*/React.createElement(
  "p", {
  id: "someId"
}, "This is JSX from app.js!!"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);