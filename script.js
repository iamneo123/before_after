document.addEventListener('DOMContentLoaded', () => {
   let beforeAfter = {
      handler: document.querySelector('.handler'),
      after: document.querySelector('.after'),
      pictures: document.querySelector('.pictures'),
      isScrolling: false,
      scrollingStart: function(e) {
         this.isScrolling = true;
      },
      scrollingEnd: function(e) {
         this.isScrolling = false;
      },
      scrolling: function(e) {
         if (e.target == this.handler && this.isScrolling) {
            let positionX = e.pageX || e.changedTouches[0].pageX;
            let pictureWidth = this.pictures.getBoundingClientRect().width;
            let x = positionX - this.pictures.getBoundingClientRect().left;
            
            if (x >= 0 && x <= pictureWidth) {
               this.after.style.width = x + 'px';
               this.handler.style.left = x + 'px';
            }
         }
      }
   };

   addEventListener('mousemove', beforeAfter.scrolling.bind(beforeAfter));
   addEventListener('mouseleave', beforeAfter.scrollingEnd.bind(beforeAfter));
   addEventListener('mouseup', beforeAfter.scrollingEnd.bind(beforeAfter));

   addEventListener('touchmove', beforeAfter.scrolling.bind(beforeAfter));
   addEventListener('touchend', beforeAfter.scrollingEnd.bind(beforeAfter));
   addEventListener('touchcancel', beforeAfter.scrollingEnd.bind(beforeAfter));

   beforeAfter.handler.addEventListener('mousedown', beforeAfter.scrollingStart.bind(beforeAfter))
   beforeAfter.handler.addEventListener('touchstart', beforeAfter.scrollingStart.bind(beforeAfter))
});

