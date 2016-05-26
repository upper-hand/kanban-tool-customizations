(function(){
  var stages          = {},
      workflow_stages = window.KT.boards.models[0].get('workflow_stages');

  workflow_stages.forEach(function(stage){
    stages[stage.id] = stage;
  });

  workflow_stages.forEach(function(stage){
    var $floatingHeader = $('#kt-hint-label-' + stage.id),
        parent          = stages[stage.parent_id],
        fullText        = $floatingHeader.text();
    if (parent && parent.name) {
      fullText = parent.name + " : " + fullText;
    }
    $floatingHeader.text(fullText);
  });
}).call(this);
