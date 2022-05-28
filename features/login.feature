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