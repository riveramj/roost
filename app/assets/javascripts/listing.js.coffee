showPosition = (position) ->
  $.getJSON "/listings?lat=#{position.coords.latitude}&lng=#{position.coords.longitude}", (data) ->
    if data.permalink && window.confirm("It looks like you're near #{data.street1}. Would you like to view that listing?")
      window.location.href = "/#{data.permalink}"

$ ->
  if navigator.geolocation && $(window).width() < 500
    navigator.geolocation.getCurrentPosition(showPosition)