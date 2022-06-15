
function getNamesArray() {

}
const colors = ["shlomo", "hailo", "the", "king"];
colors.sort();
getNamesArray();


function getNumbersArray() {
    const points = [40, 100, 1, 5, 25, -1, 10, -52];
    points.sort((a, b) => a - b);
} getNumbersArray();

function getNamesArray() {
    const namesArray = ["shlomo", "sara", "ran", "yaso", "shiomon", "netanel"];
    namesArray.sort();
}
getNamesArray();


let myArray = [];

function CreatesAnArrayOfNames() {
    let studenNames = document.getElementById('arrayinput').value;
    if (myArray.length < 5) {
        myArray.push(studenNames);
    }
    studenNames.value = " ";
    myArray.sort();
    console.log(myArray);
}



const rndArray = [];
function randomArrayOfAges() {
    for (let i = 0; i < 10; i++) {
      Math.floor(Math.random() *100);

            rndArray.push(Math.floor(Math.random() *100));
        }
        rndArray.sort((a,b)=>{return a-b});
    console.log(rndArray);
}
randomArrayOfAges();


function SeparateWithADashInTheArray() {

    console.log(myArray.join("-"));
}
SeparateWithADashInTheArray()