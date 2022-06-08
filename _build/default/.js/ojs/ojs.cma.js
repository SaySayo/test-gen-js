(function(globalThis)
   {"use strict";
    var
     joo_global_object=globalThis,
     runtime=globalThis.jsoo_runtime,
     caml_js_from_string=runtime.caml_js_from_string,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Object=caml_string_of_jsbytes("Object"),
     cst_object=caml_string_of_jsbytes("object"),
     cst=caml_string_of_jsbytes(""),
     cst_to_js=caml_string_of_jsbytes("to_js"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_Array=caml_string_of_jsbytes("Array"),
     shared=[0,caml_string_of_jsbytes("to_js")],
     cst_stack=caml_string_of_jsbytes("stack"),
     cst_message=caml_string_of_jsbytes("message"),
     cst_name=caml_string_of_jsbytes("name"),
     CamlinternalOO=global_data.CamlinternalOO,
     Stdlib_Array=global_data.Stdlib__Array,
     Jsoo_runtime=global_data.Jsoo_runtime,
     Stdlib_Printexc=global_data.Stdlib__Printexc;
    function type_of(x){return caml_js_to_string(typeof x)}
    function instance_of(x,constr){return (x instanceof constr?1:0) | 0}
    var null$0=null,undefined$0=undefined,global=joo_global_object;
    function array_make(n){return new (global[cst_Array])(n)}
    function array_get(t,i){return t[i]}
    function array_set(t,i,x){return t[i] = x}
    function array_of_js_from(f,objs,start)
     {var n=objs[cst_length];
      function _s_(i){return caml_call1(f,objs[start + i | 0])}
      return caml_call2(Stdlib_Array[2],n - start | 0,_s_)}
    function array_of_js(f,objs){return array_of_js_from(f,objs,0)}
    function array_to_js(f,arr)
     {var n=arr.length - 1,a=array_make(n),_q_=n - 1 | 0,_p_=0;
      if(! (_q_ < 0))
       {var i=_p_;
        for(;;)
         {a[i] = caml_call1(f,runtime.caml_check_bound(arr,i)[1 + i]);
          var _r_=i + 1 | 0;
          if(_q_ !== i){var i=_r_;continue}
          break}}
      return a}
    function list_of_js_from(f,objs,start)
     {var _o_=array_of_js_from(f,objs,start);
      return caml_call1(Stdlib_Array[11],_o_)}
    function list_of_js(f,objs){return list_of_js_from(f,objs,0)}
    function list_to_js(f,l)
     {return array_to_js(f,caml_call1(Stdlib_Array[12],l))}
    function option_of_js(f,x)
     {if(x != null$0 && x !== undefined$0)return [0,caml_call1(f,x)];return 0}
    function option_to_js(f,param)
     {if(param){var x=param[1];return caml_call1(f,x)}return null$0}
    function unit_to_js(param){return undefined$0}
    function unit_of_js(param){return 0}
    function _a_(_g_)
     {var
       _h_=caml_call2(CamlinternalOO[3],_g_,cst),
       _i_=caml_call2(CamlinternalOO[7],_g_,cst_to_js);
      function _j_(self_1){return self_1[1 + _h_]}
      caml_call3(CamlinternalOO[10],_g_,_i_,_j_);
      return function(_m_,_l_,_k_)
       {var _n_=caml_call2(CamlinternalOO[24],_l_,_g_);
        _n_[1 + _h_] = _k_;
        return _n_}}
    var obj=caml_call2(CamlinternalOO[19],shared,_a_);
    function has_property(o,x)
     {var _d_=runtime.caml_string_equal(type_of(o),cst_object);
      if(_d_)
       var
        _e_=o !== null$0?1:0,
        _f_=_e_?o[caml_js_from_string(x)] !== undefined$0?1:0:_e_;
      else
       var _f_=_d_;
      return _f_}
    function empty_obj(param){return new (global[cst_Object])()}
    function apply_arr(o,arr){return o.apply(null$0,arr)}
    function call_arr(o,s,arr){return o[caml_js_from_string(s)].apply(o,arr)}
    function is_null(x){return x == null$0?1:0}
    function obj_type(x)
     {return caml_js_to_string(Object.prototype.toString.call(x))}
    var
     Ojs=
      [0,
       array_of_js,
       array_to_js,
       list_of_js,
       list_to_js,
       array_of_js_from,
       list_of_js_from,
       option_of_js,
       option_to_js,
       unit_of_js,
       unit_to_js,
       empty_obj,
       has_property,
       call_arr,
       apply_arr,
       array_make,
       array_get,
       array_set,
       global,
       null$0,
       type_of,
       instance_of,
       obj,
       is_null,
       obj_type];
    caml_register_global(20,Ojs,"Ojs");
    function name(x){return caml_js_to_string(x[cst_name])}
    function message(x){return caml_js_to_string(x[cst_message])}
    function stack(x){return option_of_js(caml_js_to_string,x[cst_stack])}
    function to_string(x){return caml_js_to_string(x.toString())}
    var _b_=Jsoo_runtime[3][4];
    function _c_(param)
     {if(param[1] === _b_){var x=param[2];return [0,to_string(x)]}return 0}
    caml_call1(Stdlib_Printexc[9],_c_);
    var Ojs_exn=[0,name,message,stack,to_string,_b_];
    caml_register_global(23,Ojs_exn,"Ojs_exn");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJvanMuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbIm51bGwiLCJ1bmRlZmluZWQiLCJqb29fZ2xvYmFsX29iamVjdCIsIk9iamVjdCJdLCJzb3VyY2VzIjpbIiJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFBQSxLLFlBQUFDLFUsT0FBQUM7SSIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
