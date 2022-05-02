function HeroSlider( element ) {
    this.element = element;
    this.navigation = this.element.getElementsByClassName("js-cd-nav")[0];
    this.navigationItems = this.navigation.getElementsByTagName('li');
    this.marker = this.navigation.getElementsByClassName("js-cd-marker")[0];
    this.slides = this.element.getElementsByClassName("js-cd-slide");
    this.slidesNumber = this.slides.length;
    // ...
    this.init();
  };
  
  HeroSlider.prototype.init = function() {
    // ...
  
    //listen for the click event on the slider navigation
    this.navigation.addEventListener('click', function(event){
      if( event.target.tagName.toLowerCase() == 'div' )
        return;
      event.preventDefault();
      var selectedSlide = event.target;
      if( hasClass(event.target.parentElement, 'cd-selected') )
        return;
      self.oldSlideIndex = self.newSlideIndex;
      self.newSlideIndex = Array.prototype.indexOf.call(self.navigationItems, event.target.parentElement);
      self.newSlide();
      self.updateNavigationMarker();
      self.updateSliderNavigation();
      self.setAutoplay();
    });
  
    //...
  };
  
  var heroSliders = document.getElementsByClassName("js-cd-hero");
  if( heroSliders.length > 0 ) {
    for( var i = 0; i < heroSliders.length; i++) {
      (function(i){
        new HeroSlider(heroSliders[i]);
      })(i);
    }
  }