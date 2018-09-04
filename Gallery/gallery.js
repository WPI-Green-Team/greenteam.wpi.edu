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
    photoFile = "photos.json";
  }


  console.log("Loading photos");
  var start = Date.now();

  fetch(photoFile, options)
    .then(checkStatus)
    .then(getJSON)
    .then(extractPhotos)
    .then(displayFn)
    .catch(errorFn);
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function getJSON(response) {
  return response.json();
}

function extractPhotos(json) {
  var photos = json.albums;
  return Promise.resolve(photos);
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
  var html = '<a href="' + url + '" data-lightbox="' + year + '" title="View larger image"><div class="col-md-3 col-sm-6 gallery-img-container"><div class="gallery-img-div" style="background-image: url(' + url + ')"></div></div></a>';
  return html;
}
