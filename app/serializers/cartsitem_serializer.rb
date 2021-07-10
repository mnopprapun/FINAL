class CartsitemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :item_id, :quantity
  belongs_to :item
	belongs_to :cart
end
