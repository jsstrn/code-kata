require 'time'
time = gets.strip
puts Time.parse(time).strftime('%T')
