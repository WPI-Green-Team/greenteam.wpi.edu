function getEvents(displayFn, errorFn, eventFile) {
    if (eventFile === undefined) {
        eventFile = "Events/events.json";
    }

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState !== 4) return;
        if (this.status !== 200){
            errorFn();
        }
        var json = JSON.parse(this.responseText);
        displayFn(json.events);
    };
    xhr.open("GET", eventFile);
    xhr.send();
}