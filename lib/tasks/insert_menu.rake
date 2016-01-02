
namespace :insert do
  desc 'Insert menu items into the database.'
  task :menu => :environment do
    doc = Nokogiri::XML(File.open("#{Rails.root}/db/Complete Menu.xml")) do |config|
      config.strict.noblanks
    end
    doc.root.elements.each do |node|
      if node.node_name.eql? 'record'
        itemNodes = node.children
        if itemNodes.empty?
          next
        end
        # print (node.attr('C').to_s.downcase.split - ["&"]).join("-") + " "
        # print node.attr('B').to_s.titlecase + " "
        # print node.attr('C').to_s.titlecase + " "
        # print node.attr('A').to_s.titlecase + " "
        # print node.attr('D').to_s.titlecase + " "
        # puts ""
        menu_item = MenuItem.new

        itemNodes.each do |dataNode|
          if dataNode.node_name.eql? 'LC'
            if dataNode.content.to_i == 1
              menu_item.lowcarb = true
            else
              menu_item.lowcarb = false
            end
          elsif dataNode.node_name.eql? 'Spanish'
            menu_item.spanish_name = dataNode.text.to_s.titlecase
          elsif dataNode.node_name.eql? 'English'
            menu_item.english_name = dataNode.text.to_s.titlecase
          elsif dataNode.node_name.eql? 'SType'
            menu_item.spanish_type = dataNode.text.to_s.titlecase
          elsif dataNode.node_name.eql? 'EType'
            menu_item.css_class = (dataNode.text.to_s.downcase.split - ["&"]).join("-")
            # menu_item.css_class = (dataNode.text.to_s.downcase.split - ["&"]).join("-")
            menu_item.english_type = dataNode.text.to_s.titlecase
          end
        end

        # menu_item.css_class = (node.attr('C').to_s.downcase.split - ["&"]).join("-")
        # menu_item.english_name = node.attr('B').to_s.titlecase
        # menu_item.english_type = node.attr('C').to_s.titlecase
        # menu_item.spanish_name = node.attr('A').to_s.titlecase
        # menu_item.spanish_type = node.attr('D').to_s.titlecase
        menu_item.save!
      end
    end
  end
end