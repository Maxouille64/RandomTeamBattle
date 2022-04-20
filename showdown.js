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
teams['gen1ou'] = "https://drive.google.com/uc?id=1jOsfGOSacLKeK76ppB6yc4MUz5sN6RwZ";
teams['gen2ou'] = "https://drive.google.com/uc?id=1teLltGkmVNpL_KQ45BePs_0jjkHwj0m1";
teams['gen3ou'] = "https://drive.google.com/uc?id=1AUrmwku-O_fZzSVuP30kCY3QiR3FFr8w";
teams['gen4ou'] = "https://drive.google.com/uc?id=1lawJs1LtxdfP10r5AbIarO0c3LMxTIfk";
teams['gen5ou'] = "https://drive.google.com/uc?id=1ZDmnM60KXUHwKE2-LRARtNu0YdW3fWQa";
teams['gen6ou'] = "https://drive.google.com/uc?id=12LaN-6Lfsbz35YZeKJ25RZNCWVGgKssk";
teams['gen7ou'] = "https://drive.google.com/uc?id=1FK3xxHlSlE7vvOZN6y2-DRTbWIGsAQ6p";
teams['gen8ou'] = "https://drive.google.com/uc?id=1recOD4JW8pYHIRNcKTswYguPevIFv9qw";
//RBY
teams['gen1ubers'] = "https://drive.google.com/uc?id=14PJVqKZBjCy6mPkPytlNEoFilzpBcVuf";
teams['gen1uu'] = "https://drive.google.com/uc?id=1BM_16iwFKTbgXZ4X3XUBGOwUoOcVYnw6";
teams['gen1nu'] = "https://drive.google.com/uc?id=1SLOKA1zyr0c2RcYTDld_PxRplFboJtI6";
teams['gen1lc'] = "https://drive.google.com/uc?id=1Kz9t6GBf5HJx5upxUwsZleogTtewH7xv";
//GSC
teams['gen2nu'] = "https://drive.google.com/uc?id=13yehX4SE9jLzO3FO4RDFi5ChDb5p12F-";
teams['gen2pu'] = "https://drive.google.com/uc?id=1Ntp_3ACulc11KQTL5oRbw49T2Hqut6Tb";
teams['gen2zu'] = "https://drive.google.com/uc?id=11GgjSBIzdcWO1Ea-FMZLWghIAAKNtetr";
teams['gen2ubers'] = "https://drive.google.com/uc?id=1zE1bnR18te74Gn1ULCmtGyaOsjiz9rkw";
teams['gen2uu'] = "https://drive.google.com/uc?id=1uesjTBh--PZSk1MZ1MM9oC9Fi4hTjC8C";
//ADV
teams['gen3ubers'] = "https://drive.google.com/uc?id=16_EO2pK60pc5SqPzbuzm7JU5o6VUU-Zz";
teams['gen3uu'] = "https://drive.google.com/uc?id=1bZk5QnxxvrgjJG7sFvVz56c-Z-4-xMgp";
teams['gen3nu'] = "https://drive.google.com/uc?id=1TVrgYER8XkJ8abwz6f0-ZDI19KiJYdmG";
teams['gen3zu'] = "https://drive.google.com/uc?id=1oQ3NBROdf9yR_SU2AN9CfVLDPGmmaujp";
//DPP
teams['gen4ubers'] = "https://drive.google.com/uc?id=1yYWYbjxKse6-Xe-RbnhN2p69Bwkrp2Ie";
teams['gen4uu'] = "https://drive.google.com/uc?id=1NAsq39JbTaSihDXZ4wUV48YTB8kybpYh";
teams['gen4nu'] = "https://drive.google.com/uc?id=1vpU4PaPsGD9NATQwiodji22A7uIHavNX";
teams['gen4pu'] = "https://drive.google.com/uc?id=128Iqkq7LtTp1T2EPLpKo6sFZAo2devqW";
teams['gen4zu'] = "https://drive.google.com/uc?id=1nURG41VPpSpGXIILE0ppwTqIALAU4qME";
teams['gen4lc'] = "https://drive.google.com/uc?id=1Mhm-i_veMMJAWMupy03ivxYCECKL-J8N";
//BW2
teams['gen5doublesou'] = "https://drive.google.com/uc?id=1bFX0unqTqGpAGEoHMC7nSGp6sr56YBv3";
teams['gen5ubers'] = "https://drive.google.com/uc?id=1LG7uWf8Nn3IF8dhoMvQs4L5TjqUVYcQ1";
teams['gen5uu'] = "https://drive.google.com/uc?id=1Rr149h7Y5xv0cvZkvZWV2ArYjy0oGm8I";
teams['gen5ru'] = "https://drive.google.com/uc?id=1fVnQhIYvP2jT3vx3_iAlL2tLiOyu3EBz";
teams['gen5nu'] = "https://drive.google.com/uc?id=1BQw3prOfU5p2vnlrRfiT-kfnfDgXdmHy";
teams['gen5pu'] = "https://drive.google.com/uc?id=17X1ywIONnk7bgJmiXpDmremIYe4KQv5s";
teams['gen5zu'] = "https://drive.google.com/uc?id=1xnzB8-MWxI35IKqd9jFaTLago85q1_0B";
teams['gen5lc'] = "https://drive.google.com/uc?id=1CZweSHde9V0Ii9Sw8HRhpDUfjgCSlTuF";
//ORAS
teams['gen6anythinggoes'] = "https://drive.google.com/uc?id=1ig0gURP30ZQTLMBX22zorXaM3h_2e4EA";
teams['gen6ubers'] = "https://drive.google.com/uc?id=1q0cd1cx1a7Kt30doOTbgDv5HDILocA_N";
teams['gen6uu'] = "https://drive.google.com/uc?id=1HwBnBRUgW9LuNOT_d0YRdbGf4d93Ggb0";
teams['gen6ru'] = "https://drive.google.com/uc?id=154TU1TmlIujhb2ucTtt_qGWLjiZqhsv5";
teams['gen6nu'] = "https://drive.google.com/uc?id=1BdlohACiABuH98_uCXyTmPbj9sOlz7-s";
teams['gen6pu'] = "https://drive.google.com/uc?id=1OzJsMkvW6fCPZvP13COUZBSDoGLdtOev";
teams['gen6zu'] = "https://drive.google.com/uc?id=1rLDhA84F0EQbyca_X-hQXM3JspwSfyoI";
teams['gen6lc'] = "https://drive.google.com/uc?id=1qCSKcKgOyM_aWtVmEBKc3NnFA0r7TE1o";
teams['gen6monotype'] = "https://drive.google.com/uc?id=1d3m2JANGtqHTsWCNIUFVrKw4-cmBNBW7";
teams['gen6doublesou'] = "https://drive.google.com/uc?id=1vKR_-1xjknLiAFcwmD_ahJKjgNjB6fki";
//USUM
teams['gen7ag'] = "https://drive.google.com/uc?id=1pdAeph8vFhRM7oPobQvdg6L4w6xqMybM";
teams['gen7cap'] = "https://drive.google.com/uc?id=1I2kwmLV_1KTOfUWhhC6tn2KF1uY3PkHf";
teams['gen7doublesou'] = "https://drive.google.com/uc?id=1zZDMpjCkY5Nm9sBc7h8jVXFvjOESGj1b";
teams['gen7doublesubers'] = "https://drive.google.com/uc?id=1PCxqnrrL_wYBZExK4KTGfX5-t29zjx7R";
teams['gen7lc'] = "https://drive.google.com/uc?id=1X_uv4CbXkjh4L487Vfk9qNVf14cUZytw";
teams['gen7lgpeou'] = "https://drive.google.com/uc?id=1r8sB2GBEP3_bYU8hNUxIM30HjhDIqM6h";
teams['gen7monotype'] = "https://drive.google.com/uc?id=1xECWHZ0-Guk9WDmJ83RrPfJV1T-yFRpJ";
teams['gen7nfe'] = "https://drive.google.com/uc?id=1a1aDXNUuP1eTB5lN6_Qh_Tzj0kECwIzN";
teams['gen7nu'] = "https://drive.google.com/uc?id=1MOchNy2-uXlxtIvLR_1Vh7OEWdAC4iVm";
teams['gen7pu'] = "https://drive.google.com/uc?id=1moZlTGanvLjPivbF556OfNAUJewFh3M4";
teams['gen7ph'] = "https://drive.google.com/uc?id=1djiauplDQwp3gnwCBGi0bQUi5FcWP-NV";
teams['gen7ru'] = "https://drive.google.com/uc?id=1KZGK1PfKuKgJ3o8T0wB8PBFeqKcCLSj5";
teams['gen7ubers'] = "https://drive.google.com/uc?id=1QXfXnG9PCrtG7I5znlMYzn74cQ07Vt0P";
teams['gen7uu'] = "https://drive.google.com/uc?id=1qewEegDckuR80gILgqQwB9TpdOI4L2gq";
teams['gen7zu'] = "https://drive.google.com/uc?id=1Olbfq8NubVRY_mtuvrtab7fSV9ofj6MI";
teams['gen7bss'] = "https://drive.google.com/uc?id=1mILVgye7JgqZtwHNYAHS3jEdWoHppEeg";
//SS
teams['dou'] = "https://drive.google.com/uc?id=1cCAYdpBNSJfoOSFqufT_7IdATqooTBWb";
teams['natdexmonotype'] = "https://drive.google.com/uc?id=1OtIs8G9RHrgAxB9pCR6A7-XLhX49ybWA";
teams['gen8natdexuu'] = "https://drive.google.com/uc?id=1ZtDMfIycz0HCmKrIDZuhD3ZMxTsMa7Ix";
teams['gen8bss'] = "https://drive.google.com/uc?id=12wQxFADIpbsj3N1puYlzWQKzAk0Wyt56";
teams['duu'] = "https://drive.google.com/uc?id=1W0o3boP7qOtSv3XD9pLFHYx-Owp0VP8O";
teams['lc'] = "https://drive.google.com/uc?id=1VoJReISY5tjRkSgM2phFuuPMKQxPZRXe";
teams['monotype'] = "https://drive.google.com/uc?id=1BfGKBANTg6-2liEovm85c5UsCLK1iv46";
teams['natdex'] = "https://drive.google.com/uc?id=1iDXFvSKNLuzd1YR0mmEKDSebaaBSDfVw";
teams['natdexag'] = "https://drive.google.com/uc?id=1vAWX6lRPjCX2GO83D3kQ2F6GBLDfLjiX";
teams['nfe'] = "https://drive.google.com/uc?id=1RWezbtM-rdYcn32L1LYnlF2UTpKO-Wnq";
teams['nu'] = "https://drive.google.com/uc?id=1CDOE7DFTkxUZqwlKCHYON9aMyBBl8GCr";
teams['pu'] = "https://drive.google.com/uc?id=1tPXHEmUlZ2U0VFNTKx_yWmsbExHqyeWH";
teams['ru'] = "https://drive.google.com/uc?id=10TT7A65p60w0nNKQvrMdbJZYsLcNP6mi";
teams['ubers'] = "https://drive.google.com/uc?id=10itsyg3eUzFkY2dlCMk34USlggcDvl40";
teams['uu'] = "https://drive.google.com/uc?id=1FjxGDoaYRNF0dQN7eg_Bpwvi2f2gS_t5";
teams['zu'] = "https://drive.google.com/uc?id=1UWaUWR6ESYcMFg6WQvJdYwapEIKPkWTx";
teams['gen8bdspou'] = "https://drive.google.com/uc?id=1Pt_Mev8VWqwYPQpWrMQdWSzeJfZ8jwbA";
teams['gen8cap'] = "https://drive.google.com/uc?id=19hQvCNZxOPsX6dHYhfCPe25mhKFRiDXf";

//OM
teams['aaa'] = "https://drive.google.com/uc?id=1NuiXcOjJ7f4RCQ7vBCXL3X_6qo5KFb-3";
teams['bh'] = "https://drive.google.com/uc?id=1eemY8bv7ZHqQzdg7uGBTkEBfUyG8_xRK";
teams['camomons'] = "https://drive.google.com/uc?id=19LiUeolOSbuwOIDrKg14JoJldFU9DxD-";
teams['gen8mnm'] = "https://drive.google.com/uc?id=101756U9tIYkemXRiDgKjvje5YZl8i7X_";
teams['natdexbh'] = "https://drive.google.com/uc?id=13hCSSkS-XX7kjRvZeiHZ6vA-KX0Ydmfs";
teams['stabmons'] = "https://drive.google.com/uc?id=1C_qDplncOT7QvrN-ISIn6DZ7nASaDaTD";
teams['gen7abilitiesasmoves'] = "https://drive.google.com/uc?id=1jKz5WC-iWtN4jJjyu1UN36m68CwOwTns";
teams['gen7anythinggoesmixandmega'] = "https://drive.google.com/uc?id=18buudvGsBdeKszsnifRAWjvbwofi9NjI";
teams['gen7aaa'] = "https://drive.google.com/uc?id=1r_-OcHwpFJDHKmAdRV9dRLNIXzInbsNo";
teams['gen7bh'] = "https://drive.google.com/uc?id=1rc1o_wos0rvfSrZg3Myg1Tmmbyy-IEJX";
teams['gen7camomons'] = "https://drive.google.com/uc?id=1jRt1sE1mgSlg_VqCluAqAjXo3MPR2yRK";
teams['gen7crossevolution'] = "https://drive.google.com/uc?id=1hlmV56TMXZPOHTTIOiG2bVVzygV3LDYh";
teams['gen7followtheleader'] = "https://drive.google.com/uc?id=1UdjbjpCJJPKwBCMhs8x52lziwTubKK1f";
teams['gen7fortemons'] = "https://drive.google.com/uc?id=1P1X-M4c0LhBbPUkgJhb3dDrZ8JiO_rov";
teams['gen7godsandfollowers'] = "https://drive.google.com/uc?id=1PDCzTfedn1JiOX1ZZphk-P9KGPIS55cN";
teams['gen7inheritance'] = "https://drive.google.com/uc?id=11_PI2TVBbkDOrrRWWMNt07QrREpNN2LI";
teams['gen7linked'] = "https://drive.google.com/uc?id=1rQziu2qL8yZY9H6S7pYz8Ei6VVmdSa6d";
teams['gen7megamons'] = "https://drive.google.com/uc?id=1L3rrk0i36bilktcfPPYY_vp7XkYy3vek";
teams['gen7mergemons'] = "https://drive.google.com/uc?id=1pTwiTbszU90swX-BMMAikVZnK9kk9vdK";
teams['gen7mnm'] = "https://drive.google.com/uc?id=1uf7ez0Rc61dexAZczuJMOUp10G7cC7AL";
teams['gen7natureswap'] = "https://drive.google.com/uc?id=1T-CF41qdsJeXS8vltVgo-mf1qsOQ1Ftt";
teams['gen7partnersincrime'] = "https://drive.google.com/uc?id=1x55_oxLKnBtDEVUi5F1hAW099IdueHgL";
teams['gen7stabmons'] = "https://drive.google.com/uc?id=1jNhuJmp2Z2CcHQa4ihUDfJk3IHc_lQGC";
teams['gen7ultimatez'] = "https://drive.google.com/uc?id=1WZxmp7PWmEajdfybiOALGiA-2ufHeZqb";
teams['gen7trademarked'] = "https://drive.google.com/uc?id=1fduf_4v15QAnPs16WV_izmhGiNAz2YGi";
//1v1&2v2
teams['gen31v1'] = "https://drive.google.com/uc?id=1VUkMpS1_ebVCnTBKaokVD1xSK2IzJkVd";
teams['gen41v1'] = "https://drive.google.com/uc?id=1euYzaTQsErTWWq97mFMifNsIAtruryhv";
teams['gen51v1'] = "https://drive.google.com/uc?id=1n-ryAd2ZFlgtU_3beNn9y4RMnRTi-FxI";
teams['gen52v2'] = "https://drive.google.com/uc?id=1Zhfzmdi5s3OMbNqsvHMibgbDxns3iAW_";
teams['gen61v1'] = "https://drive.google.com/uc?id=1oHpuqst4u-V-iadDtpKWOqbzP2vmA6ZJ";
teams['gen71v1'] = "https://drive.google.com/uc?id=1iNNxLj8VgI9UL95A9sYDIO71TR-9bucC";
teams['gen72v2'] = "https://drive.google.com/uc?id=1lW34-E3mumdMrDaA6efLfF2PrVh9ZzSn";
teams['1v1'] = "https://drive.google.com/uc?id=1KW3qNHO1B1S4BfJFhI0mKTO-ggNw_A7I";
teams['2v2'] = "https://drive.google.com/uc?id=19m15-Z-xQW78ypm2LHmehYf1C1QM5yKq";

const BYPASS_CORS = 'https://cors-anywhere-hd.herokuapp.com/';

function getRandom(min, max) {
    let random = (Math.floor(Math.random() * max/2)+ min/2) * 2;
    return random;
};

app.send('/code RANDOMIZABLE FORMATS: \n' + Object.keys(teams));
ConsoleRoom.prototype.customCommands = {};
ConsoleRoom.prototype.customCommands['rtb'] = function(Self, Tier) {
  fetch(BYPASS_CORS + teams[Tier])
  .then(rep => rep.text())
  .then(result =>  {
    let myteams = result.split("===")
    var n = getRandom(2, myteams.length);
    var team = myteams[n];
    team = team.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    app.send("/code " + team);
    team = PokemonTeams.importTeam(team);
    pack = PokemonTeams.packTeam(team);
    app.send('/utm , ' + pack);
    app.send("/battle! " + Tier);
})};
ConsoleRoom.prototype.customCommands['rtc'] = function(Self, Tier, User) {
  fetch(BYPASS_CORS + teams[Tier])
  .then(rep => rep.text())
  .then(result =>  {
    let myteams = result.split("===")
    var n = getRandom(2, myteams.length);
    var team = myteams[n];
    team = team.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    app.curSideRoom.send("/code " + team);
    team = PokemonTeams.importTeam(team);
    pack = PokemonTeams.packTeam(team);
    app.send('/utm , ' + pack);
    app.send('/challenge ' + User + ", " + Tier);
})};
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
  }
  if (this.customCommands[cmd.toLowerCase()]) return this.customCommands[cmd.toLowerCase()](this, target, user);
  return this.parseCommandOrig(Text);
};
