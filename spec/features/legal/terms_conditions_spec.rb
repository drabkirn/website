require 'spec_helper'

describe 'Legal/TermsConditions.js Spec', js: true do
  before(:each) do
    visit('/legal/terms_conditions')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Terms and Conditions H2" do
      expect(page).to have_selector('h2', text: 'Terms and Conditions')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: "Rules and regulation you need to read, understand, and agree to access cdadityang's website, Drabkirn's website and it's products.")
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows little info" do
      expect(page).to have_selector('p', text: "Throughout this document:")
    end

    context "shows navigation links in form of buttons" do
      it "shows Back link" do
        expect(page).to have_link('Back', href: '/')
      end
    end
  end

  describe "Footer" do
    it "shows copyrights info" do
      expect(page).to have_selector('footer .footer-legal p', text: /Copyrights ©, 2019 - Drabkirn/)
    end

    it "Copyrights Drabkirn must be clickable to /" do
      expect(page).to have_link('Drabkirn', href: '/')
    end

    it "shows Privacy Policy link" do
      expect(page).to have_link('Privacy', href: '/legal/privacy_policy')
    end

    it "shows Terms and Conditions link" do
      expect(page).to have_link('Terms', href: '/legal/terms_conditions')
    end

    it "shows Credits link" do
      expect(page).to have_link('Credits', href: '/legal/credits')
    end

    it "Shows Baaaaaa text" do
      expect(page).to have_selector('footer .footer-baaaaaa p', text: "@Baaaaaa")
    end
  end
end