// this function will open the popup window

var imageIds = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12"];

var currentImage = null;
function openPopup(){
  document.getElementById("popup").style.display = "block";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
  document.getElementById(imageIds[currentImage-1]).style.display = "none";
}

function openImage(imageId){

  currentImage = imageId;
  document.getElementById(imageIds[imageId-1]).style.display = "block";
}

function rightImage(){

  if (currentImage==12){
    document.getElementById(imageIds[currentImage-1]).style.display = "none";
    document.getElementById(imageIds[0]).style.display = "block";
    currentImage =1;
  }

  else{
    document.getElementById(imageIds[currentImage-1]).style.display = "none";
    document.getElementById(imageIds[currentImage]).style.display = "block";
    currentImage = currentImage + 1;

  }
  console.log(currentImage);
}

function leftImage(){

  if (currentImage == 1){
    document.getElementById(imageIds[0]).style.display = "none";
    document.getElementById(imageIds[11]).style.display = "block";
    currentImage = 12;
  }
  else{
  document.getElementById(imageIds[currentImage-1]).style.display = "none";
  document.getElementById(imageIds[currentImage -2]).style.display = "block";
  currentImage = currentImage -1;
  }
  console.log(currentImage);
}
