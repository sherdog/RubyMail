module DeviseHelper
	def devise_error_messages!
    return "" if resource.errors.empty?

    errors = Array.new

    resource.errors.each do |field, msg|
      errors.push(msg)
    end
    flash[:alert] = errors
  end
end