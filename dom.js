let liEl = document.getElementsByTagName("li");
console.log(liEl[0].firstChild);

let liEl1 = document.getElementsByTagName("li");
console.log(liEl1[liEl.length-1]);

document.getElementById("aimag-315");
console.log(document.getElementById("aimag-315"));


q=document.getElementsByTagName("li");
console.log(q);

for(let i =0; i< q.length; i++){
    q[i].style.border = "solid black 1px"
    q[i].style.margin = "30px"
    q[i].style.padding = "30px"
    q[i].style.fontSize = "40px"
    if (q[i].id[6]==1){
        q[i].style.color = "green"
    }
    if(q[i].id[6]==2){
        q[i].style.color = "yellow"
    }
    if(q[i].id[6]==3){
        q[i].style.color = "blue"
    }
    if(q[i].id[6]==4){
        q[i].style.color = "orange"
    }
    if(q[i].id[6]==5){
        q[i].style.color = "violet"
    }
}
