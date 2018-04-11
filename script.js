var url = window.location.href;

if (localStorage.getItem(url) !== null) {
  scroller(localStorage.getItem(url), 0);
}

window.onscroll = function() {
  var Y = window.pageYOffset;
  if (parseInt(Y) === 0) {
    url = window.location.href;
    scroller(localStorage.getItem(url), 0);
  }
  localStorage.setItem(url, Y);
}

function scroller(n, n1) {
  setTimeout(function() {
    var i = parseInt(n1);
    i += 100;
    if (i <parseInt(n)) {
      window.scroll(0,i);
      scroller(n,i);
    }
  }, 10);
}