(function() {
  getPhotos(displayPhotos, console.log);
})();

function displayPhotos(photos) {
  var url = window.location.search.substr(1);
  console.log(url);
  if (url === "" || url === "all") {
    console.log(photos);
    Object.keys(photos).forEach(function(year){
      displayPhotosInYear(year, photos[year]);
    });
  } else {
    displayPhotosInYear(url, photos[url]);
  }
}

function getPhotos(displayFn, errorFn, photoFile) {
  var options = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache'
  };

  if (photoFile === undefined) {
    photoFile = "data/photos.json";
  }


  console.log("Loading photos");
  var start = Date.now();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
      if (this.readyState !== 4) return;
      if (this.status !== 200){
          errorFn();
      }
      var json = JSON.parse(this.responseText);
      displayFn(json.albums);
  };
  xhr.open("GET", photoFile);
  xhr.send();
}

function displayPhotosInYear(year, album) {
  $('#gallery').append('<div class="row" id="' + year + '"></div>');
  var yearDiv = $('#' + year);
  yearDiv.append("<a href=\"" + album["album-link"] + "\" target=\"_blank\" title=\"View full size album\"><h2 class=\"text-center\">" + year.replace('-', ' - ') + "</h2></a>");
  var photos = album.photos;
  photos.sort(function(a, b) {
    return b.order - a.order;
  }).forEach(function(photo) {
    requestAnimationFrame(function() {
      yearDiv.append(galleryImageToHTML(year, photo.url));
    });
  });
}

function galleryImageToHTML(year, url) {
  var html = '<a href="' + url + '" data-lightbox="' + year + '" title="View larger image"><div class="col-md-3 col-sm-6 gallery-img-container"><div class="gallery-img-div" style="background-image: url(img/Gallery/' + url + ')"></div></div></a>';
  return html;
}
