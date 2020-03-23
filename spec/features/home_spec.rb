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
      expect(page).to have_selector('p.fs-1-6', text: /Our mission is to connect and build a free, open, and privacy-respected open-source world/)
      expect(page).to have_selector('.hr-center')
      expect(page).to have_selector('p.fs-1-6', text: /Our vision is to empower every person on this planet/)
    end

    context "shows navigation links in form of buttons" do
      it "shows Aditya link" do
        expect(page).to have_link('Aditya', href: 'https://cdadityang.xyz')
      end

      it "shows Quotes link" do
        expect(page).to have_link('Quotes', href: 'https://drabkirn.quotes.cdadityang.xyz')
      end

      it "shows Desityle link" do
        expect(page).to have_link('Desityle', href: '/desityle/index.html')
      end

      it "shows Authna link" do
        expect(page).to have_link('Authna', href: '/authna')
      end

      it "shows Docs link" do
        expect(page).to have_link('Docs', href: '/docs/index.html')
      end
    end
  end

  describe "Social Links" do
    it "shows follow us text CTA" do
      expect(page).to have_selector('p.fs-1-6', text: /Don't forget to follow us on social media to stay ahead on us/)
    end

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

    it "shows discord link" do
      expect(page).to have_link('', href: 'https://discordapp.com/invite/wFPtMUY')
    end
  end

  describe "Navigate to respective page when clicked" do
    it "shows Subscribe page" do
      click_on "Subscribe"
      expect(page.current_path).to eq "/subscribe"
    end

    it "shows Desityle page" do
      click_on "Desityle"
      expect(page.current_path).to eq "/desityle/index.html"
    end

    it "shows Authna page" do
      click_on "Authna"
      expect(page.current_path).to eq "/authna"
    end

    it "shows Docs page" do
      click_on "Docs"
      expect(page.current_path).to eq "/docs/index.html"
    end
  end

  it_behaves_like "Footer Content"
end