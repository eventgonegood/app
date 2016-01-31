jQuery(function(){
  $("#schedule-data").each(function(){
    var theData = JSON.parse(this.innerHTML);

    var resources = [{id:"monday",title:"Monday"}]

    $('.scheduling-container').fullCalendar({
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      resourceAreaWidth: 130,
      now: '2015-08-07',
      allDaySlot: false,
      editable: false,
      aspectRatio: 1.5,
      scrollTime: '00:00',
      header: {
        left: '',
        center: '',
        right: ''
      },
      defaultView: "timelineDay",
      resourceLabelText: 'Classes',
      resources: theData.resources,
      events: theData.events
      //end
    });
  });
});
