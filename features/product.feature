Feature: E-Commerce Site Functionality

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

