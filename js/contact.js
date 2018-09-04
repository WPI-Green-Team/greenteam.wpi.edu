$('#project').submit(submitProjectIdea);
$('#signup').submit(submitEmail);

var key = 'hqA_NgsYT5B1FEX5BcEezCuJr8jNnnVu4xW9-MOUg7x';

function submitEmail(ev){
  ev.preventDefault();
  var email = $('#signup-email').val().trim();
  if (email === '') {
      alert('You must enter an email');
      return;
  }
  var maker = new MakerIFTTT(key);
  maker.triggerAsync("signup", {
      "value1": email
  }, function(data){
    alert('Email successfully sent!')
    location.reload();
  });
}

function submitProjectIdea(ev) {
    ev.preventDefault();
    var firstname = $('#firstname').val().trim();
    var lastname = $('#lastname').val().trim();
    var email = $('#email').val().trim();
    var project = $('#comments').val().trim();

    if (firstname === '') {
        alert('You must enter a first name');
        return;
    }
    if (lastname === '') {
        alert('You must enter a last name');
        return;
    }
    if (email === '') {
        alert('You must enter an email');
        return;
    }
    if (project === '') {
        alert('You must enter a project idea');
        return;
    }

// new : laAWxe4Q0vTh1k_tNCbXBNgJt6MZmsWeD2_zZ2gyOXr
    var maker = new MakerIFTTT(key);
    maker.triggerAsync("project_idea", {
        "value1": firstname + " " + lastname,
        "value2": email,
        "value3": project
    }, function(data){
      alert('Project idea successfully sent! Thank you!')
      location.reload();
    });




}
