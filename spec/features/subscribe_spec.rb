require 'spec_helper'

describe 'Subscribe.js Spec', js: true do
  before(:each) do
    visit('/subscribe')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Subscription H2" do
      expect(page).to have_selector('h2', text: 'Newsletter')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: "We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn.")
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows subscribe to newsletter form" do
      expect(page).to have_selector('.form-header h2', text: 'Subscribe to our newsletter')
      expect(page).to have_selector('.form-header .form-header-explanation', text: /You've got nothing to worry about; you can read our/)
      expect(page).to have_link('privacy policy', href: '/legal/privacy_policy')
      expect(page).to have_selector('.form-field input[type="text"]')
      expect(page).to have_selector('.form-field input[type="email"]')
      expect(page).to have_selector('.btn', text: "Subscribe")
    end

    it "shows newsletter redirect form if form is not working" do
      expect(page).to have_selector('.newsletter-redirect-link', text: "We understand things sometimes break, anyways click here if the above form doesn't work.")
      expect(page).to have_link("We understand things sometimes break, anyways click here if the above form doesn't work.", href: 'https://go.cdadityang.xyz/nlif')
    end

    context "shows navigation links in form of buttons" do
      it "shows Back link" do
        expect(page).to have_link('Back', href: '/')
      end
    end
  end

  it_behaves_like "Footer Content"
end