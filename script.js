let accordions = document.getElementsByClassName("accordion");

for (let x=0; x < accordions.length; x++) {
    accordions[x].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}
