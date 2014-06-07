class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip
      t.integer :price
      t.string :tagline
      t.text :description
      t.string :permalink
      t.integer :beds
      t.integer :baths
      t.integer :halfs
      t.integer :sqft
      t.string :type
      t.string :lot
      t.string :construction_year
      t.string :heat
      t.string :cool
      t.string :parking
      t.string :basement
      t.string :fireplace
      t.string :floor
      t.boolean :attic
      t.string :laundry

      t.timestamps
    end
  end
end
