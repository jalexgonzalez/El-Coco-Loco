class CreateMenuTable < ActiveRecord::Migration
  def change
    create_table :menu do |t|
      t.string :english_name, :null => false
      t.string :english_type, :null => false

      t.string :spanish_name, :null => false
      t.string :spanish_type, :null => false

      t.timestamps
    end
  end
end
