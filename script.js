var main = function()
{
   //select the form and add event-listener for submit  
   $('form').submit(function(event)
   {
        var $input = $(event.target).find('input');

        //get value of the input 
        var comment = $input.val();

        //validate and add comment to list 
        if(comment != "")
        {
            //create html for a single comment with the varible passed in
            var html = $('<li>').text(comment);
            //add the html created above to the existing comments list 
            html.prependTo('#comments')
        }
   });
}
//listener to call main function when the page is ready
$(document).ready(main);
