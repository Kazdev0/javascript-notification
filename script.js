var options = {
    "title":"Bu Bir Başlıktır",
    "icon":"./assets/example.png",
    "body":"Bu Bir Açıklamadır"
}
function NotificationSend() {
        Notification.requestPermission();
   var notification = new Notification(options.title, {
       title:options.title,
       icon:options.icon,
       body:options.body
   });
   notification.onclick = function(e) {
       window.open("/")
   }
}

// KazDev