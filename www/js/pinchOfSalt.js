var temp; // a temporary variable for use in all the function
var initialState;
var city2,status="default";
function processSearch(url,city) {
    document.getElementById('currWeatherImg').style.display="none";
    document.getElementById('searchButton').disabled = true;
    document.getElementById('stopButton').disabled=false;
    temp=document.getElementById('weatherReportBody').innerHTML;
    document.getElementById('weatherReportBody').innerHTML=document.getElementById('preloadingAnimation').innerHTML;
    var apiurl="http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=1699f991da059337e67157e0c2a490d6";

    console.log(apiurl);

    //getting JSON reply from openweathermap using jquery and I don't knw why revert() doesn't show any errors.
    $.getJSON( apiurl, function( data ) {
  var items = [];
  revert()
  document.getElementById('currStatus').innerHTML=" "+data.weather[0].main;
  status = document.getElementById('currStatus').innerHTML;
  console.log(data);
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
    if(key == 'name'){
    document.getElementById('currLoc').innerHTML=" "+val;
    city2=document.getElementById('currLoc').innerHTML;}
  });
 setImg();

});

}

function searchWeather()
{
  var city=document.getElementById('searchCity').value;
  var city=encodeURI(city);
  var requestUrl="http://www.shivambharadwaj.com/demo/weatherapi.php?";
  var finalUrl=requestUrl+city;
  processSearch(finalUrl,city);
}

function revert()
{
  document.getElementById('weatherReportBody').innerHTML=temp;
  document.getElementById('currWeatherImg').style.display="inline";
  document.getElementById('searchButton').disabled=false;
  document.getElementById('stopButton').disabled=true;
}
function setImg()
{
  var fog = /\w*Fog{1}[a-z]*\w*\s*\S*/i;
  var cloud = /\w*Cloud{1}[a-z]*\w*\s*\S*/i;
  var clear = /\w*Clear{1}[a-z]*\w*\s*\S*/i;
  var rain = /\w*Rain{1}[a-z]*\w*\s*\S*/i;
  if(status.match(fog))
  document.getElementById('currWeatherImg').setAttribute("src","icons/weather/fog.png");
  else if(status.match(cloud))
  document.getElementById('currWeatherImg').setAttribute("src","icons/weather/cloud.png");
  else if(status.match(clear))
  document.getElementById('currWeatherImg').setAttribute("src","icons/weather/clear.png");
  else if(status.match(rain))
  document.getElementById('currWeatherImg').setAttribute("src","icons/weather/rain.png");
  else {
    document.getElementById('currWeatherImg').setAttribute("src","icons/weather/rain.png");
  }

}
