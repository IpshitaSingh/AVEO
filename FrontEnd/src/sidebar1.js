


      (function sidebar(){
        
      var highlight = document.getElementById("sidebar");
      var btns = document.querySelectorAll(".btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(event) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active"," ");
        this.className += "active";
        });
      }

      })()
      
      function myFunction() { 
        let input = document.getElementById('searchbar').value 
        input=input.toLowerCase(); 
        let x = document.getElementsByClassName('an'); 
        
        for (i = 0; i < x.length; i++) { 
          if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
          } 
          else { 
            x[i].style.display="list-item";				 
          } 
        } 
      } 
      
    