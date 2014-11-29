class API::MenuController < ApplicationController
  def all
    # get menu based on language
    menu = MenuItem.order(:created_at).all
    if menu
      formattedMenu = []
      lastSeenType = menu.first.css_class
      foodItemArray = []
      menu.each do |item|
       if item.css_class == lastSeenType
        foodItemArray.push(item)
      else
        type = {:type =>  lastSeenType, :items => foodItemArray, :name => foodItemArray.first.english_type}
        formattedMenu.push(type);
        foodItemArray = [item]
        lastSeenType = item.css_class
       end
      end
      render json: formattedMenu, status: :ok
    else
      render json: {}, status: :internal_server_error
    end
  end
end
