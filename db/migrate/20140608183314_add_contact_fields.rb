class AddContactFields < ActiveRecord::Migration
  def change
    add_column :listings, :phone, :string
    add_column :listings, :email, :string
  end
end
