console.log("TEST1");

var teams = {};
teams['gen1ou'] = "https://drive.google.com/uc?id=1jOsfGOSacLKeK76ppB6yc4MUz5sN6RwZ";
teams['gen2ou'] = "https://drive.google.com/uc?id=1teLltGkmVNpL_KQ45BePs_0jjkHwj0m1";
teams['gen3ou'] = "https://drive.google.com/uc?id=1AUrmwku-O_fZzSVuP30kCY3QiR3FFr8w";
teams['gen4ou'] = "https://drive.google.com/uc?id=1lawJs1LtxdfP10r5AbIarO0c3LMxTIfk";
teams['gen5ou'] = "https://drive.google.com/uc?id=1ZDmnM60KXUHwKE2-LRARtNu0YdW3fWQa";
teams['gen6ou'] = "https://drive.google.com/uc?id=12LaN-6Lfsbz35YZeKJ25RZNCWVGgKssk";
teams['gen7ou'] = "https://drive.google.com/uc?id=1FK3xxHlSlE7vvOZN6y2-DRTbWIGsAQ6p";
teams['gen8ou'] = "https://drive.google.com/uc?id=1recOD4JW8pYHIRNcKTswYguPevIFv9qw";

var pack = "no pack";
var dump = "";

function getRandom(min, max) {
    let random = Math.floor(Math.random() * max) + min;
    if (random % 2 !== 0) {
        if ((random + 1) > max)
            random--;
        else
            random++
    };

    return random;
};
console.log("TEST2");
ConsoleRoom.prototype.customCommands = {};
ConsoleRoom.prototype.customCommands['rtb'] = function(Self, Tier) {
  fetch('https://cors.bridged.cc/' + teams[Tier])
  .then(rep => rep.text())
  .then(result =>  {
    let myteams = result.split("===")
    var n = getRandom(2, myteams.length);
    var team = myteams[n];
    team = team.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    app.curRoom.send("/code " + team);
    app.curRoom.send('/htmlbox <button name="send" value="/cancelSearch" style="background-color: rgba(150 , 300 , 300 , 0.6) ; border: 2px solid #3343ff ; border-radius: 10px 10px 10px 10px ; padding: 5pt ; width: 20% ; font-weight: bold ; box-shadow: 1px 1px 2px 1px #000"><strong>Cancel</strong></button>');
    team = PokemonTeams.importTeam(team);
    pack = PokemonTeams.packTeam(team);
    app.send('/utm , ' + pack);
    app.send("/battle! " + Tier);
})};
ConsoleRoom.prototype.parseCommandOrig = ConsoleRoom.prototype.parseCommand;
ConsoleRoom.prototype.parseCommand = function(Text) {
  var cmd = '';
  var target = '';
  var noSpace = false;
  if (Text.substr(0, 2) !== '//' && Text.charAt(0) === '/') {
    var spaceIndex = Text.indexOf(' ');
    if (spaceIndex > 0) {
      cmd = Text.substr(1, spaceIndex - 1);
      console.log("//CMD");
      console.log(cmd);
      target = Text.substr(spaceIndex + 1);
      console.log("//TARGET");
      console.log(target);
    } else {
      console.log("//CMD");
      cmd = Text.substr(1);
      console.log(cmd)
      target = '';
      noSpace = true;
    }
  }
  if (this.customCommands[cmd.toLowerCase()]) return this.customCommands[cmd.toLowerCase()](this, target);
  return this.parseCommandOrig(Text);
};
