class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description,:price, :inventory, :image_url
  has_many :cartsitems
end
