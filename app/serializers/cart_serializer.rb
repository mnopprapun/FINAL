class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_many :cartsitems
	has_many :items, through: :cartsitems
	belongs_to :user
end
