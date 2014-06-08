class Listing < ActiveRecord::Base
  acts_as_mappable
  has_many :photos
  accepts_nested_attributes_for :photos
  before_save :geocode_address
  before_create :create_permalink

  def feature_list
    features.split("\n")
  end

  def tel
    "tel:+1#{phone.gsub(/\D/, '')}"
  end

  def to_param
    self.permalink
  end

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

  def create_permalink
    n = 0
    permalink = nil
    while permalink.nil? || Listing.exists?(permalink: permalink)
      permalink = street1.gsub(/\W/, '-')
      if n > 0
        permalink += "-#{n}"
      end
      n += 1
    end
    self.permalink = permalink
  end
end
