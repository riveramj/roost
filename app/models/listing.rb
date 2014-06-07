class Listing < ActiveRecord::Base
  has_many :photos
  accepts_nested_attributes_for :photos

  # acts_as_mappable :auto_geocode=>{:field=>:street1, :error_message=>'Could not geocode address'}
end
