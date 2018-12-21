
  var count = 0;
function check() {
    var questionsOne = document.quiz.questionOne.value;
    var questionsTwo = document.quiz.questionTwo.value;
    var questionsThree = document.quiz.questionThree.value;
    var questionsFour = document.quiz.questionFour.value;
    var questionsFive = document.quiz.questionFive.value;
    var questionsSix = document.quiz.questionSix.value;
    var questionsSeven = document.quiz.questionSeven.value;
    var questionsEight = document.quiz.questionEight.value;
    var questionsNine = document.quiz.questionNine.value;
    var questionsTen = document.quiz.questionTen.value;
    var questionsEleven = document.quiz.questionEleven.value;
    var questionsTwelve = document.quiz.questionTwelve.value;
    var questionsThirteen = document.quiz.questionThirteen.value;
    var questionsFotheen = document.quiz.questionFotheen.value;
    var questionsFitheen = document.quiz.questionfitheen.value;
       
  
    
    if (questionsOne == "3") {
        count += 1;
    }
 if (questionsTwo == "5") {
     count += 1;
    }
    if (questionsThree == "8") {
       count += 1;
     }
    if (questionsFour == "11") {
        count += 1;
     }
    if (questionsFive == "15") {
        count += 1;
     }
     if (questionsSix == "18") {
       count += 1;
     }
    if (questionsSeven == "25") {
     count += 1;
     }
    if (questionsEight == "28") {
      count += 1;
    }
    if (questionsNine == "29") {
       count += 1;
 }
    if (questionsTen == "34") {
        count += 1;
     }
if (questionsEleven == "37") {
       count += 1;
    }
    if (questionsTwelve == "42") {
        count += 1;
     }
 if (questionsThirteen == "44") {
   count += 1;
    }
    if (questionsFotheen == "49") {
        count += 1;
    }
    if (questionsFitheen == "50") {
       count += 1;
}
return count;
}   
$(document).ready(function() {
    $("form").submit(function(){
        check()
        $("#button").hide();
        $("#quiz").hide();
        $("#numberCount").text("YOUR SCORE IS: " + count + "/15.")
        $("#numberCount").show();
        event.preventDefault();
    })


});