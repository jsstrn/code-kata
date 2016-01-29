def solution(decimal)
  # convert integer to binary string
  binary = decimal.to_s(2)
  # split binary string into an array of '0's
  zeros = binary.split('1')
  p zeros
  #check if last bit is a '0'
  if binary[-1, 1] == '0'
    # remove last two elements in the array
    zeros = zeros.reverse.drop(1)
  end
  # create an array of
  number_of_zeros = []
  zeros.each { |zero| number_of_zeros.push(zero.length) }
  # sort list and return largest number
  return number_of_zeros.sort.last
end

# solution(gets.chomp.to_i)
puts solution(1041) #=> 5
puts solution(20) #=> 1
