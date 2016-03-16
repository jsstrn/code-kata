def binary_to_decimal (binary)
	decimal = 0
	arr = binary.split('')
	arr.each_with_index do |digit, index|
		if (digit == '1')
			decimal += 2 ** index
		end
	end
	return decimal
end

p binary_to_decimal("010") #=> 5
