index = 1
number_of_steps = gets.strip.to_i

while index <= number_of_steps do
  print ' ' * (number_of_steps - index)
  puts '#' * index
  index += 1
end
