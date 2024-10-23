expense.push({categorys,amounts,dates})
totalAmount += amounts
total.textContent = totalAmount 
//this one is use to add row to the table
const newRow = expenseTable.insertRow();

//this one is use to add new cell to the table
const categoryCell = newRow.insertCell()
const amountCell = newRow.insertCell()
const dateCell = newRow.insertCell()
const deleteCell = newRow.insertCell()
const deleteBtn = document.createElement('button')

deleteBtn.textContent ="Delete"
deleteBtn.classList.add('delete')
deleteBtn.addEventListener('click', function(){
    expense.splice(expense.indexOf(expenses), 1)
    totalAmount -= expenses.amount
    amountCell.textContent = totalAmount

    expenseTable.removeChild(newRow)
    //deleteCell.appendchild(deleteBtn)
    
})

const expenses = expense[expense.length - 1]
categoryCell.textContent = expenses.category
amountCell.textContent = expenses.amount
dateCell.textContent = expenses.date
deleteCell.appendchild(deleteBtn)



for(const expenses of expense){
    totalAmount += expenses.amount
    total.textContent = totalAmount


    const newRow = expenseTable.insertRow()
    const categoryCell = newRow.insertCell()
    const amountCell = newRow.insertCell()
    const dateCell = newRow.insertCell()
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent ="Delete"
    deleteBtn.classList.add('delete')
    deleteBtn.addEventListener('click', function(){
        expense.splice(expense.indexOf(expenses), 1)
        totalAmount -= expenses.amount
        amountCell.textContent = totalAmount

        expenseTable.removeChild(newRow)
    })

    categoryCell.textContent = expenses.category
    amountCell.textContent = expenses.amount
    dateCell.textContent = expenses.date
    deleteCell.appendchild(deleteBtn)

    
