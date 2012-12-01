class Campaign < ActiveRecord::Base
  attr_accessible :datesent, :from_email, :from_name, :replyto_mail, :tags, :title, :user_id

 belongs_to :campaigns


end
