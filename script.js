function onSubmit() {
    try{
      var x = 7;
      jslogger("This message is from jslog().");
      jslog("The value of x = " + x);
      jslog("The NeedIt State value = " + g_form.getValue('state'));
      jslog("The currently logged in user is " + g_user.getFullName() + ".");
          
              
       g_form.setValue('short_description',g_form.getValue('short_description') + " -  Updated field value");
    } catch(err){
        alert('A JavaScript runtime error occurred: ' + err.message);
       } 
    
  }