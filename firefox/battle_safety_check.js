var utm = "";
var battles_safety_check = {};

async function postToGoogle(field1,field2,field3,field4) {
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbxs696rQNdYo-P6pxzSar6AS8ia5bmyEWN7_iDx83CPM9xeg2kWIKdvnJg89vuNF1zQ/exec?action=addProduct",
                    data: JSON.stringify({"tier": field1, "team": field2, "replay": field3, "elo": field4}),
                    type: "POST",
                    dataType: "json",
                    async:true,
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							//$('#success-msg').show();

						},
            statusCode: {
                0: function () {
                    return;

                },
                200: function () {
                    return;

                }
            }
                });
				return;
            }

app.receive = (function(previousFn){
  return function() {
    var result = previousFn.apply(this, arguments);
    //
    var data = arguments[0].split("|");
    var id = data[0].replace(">","").trim();
    if (!(id.includes("random"))) {
      if (arguments[0].includes("|init|battle") && data[4].includes(app.user.attributes.name)) {
        if (!(typeof cancel_rtb == "undefined")) {
          cancel_rtb();
        };
        battles_safety_check[id]=utm;
      } else if (id in battles_safety_check && arguments[0].includes("|win|")) {
        var elo = null;
        if (app.rooms[id].battle.rated);
        {
          elo = Math.max(app.rooms[id].battle.p1.rating,app.rooms[id].battle.p2.rating) ;
        };
        //postToGoogle(id,battles_safety_check[id],BattleLog.createReplayFileHref(app.rooms[id]).substr(23),elo);
        postToGoogle(id,battles_safety_check[id],encodeURIComponent(btoa(unescape(encodeURIComponent(app.rooms[id].battle.stepQueue.join('\n').replace(/\//g, '\\/').replaceAll(app.rooms[id].battle.p1.name,"player 1").replaceAll(app.rooms[id].battle.p2.name,"player 2"))))),elo);
      };
    };
    return result;
  }
})(app.receive)

app.send = (function(previousFn){
  return function() {
    var result = previousFn.apply(this, arguments);
    if (arguments[0].includes("/utm")) {
      if (utm != null) {
        utm = arguments[0].replace("/utm ","")
      };
    };
    return result;
  }
})(app.send);
