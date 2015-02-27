
namespace :insert do
  desc 'Insert menu items into the database.'
  task :menu => :environment do
    doc = Nokogiri::XML(File.open("#{Rails.root}/db/Complete Menu.xml")) do |config|
      config.strict.noblanks
    end
    nodes = doc.xpath('//Row')
    nodes.each do |node|
      if node.node_name.eql? 'Row'
        # print (node.attr('C').to_s.downcase.split - ["&"]).join("-") + " "
        # print node.attr('B').to_s.titlecase + " "
        # print node.attr('C').to_s.titlecase + " "
        # print node.attr('A').to_s.titlecase + " "
        # print node.attr('D').to_s.titlecase + " "
        # puts ""
        menu_item = MenuItem.new
        menu_item.css_class = (node.attr('C').to_s.downcase.split - ["&"]).join("-")
        menu_item.english_name = node.attr('B').to_s.titlecase
        menu_item.english_type = node.attr('C').to_s.titlecase
        menu_item.spanish_name = node.attr('A').to_s.titlecase
        menu_item.spanish_type = node.attr('D').to_s.titlecase
        menu_item.save!
      end
    end
  end
end