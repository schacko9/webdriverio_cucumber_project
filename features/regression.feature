Feature: E-Commerce Site Functionality

  Scenario Outline: Logging onto Website
    Given I am on the login page
    When I login with <username> and <password>
    When select correct user and <role>
    When agree to terms and conditions
    Then should click on Sign In

    Examples:
      | username            | password            | role        |
      | rahulshettyacademy  | learnign123         | teach       |
      | academy             | learning            | consult     |
      | rahulshettyacademy  | learning            | stud        |



  Scenario Outline: Product Page 
    Given I am on the product page
    When I click on Home Page
    When submit form for future email promotions with <name>, <email>, <password>, <gender>, <employment>, and <birthdate>
    When I click on Shop Page
    When I click on Catageory Link
    Then should click on Shop Page

    Examples:
      | name            | email                       | password         | gender        | employment       | birthdate       |
      | Slomo Chacko    | slomochacko0@gmail.com      | webdriverio      | Female        | Student          | 1998-06-10      |


  Scenario Outline: Checkout Page 
      Given I am on the product page
      When I add <products> to Cart and go to Checkout Page
      When remove necessary products <remove> and checkout
      Then send in <delivery> address, purchase and get confirmation

      Examples:
        | products                                  | remove          | delivery                 |
        | iphone X,Blackberry,Nokia Edge            | Nokia Edge      | 1234 Grovestreet Lane    |


