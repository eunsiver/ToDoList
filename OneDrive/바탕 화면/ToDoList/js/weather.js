const API_KEY="d19c9df8b2eb0aaeb76d2bea9f5940e2";
function onGeoOk(position){
  const lat=position.coords.latitude;
  const lng=position.coords.longitude;
  console.log("You live in",lat,lng);
}
function onGeoError(){
  alert("Can find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//https://api.openweathermap.org/data/2.5/weather?lat=37.690605430279135&lon=126.72199020160245&appid=d19c9df8b2eb0aaeb76d2bea9f5940e2