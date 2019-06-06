$(document).ready(function() {
    console.log("Link In Progress.....");
    //global variables
    var wins = 0;
    var lose = 0;
    var targetScore = 0;
    var currentScore = 0;
    var gem = [0,0,0,0];
    startGame();

    //functions
    function startGame(){
        currentScore = 0;
        targetScore = randomScore();
        randomizeCrystalScore();
        textUpdate();
        console.log(targetScore);
        console.log(gem);
    }

    function randomScore() {
        return Math.floor((Math.random() * 101) + 19 );
    }

    function randomizeCrystalScore(){
        for (let i = 0; i < gem.length; i++) {
            var random = Math.floor((Math.random() * 12) + 1);
            gem[i] = random;
        }
    }

    function textUpdate(){
        $("#win").text( wins );
        $("#lose").text( lose );
        $("#targetScore").text( targetScore );
        $("#totalScore").text( currentScore );
    }

    function checkScore(){
        if(currentScore === targetScore){
            wins++;
            alert("Winner!");
            startGame();
        }else if(currentScore > targetScore){
            lose++;
            alert("Failure!!");
            startGame();
        }
    }
    //click functions
    $(".image1").click(function() {
        currentScore += gem[0];
        textUpdate();
        checkScore();
    });
    $(".image2").click(function() {
        currentScore += gem[1];
        textUpdate();
        checkScore();
    });
    $(".image3").click(function() {
        currentScore += gem[2];
        textUpdate();
        checkScore();
    });
    $(".image4").click(function() {
        currentScore += gem[3];
        textUpdate();
        checkScore();
    });
});