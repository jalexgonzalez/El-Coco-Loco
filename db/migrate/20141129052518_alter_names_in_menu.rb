class AlterNamesInMenu < ActiveRecord::Migration
  def change
    change_column :menu, :english_name, :text, :null => false
    change_column :menu, :spanish_name, :text, :null => false
  end
end
