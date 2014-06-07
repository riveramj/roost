require 'rails_helper'

RSpec.describe "listings/index", :type => :view do
  before(:each) do
    assign(:listings, [
      Listing.create!(
        :street1 => "Street1",
        :street2 => "Street2",
        :city => "City",
        :state => "State",
        :zip => "Zip",
        :price => 1,
        :tagline => "Tagline",
        :description => "MyText",
        :permalink => "Permalink",
        :beds => 2,
        :baths => 3,
        :halfs => 4,
        :sqft => 5,
        :type => "Type",
        :lot => "Lot",
        :construction_year => "Construction Year",
        :heat => "Heat",
        :cool => "Cool",
        :parking => "Parking",
        :basement => "Basement",
        :fireplace => "Fireplace",
        :floor => "Floor",
        :attic => false,
        :laundry => "Laundry"
      ),
      Listing.create!(
        :street1 => "Street1",
        :street2 => "Street2",
        :city => "City",
        :state => "State",
        :zip => "Zip",
        :price => 1,
        :tagline => "Tagline",
        :description => "MyText",
        :permalink => "Permalink",
        :beds => 2,
        :baths => 3,
        :halfs => 4,
        :sqft => 5,
        :type => "Type",
        :lot => "Lot",
        :construction_year => "Construction Year",
        :heat => "Heat",
        :cool => "Cool",
        :parking => "Parking",
        :basement => "Basement",
        :fireplace => "Fireplace",
        :floor => "Floor",
        :attic => false,
        :laundry => "Laundry"
      )
    ])
  end

  it "renders a list of listings" do
    render
    assert_select "tr>td", :text => "Street1".to_s, :count => 2
    assert_select "tr>td", :text => "Street2".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => "State".to_s, :count => 2
    assert_select "tr>td", :text => "Zip".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Tagline".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Permalink".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
    assert_select "tr>td", :text => "Type".to_s, :count => 2
    assert_select "tr>td", :text => "Lot".to_s, :count => 2
    assert_select "tr>td", :text => "Construction Year".to_s, :count => 2
    assert_select "tr>td", :text => "Heat".to_s, :count => 2
    assert_select "tr>td", :text => "Cool".to_s, :count => 2
    assert_select "tr>td", :text => "Parking".to_s, :count => 2
    assert_select "tr>td", :text => "Basement".to_s, :count => 2
    assert_select "tr>td", :text => "Fireplace".to_s, :count => 2
    assert_select "tr>td", :text => "Floor".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => "Laundry".to_s, :count => 2
  end
end
