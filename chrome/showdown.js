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

var teams = {};

//OU
teams['gen1ou'] = "1jOsfGOSacLKeK76ppB6yc4MUz5sN6RwZ";
teams['gen2ou'] = "1teLltGkmVNpL_KQ45BePs_0jjkHwj0m1";
teams['gen3ou'] = "1AUrmwku-O_fZzSVuP30kCY3QiR3FFr8w";
teams['gen4ou'] = "1lawJs1LtxdfP10r5AbIarO0c3LMxTIfk";
teams['gen5ou'] = "1ZDmnM60KXUHwKE2-LRARtNu0YdW3fWQa";
teams['gen6ou'] = "12LaN-6Lfsbz35YZeKJ25RZNCWVGgKssk";
teams['gen7ou'] = "1FK3xxHlSlE7vvOZN6y2-DRTbWIGsAQ6p";
teams['gen8ou'] = "1recOD4JW8pYHIRNcKTswYguPevIFv9qw";
//RBY
teams['gen1ubers'] = "14PJVqKZBjCy6mPkPytlNEoFilzpBcVuf";
teams['gen1uu'] = "1BM_16iwFKTbgXZ4X3XUBGOwUoOcVYnw6";
teams['gen1nu'] = "1SLOKA1zyr0c2RcYTDld_PxRplFboJtI6";
teams['gen1lc'] = "1Kz9t6GBf5HJx5upxUwsZleogTtewH7xv";
//GSC
teams['gen2nu'] = "13yehX4SE9jLzO3FO4RDFi5ChDb5p12F-";
teams['gen2pu'] = "1Ntp_3ACulc11KQTL5oRbw49T2Hqut6Tb";
teams['gen2zu'] = "11GgjSBIzdcWO1Ea-FMZLWghIAAKNtetr";
teams['gen2ubers'] = "1zE1bnR18te74Gn1ULCmtGyaOsjiz9rkw";
teams['gen2uu'] = "1uesjTBh--PZSk1MZ1MM9oC9Fi4hTjC8C";
//ADV
teams['gen3ubers'] = "16_EO2pK60pc5SqPzbuzm7JU5o6VUU-Zz";
teams['gen3uu'] = "1bZk5QnxxvrgjJG7sFvVz56c-Z-4-xMgp";
teams['gen3nu'] = "1TVrgYER8XkJ8abwz6f0-ZDI19KiJYdmG";
teams['gen3zu'] = "1oQ3NBROdf9yR_SU2AN9CfVLDPGmmaujp";
//DPP
teams['gen4ubers'] = "1yYWYbjxKse6-Xe-RbnhN2p69Bwkrp2Ie";
teams['gen4uu'] = "1NAsq39JbTaSihDXZ4wUV48YTB8kybpYh";
teams['gen4nu'] = "1vpU4PaPsGD9NATQwiodji22A7uIHavNX";
teams['gen4pu'] = "128Iqkq7LtTp1T2EPLpKo6sFZAo2devqW";
teams['gen4zu'] = "1nURG41VPpSpGXIILE0ppwTqIALAU4qME";
teams['gen4lc'] = "1Mhm-i_veMMJAWMupy03ivxYCECKL-J8N";
//BW2
teams['gen5doublesou'] = "1bFX0unqTqGpAGEoHMC7nSGp6sr56YBv3";
teams['gen5ubers'] = "1LG7uWf8Nn3IF8dhoMvQs4L5TjqUVYcQ1";
teams['gen5uu'] = "1Rr149h7Y5xv0cvZkvZWV2ArYjy0oGm8I";
teams['gen5ru'] = "1fVnQhIYvP2jT3vx3_iAlL2tLiOyu3EBz";
teams['gen5nu'] = "1BQw3prOfU5p2vnlrRfiT-kfnfDgXdmHy";
teams['gen5pu'] = "17X1ywIONnk7bgJmiXpDmremIYe4KQv5s";
teams['gen5zu'] = "1xnzB8-MWxI35IKqd9jFaTLago85q1_0B";
teams['gen5lc'] = "1CZweSHde9V0Ii9Sw8HRhpDUfjgCSlTuF";
//ORAS
teams['gen6anythinggoes'] = "1ig0gURP30ZQTLMBX22zorXaM3h_2e4EA";
teams['gen6ubers'] = "1q0cd1cx1a7Kt30doOTbgDv5HDILocA_N";
teams['gen6uu'] = "1HwBnBRUgW9LuNOT_d0YRdbGf4d93Ggb0";
teams['gen6ru'] = "154TU1TmlIujhb2ucTtt_qGWLjiZqhsv5";
teams['gen6nu'] = "1BdlohACiABuH98_uCXyTmPbj9sOlz7-s";
teams['gen6pu'] = "1OzJsMkvW6fCPZvP13COUZBSDoGLdtOev";
teams['gen6zu'] = "1rLDhA84F0EQbyca_X-hQXM3JspwSfyoI";
teams['gen6lc'] = "1qCSKcKgOyM_aWtVmEBKc3NnFA0r7TE1o";
teams['gen6monotype'] = "1d3m2JANGtqHTsWCNIUFVrKw4-cmBNBW7";
teams['gen6doublesou'] = "1vKR_-1xjknLiAFcwmD_ahJKjgNjB6fki";
//USUM
teams['gen7ag'] = "1pdAeph8vFhRM7oPobQvdg6L4w6xqMybM";
teams['gen7cap'] = "1I2kwmLV_1KTOfUWhhC6tn2KF1uY3PkHf";
teams['gen7doublesou'] = "1zZDMpjCkY5Nm9sBc7h8jVXFvjOESGj1b";
teams['gen7doublesubers'] = "1PCxqnrrL_wYBZExK4KTGfX5-t29zjx7R";
teams['gen7lc'] = "1X_uv4CbXkjh4L487Vfk9qNVf14cUZytw";
teams['gen7lgpeou'] = "1r8sB2GBEP3_bYU8hNUxIM30HjhDIqM6h";
teams['gen7monotype'] = "1xECWHZ0-Guk9WDmJ83RrPfJV1T-yFRpJ";
teams['gen7nfe'] = "1a1aDXNUuP1eTB5lN6_Qh_Tzj0kECwIzN";
teams['gen7nu'] = "1MOchNy2-uXlxtIvLR_1Vh7OEWdAC4iVm";
teams['gen7pu'] = "1moZlTGanvLjPivbF556OfNAUJewFh3M4";
teams['gen7ph'] = "1djiauplDQwp3gnwCBGi0bQUi5FcWP-NV";
teams['gen7ru'] = "1KZGK1PfKuKgJ3o8T0wB8PBFeqKcCLSj5";
teams['gen7ubers'] = "1QXfXnG9PCrtG7I5znlMYzn74cQ07Vt0P";
teams['gen7uu'] = "1qewEegDckuR80gILgqQwB9TpdOI4L2gq";
teams['gen7zu'] = "1Olbfq8NubVRY_mtuvrtab7fSV9ofj6MI";
teams['gen7bss'] = "1mILVgye7JgqZtwHNYAHS3jEdWoHppEeg";
//SS
teams['gen8dou'] = "1cCAYdpBNSJfoOSFqufT_7IdATqooTBWb";
teams['gen8natdexmonotype'] = "1OtIs8G9RHrgAxB9pCR6A7-XLhX49ybWA";
teams['gen8nationaldexuu'] = "1ZtDMfIycz0HCmKrIDZuhD3ZMxTsMa7Ix";
teams['gen8bssfactory'] = "12wQxFADIpbsj3N1puYlzWQKzAk0Wyt56";
teams['gen8doublesuu8duu'] = "1W0o3boP7qOtSv3XD9pLFHYx-Owp0VP8O";
teams['gen8lc'] = "1VoJReISY5tjRkSgM2phFuuPMKQxPZRXe";
teams['gen8monotype'] = "1BfGKBANTg6-2liEovm85c5UsCLK1iv46";
teams['gen8natdex'] = "1iDXFvSKNLuzd1YR0mmEKDSebaaBSDfVw";
teams['gen8natdexag'] = "1vAWX6lRPjCX2GO83D3kQ2F6GBLDfLjiX";
teams['gen8nfe'] = "1RWezbtM-rdYcn32L1LYnlF2UTpKO-Wnq";
teams['gen8nu'] = "1CDOE7DFTkxUZqwlKCHYON9aMyBBl8GCr";
teams['gen8pu'] = "1tPXHEmUlZ2U0VFNTKx_yWmsbExHqyeWH";
teams['gen8ru'] = "10TT7A65p60w0nNKQvrMdbJZYsLcNP6mi";
teams['gen8ubers'] = "10itsyg3eUzFkY2dlCMk34USlggcDvl40";
teams['gen8uu'] = "1FjxGDoaYRNF0dQN7eg_Bpwvi2f2gS_t5";
teams['gen8zu'] = "1UWaUWR6ESYcMFg6WQvJdYwapEIKPkWTx";
teams['gen8bdspou'] = "1Pt_Mev8VWqwYPQpWrMQdWSzeJfZ8jwbA";
teams['gen8cap'] = "19hQvCNZxOPsX6dHYhfCPe25mhKFRiDXf";

//OM
teams['gen8tiershift'] = "1_cQXfyC8GNfDlLxswaFrmBUwdkR-dzzW";
teams['gen8crazyhouse'] = "1recOD4JW8pYHIRNcKTswYguPevIFv9qw";
teams['gen8freeforall'] = "1rjUVdzZWw8dqBi3Yt7CLLfyVe1tSE7Sc";
teams['gen8godlygift'] = "1F4ym3ZdJky10F2HExoodTmvBfsFJsJA2";
teams['gen8almostanyability'] = "1NuiXcOjJ7f4RCQ7vBCXL3X_6qo5KFb-3";
teams['gen8balancedhackmons'] = "1eemY8bv7ZHqQzdg7uGBTkEBfUyG8_xRK";
teams['gen8camomons'] = "19LiUeolOSbuwOIDrKg14JoJldFU9DxD-";
teams['gen8mixandmega'] = "101756U9tIYkemXRiDgKjvje5YZl8i7X_";
teams['natdexbh'] = "13hCSSkS-XX7kjRvZeiHZ6vA-KX0Ydmfs";
teams['gen8stabmons'] = "1C_qDplncOT7QvrN-ISIn6DZ7nASaDaTD";
teams['gen7abilitiesasmoves'] = "1jKz5WC-iWtN4jJjyu1UN36m68CwOwTns";
teams['gen7anythinggoesmixandmega'] = "18buudvGsBdeKszsnifRAWjvbwofi9NjI";
teams['gen7aaa'] = "1r_-OcHwpFJDHKmAdRV9dRLNIXzInbsNo";
teams['gen7bh'] = "1rc1o_wos0rvfSrZg3Myg1Tmmbyy-IEJX";
teams['gen7camomons'] = "1jRt1sE1mgSlg_VqCluAqAjXo3MPR2yRK";
teams['gen7crossevolution'] = "1hlmV56TMXZPOHTTIOiG2bVVzygV3LDYh";
teams['gen7followtheleader'] = "1UdjbjpCJJPKwBCMhs8x52lziwTubKK1f";
teams['gen7fortemons'] = "1P1X-M4c0LhBbPUkgJhb3dDrZ8JiO_rov";
teams['gen7godsandfollowers'] = "1PDCzTfedn1JiOX1ZZphk-P9KGPIS55cN";
teams['gen7inheritance'] = "11_PI2TVBbkDOrrRWWMNt07QrREpNN2LI";
teams['gen7linked'] = "1rQziu2qL8yZY9H6S7pYz8Ei6VVmdSa6d";
teams['gen7megamons'] = "1L3rrk0i36bilktcfPPYY_vp7XkYy3vek";
teams['gen7mergemons'] = "1pTwiTbszU90swX-BMMAikVZnK9kk9vdK";
teams['gen7mixandmega'] = "1uf7ez0Rc61dexAZczuJMOUp10G7cC7AL";
teams['gen7natureswap'] = "1T-CF41qdsJeXS8vltVgo-mf1qsOQ1Ftt";
teams['gen7partnersincrime'] = "1x55_oxLKnBtDEVUi5F1hAW099IdueHgL";
teams['gen7stabmons'] = "1jNhuJmp2Z2CcHQa4ihUDfJk3IHc_lQGC";
teams['gen7ultimatez'] = "1WZxmp7PWmEajdfybiOALGiA-2ufHeZqb";
teams['gen7trademarked'] = "1fduf_4v15QAnPs16WV_izmhGiNAz2YGi";
//1v1&2v2
teams['gen31v1'] = "1VUkMpS1_ebVCnTBKaokVD1xSK2IzJkVd";
teams['gen41v1'] = "1euYzaTQsErTWWq97mFMifNsIAtruryhv";
teams['gen51v1'] = "1n-ryAd2ZFlgtU_3beNn9y4RMnRTi-FxI";
teams['gen52v2'] = "1Zhfzmdi5s3OMbNqsvHMibgbDxns3iAW_";
teams['gen61v1'] = "1oHpuqst4u-V-iadDtpKWOqbzP2vmA6ZJ";
teams['gen71v1'] = "1iNNxLj8VgI9UL95A9sYDIO71TR-9bucC";
teams['gen72v2'] = "1lW34-E3mumdMrDaA6efLfF2PrVh9ZzSn";
teams['gen81v1'] = "1KW3qNHO1B1S4BfJFhI0mKTO-ggNw_A7I";
teams['gen82v2'] = "19m15-Z-xQW78ypm2LHmehYf1C1QM5yKq";

const BYPASS_CORS = 'https://cors-anywhere-hd.herokuapp.com/https://drive.google.com/uc?id='; //à changer
const cancel_button = document.getElementById("rtbcancelSearch");

function getRandom(min, max) {
    let random = (Math.floor(Math.random() * max/2)+ min/2) * 2;
    return random;
};

function cancel_rtb() {
  cancel = true;
  cancel_button.style="display: none";
};

function rtb(Tier, txt){
  let myteams = txt.split("===");
  var team = myteams[getRandom(2, myteams.length)];
  //for node.js use global instead of window
  //var console = global.console;
  window.console.log = function(msg){
    if(msg.includes('|popup|Your team was rejected for the following reasons'))
      //app.closePopup();
      rtb(Tier,txt);
      return;
  };
  if (cancel == true) {
    cancel = false;
    cancel_button.style="display: none";
    return;
  } else if(team) {
    team.replace(/^\s\s*/, '');
    team.replace(/\s\s*$/, '');
    app.send("/code " + team);
    team_json = PokemonTeams.importTeam(team);
    app.sendTeam(team_json);
    app.send(`/battle! ${Tier}`);
    return;
  } else {
    cancel_button.style="display: none";
    app.send("/code request failed/unavailable tier, try with /rtb [tier] in a chatroom");
    return;
  };
}

function rtc(Tier, User, txt) {
    let myteams = txt.split("===");
    var team = myteams[getRandom(2, myteams.length)];
    window.console.log = function(msg){
      if(msg.includes('|popup|Your team was rejected for the following reasons'))
        //app.closePopup();
        rtc(Tier,User,txt);
        return;
    };
    if (team) {
      team.replace(/^\s\s*/, '');
      team.replace(/\s\s*$/, '');
      app.send(`/code ${team}`);
      team_json = PokemonTeams.importTeam(team);
      app.sendTeam(team_json);
      app.send(`/challenge ${User}, ${Tier}`);
    } else {
      app.send("/code request failed/unavailable tier, try with /rtb [tier] in a chatroom");
    };
};

var cancel = false;

app.send('/code RANDOMIZABLE FORMATS: \n' + Object.keys(teams));
ConsoleRoom.prototype.customCommands = {};
ConsoleRoom.prototype.customCommands['rtb'] = function(Self, Tier) {
  cancel_button.style="";
  fetch(BYPASS_CORS + teams[Tier])
  .then(rep => rep.text())
  .then(result =>  rtb(Tier, result))};

ConsoleRoom.prototype.customCommands['rtc'] = function(Self, Tier, User) {
  fetch(BYPASS_CORS + teams[Tier])
  .then(rep => rep.text())
  .then(result =>  rtc(Tier, User, result))};
  
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
      target = Text[0].substr(spaceIndex + 1).toLowerCase();
      console.log("//TARGET");
      console.log(target);
      user = Text[1]
      console.log("//user");
      console.log(user);
    }
    else if (spaceIndex > 0) {
      cmd = Text.substr(1, spaceIndex - 1);
      console.log("//CMD");
      console.log(cmd);
      target = Text.substr(spaceIndex + 1).toLowerCase();
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

/**
window.console.log = function(msg){
  if(msg.includes('|init|battle'))
    alert(msg);
    cancel_button.style="display: none";
    return;
};
*/
