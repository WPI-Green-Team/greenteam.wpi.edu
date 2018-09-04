var drawer = document.getElementById('drawer');

document.getElementById("menu-btn").addEventListener("click", showDrawer);
document.getElementById("close").addEventListener("click", hideDrawer);
if (isNight()) {
    enableNightMode();
}

function showDrawer() {
    if (!drawer)
        return;
    drawer.classList.add('visible');
    drawer.focus();
}

function hideDrawer() {
    drawer.classList.remove('visible');
}

function enableNightMode() {
    $('body').css('background', '#212121');
    $('body').css('color', 'white');
}


function isNight() {
    var time = new Date().getHours();
    return time >= 22 || time <= 5;
}


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
