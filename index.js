const form = document.getElementById('myForm');
let score = 0;
let cnt=0;
let answerArray =["first","first","first","first","first"];
let questionArray = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "What is the largest mammal in the world?",
    "Who wrote the play 'Romeo and Juliet'?",
    "Which element has the chemical symbol 'O'?"
];

let optionArray = [
    ["Paris", "London", "Berlin", "Madrid"],
    ["Mars", "Earth", "Venus", "Jupiter"],
    ["Blue Whale", "Elephant", "Giraffe", "Shark"],
    ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"]
];
let anslen=answerArray.length;
const button = document.getElementById('button');
const question = document.getElementById('question');
const lt1 = document.getElementById('lt1');
const lt2 = document.getElementById('lt2');
const lt3 = document.getElementById('lt3');
const lt4 = document.getElementById('lt4');
if(anslen==1){
    button.innerText='submit';
}

function populateData(val){
    question.innerText=questionArray[val];
    lt1.innerText=optionArray[val][0];
    lt2.innerText=optionArray[val][1];
    lt3.innerText=optionArray[val][2];
    lt4.innerText=optionArray[val][3];
}

populateData(cnt);

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        
        if(selectedOption.id===answerArray[cnt]){
            score++;
        }
        if(button.innerText==='submit'){
            window.alert(`your score is ${score}`);
            location.reload();
        }
        
        cnt++;
        populateData(cnt);
        if(cnt==anslen-1){
            button.innerText='submit';
        }
    } else {
        alert("Please select an option.");
    }
});

