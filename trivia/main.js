var user = {points: 0};

    function Score(score){
      var userScore = "";
      userScore += score + 'points';
      $('.score').html(userScore);
    };

    function addScore(user, gain = 0){
      user.points += gain;
      newScore(user.points);
      return user.points;
    };

$.ajax({
  url: "https://opentdb.com/api.php?amount=3&category=22&difficulty=easy&type=multiple",
}).done(function(data) {
  $('#name_of_category_1').append(JSON.stringify(data.results[0].category));
  $('#question_1').append(JSON.stringify(data.results[0].question));
    for(var i in data.results){
    console.log(data.results[i].question);
  }
  $('#correct_answer_1').append(JSON.stringify(data.results[0].correct_answer));
    for(var i in data.results){
    console.log(data.results[i].correct_answer);
  }
  $('#incorrect_answers_1').append(JSON.stringify(data.results[0].incorrect_answers));
    for(var i in data.results){
    console.log(data.results[i].incorrect_answers);
  }
});

$.ajax({
  url: "https://opentdb.com/api.php?amount=3&category=23&difficulty=easy&type=boolean",
}).done(function(data) {
  $('#name_of_category_2').append(JSON.stringify(data.results[0].category))
  $('#question_2').append(JSON.stringify(data.results[0].question));
  $('#correct_answer_2').append(JSON.stringify(data.results[0].correct_answer));
  $('#incorrect_answers_2').append(JSON.stringify(data.results[0].incorrect_answers));

});

$.ajax({
  url: "https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=multiple",
}).done(function(data) {
  $('#name_of_category_3').append(JSON.stringify(data.results[0].category))
  $('#question_3').append(JSON.stringify(data.results[0].question))
  $('#correct_answer_3').append(JSON.stringify(data.results[0].correct_answer));
  $('#incorrect_answers_3').append(JSON.stringify(data.results[0].incorrect_answers));
});