const questions = [
    { q: "2+2=?", opts: ["3", "4", "5"], ans: "4" },
    { q: "Capital of France?", opts: ["Paris", "London", "Berlin"], ans: "Paris" }
];
let current = 0, score = 0;
function load() {
    if (current >= questions.length) {
        document.getElementById("question").innerText = "Quiz over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = `Your score: ${score}`;
        return;
    }
    const q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.getElementById("options").innerHTML = "";
    q.opts.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === q.ans) score++;
            current++;
            load();
        };
        document.getElementById("options").appendChild(btn);
    });
}
load();
