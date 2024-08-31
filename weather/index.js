var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityinput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "2346a1e9bd0dca2e1c97fbc80fc9d1fa"
function conversion(val)
{
    return (val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
     .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather'][0]['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']   

        city.innerHTML= `Weather of <span>${nameval}<span></span>`
        temp.innerHTML =  `Temperature: <span>${conversion(temperature)} C</span>`
        description.innerHTML= `Sky conditions: <span>${descrip}<span>`
        wind.innerHTML =  `Wind Speed: <span>${wndspeed} km/h<span>`
        
     })
     .catch(err => alert('You entered wrong city name'))
})
