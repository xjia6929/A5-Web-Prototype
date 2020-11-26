window.onload=function () {
  document.getElementById('ChatOnline').onclick=function () {
    if (document.getElementById('chat').className==='chat'){
      document.getElementById('chat').className='chat show'
    } else {
      document.getElementById('chat').className='chat'
    }
  }

  document.getElementById('CallUs').onclick=function () {
    document.getElementById('modal-CallUs').className='modal show';
    setTimeout(function () {
      document.getElementById('inner-CallUs').className='inner in';
    })
  }
  document.getElementById('close-CallUs').onclick=function () {
    document.getElementById('modal-CallUs').className='modal';
    document.getElementById('inner-CallUs').className='inner';
  }

  document.getElementById('Email').onclick=function () {
    document.getElementById('modal-Email').className='modal show';
    setTimeout(function () {
      document.getElementById('inner-Email').className='inner in';
    })
  }
  document.getElementById('close-Email').onclick=function () {
    document.getElementById('modal-Email').className='modal';
    document.getElementById('inner-Email').className='inner';
  }
}