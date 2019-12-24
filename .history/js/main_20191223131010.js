var budgetController = (function(){
    //
})();

var UIController = (function() {
    //
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){
    
    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('modal clicked')
    })

})(budgetController, UIController);