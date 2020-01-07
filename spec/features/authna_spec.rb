require 'spec_helper'

describe 'Authna.js Spec', js: true do
  before(:each) do
    visit('/authna')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Authna H2" do
      expect(page).to have_selector('h2', text: 'Authna')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: "Plug and play user authentication system that we use at Drabkirn, and you can use it too.")
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows full statement" do
      expect(page).to have_selector('p', text: "Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple.")
    end

    context "shows navigation links in form of buttons" do
      it "shows Github Repo link" do
        expect(page).to have_link('GitHub', href: 'https://github.com/drabkirn/authna')
      end

      it "shows Back link" do
        expect(page).to have_link('Back', href: '/')
      end
    end
  end

  it_behaves_like "Footer Content"
end