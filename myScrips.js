
   //on page load - typewritter text//
  let i = 0;
  let txt = 'Here at Mibi Toys we have taken on the challenge of creating toys that are original, ' + 
           'screen-free,  safe,  and  durable.';
   let speed = 50;
            
   function typeWriter() {
     if (i < txt.length) {
       document.getElementById("h-1").innerHTML += txt.charAt(i);
       i++;
       setTimeout(typeWriter, speed);
     }
  }



   //onmouseover - click me pop ups//
  document.getElementById("img1").addEventListener("mouseover", clickMeVisible1);
  document.getElementById("img1").addEventListener("mouseout", clickMeHidden1);
  document.getElementById("img2").addEventListener("mouseover", clickMeVisible2);
  document.getElementById("img2").addEventListener("mouseout", clickMeHidden2);
  document.getElementById("img3").addEventListener("mouseover", clickMeVisible3);
  document.getElementById("img3").addEventListener("mouseout", clickMeHidden3);

  function clickMeVisible1() {
    document.getElementById("img1-p1").style.visibility = "visible";
    document.getElementById("img1-p2").style.visibility = "visible";
    document.getElementById("img1-p3").style.visibility = "visible";
 }

  function clickMeHidden1() {
    document.getElementById("img1-p1").style.visibility = "hidden";
    document.getElementById("img1-p2").style.visibility = "hidden";
    document.getElementById("img1-p3").style.visibility = "hidden";
}

  function clickMeVisible2() {
    document.getElementById("img2-p1").style.visibility = "visible";
    document.getElementById("img2-p2").style.visibility = "visible";
    document.getElementById("img2-p3").style.visibility = "visible";
}

  function clickMeHidden2() {
    document.getElementById("img2-p1").style.visibility = "hidden";
    document.getElementById("img2-p2").style.visibility = "hidden";
    document.getElementById("img2-p3").style.visibility = "hidden";
}

  function clickMeVisible3() {
    document.getElementById("img3-p1").style.visibility = "visible";
    document.getElementById("img3-p2").style.visibility = "visible";
    document.getElementById("img3-p3").style.visibility = "visible";
}

  function clickMeHidden3() {
    document.getElementById("img3-p1").style.visibility = "hidden";
    document.getElementById("img3-p2").style.visibility = "hidden";
    document.getElementById("img3-p3").style.visibility = "hidden";
}

    

   //image overlay slide clicking on the main menu//
  function openMagniTab(){
    document.getElementById("magni").style.height = "100%";
    document.getElementById("magni").addEventListener("click", function() {this.style.height = "0";});
 }
  function openPlushyTab(){
    document.getElementById("plushy").style.height = "100%";
    document.getElementById("plushy").addEventListener("click", function() {this.style.height = "0";});
}
  function openBallsTab(){
   document.getElementById("balls").style.height = "100%";
   document.getElementById("balls").addEventListener("click", function() {this.style.height = "0";});
}



  const d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();



