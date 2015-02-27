class AddCssClassToMenuItems < ActiveRecord::Migration
  def change
    add_column :menu_items, :css_class, :string, :null => false
  end
end
