// write js code here corresponding to favourites.html
var arr=JSON.parse(localStorage.getItem("saved"))
displayData(arr);
function displayData(data){
    data.forEach (function(sixers){
     var thread=document.createElement("tr");
     var td1=document.createElement("td");
     td1.innerText=sixers.nums;
     var td2=document.createElement("td");
     td2.innerText=sixers.teama;
     var td3=document.createElement("td");
     td3.innerText=sixers.teamb;
     var td4=document.createElement("td");
     td4.innerText=sixers.date;
     var td5=document.createElement("td");
     td5.innerText=sixers.venue;
     var td6=document.createElement("td");
     td6.innerText="Delete";
     
     thread.append(td1,td2,td3,td4,td5,td6);
     document.querySelector("#tbod").append(thread);
 
 });
 }