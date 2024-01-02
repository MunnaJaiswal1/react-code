import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//with react
/** 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <h1>Hello world!!!!</h1>);

*/
/** 
 //without reactd
var h1=document.createElement("h1");
h1.innerHTML="munna jaiswal";
document.getElementById("root").appendChild(h1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

ReactDOM.render(
    React.createElement("h1",null,"hey dear"),
    document.getElementById("root")
);
*/
 /** 
const myelement=(
   <div>
  <table>
  <th>
    <h1>a basic table</h1>
    </th>
     <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  </table>
  <h1>hello guys</h1>
  <h2>how are you</h2>
  <table>
        <th>countrty</th>
        <tr>Nepal</tr>
        <tr>india</tr>
        <tr>china</tr>
     </table> 
  </div>  
    
);

const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(myelement);


 

//the code below compiled successfully but it doesn't show in react platform.
ReactDOM.render(
    [
      
      <h2>helo dear</h2>,
        <table>
         <h1>BASIC TABLE</h1>
         <tr>
            <th>Country</th>
            <th>their currency</th>
            <th>in nepali</th>
         </tr>
         <tr>
            <td>Nepal</td>
            <td>1 rupess</td>
            <td>1 rupess</td>
         </tr>
         <tr>
            <td>India</td>
            <td>1 rupees</td>
            <td>1.60 rupees</td>
         </tr>
        </table> 
    ],
    document.getElementById("root")
);

//jsx challenge 1
const myelement=(
 <React.Fragment>
   <h1>My favourite list:</h1>
   <p>lorem(2,5)</p>
   <ol>
      <li>Dark</li>
      <li>sdhuia</li>
      <li>sdia</li>
      <li>shuia</li>
      <li>sda</li>
   </ol>
 </React.Fragment>
);
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(myelement);
*/
/** 
//js expressions in jsx
const fname = "munna jaiswal";
ReactDOM.render(
   <>
   <h1>my name is {fname}</h1>
   <p>and my age is {15+10}</p>
   </>,
   document.getElementById("root")
);

//react jsx challenge 2:
const time= new Date().toLocaleTimeString();
const date=new Date().toDateString();
const heading={
 color:"pink",
 textTransform:"capitalize",
 margin:"70px 0",
};
ReactDOM.render(
   <>
      <h3 contentEditable="true" style={heading}>hello my name is munna</h3>
      <h4>my age is {10+15}</h4>
      current date is {date}
      <br/>
      current time is {time}
      <br/>
      <img src="" alt="image" />
   </>,
   document.getElementById("root")
);

*/

//date(year,month,date,time(hour))
let currTime=new Date();
currTime=currTime.getHours();
let greeting="";
const cssStyle={};
if(currTime>=1 && currTime<12){
     greeting="Good Morning"; 
     cssStyle.color="green";
}
else if(currTime>=12 && currTime<19){
   greeting="Good Afternoon";
   cssStyle.color="orange";
}
else{
   greeting="Good Night";
   cssStyle.color="lightblack";
}
ReactDOM.render(
   <>
      <h3>Hello sir,<span style={cssStyle}>{greeting}</span></h3> 
   </>,
   document.getElementById("root")
);