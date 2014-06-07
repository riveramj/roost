require 'rails_helper'

RSpec.describe "listings/show", :type => :view do
  before(:each) do
    @listing = assign(:listing, Listing.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Street1/)
    expect(rendered).to match(/Street2/)
    expect(rendered).to match(/City/)
    expect(rendered).to match(/State/)
    expect(rendered).to match(/Zip/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Tagline/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Permalink/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/5/)
    expect(rendered).to match(/Type/)
    expect(rendered).to match(/Lot/)
    expect(rendered).to match(/Construction Year/)
    expect(rendered).to match(/Heat/)
    expect(rendered).to match(/Cool/)
    expect(rendered).to match(/Parking/)
    expect(rendered).to match(/Basement/)
    expect(rendered).to match(/Fireplace/)
    expect(rendered).to match(/Floor/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/Laundry/)
  end
end
