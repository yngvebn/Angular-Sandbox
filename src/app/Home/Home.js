
angular.module('sandbox').controller('Home', function($scope){
	/* To illustrate that this controller is only instansiated upon first load of the Home-view and not for each child. */
    console.log('Home instansiated')
    this.greeting = 'Hello world!';
});

angular.module('sandbox').controller('HomeList', function($scope){
    
    console.log('HomeList instansiated')
    this.items = [
        { name: 'Item 1'},
        { name: 'Item 2'},
        { name: 'Item 3'}
    ]
})

angular.module('sandbox').controller('HomeAbout', function($scope){

    console.log('HomeAbout instansiated')

})

angular.module('sandbox').controller('HomeProfile', function($scope){
    console.log('HomeProfile instansiated')
    
})


angular.module('sandbox').controller('HomeMain', function($scope){
    console.log('HomeMain instansiated')
    
})