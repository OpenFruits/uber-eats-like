class ChangeColumnsAddNotnullOnFoods < ActiveRecord::Migration[6.0]
  def change
    change_column_null :foods, :price, false
  end
end
