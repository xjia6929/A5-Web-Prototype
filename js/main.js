(function(){
    change();
    function change(){
      var _w=document.documentElement.clientWidth;
      if(_w>1350){
        _w=1350
      }
      document.documentElement.style.fontSize = _w*40/2700 + 'px';
    }
    window.addEventListener('resize',change,false);}
)();