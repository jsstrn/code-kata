numbers = [1, 2, 2, 3, 3, 3, 4, 4, -2, -1, -1, 0, 0, 0]
frequencies = []
numbers.each do |number|
  frequencies.push(numbers.count(number))
end
result = frequencies.zip(numbers).uniq.sort()

result.each do |set|
  set[0].times do
    puts set[1]
  end
end
