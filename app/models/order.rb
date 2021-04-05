class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }

  # LineFoodデータの更新＆Orderデータの保存
  def seve_with_update_line_foods!(line_foods)
    ActiveRecord::Base.transaction do
      # トランザクション内で処理することで、いずれかの処理が失敗した時に全ての処理をなかったことにする
      line_foods.each do |line_food|
        line_food.updated_attributes!(active: false, order: self)
      end
      self.save!
    end
  end
end