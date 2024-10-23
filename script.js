'use strict'

//let expens = [];
//let totalAmount = 0
//console.log(totalAmount);

const categoryInput = document.getElementById('Category-select')
const amountInput = document.getElementById('amount-inpt')
const dateInput = document.getElementById('date-input')
const add = document.getElementById('add-btn')
const totalCell = document.getElementById('total-amount')
const expenseTableBody = document.getElementById('expense-table-body')

let expens = []
let totalAmount = 0





add.addEventListener('click', function(){
    
const category = categoryInput.value
const amount = amountInput.value
const date = dateInput.value
console.log(date);




if( category === ""){
    alert('Please Select a Category')
    //return;
};


if(isNaN(amount) || amount <= 0){
    alert('Please enter a vaild number')
    return;
    
}

if(date === ""){
    alert('Please pick a date')
    return;
}

expens.push(category,amount,date)
totalAmount += Number (eval(amount))
totalCell.textContent = totalAmount

// this use to insert new row

const newRow = expenseTableBody.insertRow()
const categoryCell = newRow.insertCell()
const amountCell = newRow.insertCell()
const dateCell = newRow.insertCell()
const deleteCell = newRow.insertCell()
const deleteBtn = document.createElement('button')

deleteBtn.textContent = "Delete"
deleteBtn.classList.add('delete')
deleteBtn.addEventListener('click', function(){
    expens.splice(expens.indexOf(expense), 1)

    totalAmount -= Number(eval(expense - amount))
    totalCell.textContent = Number(eval(totalAmount))
    console.log(totalCell);

    expenseTableBody.removeChild(newRow)

    
    
})

const expense = expens[expens.length - 1]
categoryCell.textContent = category
amountCell.textContent = amount
dateCell.textContent = date
deleteCell.appendChild(deleteBtn)



})




for(const expense of expens){
    totalAmount += eval(expense.amount)
    totalCell.textContent = Number(totalAmount)


const newRow = expenseTableBody.insertRow()
const categoryCell = newRow.insertCell()
const amountCell = newRow.insertCell()
const dateCell = newRow.value.insertCell()
const deleteCell = newRow.insertCell()
const deleteBtn = document.createElement('button')


deleteBtn.textContent = "Delete"
deleteBtn.classList.add('delete')
deleteBtn.addEventListener('click', function(){
    expens.splice(expens.indexOf(expens), 1)

    totalAmount -= Number(eval(expense - amount))
    totalCell.textContent = Number(eval(totalAmount))
    console.log(totalCell);

    expenseTableBody.removeChild(newRow)
    
})

categoryCell.textContent = expense.category
amountCell.textContent = expense.amount
dateCell.innerHTML = expense.date
deleteCell.appendChild(deleteBtn)





}





