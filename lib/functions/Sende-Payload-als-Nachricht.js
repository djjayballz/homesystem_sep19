// name: Sende Payload als Nachricht
// outputs: 1
var msg = {
"payload": {"chatId" : 173173012,
    "type" : 'message',
    "content" : "Die Bodentemperatur beträgt " + msg.payload +" °C."} };
return msg;