class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true
  # optional: true -> 関連づけを「任意」にする（関連付け先がなくて良い = nilを許容する）

  validates :count, numericality: { greater_than: 0 }

  scope :active, -> { where(active: true) }
  # active: trueなものを一覧を返す
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }
  # 引数に与えた店舗ID以外のもの一覧を返す（他の店舗のLineFoodがあるかどうかをチェックする用途で使う）

  def total_amount
    food.price * count
  end
end