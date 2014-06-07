json.array!(@listings) do |listing|
  json.extract! listing, :id, :street1, :street2, :city, :state, :zip, :price, :tagline, :description, :permalink, :beds, :baths, :halfs, :sqft, :type, :lot, :construction_year, :heat, :cool, :parking, :basement, :fireplace, :floor, :attic, :laundry
  json.url listing_url(listing, format: :json)
end
