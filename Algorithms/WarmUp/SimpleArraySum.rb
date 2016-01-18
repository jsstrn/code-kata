number_of_integers = gets.strip.to_i

array_of_integers = gets.strip # strip trailing whitespace
array_of_integers = array_of_integers.split(' ') #=> ['1', '2', '3']
array_of_integers = array_of_integers.map {|element| element.to_i} #=> [1, 2, 3]

sum_of_array = 0
array_of_integers.each do |element|
  sum_of_array += element
end

# alternate way: 
# array_of_integers.each {|element| sum_of_array += element}

puts sum_of_array
