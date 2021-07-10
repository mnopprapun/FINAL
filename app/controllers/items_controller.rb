class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  skip_before_action :authorize, only: [:index, :show]


  # GET /items
  def index
    @items = Item.all
    render json: @items
  end


  # GET /items/1
  def show
    item = Item.find_by(id: params[:id])
		if item
			render json: item
		else
			render json: { error: "Item not found" }, status: :not_found
		end 
	end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.fetch(:item, {})
    end
end
