const image = document.getElementById("qrImage");
const input = document.getElementById("qrText");
const button = document.getElementById("generateBtn");
const api1= `https://api.qrserver.com/v1/`;
const api2 = `create-qr-code/?size=150x150&data=`;

button.addEventListener("click", () => {
  if(input.value.trim !== "") {
    qrImage.src = `${api1}${api2}${input.value}`
    window.alert("Qr Code Generated")
  }

  else {
    
    window.alert("Please Enter The URL or Text")
  }
  
  
});