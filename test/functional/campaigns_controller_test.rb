require 'test_helper'

class CampaignsControllerTest < ActionController::TestCase
  setup do
    @campaign = campaigns(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:campaigns)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create campaign" do
    assert_difference('Campaign.count') do
      post :create, campaign: { datesent: @campaign.datesent, from_email: @campaign.from_email, from_name: @campaign.from_name, replyto_mail: @campaign.replyto_mail, tags: @campaign.tags, title: @campaign.title, user_id: @campaign.user_id }
    end

    assert_redirected_to campaign_path(assigns(:campaign))
  end

  test "should show campaign" do
    get :show, id: @campaign
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @campaign
    assert_response :success
  end

  test "should update campaign" do
    put :update, id: @campaign, campaign: { datesent: @campaign.datesent, from_email: @campaign.from_email, from_name: @campaign.from_name, replyto_mail: @campaign.replyto_mail, tags: @campaign.tags, title: @campaign.title, user_id: @campaign.user_id }
    assert_redirected_to campaign_path(assigns(:campaign))
  end

  test "should destroy campaign" do
    assert_difference('Campaign.count', -1) do
      delete :destroy, id: @campaign
    end

    assert_redirected_to campaigns_path
  end
end
