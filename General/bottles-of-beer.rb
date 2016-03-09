def beer (bottles)
  (bottles).downto(0) do |bottle|
    word = bottle == 1 ? 'bottle' : 'bottles'
    bottle = bottle == 0 ? 'no more' : bottle
    puts "#{(bottle.is_a? String) ? bottle.capitalize : bottle} #{word} of beer on the wall, #{bottle} #{word} of beer."
    puts "Take one down, pass it around, #{(bottle.is_a? String) ? bottle : (bottle - 1)} #{word} of beer on the wall."
  end
end

beer(99)
