test_cases = gets.strip.to_i
index = 0
while (index < test_cases) do
  students, threshold = gets.strip.split(' ')
  students = students.to_i
  threshold = threshold.to_i
  attendance = gets.strip.split(' ').map(&:to_i)

  early = 0
  attendance.each { |e|
    if (e <= 0)
      early += 1
    end
  }

  isClassCancelled = 'YES'
  if (early >= threshold)
    isClassCancelled = 'NO'
  end
  puts isClassCancelled

  index += 1
end
