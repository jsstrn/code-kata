def fizzbuzz (limit)
  (0..limit).each do |number|
    if (number.remainder(15) == 0)
      puts 'fizzbuzz'
    elsif (number.remainder(5) == 0)
      puts 'buzz'
    elsif (number.remainder(3) == 0)
      puts 'fizz'
    else
      puts number
    end
  end
end

fizzbuzz(100)
