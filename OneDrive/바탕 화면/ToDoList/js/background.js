const images=[
  "6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
  const chosenImage=(images[Math.floor(Math.random()*images.length)]);
  const bhImage=document.createElement("img");
  bhImage.src=`img/${chosenImage}`;
  bhImage.id="bgImage";
  document.body.appendChild(bhImage);