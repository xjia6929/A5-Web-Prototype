window.onload=function () {
  var current=1;
  document.getElementById('left').onclick=function () {
    if (current>1) {
      current--
    }
    change()
  }
  document.getElementById('right').onclick=function () {
    if (current<3) {
      current++
    }
    change()
  }
  function change() {
    document.getElementById('imgs').className='imgwaper l'+current;
  }


  document.getElementById('DONATE').onclick=function () {
    document.getElementById('modal-DONATE').className='modal show';
    setTimeout(function () {
      document.getElementById('inner-DONATE').className='inner in';
    })
  }
  document.getElementById('close-DONATE').onclick=function () {
    document.getElementById('modal-DONATE').className='modal';
    document.getElementById('inner-DONATE').className='inner';
  }

  document.getElementById('ADOPT').onclick=function () {
    document.getElementById('modal-ADOPT').className='modal show';
    setTimeout(function () {
      document.getElementById('inner-ADOPT').className='inner in';
    })
  }
  document.getElementById('close-ADOPT').onclick=function () {
    document.getElementById('modal-ADOPT').className='modal';
    document.getElementById('inner-ADOPT').className='inner';
  }
}