module Api
  module V1
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all

        render json: {
          restaurants: restaurants
        }, state: :ok
      end
    end
  end
end
