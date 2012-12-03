class Campaign < ActiveRecord::Base
  attr_accessible :datesent, :from_email, :from_name, :replyto_mail, :tags, :title, :user_id, :subject

 belongs_to :user
 def get_view_count(campaign_id)
 	"302"
 end

 def get_total_count(campaign_id)
 	"1304"
 end

end
