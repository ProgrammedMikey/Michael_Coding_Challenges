class Board
	#  A Function to count the number of
    #  mines in the adjacent cells
	#  and to replace the adjacent cells from (row, col)
	def self.transform(input)
		board = input
		tmp = validate(board)
		raise ArgumentError, tmp unless tmp == "OK"
		len = board[0].length-1
		(1...board.count-1).each {|y|
		(1...len).each {|x|

			# check board has mine, then for loop the row and col
			if board[y][x] == "*"
				(-1..1).each {|i|
				(-1..1).each {|j|
				# if it isnt a special character add 1 else place string into cell
					unless ["+", "-", "|", "*"].include?(board[y+j][x+i])
						if board[y+j][x+i] == " "
							board[y+j][x+i] = "1"
						else
							board[y+j][x+i] = board[y+j][x+i].succ
						end
					end 
				}
				}
			end
		}
		}
		return board
	end
	# ArgumentError expected for:
	# test_faulty_board
	# test_invalid_char
	# test_different_len
	def self.validate(board)
		l = board[0].length
       # Passes each element of the collection to the given block. The method returns true if the block ever returns a value other than false or nil. 
		return "Incorrect row length" if board.any? {|row| row.length != l}

		# create the characters for the wall, get the length minus the 2 for +
		wall = ["+", "-"*(l-2), "+"].join
		return "Top of board malformed" unless board[0] == wall
		return "Bottom of board malformed" unless board[-1] == wall

		# checks sides of board to see if character matches
		return "Side(s) of board malformed" unless (1...board.count-1).all? {|y|
		board[y][0] == "|" && board[y][-1] == "|"
		}
		# checks all board characters are valid
		return "Invalid character" unless board.all? {|row|
			row.chars.all? {|chr| ["+", "-", "|", "*", " "].include?(chr)}
		}
		return "OK"
	end
end