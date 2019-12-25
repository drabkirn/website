# frozen-string-literal: true
require 'rspec'
require 'capybara/rspec'
require 'capybara/dsl'
require 'selenium-webdriver'

Selenium::WebDriver.logger.level = :debug
Selenium::WebDriver.logger.output = File.dirname(Dir.pwd) + '/website/log/selenium.log'
ENV['DISPLAY']=':99.0'

Capybara.register_driver :firefox do |app|
  Capybara::Selenium::Driver.new(app, browser: :firefox)
end

Capybara.default_driver = :firefox
Capybara.javascript_driver = :firefox
Capybara.app_host = 'http://127.0.0.1:3005'
Capybara.default_max_wait_time = 10

RSpec.configure do |config|
  config.before(:suite) do
    system "yarn test_start"
    system "sleep 20"
    puts "---------------"
    puts "RUNNING TESTS"
    puts "---------------"
  end

  config.before(:each) do
    config.include Capybara::DSL
  end

  config.after(:suite) do
    system "yarn test_stop"
  end
end