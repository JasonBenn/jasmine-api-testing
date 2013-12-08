class NetworksController < ApplicationController
	def index
		render json: File.read('app/json/networks.json')
	end
end
