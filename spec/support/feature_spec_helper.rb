shared_examples 'Footer Content' do
  describe "Footer" do
    it "shows copyrights info" do
      expect(page).to have_selector('footer .footer-legal p', text: /Copyrights ©, 2019 - Drabkirn/)
    end

    it "Copyrights Drabkirn must be clickable to /" do
      expect(page).to have_link('Drabkirn', href: '/')
    end

    it "shows Subscribe link" do
      expect(page).to have_link('Subscribe', href: '/subscribe')
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

    it "shows CLA link" do
      expect(page).to have_link('CLA', href: '/legal/cla')
    end

    it "shows Contact link" do
      expect(page).to have_link('Contact', href: 'mailto:drabkirn@cdadityang.xyz')
    end

    it "Shows Baaaaaa text" do
      expect(page).to have_selector('footer .footer-baaaaaa p', text: "@Baaaaaa")
    end
  end
end