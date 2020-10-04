# Bomb-defusal-game

A mod of "Keep talking and Nobody Explodes" with enhancements and running on browser

## Starting the Game
Before you begin, setup your laptop by following the tutorials in https://heaps.io/documentation
The steps for starting this game are:
1) Download the code
2) Launch VisualStudio Code and open the project from the main menu File > Open Folder
3) Compile the code by doing Ctrl+Shift+B and then choose "haxe: active configuration"
4) Fix the compiled code to use the right webgl ID. Go to bin directory and find this line in the JS files: 
canvas = window.document.getElementById("webgl");
Replace "webgl" with the right values as given below:
```
compwires.js -- "webgl4"
maze.js -- "webgl3"
mem2.js -- "webgl10"
mem3.js -- "webgl11"
mez2.js -- "webgl7"
mez3.js -- "webgl8"
mez4.js -- "webgl9"
module1.js -- leave it at "webgl"
module2.js -- "webgl2"
needy1.js -- "webgl12"
needy2.js -- "webgl13"
needy3.js -- "webgl16"
needy4.js -- "webgl17"
needy5.js -- "webgl18"
nms1.js -- "webgl19"
wrs2.js -- "webgl6"
wrs3.js -- "webgl14"
wrs4.js -- "webgl15"
wrsr.js -- "webgl5"
```
5) Launch the game in the browser by clicking F5 and choose "Launch index.html"
6) Login with any team name and password listed in the users.js file. For example, "XTNT" and password "361988"

## Playing the Game
There are two types of modules:
- Needy modules: They need to be solved before the time runs out. If you fail to solve them, then points will be deducted. However they do not add to the score when you solve them. Make sure you solve them on time to avoid loss of points.
- Regular modules: Solving them will add to your score.

## Game Modes
Five different game modes are supported. Specify the mode as the query parameter `?r=<mode>`. For example:<br>
```
https://ambiguous-slope.surge.sh/?r=sp -- Single player practice round
https://ambiguous-slope.surge.sh/?r=sg -- Single player game round
https://ambiguous-slope.surge.sh/?r=mp1 - Multi player practice round 1
https://ambiguous-slope.surge.sh/?r=mp2 - Multi player practice round 2
https://ambiguous-slope.surge.sh/?r=mg  - Multi player game round. 
https://ambiguous-slope.surge.sh -- Multi player game round is the default if r is not specified
```
The following variables in the `config.js` file are different for each round.<br>
<br>
To set the <b>game time</b> for that round:
```
gameTime = 5; -- 5 minutes
gameTimeDisplay = "00:05:00"; -- change this accordingly
```
Time in seconds when the module must be <b>respawned</b>:
```
respawnTime = 5;
```
<b>List of modules</b> to be enabled for that round:
```
moduleList = ["ned2Div", "ned3Div", "ned4Div", "ned5Div"];
```
Modules will start to show up in the order listed here. The <b>time delay</b> between the modules is 3 seconds. This can be changed in the `users.js` file.
```
var interval = 3000; // delay (in milliseconds)
```
By default, the <b>points gained and the penalty points</b> for each module is defined in the `index.html` file. For example:
```
<p id="needyPt" class="d-none">0</p>
<p id="needyPn" class="d-none">15</p>
```
You can change this value depending on the game mode. For example, for the single player mode, we ca allow players to gain points by solving needy modules:
```
document.getElementById("needyPt").innerHTML = 20;             -- Points gained on success
document.getElementById("needyPn").innerHTML = 0;              -- Penalty points on fail
document.getElementById("ned2Points").innerHTML = "+20";       -- Change the points displayed on browser
document.getElementById("ned2Penalty").innerHTML = "0 points"; -- Change the points displayed on browser
```
When changing the points gained or the penalty points in config.js, ensure that the display values are also updated so that the player knows the rules for that mode.
<br>  
The <b>game rules</b> displayed on the login screen for each round is specified in the `index.html` file. For example:<br>
```
<p id="rulesSP" ...>
```

## Specifing Teams and Players
The file `users.js` has the list of players and teams. <br>
To add individual players for trial rounds, add entries without password:
```
userMap.set("player1@gmail.com", "");
```
To add teams for the actual tournament, add the team name and some random password:
```
userMap.set("Team1", "135095");
```

## Changing the Logo
To change the logo displayed on the login screen, edit this URL in the `config.js` file:
```
var clientLogo = "https://lsb.edu.in/wp-content/uploads/2019/03/cropped-Legacy-Logo-2013-14.png";
```


