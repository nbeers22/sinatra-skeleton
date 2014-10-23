require 'bcrypt'
class User < ActiveRecord::Base
	include BCrypt
	validates :user_name, presence: true, allow_blank: false

	def password
		@password ||= Password.new(password_hash)
	end

	def password=(new_password)
		@password = Password.create(new_password)
		self.password_hash = @password
	end
	I18n.enforce_available_locales = false
end