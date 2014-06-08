showPosition = (position) ->
  window.location.href = "/listings/search?lat=#{position.coords.latitude}&lng=#{position.coords.longitude}"

$ ->
  if navigator.geolocation && $(window).width() < 500
    navigator.geolocation.getCurrentPosition(showPosition)