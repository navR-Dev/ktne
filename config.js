// Game configurations
var singlePlayerMode = false; // default is multiplayer
var gameRound = true; // default is game mode
var practiceRound1 = false;
var practiceRound2 = false;
var gameTime = 15;
var gameTimeDisplay="00:15:00";
var respawnTime = 30;
var clientLogo = "https://lsb.edu.in/wp-content/uploads/2019/03/cropped-Legacy-Logo-2013-14.png";
var moduleList = ['ned2Div', 'ned3Div', 'ned4Div', 'ned5Div', 'wrs1Div', 'mem1Div', 'mez1Div', 'nms1Div', 'mez3Div', 'mem3Div', 'wrs3Div', 'cwrDiv', 'wrs4Div', 'mez4Div', 'wrsrDiv',  'mem2Div'];

function initConfig()
{
    // Set game type
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('r'))
    {
        var round = urlParams.get('r');
        if(round === 'sp')
        {
            // Single player practice round
            singlePlayerMode = true;
            gameRound = false;
            practiceRound1 = true;
            gameTime = 5;
            gameTimeDisplay = "00:05:00";
            respawnTime = 20;
            document.getElementById("rulesSP").style.display = 'block';
            moduleList = ['ned2Div', 'ned3Div', 'ned4Div', 'ned5Div'];
            document.getElementById("needyPt").innerHTML = 20;
            document.getElementById("needyPn").innerHTML = 0;
            document.getElementById("ned2Points").innerHTML = "+20";
            document.getElementById("ned2Penalty").innerHTML = "0 points";
            document.getElementById("ned3Points").innerHTML = "+20";
            document.getElementById("ned3Penalty").innerHTML = "0 points";
            document.getElementById("ned4Points").innerHTML = "+20";
            document.getElementById("ned4Penalty").innerHTML = "0 points";
            document.getElementById("ned5Points").innerHTML = "+20";
            document.getElementById("ned5Penalty").innerHTML = "0 points";
        }
        else if(round === 'sg')
        {
            // single player game round
            singlePlayerMode = true;
            gameRound = true;
            gameTime = 3;
            gameTimeDisplay = "00:03:00";
            respawnTime = 5;
            document.getElementById("rulesSG").style.display = 'block';
            moduleList = ['ned2Div', 'ned3Div', 'ned4Div', 'ned5Div'];
            document.getElementById("needyPt").innerHTML = 40;
            document.getElementById("needyPn").innerHTML = 60;
            document.getElementById("ned2Points").innerHTML = "+40";
            document.getElementById("ned2Penalty").innerHTML = "-60 points";
            document.getElementById("ned3Points").innerHTML = "+40";
            document.getElementById("ned3Penalty").innerHTML = "-60 points";
            document.getElementById("ned4Points").innerHTML = "+40";
            document.getElementById("ned4Penalty").innerHTML = "-60 points";
            document.getElementById("ned5Points").innerHTML = "+40";
            document.getElementById("ned5Penalty").innerHTML = "-60 points";
        }
        else if(round === 'mp1')
        {
            // multi player practice round 1
            singlePlayerMode = false;
            gameRound = false;
            practiceRound1 = true;
            gameTime = 6;
            gameTimeDisplay = "00:06:00";
            respawnTime = 5;
            document.getElementById("rulesMP1").style.display = 'block';
            moduleList = ['ned2Div', 'ned3Div', 'ned4Div', 'ned5Div', 'wrs1Div', 'mem1Div', 'mez1Div', 'nms1Div'];
            document.getElementById("wrs1Pn").innerHTML = 0;
            document.getElementById("mem1Pn").innerHTML = 0;
            document.getElementById("mez1Pn").innerHTML = 0;
            document.getElementById("nms1Pn").innerHTML = 0;
            document.getElementById("wrs1Penalty").innerHTML = "0 points";
            document.getElementById("mem1Penalty").innerHTML = "0 points";
            document.getElementById("mez1Penalty").innerHTML = "0 points";
            document.getElementById("nms1Penalty").innerHTML = "0 points";   
        }
        else if(round === 'mp2')
        {
            // multi player practice round 2
            singlePlayerMode = false;
            gameRound = false;
            practiceRound2 = true;
            gameTime = 6;
            gameTimeDisplay = "00:06:00";
            respawnTime = 5;
            document.getElementById("rulesMP2").style.display = 'block';
            moduleList = ['ned2Div', 'ned3Div', 'ned4Div', 'ned5Div', 'wrs1Div', 'mem1Div', 'mez1Div', 'nms1Div', 'mez3Div', 'mem3Div', 'wrs3Div', 'cwrDiv'];
            document.getElementById("wrs1Pn").innerHTML = 30;
            document.getElementById("mem1Pn").innerHTML = 30;
            document.getElementById("mez1Pn").innerHTML = 30;
            document.getElementById("nms1Pn").innerHTML = 30;
            document.getElementById("mem3Pn").innerHTML = 30;
            document.getElementById("mez3Pn").innerHTML = 30;
            document.getElementById("wrs3Pn").innerHTML = 30;
            document.getElementById("cwrPn").innerHTML = 30;
            document.getElementById("wrs1Penalty").innerHTML = "-30 points";
            document.getElementById("mem1Penalty").innerHTML = "-30 points";
            document.getElementById("mez1Penalty").innerHTML = "-30 points";
            document.getElementById("nms1Penalty").innerHTML = "-30 points";
            document.getElementById("wrs3Penalty").innerHTML = "-30 points";
            document.getElementById("mem3Penalty").innerHTML = "-30 points";
            document.getElementById("mez3Penalty").innerHTML = "-30 points";
            document.getElementById("cwrPenalty").innerHTML = "-30 points";   
        }
        else if(round === 'mg')
        {
            // multi player game round
            document.getElementById("rulesMG").style.display = 'block';
            
        }
    }
    else
    {
        // multi player game round
        document.getElementById("rulesMG").style.display = 'block';
    }

    // set game time
    document.getElementById("countdown").innerHTML = gameTime;
    document.getElementById("timer").innerHTML = gameTimeDisplay;

    // generate session ID
    var idStr = Math.random().toString(36);
    document.getElementById("sessionId").value = idStr.substr(2);

    // set respawn time
    document.getElementById("respwnTime").innerHTML = respawnTime;
    
    // Display login dialog
    if(singlePlayerMode)
    {
        document.getElementById("passwordDiv").style.display = 'none';
        document.getElementById("teamNameLabel").style.display = 'none';
        document.getElementById("playerNameLabel").style.display = 'block';
    }
    else
    {
        document.getElementById("teamNameLabel").style.display = 'block';
        document.getElementById("playerNameLabel").style.display = 'none';
    }

    if(clientLogo)
    {
        document.getElementById("clientLogoDiv").style.display = 'block';
        document.getElementById("clientLogo").src = clientLogo;
    }
    document.getElementById("loginDiv").style.display = 'block';

}

function start()
{
    document.getElementById("start").style.display = 'block';
    document.getElementById("start").click();
}

function getModules()
{
    return moduleList;
}

function isSinglePlayerMode()
{
    return singlePlayerMode;
}

function isGameRound()
{
    return gameRound;
}

function isPracticeRound1()
{
    return practiceRound1;
}

function isPracticeRound2()
{
    return practiceRound2;
}