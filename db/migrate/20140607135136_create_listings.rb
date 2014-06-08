class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.boolean :for_rent, default: false
      t.string :street1, null: false
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip
      t.integer :price
      t.text :features
      t.text :description
      t.string :permalink, null: false
      t.integer :beds
      t.float :baths
      t.integer :sqft
      t.integer :user_id, null: false
      t.string :home_type, null: false
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
