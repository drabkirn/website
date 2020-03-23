require 'spec_helper'

describe 'Legal/CLA.js Spec', js: true do
  before(:each) do
    visit('/legal/cla')
  end

  describe "MainHeader" do
    it "Shows Drabkirn Logo" do
      expect(page).to have_selector('img[alt="Drabkirn Logo Header"]')
      expect(page).to have_selector('img[src="/assets/drabkirn-logo-180x180.png"]')
    end
    
    it "shows Drabkirn H1" do
      expect(page).to have_selector('h1', text: 'Drabkirn')
    end

    it "shows CLA H2" do
      expect(page).to have_selector('h2', text: 'Contributor License Agreement (CLA)')
    end

    it "shows short description" do
      expect(page).to have_selector('p', text: /This document applies to you when you choose to contribute to drabkirn, and this Agreement is to clarify and document the rights granted by contributors to drabkirn./)
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

      it "shows Sign our CLA link" do
        expect(page).to have_link('Sign our CLA', href: 'https://go.cdadityang.xyz/clas')
      end
    end
  end

  it_behaves_like "Footer Content"
end