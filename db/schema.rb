# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160101213730) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "menu_items", force: true do |t|
    t.text     "english_name", null: false
    t.string   "english_type", null: false
    t.text     "spanish_name", null: false
    t.string   "spanish_type", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "css_class",    null: false
    t.boolean  "lowcarb",      null: false
  end

  create_table "stores", force: true do |t|
    t.string   "name",                      null: false
    t.string   "number",                    null: false
    t.string   "street",                    null: false
    t.string   "city",                      null: false
    t.string   "state",      default: "FL", null: false
    t.integer  "zipcode",                   null: false
    t.string   "phone",                     null: false
    t.decimal  "latitude",                  null: false
    t.decimal  "longitude",                 null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
