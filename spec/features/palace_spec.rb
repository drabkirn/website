require 'spec_helper'

describe 'Palace.js Spec', js: true do
  before(:each) do
    visit('/palace')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows Palace H2" do
      expect(page).to have_selector('h2', text: 'Palace')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: /All of the drabkirn in one place. Sweet and simple!/)
    end

    it "Drabkirn logo header image must be clickable to /" do
      find('img[alt="Drabkirn Logo Header"]').click
      expect(page.current_path).to eq "/"
    end
  end

  describe "MainSection" do
    it "shows little info" do
      expect(page).to have_selector('p.fs-1-4', text: "We built this palace to gather all of the essential things of drabkirn on one page. Think this as an address book for everything drabkirn.")
    end

    context "shows app section with links" do
      it "shows apps header" do
        expect(page).to have_selector('h2', text: "Apps:")
      end

      it "shows apps description" do
        expect(page).to have_selector('p.field-explanation', text: "Here are some of the great things that we've built:")
      end

      it "shows navigation links of apps" do
        expect(page).to have_link('Quotes', href: 'https://drabkirn.quotes.cdadityang.xyz')
        expect(page).to have_link('Desityle', href: '/desityle/index.html')
        expect(page).to have_link('Authna', href: '/authna')
        
      end
    end
    
    context "shows Writings section with links" do
      it "shows Writings header" do
        expect(page).to have_selector('h2', text: "Writings:")
      end

      it "shows Writings description" do
        expect(page).to have_selector('p.field-explanation', text: "We maintain a simple blog and documentation that reflects on how we make things work here at drabkirn.")
      end

      it "shows navigation links of Writings" do
        expect(page).to have_link('Blog', href: 'https://blog.cdadityang.xyz')
        expect(page).to have_link('Docs', href: '/docs/index.html')
      end
    end

    context "shows Legal section with links" do
      it "shows Legal header" do
        expect(page).to have_selector('h2', text: "Legal:")
      end

      it "shows Legal description" do
        expect(page).to have_selector('p.field-explanation', text: "We don't take things seriously at drabkirn, unless it's legal:")
      end

      it "shows navigation links of Legal" do
        expect(page).to have_link('Privacy', href: '/legal/privacy_policy')
        expect(page).to have_link('Terms', href: '/legal/terms_conditions')
        expect(page).to have_link('Credits', href: '/legal/credits')
        expect(page).to have_link('CLA', href: '/legal/cla')
      end
    end

    context "shows Legal section with links" do
      it "shows Social header" do
        expect(page).to have_selector('h2', text: "Social:")
      end

      it "shows Social description" do
        expect(page).to have_selector('p.field-explanation', text: "You may want to connect with us or collaborate or want to say us a sweet Hi, here's how you can do it:")
      end

      it "shows navigation links of Social" do
        expect(page).to have_link('', href: 'https://github.com/drabkirn')
        expect(page).to have_link('', href: 'https://twitter.com/drabkirn')
        expect(page).to have_link('', href: 'https://www.instagram.com/drabkirn')
        expect(page).to have_link('', href: 'https://discordapp.com/invite/wFPtMUY')
      end
    end

    context "shows navigation links in form of buttons" do
      it "shows Back link" do
        expect(page).to have_link('Back', href: '/')
      end
    end
  end

  it_behaves_like "Footer Content"
end