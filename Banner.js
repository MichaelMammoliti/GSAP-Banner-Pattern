/*
  Script info:
  ================
  - Author: Michael Mammoliti
  - Version: 1.0.0
  - Release date: 06 November 2016
  - GitHub: https://github.com/MichaelMammoliti/GSAP-Banner-Pattern/

  Contact info
  ================
  - GitHub: https://github.com/MichaelMammoliti
  - Mail: mammoliti.michael@gmail.com
  - Twitter: @MichMammoliti

  License Info
  ================
  - Released under the MIT license.
*/

// Banner module
var Banner = (function(){

  // Collapsed Unit
  // ====================
  var CollapsedUnit = (function()
  {

        // Declare variables
        // ========================
    var defDuration = 1,
        frameDelay  = 2,

        // Elements
        // ========================
        el = "#some-element-id"
    ;

    // Timelines
    // ========================
    var timelines = {
      master: new TimelineMax({ paused : true }),
      loader: new TimelineMax({ paused : true })
    };


    // Callbacks
    // ========================
    var callbacks = {
      master: {
        callbackName: function(){}
      },
      loader: {
        callbackName: function(){}
      }
    };


    // Frames
    // ========================
    var frames = {

      master: {
        set: function()
        {
          var tl = new TimelineMax();

          tl
            .set([], {})
          ;

          return tl;
        },

        frame1: function()
        {
          var tl = new TimelineMax();

          tl
            .to({}, defDuration, {})
          ;

          return tl;
        }

      },

      loader: {
        fadeOut: function()
        {
          var tl = new TimelineMax();

          tl
            .to({}, defDuration, {})
          ;

          return tl;
        }
      }

    }


    // Initialize Banner
    // ========================
    function init()
    {

      // Initialize third parties components
      // ============================

      // Add frames to timeline
      // ============================
      timelines.loader
        .add( frames.loader.fadeOut(), "fadeout" )
      ;

      timelines.master
        .add( frames.master.set(), "set" )
        .add( frames.master.frame1(), "frame1" )
      ;

      // File Preloader
      // ============================

    }


    // Return module
    // ========================
    return {
      init: init,
      timelines : timelines
    };


  }());


  // Expanded Unit
  // ====================
  var ExpandedUnit = (function()
  {

        // Declare variables
        // ========================
    var defDuration = 1,
        frameDelay  = 2,

        // Elements
        // ========================
        el = "#some-element-id"
    ;

    // Timelines
    // ========================
    var timelines = {
      master: new TimelineMax({ paused : true }),
      loader: new TimelineMax({ paused : true })
    };


    // Callbacks
    // ========================
    var callbacks = {
      master: {
        callbackName: function(){}
      },
      loader: {
        callbackName: function(){}
      }
    };


    // Frames
    // ========================
    var frames = {

      master: {
        set: function()
        {
          var tl = new TimelineMax();

          tl
            .set([], {})
          ;

          return tl;
        },

        frame1: function()
        {
          var tl = new TimelineMax();

          tl
            .to({}, defDuration, {})
          ;

          return tl;
        }

      },

      loader: {
        fadeOut: function()
        {
          var tl = new TimelineMax();

          tl
            .to({}, defDuration, {})
          ;

          return tl;
        }
      }

    }


    // Initialize Banner
    // ========================
    function init()
    {

      // Initialize third parties components
      // ============================

      // Add frames to timeline
      // ============================
      timelines.loader
        .add( frames.loader.fadeOut(), "fadeout" )
      ;

      timelines.master
        .add( frames.master.set(), "set" )
        .add( frames.master.frame1(), "frame1" )
      ;

      // File Preloader
      // ============================

    }


    // Return module
    // ========================
    return {
      init: init,
      timelines : timelines
    };


  }());


  // Return module
  // ====================
  return {

    // Collapsed unit
    // ====================
    collapsed: {
      init: CollapsedUnit.init,
      timelines : CollapsedUnit.timelines
    },

    // Expanded unit
    // ====================
    expanded: {
      init: ExpandedUnit.init,
      timelines : ExpandedUnit.timelines
    }

  };

})();


// Start unit
// ==========================================
// you can use your personal file preloader inside "Banner.collapsed.init()"
// then inside create a callback inside the callback's object (i.e.: "callbacks.preloader.yourCallbackName")
// and fire it in the preloader's event/callback!
// in this case I'm firing the collapsed unit.
Banner.collapsed.init();


// Accessing unit's timelines
// ==========================================
// you can access your timelines outside of the module's scope if you need.
// in this script the main timeline is called "master" so it will be "Banner.collapsed.timelines.master".
// this allows flexibility and accessibility to all the timeline's APIs that GSAP provides.
// i.e. "onclick" event you can pause, play from a specific frame, reverse and reset the timeline.
Banner.collapsed.timelines; // => all timelines
Banner.collapsed.timelines.master; // => master timeline
Banner.collapsed.timelines.loader; // => loader timeline
Banner.collapsed.timelines.yourCustomTimeline; // => yourCustomTimeline timeline
