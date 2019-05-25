import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"

test("should correctly render ExpensesSummary with 1 expense", () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
})

test("should correctly render ExpensesSummary with multiple expenses", () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={213142313123} />)
})
