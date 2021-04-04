class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods
  belongs_to :order, optional: true

  validates :name, :fee, :time_required, presence: true
  # presence: true -> 存在しないとエラー
  validates :name, length: { maximum: 30 }
  validates :fee, numericality: { greater_than: 0 }
  # マイナスの値が入ることを防ぐ
end