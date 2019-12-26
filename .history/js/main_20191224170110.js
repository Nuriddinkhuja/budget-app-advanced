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
        inputBtn: '.add__btn'
    }

    return {
        getInputs: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                amount: document.querySelector(DOMstrings.inputAmount).value,
                date: document.querySelector(DOMstrings.inputDate).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };
   
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings;

    var ctrlAddItem = function(){

        // Get the field input data
        var input = UICtrl.getInputs();
        console.log(input);
        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI
        
    }
    
    document.querySelector(Dom.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e){
        if(e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    })

})(budgetController, UIController);