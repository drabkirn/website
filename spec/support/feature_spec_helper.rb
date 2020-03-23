shared_examples 'Footer Content' do
  describe "Footer" do
    it "shows copyrights info" do
      expect(page).to have_selector('footer .footer-legal p', text: /Copyrights ©, 2019-2020 - Drabkirn/)
    end

    it "Copyrights Drabkirn must be clickable to /" do
      expect(page).to have_link('Drabkirn', href: '/')
    end

    it "shows Subscribe link" do
      expect(page).to have_link('Subscribe', href: '/subscribe')
    end

    it "shows Palace link" do
      expect(page).to have_link('Palace', href: '/palace')
    end

    it "shows Contact link" do
      expect(page).to have_link('Contact', href: 'mailto:drabkirn@cdadityang.xyz')
    end

    it "Shows Baaaaaa text" do
      expect(page).to have_selector('footer .footer-baaaaaa p', text: "@Baaaaaa")
    end
  end
end