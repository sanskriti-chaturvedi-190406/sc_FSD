const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
// const h2 = React.createElement("h2", {style : {color:"olive", backgroundColor:"orange"}}, "Welcome to my React App Development"); //1st paramter is for element type, 2nd for styling, 3rd for content
// const h1 = React.createElement("h1", {style : {color:"brown"}}, "ABES Engineering College");
// const img = React.createElement("img", {src:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnb4o9qm0nfjtc8x3kxz1.png",  style: {height: "200px", width: "400px"}});

//const div = React.createElement("div", {style : {border: "2px solid red"}}, img, h1, h2);

const h21 = <h2>Hello World</h2>; //JSX(JavaScript & XML)
//browser only understands js
const h22 = <h2>ABES Engineering College</h2>;
const div = <div>{h21}{h22}</div>;
const wrapper = <div style = {{border: "2px solid red"}}>
{div}
<h2>Hey, using JSX</h2>
</div>
root.render(wrapper);