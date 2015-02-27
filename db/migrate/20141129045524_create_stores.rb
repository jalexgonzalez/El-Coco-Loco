class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :name, :null => false
      t.string :number, :null => false
      t.string :street, :null => false
      t.string :city, :null => false
      t.string :state, :null => false, :default => "FL"
      t.integer :zipcode, :null => false
      t.string :phone, :null => false

      t.decimal :latitude, :null => false
      t.decimal :longitude, :null => false

      t.timestamps
    end
  end
end
