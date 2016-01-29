def solution (numbers, rotations)
  unless numbers.empty?
    def rotator (numbers)
      last = numbers.pop
      return numbers.reverse.push(last).reverse
    end
    rotations.times do ||
      numbers = rotator(numbers)
    end
  end
  return numbers
end

p solution([1, 2, 3, 4, 5], 3)
