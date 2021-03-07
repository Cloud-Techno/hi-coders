const tikla = document.getElementById("tikla");
tikla.addEventListener("click",gizleGoster);


function gizleGoster() {
      const secilenID = document.getElementById("goruluyormuyum");
      if (secilenID.style.display == "none") {
        secilenID.style.display = "";
      } else {
        secilenID.style.display = "none";
      }
    }
    
    