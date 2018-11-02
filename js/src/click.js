//鼠标点击弹出特效
/*    
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("苟", "利", "国", "家", "生", "死", "以", "岂", "因", "祸", "福", "避", "趋", "之");
            var $i = $("<span />").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 99999999999999999999999999999999999999999999999999999999999999999999999999 ,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                1500,
                function() {
                    $i.remove();
                });
        });
    });
*/
var a_idx = 0;
var color_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("Prosperity", "Democracy", "Civility", "Harmony", "Freedom", "Equality", "Justice", "Rule of Law", "Patriotism", "Dedication", "Integrity", "Fridenship");
    //var col=['black','blue','yellow','white','red','pink','green','grey','orange','purple'];
    //var col_random=Math.floor(Math.random()*10);
    var col = ['#1793d3','#f57421','#c70036','purple','#10baee','#294172','#87cf3e','#73ba25','#fb3920','#8d86bb','#34be5b','red', '#DC9FB4', '#E16B8C', '#8E354A', '#F8C3CD', '#F4A7B9', '#64363C', '#F596AA', '#B19693', '#FB9966', '#A8D8B9', '#8A6BBE'];
    var $i = $("<span/>").text(a[a_idx]); 
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 9999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": col[color_idx]
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
    2200,
    function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
    color_idx = (color_idx + 1) % col.length;
  });
});
