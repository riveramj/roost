#= require jquery.transloadit2-v2-latest
class ListingPhoto
  constructor: (result) ->
    optimizedPhoto = result.optimized[0]
    resize = result.resize[0]
    @height = optimizedPhoto.meta.height
    @width = optimizedPhoto.meta.width
    @full_url = optimizedPhoto.url
    @thumb_url = resize.url

photoTemplate = _.template """
  <li class="photo-item">
    <img src="<%= thumb_url %>">
    <input type="text" name="listing[photos_attributes][<%= idx %>][caption]" placeholder="Photo Caption">
    <input name="listing[photos_attributes][<%= idx %>][width]" type="hidden" value="<%= width %>">
    <input name="listing[photos_attributes][<%= idx %>][height]" type="hidden" value="<%= height %>">
    <input name="listing[photos_attributes][<%= idx %>][full_url]" type="hidden" value="<%= full_url %>">
    <input name="listing[photos_attributes][<%= idx %>][thumbnail_url]" type="hidden" value="<%= thumb_url %>">
  </li>
"""

results = []
uploadSuccess = (assembly) ->
  if assembly.ok == "ASSEMBLY_COMPLETED"
    photo = new ListingPhoto(assembly.results)
    results.push(photo)
    addPhotoForm(photo, results.length - 1)

addPhotoForm = (photo, index) ->
  $('.photos').append photoTemplate
    idx: index
    width: photo.width
    height: photo.height
    full_url: photo.full_url
    thumb_url: photo.thumb_url

$ ->
  $('#file-upload-form').transloadit
    params:
      auth:
        key: 'af63cd20ee4e11e3b5c2cb0081e748aa' #todo lol wat security?
      template_id: 'bf039670ee4e11e3b5c2cb0081e748aa'
    triggerUploadOnFileSelection: true
    autoSubmit: false
    onSuccess: uploadSuccess
    wait: true
