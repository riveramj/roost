#= require 'gmaps/google'
$ ->
#  $('#find-me').click ->
#    getLocation()
#
#  # Map Geolocation Start
#  handler = Gmaps.build('Google')
#  handler.buildMap { internal: {id: 'address'} }, ->
#    if(navigator.geolocation)
#      navigator.geolocation.getCurrentPosition(displayOnMap)
#
#  displayOnMap = (position) ->
#    marker = handler.addMarker
#      lat: position.coords.latitude,
#      lng: position.coords.longitude
#
#    handler.map.centerOn(marker)
#
#getLocation = ->
#  if (navigator.geolocation)
#    navigator.geolocation.getCurrentPosition(showPosition)
#  else
#    console.log("Geolocation is not supported by this browser.")
#
#showPosition = (position) ->
#  console.log "(#{position.coords.latitude}, #{position.coords.longitude})"
