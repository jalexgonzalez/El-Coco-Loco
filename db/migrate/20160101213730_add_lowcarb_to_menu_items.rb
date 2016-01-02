class AddLowcarbToMenuItems < ActiveRecord::Migration
  def change
    add_column :menu_items, :lowcarb, :boolean, :null => false
  end
end
