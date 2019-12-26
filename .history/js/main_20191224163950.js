var budgetController = (function(){
    //
})();

var UIController = (function() {
    // get input
    return {
        getInputs: function(){
            console.log(document.getElementById('#add__type'));
            return {
                type: document.getElementById('#add__type').value,
                description: document.getElementById('#add__description').value,
                amount: document.getElementById('#add__amount').value,
                date: document.getElementById("#add__date").value
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