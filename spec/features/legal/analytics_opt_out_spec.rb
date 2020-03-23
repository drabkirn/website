require 'spec_helper'

describe 'Legal/AnalyticsOptOut.js Spec', js: true do
  before(:each) do
    visit('/legal/privacy/analytics_opt_out')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Analytics Opt Out H2" do
      expect(page).to have_selector('h2', text: 'Analytics Opt Out')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: "Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!")
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows iframe" do
      expect(page).to have_selector('iframe')
    end

    context "shows navigation links in form of buttons" do
      it "shows Back link" do
        expect(page).to have_link('Back', href: '/legal/privacy_policy')
      end
    end
  end

  it_behaves_like "Footer Content"
end