class Listing < ActiveRecord::Base
  has_many :photos
  accepts_nested_attributes_for :photos

end
