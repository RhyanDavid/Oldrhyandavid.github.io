$(document).on("ready", function(){
    var blogSource  = $("#blog-template").html();
    var blogTemplate = Handlebars.compile(blogSource);
    
    $.get("posts.json", function(data){
        var i = 0
        while(i < data.length){
        $("#blogs").prepend(blogTemplate(data[i]));

            i = i+1
        }
        
    });
    
    
    
    
    $("form").on("submit",function(event) {
        event.preventDefault();
        
        var newpost = {
            title: $("input[name=title]").val(),
            body: $("textarea").val(),
        };
         $("#blogs").prepend(blogTemplate(newpost));
        console.log(blogTemplate)
        $.post("posts",newpost);
    });
});