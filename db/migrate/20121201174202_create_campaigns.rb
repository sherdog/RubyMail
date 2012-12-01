class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :title
      t.string :from_name
      t.string :from_email
      t.string :replyto_mail
      t.datetime :datesent
      t.text :tags
      t.integer :user_id
      t.timestamps
    end
  end
end
