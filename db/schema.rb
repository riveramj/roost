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

ActiveRecord::Schema.define(version: 20140607145256) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: true do |t|
    t.string   "street1"
    t.string   "street2"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.integer  "price"
    t.string   "tagline"
    t.text     "description"
    t.string   "permalink"
    t.integer  "beds"
    t.integer  "baths"
    t.integer  "halfs"
    t.integer  "sqft"
    t.string   "type"
    t.string   "lot"
    t.string   "construction_year"
    t.string   "heat"
    t.string   "cool"
    t.string   "parking"
    t.string   "basement"
    t.string   "fireplace"
    t.string   "floor"
    t.boolean  "attic"
    t.string   "laundry"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
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
