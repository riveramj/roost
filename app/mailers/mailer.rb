class Mailer < ActionMailer::Base
  default from: "info@roostup.com"

  def new_listing(listing)
    @url = "roostup.com/" + listing.permalink
    mail(to: listing.email, subject: 'Thanks for Listing with Roost!')
  end

  def inquiry(email)
    @url = "foo.com"
    mail(to: email, subject: 'Inquiry from person!')
  end
end
