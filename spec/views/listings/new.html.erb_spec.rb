require 'rails_helper'

RSpec.describe "listings/new", :type => :view do
  before(:each) do
    assign(:listing, Listing.new(
      :street1 => "MyString",
      :street2 => "MyString",
      :city => "MyString",
      :state => "MyString",
      :zip => "MyString",
      :price => 1,
      :tagline => "MyString",
      :description => "MyText",
      :permalink => "MyString",
      :beds => 1,
      :baths => 1,
      :halfs => 1,
      :sqft => 1,
      :type => "",
      :lot => "MyString",
      :construction_year => "MyString",
      :heat => "MyString",
      :cool => "MyString",
      :parking => "MyString",
      :basement => "MyString",
      :fireplace => "MyString",
      :floor => "MyString",
      :attic => false,
      :laundry => "MyString"
    ))
  end

  it "renders new listing form" do
    render

    assert_select "form[action=?][method=?]", listings_path, "post" do

      assert_select "input#listing_street1[name=?]", "listing[street1]"

      assert_select "input#listing_street2[name=?]", "listing[street2]"

      assert_select "input#listing_city[name=?]", "listing[city]"

      assert_select "input#listing_state[name=?]", "listing[state]"

      assert_select "input#listing_zip[name=?]", "listing[zip]"

      assert_select "input#listing_price[name=?]", "listing[price]"

      assert_select "input#listing_tagline[name=?]", "listing[tagline]"

      assert_select "textarea#listing_description[name=?]", "listing[description]"

      assert_select "input#listing_permalink[name=?]", "listing[permalink]"

      assert_select "input#listing_beds[name=?]", "listing[beds]"

      assert_select "input#listing_baths[name=?]", "listing[baths]"

      assert_select "input#listing_halfs[name=?]", "listing[halfs]"

      assert_select "input#listing_sqft[name=?]", "listing[sqft]"

      assert_select "input#listing_type[name=?]", "listing[type]"

      assert_select "input#listing_lot[name=?]", "listing[lot]"

      assert_select "input#listing_construction_year[name=?]", "listing[construction_year]"

      assert_select "input#listing_heat[name=?]", "listing[heat]"

      assert_select "input#listing_cool[name=?]", "listing[cool]"

      assert_select "input#listing_parking[name=?]", "listing[parking]"

      assert_select "input#listing_basement[name=?]", "listing[basement]"

      assert_select "input#listing_fireplace[name=?]", "listing[fireplace]"

      assert_select "input#listing_floor[name=?]", "listing[floor]"

      assert_select "input#listing_attic[name=?]", "listing[attic]"

      assert_select "input#listing_laundry[name=?]", "listing[laundry]"
    end
  end
end
