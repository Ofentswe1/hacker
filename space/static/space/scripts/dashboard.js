// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  var updating = false;
  var today = new Date();
  document.getElementById('date').innerHTML = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

  $.simpleWeather({
    woeid: '2357536', //2357536
    location: '-26.205701, 28.044142',
    unit: 'c',
    success: function(weather) {
      document.getElementById('city').innerHTML = weather.city;
      document.getElementById('temperature').innerHTML = weather.temp+'&deg;'+weather.units.temp;
      
      for(var i=0;i<weather.forecast.length;i++) {

	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = weather.forecast[i].day;
	tr.appendChild(td1);
	var td2 = document.createElement('td');
	td2.innerHTML = weather.forecast[i].high+'&deg;'+weather.units.temp;
	tr.appendChild(td2);
	var td3 = document.createElement('td');
	td3.innerHTML = weather.forecast[i].text;
	tr.appendChild(td3);
				
	document.getElementById('tbody').appendChild(tr);
      }
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
   var i = 0, timer = null;

   $("#btnUpdating").click(function() {
	   updating = !updating;
	
	   if(updating) {  
		   timer = setInterval(function(){
			 if (i % 2 == 0) {
		      		twentyFourHours = 24 * 60 * 60 * 1000;
		      		today = new Date(today.getTime() + twentyFourHours);
		      		console.log(today);
		      		document.getElementById('date').innerHTML = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
		   	}
			document.getElementById('img_spectral').src = "/static/space/reports/Image"+(i++)+".jpg";
			if( i == 11){
			   clearTimeout(timer);
			}
		   }, 3000);
	 }else {
		if (timer != null) {
		    clearTimeout(timer);
		}
		timer = null;
	}
   });
});

