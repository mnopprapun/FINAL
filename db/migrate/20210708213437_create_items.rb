class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.integer :inventory
      t.string :image_url
      t.timestamps
    end
  end
end
