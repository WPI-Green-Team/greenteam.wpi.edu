(function() {
  getEvents(displayEvents, displayError, "events.json");
})();


function displayEvents(events) {
  requestAnimationFrame(function() {
    events.sort(function(a, b) {
      var date1 = new Date(a.startTime);
      var date2 = new Date(b.startTime);
      return date1 - date2;
    });


    events.forEach(function(ev) {

        switch (ev.term){
          case 'A':
            $('#a-term').append(eventToHTML(ev));
            break;
          case 'B':
            $('#b-term').append(eventToHTML(ev));
            break;
          case 'C':
            $('#c-term').append(eventToHTML(ev));
            break;
          case 'D':
            $('#d-term').append(eventToHTML(ev));
            break;
        }

    });
    if ($('#events').html().trim() === '') {
      $('#events').append('<p class="text-center">No events</p>');
    }
  });

  
}

function eventToHTML(ev) {
  if (ev.imageUrl) {
    ev.imageUrl = 'Images/' + ev.imageUrl;
  }
  var image = ev.imageUrl ? '<div style="background-image: url(\'' + ev.imageUrl + '\');" class="card-image"></div>' : '';


  return '<div class="card event-restrict-width">' + image +
    '<div class="card-body"><h4 class="card-title">' + ev.name + '</h4>' +
    '<p class="card-text">' + ev.description + '</p>';
}


function displayError(err) {
  console.error("ERROR", err);
}


function showEvents(events) {
}

function changeCurrent(next) {
}
