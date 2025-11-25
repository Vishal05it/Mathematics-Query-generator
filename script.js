let body = document.body;
let mathsDiv = ["17 * 2", "5 - 3", "8 / 2", "5 * 9", "10 % 2", "23 - 25", "12 * 3", "36 / 3", "26 % 5", "15 * 7"];
let ansDiv = [17 * 2, 5 - 3, 8 / 2, 5 * 9, 10 % 2, 23 - 25, 12 * 3, 36 / 3, 26 % 5, 15 * 7];
let quest = document.querySelector("#quest");
let currIdx = Math.floor(Math.random() * mathsDiv.length);
let score = document.querySelector("#score");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");
let msg = document.querySelector("#msg");
window.addEventListener("load", () => {
    quest.innerText = mathsDiv[currIdx];
});
let realQuest = ansDiv[currIdx];
let currScore = score.innerText;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Inp value : " + inp.value);
    if (inp.value == (realQuest)) {
        currScore++;
        currIdx = Math.floor(Math.random() * mathsDiv.length);
        quest.innerText = mathsDiv[currIdx];
        realQuest = ansDiv[currIdx];
        msg.style.display = "none";
    }
    else {
        msg.style.display = "inline-block";
        currScore--;
    }
    inp.value = "";
    score.innerText = " " + currScore;
})

