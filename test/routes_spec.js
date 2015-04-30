describe('Routes', function() {

  var $rootScope, $state, state, $templateCache;

  beforeEach(function() {

    module('sampleApp') 

    inject(function(_$rootScope_, _$state_,_$templateCache_) {
      $rootScope = _$rootScope_;
      $state = _$state_;   
      $templateCache = _$templateCache_;        
    })
  });


  it('Landing state should be controllername = LandingCtrl, url = /landing and templateurl = templates/landing.html', function() { 
    state = 'landing';
    $templateCache.put('templates/landing.html', '');
    $state.go(state);
    $rootScope.$digest();  
    expect($state.current.name).toBe(state); 
    expect($state.current.url).toBe("/landing");  
    expect($state.current.controller).toBe("LandingCtrl");
    expect($state.current.templateUrl).toBe("templates/landing.html"); 
  });

  it('auto_sync state should be controllername = LandingCtrl, url = /auto_sync and templateurl = templates/auto_sync.html', function() { 
    state = 'auto_sync';
    $templateCache.put('templates/auto_sync.html', '');
    $state.go(state);
    $rootScope.$digest();   
    expect($state.current.name).toBe(state); 
    expect($state.current.url).toBe("/auto_sync");  
    expect($state.current.controller).toBe("LandingCtrl");
    expect($state.current.templateUrl).toBe("templates/auto_sync.html"); 
  });

  
});