// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",cricket);
var arr=[];
function cricket(){
    event.preventDefault();
    var crickinfo= {
    nums:masaiForm.matchNum.value,
    teama:masaiForm.teamA.value,
    teamb:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,

    }
    arr.push(crickinfo);
    console.log(arr);
    console.log(crickinfo);
    localStorage.setItem("schedule",JSON.stringify(arr));
}

