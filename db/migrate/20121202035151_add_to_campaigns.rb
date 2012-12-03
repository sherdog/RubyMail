class AddToCampaigns < ActiveRecord::Migration
  def up
  	add_column :campaigns, :subject, :string
  end

  def down
  	remove_column :campaigns, :subject
  end
end
