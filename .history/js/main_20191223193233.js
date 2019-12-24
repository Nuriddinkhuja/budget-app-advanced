var budgetController = (function(){
    //
})();

var UIController = (function() {
    //
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // Get the field input data

        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI
        console.log('it works');
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e){
        if(e.keyCode === 13 || e.which === 13){
            console.log('enter pressed');
            
        }
    })

})(budgetController, UIController);