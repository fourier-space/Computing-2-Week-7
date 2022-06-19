const Highscores = Object.create(null);

const scores = [];

Highscores.register = function (name, score) {
    scores.push({"name": name, "score": score});
    return Highscores.top_ten();
};

Highscores.top_ten = function () {
    return scores;
};

export default Object.freeze(Highscores);
