// Add users/teams and their passwords
let userMap = new Map();
userMap.set("naveen", "");
userMap.set("player1", "");
userMap.set("player2", "");
userMap.set("player3", "");
userMap.set("player4", "");
userMap.set("player5", "");
userMap.set("XTNT", "111111");
userMap.set("Team1", "135095");
userMap.set("Team2", "745394");

function login()
{
    var isValid = false;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(userMap.has(username))
    {
        if(isSinglePlayerMode() || (userMap.get(username) === password))
        {
            document.getElementById("player").value = username;
            document.getElementById("loginDiv").style.display = 'none';
            document.getElementById("rulesDiv").style.display = 'block';
 
            //Display the modules
            var array = getModules();
            var interval = 3000; // how much time should the delay (in milliseconds)?
            array.forEach(function (el, index) {
                setTimeout(function () {
                    document.getElementById(el).style.visibility = 'visible';
                }, index * interval);
            });
        }
        else
        {
            document.getElementById("errorMessage").style.display = 'block';
        }
    }
}
