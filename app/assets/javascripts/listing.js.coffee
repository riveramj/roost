#= require jquery.transloadit2-v2-latest
results = []
uploadSuccess = (assembly) ->
  if assembly.ok == "ASSEMBLY_COMPLETED"
    photo = new ListingPhoto(assembly.results)
    results.push(photo)
    console.log(photo.thumb_url)
    img = "<img src='#{photo.thumb_url}'>"
    $('.photos').append(img)

addPhotoForm = ->


$ ->
  $('#listing-form').transloadit
    params:
      auth:
        key: 'af63cd20ee4e11e3b5c2cb0081e748aa' #todo lol wat security?
      template_id: 'bf039670ee4e11e3b5c2cb0081e748aa'
    triggerUploadOnFileSelection: true
    autoSubmit: false
    onSuccess: uploadSuccess
    wait: true

class ListingPhoto
  constructor: (result) ->
    console.log 'this is getting called, right?'
    optimizedPhoto = result.optimized[0]
    resize = result.resize[0]
    @height = optimizedPhoto.meta.height
    @width = optimizedPhoto.meta.width
    @url = optimizedPhoto.url
    console.log result
    console.log resize
    @thumb_url = resize.url

$(document).ready ->
  # Map Geolocation Start
  handler = Gmaps.build('Google')

  handler.buildMap({ internal: {id: 'address'} }, () ->
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(displayOnMap)
  )

  displayOnMap = (position) ->
    marker = handler.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
      
    handler.map.centerOn(marker)
  # Map Geolocation End

  $('#find-me').click ->
    getLocation()

getLocation = ->
  if (navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(showPosition)
  else
    console.log("Geolocation is not supported by this browser.")

showPosition = (position) -> 
  console.log "(#{position.coords.latitude}, #{position.coords.longitude})"
