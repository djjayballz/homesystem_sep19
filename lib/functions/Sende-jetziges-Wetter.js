// name: Sende jetziges Wetter
// outputs: 1
var msg = {
"payload": {"chatId" : 173173012,
    "type" : 'message',
    "content" : "Das Wetter in Greifswald ist: " + msg.payload.detail + ". " +
    "Es sind " + msg.payload.tempc + " °C. " +
    "Die Luftfeuchtigkeit beträgt " + msg.payload.humidity + " %. " +
    "Die Windgeschwindigkeit beträgt "+ msg.payload.windspeed + " m/s. " +
    "Der Luftdruck beträgt " + msg.payload.pressure + " hPa." } };
return msg;