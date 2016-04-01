def unpaired (arr)
	sorted = arr.sort
  p sorted
	sorted.each_with_index do |number, index|
		if index.even?
			if sorted[index] != sorted[index + 1]
        return number
      end
		end
	end
end

result = unpaired([1, 9, 8, 2, 9, 1, 8, 14, 2])
p result
