const container = document.getElementById('container');
const mainHeading = document.createElement('h1');
mainHeading.innerText = "ABES Engineering College";
const loader = document.createElement('h2');
container.appendChild(loader);
const p1 = document.createElement('p');
p1.innerText = "Name : " + "Sakshi Pandit";
const p2 = document.createElement('p');
p2.innerText = "Education: " + "B.Tech. CSE from ABESEC";
const p3 = document.createElement('p');
p3.innerText = "Skills : " + " MERN, Problem Solving, Public Speaking, Leadership";
function ping() {
    try {
        loader.innerHTML = '<h3>Loading...</h3>';
        container.innerHTML = '<h3>Resume:</h3>';
        container.appendChild(mainHeading); 
        container.appendChild(p1); 
        container.appendChild(p2); 
        container.appendChild(p3);
        loader.innerHTML = ''; 
    }
    catch (e) {
        console.error(e); 
        loader.innerHTML = '<h2 style="color: red">Error in Loading Data</h2>';
    }
}