'use strict';

console.log('App is running');

//JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hand of a computer",
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'no options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  Name: 'Andrew',
  Age: '20',
  Location: 'RiodeJaneiro'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.Name ? user.Name : 'Anonymous'
  ),
  user.Age && user.Age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.Age
  ),
  getLocation(user.Location)
);

// function getLocation(location){
//   if (location) {
//     return location;
//   }else{
//     return 'unknown';
//   }
// }
// var userName = 'Andrew';
// var Age = '29';
// var location = 'RiodeJaneiro';
// var templateThree = (
//   <div>
//     <h1>{user.Name}</h1> 
//     <p>{user.Age}</p>
//     <p>{getLocation(user.Location)}</p>

//   </div>
//   );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
