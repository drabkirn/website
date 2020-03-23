require 'spec_helper'

describe 'Legal/PrivacyPolicy.js Spec', js: true do
  before(:each) do
    visit('/legal/privacy_policy')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Privacy Policy H2" do
      expect(page).to have_selector('h2', text: 'Privacy Policy')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: /Our mission at drabkirn is reflected more in our privacy policy./)
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows little info" do
      expect(page).to have_selector('p', text: "Throughout this policy:")
    end

    context "shows navigation links in form of buttons" do
      it "shows Back link" do
        expect(page).to have_link('Back', href: '/')
      end
    end
  end

  it_behaves_like "Footer Content"
end