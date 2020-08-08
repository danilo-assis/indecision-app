console.log('App is running')

//JSX - JavaScript XML

const app = {
  title : 'Indecision App',
  subtitle : "Put your life in the hand of a computer",
  options : ['One', 'Two']
};


const template = (
<div>
  <h1>{app.title}</h1> 
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'Here are your options' : 'no options' }</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

const user = {
  Name: 'Andrew',
  Age: '20',
  Location: 'RiodeJaneiro'
}

function getLocation(location){
  if (location) {
    return <p>location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.Name ? user.Name : 'Anonymous'}</h1> 
    {(user.Age && user.Age >= 18) && <p>Age: {user.Age}</p>}
    {getLocation(user.Location)}
    
  </div>
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

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);