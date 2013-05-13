// Why hello there, sexy.
// This is a javascript comment. Any line that begins with // will be like this.
// Comments have NO effect on your webpage. NONE! ZERO!

<!-- Yay! You've found me. -->
 
    window.onload = function() {
      var node = document.getElementById('blinking-text');
      setInterval(function() {
        visibility = node.style.visibility;
        if (visibility == "") {
          node.style.visibility = "hidden";
        } else {
          node.style.visibility = "";
        }
      }, 800);
    }

