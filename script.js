var options = {
    "title":"This Example Title",
    "icon":"./assets/example.png",
    "body":"This Example Description"
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
