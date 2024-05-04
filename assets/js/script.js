import { robots } from './robots.js';

let btnLlamar = document.getElementById("btnLlamar");

function getRobots(){

    let robotsRow = document.getElementById("robotsRow");

    robots.map(function(robot){
        const robotCol = document.createElement("div");
        robotCol.classList.add('col-xl-3');
        robotCol.classList.add('col-lg-3');
        robotCol.classList.add('col-md-3');
        robotCol.classList.add('col-sm-12');
        robotCol.classList.add('col-xs-12');

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src = robot.avatar;
        imgCard.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");


        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = robot.name;

        const weapon = document.createElement("p");
        weapon.classList.add("cart-text")
        weapon.textContent = robot.weapon;

        divBody.appendChild(title);
        divBody.appendChild(weapon);

        card.appendChild(imgCard);
        card.appendChild(divBody);
        
        robotCol.appendChild(card);

        robotsRow.appendChild(robotCol);
    });

}

btnLlamar.addEventListener("click",function(e){
    e.preventDefault();
    getRobots();
})


