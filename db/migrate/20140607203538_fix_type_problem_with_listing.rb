class FixTypeProblemWithListing < ActiveRecord::Migration
  def change
    remove_column :listings, :type
    add_column :listings, :home_type, :string
  end
end
