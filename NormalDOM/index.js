const root = document.getElementById("container");
const btn = document.getElementById("btn");
const h2 = document.createElement("h2");
const img = document.createElement("img");
const div = document.createElement("div");
console.log(root);

function showData(){
    try{
    h2.innerText= "Welcome to DOM!";
    h2.style.color = "olive";
    h2.style.backgroundColor = "orange";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/500px-DOM-model.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail";
    img.setAttribute("height", 300);
    img.setAttribute("width", 300);
    div.style.border = "2px dotted black";

    root.appendChild(div);
    div.appendChild(h2);
    div.appendChild(img);
    }
    catch(e){
        console.log("Error: "+e);
    }
    finally{
        root.removeChild(btn);
    }
}

btn.addEventListener('click',showData);