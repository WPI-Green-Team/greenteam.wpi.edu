function sendDataToIFTTT(data, event, key, onComplete) {
    $.post("https://maker.ifttt.com/trigger/" + event + "/with/key/" + key, data)
        .always(onComplete);
}
