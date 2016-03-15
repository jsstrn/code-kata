def solution (numbers, rotations)
  unless numbers.empty?
    def rotator (numbers)
      last = numbers.pop
      return numbers.unshift(last)
    end
    rotations.times do ||
      numbers = rotator(numbers)
    end
  end
  return numbers
end

p solution([1, 2, 3, 4, 5], 3)
