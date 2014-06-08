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

ActiveRecord::Schema.define(version: 20140608183314) do

  create_table "listings", force: true do |t|
    t.boolean  "for_rent",    default: false
    t.string   "street1",                     null: false
    t.string   "street2"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.integer  "price"
    t.text     "features"
    t.text     "description"
    t.string   "permalink",                   null: false
    t.integer  "beds"
    t.float    "baths"
    t.integer  "sqft"
    t.integer  "user_id",                     null: false
    t.string   "home_type",                   null: false
    t.decimal  "lat"
    t.decimal  "lng"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "phone"
    t.string   "email"
  end

  create_table "photos", force: true do |t|
    t.integer  "listing_id"
    t.string   "full_url"
    t.integer  "width"
    t.integer  "height"
    t.string   "caption"
    t.string   "thumbnail_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
