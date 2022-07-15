// // Ones, Twos, Threes, Fours, Fives, Sixes
// // The player scores the sum of the dice that reads one, two, three, four, five or six, respectively.
// // For example, 1, 6, 2, 4, 4 placed on “fours” gives 8 points.

// // Pair
// // The player scores the sum of the two highest matching dice.
// // For example, 3, 3, 3, 4, 4 placed on “pair” gives 8.

// // Two pairs
// // If there are two pairs of dice with the same number, the player scores the sum of these dice.
// // For example, 1, 1, 2, 3, 3 placed on “two pairs” gives 8.

// // Three of a kind
// // If there are three dice with the same number, the player scores the sum of these dice.
// // For example, 3, 3, 3, 4, 5 places on “three of a kind” gives 9.

// // Four of a kind
// // If there are four dice with the same number, the player scores the sum of these dice.
// // For example, 2, 2, 2, 2, 5 places on “four of a kind” gives 8.

// // Small straight
// // If the dice read (starts on 1) 1,2,3,4,5, the player scores 15 (the sum of all the dice).

// // Large straight
// // If the dice read (starts on 2) 2,3,4,5,6, the player scores 20 (the sum of all the dice).

// // Full house
// // If the dice are two of a kind and three of a kind, the player scores the sum of all the dice.
// // For example, 1,1,2,2,2 placed on “full house” gives 8. 4,4,4,4,4 is not “full house”.

// // Yahtzee
// // If all dice are the have the same number, the player scores 50 points.
// enum Dice {
// 	UndefinedFace = '0',
// 	FirstFace = '1',
// 	SecondFace = '2',
// 	ThirdFace = '3',
// 	FourFace = '4',
// 	FiveFace = '5',
// 	SixFace = '6',
// }
// enum Category {
// 	Pair = 'pair',
// 	DoublePair = 'two pairs',
// 	Three = 'three of a kind',
// 	Four = 'four of a kind',
// 	SmallStraight = 'small straight',
// 	LargeStraight = 'large straight',
// 	FullHouse = 'full house',
// 	Yahtzee = 'yahtzee',
// }

// class Yahtzee {
// 	firstDice: Dice = Dice.UndefinedFace
// 	secondDice: Dice = Dice.UndefinedFace
// 	thirdDice: Dice = Dice.UndefinedFace
// 	fourDice: Dice = Dice.UndefinedFace
// 	fiveDice: Dice = Dice.UndefinedFace
// 	constructor() {}

// 	play(die1: Dice, die2: Dice, die3: Dice, die4: Dice, die5: Dice, category: Category): number {
// 		this.isValid(die1)
// 		this.isValid(die2)
// 		this.isValid(die3)
// 		this.isValid(die4)
// 		this.isValid(die5)
// 		this.firstDice = die1
// 		this.secondDice = die2
// 		this.thirdDice = die3
// 		this.fourDice = die4
// 		this.fiveDice = die5

// 		const arrayDice: Dice[] = [this.firstDice, this.secondDice, this.thirdDice, this.fourDice, this.fiveDice]
// 		let result = 0
// 		switch (category) {
// 			case Category.Pair:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isPair(arrayDice, d)
// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})
// 				break
// 			case Category.DoublePair:
// 				const arrayPairs: Dice[] = []
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isPair(arrayDice, d)
// 					if (r != 0 && r > result) {
// 						arrayPairs.push(d)
// 					}
// 				})
// 				let sum = 0
// 				arrayPairs.forEach((d: Dice) => {
// 					sum = sum + parseInt(d)
// 				})
// 				result = sum
// 				break
// 			case Category.Three:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isThree(arrayDice, d)
// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})
// 				break
// 			case Category.Four:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isCuadruple(arrayDice, d)

// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})

// 				break
// 			case Category.SmallStraight:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isSmallStraight(arrayDice)
// 					console.log('r', r)
// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})
// 				break
// 			case Category.LargeStraight:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isLargeStraight(arrayDice)
// 					console.log('r', r)
// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})
// 				break
// 			case Category.FullHouse:
// 				break
// 			case Category.Yahtzee:
// 				arrayDice.forEach((d: Dice) => {
// 					const r = this.isYahtzee(arrayDice, d)

// 					if (r != 0 && r > result) {
// 						result = r
// 					}
// 				})
// 				break
// 			default:
// 				break
// 		}
// 		return result
// 	}

// 	isPair(array: Dice[], face: Dice) {
// 		const arrayFiltered = array.filter((element) => element === face)
// 		if (arrayFiltered.length < 2) {
// 			return 0
// 		}

// 		return 2 * parseInt(face)
// 	}

// 	isThree(array: Dice[], face: Dice) {
// 		const arrayFiltered = array.filter((element) => element === face)

// 		if (arrayFiltered.length < 3) {
// 			return 0
// 		}

// 		return 3 * parseInt(face)
// 	}

// 	isCuadruple(array: Dice[], face: Dice) {
// 		const arrayFiltered = array.filter((element) => element === face)
// 		if (arrayFiltered.length < 4) {
// 			return 0
// 		}
// 		return 4 * parseInt(face)
// 	}

// 	isSmallStraight(array: Dice[]) {
// 		const one = array.filter((element) => element === Dice.FirstFace).length
// 		const two = array.filter((element) => element === Dice.SecondFace).length
// 		const three = array.filter((element) => element === Dice.ThirdFace).length
// 		const four = array.filter((element) => element === Dice.FourFace).length
// 		const five = array.filter((element) => element === Dice.FiveFace).length
// 		if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1) {
// 			return 15
// 		}
// 		return 0
// 	}

// 	isLargeStraight(array: Dice[]) {
// 		const one = array.filter((element) => element === Dice.SecondFace).length
// 		const two = array.filter((element) => element === Dice.ThirdFace).length
// 		const three = array.filter((element) => element === Dice.FourFace).length
// 		const four = array.filter((element) => element === Dice.FiveFace).length
// 		const five = array.filter((element) => element === Dice.SixFace).length
// 		if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1) {
// 			return 20
// 		}
// 		return 0
// 	}

// 	isYahtzee(array: Dice[], face: Dice) {
// 		const arrayFiltered = array.filter((element) => element === face)

// 		if (arrayFiltered.length != 5) {
// 			return 0
// 		}
// 		return 50
// 	}

// 	getRandom(): Dice {
// 		const arrayKeys = Object.values(Dice)
// 		const randomNum = Math.ceil(Math.random() * 6)
// 		return arrayKeys[randomNum] as Dice
// 	}

// 	isValid(value: string) {
// 		return value == Dice.FirstFace
// 			? true
// 			: value == Dice.SecondFace
// 			? true
// 			: value == Dice.ThirdFace
// 			? true
// 			: value == Dice.FourFace
// 			? true
// 			: value == Dice.FiveFace
// 			? true
// 			: value == Dice.SixFace
// 			? true
// 			: false
// 	}
// }

// describe('Yahtzee should', () => {
// 	let yahtzee: Yahtzee
// 	beforeEach(() => {
// 		yahtzee = new Yahtzee()
// 	})

// 	it('jugar 5 dados con valores 1-6', () => {
// 		yahtzee.firstDice = Dice.FirstFace
// 		yahtzee.secondDice = Dice.FirstFace
// 		yahtzee.thirdDice = Dice.SecondFace
// 		yahtzee.fourDice = Dice.SecondFace
// 		yahtzee.fiveDice = Dice.SecondFace
// 		yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.Pair,
// 		)
// 		expect(yahtzee.isValid(yahtzee.firstDice)).toBe(true)
// 		expect(yahtzee.isValid(yahtzee.secondDice)).toBe(true)
// 		expect(yahtzee.isValid(yahtzee.thirdDice)).toBe(true)
// 		expect(yahtzee.isValid(yahtzee.fourDice)).toBe(true)
// 		expect(yahtzee.isValid(yahtzee.fiveDice)).toBe(true)
// 	})

// 	it('Suma de los dados por parejas', () => {
// 		yahtzee.firstDice = Dice.FirstFace
// 		yahtzee.secondDice = Dice.FirstFace
// 		yahtzee.thirdDice = Dice.SecondFace
// 		yahtzee.fourDice = Dice.SecondFace
// 		yahtzee.fiveDice = Dice.SecondFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.Pair,
// 		)
// 		expect(result).toBe(4)
// 	})

// 	it('Suma de los dados por doble parejas', () => {
// 		yahtzee.firstDice = Dice.ThirdFace
// 		yahtzee.secondDice = Dice.SecondFace
// 		yahtzee.thirdDice = Dice.SecondFace
// 		yahtzee.fourDice = Dice.FirstFace
// 		yahtzee.fiveDice = Dice.FirstFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.DoublePair,
// 		)
// 	})

// 	it('Suma de los dados por trios', () => {
// 		yahtzee.firstDice = Dice.FirstFace
// 		yahtzee.secondDice = Dice.SecondFace
// 		yahtzee.thirdDice = Dice.FirstFace
// 		yahtzee.fourDice = Dice.FirstFace
// 		yahtzee.fiveDice = Dice.FirstFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.Three,
// 		)
// 		expect(result).toBe(3)
// 	})

// 	it('Suma de los dados por Cuadruple', () => {
// 		yahtzee.firstDice = Dice.ThirdFace
// 		yahtzee.secondDice = Dice.SecondFace
// 		yahtzee.thirdDice = Dice.ThirdFace
// 		yahtzee.fourDice = Dice.ThirdFace
// 		yahtzee.fiveDice = Dice.ThirdFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.Four,
// 		)
// 		expect(result).toBe(12)
// 	})

// 	it('Suma de los dados por SmallStraight', () => {
// 		yahtzee.firstDice = Dice.FirstFace
// 		yahtzee.secondDice = Dice.SecondFace
// 		yahtzee.thirdDice = Dice.ThirdFace
// 		yahtzee.fourDice = Dice.FourFace
// 		yahtzee.fiveDice = Dice.FiveFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.SmallStraight,
// 		)
// 		expect(result).toBe(15)
// 	})

// 	it('Suma de los dados por LargeStraight', () => {
// 		yahtzee.firstDice = Dice.SecondFace
// 		yahtzee.secondDice = Dice.ThirdFace
// 		yahtzee.thirdDice = Dice.FourFace
// 		yahtzee.fourDice = Dice.FiveFace
// 		yahtzee.fiveDice = Dice.SixFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.LargeStraight,
// 		)
// 		expect(result).toBe(20)
// 	})

// 	it('Suma de los dados por Yaztzee', () => {
// 		yahtzee.firstDice = Dice.SecondFace
// 		yahtzee.secondDice = Dice.SecondFace
// 		yahtzee.thirdDice = Dice.SecondFace
// 		yahtzee.fourDice = Dice.SecondFace
// 		yahtzee.fiveDice = Dice.SecondFace
// 		const result = yahtzee.play(
// 			yahtzee.firstDice,
// 			yahtzee.secondDice,
// 			yahtzee.thirdDice,
// 			yahtzee.fourDice,
// 			yahtzee.fiveDice,
// 			Category.Yahtzee,
// 		)
// 		expect(result).toBe(50)
// 	})

// 	// it('return the sum of the dice that reads one, two, three, four, five or six, respectively', () => {})
// })
