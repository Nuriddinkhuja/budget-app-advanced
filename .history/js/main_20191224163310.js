var budgetController = (function(){
    //
})();

var UIController = (function() {
    // get input
    return {
        getInputs: function(){
            var type = document.querySelector('#add__type').value;
            var description = document.querySelector('#add__description').value;
            var amount = document.querySelector('#add__amount').value;
            var date = document.querySelector("#add__date").value;
        }
    };
   
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // Get the field input data

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