class ListingConfirmation < ActionMailer::Base
  default from: "info@roostup.com"

  def new_listing(listing)
    @url  = "roostup.com/" + listing.permalink
    mail(to: listing.email, subject: 'Thanks for Listing with Roost!')
  end
end
