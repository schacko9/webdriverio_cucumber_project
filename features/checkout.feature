Feature: E-Commerce Site Functionality

  Scenario Outline: Checkout Page 
      Given I am on the product page
      When I add <products> to Cart and go to Checkout Page
      When remove necessary products <remove> and checkout
      Then send in <delivery> address, purchase and get confirmation

      Examples:
        | products                                  | remove          | delivery                 |
        | iphone X,Blackberry,Nokia Edge            | Nokia Edge      | 1234 Grovestreet Lane    |


