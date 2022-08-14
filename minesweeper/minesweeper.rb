class Board
	BOARDCHARS = ["+", "-", "|", "*"]

	#  A Function to count the number of
    #  mines in the adjacent cells
	#  and to replace the mine from (row, col)
	def self.transform(input)
		board = input
		tmp = validate(board)
		raise ArgumentError, tmp unless tmp == "OK"
		len = board[0].length-1
		(1...board.count-1).each {|y|
		(1...len).each {|x|
			if board[y][x] == "*"
				(-1..1).each {|i|
				(-1..1).each {|j|
					unless BOARDCHARS.include?(board[y+j][x+i])
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
	def self.validate(b)
		l = b[0].length
		return "Incorrect row length" if b.any? {|row| row.length != l}
		wall = ["+", "-"*(l-2), "+"].join
		return "Top of board malformed" unless b[0] == wall
		return "Bottom of board malformed" unless b[-1] == wall
		return "Side(s) of board malformed" unless (1...b.count-1).all? {|y|
			b[y][0] == "|" && b[y][-1] == "|"
		}
		return "Invalid character" unless b.all? {|row|
			row.chars.all? {|chr| ["+", "-", "|", "*", " "].include?(chr)}
		}
		return "OK"
	end
end