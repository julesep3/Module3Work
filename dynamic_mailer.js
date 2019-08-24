function printLetter(to) {
	// from and to object
	// {name, street, city, state, zip}

	// ========================================
	// | Zach Mays                            |
	// | 124 NW 20th                          |
	// | OKC, OK 73106                        |
	// |                                      |
	// |						Name                      |
	// |						Address                   |
	// |						City, State, Zip          |
	// ========================================

	console.log("========================================")
	console.log("| ", from.name, "                          |")
	console.log("| ", from.street, "                       |")
	console.log("| ", `${from.city}, ${from.state}, ${from.zip}`, "                     |")
	console.log("|                                      |")
	makeLineWithWidth(letter_width, to.name, left_space)
	makeLineWithWidth(letter_width, to.street, left_space)
	makeLineWithWidth(letter_width, csz, left_space)
	console.log("========================================")
}

const letter_width = 40
const left_space = 10
function makeLineWithWidth(width, item, desiredLeftSpace) {
	let line = ""
	const itemLength = item.length
	const paddingRight = width - itemLength - desiredLeftSpace
	line += "|"
	for(let i = 0; i < desiredLeftSpace; i++) {
		line += " "
	}
    line += item      
    let remainder = width - (line.length + 1)
    for(let i = 0; i < remainder; i++) {
        line += " "
    }
    line += "|"
    console.log(line)	
}

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

const to = {
	name: "Bobby Rockers",
	street: "1589 NW 4th St",
	state: "OK",
	city: "OKC",
	zip: "73105"
}

let csz = to.city + ", " + to.state + ", " + to.zip

console.log(printLetter(to))