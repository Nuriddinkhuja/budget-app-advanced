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

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                ctrlAddItem();
            }
        });
    }

    

    var ctrlAddItem = function(){
        console.log('dsdsd')
        // Get the field input data
        var input = UICtrl.getInputs();
        console.log(input);
        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI
    };

    return {
        init: function(){
            console.log('started');
            setupEventListeners();
        }
    }
    
    

})(budgetController, UIController);