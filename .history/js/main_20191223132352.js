var budgetController = (function(){
    //
})();

var UIController = (function() {
    //
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){
    
    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('modal clicked');
        // Get the field input data

        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI
    });

    document.addEventListener('keypress0', function(e){
        console.log(e);
    })

})(budgetController, UIController);