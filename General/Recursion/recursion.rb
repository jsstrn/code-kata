# https://www.cs.cmu.edu/~adamchik/15-121/lectures/Recursions/recursions.html
def sum (limit)
  result = 0
  (limit + 1).times do |number|
    result += number
  end
  return result
end

p sum(2)
