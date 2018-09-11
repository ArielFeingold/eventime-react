class Recipe < ApplicationRecord
  validates :title, :ingredients, :category, presence: true
end
