class User < ApplicationRecord
  has_secure_password
	has_many :carts
	has_many :cartsitems, through: :carts
	has_many :items, through: :cartsitems
	validates :email, presence: true
    validates :email, uniqueness: true
end
