def atbash (text)
  lowercase_letters = ('a'..'z').to_a.join()
  uppercase_letters = ('A'..'Z').to_a.join()
  alphabets = lowercase_letters + uppercase_letters
  alphabets_reverse = lowercase_letters.reverse() + uppercase_letters.reverse()
  return text.tr(alphabets, alphabets_reverse)
end

puts atbash('teSt') # => gvHg
