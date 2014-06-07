class Listing < ActiveRecord::Base
  has_many :photos
  accepts_nested_attributes_for :photos
  before_save :geocode_address

  private
  def canonical_address
    "#{street1} #{city}, #{state} #{zip}"
  end

  def geocode_address
    geo = Geokit::Geocoders::MultiGeocoder.geocode(canonical_address)
    if geo.success
      self.lat = geo.lat
      self.lng = geo.lng
    end
  end
end
