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
      };
    };
  };

})(app.receive)
