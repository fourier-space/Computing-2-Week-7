import R from "./common/ramda.js";
import Json_rpc from "./Json_rpc.js";

const button = document.getElementById("button");
const name = document.getElementById("name");
const score = document.getElementById("score");
const high_scores = document.getElementById("high_scores");

const register = Json_rpc.method("register");
const top_ten = Json_rpc.method("top_ten");

const update = function () {
    top_ten().then(function (scores) {
        high_scores.textContent = "";
        scores.forEach(function (score_line) {
            const li = document.createElement("li");
            li.textContent = `${score_line.name}: ${score_line.score}`;
            high_scores.append(li);
        });
    });
};

button.onclick = function () {
    const name_value = name.value;
    const score_value = score.value;
    register(name_value, score_value).then(update);
};

update();
