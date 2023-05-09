
      $(document).ready(function() {
        $('#7essimessi').submit(function(e) {
          e.preventDefault();
          
          // dont refrech page
          
          var name = $('input[name="names"]').val();
          var psw = $('input[name="psw"]').val();
          
          if (name === 'rbk@rbk.com' && psw === 'rbk') {
            window.location.href = "electrochafay.html";
          } else {
            alert('Invalid username , password');
          }
        });
      });

$(document).ready(function() {
    $(" #b1").click(function() {
        alert("welcome ");
    });
});

