class CreateCartsitems < ActiveRecord::Migration[6.1]
  def change
    create_table :cartsitems do |t|
      t.integer :cart_id
      t.integer :item_id
      t.integer :quantity

      t.timestamps
    end
  end
end
