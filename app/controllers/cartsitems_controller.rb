class CartsitemsController < ApplicationController
  before_action :set_cartsitem, only: [:show, :update, :destroy]

  # GET /cartsitems
  def index
    @cartsitems = Cartsitem.all

    render json: @cartsitems
  end

  # GET /cartsitems/1
  def show
    render json: @cartsitem
  end

  # POST /cartsitems
  def create
    @cartsitem = Cartsitem.new(cartsitem_params)
    if @cartsitem.save
      render json: @cartsitem, status: :created, location: @cartsitem
    else
      render json: @cartsitem.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cartsitems/1
  def update
    if @cartsitem.update(cartsitem_params)
      render json: @cartsitem
    else
      render json: @cartsitem.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cartsitems/1
  def destroy
    @cartsitem.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cartsitem
      @cartsitem = Cartsitem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cartsitem_params
      params.require(:cartsitem).permit(:cart_id, :item_id, :quantity)
    end
end
