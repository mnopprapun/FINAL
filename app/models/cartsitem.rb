class Cartsitem < ApplicationRecord
	belongs_to :item
	belongs_to :cart
end
