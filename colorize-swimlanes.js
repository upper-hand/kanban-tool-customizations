(function() {
  var swimlaneIdToBgColorValue = {
    501026: '#F1C232',
    501032: '#EA9999',
    501034: '#B6D7A8',
    501036: '#B4A7D6',
    501038: '#A4C2F4'
  };
  for(var key in swimlaneIdToBgColorValue) {
    var color = swimlaneIdToBgColorValue[key];
    var $row = $('tr[data-swimlane-id="' + key + '"]');
    $row.find('td').css({backgroundColor: color});
    $row.find('th').css({background: "linear-gradient(to bottom, " + color + " 0%, " + color + " 100%)"});
  }
}).call(this);
