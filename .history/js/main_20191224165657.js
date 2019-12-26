var budgetController = (function(){
    //
})();

var UIController = (function() {
    // get input
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputAmount: '.add__amount',
        inputDate: '.add__date',

    }

    return {
        getInputs: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector().value,
                amount: document.querySelector().value,
                date: document.querySelector().value
            }
            
        }
    };
   
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // Get the field input data
        var input = UICtrl.getInputs();
        console.log(input);
        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e){
        if(e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    })

})(budgetController, UIController);