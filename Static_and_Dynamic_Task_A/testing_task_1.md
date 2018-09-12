### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      # should be if card.value == 1, = creates a variable
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # no comma between two arguments
  # dif should be def
  if card1.value > card2.value
    return card.name
    # card doesn't have a .name property, should just return card1 or card1.name
  else
    card2
    # this should be a return statement
  end
  end
end
# one too many ends in here

    def self.cards_total(cards)
      # doesn't need self in front of the method name
      total
      # total should equal something, maybe 0.
      for card in cards
        total += card.value
        return "You have a total of" + total
        # return should be after the end
      end
    end

# no end statement for the overall CardGame class.
