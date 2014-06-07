class AddCoordinatesToListing < ActiveRecord::Migration
  def change
    add_column :listings, :lat, :decimal
    add_column :listings, :lng, :decimal
  end
end
