(function(globalThis)
   {"use strict";
    var runtime=globalThis.jsoo_runtime;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    var global_data=runtime.caml_get_global_data(),Stdlib=global_data.Stdlib;
    caml_call1(Stdlib[103],0);
    var Std_exit=[0];
    runtime.caml_register_global(1,Std_exit,"Std_exit");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdGRfZXhpdC5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
