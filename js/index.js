window.onload=function () {
  document.getElementById('select1').onclick=function () {
    if (document.getElementById('option1').className==='option') {
      document.getElementById('option1').className='show option'
    }else {
      document.getElementById('option1').className='option'
    }
  }
  document.getElementById('select2').onclick=function () {
    if (document.getElementById('option2').className==='option') {
      document.getElementById('option2').className='show option'
    }else {
      document.getElementById('option2').className='option'
    }
  }
  var current=1;
  document.getElementById('left').onclick=function () {
    if (current>1) {
      current--
    };
    change()
  }
  document.getElementById('right').onclick=function () {
    if (current<5) {
      current++
    };
    change()
  }
  document.getElementById('p1').onclick=function () {
    current=1;
    change()
  }
  document.getElementById('p2').onclick=function () {
    current=2;
    change()
  }
  document.getElementById('p3').onclick=function () {
    current=3;
    change()
  }
  document.getElementById('p4').onclick=function () {
    current=4;
    change()
  }
  document.getElementById('p5').onclick=function () {
    current=5;
    change()
  }
  function change() {
    document.getElementById('p1').className='';
    document.getElementById('p2').className='';
    document.getElementById('p3').className='';
    document.getElementById('p4').className='';
    document.getElementById('p5').className='';
    document.getElementById('p'+current).className='current';
    document.getElementById('content').className='content show'+current;
  }
}