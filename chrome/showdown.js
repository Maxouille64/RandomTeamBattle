// ==UserScript==
// @name     RTB
// @version  1.0.0
// @grant    unsafeWindow
// @author   me
// @match    http://play.pokemonshowdown.com/*
// @match    https://play.pokemonshowdown.com/*
// @match    http://*.psim.us/*
// @match    https://*.psim.us/*
// ==/UserScript==

const cancel_button = document.getElementById("rtbcancelSearch");
const server = "https://rtb.066644.xyz";
var teams = {};
var cc = {};
var search = false;
var cancel = false;
var cancel_rec = true;
var test;

Config.whitelist.push("066644.xyz")
Config.whitelist.push("www.coupcritique.fr")
Config.whitelist.push("drive.google.com")

async function BYPASS_CORS(url, init) {
  var evt = new CustomEvent("myCustomEvent", {detail: {url: url, init: init}});
  await document.dispatchEvent(evt);
  return
};

fetch('https://raw.githubusercontent.com/Maxouille64/database/main/teams.json')
    .then(response => response.json())
    .then(data => teams = data)
    .then(teams => app.send('/code RANDOMIZABLE FORMATS: \n' + Object.keys(teams)));

fetch('https://raw.githubusercontent.com/Maxouille64/database/main/cc.json')
    .then(response => response.json())
    .then(data => cc = data);

function getRandom(min, max) {
    let random = (Math.floor(Math.random() * max / 2) + min / 2) * 2;
    return random;
};

function cancel_rtb() {
    cancel_rec = true;
    cancel = true;
    cancel_button.style = "display: none";
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function rtb(Tier, txt) {
    let myteams = txt.split("===");
    var team = myteams[getRandom(2, myteams.length)];
    //for node.js use global instead of window
    //var console = global.console;
    if (cancel_rec == true) {
        return;
    };
    window.console.log = function(msg) {
        if (msg.includes('|popup|Your team was rejected for the following reasons'))
            //app.closePopup();
            return rtb(Tier, txt);
        return;
    };
    if (team) {
        team.replace(/^\s\s*/, '');
        team.replace(/\s\s*$/, '');
        app.send("/code " + team);
        team_json = pkmn.sets.Teams.importTeam(team);
        app.sendTeam(team_json, () => {return});
        app.send(`/battle! ${Tier}`);
        return;
    } else {
        cancel_button.style = "display: none";
        app.send("/code request failed/unavailable tier, try with /rtb [tier] in a chatroom");
        return;
    return
    };
}

function rta(Tier, team) {
    if (cancel == true) {
        cancel_button.style = "display: none";
        return;
    } else if (team) {
        team.replace(/^\s\s*/, '');
        team.replace(/\s\s*$/, '');
        app.send("/code " + team);
        team_json = pkmn.sets.Teams.importTeam(team);
        app.sendTeam(team_json, () => {return});
        app.send(`/battle! ${Tier}`);
        return;
    } else {
        cancel_button.style = "display: none";
        app.send("/code request failed/unavailable tier, try with /rtb [tier] in a chatroom");
        return;
    };
}



function rtc(Tier, User, txt) {
    let myteams = txt.split("===");
    var team = myteams[getRandom(2, myteams.length)];
    if (cancel_rec == true) {
        return;
    };
    window.console.log = function(msg) {
        if (msg.includes('|popup|Your team was rejected for the following reasons'))
            //app.closePopup();
            rtc(Tier, User, txt);
        return;
    };
    if (team) {
        team.replace(/^\s\s*/, '');
        team.replace(/\s\s*$/, '');
        app.send(`/code ${team}`);
        team_json = pkmn.sets.Teams.importTeam(team);
        app.sendTeam(team_json, () => {return});
        app.send(`/challenge ${User}, ${Tier}`);
        return;
    } else {
        app.send("/code request failed/unavailable tier, try with /rtb [tier] in a chatroom");
        return;
    };
};

function rtd(Tier, User, team) {
    if (team) {
        team.replace(/^\s\s*/, '');
        team.replace(/\s\s*$/, '');
        app.send("/code " + team);
        team_json = pkmn.sets.Teams.importTeam(team);
        app.sendTeam(team_json, () => {return});
        app.send(`/challenge ${User}, ${Tier}`);
        return;
    } else {
        cancel_button.style = "display: none";
        app.send("/code request failed/unavailable tier");
        return;
    };
}

ConsoleRoom.prototype.customCommands = {};
ConsoleRoom.prototype.customCommands['rtb'] = function(Self, Tier) {
    var mod = getCookie("mod");
    cancel = false;
    cancel_button.style = "";
    // le choix des différents mods
    switch(mod) {
      case "easy":
          fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"easy","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
              break;
      case "normal":
          fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"normal","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
              break;
      case "hard":
          fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"hard","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
              break;
      case "lunatic":
          fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"lunatic","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
              break;
      case "matrix":
          fetch(`${server}/matrix/?input={"tier":"gen8ou","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
          break;
      case "cc":
        BYPASS_CORS(`https://www.coupcritique.fr/api/teams?page=1&tier=${cc[Tier]}`,{mode: 'no-cors'});
        document.addEventListener('StorageResponse', (result) => {
            test = result.detail;
            let r = Math.floor(Math.random() * (JSON.parse(result.detail)
                .nbPages));
            BYPASS_CORS(`https://www.coupcritique.fr/api/teams?page=${r}&tier=${cc[Tier]}`,{mode: 'no-cors'});
            document.addEventListener('StorageResponse', (result) => {
                let jsn = JSON.parse(result.detail);
                let r = Math.floor(Math.random() * jsn.teams.length);
                BYPASS_CORS(`https://www.coupcritique.fr/api/teams/${jsn.teams[r].id}`,{mode: 'no-cors'});
                document.addEventListener('StorageResponse', (result) => {
                    let jsn = JSON.parse(result.detail);
                    rta(Tier, jsn.team.export);
                },{once : true});
            }, {once : true});
        }, {once : true});
        break;

      case "smogdex":
          fetch(`${server}/smogdex/?input={"tier":"${Tier}","username":"${getCookie("showdown_username")}"}`)
              .then(r => r.text())
              .then(result => {
                  console.log(result);
                  rta(Tier, result);
              })
              break;
      case "teambuilder":
          var tier_teams = []
          for (const i of Storage.teams) {
              if (i.format == Tier) {
                  tier_teams.push(i.team);
              }
          }
          let random = Math.floor(Math.random() * tier_teams.length);
          team = tier_teams[random];
          app.send(`/utm ${team}`);
          app.send(`/battle! ${Tier}`);
          break;
      default:
          cancel_rec = false;
          setTimeout(() => {  console.log("uncanceled!"); }, 1);
          BYPASS_CORS(`https://drive.google.com/uc?id=${teams[Tier]}&export=download?key=AIzaSyAUQIvtYYQ0d0mrUt8TqgQv0y1iYb6EZp4`);
          document.addEventListener('StorageResponse', (e) => {
              return rtb(Tier, e.detail);
          }, {once : true});
    };
    return;
};

ConsoleRoom.prototype.customCommands['rtc'] = function(Self, Tier, User) {
    var mod = getCookie("mod");
    // le choix des différents mods
    switch(mod) {
    case "easy":
        fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"easy","username":"${getCookie("showdown_username")}"}`)
            .then(r => r.text())
            .then(result => {
                console.log(result);
                rtd(Tier, User, result);
            })
            break;
    case "normal":
        fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"normal","username":"${getCookie("showdown_username")}"}`)
            .then(r => r.text())
            .then(result => {
                console.log(result);
                rtd(Tier, User, result);
            })
            break;
    case "hard":
        fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"hard","username":"${getCookie("showdown_username")}"}`)
            .then(r => r.text())
            .then(result => {
                console.log(result);
                rtd(Tier, User, result);
            })
            break;
    case "lunatic":
        fetch(`${server}/lunatic/?input={"tier":"${Tier}","mod":"lunatic","username":"${getCookie("showdown_username")}"}`)
            .then(r => r.text())
            .then(result => {
                console.log(result);
                rtd(Tier, User, result);
            })
            break;
    case "matrix":
        fetch(`${server}/matrix/?input={"tier":"gen8ou","username":"${getCookie("showdown_username")}"}`)
            .then(r => r.text())
            .then(result => {
                console.log(result);
                rtd(Tier, User, result);
            })
            break;
    case "cc":
      BYPASS_CORS(`https://www.coupcritique.fr/api/teams?page=1&tier=${cc[Tier]}`,{mode: 'no-cors'});
      document.addEventListener('StorageResponse', (result) => {
          console.log(result.detail);
          let r = Math.floor(Math.random() * (JSON.parse(result.detail)
              .nbPages));
          BYPASS_CORS(`https://www.coupcritique.fr/api/teams?page=${r}&tier=${cc[Tier]}`,{mode: 'no-cors'});
          document.addEventListener('StorageResponse', (result) => {
              let jsn = JSON.parse(result.detail);
              let r = Math.floor(Math.random() * jsn.teams.length);
              BYPASS_CORS(`https://www.coupcritique.fr/api/teams/${jsn.teams[r].id}`,{mode: 'no-cors'});
              document.addEventListener('StorageResponse', (result) => {
                  let jsn = JSON.parse(result.detail);
                  rtd(Tier, User, jsn.team.export);
              },{once : true});
          }, {once : true});
      }, {once : true});
      break;
    case "teambuilder":
        var tier_teams = []
        for (const i of Storage.teams) {
            if (i.format == Tier) {
                tier_teams.push(i.team);
            }
        }
        let random = Math.floor(Math.random() * tier_teams.length);
        team = tier_teams[random];
        app.send(`/utm ${team}`);
        app.send(`/challenge ${User}, ${Tier}`);
        break;
    default:
        cancel_rec = false
        setTimeout(() => {  console.log("uncanceled!"); }, 1);
        BYPASS_CORS(`https://drive.google.com/uc?id=${teams[Tier]}&export=download?key=AIzaSyAUQIvtYYQ0d0mrUt8TqgQv0y1iYb6EZp4`);
        document.addEventListener('StorageResponse', (e) => {
            return rtc(Tier, User, e.detail);
        }, {once : true});
    };
};

ConsoleRoom.prototype.parseCommandOrig = ConsoleRoom.prototype.parseCommand;
ConsoleRoom.prototype.parseCommand = function(Text) {
    var cmd = '';
    var target = '';
    var noSpace = false;
    var user = 'guest';
    if (Text.substr(0, 2) !== '//' && Text.substr(0, 3) === '/rt') {
        app.send('/utm');
        var spaceIndex = Text.indexOf(' ');
        var commaIndex = Text.indexOf(',');
        if (commaIndex > 0) {
            Text = Text.split(",")
            cmd = Text[0].substr(1, spaceIndex - 1);
            console.log("//CMD");
            console.log(cmd);
            target = Text[0].substr(spaceIndex + 1)
                .toLowerCase();
            console.log("//TARGET");
            console.log(target);
            user = Text[1]
            console.log("//user");
            console.log(user);
        } else if (spaceIndex > 0) {
            cmd = Text.substr(1, spaceIndex - 1);
            console.log("//CMD");
            console.log(cmd);
            target = Text.substr(spaceIndex + 1)
                .toLowerCase();
            console.log("//TARGET");
            console.log(target);
        } else {
            console.log("//CMD");
            cmd = Text.substr(1);
            console.log(cmd)
            target = '';
            noSpace = true;
        }
    };
    if (this.customCommands[cmd.toLowerCase()]) return this.customCommands[cmd.toLowerCase()](this, target, user);
    return this.parseCommandOrig(Text);
};
