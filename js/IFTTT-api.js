function MakerIFTTT(key) {
    this.key = key;
    this._baseurl = "https://maker.ifttt.com/trigger/";
    this._withkey = "/with/key/";
}

MakerIFTTT.prototype.triggerAsync = function(event, data, callback) {
    // var xmlHttp = new XMLHttpRequest();
    // var callbackCalled = false;
    // xmlHttp.onreadystatechange = function() {
    //     if (!callbackCalled) {
    //         callback(xmlHttp.responseText);
    //         callbackCalled = true;
    //     }
    // }
    // console.log(data.value1);
    // xmlHttp.open("POST", this._baseurl + event + this._withkey + this.key, true);
    // xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xmlHttp.send("value1=" + data.value1 + "&value2=" + data.value2 + "&value3=" + data.value3);
    $.post("https://maker.ifttt.com/trigger/" + event + "/with/key/" + key, data)
        .always(callback);
}
