class Mailer < ActionMailer::Base
  default from: "info@roostup.com"

  def new_listing(listing)
    @url = "roostup.com/" + listing.permalink
    mail(to: listing.email, subject: 'Thanks for Listing with Roost!')
  end

  def inquiry(listing, inquireName, inquireEmail, inquirePhone)
    @name= inquireName
    @email = inquireEmail
    @phone = inquirePhone
    @street1 = listing.street1

    mail(to: listing.email, subject: "Inquiry on #{listing.street1}!")
  end
end
