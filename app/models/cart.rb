class Cart < ApplicationRecord
	has_many :cartsitems
	has_many :items, through: :cartsitems
	belongs_to :user
end
