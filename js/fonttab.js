$(document).ready(function(){
    
    function generateHighlight()
    {
      hljs.tabReplace = '    '; //4 spaces
      
      $("pre > code").each(function(ele,i) {
        //fix for hightlight.js erro
        var newHTML = $(this).html().replace(/&amp;gt;/gm,"&gt;").replace(/&amp;lt;/gm,"&lt;");
        
        $(this).html(newHTML);

      });

      $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
    }

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });
    //init
    generateHighlight();

    $("#codeImportTab").hide();
    
   $(".tabs_code").click(function(){
      $(".tabs_code").removeClass('active');
      $(this).addClass('active');
      
      console.log($(this).attr('id'));
      
      if($(this).attr('id')=="link_click") {
          $("#codeNormalTab").show();
          $("#codeImportTab").hide();
      }
      else {
          $("#codeNormalTab").hide();
          $("#codeImportTab").show();
      }
      return false;
   });
   
   $(".fontselect").change(function(){
      
      $("#codeNormal").html("&lt;link rel=\"stylesheet\" href='https://fonts.worldwidemyanmar.com/fonts/"+$(this).val()+"' /&gt;");
      $("#codeImport").html("@import url('https://fonts.worldwidemyanmar.com/fonts/"+$(this).val()+"');");
      
      font_family="";
      if($(this).val()=="myanmar3") {
          font_family="Myanmar3, Roboto";
      }
      else if($(this).val()=="pyidaungsu") {
          font_family="Pyidaungsu,Roboto";
      }
      else if($(this).val()=="zawgyi") {
          font_family="Zawgyi-One,Roboto";
      }
      else if($(this).val()=="imon") {
          font_family="iMon,'Times New Roman'";
      }
      else if($(this).val()=="unimon") {
          font_family="Uni Mon,'Times New Roman'";
      }
      else if($(this).val()=="mon3")
      {
          font_family = "'MON3 Anonta 1','Times New Roman'";
      }
      
      $("#fontfamily").html("font-family:"+font_family+";");
       
      generateHighlight();
   });
   
   $(".fontselect").change(function(){
       font_preview="";
      if($(this).val()=="myanmar3") {
          font_preview='Myanmar3';
        $("#previewtxt").html("<p style=font-family:"+ font_preview +" ;> က - ကလေးငယ်ချစ်စဖွယ် </p>");
       
        generateHighlight();  
      }
      else if($(this).val()=="pyidaungsu") {
          font_preview='Pyidaungsu';
           $("#previewtxt").html("<p style=font-family:"+ font_preview +" ;> က - ကလေးငယ်ချစ်စဖွယ် </p>");
       
             generateHighlight();
      }
      else if($(this).val()=="zawgyi") {
          font_preview='Zawgyi-One';
          $("#previewtxt").html("<p style=font-family:"+ font_preview +" ;> ေဇာ္က ကေနသည္။ </p>");
       
           generateHighlight();
    //   }
    //   else if($(this).val()=="imon") {
    //       font_preview='iMon';
    //       $("#previewtxt").html("<p style=font-family:"+ font_preview +" ;> တိ ပိုဲမန်ကၠာ ညံၚ်ပမာထဝ်သြန် ဂွံပတုဲကေၚ်ကာ တိဗ္ၚမန် ပ္ဍဲဇၟန်ဒွက် </p>");
       
    //       generateHighlight();
      }
       
      else if($(this).val()=="mon3")
      {
        // font_preview='MON3 Anonta 1';
         $("#previewtxt").html("<p class='anonta';> တိ ပိုဲမန်ကၠာ ညံၚ်ပမာထဝ်သြန် ဂွံပတုဲကေၚ်ကာ တိဗ္ၚမန် ပ္ဍဲဇၟန်ဒွက် </p>");  
       
        generateHighlight();
      }
      
   });
   
});