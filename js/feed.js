window.onload=function () {

  document.getElementById('up').onclick=function () {
    document.getElementById('feed').className='feed show';
    document.getElementById('up').className='hid'
    document.getElementById('down').className='show'
  }
  document.getElementById('down').onclick=function () {
    document.getElementById('feed').className='feed';
    document.getElementById('down').className='hid'
    document.getElementById('up').className='show'
  }
}