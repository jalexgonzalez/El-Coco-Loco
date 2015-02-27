class RenameMenuToMenuItems < ActiveRecord::Migration
  def change
    rename_table :menu, :menu_items
  end
end
