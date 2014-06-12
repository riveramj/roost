class ListingsController < ApplicationController

  layout "show", :only => [ :show ]
  before_action :set_listing, only: [:show, :edit, :update, :destroy]
  before_filter :require_current_user, only: [:new, :edit, :update, :destroy, :create]
  before_filter :validate_user, only: [:edit, :update, :destroy]

  def show
  end

  def index
    location = [params[:lat].to_f, params[:lng].to_f]
    @listing = Listing.closest(origin: location).first
    if @listing.present?
      render json: @listing
    else
      render json: {found: false}, status: :not_found
    end

  end

  # GET /listings/new
  def new
    @listing = Listing.new
  end

  # GET /listings/1/edit
  def edit

  end

  # POST /listings
  # POST /listings.json
  def create
    @listing = current_user.listings.new(listing_params)

    respond_to do |format|
      if @listing.save
        format.html { redirect_to @listing, notice: 'Listing was successfully created.' }
        format.json { render action: 'show', status: :created, location: @listing }

        ListingConfirmation.new_listing(@listing).deliver
 
      else
        format.html { render action: 'new' }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /listings/1
  # PATCH/PUT /listings/1.json
  def update
    respond_to do |format|
      if @listing.update(listing_params)
        format.html { redirect_to @listing, notice: 'Listing was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /listings/1
  # DELETE /listings/1.json
  def destroy
    @listing.destroy
    respond_to do |format|
      format.html { redirect_to listings_url }
      format.json { head :no_content }
    end
  end

  private
    def set_listing
      @listing = Listing.find_by(permalink: params[:id])
    end

    def validate_user
      unless current_user.listings.any? { |listing| listing == @listing }
        redirect_to new_user_session_path
      end
    end

    def listing_params
      params.require(:listing).permit(
          :street1, :street2, :city, :state,
          :zip, :price, :features, :description,
          :permalink, :beds, :baths, :sqft, :home_type,
          :email, :phone,
          photos_attributes: [:full_url, :thumbnail_url, :caption, :width, :height])
    end
end
