class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :listing_id
      t.string :full_url
      t.integer :width
      t.integer :height
      t.string :caption
      t.string :thumbnail_url

      t.timestamps
    end
  end
end
