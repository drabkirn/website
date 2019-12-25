require 'spec_helper'

describe 'Home.js Spec', js: true do
  before(:each) do
    visit('/')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Drabkirn usertag" do
      expect(page).to have_selector('p', text: '@drabkirn')
    end

    it "shows Drabkirn short description" do
      expect(page).to have_selector('p', text: /Create the world out of the things that you build./)
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows Drabkirn mission and vision" do
      expect(page).to have_selector('p.fs-1-6', text: /Our mission is to connect and build a free/)
      expect(page).to have_selector('p.fs-1-6', text: /Our vision is to empower every person on this planet/)
    end

    context "shows navigation links in form of buttons" do
      it "shows Aditya link" do
        expect(page).to have_link('Aditya', href: 'https://cdadityang.xyz')
      end

      it "shows Quotes link" do
        expect(page).to have_link('Quotes', href: 'https://drabkirn.quotes.cdadityang.xyz')
      end
    end
  end

  describe "Social Links" do
    it "shows blog link" do
      expect(page).to have_link('', href: 'https://blog.cdadityang.xyz')
    end

    it "shows github link" do
      expect(page).to have_link('', href: 'https://github.com/drabkirn')
    end

    it "shows twitter link" do
      expect(page).to have_link('', href: 'https://twitter.com/drabkirn')
    end

    it "shows insta link" do
      expect(page).to have_link('', href: 'https://www.instagram.com/drabkirn')
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