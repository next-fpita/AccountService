// Given a client makes a deposit of 1000 on 10-01-2012
// And a deposit of 2000 on 13-01-2012
// And a withdrawal of 500 on 14-01-2012
// When they print their bank statement

// Then they would see:
// Date       || Amount || Balance
// 14/01/2012 || -500   || 2500
// 13/01/2012 || 2000   || 3000
// 10/01/2012 || 1000   || 1000

// public interface AccountService {     void deposit(int amount)     void withdraw(int amount)     void printStatement() }

// verify(output).print("date || credit || debit || balance\n" +
//         "14/01/2012 || || 500.00 || 2500.00\n" +
//         "13/01/2012 || 2000.00 || || 3000.00\n" +
//         "10/01/2012 || 1000.00 || || 1000.00");

enum Roles {}

class AccountService {
	constructor() {}

	deposit(amount: number) {}

	withdraw(amount: number) {}

	printStatement(): string {
		return ''
	}
}

describe('Bank ', () => {
	let accountService: AccountService
	beforeEach(() => {
		accountService = new AccountService()
	})

	it('Should Print statement with transaction ', () => {
		const expectedStatement = `date || credit || debit || balance\n" +
               "14/01/2012 || || 500.00 || 2500.00\n" +
                "13/01/2012 || 2000.00 || || 3000.00\n" +
               "10/01/2012 || 1000.00 || || 1000.00`

		accountService.deposit(1000)
		accountService.deposit(2000)
		accountService.withdraw(500)
		const result = accountService.printStatement()

		expect(result).toBe(expectedStatement)
		// expect(yahtzee.isValid(yahtzee.firstDice)).toBe(true)
	})
})
