require("minitest/autorun")
require("minitest/rg")

require_relative('./testing_task_2.rb')

class TestCardGame < MiniTest::Test


  def setup
    @cardGame = CardGame.new()
    @card1 = Card.new("Spades", 10)
    @card2 = Card.new("Hearts", 2)
  end

  def test_check_for_ace
    card1 = Card.new("Spades", 1)
    assert_equal(true, @cardGame.checkforAce(card1))
  end

  def test_for_higher_card
    card1 = Card.new("Spades", 10)
    card2 = Card.new("Hearts", 2)
    assert_equal(card1, @cardGame.highest_card(card1, card2))
  end

  def test_card_total
    cards = [@card1, @card2]
    assert_equal("You have a total of 12", @cardGame.cards_total(cards))
  end


end
