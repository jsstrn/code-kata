require 'time'
time = gets.strip
time_12h = Time.strptime(time, '%r')
time_24h = time_12h.strftime('%T')
puts time_24h
