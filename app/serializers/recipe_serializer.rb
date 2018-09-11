class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :category
end
