//fallback
//promise- async and await

const root = document.getElementById("container");
const btn = document.getElementById("btn");
const display = document.getElementById("text");
const loader = document.getElementById("loader");

async function fetchData(){
    try{
        loader.innerHTML = "<span style = 'color: grey'> Loading Data...</span>"; 
        const serverData = await fetch("https://fakestoreapi.com/products"); //fetch is an asynchronous function belonging to the browser that is a webapi; returns a promise
        const jsonData = await serverData.json();
        //display.innerText = `${jsonData[0].title}`;
        console.log(jsonData);
        let table = `<table>
        ${
            jsonData.map((ele) =>(
                `<tr>
                    <td><img src="${ele.image}" height=200 width=200></td>
                    <td>${ele.title}</td>
                    <td>${ele.description}</td>
                    <td>${ele.price}</td>
                    <td>${ele.category}</td>
                </tr>`
            )).join("")
        }
        </table>`

        display.innerHTML = table;
    }
    catch(e){
        console.log("Error: "+e);
    }
    finally{
        loader.innerText = "";
    }
}

btn.addEventListener("click", fetchData);
//push to github:
//git status #check status first whether upto date or now
//git pull
//git add .
//git commit -m "FETCH API"
//git push