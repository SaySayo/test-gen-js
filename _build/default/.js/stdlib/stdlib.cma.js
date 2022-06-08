(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_array_concat=runtime.caml_array_concat,
     caml_array_get=runtime.caml_array_get,
     caml_array_set=runtime.caml_array_set,
     caml_array_sub=runtime.caml_array_sub,
     caml_ba_change_layout=runtime.caml_ba_change_layout,
     caml_ba_create=runtime.caml_ba_create,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_num_dims=runtime.caml_ba_num_dims,
     caml_ba_reshape=runtime.caml_ba_reshape,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_ba_set_2=runtime.caml_ba_set_2,
     caml_ba_set_3=runtime.caml_ba_set_3,
     caml_ba_set_generic=runtime.caml_ba_set_generic,
     caml_ba_slice=runtime.caml_ba_slice,
     caml_blit_bytes=runtime.caml_blit_bytes,
     caml_blit_string=runtime.caml_blit_string,
     caml_bswap16=runtime.caml_bswap16,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_bytes_get16=runtime.caml_bytes_get16,
     caml_bytes_get32=runtime.caml_bytes_get32,
     caml_bytes_get64=runtime.caml_bytes_get64,
     caml_bytes_of_string=runtime.caml_bytes_of_string,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_bytes_set16=runtime.caml_bytes_set16,
     caml_bytes_set32=runtime.caml_bytes_set32,
     caml_bytes_set64=runtime.caml_bytes_set64,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_compare=runtime.caml_compare,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_div=runtime.caml_div,
     caml_ephe_set_key=runtime.caml_ephe_set_key,
     caml_ephe_unset_key=runtime.caml_ephe_unset_key,
     caml_equal=runtime.caml_equal,
     caml_fill_bytes=runtime.caml_fill_bytes,
     caml_float_compare=runtime.caml_float_compare,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_floatarray_blit=runtime.caml_floatarray_blit,
     caml_floatarray_create=runtime.caml_floatarray_create,
     caml_format_float=runtime.caml_format_float,
     caml_format_int=runtime.caml_format_int,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_get_exception_raw_backtra=runtime.caml_get_exception_raw_backtrace,
     caml_get_public_method=runtime.caml_get_public_method,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_greaterthan=runtime.caml_greaterthan,
     caml_hash=runtime.caml_hash,
     caml_input_value=runtime.caml_input_value,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_add=runtime.caml_int64_add,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_compare=runtime.caml_int64_compare,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     caml_int64_format=runtime.caml_int64_format,
     caml_int64_mul=runtime.caml_int64_mul,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_of_string=runtime.caml_int64_of_string,
     caml_int64_or=runtime.caml_int64_or,
     caml_int64_shift_left=runtime.caml_int64_shift_left,
     caml_int64_shift_right_unsigne=runtime.caml_int64_shift_right_unsigned,
     caml_int64_sub=runtime.caml_int64_sub,
     caml_int_compare=runtime.caml_int_compare,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_lessequal=runtime.caml_lessequal,
     caml_lessthan=runtime.caml_lessthan,
     caml_make_vect=runtime.caml_make_vect,
     caml_marshal_data_size=runtime.caml_marshal_data_size,
     caml_md5_string=runtime.caml_md5_string,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_channel_size=runtime.caml_ml_channel_size,
     caml_ml_channel_size_64=runtime.caml_ml_channel_size_64,
     caml_ml_close_channel=runtime.caml_ml_close_channel,
     caml_ml_flush=runtime.caml_ml_flush,
     caml_ml_input=runtime.caml_ml_input,
     caml_ml_input_char=runtime.caml_ml_input_char,
     caml_ml_open_descriptor_in=runtime.caml_ml_open_descriptor_in,
     caml_ml_open_descriptor_out=runtime.caml_ml_open_descriptor_out,
     caml_ml_output=runtime.caml_ml_output,
     caml_ml_output_bytes=runtime.caml_ml_output_bytes,
     caml_ml_output_char=runtime.caml_ml_output_char,
     caml_ml_pos_in=runtime.caml_ml_pos_in,
     caml_ml_set_binary_mode=runtime.caml_ml_set_binary_mode,
     caml_ml_set_channel_name=runtime.caml_ml_set_channel_name,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_mod=runtime.caml_mod,
     caml_mul=runtime.caml_mul,
     caml_nextafter_float=runtime.caml_nextafter_float,
     caml_notequal=runtime.caml_notequal,
     caml_obj_block=runtime.caml_obj_block,
     caml_obj_make_forward=runtime.caml_obj_make_forward,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_output_value=runtime.caml_output_value,
     caml_register_global=runtime.caml_register_global,
     caml_register_named_value=runtime.caml_register_named_value,
     caml_restore_raw_backtrace=runtime.caml_restore_raw_backtrace,
     caml_set_oo_id=runtime.caml_set_oo_id,
     caml_signbit_float=runtime.caml_signbit_float,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_bytes=runtime.caml_string_of_bytes,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_sys_argv=runtime.caml_sys_argv,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_sys_open=runtime.caml_sys_open,
     caml_sys_random_seed=runtime.caml_sys_random_seed,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst$0=caml_string_of_jsbytes("%,"),
     cst_really_input=caml_string_of_jsbytes("really_input"),
     cst_input=caml_string_of_jsbytes("input"),
     cst_output_substring=caml_string_of_jsbytes("output_substring"),
     cst_output=caml_string_of_jsbytes("output"),
     cst_12g=caml_string_of_jsbytes("%.12g"),
     cst=caml_string_of_jsbytes("."),
     cst_false$1=caml_string_of_jsbytes("false"),
     cst_true$1=caml_string_of_jsbytes("true"),
     cst_false$0=caml_string_of_jsbytes("false"),
     cst_true$0=caml_string_of_jsbytes("true"),
     cst_bool_of_string=caml_string_of_jsbytes("bool_of_string"),
     cst_true=caml_string_of_jsbytes("true"),
     cst_false=caml_string_of_jsbytes("false"),
     cst_char_of_int=caml_string_of_jsbytes("char_of_int"),
     cst_Stdlib_Exit=caml_string_of_jsbytes("Stdlib.Exit"),
     cst_Stdlib_Pervasives_Exit=
      caml_string_of_jsbytes("Stdlib.Pervasives.Exit"),
     cst_Stdlib_Sys_Break=caml_string_of_jsbytes("Stdlib.Sys.Break"),
     ocaml_version=caml_string_of_jsbytes("4.14.0"),
     ocaml_release=[0,4,14,0,0],
     cst_Obj_Ephemeron_blit_key=
      caml_string_of_jsbytes("Obj.Ephemeron.blit_key"),
     cst_Obj_Ephemeron_check_key=
      caml_string_of_jsbytes("Obj.Ephemeron.check_key"),
     cst_Obj_Ephemeron_unset_key=
      caml_string_of_jsbytes("Obj.Ephemeron.unset_key"),
     cst_Obj_Ephemeron_set_key=caml_string_of_jsbytes("Obj.Ephemeron.set_key"),
     cst_Obj_Ephemeron_get_key_copy=
      caml_string_of_jsbytes("Obj.Ephemeron.get_key_copy"),
     cst_Obj_Ephemeron_get_key=caml_string_of_jsbytes("Obj.Ephemeron.get_key"),
     cst_Obj_Ephemeron_create=caml_string_of_jsbytes("Obj.Ephemeron.create"),
     cst_Obj_extension_constructor$0=
      caml_string_of_jsbytes("Obj.extension_constructor"),
     cst_Obj_extension_constructor=
      caml_string_of_jsbytes("Obj.extension_constructor"),
     cst_CamlinternalLazy_Undefined=
      caml_string_of_jsbytes("CamlinternalLazy.Undefined"),
     cst_Seq_drop=caml_string_of_jsbytes("Seq.drop"),
     cst_Seq_take=caml_string_of_jsbytes("Seq.take"),
     cst_Seq_init=caml_string_of_jsbytes("Seq.init"),
     cst_Stdlib_Seq_Forced_twice=
      caml_string_of_jsbytes("Stdlib.Seq.Forced_twice"),
     cst_option_is_None=caml_string_of_jsbytes("option is None"),
     cst_result_is_Ok=caml_string_of_jsbytes("result is Ok _"),
     cst_result_is_Error=caml_string_of_jsbytes("result is Error _"),
     cst_true$2=caml_string_of_jsbytes("true"),
     cst_false$2=caml_string_of_jsbytes("false"),
     cst$1=caml_string_of_jsbytes("\\\\"),
     cst$2=caml_string_of_jsbytes("\\'"),
     cst_b=caml_string_of_jsbytes("\\b"),
     cst_t=caml_string_of_jsbytes("\\t"),
     cst_n=caml_string_of_jsbytes("\\n"),
     cst_r=caml_string_of_jsbytes("\\r"),
     cst_Char_chr=caml_string_of_jsbytes("Char.chr"),
     cst_is_not_a_latin1_character=
      caml_string_of_jsbytes(" is not a latin1 character"),
     cst_04X=caml_string_of_jsbytes("%04X"),
     cst_U=caml_string_of_jsbytes("U+"),
     cst_is_not_an_Unicode_scalar_v=
      caml_string_of_jsbytes(" is not an Unicode scalar value"),
     cst_X=caml_string_of_jsbytes("%X"),
     err_no_pred=caml_string_of_jsbytes("U+0000 has no predecessor"),
     err_no_succ=caml_string_of_jsbytes("U+10FFFF has no successor"),
     cst_List_map2=caml_string_of_jsbytes("List.map2"),
     cst_List_iter2=caml_string_of_jsbytes("List.iter2"),
     cst_List_fold_left2=caml_string_of_jsbytes("List.fold_left2"),
     cst_List_fold_right2=caml_string_of_jsbytes("List.fold_right2"),
     cst_List_for_all2=caml_string_of_jsbytes("List.for_all2"),
     cst_List_exists2=caml_string_of_jsbytes("List.exists2"),
     cst_List_combine=caml_string_of_jsbytes("List.combine"),
     cst_List_rev_map2=caml_string_of_jsbytes("List.rev_map2"),
     cst_List_init=caml_string_of_jsbytes("List.init"),
     cst_List_nth$0=caml_string_of_jsbytes("List.nth"),
     cst_nth=caml_string_of_jsbytes("nth"),
     cst_List_nth=caml_string_of_jsbytes("List.nth"),
     cst_tl=caml_string_of_jsbytes("tl"),
     cst_hd=caml_string_of_jsbytes("hd"),
     cst_index_out_of_bounds$2=caml_string_of_jsbytes("index out of bounds"),
     cst_index_out_of_bounds$1=caml_string_of_jsbytes("index out of bounds"),
     cst_index_out_of_bounds$0=caml_string_of_jsbytes("index out of bounds"),
     cst_index_out_of_bounds=caml_string_of_jsbytes("index out of bounds"),
     cst_Bytes_of_seq_cannot_grow_b=
      caml_string_of_jsbytes("Bytes.of_seq: cannot grow bytes"),
     cst_String_rcontains_from_Byte=
      caml_string_of_jsbytes("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes=
      caml_string_of_jsbytes("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Byt=
      caml_string_of_jsbytes("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_r=
      caml_string_of_jsbytes("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Byte=
      caml_string_of_jsbytes("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_in=
      caml_string_of_jsbytes("String.index_from / Bytes.index_from"),
     cst_Bytes_concat=caml_string_of_jsbytes("Bytes.concat"),
     cst_String_blit_Bytes_blit_str=
      caml_string_of_jsbytes("String.blit / Bytes.blit_string"),
     cst_Bytes_blit=caml_string_of_jsbytes("Bytes.blit"),
     cst_String_fill_Bytes_fill=
      caml_string_of_jsbytes("String.fill / Bytes.fill"),
     cst_Bytes_extend=caml_string_of_jsbytes("Bytes.extend"),
     cst_String_sub_Bytes_sub=caml_string_of_jsbytes("String.sub / Bytes.sub"),
     cst_String_rcontains_from_Byte$0=
      caml_string_of_jsbytes("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes$0=
      caml_string_of_jsbytes("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Byt$0=
      caml_string_of_jsbytes("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_r$0=
      caml_string_of_jsbytes("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Byte$0=
      caml_string_of_jsbytes("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_in$0=
      caml_string_of_jsbytes("String.index_from / Bytes.index_from"),
     cst$4=caml_string_of_jsbytes(""),
     cst$3=caml_string_of_jsbytes(""),
     cst_String_concat=caml_string_of_jsbytes("String.concat"),
     empty$1=caml_string_of_jsbytes(""),
     cst$5=caml_string_of_jsbytes("()"),
     cst_Marshal_from_bytes=caml_string_of_jsbytes("Marshal.from_bytes"),
     cst_Marshal_from_bytes$0=caml_string_of_jsbytes("Marshal.from_bytes"),
     cst_Marshal_data_size=caml_string_of_jsbytes("Marshal.data_size"),
     cst_Marshal_to_buffer_substrin=
      caml_string_of_jsbytes("Marshal.to_buffer: substring out of bounds"),
     cst_Array_combine=caml_string_of_jsbytes("Array.combine"),
     cst_Array_exists2=caml_string_of_jsbytes("Array.exists2"),
     cst_Array_for_all2=caml_string_of_jsbytes("Array.for_all2"),
     cst_Array_map2_arrays_must_hav=
      caml_string_of_jsbytes("Array.map2: arrays must have the same length"),
     cst_Array_iter2_arrays_must_ha=
      caml_string_of_jsbytes("Array.iter2: arrays must have the same length"),
     cst_Array_blit=caml_string_of_jsbytes("Array.blit"),
     cst_Array_fill=caml_string_of_jsbytes("Array.fill"),
     cst_Array_sub=caml_string_of_jsbytes("Array.sub"),
     cst_Array_init=caml_string_of_jsbytes("Array.init"),
     cst_Stdlib_Array_Bottom=caml_string_of_jsbytes("Stdlib.Array.Bottom"),
     cst_Float_Array_map2_arrays_mu=
      caml_string_of_jsbytes
       ("Float.Array.map2: arrays must have the same length"),
     cst_Float_Array_iter2_arrays_m=
      caml_string_of_jsbytes
       ("Float.Array.iter2: arrays must have the same length"),
     cst_Float_array_blit=caml_string_of_jsbytes("Float.array.blit"),
     cst_Float_array_blit$0=caml_string_of_jsbytes("Float.array.blit"),
     cst_Float_Array_fill=caml_string_of_jsbytes("Float.Array.fill"),
     cst_Float_Array_sub=caml_string_of_jsbytes("Float.Array.sub"),
     cst_Float_Array_concat=caml_string_of_jsbytes("Float.Array.concat"),
     cst_Float_Array_init=caml_string_of_jsbytes("Float.Array.init"),
     cst_Stdlib_Float_Array_Bottom=
      caml_string_of_jsbytes("Stdlib.Float.Array.Bottom"),
     cst_d=caml_string_of_jsbytes("%d"),
     cst_d$0=caml_string_of_jsbytes("%d"),
     zero$2=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     one$2=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     minus_one$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     min_int$2=runtime.caml_int64_create_lo_mi_hi(0,0,32768),
     max_int$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767),
     cst_d$1=caml_string_of_jsbytes("%d"),
     cst_Lexing_lex_refill_cannot_g=
      caml_string_of_jsbytes("Lexing.lex_refill: cannot grow buffer"),
     dummy_pos=[0,caml_string_of_jsbytes(""),0,0,-1],
     zero_pos=[0,caml_string_of_jsbytes(""),1,0,0],
     cst_syntax_error=caml_string_of_jsbytes("syntax error"),
     cst_Stdlib_Parsing_YYexit=caml_string_of_jsbytes("Stdlib.Parsing.YYexit"),
     cst_Stdlib_Parsing_Parse_error=
      caml_string_of_jsbytes("Stdlib.Parsing.Parse_error"),
     cst_Set_remove_min_elt=caml_string_of_jsbytes("Set.remove_min_elt"),
     cst_Set_bal=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$0=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$1=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$2=caml_string_of_jsbytes("Set.bal"),
     cst_Map_remove_min_elt=caml_string_of_jsbytes("Map.remove_min_elt"),
     cst_Map_bal=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$0=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$1=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$2=caml_string_of_jsbytes("Map.bal"),
     cst_Stdlib_Stack_Empty=caml_string_of_jsbytes("Stdlib.Stack.Empty"),
     cst_Stdlib_Queue_Empty=caml_string_of_jsbytes("Stdlib.Queue.Empty"),
     cst_count=caml_string_of_jsbytes("{count = "),
     cst_data=caml_string_of_jsbytes("; data = "),
     cst$6=caml_string_of_jsbytes("}"),
     cst_Sempty=caml_string_of_jsbytes("Sempty"),
     cst_Scons=caml_string_of_jsbytes("Scons ("),
     cst$7=caml_string_of_jsbytes(", "),
     cst$8=caml_string_of_jsbytes(")"),
     cst_Sapp=caml_string_of_jsbytes("Sapp ("),
     cst$9=caml_string_of_jsbytes(", "),
     cst$10=caml_string_of_jsbytes(")"),
     cst_Slazy=caml_string_of_jsbytes("Slazy"),
     cst_Sgen=caml_string_of_jsbytes("Sgen"),
     cst_Sbuffio=caml_string_of_jsbytes("Sbuffio"),
     cst_Stdlib_Stream_Failure=caml_string_of_jsbytes("Stdlib.Stream.Failure"),
     cst_Stdlib_Stream_Error=caml_string_of_jsbytes("Stdlib.Stream.Error"),
     cst_Buffer_truncate=caml_string_of_jsbytes("Buffer.truncate"),
     cst_Buffer_add_channel=caml_string_of_jsbytes("Buffer.add_channel"),
     cst_Buffer_add_substring_add_s=
      caml_string_of_jsbytes("Buffer.add_substring/add_subbytes"),
     cst_Buffer_add_cannot_grow_buf=
      caml_string_of_jsbytes("Buffer.add: cannot grow buffer"),
     cst_Buffer_nth=caml_string_of_jsbytes("Buffer.nth"),
     cst_Buffer_blit=caml_string_of_jsbytes("Buffer.blit"),
     cst_Buffer_sub=caml_string_of_jsbytes("Buffer.sub"),
     cst_c=caml_string_of_jsbytes("%c"),
     cst_s=caml_string_of_jsbytes("%s"),
     cst_i=caml_string_of_jsbytes("%i"),
     cst_li=caml_string_of_jsbytes("%li"),
     cst_ni=caml_string_of_jsbytes("%ni"),
     cst_Li=caml_string_of_jsbytes("%Li"),
     cst_f=caml_string_of_jsbytes("%f"),
     cst_B=caml_string_of_jsbytes("%B"),
     cst$21=caml_string_of_jsbytes("%{"),
     cst$22=caml_string_of_jsbytes("%}"),
     cst$23=caml_string_of_jsbytes("%("),
     cst$24=caml_string_of_jsbytes("%)"),
     cst_a=caml_string_of_jsbytes("%a"),
     cst_t$0=caml_string_of_jsbytes("%t"),
     cst$25=caml_string_of_jsbytes("%?"),
     cst_r$0=caml_string_of_jsbytes("%r"),
     cst_r$1=caml_string_of_jsbytes("%_r"),
     cst_u$0=caml_string_of_jsbytes("%u"),
     cst_Printf_bad_conversion=
      caml_string_of_jsbytes("Printf: bad conversion %["),
     cst_Printf_bad_conversion$0=
      caml_string_of_jsbytes("Printf: bad conversion %_"),
     cst$30=caml_string_of_jsbytes("@{"),
     cst$31=caml_string_of_jsbytes("@["),
     cst$32=caml_string_of_jsbytes("@{"),
     cst$33=caml_string_of_jsbytes("@["),
     cst$34=caml_string_of_jsbytes("@{"),
     cst$35=caml_string_of_jsbytes("@["),
     cst_0=caml_string_of_jsbytes("0"),
     cst_padding=caml_string_of_jsbytes("padding"),
     cst_precision=caml_string_of_jsbytes("precision"),
     cst$40=caml_string_of_jsbytes("'*'"),
     cst$38=caml_string_of_jsbytes("'-'"),
     cst_0$2=caml_string_of_jsbytes("'0'"),
     cst$39=caml_string_of_jsbytes("'*'"),
     cst_0$0=caml_string_of_jsbytes("0"),
     cst_0$1=caml_string_of_jsbytes("0"),
     cst_precision$0=caml_string_of_jsbytes("precision"),
     cst_precision$1=caml_string_of_jsbytes("precision"),
     cst$41=caml_string_of_jsbytes("'+'"),
     cst$42=caml_string_of_jsbytes("'#'"),
     cst$43=caml_string_of_jsbytes("' '"),
     cst_padding$0=caml_string_of_jsbytes("`padding'"),
     cst_precision$2=caml_string_of_jsbytes("`precision'"),
     cst$44=caml_string_of_jsbytes("'+'"),
     cst$45=caml_string_of_jsbytes("'_'"),
     sub_format=[0,0,caml_string_of_jsbytes("")],
     formatting_lit=[0,caml_string_of_jsbytes("@;"),1,0],
     cst_digit=caml_string_of_jsbytes("digit"),
     cst_character=caml_string_of_jsbytes("character ')'"),
     cst_character$0=caml_string_of_jsbytes("character '}'"),
     cst$49=caml_string_of_jsbytes("'#'"),
     cst$46=caml_string_of_jsbytes("'+'"),
     cst$47=caml_string_of_jsbytes("'+'"),
     cst$48=caml_string_of_jsbytes("' '"),
     cst$50=caml_string_of_jsbytes("'+'"),
     cst_non_zero_widths_are_unsupp=
      caml_string_of_jsbytes
       ("non-zero widths are unsupported for %c conversions"),
     cst_unexpected_end_of_format=
      caml_string_of_jsbytes("unexpected end of format"),
     cst$36=caml_string_of_jsbytes(""),
     cst$37=caml_string_of_jsbytes(""),
     cst_b$0=caml_string_of_jsbytes("b"),
     cst_h=caml_string_of_jsbytes("h"),
     cst_hov=caml_string_of_jsbytes("hov"),
     cst_hv=caml_string_of_jsbytes("hv"),
     cst_v=caml_string_of_jsbytes("v"),
     cst_nan=caml_string_of_jsbytes("nan"),
     cst_neg_infinity=caml_string_of_jsbytes("neg_infinity"),
     cst_infinity=caml_string_of_jsbytes("infinity"),
     cst$29=caml_string_of_jsbytes("."),
     cst_nd$0=caml_string_of_jsbytes("%+nd"),
     cst_nd$1=caml_string_of_jsbytes("% nd"),
     cst_ni$1=caml_string_of_jsbytes("%+ni"),
     cst_ni$2=caml_string_of_jsbytes("% ni"),
     cst_nx=caml_string_of_jsbytes("%nx"),
     cst_nx$0=caml_string_of_jsbytes("%#nx"),
     cst_nX=caml_string_of_jsbytes("%nX"),
     cst_nX$0=caml_string_of_jsbytes("%#nX"),
     cst_no=caml_string_of_jsbytes("%no"),
     cst_no$0=caml_string_of_jsbytes("%#no"),
     cst_nd=caml_string_of_jsbytes("%nd"),
     cst_ni$0=caml_string_of_jsbytes("%ni"),
     cst_nu=caml_string_of_jsbytes("%nu"),
     cst_ld$0=caml_string_of_jsbytes("%+ld"),
     cst_ld$1=caml_string_of_jsbytes("% ld"),
     cst_li$1=caml_string_of_jsbytes("%+li"),
     cst_li$2=caml_string_of_jsbytes("% li"),
     cst_lx=caml_string_of_jsbytes("%lx"),
     cst_lx$0=caml_string_of_jsbytes("%#lx"),
     cst_lX=caml_string_of_jsbytes("%lX"),
     cst_lX$0=caml_string_of_jsbytes("%#lX"),
     cst_lo=caml_string_of_jsbytes("%lo"),
     cst_lo$0=caml_string_of_jsbytes("%#lo"),
     cst_ld=caml_string_of_jsbytes("%ld"),
     cst_li$0=caml_string_of_jsbytes("%li"),
     cst_lu=caml_string_of_jsbytes("%lu"),
     cst_Ld$0=caml_string_of_jsbytes("%+Ld"),
     cst_Ld$1=caml_string_of_jsbytes("% Ld"),
     cst_Li$1=caml_string_of_jsbytes("%+Li"),
     cst_Li$2=caml_string_of_jsbytes("% Li"),
     cst_Lx=caml_string_of_jsbytes("%Lx"),
     cst_Lx$0=caml_string_of_jsbytes("%#Lx"),
     cst_LX=caml_string_of_jsbytes("%LX"),
     cst_LX$0=caml_string_of_jsbytes("%#LX"),
     cst_Lo=caml_string_of_jsbytes("%Lo"),
     cst_Lo$0=caml_string_of_jsbytes("%#Lo"),
     cst_Ld=caml_string_of_jsbytes("%Ld"),
     cst_Li$0=caml_string_of_jsbytes("%Li"),
     cst_Lu=caml_string_of_jsbytes("%Lu"),
     cst_d$3=caml_string_of_jsbytes("%+d"),
     cst_d$4=caml_string_of_jsbytes("% d"),
     cst_i$1=caml_string_of_jsbytes("%+i"),
     cst_i$2=caml_string_of_jsbytes("% i"),
     cst_x=caml_string_of_jsbytes("%x"),
     cst_x$0=caml_string_of_jsbytes("%#x"),
     cst_X$0=caml_string_of_jsbytes("%X"),
     cst_X$1=caml_string_of_jsbytes("%#X"),
     cst_o=caml_string_of_jsbytes("%o"),
     cst_o$0=caml_string_of_jsbytes("%#o"),
     cst_d$2=caml_string_of_jsbytes("%d"),
     cst_i$0=caml_string_of_jsbytes("%i"),
     cst_u=caml_string_of_jsbytes("%u"),
     cst$26=caml_string_of_jsbytes("%!"),
     cst$27=caml_string_of_jsbytes("@{"),
     cst$28=caml_string_of_jsbytes("@["),
     cst_0c=caml_string_of_jsbytes("0c"),
     cst$20=caml_string_of_jsbytes("%%"),
     cst$12=caml_string_of_jsbytes("@]"),
     cst$13=caml_string_of_jsbytes("@}"),
     cst$14=caml_string_of_jsbytes("@?"),
     cst$15=caml_string_of_jsbytes("@\n"),
     cst$16=caml_string_of_jsbytes("@."),
     cst$17=caml_string_of_jsbytes("@@"),
     cst$18=caml_string_of_jsbytes("@%"),
     cst$19=caml_string_of_jsbytes("@"),
     cst$11=caml_string_of_jsbytes(".*"),
     cst_CamlinternalFormat_Type_mi=
      caml_string_of_jsbytes("CamlinternalFormat.Type_mismatch"),
     cst$58=caml_string_of_jsbytes(""),
     cst$59=caml_string_of_jsbytes("\n"),
     cst_a_boolean=caml_string_of_jsbytes("a boolean"),
     cst_an_integer=caml_string_of_jsbytes("an integer"),
     cst_an_integer$0=caml_string_of_jsbytes("an integer"),
     cst_a_float=caml_string_of_jsbytes("a float"),
     cst_a_float$0=caml_string_of_jsbytes("a float"),
     cst$55=caml_string_of_jsbytes(""),
     cst$56=caml_string_of_jsbytes(" "),
     cst$57=caml_string_of_jsbytes(""),
     cst_one_of=caml_string_of_jsbytes("one of: "),
     cst_Arg_Expand_is_is_only_allo=
      caml_string_of_jsbytes
       ("Arg.Expand is is only allowed with Arg.parse_and_expand_argv_dynamic"),
     cst_no_argument=caml_string_of_jsbytes("no argument"),
     cst$54=caml_string_of_jsbytes("(?)"),
     cst_help$3=caml_string_of_jsbytes("--help"),
     cst_help$4=caml_string_of_jsbytes("-help"),
     cst_help$2=caml_string_of_jsbytes("-help"),
     cst_Display_this_list_of_optio=
      caml_string_of_jsbytes(" Display this list of options"),
     cst_help=caml_string_of_jsbytes("-help"),
     cst_help$1=caml_string_of_jsbytes("--help"),
     cst_Display_this_list_of_optio$0=
      caml_string_of_jsbytes(" Display this list of options"),
     cst_help$0=caml_string_of_jsbytes("--help"),
     cst$51=caml_string_of_jsbytes("}"),
     cst$52=caml_string_of_jsbytes("|"),
     cst$53=caml_string_of_jsbytes("{"),
     cst_none=caml_string_of_jsbytes("<none>"),
     cst_Stdlib_Arg_Bad=caml_string_of_jsbytes("Stdlib.Arg.Bad"),
     cst_Stdlib_Arg_Help=caml_string_of_jsbytes("Stdlib.Arg.Help"),
     cst_Stdlib_Arg_Stop=caml_string_of_jsbytes("Stdlib.Arg.Stop"),
     cst$61=caml_string_of_jsbytes(""),
     cst_Fatal_error_out_of_memory_=
      caml_string_of_jsbytes
       ("Fatal error: out of memory in uncaught exception handler"),
     cst$65=caml_string_of_jsbytes(""),
     cst_Program_not_linked_with_g_=
      caml_string_of_jsbytes
       ("(Program not linked with -g, cannot print stack backtrace)\n"),
     cst_Raised_at=caml_string_of_jsbytes("Raised at"),
     cst_Re_raised_at=caml_string_of_jsbytes("Re-raised at"),
     cst_Raised_by_primitive_operat=
      caml_string_of_jsbytes("Raised by primitive operation at"),
     cst_Called_from=caml_string_of_jsbytes("Called from"),
     cst_inlined=caml_string_of_jsbytes(" (inlined)"),
     cst$64=caml_string_of_jsbytes(""),
     partial=[4,0,0,0,[12,45,[4,0,0,0,0]]],
     cst_Out_of_memory=caml_string_of_jsbytes("Out of memory"),
     cst_Stack_overflow=caml_string_of_jsbytes("Stack overflow"),
     cst_Pattern_matching_failed=
      caml_string_of_jsbytes("Pattern matching failed"),
     cst_Assertion_failed=caml_string_of_jsbytes("Assertion failed"),
     cst_Undefined_recursive_module=
      caml_string_of_jsbytes("Undefined recursive module"),
     cst$62=caml_string_of_jsbytes(""),
     cst$63=caml_string_of_jsbytes(""),
     cst$60=caml_string_of_jsbytes("_"),
     locfmt=
      [0,
       [11,
        caml_string_of_jsbytes('File "'),
        [2,
         0,
         [11,
          caml_string_of_jsbytes('", line '),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,
             0,
             0,
             0,
             [12,45,[4,0,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]]]]]]],
       caml_string_of_jsbytes('File "%s", line %d, characters %d-%d: %s')],
     cst_Fun_Finally_raised=caml_string_of_jsbytes("Fun.Finally_raised: "),
     cst_Stdlib_Fun_Finally_raised=
      caml_string_of_jsbytes("Stdlib.Fun.Finally_raised"),
     cst_Digest_from_hex$0=caml_string_of_jsbytes("Digest.from_hex"),
     cst_Digest_from_hex=caml_string_of_jsbytes("Digest.from_hex"),
     cst_Digest_to_hex=caml_string_of_jsbytes("Digest.to_hex"),
     cst_Digest_substring=caml_string_of_jsbytes("Digest.substring"),
     cst_Random_int64=caml_string_of_jsbytes("Random.int64"),
     cst_Random_int32=caml_string_of_jsbytes("Random.int32"),
     cst_Random_full_int=caml_string_of_jsbytes("Random.full_int"),
     cst_Random_int=caml_string_of_jsbytes("Random.int"),
     cst_x$1=caml_string_of_jsbytes("x"),
     cst_Hashtbl_unsupported_hash_t=
      caml_string_of_jsbytes("Hashtbl: unsupported hash table format"),
     cst_OCAMLRUNPARAM=caml_string_of_jsbytes("OCAMLRUNPARAM"),
     cst_CAMLRUNPARAM=caml_string_of_jsbytes("CAMLRUNPARAM"),
     cst$66=caml_string_of_jsbytes(""),
     cst_Weak_Make_hash_bucket_cann=
      caml_string_of_jsbytes("Weak.Make: hash bucket cannot grow more"),
     cst_Weak_fill=caml_string_of_jsbytes("Weak.fill"),
     cst_Weak_blit=caml_string_of_jsbytes("Weak.blit"),
     cst_Weak_check=caml_string_of_jsbytes("Weak.check"),
     cst_Weak_get_copy=caml_string_of_jsbytes("Weak.get_copy"),
     cst_Weak_get=caml_string_of_jsbytes("Weak.get"),
     cst_Weak_set=caml_string_of_jsbytes("Weak.set"),
     cst_Weak_create=caml_string_of_jsbytes("Weak.create"),
     cst$84=caml_string_of_jsbytes(""),
     cst$85=caml_string_of_jsbytes(""),
     cst$83=caml_string_of_jsbytes("."),
     cst$80=caml_string_of_jsbytes(">"),
     cst$81=caml_string_of_jsbytes("<\/"),
     cst$82=caml_string_of_jsbytes(""),
     cst$77=caml_string_of_jsbytes(">"),
     cst$78=caml_string_of_jsbytes("<"),
     cst$79=caml_string_of_jsbytes(""),
     cst$76=caml_string_of_jsbytes("\n"),
     cst_Format_pp_set_geometry=
      caml_string_of_jsbytes("Format.pp_set_geometry: "),
     cst$72=caml_string_of_jsbytes(""),
     cst$73=caml_string_of_jsbytes(""),
     cst$74=caml_string_of_jsbytes(""),
     cst$75=caml_string_of_jsbytes(""),
     cst$68=caml_string_of_jsbytes(""),
     cst$69=caml_string_of_jsbytes(""),
     cst$70=caml_string_of_jsbytes(""),
     cst$71=caml_string_of_jsbytes(""),
     cst$67=caml_string_of_jsbytes(""),
     cst_Stdlib_Format_String_tag=
      caml_string_of_jsbytes("Stdlib.Format.String_tag"),
     cst_end_of_input_not_found=
      caml_string_of_jsbytes("end of input not found"),
     cst_scanf_bad_conversion_a=
      caml_string_of_jsbytes('scanf: bad conversion "%a"'),
     cst_scanf_bad_conversion_t=
      caml_string_of_jsbytes('scanf: bad conversion "%t"'),
     cst_scanf_missing_reader=caml_string_of_jsbytes("scanf: missing reader"),
     cst_scanf_bad_conversion_custo=
      caml_string_of_jsbytes('scanf: bad conversion "%?" (custom converter)'),
     cst_scanf_bad_conversion=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$0=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$1=
      caml_string_of_jsbytes('scanf: bad conversion "%-"'),
     cst_scanf_bad_conversion$2=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst$91=caml_string_of_jsbytes('"'),
     cst$92=caml_string_of_jsbytes('"'),
     cst$89=caml_string_of_jsbytes('"'),
     cst$90=caml_string_of_jsbytes('"'),
     cst$88=caml_string_of_jsbytes('"'),
     cst_in_format=caml_string_of_jsbytes(' in format "'),
     cst_an=caml_string_of_jsbytes("an"),
     cst_x$2=caml_string_of_jsbytes("x"),
     cst_nfinity=caml_string_of_jsbytes("nfinity"),
     cst_digits=caml_string_of_jsbytes("digits"),
     cst_decimal_digits=caml_string_of_jsbytes("decimal digits"),
     cst_0b=caml_string_of_jsbytes("0b"),
     cst_0o=caml_string_of_jsbytes("0o"),
     cst_0u=caml_string_of_jsbytes("0u"),
     cst_0x=caml_string_of_jsbytes("0x"),
     cst_false$3=caml_string_of_jsbytes("false"),
     cst_true$3=caml_string_of_jsbytes("true"),
     cst_not_a_valid_float_in_hexad=
      caml_string_of_jsbytes("not a valid float in hexadecimal notation"),
     cst_no_dot_or_exponent_part_fo=
      caml_string_of_jsbytes("no dot or exponent part found in float token"),
     cst$87=caml_string_of_jsbytes("-"),
     cst_unnamed_function=caml_string_of_jsbytes("unnamed function"),
     cst_unnamed_character_string=
      caml_string_of_jsbytes("unnamed character string"),
     cst_unnamed_Stdlib_input_chann=
      caml_string_of_jsbytes("unnamed Stdlib input channel"),
     cst$86=caml_string_of_jsbytes("-"),
     cst_Stdlib_Scanf_Scan_failure=
      caml_string_of_jsbytes("Stdlib.Scanf.Scan_failure"),
     cst_binary=caml_string_of_jsbytes("binary"),
     cst_octal=caml_string_of_jsbytes("octal"),
     cst_hexadecimal=caml_string_of_jsbytes("hexadecimal"),
     cst_a_Char=caml_string_of_jsbytes("a Char"),
     cst_a_String=caml_string_of_jsbytes("a String"),
     cst$93=caml_string_of_jsbytes(""),
     cst_CamlinternalMod_update_mod=
      caml_string_of_jsbytes("CamlinternalMod.update_mod: not a module"),
     cst_CamlinternalMod_init_mod_n=
      caml_string_of_jsbytes("CamlinternalMod.init_mod: not a module"),
     cst$94=caml_string_of_jsbytes(""),
     cst$95=caml_string_of_jsbytes(""),
     cst$96=caml_string_of_jsbytes(""),
     cst$97=caml_string_of_jsbytes(""),
     cst$99=caml_string_of_jsbytes(""),
     cst$98=caml_string_of_jsbytes(""),
     cst_Illegal_character=caml_string_of_jsbytes("Illegal character "),
     cst_Filename_chop_extension=
      caml_string_of_jsbytes("Filename.chop_extension"),
     cst$127=caml_string_of_jsbytes(""),
     cst_Filename_chop_suffix=caml_string_of_jsbytes("Filename.chop_suffix"),
     cst$126=caml_string_of_jsbytes(""),
     cst_2_1$0=caml_string_of_jsbytes(" 2>&1"),
     cst_2$0=caml_string_of_jsbytes(" 2>"),
     cst$125=caml_string_of_jsbytes(""),
     cst$117=caml_string_of_jsbytes(" >"),
     cst$124=caml_string_of_jsbytes(""),
     cst$118=caml_string_of_jsbytes(" <"),
     cst$123=caml_string_of_jsbytes(""),
     cst$119=caml_string_of_jsbytes(" "),
     cst$120=caml_string_of_jsbytes(" "),
     cst$121=caml_string_of_jsbytes('"'),
     cst$122=caml_string_of_jsbytes(""),
     cst_Filename_quote_command_bad=
      caml_string_of_jsbytes("Filename.quote_command: bad file name "),
     cst$115=caml_string_of_jsbytes('"'),
     cst$116=caml_string_of_jsbytes('"'),
     cst$113=caml_string_of_jsbytes("./"),
     cst$112=caml_string_of_jsbytes(".\\"),
     cst$111=caml_string_of_jsbytes("../"),
     cst$110=caml_string_of_jsbytes("..\\"),
     cst_2_1=caml_string_of_jsbytes(" 2>&1"),
     cst_2=caml_string_of_jsbytes(" 2>"),
     cst$109=caml_string_of_jsbytes(""),
     cst$104=caml_string_of_jsbytes(" >"),
     cst$108=caml_string_of_jsbytes(""),
     cst$105=caml_string_of_jsbytes(" <"),
     cst$107=caml_string_of_jsbytes(""),
     cst$106=caml_string_of_jsbytes(" "),
     cst$103=caml_string_of_jsbytes("./"),
     cst$102=caml_string_of_jsbytes("../"),
     cst$101=caml_string_of_jsbytes(""),
     cst$100=caml_string_of_jsbytes(""),
     null$0=caml_string_of_jsbytes("/dev/null"),
     current_dir_name=caml_string_of_jsbytes("."),
     parent_dir_name=caml_string_of_jsbytes(".."),
     dir_sep=caml_string_of_jsbytes("/"),
     cst_TMPDIR=caml_string_of_jsbytes("TMPDIR"),
     cst_tmp=caml_string_of_jsbytes("/tmp"),
     quotequote=caml_string_of_jsbytes("'\\''"),
     null$1=caml_string_of_jsbytes("NUL"),
     current_dir_name$0=caml_string_of_jsbytes("."),
     parent_dir_name$0=caml_string_of_jsbytes(".."),
     dir_sep$0=caml_string_of_jsbytes("\\"),
     cst_TEMP=caml_string_of_jsbytes("TEMP"),
     cst$114=caml_string_of_jsbytes("."),
     null$2=caml_string_of_jsbytes("/dev/null"),
     current_dir_name$1=caml_string_of_jsbytes("."),
     parent_dir_name$1=caml_string_of_jsbytes(".."),
     dir_sep$1=caml_string_of_jsbytes("/"),
     cst_Cygwin=caml_string_of_jsbytes("Cygwin"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     zero$4=[254,0.,0.],
     one$4=[254,1.,0.],
     i=[254,0.,1.],
     cst_Bigarray_array3_of_genarra=
      caml_string_of_jsbytes("Bigarray.array3_of_genarray"),
     cst_Bigarray_array2_of_genarra=
      caml_string_of_jsbytes("Bigarray.array2_of_genarray"),
     cst_Bigarray_array1_of_genarra=
      caml_string_of_jsbytes("Bigarray.array1_of_genarray"),
     cst_Bigarray_array0_of_genarra=
      caml_string_of_jsbytes("Bigarray.array0_of_genarray"),
     cst_Bigarray_Array3_of_array_n=
      caml_string_of_jsbytes("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array3_of_array_n$0=
      caml_string_of_jsbytes("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array2_of_array_n=
      caml_string_of_jsbytes("Bigarray.Array2.of_array: non-rectangular data"),
     cst_In_channel_input_all_chann=
      caml_string_of_jsbytes
       ("In_channel.input_all: channel content is larger than maximum string length"),
     Invalid_argument=global_data.Invalid_argument,
     Failure=global_data.Failure,
     Match_failure=global_data.Match_failure,
     Assert_failure=global_data.Assert_failure,
     Not_found=global_data.Not_found,
     Out_of_memory=global_data.Out_of_memory,
     Stack_overflow=global_data.Stack_overflow,
     Sys_error=global_data.Sys_error,
     End_of_file=global_data.End_of_file,
     Division_by_zero=global_data.Division_by_zero,
     Sys_blocked_io=global_data.Sys_blocked_io,
     Undefined_recursive_module=global_data.Undefined_recursive_module,
     _l_=[0,0,[0,6,0]],
     _k_=[0,0,[0,7,0]],
     _j_=[0,1,[0,3,[0,4,[0,6,0]]]],
     _i_=[0,1,[0,3,[0,4,[0,7,0]]]],
     _g_=[0,1],
     _h_=[0,0],
     _a_=runtime.caml_int64_create_lo_mi_hi(0,0,32752),
     _b_=runtime.caml_int64_create_lo_mi_hi(0,0,65520),
     _c_=runtime.caml_int64_create_lo_mi_hi(1,0,32752),
     _d_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32751),
     _e_=runtime.caml_int64_create_lo_mi_hi(0,0,16),
     _f_=runtime.caml_int64_create_lo_mi_hi(0,0,15536),
     _n_=[0,caml_string_of_jsbytes("obj.ml"),95,4],
     _r_=[0,caml_string_of_jsbytes("seq.ml"),596,4],
     _x_=[0,caml_string_of_jsbytes("uchar.ml"),88,18],
     _w_=[0,caml_string_of_jsbytes("uchar.ml"),91,7],
     _v_=[0,caml_string_of_jsbytes("uchar.ml"),80,18],
     _u_=[0,caml_string_of_jsbytes("uchar.ml"),85,7],
     _A_=[0,0,0],
     _G_=[0,caml_string_of_jsbytes("bytes.ml"),808,20],
     _F_=[0,caml_string_of_jsbytes("bytes.ml"),819,9],
     _E_=[0,caml_string_of_jsbytes("bytes.ml"),754,20],
     _D_=[0,caml_string_of_jsbytes("bytes.ml"),765,9],
     _C_=[0,caml_string_of_jsbytes("bytes.ml"),642,20],
     _B_=[0,caml_string_of_jsbytes("bytes.ml"),667,9],
     _H_=[0,caml_string_of_jsbytes("array.ml"),322,4],
     _J_=[0,caml_string_of_jsbytes("float.ml"),395,6],
     _I_=[0,caml_string_of_jsbytes("float.ml"),222,14],
     _U_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     _T_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _S_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _R_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _V_=[0,0,0,0],
     _W_=[0,0,0],
     _X_=[0,caml_string_of_jsbytes("set.ml"),570,18],
     _Y_=[0,0,0,0],
     _Z_=[0,caml_string_of_jsbytes("map.ml"),400,10],
     ___=[0,0,0],
     _$_=[0,caml_string_of_jsbytes("stream.ml"),53,12],
     _aa_=[0,0],
     _ab_=[0,caml_string_of_jsbytes("stream.ml"),82,12],
     _af_=[0,caml_string_of_jsbytes("buffer.ml"),231,9],
     _ae_=[0,caml_string_of_jsbytes("buffer.ml"),212,2],
     _ad_=[0,caml_string_of_jsbytes("buffer.ml"),93,2],
     _ac_=[0,caml_string_of_jsbytes("buffer.ml"),94,2],
     _ah_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),850,23],
     _as_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),814,21],
     _ak_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),815,21],
     _at_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),818,21],
     _al_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),819,21],
     _au_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),822,19],
     _am_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),823,19],
     _av_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),826,22],
     _an_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),827,22],
     _aw_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),831,30],
     _ao_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),832,30],
     _aq_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),836,26],
     _ai_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),837,26],
     _ar_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),846,28],
     _aj_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),847,28],
     _ap_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),851,23],
     _ay_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1558,4],
     _az_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1626,39],
     _aA_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1649,31],
     _aB_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1650,31],
     _aC_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1830,8],
     _a6_=
      [0,
       [11,
        caml_string_of_jsbytes("bad input: format type mismatch between "),
        [3,0,[11,caml_string_of_jsbytes(" and "),[3,0,0]]]],
       caml_string_of_jsbytes
        ("bad input: format type mismatch between %S and %S")],
     _a5_=
      [0,
       [11,
        caml_string_of_jsbytes("bad input: format type mismatch between "),
        [3,0,[11,caml_string_of_jsbytes(" and "),[3,0,0]]]],
       caml_string_of_jsbytes
        ("bad input: format type mismatch between %S and %S")],
     _aI_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,0,0,0,[11,caml_string_of_jsbytes(", duplicate flag "),[1,0]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, duplicate flag %C")],
     _aJ_=[0,1,0],
     _aK_=[0,0],
     _aL_=[1,0],
     _aM_=[1,1],
     _aO_=[1,1],
     _aN_=[1,1],
     _aS_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", flag "),
            [1,
             [11,
              caml_string_of_jsbytes(" is only allowed after the '"),
              [12,
               37,
               [11,
                caml_string_of_jsbytes("', before padding and precision"),
                0]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision")],
     _aP_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(', invalid conversion "'),
            [12,37,[0,[12,34,0]]]]]]]],
       caml_string_of_jsbytes
        ('invalid format %S: at character number %d, invalid conversion "%%%c"')],
     _aQ_=[0,0],
     _aR_=[0,0],
     _aT_=[0,[12,64,0]],
     _aU_=[0,caml_string_of_jsbytes("@ "),1,0],
     _aV_=[0,caml_string_of_jsbytes("@,"),0,0],
     _aW_=[2,60],
     _aX_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": '"),
          [12,
           37,
           [11,
            caml_string_of_jsbytes
             ("' alone is not accepted in character sets, use "),
            [12,
             37,
             [12,
              37,
              [11,
               caml_string_of_jsbytes(" instead at position "),
               [4,0,0,0,[12,46,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d.")],
     _aY_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": integer "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(" is greater than the limit "),
            [4,0,0,0,0]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: integer %d is greater than the limit %d")],
     _aZ_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2837,11],
     _a0_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(': unclosed sub-format, expected "'),
          [12,
           37,
           [0,
            [11,caml_string_of_jsbytes('" at character number '),[4,0,0,0,0]]]]]]],
       caml_string_of_jsbytes
        ('invalid format %S: unclosed sub-format, expected "%%%c" at character number %d')],
     _a1_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2899,34],
     _a2_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2935,28],
     _a3_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2957,11],
     _a4_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", "),
            [2,
             0,
             [11,
              caml_string_of_jsbytes(" is incompatible with '"),
              [0,[11,caml_string_of_jsbytes("' in sub-format "),[3,0,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S")],
     _aH_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", "),
            [2,0,[11,caml_string_of_jsbytes(" expected, read "),[1,0]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, %s expected, read %C")],
     _aG_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", '"),
            [0,[11,caml_string_of_jsbytes("' without "),[2,0,0]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, '%c' without %s")],
     _aF_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,0,0,0,[11,caml_string_of_jsbytes(", "),[2,0,0]]]]]],
       caml_string_of_jsbytes("invalid format %S: at character number %d, %s")],
     _aE_=
      [0,
       [11,caml_string_of_jsbytes("invalid box description "),[3,0,0]],
       caml_string_of_jsbytes("invalid box description %S")],
     _aD_=[0,0,4],
     _ax_=[0,103],
     _ag_=[0,0,0],
     _bq_=[0,[2,0,[0,0]],caml_string_of_jsbytes("%s%c")],
     _bk_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _bl_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _bi_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _bj_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _bg_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _bh_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _ba_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": unknown option '"),
         [2,0,[11,caml_string_of_jsbytes("'.\n"),0]]]],
       caml_string_of_jsbytes("%s: unknown option '%s'.\n")],
     _bd_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": wrong argument '"),
         [2,
          0,
          [11,
           caml_string_of_jsbytes("'; option '"),
           [2,
            0,
            [11,
             caml_string_of_jsbytes("' expects "),
             [2,0,[11,caml_string_of_jsbytes(".\n"),0]]]]]]]],
       caml_string_of_jsbytes
        ("%s: wrong argument '%s'; option '%s' expects %s.\n")],
     _be_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": option '"),
         [2,0,[11,caml_string_of_jsbytes("' needs an argument.\n"),0]]]],
       caml_string_of_jsbytes("%s: option '%s' needs an argument.\n")],
     _bf_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [2,0,[11,caml_string_of_jsbytes(".\n"),0]]]],
       caml_string_of_jsbytes("%s: %s.\n")],
     _bb_=[0,caml_string_of_jsbytes("-help")],
     _bc_=[0,caml_string_of_jsbytes("--help")],
     _a$_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a__=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _a9_=[0,caml_string_of_jsbytes("-help")],
     _a7_=
      [0,
       [11,caml_string_of_jsbytes("  "),[2,0,[12,32,[2,0,[12,10,0]]]]],
       caml_string_of_jsbytes("  %s %s\n")],
     _a8_=
      [0,
       [11,caml_string_of_jsbytes("  "),[2,0,[12,32,[2,0,[2,0,[12,10,0]]]]]],
       caml_string_of_jsbytes("  %s %s%s\n")],
     _bv_=
      [0,
       [11,caml_string_of_jsbytes(", "),[2,0,[2,0,0]]],
       caml_string_of_jsbytes(", %s%s")],
     _bH_=
      [0,
       [11,caml_string_of_jsbytes("Fatal error: exception "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Fatal error: exception %s\n")],
     _bI_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Fatal error in uncaught exception handler: exception "),
        [2,0,[12,10,0]]],
       caml_string_of_jsbytes
        ("Fatal error in uncaught exception handler: exception %s\n")],
     _bG_=
      [0,
       [11,caml_string_of_jsbytes("Fatal error: exception "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Fatal error: exception %s\n")],
     _bE_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _bC_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _bD_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("(Program not linked with -g, cannot print stack backtrace)\n"),
        0],
       caml_string_of_jsbytes
        ("(Program not linked with -g, cannot print stack backtrace)\n")],
     _bA_=
      [0,
       [2,
        0,
        [12,
         32,
         [2,
          0,
          [11,
           caml_string_of_jsbytes(' in file "'),
           [2,
            0,
            [12,
             34,
             [2,
              0,
              [11,
               caml_string_of_jsbytes(", line "),
               [4,0,0,0,[11,caml_string_of_jsbytes(", characters "),partial]]]]]]]]]],
       caml_string_of_jsbytes
        ('%s %s in file "%s"%s, line %d, characters %d-%d')],
     _bB_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(" unknown location"),0]],
       caml_string_of_jsbytes("%s unknown location")],
     _bz_=
      [0,
       [11,caml_string_of_jsbytes("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Uncaught exception: %s\n")],
     _by_=
      [0,
       [11,caml_string_of_jsbytes("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Uncaught exception: %s\n")],
     _bw_=[0,[12,40,[2,0,[2,0,[12,41,0]]]],caml_string_of_jsbytes("(%s%s)")],
     _bx_=[0,[12,40,[2,0,[12,41,0]]],caml_string_of_jsbytes("(%s)")],
     _bu_=[0,[4,0,0,0,0],caml_string_of_jsbytes("%d")],
     _bt_=[0,[3,0,0],caml_string_of_jsbytes("%S")],
     _bF_=
      [0,
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes
        ("(Cannot print locations:\n bytecode executable program file not found)"),
       caml_string_of_jsbytes
        ("(Cannot print locations:\n bytecode executable program file appears to be corrupt)"),
       caml_string_of_jsbytes
        ("(Cannot print locations:\n bytecode executable program file has wrong magic number)"),
       caml_string_of_jsbytes
        ("(Cannot print locations:\n bytecode executable program file cannot be opened;\n -- too many open files. Try running with OCAMLRUNPARAM=b=2)")],
     _bP_=
      [0,
       [11,
        caml_string_of_jsbytes("minor_collections:      "),
        [4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("minor_collections:      %d\n")],
     _bQ_=
      [0,
       [11,
        caml_string_of_jsbytes("major_collections:      "),
        [4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("major_collections:      %d\n")],
     _bR_=
      [0,
       [11,
        caml_string_of_jsbytes("compactions:            "),
        [4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("compactions:            %d\n")],
     _bS_=
      [0,
       [11,
        caml_string_of_jsbytes("forced_major_collections: "),
        [4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("forced_major_collections: %d\n")],
     _bT_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _bU_=[0,[8,[0,0,0],0,[0,0],0],caml_string_of_jsbytes("%.0f")],
     _bV_=
      [0,
       [11,
        caml_string_of_jsbytes("minor_words:    "),
        [8,[0,0,0],[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("minor_words:    %*.0f\n")],
     _bW_=
      [0,
       [11,
        caml_string_of_jsbytes("promoted_words: "),
        [8,[0,0,0],[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("promoted_words: %*.0f\n")],
     _bX_=
      [0,
       [11,
        caml_string_of_jsbytes("major_words:    "),
        [8,[0,0,0],[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("major_words:    %*.0f\n")],
     _bY_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _bZ_=[0,[4,0,0,0,0],caml_string_of_jsbytes("%d")],
     _b0_=
      [0,
       [11,caml_string_of_jsbytes("top_heap_words: "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("top_heap_words: %*d\n")],
     _b1_=
      [0,
       [11,caml_string_of_jsbytes("heap_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("heap_words:     %*d\n")],
     _b2_=
      [0,
       [11,caml_string_of_jsbytes("live_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("live_words:     %*d\n")],
     _b3_=
      [0,
       [11,caml_string_of_jsbytes("free_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("free_words:     %*d\n")],
     _b4_=
      [0,
       [11,caml_string_of_jsbytes("largest_free:   "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("largest_free:   %*d\n")],
     _b5_=
      [0,
       [11,caml_string_of_jsbytes("fragments:      "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("fragments:      %*d\n")],
     _b6_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _b7_=
      [0,
       [11,caml_string_of_jsbytes("live_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("live_blocks: %d\n")],
     _b8_=
      [0,
       [11,caml_string_of_jsbytes("free_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("free_blocks: %d\n")],
     _b9_=
      [0,
       [11,caml_string_of_jsbytes("heap_chunks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("heap_chunks: %d\n")],
     _cf_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _cg_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _ch_=
      [0,
       987910699,
       495797812,
       364182224,
       414272206,
       318284740,
       990407751,
       383018966,
       270373319,
       840823159,
       24560019,
       536292337,
       512266505,
       189156120,
       730249596,
       143776328,
       51606627,
       140166561,
       366354223,
       1003410265,
       700563762,
       981890670,
       913149062,
       526082594,
       1021425055,
       784300257,
       667753350,
       630144451,
       949649812,
       48546892,
       415514493,
       258888527,
       511570777,
       89983870,
       283659902,
       308386020,
       242688715,
       482270760,
       865188196,
       1027664170,
       207196989,
       193777847,
       619708188,
       671350186,
       149669678,
       257044018,
       87658204,
       558145612,
       183450813,
       28133145,
       901332182,
       710253903,
       510646120,
       652377910,
       409934019,
       801085050],
     _ck_=[0,0],
     _cq_=[3,0,3],
     _cp_=[1,caml_string_of_jsbytes("max_indent < 2")],
     _cn_=[1,caml_string_of_jsbytes("margin <= max_indent")],
     _co_=[0,0],
     _cm_=[0,caml_string_of_jsbytes("")],
     _cl_=[0,caml_string_of_jsbytes(""),0,caml_string_of_jsbytes("")],
     _cG_=[0,91],
     _cF_=[0,123],
     _cH_=[0,caml_string_of_jsbytes("scanf.ml"),1453,13],
     _cI_=[0,[3,0,[10,0]],caml_string_of_jsbytes("%S%!")],
     _cE_=[0,37,caml_string_of_jsbytes("")],
     _cD_=
      [0,
       [11,
        caml_string_of_jsbytes("scanf: bad input at char number "),
        [4,3,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]],
       caml_string_of_jsbytes("scanf: bad input at char number %i: %s")],
     _cC_=
      [0,
       [11,
        caml_string_of_jsbytes("the character "),
        [1,[11,caml_string_of_jsbytes(" cannot start a boolean"),0]]],
       caml_string_of_jsbytes("the character %C cannot start a boolean")],
     _cB_=
      [0,
       [11,
        caml_string_of_jsbytes("bad character hexadecimal encoding \\"),
        [0,[0,0]]],
       caml_string_of_jsbytes("bad character hexadecimal encoding \\%c%c")],
     _cA_=
      [0,
       [11,
        caml_string_of_jsbytes("bad character decimal encoding \\"),
        [0,[0,[0,0]]]],
       caml_string_of_jsbytes("bad character decimal encoding \\%c%c%c")],
     _cz_=
      [0,
       [11,
        caml_string_of_jsbytes("character "),
        [1,
         [11,
          caml_string_of_jsbytes(" is not a valid "),
          [2,0,[11,caml_string_of_jsbytes(" digit"),0]]]]],
       caml_string_of_jsbytes("character %C is not a valid %s digit")],
     _cy_=
      [0,
       [11,
        caml_string_of_jsbytes("character "),
        [1,[11,caml_string_of_jsbytes(" is not a decimal digit"),0]]],
       caml_string_of_jsbytes("character %C is not a decimal digit")],
     _cx_=[0,caml_string_of_jsbytes("scanf.ml"),555,9],
     _cw_=
      [0,
       [11,caml_string_of_jsbytes("invalid boolean '"),[2,0,[12,39,0]]],
       caml_string_of_jsbytes("invalid boolean '%s'")],
     _cv_=
      [0,
       [11,
        caml_string_of_jsbytes("looking for "),
        [1,[11,caml_string_of_jsbytes(", found "),[1,0]]]],
       caml_string_of_jsbytes("looking for %C, found %C")],
     _cu_=
      [0,
       [11,
        caml_string_of_jsbytes("scanning of "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" failed: premature end of file occurred before end of token"),
          0]]],
       caml_string_of_jsbytes
        ("scanning of %s failed: premature end of file occurred before end of token")],
     _ct_=
      [0,
       [11,
        caml_string_of_jsbytes("scanning of "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" failed: the specified length was too short for token"),
          0]]],
       caml_string_of_jsbytes
        ("scanning of %s failed: the specified length was too short for token")],
     _cs_=
      [0,
       [11,caml_string_of_jsbytes("illegal escape character "),[1,0]],
       caml_string_of_jsbytes("illegal escape character %C")],
     _cP_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),439,17],
     _cO_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),421,13],
     _cN_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),418,13],
     _cM_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),415,13],
     _cL_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),412,13],
     _cK_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),409,13],
     _cJ_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),281,50],
     _cQ_=[0,caml_string_of_jsbytes("camlinternalMod.ml"),72,5],
     _cR_=[0,caml_string_of_jsbytes("camlinternalMod.ml"),81,2],
     _cU_=[0,0],
     _cT_=[0,0],
     _cS_=[0,0],
     _cZ_=[0,7,0],
     _cY_=[0,1,[0,3,[0,5,0]]],
     _cX_=[0,[2,0,[4,6,[0,2,6],0,[2,0,0]]],caml_string_of_jsbytes("%s%06x%s")],
     _cW_=[0,caml_string_of_jsbytes('"'),0],
     _c0_=[254,0.,0.],
     _c1_=[0,0];
    function erase_rel(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,erase_rel(rest)];
         case 1:var rest$0=param[1];return [1,erase_rel(rest$0)];
         case 2:var rest$1=param[1];return [2,erase_rel(rest$1)];
         case 3:var rest$2=param[1];return [3,erase_rel(rest$2)];
         case 4:var rest$3=param[1];return [4,erase_rel(rest$3)];
         case 5:var rest$4=param[1];return [5,erase_rel(rest$4)];
         case 6:var rest$5=param[1];return [6,erase_rel(rest$5)];
         case 7:var rest$6=param[1];return [7,erase_rel(rest$6)];
         case 8:
          var rest$7=param[2],ty=param[1];return [8,ty,erase_rel(rest$7)];
         case 9:
          var rest$8=param[3],ty1=param[1];
          return [9,ty1,ty1,erase_rel(rest$8)];
         case 10:var rest$9=param[1];return [10,erase_rel(rest$9)];
         case 11:var rest$10=param[1];return [11,erase_rel(rest$10)];
         case 12:var rest$11=param[1];return [12,erase_rel(rest$11)];
         case 13:var rest$12=param[1];return [13,erase_rel(rest$12)];
         default:var rest$13=param[1];return [14,erase_rel(rest$13)]}}
    function concat_fmtty(fmtty1,fmtty2)
     {if(typeof fmtty1 === "number")
       return fmtty2;
      else
       switch(fmtty1[0])
        {case 0:var rest=fmtty1[1];return [0,concat_fmtty(rest,fmtty2)];
         case 1:var rest$0=fmtty1[1];return [1,concat_fmtty(rest$0,fmtty2)];
         case 2:var rest$1=fmtty1[1];return [2,concat_fmtty(rest$1,fmtty2)];
         case 3:var rest$2=fmtty1[1];return [3,concat_fmtty(rest$2,fmtty2)];
         case 4:var rest$3=fmtty1[1];return [4,concat_fmtty(rest$3,fmtty2)];
         case 5:var rest$4=fmtty1[1];return [5,concat_fmtty(rest$4,fmtty2)];
         case 6:var rest$5=fmtty1[1];return [6,concat_fmtty(rest$5,fmtty2)];
         case 7:var rest$6=fmtty1[1];return [7,concat_fmtty(rest$6,fmtty2)];
         case 8:
          var rest$7=fmtty1[2],ty=fmtty1[1];
          return [8,ty,concat_fmtty(rest$7,fmtty2)];
         case 9:
          var rest$8=fmtty1[3],ty2=fmtty1[2],ty1=fmtty1[1];
          return [9,ty1,ty2,concat_fmtty(rest$8,fmtty2)];
         case 10:var rest$9=fmtty1[1];return [10,concat_fmtty(rest$9,fmtty2)];
         case 11:
          var rest$10=fmtty1[1];return [11,concat_fmtty(rest$10,fmtty2)];
         case 12:
          var rest$11=fmtty1[1];return [12,concat_fmtty(rest$11,fmtty2)];
         case 13:
          var rest$12=fmtty1[1];return [13,concat_fmtty(rest$12,fmtty2)];
         default:
          var rest$13=fmtty1[1];return [14,concat_fmtty(rest$13,fmtty2)]}}
    function concat_fmt(fmt1,fmt2)
     {if(typeof fmt1 === "number")
       return fmt2;
      else
       switch(fmt1[0])
        {case 0:var rest=fmt1[1];return [0,concat_fmt(rest,fmt2)];
         case 1:var rest$0=fmt1[1];return [1,concat_fmt(rest$0,fmt2)];
         case 2:
          var rest$1=fmt1[2],pad=fmt1[1];
          return [2,pad,concat_fmt(rest$1,fmt2)];
         case 3:
          var rest$2=fmt1[2],pad$0=fmt1[1];
          return [3,pad$0,concat_fmt(rest$2,fmt2)];
         case 4:
          var rest$3=fmt1[4],prec=fmt1[3],pad$1=fmt1[2],iconv=fmt1[1];
          return [4,iconv,pad$1,prec,concat_fmt(rest$3,fmt2)];
         case 5:
          var rest$4=fmt1[4],prec$0=fmt1[3],pad$2=fmt1[2],iconv$0=fmt1[1];
          return [5,iconv$0,pad$2,prec$0,concat_fmt(rest$4,fmt2)];
         case 6:
          var rest$5=fmt1[4],prec$1=fmt1[3],pad$3=fmt1[2],iconv$1=fmt1[1];
          return [6,iconv$1,pad$3,prec$1,concat_fmt(rest$5,fmt2)];
         case 7:
          var rest$6=fmt1[4],prec$2=fmt1[3],pad$4=fmt1[2],iconv$2=fmt1[1];
          return [7,iconv$2,pad$4,prec$2,concat_fmt(rest$6,fmt2)];
         case 8:
          var rest$7=fmt1[4],prec$3=fmt1[3],pad$5=fmt1[2],fconv=fmt1[1];
          return [8,fconv,pad$5,prec$3,concat_fmt(rest$7,fmt2)];
         case 9:
          var rest$8=fmt1[2],pad$6=fmt1[1];
          return [9,pad$6,concat_fmt(rest$8,fmt2)];
         case 10:var rest$9=fmt1[1];return [10,concat_fmt(rest$9,fmt2)];
         case 11:
          var rest$10=fmt1[2],str=fmt1[1];
          return [11,str,concat_fmt(rest$10,fmt2)];
         case 12:
          var rest$11=fmt1[2],chr=fmt1[1];
          return [12,chr,concat_fmt(rest$11,fmt2)];
         case 13:
          var rest$12=fmt1[3],fmtty=fmt1[2],pad$7=fmt1[1];
          return [13,pad$7,fmtty,concat_fmt(rest$12,fmt2)];
         case 14:
          var rest$13=fmt1[3],fmtty$0=fmt1[2],pad$8=fmt1[1];
          return [14,pad$8,fmtty$0,concat_fmt(rest$13,fmt2)];
         case 15:var rest$14=fmt1[1];return [15,concat_fmt(rest$14,fmt2)];
         case 16:var rest$15=fmt1[1];return [16,concat_fmt(rest$15,fmt2)];
         case 17:
          var rest$16=fmt1[2],fmting_lit=fmt1[1];
          return [17,fmting_lit,concat_fmt(rest$16,fmt2)];
         case 18:
          var rest$17=fmt1[2],fmting_gen=fmt1[1];
          return [18,fmting_gen,concat_fmt(rest$17,fmt2)];
         case 19:var rest$18=fmt1[1];return [19,concat_fmt(rest$18,fmt2)];
         case 20:
          var rest$19=fmt1[3],char_set=fmt1[2],width_opt=fmt1[1];
          return [20,width_opt,char_set,concat_fmt(rest$19,fmt2)];
         case 21:
          var rest$20=fmt1[2],counter=fmt1[1];
          return [21,counter,concat_fmt(rest$20,fmt2)];
         case 22:var rest$21=fmt1[1];return [22,concat_fmt(rest$21,fmt2)];
         case 23:
          var rest$22=fmt1[2],ign=fmt1[1];
          return [23,ign,concat_fmt(rest$22,fmt2)];
         default:
          var rest$23=fmt1[3],f=fmt1[2],arity=fmt1[1];
          return [24,arity,f,concat_fmt(rest$23,fmt2)]}}
    var CamlinternalFormatBasics=[0,concat_fmtty,erase_rel,concat_fmt];
    caml_register_global
     (761,CamlinternalFormatBasics,"CamlinternalFormatBasics");
    function make(v){return [0,v]}
    function get(r){return r[1]}
    function set(r,v){r[1] = v;return 0}
    function exchange(r,v){var cur=r[1];r[1] = v;return cur}
    function compare_and_set(r,seen,v)
     {var cur=r[1];return cur === seen?(r[1] = v,1):0}
    function fetch_and_add(r,n){var cur=r[1];r[1] = cur + n | 0;return cur}
    function incr(r){fetch_and_add(r,1);return 0}
    function decr(r){fetch_and_add(r,-1);return 0}
    var
     include=
      [0,make,get,set,exchange,compare_and_set,fetch_and_add,incr,decr];
    caml_register_global(762,include,"CamlinternalAtomic");
    function failwith(s){throw [0,Failure,s]}
    function invalid_arg(s){throw [0,Invalid_argument,s]}
    var Exit=[248,cst_Stdlib_Exit,caml_fresh_oo_id(0)];
    function min(x,y){return caml_lessequal(x,y)?x:y}
    function max(x,y){return caml_greaterequal(x,y)?x:y}
    function abs(x){return 0 <= x?x:- x | 0}
    function lnot(x){return x ^ -1}
    var
     infinity=caml_int64_float_of_bits(_a_),
     neg_infinity=caml_int64_float_of_bits(_b_),
     nan=caml_int64_float_of_bits(_c_),
     max_float=caml_int64_float_of_bits(_d_),
     min_float=caml_int64_float_of_bits(_e_),
     epsilon=caml_int64_float_of_bits(_f_),
     max_int=2147483647,
     min_int=-2147483648;
    function cat(s1,s2)
     {var
       l1=caml_ml_string_length(s1),
       l2=caml_ml_string_length(s2),
       s=caml_create_bytes(l1 + l2 | 0);
      caml_blit_string(s1,0,s,0,l1);
      caml_blit_string(s2,0,s,l1,l2);
      return caml_string_of_bytes(s)}
    function char_of_int(n)
     {if(0 <= n && ! (255 < n))return n;return invalid_arg(cst_char_of_int)}
    function string_of_bool(b){return b?cst_true:cst_false}
    function bool_of_string(param)
     {return caml_string_notequal(param,cst_false$0)
              ?caml_string_notequal(param,cst_true$0)
                ?invalid_arg(cst_bool_of_string)
                :1
              :0}
    function bool_of_string_opt(param)
     {return caml_string_notequal(param,cst_false$1)
              ?caml_string_notequal(param,cst_true$1)?0:_g_
              :_h_}
    function string_of_int(n){return caml_string_of_jsbytes("" + n)}
    function int_of_string_opt(s)
     {try
       {var _EE_=[0,caml_int_of_string(s)];return _EE_}
      catch(_EF_)
       {_EF_ = caml_wrap_exception(_EF_);
        if(_EF_[1] === Failure)return 0;
        throw _EF_}}
    function valid_float_lexem(s)
     {var l=caml_ml_string_length(s),i=0;
      for(;;)
       {if(l <= i)return cat(s,cst);
        var match=caml_string_get(s,i),switch$0=0;
        if(48 <= match)
         {if(! (58 <= match))switch$0 = 1}
        else
         if(45 === match)switch$0 = 1;
        if(switch$0){var i$0=i + 1 | 0,i=i$0;continue}
        return s}}
    function to_string(f)
     {return valid_float_lexem(caml_format_float(cst_12g,f))}
    function of_string_opt(s)
     {try
       {var _EC_=[0,caml_float_of_string(s)];return _EC_}
      catch(_ED_)
       {_ED_ = caml_wrap_exception(_ED_);
        if(_ED_[1] === Failure)return 0;
        throw _ED_}}
    function append(l1,l2)
     {if(l1){var tl=l1[2],hd=l1[1];return [0,hd,append(tl,l2)]}return l2}
    var
     stdin=caml_ml_open_descriptor_in(0),
     stdout=caml_ml_open_descriptor_out(1),
     stderr=caml_ml_open_descriptor_out(2);
    function open_gen(mode,perm,name)
     {var c=caml_ml_open_descriptor_out(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_text(name){return open_gen(_i_,438,name)}
    function open_bin(name){return open_gen(_j_,438,name)}
    function flush_all(param)
     {function iter(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var l=param$0[2],a=param$0[1];
            try
             {caml_ml_flush(a)}
            catch(_EB_)
             {_EB_ = caml_wrap_exception(_EB_);
              if(_EB_[1] !== Sys_error)throw _EB_;
              var _EA_=_EB_}
            var param$0=l;
            continue}
          return 0}}
      return iter(runtime.caml_ml_out_channels_list(0))}
    function output_bytes(oc,s)
     {return caml_ml_output_bytes(oc,s,0,caml_ml_bytes_length(s))}
    function output_string(oc,s)
     {return caml_ml_output(oc,s,0,caml_ml_string_length(s))}
    function output(oc,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_ml_output_bytes(oc,s,ofs,len);
      return invalid_arg(cst_output)}
    function output_substring(oc,s,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_string_length(s) - len | 0) < ofs))
       return caml_ml_output(oc,s,ofs,len);
      return invalid_arg(cst_output_substring)}
    function output_value(chan,v){return caml_output_value(chan,v,0)}
    function close(oc){caml_ml_flush(oc);return caml_ml_close_channel(oc)}
    function close_noerr(oc)
     {try {caml_ml_flush(oc)}catch(_Ez_){}
      try
       {var _Ex_=caml_ml_close_channel(oc);return _Ex_}
      catch(_Ey_){return 0}}
    function open_gen$0(mode,perm,name)
     {var c=caml_ml_open_descriptor_in(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_text$0(name){return open_gen$0(_k_,0,name)}
    function open_bin$0(name){return open_gen$0(_l_,0,name)}
    function input(ic,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_ml_input(ic,s,ofs,len);
      return invalid_arg(cst_input)}
    function unsafe_really_input(ic,s,ofs,len)
     {var ofs$0=ofs,len$0=len;
      for(;;)
       {if(0 < len$0)
         {var r=caml_ml_input(ic,s,ofs$0,len$0);
          if(0 === r)throw End_of_file;
          var len$1=len$0 - r | 0,ofs$1=ofs$0 + r | 0,ofs$0=ofs$1,len$0=len$1;
          continue}
        return 0}}
    function really_input(ic,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return unsafe_really_input(ic,s,ofs,len);
      return invalid_arg(cst_really_input)}
    function really_input_string(ic,len)
     {var s=caml_create_bytes(len);
      really_input(ic,s,0,len);
      return caml_string_of_bytes(s)}
    function input_line(chan)
     {function build_result(buf,pos,param)
       {var pos$0=pos,param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1],len=caml_ml_bytes_length(hd);
            caml_blit_bytes(hd,0,buf,pos$0 - len | 0,len);
            var pos$1=pos$0 - len | 0,pos$0=pos$1,param$0=tl;
            continue}
          return buf}}
      var accu=0,len=0;
      for(;;)
       {var n=runtime.caml_ml_input_scan_line(chan);
        if(0 === n)
         {if(! accu)throw End_of_file;
          var _Ew_=build_result(caml_create_bytes(len),len,accu)}
        else
         {if(! (0 < n))
           {var beg=caml_create_bytes(- n | 0);
            caml_ml_input(chan,beg,0,- n | 0);
            var len$1=len - n | 0,accu$0=[0,beg,accu],accu=accu$0,len=len$1;
            continue}
          var res=caml_create_bytes(n - 1 | 0);
          caml_ml_input(chan,res,0,n - 1 | 0);
          caml_ml_input_char(chan);
          if(accu)
           var
            len$0=(len + n | 0) - 1 | 0,
            _Ew_=build_result(caml_create_bytes(len$0),len$0,[0,res,accu]);
          else
           var _Ew_=res}
        return caml_string_of_bytes(_Ew_)}}
    function close_noerr$0(ic)
     {try
       {var _Eu_=caml_ml_close_channel(ic);return _Eu_}
      catch(_Ev_){return 0}}
    function print_char(c){return caml_ml_output_char(stdout,c)}
    function print_string(s){return output_string(stdout,s)}
    function print_bytes(s){return output_bytes(stdout,s)}
    function print_int(i)
     {return output_string(stdout,caml_string_of_jsbytes("" + i))}
    function print_float(f){return output_string(stdout,to_string(f))}
    function print_endline(s)
     {output_string(stdout,s);
      caml_ml_output_char(stdout,10);
      return caml_ml_flush(stdout)}
    function print_newline(param)
     {caml_ml_output_char(stdout,10);return caml_ml_flush(stdout)}
    function prerr_char(c){return caml_ml_output_char(stderr,c)}
    function prerr_string(s){return output_string(stderr,s)}
    function prerr_bytes(s){return output_bytes(stderr,s)}
    function prerr_int(i)
     {return output_string(stderr,caml_string_of_jsbytes("" + i))}
    function prerr_float(f){return output_string(stderr,to_string(f))}
    function prerr_endline(s)
     {output_string(stderr,s);
      caml_ml_output_char(stderr,10);
      return caml_ml_flush(stderr)}
    function prerr_newline(param)
     {caml_ml_output_char(stderr,10);return caml_ml_flush(stderr)}
    function read_line(param){caml_ml_flush(stdout);return input_line(stdin)}
    function read_int(param){return caml_int_of_string(read_line(0))}
    function read_int_opt(param){return int_of_string_opt(read_line(0))}
    function read_float(param){return caml_float_of_string(read_line(0))}
    function read_float_opt(param){return of_string_opt(read_line(0))}
    function string_of_format(param){var str=param[2];return str}
    function symbol(param,_Es_)
     {var
       str2=_Es_[2],
       fmt2=_Es_[1],
       str1=param[2],
       fmt1=param[1],
       _Et_=cat(str1,cat(cst$0,str2));
      return [0,concat_fmt(fmt1,fmt2),_Et_]}
    var exit_function=[0,flush_all];
    function at_exit(f)
     {for(;;)
       {var
         f_yet_to_run=[0,1],
         old_exit=exit_function[1],
         new_exit$0=
          function(f_yet_to_run,old_exit)
           {function new_exit(param)
             {if(compare_and_set(f_yet_to_run,1,0))caml_call1(f,0);
              return caml_call1(old_exit,0)}
            return new_exit},
         new_exit=new_exit$0(f_yet_to_run,old_exit),
         success=compare_and_set(exit_function,old_exit,new_exit),
         _Er_=1 - success;
        if(_Er_)continue;
        return _Er_}}
    function do_at_exit(param){return caml_call1(exit_function[1],0)}
    function exit(retcode)
     {do_at_exit(0);return runtime.caml_sys_exit(retcode)}
    caml_register_named_value
     (caml_string_of_jsbytes("Pervasives.do_at_exit"),do_at_exit);
    var
     _m_=
      [0,
       runtime.caml_ml_seek_out_64,
       runtime.caml_ml_pos_out_64,
       caml_ml_channel_size_64,
       runtime.caml_ml_seek_in_64,
       runtime.caml_ml_pos_in_64,
       caml_ml_channel_size_64],
     set_binary_mode=caml_ml_set_binary_mode,
     close$0=caml_ml_close_channel,
     in_channel_length=caml_ml_channel_size,
     pos_in=caml_ml_pos_in,
     seek_in=runtime.caml_ml_seek_in,
     input_value=caml_input_value,
     input_binary_int=runtime.caml_ml_input_int,
     input_byte=caml_ml_input_char,
     input_char=caml_ml_input_char,
     set_binary_mode$0=caml_ml_set_binary_mode,
     out_channel_length=caml_ml_channel_size,
     pos_out=runtime.caml_ml_pos_out,
     seek_out=runtime.caml_ml_seek_out,
     output_binary_int=runtime.caml_ml_output_int,
     output_byte=caml_ml_output_char,
     output_char=caml_ml_output_char,
     flush=caml_ml_flush,
     Stdlib=
      [0,
       invalid_arg,
       failwith,
       Exit,
       Match_failure,
       Assert_failure,
       Invalid_argument,
       Failure,
       Not_found,
       Out_of_memory,
       Stack_overflow,
       Sys_error,
       End_of_file,
       Division_by_zero,
       Sys_blocked_io,
       Undefined_recursive_module,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       cat,
       char_of_int,
       string_of_bool,
       bool_of_string_opt,
       bool_of_string,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int_opt,
       read_int,
       read_float_opt,
       read_float,
       open_text,
       open_bin,
       open_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close,
       close_noerr,
       set_binary_mode$0,
       open_text$0,
       open_bin$0,
       open_gen$0,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close$0,
       close_noerr$0,
       set_binary_mode,
       _m_,
       string_of_format,
       symbol,
       exit,
       at_exit,
       valid_float_lexem,
       unsafe_really_input,
       do_at_exit];
    caml_register_global(775,Stdlib,"Stdlib");
    var
     Exit$0=[248,cst_Stdlib_Pervasives_Exit,caml_fresh_oo_id(0)],
     Stdlib_Pervasives=
      [0,
       invalid_arg,
       failwith,
       Exit$0,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       cat,
       char_of_int,
       string_of_bool,
       bool_of_string,
       bool_of_string_opt,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int,
       read_int_opt,
       read_float,
       read_float_opt,
       open_text,
       open_bin,
       open_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close,
       close_noerr,
       set_binary_mode$0,
       open_text$0,
       open_bin$0,
       open_gen$0,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close$0,
       close_noerr$0,
       set_binary_mode,
       string_of_format,
       symbol,
       exit,
       at_exit,
       valid_float_lexem,
       do_at_exit];
    caml_register_global(776,Stdlib_Pervasives,"Stdlib__Pervasives");
    function left(v){return [0,v]}
    function right(v){return [1,v]}
    function is_left(param){return 0 === param[0]?1:0}
    function is_right(param){return 0 === param[0]?0:1}
    function find_left(param)
     {if(0 === param[0]){var v=param[1];return [0,v]}return 0}
    function find_right(param)
     {if(0 === param[0])return 0;var v=param[1];return [0,v]}
    function map_left(f,e)
     {if(0 === e[0]){var v=e[1];return [0,caml_call1(f,v)]}return e}
    function map_right(f,e)
     {if(0 === e[0])return e;var v=e[1];return [1,caml_call1(f,v)]}
    function map(left,right,param)
     {if(0 === param[0]){var v=param[1];return [0,caml_call1(left,v)]}
      var v$0=param[1];
      return [1,caml_call1(right,v$0)]}
    function fold(left,right,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(left,v)}
      var v$0=param[1];
      return caml_call1(right,v$0)}
    function equal(left,right,e1,e2)
     {if(0 === e1[0])
       {var _Ep_=e1[1];
        if(0 === e2[0]){var v2=e2[1];return caml_call2(left,_Ep_,v2)}}
      else
       {var _Eq_=e1[1];
        if(0 !== e2[0]){var v2$0=e2[1];return caml_call2(right,_Eq_,v2$0)}}
      return 0}
    function compare(left,right,e1,e2)
     {if(0 === e1[0])
       {var _En_=e1[1];
        if(0 === e2[0]){var v2=e2[1];return caml_call2(left,_En_,v2)}
        return -1}
      var _Eo_=e1[1];
      if(0 === e2[0])return 1;
      var v2$0=e2[1];
      return caml_call2(right,_Eo_,v2$0)}
    var
     Stdlib_Either=
      [0,
       left,
       right,
       is_left,
       is_right,
       find_left,
       find_right,
       map_left,
       map_right,
       map,
       fold,
       fold,
       fold,
       equal,
       compare];
    caml_register_global(777,Stdlib_Either,"Stdlib__Either");
    var
     executable_name=runtime.caml_sys_executable_name(0),
     match=runtime.caml_sys_get_config(0),
     os_type=match[1],
     match$0=[0,caml_string_of_jsbytes("js_of_ocaml")],
     unix=runtime.caml_sys_const_ostype_unix(0),
     win32=runtime.caml_sys_const_ostype_win32(0),
     cygwin=runtime.caml_sys_const_ostype_cygwin(0),
     max_array_length=runtime.caml_sys_const_max_wosize(0),
     max_floatarray_length=max_array_length / 2 | 0,
     max_string_length=(4 * max_array_length | 0) - 1 | 0,
     big_endian=0,
     match$1=32,
     int_size=32;
    function getenv_opt(s)
     {try
       {var _El_=[0,caml_sys_getenv(s)];return _El_}
      catch(_Em_)
       {_Em_ = caml_wrap_exception(_Em_);
        if(_Em_ === Not_found)return 0;
        throw _Em_}}
    var interactive=[0,0];
    function set_signal(sig_num,sig_beh){return 0}
    var
     Break=[248,cst_Stdlib_Sys_Break,caml_fresh_oo_id(0)],
     sigabrt=-1,
     sigalrm=-2,
     sigfpe=-3,
     sighup=-4,
     sigill=-5,
     sigint=-6,
     sigkill=-7,
     sigpipe=-8,
     sigquit=-9,
     sigsegv=-10,
     sigterm=-11,
     sigusr1=-12,
     sigusr2=-13,
     sigchld=-14,
     sigcont=-15,
     sigstop=-16,
     sigtstp=-17,
     sigttin=-18,
     sigttou=-19,
     sigvtalrm=-20,
     sigprof=-21,
     sigbus=-22,
     sigpoll=-23,
     sigsys=-24,
     sigtrap=-25,
     sigurg=-26,
     sigxcpu=-27,
     sigxfsz=-28;
    function catch_break(on){return on?0:0}
    var development_version=0;
    function Make(_Ek_,_Ej_){return [0,1]}
    var
     Immediate64=[0,Make],
     Stdlib_Sys=
      [0,
       executable_name,
       getenv_opt,
       interactive,
       os_type,
       match$0,
       unix,
       win32,
       cygwin,
       match$1,
       int_size,
       big_endian,
       max_string_length,
       max_array_length,
       max_floatarray_length,
       set_signal,
       sigabrt,
       sigalrm,
       sigfpe,
       sighup,
       sigill,
       sigint,
       sigkill,
       sigpipe,
       sigquit,
       sigsegv,
       sigterm,
       sigusr1,
       sigusr2,
       sigchld,
       sigcont,
       sigstop,
       sigtstp,
       sigttin,
       sigttou,
       sigvtalrm,
       sigprof,
       sigbus,
       sigpoll,
       sigsys,
       sigtrap,
       sigurg,
       sigxcpu,
       sigxfsz,
       Break,
       catch_break,
       ocaml_version,
       development_version,
       ocaml_release,
       runtime.caml_ml_enable_runtime_warnings,
       runtime.caml_ml_runtime_warnings_enabled,
       Immediate64];
    caml_register_global(778,Stdlib_Sys,"Stdlib__Sys");
    function is_block(a){return 1 - (typeof a === "number"?1:0)}
    function double_field(x,i){return caml_array_get(x,i)}
    function set_double_field(x,i,v){return caml_array_set(x,i,v)}
    var
     first_non_constant_constructor=0,
     last_non_constant_constructor_=245,
     lazy_tag=246,
     closure_tag=247,
     object_tag=248,
     infix_tag=249,
     forward_tag=250,
     no_scan_tag=251,
     abstract_tag=251,
     string_tag=252,
     double_tag=253,
     double_array_tag=254,
     custom_tag=255,
     int_tag=1000,
     out_of_heap_tag=1001,
     unaligned_tag=1002;
    function info(obj)
     {if(caml_obj_tag(obj) === 247)
       {var
         info=runtime.caml_obj_raw_field(obj,1),
         arity=info >> 24,
         start_env=info << 8 >>> 9 | 0;
        return [0,arity,start_env]}
      throw [0,Assert_failure,_n_]}
    function of_val(x)
     {var switch$0=0;
      if(is_block(x) && caml_obj_tag(x) !== 248 && 1 <= x.length - 1)
       {var slot=x[1];switch$0 = 1}
      if(! switch$0)var slot=x;
      var switch$1=0;
      if(is_block(slot) && caml_obj_tag(slot) === 248)
       {var name=slot[1];switch$1 = 1}
      if(! switch$1)var name=invalid_arg(cst_Obj_extension_constructor$0);
      return caml_obj_tag(name) === 252
              ?slot
              :invalid_arg(cst_Obj_extension_constructor)}
    function name(slot){return slot[1]}
    function id(slot){return slot[2]}
    var
     Extension_constructor=[0,of_val,name,id],
     extension_constructor=Extension_constructor[1],
     extension_name=Extension_constructor[2],
     extension_id=Extension_constructor[3],
     max_ephe_length=max_array_length - 2 | 0;
    function create(l)
     {var _Eh_=0 <= l?1:0,_Ei_=_Eh_?l <= max_ephe_length?1:0:_Eh_;
      if(1 - _Ei_)invalid_arg(cst_Obj_Ephemeron_create);
      return runtime.caml_ephe_create(l)}
    function length(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset(e,o,msg)
     {var _Ee_=0 <= o?1:0,_Ef_=_Ee_?o < length(e)?1:0:_Ee_,_Eg_=1 - _Ef_;
      return _Eg_?invalid_arg(msg):_Eg_}
    function get_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key);
      return runtime.caml_ephe_get_key(e,o)}
    function get_key_copy(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key_copy);
      return runtime.caml_ephe_get_key_copy(e,o)}
    function set_key(e,o,x)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_set_key);
      return caml_ephe_set_key(e,o,x)}
    function unset_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_unset_key);
      return caml_ephe_unset_key(e,o)}
    function check_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_check_key);
      return runtime.caml_ephe_check_key(e,o)}
    function blit_key(e1,o1,e2,o2,l)
     {if
       (0
        <=
        l
        &&
        0
        <=
        o1
        &&
        !
        ((length(e1) - l | 0) < o1)
        &&
        0
        <=
        o2
        &&
        !
        ((length(e2) - l | 0) < o2))
       {var
         _Ec_=0 !== l?1:0,
         _Ed_=_Ec_?runtime.caml_ephe_blit_key(e1,o1,e2,o2,l):_Ec_;
        return _Ed_}
      return invalid_arg(cst_Obj_Ephemeron_blit_key)}
    var
     _o_=runtime.caml_ephe_blit_data,
     _p_=runtime.caml_ephe_check_data,
     _q_=
      [0,
       create,
       length,
       get_key,
       get_key_copy,
       set_key,
       unset_key,
       check_key,
       blit_key,
       runtime.caml_ephe_get_data,
       runtime.caml_ephe_get_data_copy,
       runtime.caml_ephe_set_data,
       function(_Eb_){return runtime.caml_ephe_unset_data(_Eb_)},
       _p_,
       _o_,
       max_ephe_length],
     Stdlib_Obj=
      [0,
       is_block,
       double_field,
       set_double_field,
       first_non_constant_constructor,
       last_non_constant_constructor_,
       lazy_tag,
       closure_tag,
       object_tag,
       infix_tag,
       forward_tag,
       no_scan_tag,
       abstract_tag,
       string_tag,
       double_tag,
       double_array_tag,
       custom_tag,
       custom_tag,
       int_tag,
       out_of_heap_tag,
       unaligned_tag,
       [0,info],
       Extension_constructor,
       extension_constructor,
       extension_name,
       extension_id,
       _q_];
    caml_register_global(779,Stdlib_Obj,"Stdlib__Obj");
    var Undefined=[248,cst_CamlinternalLazy_Undefined,caml_fresh_oo_id(0)];
    function raise_undefined(param){throw Undefined}
    function force_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      try
       {var result=caml_call1(closure,0);
        caml_obj_make_forward(blk,result);
        return result}
      catch(e)
       {e = caml_wrap_exception(e);blk[1] = function(param){throw e};throw e}}
    function force_val_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      var result=caml_call1(closure,0);
      caml_obj_make_forward(blk,result);
      return result}
    function force(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_lazy_block(lzv)}
    function force_val(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_val_lazy_block(lzv)}
    var
     CamlinternalLazy=
      [0,Undefined,force_lazy_block,force_val_lazy_block,force,force_val];
    caml_register_global(780,CamlinternalLazy,"CamlinternalLazy");
    function to_lazy(f){var x=caml_obj_block(246,1);x[1] = f;return x}
    function from_val(v)
     {var t=caml_obj_tag(v);
      if(t !== 250 && t !== 246 && t !== 253)return v;
      return runtime.caml_lazy_make_forward(v)}
    function is_val(l){return caml_obj_tag(l) !== 246?1:0}
    function map$0(f,x)
     {return [246,
              function(_D__)
               {var
                 _D$_=caml_obj_tag(x),
                 _Ea_=250 === _D$_?x[1]:246 === _D$_?force_lazy_block(x):x;
                return caml_call1(f,_Ea_)}]}
    function map_val(f,x)
     {if(is_val(x))
       {var
         _D5_=caml_obj_tag(x),
         _D6_=250 === _D5_?x[1]:246 === _D5_?force_lazy_block(x):x;
        return from_val(caml_call1(f,_D6_))}
      return [246,
              function(_D7_)
               {var
                 _D8_=caml_obj_tag(x),
                 _D9_=250 === _D8_?x[1]:246 === _D8_?force_lazy_block(x):x;
                return caml_call1(f,_D9_)}]}
    var
     Stdlib_Lazy=
      [0,
       Undefined,
       map$0,
       is_val,
       from_val,
       map_val,
       to_lazy,
       force_val,
       to_lazy,
       from_val,
       is_val];
    caml_register_global(781,Stdlib_Lazy,"Stdlib__Lazy");
    function empty(param){return 0}
    function return$0(x,param){return [0,x,empty]}
    function cons(x,next,param){return [0,x,next]}
    function append$0(seq1,seq2,param)
     {var match=caml_call1(seq1,0);
      if(match)
       {var next=match[2],x=match[1];
        return [0,x,function(_D4_){return append$0(next,seq2,_D4_)}]}
      return caml_call1(seq2,0)}
    function map$1(f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var
         next=match[2],
         x=match[1],
         _D2_=function(_D3_){return map$1(f,next,_D3_)};
        return [0,caml_call1(f,x),_D2_]}
      return 0}
    function filter_map(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1],match$0=caml_call1(f,x);
          if(match$0)
           {var y=match$0[1];
            return [0,y,function(_D1_){return filter_map(f,next,_D1_)}]}
          var seq$0=next;
          continue}
        return 0}}
    function filter(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          if(caml_call1(f,x))
           return [0,x,function(_D0_){return filter(f,next,_D0_)}];
          var seq$0=next;
          continue}
        return 0}}
    function concat(seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1],_DY_=0;
        return append$0(x,function(_DZ_){return concat(next,_DZ_)},_DY_)}
      return 0}
    function flat_map(f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var
         next=match[2],
         x=match[1],
         _DV_=0,
         _DW_=function(_DX_){return flat_map(f,next,_DX_)};
        return append$0(caml_call1(f,x),_DW_,_DV_)}
      return 0}
    function fold_left(f,acc,seq)
     {var acc$0=acc,seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var
           next=match[2],
           x=match[1],
           acc$1=caml_call2(f,acc$0,x),
           acc$0=acc$1,
           seq$0=next;
          continue}
        return acc$0}}
    function iter(f,seq)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          caml_call1(f,x);
          var seq$0=next;
          continue}
        return 0}}
    function unfold(f,u,param)
     {var match=caml_call1(f,u);
      if(match)
       {var match$0=match[1],u$0=match$0[2],x=match$0[1];
        return [0,x,function(_DU_){return unfold(f,u$0,_DU_)}]}
      return 0}
    function is_empty(xs){var match=caml_call1(xs,0);return match?0:1}
    function uncons(xs)
     {var match=caml_call1(xs,0);
      if(match){var xs$0=match[2],x=match[1];return [0,[0,x,xs$0]]}
      return 0}
    function length$0(xs$1)
     {var accu=0,xs=xs$1;
      for(;;)
       {var match=caml_call1(xs,0);
        if(match)
         {var xs$0=match[2],accu$0=accu + 1 | 0,accu=accu$0,xs=xs$0;continue}
        return accu}}
    function iteri(f,xs$1)
     {var i=0,xs=xs$1;
      for(;;)
       {var match=caml_call1(xs,0);
        if(match)
         {var xs$0=match[2],x=match[1];
          caml_call2(f,i,x);
          var i$0=i + 1 | 0,i=i$0,xs=xs$0;
          continue}
        return 0}}
    function fold_lefti(f,accu$1,xs$1)
     {var accu=accu$1,i=0,xs=xs$1;
      for(;;)
       {var match=caml_call1(xs,0);
        if(match)
         {var
           xs$0=match[2],
           x=match[1],
           accu$0=caml_call3(f,accu,i,x),
           i$0=i + 1 | 0,
           accu=accu$0,
           i=i$0,
           xs=xs$0;
          continue}
        return accu}}
    function for_all(p,xs)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],_DT_=caml_call1(p,x);
          if(_DT_){var xs$0=xs$1;continue}
          return _DT_}
        return 1}}
    function exists(p,xs)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],_DS_=caml_call1(p,x);
          if(_DS_)return _DS_;
          var xs$0=xs$1;
          continue}
        return 0}}
    function find(p,xs)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1];
          if(caml_call1(p,x))return [0,x];
          var xs$0=xs$1;
          continue}
        return 0}}
    function find_map(f,xs)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],result=caml_call1(f,x);
          if(result)return result;
          var xs$0=xs$1;
          continue}
        return 0}}
    function iter2(f,xs,ys)
     {var xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(ys$0,0);
          if(match$0)
           {var ys$1=match$0[2],y=match$0[1];
            caml_call2(f,x,y);
            var xs$0=xs$1,ys$0=ys$1;
            continue}
          return 0}
        return 0}}
    function fold_left2(f,accu,xs,ys)
     {var accu$0=accu,xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(ys$0,0);
          if(match$0)
           {var
             ys$1=match$0[2],
             y=match$0[1],
             accu$1=caml_call3(f,accu$0,x,y),
             accu$0=accu$1,
             xs$0=xs$1,
             ys$0=ys$1;
            continue}
          return accu$0}
        return accu$0}}
    function for_all2(f,xs,ys)
     {var xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(ys$0,0);
          if(match$0)
           {var ys$1=match$0[2],y=match$0[1],_DR_=caml_call2(f,x,y);
            if(_DR_){var xs$0=xs$1,ys$0=ys$1;continue}
            return _DR_}
          return 1}
        return 1}}
    function exists2(f,xs,ys)
     {var xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(ys$0,0);
          if(match$0)
           {var ys$1=match$0[2],y=match$0[1],_DQ_=caml_call2(f,x,y);
            if(_DQ_)return _DQ_;
            var xs$0=xs$1,ys$0=ys$1;
            continue}
          return 0}
        return 0}}
    function equal$0(eq,xs,ys)
     {var xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0),match$0=caml_call1(ys$0,0);
        if(match)
         {if(match$0)
           {var
             ys$1=match$0[2],
             y=match$0[1],
             xs$1=match[2],
             x=match[1],
             _DP_=caml_call2(eq,x,y);
            if(_DP_){var xs$0=xs$1,ys$0=ys$1;continue}
            return _DP_}}
        else
         if(! match$0)return 1;
        return 0}}
    function compare$0(cmp,xs,ys)
     {var xs$0=xs,ys$0=ys;
      for(;;)
       {var match=caml_call1(xs$0,0),match$0=caml_call1(ys$0,0);
        if(match)
         {var _DN_=match[2],_DO_=match[1];
          if(match$0)
           {var ys$1=match$0[2],y=match$0[1],c=caml_call2(cmp,_DO_,y);
            if(0 === c){var xs$0=_DN_,ys$0=ys$1;continue}
            return c}
          return 1}
        return match$0?-1:0}}
    function init_aux(f,i,j,param)
     {if(i < j)
       {var
         _DK_=i + 1 | 0,
         _DL_=function(_DM_){return init_aux(f,_DK_,j,_DM_)};
        return [0,caml_call1(f,i),_DL_]}
      return 0}
    function init(n,f)
     {if(0 <= n)
       {var _DI_=0;return function(_DJ_){return init_aux(f,_DI_,n,_DJ_)}}
      return invalid_arg(cst_Seq_init)}
    function repeat(x,param)
     {return [0,x,function(_DH_){return repeat(x,_DH_)}]}
    function forever(f,param)
     {function _DF_(_DG_){return forever(f,_DG_)}
      return [0,caml_call1(f,0),_DF_]}
    function cycle_nonempty(xs,param)
     {var _DD_=0;
      return append$0(xs,function(_DE_){return cycle_nonempty(xs,_DE_)},_DD_)}
    function cycle(xs,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var
         xs$0=match[2],
         x=match[1],
         _DA_=function(_DC_){return cycle_nonempty(xs,_DC_)};
        return [0,x,function(_DB_){return append$0(xs$0,_DA_,_DB_)}]}
      return 0}
    function iterate1(f,x,param)
     {var y=caml_call1(f,x);
      return [0,y,function(_Dz_){return iterate1(f,y,_Dz_)}]}
    function iterate(f,x)
     {function _Dw_(_Dy_){return iterate1(f,x,_Dy_)}
      return function(_Dx_){return [0,x,_Dw_]}}
    function mapi_aux(f,i,xs,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var
         xs$0=match[2],
         x=match[1],
         _Dt_=i + 1 | 0,
         _Du_=function(_Dv_){return mapi_aux(f,_Dt_,xs$0,_Dv_)};
        return [0,caml_call2(f,i,x),_Du_]}
      return 0}
    function mapi(f,xs)
     {var _Dr_=0;return function(_Ds_){return mapi_aux(f,_Dr_,xs,_Ds_)}}
    function tail_scan(f,s,xs,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var xs$0=match[2],x=match[1],s$0=caml_call2(f,s,x);
        return [0,s$0,function(_Dq_){return tail_scan(f,s$0,xs$0,_Dq_)}]}
      return 0}
    function scan(f,s,xs)
     {function _Dn_(_Dp_){return tail_scan(f,s,xs,_Dp_)}
      return function(_Do_){return [0,s,_Dn_]}}
    function take_aux(n,xs)
     {return 0 === n
              ?empty
              :function(param)
                {var match=caml_call1(xs,0);
                 if(match)
                  {var xs$0=match[2],x=match[1];
                   return [0,x,take_aux(n - 1 | 0,xs$0)]}
                 return 0}}
    function take(n,xs)
     {if(n < 0)invalid_arg(cst_Seq_take);return take_aux(n,xs)}
    function drop(n,xs)
     {return 0 <= n
              ?0 === n
                ?xs
                :function(param)
                  {var n$0=n,xs$0=xs;
                   for(;;)
                    {var match=caml_call1(xs$0,0);
                     if(match)
                      {var xs$1=match[2],n$1=n$0 - 1 | 0;
                       if(0 === n$1)return caml_call1(xs$1,0);
                       var n$0=n$1,xs$0=xs$1;
                       continue}
                     return 0}}
              :invalid_arg(cst_Seq_drop)}
    function take_while(p,xs,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var xs$0=match[2],x=match[1];
        return caml_call1(p,x)
                ?[0,x,function(_Dm_){return take_while(p,xs$0,_Dm_)}]
                :0}
      return 0}
    function drop_while(p,xs,param)
     {var xs$0=xs;
      for(;;)
       {var node=caml_call1(xs$0,0);
        if(node)
         {var xs$1=node[2],x=node[1];
          if(caml_call1(p,x)){var xs$0=xs$1;continue}
          return node}
        return 0}}
    function group(eq,xs,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var
         xs$0=match[2],
         x=match[1],
         _Dd_=caml_call1(eq,x),
         _De_=function(_Dl_){return drop_while(_Dd_,xs$0,_Dl_)},
         _Df_=function(_Dk_){return group(eq,_De_,_Dk_)},
         _Dg_=caml_call1(eq,x),
         _Dh_=function(_Dj_){return take_while(_Dg_,xs$0,_Dj_)};
        return [0,function(_Di_){return [0,x,_Dh_]},_Df_]}
      return 0}
    var Forced_twice=[248,cst_Stdlib_Seq_Forced_twice,caml_fresh_oo_id(0)];
    function failure(param){throw Forced_twice}
    function memoize(xs)
     {function s$0(param)
       {var match=caml_call1(xs,0);
        if(match){var xs$0=match[2],x=match[1];return [0,x,memoize(xs$0)]}
        return 0}
      var s=to_lazy(s$0);
      return function(_Dc_)
       {var _Db_=caml_obj_tag(s);
        return 250 === _Db_?s[1]:246 === _Db_?force_lazy_block(s):s}}
    function once(xs)
     {function f(param)
       {var match=caml_call1(xs,0);
        if(match){var xs$0=match[2],x=match[1];return [0,x,once(xs$0)]}
        return 0}
      var action=[0,f];
      return function(param)
       {var f=exchange(action,failure);return caml_call1(f,0)}}
    function zip(xs,ys,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var xs$0=match[2],x=match[1],match$0=caml_call1(ys,0);
        if(match$0)
         {var ys$0=match$0[2],y=match$0[1];
          return [0,[0,x,y],function(_Da_){return zip(xs$0,ys$0,_Da_)}]}
        return 0}
      return 0}
    function map2(f,xs,ys,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var xs$0=match[2],x=match[1],match$0=caml_call1(ys,0);
        if(match$0)
         {var
           ys$0=match$0[2],
           y=match$0[1],
           _C__=function(_C$_){return map2(f,xs$0,ys$0,_C$_)};
          return [0,caml_call2(f,x,y),_C__]}
        return 0}
      return 0}
    function interleave(xs,ys,param)
     {var match=caml_call1(xs,0);
      if(match)
       {var xs$0=match[2],x=match[1];
        return [0,x,function(_C9_){return interleave(ys,xs$0,_C9_)}]}
      return caml_call1(ys,0)}
    function sorted_merge1(cmp,x,xs,y,ys)
     {return 0 < caml_call2(cmp,x,y)
              ?[0,
                y,
                function(_C7_)
                 {var match=caml_call1(ys,0);
                  if(match)
                   {var ys$0=match[2],y=match[1];
                    return sorted_merge1(cmp,x,xs,y,ys$0)}
                  return [0,x,xs]}]
              :[0,
                x,
                function(_C8_)
                 {var match=caml_call1(xs,0);
                  if(match)
                   {var xs$0=match[2],x=match[1];
                    return sorted_merge1(cmp,x,xs$0,y,ys)}
                  return [0,y,ys]}]}
    function sorted_merge(cmp,xs,ys,param)
     {var match=caml_call1(xs,0),match$0=caml_call1(ys,0);
      if(match)
       {if(match$0)
         {var ys$0=match$0[2],y=match$0[1],xs$0=match[2],x=match[1];
          return sorted_merge1(cmp,x,xs$0,y,ys$0)}
        var c=match}
      else
       {if(! match$0)return 0;var c=match$0}
      return c}
    function map_fst(xys,param)
     {var match=caml_call1(xys,0);
      if(match)
       {var xys$0=match[2],match$0=match[1],x=match$0[1];
        return [0,x,function(_C6_){return map_fst(xys$0,_C6_)}]}
      return 0}
    function map_snd(xys,param)
     {var match=caml_call1(xys,0);
      if(match)
       {var xys$0=match[2],match$0=match[1],y=match$0[2];
        return [0,y,function(_C5_){return map_snd(xys$0,_C5_)}]}
      return 0}
    function unzip(xys)
     {function _C2_(_C4_){return map_snd(xys,_C4_)}
      return [0,function(_C3_){return map_fst(xys,_C3_)},_C2_]}
    function filter_map_find_left_map(f,xs,param)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(f,x);
          if(0 === match$0[0])
           {var y=match$0[1];
            return [0,
                    y,
                    function(_C1_){return filter_map_find_left_map(f,xs$1,_C1_)}]}
          var xs$0=xs$1;
          continue}
        return 0}}
    function filter_map_find_right_map(f,xs,param)
     {var xs$0=xs;
      for(;;)
       {var match=caml_call1(xs$0,0);
        if(match)
         {var xs$1=match[2],x=match[1],match$0=caml_call1(f,x);
          if(0 === match$0[0]){var xs$0=xs$1;continue}
          var z=match$0[1];
          return [0,
                  z,
                  function(_C0_)
                   {return filter_map_find_right_map(f,xs$1,_C0_)}]}
        return 0}}
    function partition_map(f,xs)
     {function _CX_(_CZ_){return filter_map_find_right_map(f,xs,_CZ_)}
      return [0,
              function(_CY_){return filter_map_find_left_map(f,xs,_CY_)},
              _CX_]}
    function partition(p,xs)
     {function _CT_(x){return 1 - caml_call1(p,x)}
      function _CU_(_CW_){return filter(_CT_,xs,_CW_)}
      return [0,function(_CV_){return filter(p,xs,_CV_)},_CU_]}
    function peel(xss)
     {return unzip(function(_CS_){return filter_map(uncons,xss,_CS_)})}
    function transpose(xss,param)
     {var match=peel(xss),tails=match[2],heads=match[1];
      if(is_empty(heads))
       {if(is_empty(tails))return 0;throw [0,Assert_failure,_r_]}
      return [0,heads,function(_CR_){return transpose(tails,_CR_)}]}
    function _s_(remainders,xss,param)
     {var match=caml_call1(xss,0);
      if(match)
       {var xss$0=match[2],xs=match[1],match$0=caml_call1(xs,0);
        if(match$0)
         {var
           xs$0=match$0[2],
           x=match$0[1],
           match$1=peel(remainders),
           tails=match$1[2],
           heads=match$1[1],
           _CL_=function(_CQ_){return [0,xs$0,tails]},
           _CM_=function(_CP_){return _s_(_CL_,xss$0,_CP_)};
          return [0,function(_CO_){return [0,x,heads]},_CM_]}
        var match$2=peel(remainders),tails$0=match$2[2],heads$0=match$2[1];
        return [0,heads$0,function(_CN_){return _s_(tails$0,xss$0,_CN_)}]}
      return transpose(remainders,0)}
    function map_product(f,xs,ys)
     {function _CF_(x)
       {function _CJ_(y){return caml_call2(f,x,y)}
        return function(_CK_){return map$1(_CJ_,ys,_CK_)}}
      function xss(_CI_){return map$1(_CF_,xs,_CI_)}
      function _CE_(_CH_){return _s_(empty,xss,_CH_)}
      return function(_CG_){return concat(_CE_,_CG_)}}
    function product(xs,ys)
     {return map_product(function(x,y){return [0,x,y]},xs,ys)}
    function of_dispenser(it)
     {function c(param)
       {var match=caml_call1(it,0);
        if(match){var x=match[1];return [0,x,c]}
        return 0}
      return c}
    function to_dispenser(xs)
     {var s=[0,xs];
      return function(param)
       {var match=caml_call1(s[1],0);
        if(match){var xs=match[2],x=match[1];s[1] = xs;return [0,x]}
        return 0}}
    function ints(i,param)
     {var _CC_=i + 1 | 0;return [0,i,function(_CD_){return ints(_CC_,_CD_)}]}
    var
     Stdlib_Seq=
      [0,
       is_empty,
       uncons,
       length$0,
       iter,
       fold_left,
       iteri,
       fold_lefti,
       for_all,
       exists,
       find,
       find_map,
       iter2,
       fold_left2,
       for_all2,
       exists2,
       equal$0,
       compare$0,
       empty,
       return$0,
       cons,
       init,
       unfold,
       repeat,
       forever,
       cycle,
       iterate,
       map$1,
       mapi,
       filter,
       filter_map,
       scan,
       take,
       drop,
       take_while,
       drop_while,
       group,
       memoize,
       Forced_twice,
       once,
       transpose,
       append$0,
       concat,
       flat_map,
       flat_map,
       zip,
       map2,
       interleave,
       sorted_merge,
       product,
       map_product,
       unzip,
       unzip,
       partition_map,
       partition,
       of_dispenser,
       to_dispenser,
       ints];
    caml_register_global(782,Stdlib_Seq,"Stdlib__Seq");
    var none=0;
    function some(v){return [0,v]}
    function value(o,default$0){if(o){var v=o[1];return v}return default$0}
    function get$0(param)
     {if(param){var v=param[1];return v}
      return invalid_arg(cst_option_is_None)}
    function bind(o,f){if(o){var v=o[1];return caml_call1(f,v)}return 0}
    function join(param){if(param){var o=param[1];return o}return 0}
    function map$2(f,o){if(o){var v=o[1];return [0,caml_call1(f,v)]}return 0}
    function fold$0(none,some,param)
     {if(param){var v=param[1];return caml_call1(some,v)}return none}
    function iter$0(f,param)
     {if(param){var v=param[1];return caml_call1(f,v)}return 0}
    function is_none(param){return param?0:1}
    function is_some(param){return param?1:0}
    function equal$1(eq,o0,o1)
     {if(o0)
       {if(o1){var v1=o1[1],v0=o0[1];return caml_call2(eq,v0,v1)}}
      else
       if(! o1)return 1;
      return 0}
    function compare$1(cmp,o0,o1)
     {if(o0)
       {var _CB_=o0[1];
        if(o1){var v1=o1[1];return caml_call2(cmp,_CB_,v1)}
        return 1}
      return o1?-1:0}
    function to_result(none,param)
     {if(param){var v=param[1];return [0,v]}return [1,none]}
    function to_list(param){if(param){var v=param[1];return [0,v,0]}return 0}
    function to_seq(param)
     {if(param){var v=param[1];return function(_CA_){return return$0(v,_CA_)}}
      return empty}
    var
     Stdlib_Option=
      [0,
       none,
       some,
       value,
       get$0,
       bind,
       join,
       map$2,
       fold$0,
       iter$0,
       is_none,
       is_some,
       equal$1,
       compare$1,
       to_result,
       to_list,
       to_seq];
    caml_register_global(783,Stdlib_Option,"Stdlib__Option");
    function ok(v){return [0,v]}
    function error(e){return [1,e]}
    function value$0(r,default$0)
     {if(0 === r[0]){var v=r[1];return v}return default$0}
    function get_ok(param)
     {if(0 === param[0]){var v=param[1];return v}
      return invalid_arg(cst_result_is_Error)}
    function get_error(param)
     {if(0 === param[0])return invalid_arg(cst_result_is_Ok);
      var e=param[1];
      return e}
    function bind$0(r,f)
     {if(0 === r[0]){var v=r[1];return caml_call1(f,v)}return r}
    function join$0(e){if(0 === e[0]){var r=e[1];return r}return e}
    function map$3(f,e)
     {if(0 === e[0]){var v=e[1];return [0,caml_call1(f,v)]}return e}
    function map_error(f,v)
     {if(0 === v[0])return v;var e=v[1];return [1,caml_call1(f,e)]}
    function fold$1(ok,error,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(ok,v)}
      var e=param[1];
      return caml_call1(error,e)}
    function iter$1(f,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(f,v)}return 0}
    function iter_error(f,param)
     {if(0 === param[0])return 0;var e=param[1];return caml_call1(f,e)}
    function is_ok(param){return 0 === param[0]?1:0}
    function is_error(param){return 0 === param[0]?0:1}
    function equal$2(ok,error,r0,r1)
     {if(0 === r0[0])
       {var _Cy_=r0[1];
        if(0 === r1[0]){var v1=r1[1];return caml_call2(ok,_Cy_,v1)}}
      else
       {var _Cz_=r0[1];
        if(0 !== r1[0]){var e1=r1[1];return caml_call2(error,_Cz_,e1)}}
      return 0}
    function compare$2(ok,error,r0,r1)
     {if(0 === r0[0])
       {var _Cw_=r0[1];
        if(0 === r1[0]){var v1=r1[1];return caml_call2(ok,_Cw_,v1)}
        return -1}
      var _Cx_=r0[1];
      if(0 === r1[0])return 1;
      var e1=r1[1];
      return caml_call2(error,_Cx_,e1)}
    function to_option(param)
     {if(0 === param[0]){var v=param[1];return [0,v]}return 0}
    function to_list$0(param)
     {if(0 === param[0]){var v=param[1];return [0,v,0]}return 0}
    function to_seq$0(param)
     {if(0 === param[0])
       {var v=param[1];return function(_Cv_){return return$0(v,_Cv_)}}
      return empty}
    var
     Stdlib_Result=
      [0,
       ok,
       error,
       value$0,
       get_ok,
       get_error,
       bind$0,
       join$0,
       map$3,
       map_error,
       fold$1,
       iter$1,
       iter_error,
       is_ok,
       is_error,
       equal$2,
       compare$2,
       to_option,
       to_list$0,
       to_seq$0];
    caml_register_global(784,Stdlib_Result,"Stdlib__Result");
    function equal$3(_Cu_,_Ct_){return _Cu_ === _Ct_?1:0}
    var compare$3=caml_int_compare;
    function to_float(param){return param?1.:0.}
    function to_string$0(param){return param?cst_true$2:cst_false$2}
    function _t_(_Cs_){return _Cs_}
    var
     Stdlib_Bool=
      [0,
       function(_Cr_){return 1 - _Cr_},
       equal$3,
       compare$3,
       _t_,
       to_float,
       to_string$0];
    caml_register_global(785,Stdlib_Bool,"Stdlib__Bool");
    function chr(n)
     {if(0 <= n && ! (255 < n))return n;return invalid_arg(cst_Char_chr)}
    function escaped(c)
     {var switch$0=0;
      if(40 <= c)
       {if(92 === c)return cst$1;if(! (127 <= c))switch$0 = 1}
      else
       if(32 <= c)
        {if(39 <= c)return cst$2;switch$0 = 1}
       else
        if(! (14 <= c))
         switch(c)
          {case 8:return cst_b;
           case 9:return cst_t;
           case 10:return cst_n;
           case 13:return cst_r
           }
      if(switch$0)
       {var s$0=caml_create_bytes(1);
        caml_bytes_unsafe_set(s$0,0,c);
        return caml_string_of_bytes(s$0)}
      var s=caml_create_bytes(4);
      caml_bytes_unsafe_set(s,0,92);
      caml_bytes_unsafe_set(s,1,48 + (c / 100 | 0) | 0);
      caml_bytes_unsafe_set(s,2,48 + ((c / 10 | 0) % 10 | 0) | 0);
      caml_bytes_unsafe_set(s,3,48 + (c % 10 | 0) | 0);
      return caml_string_of_bytes(s)}
    function lowercase(c)
     {var _Cq_=c - 192 | 0,switch$0=0;
      if(30 < _Cq_ >>> 0)
       {if(! (25 < _Cq_ + 127 >>> 0))switch$0 = 1}
      else
       if(23 !== _Cq_)switch$0 = 1;
      return switch$0?c + 32 | 0:c}
    function uppercase(c)
     {var _Cp_=c - 224 | 0,switch$0=0;
      if(30 < _Cp_ >>> 0)
       {if(! (25 < _Cp_ + 127 >>> 0))switch$0 = 1}
      else
       if(23 !== _Cp_)switch$0 = 1;
      return switch$0?c - 32 | 0:c}
    function lowercase_ascii(c){return 25 < c - 65 >>> 0?c:c + 32 | 0}
    function uppercase_ascii(c){return 25 < c - 97 >>> 0?c:c - 32 | 0}
    function compare$4(c1,c2){return c1 - c2 | 0}
    function equal$4(c1,c2){return 0 === (c1 - c2 | 0)?1:0}
    var
     Stdlib_Char=
      [0,
       chr,
       escaped,
       lowercase,
       uppercase,
       lowercase_ascii,
       uppercase_ascii,
       compare$4,
       equal$4];
    caml_register_global(786,Stdlib_Char,"Stdlib__Char");
    var
     min$0=0,
     max$0=1114111,
     lo_bound=55295,
     hi_bound=57344,
     bom=65279,
     rep=65533;
    function succ(u)
     {return u === 55295
              ?hi_bound
              :u === 1114111?invalid_arg(err_no_succ):u + 1 | 0}
    function pred(u)
     {return u === 57344?lo_bound:u === 0?invalid_arg(err_no_pred):u - 1 | 0}
    function is_valid(i)
     {var _Cl_=0 <= i?1:0,_Cm_=_Cl_?i <= 55295?1:0:_Cl_;
      if(_Cm_)
       var _Cn_=_Cm_;
      else
       var _Co_=57344 <= i?1:0,_Cn_=_Co_?i <= 1114111?1:0:_Co_;
      return _Cn_}
    function of_int(i)
     {return is_valid(i)
              ?i
              :invalid_arg
                (cat(caml_format_int(cst_X,i),cst_is_not_an_Unicode_scalar_v))}
    function is_char(u){return u < 256?1:0}
    function of_char(c){return c}
    function to_char(u)
     {return 255 < u
              ?invalid_arg
                (cat
                  (cst_U,
                   cat
                    (caml_format_int(cst_04X,u),cst_is_not_a_latin1_character)))
              :u}
    function unsafe_to_char(_Ck_){return _Ck_}
    function equal$5(_Cj_,_Ci_){return _Cj_ === _Ci_?1:0}
    var compare$5=caml_int_compare;
    function hash(_Ch_){return _Ch_}
    function utf_decode_is_valid(d){return 1 === (d >>> 27 | 0)?1:0}
    function utf_decode_length(d){return (d >>> 24 | 0) & 7}
    function utf_decode_uchar(d){return d & 16777215}
    function utf_decode(n,u){return (8 | n) << 24 | u}
    function dec_invalid(n){return n << 24 | 65533}
    function utf_8_byte_length(u)
     {if(0 <= u)
       {if(127 < u)
         {if(2047 < u)
           {if(65535 < u)
             {if(1114111 < u)throw [0,Assert_failure,_u_];return 4}
            return 3}
          return 2}
        return 1}
      throw [0,Assert_failure,_v_]}
    function utf_16_byte_length(u)
     {if(0 <= u)
       {if(65535 < u){if(1114111 < u)throw [0,Assert_failure,_w_];return 4}
        return 2}
      throw [0,Assert_failure,_x_]}
    function _y_(_Cg_){return _Cg_}
    var
     Stdlib_Uchar=
      [0,
       min$0,
       max$0,
       bom,
       rep,
       succ,
       pred,
       is_valid,
       of_int,
       function(_Cf_){return _Cf_},
       _y_,
       is_char,
       of_char,
       to_char,
       unsafe_to_char,
       equal$5,
       compare$5,
       hash,
       utf_decode_is_valid,
       utf_decode_uchar,
       utf_decode_length,
       utf_decode,
       dec_invalid,
       utf_8_byte_length,
       utf_16_byte_length];
    caml_register_global(787,Stdlib_Uchar,"Stdlib__Uchar");
    function length$1(l)
     {var len=0,param=l;
      for(;;)
       {if(param)
         {var param$0=param[2],len$0=len + 1 | 0,len=len$0,param=param$0;
          continue}
        return len}}
    function cons$0(a,l){return [0,a,l]}
    function hd(param)
     {if(param){var a=param[1];return a}return failwith(cst_hd)}
    function tl(param)
     {if(param){var l=param[2];return l}return failwith(cst_tl)}
    function nth(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return a;
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return failwith(cst_nth)}}
      return invalid_arg(cst_List_nth)}
    function nth_opt(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return [0,a];
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return 0}}
      return invalid_arg(cst_List_nth$0)}
    function rev_append(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {var l1$1=l1$0[2],a=l1$0[1],l2$1=[0,a,l2$0],l1$0=l1$1,l2$0=l2$1;
          continue}
        return l2$0}}
    function rev(l){return rev_append(l,0)}
    function init_aux$0(i,n,f)
     {if(n <= i)return 0;
      var r=caml_call1(f,i);
      return [0,r,init_aux$0(i + 1 | 0,n,f)]}
    function init$0(len,f)
     {if(0 <= len)
       {if(50 < len)
         {var acc=0,i=0;
          for(;;)
           {if(len <= i)return rev(acc);
            var i$0=i + 1 | 0,acc$0=[0,caml_call1(f,i),acc],acc=acc$0,i=i$0;
            continue}}
        return init_aux$0(0,len,f)}
      return invalid_arg(cst_List_init)}
    function flatten(param)
     {if(param){var r=param[2],l=param[1];return append(l,flatten(r))}
      return 0}
    function map$4(f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call1(f,a);return [0,r,map$4(f,l)]}
      return 0}
    function _z_(i,f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call2(f,i,a);
        return [0,r,_z_(i + 1 | 0,f,l)]}
      return 0}
    function mapi$0(f,l){return _z_(0,f,l)}
    function rev_map(f,param)
     {var accu=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           a=param$0[1],
           accu$0=[0,caml_call1(f,a),accu],
           accu=accu$0,
           param$0=l;
          continue}
        return accu}}
    function iter$2(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1];
          caml_call1(f,a);
          var param$0=l;
          continue}
        return 0}}
    function iteri$0(f,l$0)
     {var i=0,param=l$0;
      for(;;)
       {if(param)
         {var l=param[2],a=param[1];
          caml_call2(f,i,a);
          var i$0=i + 1 | 0,i=i$0,param=l;
          continue}
        return 0}}
    function fold_left$0(f,accu,l)
     {var accu$0=accu,l$0=l;
      for(;;)
       {if(l$0)
         {var
           l$1=l$0[2],
           a=l$0[1],
           accu$1=caml_call2(f,accu$0,a),
           accu$0=accu$1,
           l$0=l$1;
          continue}
        return accu$0}}
    function fold_right(f,l,accu)
     {if(l){var l$0=l[2],a=l[1];return caml_call2(f,a,fold_right(f,l$0,accu))}
      return accu}
    function map2$0(f,l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1],r=caml_call2(f,a1,a2);
          return [0,r,map2$0(f,l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_map2)}
    function rev_map2(f,l1,l2)
     {var accu=0,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$0=[0,caml_call2(f,a1,a2),accu],
             accu=accu$0,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu;
        return invalid_arg(cst_List_rev_map2)}}
    function iter2$0(f,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var l2$1=l2$0[2],a2=l2$0[1],l1$1=l1$0[2],a1=l1$0[1];
            caml_call2(f,a1,a2);
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_iter2)}}
    function fold_left2$0(f,accu,l1,l2)
     {var accu$0=accu,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$1=caml_call3(f,accu$0,a1,a2),
             accu$0=accu$1,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu$0;
        return invalid_arg(cst_List_fold_left2)}}
    function fold_right2(f,l1,l2,accu)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return caml_call3(f,a1,a2,fold_right2(f,l1$0,l2$0,accu))}}
      else
       if(! l2)return accu;
      return invalid_arg(cst_List_fold_right2)}
    function for_all$0(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_Ce_=caml_call1(p,a);
          if(_Ce_){var param$0=l;continue}
          return _Ce_}
        return 1}}
    function exists$0(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_Cd_=caml_call1(p,a);
          if(_Cd_)return _Cd_;
          var param$0=l;
          continue}
        return 0}}
    function for_all2$0(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _Cc_=caml_call2(p,a1,a2);
            if(_Cc_){var l1$0=l1$1,l2$0=l2$1;continue}
            return _Cc_}}
        else
         if(! l2$0)return 1;
        return invalid_arg(cst_List_for_all2)}}
    function exists2$0(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _Cb_=caml_call2(p,a1,a2);
            if(_Cb_)return _Cb_;
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_exists2)}}
    function mem(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_Ca_=0 === caml_compare(a,x)?1:0;
          if(_Ca_)return _Ca_;
          var param$0=l;
          continue}
        return 0}}
    function memq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_B$_=a === x?1:0;
          if(_B$_)return _B$_;
          var param$0=l;
          continue}
        return 0}}
    function assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assoc_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assq_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function mem_assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           match=param$0[1],
           a=match[1],
           _B__=0 === caml_compare(a,x)?1:0;
          if(_B__)return _B__;
          var param$0=l;
          continue}
        return 0}}
    function mem_assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],a=match[1],_B9_=a === x?1:0;
          if(_B9_)return _B9_;
          var param$0=l;
          continue}
        return 0}}
    function remove_assoc(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return 0 === caml_compare(a,x)?l:[0,pair,remove_assoc(x,l)]}
      return 0}
    function remove_assq(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return a === x?l:[0,pair,remove_assq(x,l)]}
      return 0}
    function find$0(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return x;
          var param$0=l;
          continue}
        throw Not_found}}
    function find_opt(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return [0,x];
          var param$0=l;
          continue}
        return 0}}
    function find_map$0(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1],result=caml_call1(f,x);
          if(result)return result;
          var param$0=l;
          continue}
        return 0}}
    function find_all(p)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1];
            if(caml_call1(p,x))
             {var accu$1=[0,x,accu$0],accu$0=accu$1,param=l;continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function filteri(p,param)
     {var i=0,acc=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           x=param$0[1],
           acc$0=caml_call2(p,i,x)?[0,x,acc]:acc,
           i$0=i + 1 | 0,
           i=i$0,
           acc=acc$0,
           param$0=l;
          continue}
        return rev(acc)}}
    function filter_map$0(f)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1],match=caml_call1(f,x);
            if(match)
             {var v=match[1],accu$1=[0,v,accu$0],accu$0=accu$1,param=l;
              continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function concat_map(f,param)
     {var acc=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           x=param$0[1],
           xs=caml_call1(f,x),
           acc$0=rev_append(xs,acc),
           acc=acc$0,
           param$0=l;
          continue}
        return rev(acc)}}
    function fold_left_map(f,accu,param)
     {var accu$0=accu,l_accu=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           x=param$0[1],
           match=caml_call2(f,accu$0,x),
           x$0=match[2],
           accu$1=match[1],
           l_accu$0=[0,x$0,l_accu],
           accu$0=accu$1,
           l_accu=l_accu$0,
           param$0=l;
          continue}
        return [0,accu$0,rev(l_accu)]}}
    function partition$0(p,param)
     {var yes=0,no=0,param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))
           {var yes$0=[0,x,yes],yes=yes$0,param$0=l;continue}
          var no$0=[0,x,no],no=no$0,param$0=l;
          continue}
        var _B8_=rev(no);
        return [0,rev(yes),_B8_]}}
    function partition_map$0(p,param)
     {var left=0,right=0,param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1],match=caml_call1(p,x);
          if(0 === match[0])
           {var v=match[1],left$0=[0,v,left],left=left$0,param$0=l;continue}
          var v$0=match[1],right$0=[0,v$0,right],right=right$0,param$0=l;
          continue}
        var _B7_=rev(right);
        return [0,rev(left),_B7_]}}
    function split(param)
     {if(param)
       {var
         l=param[2],
         match=param[1],
         y=match[2],
         x=match[1],
         match$0=split(l),
         ry=match$0[2],
         rx=match$0[1];
        return [0,[0,x,rx],[0,y,ry]]}
      return _A_}
    function combine(l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return [0,[0,a1,a2],combine(l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_combine)}
    function merge(cmp,l1,l2)
     {if(l1)
       {if(l2)
         {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
          return 0 < caml_call2(cmp,h1,h2)
                  ?[0,h2,merge(cmp,l1,t2)]
                  :[0,h1,merge(cmp,t1,l2)]}
        return l1}
      return l2}
    function fast_sort(cmp,l)
     {function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _B3_=l[2];
            if(_B3_)
             {var
               tl=_B3_[2],
               x2=_B3_[1],
               x1=l[1],
               s=0 < caml_call2(cmp,x1,x2)?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]];
              return [0,s,tl]}}}
        else
         if(3 === n && l)
          {var _B5_=l[2];
           if(_B5_)
            {var _B6_=_B5_[2];
             if(_B6_)
              {var
                tl$1=_B6_[2],
                x3=_B6_[1],
                x2$0=_B5_[1],
                x1$0=l[1],
                s$0=
                 0 < caml_call2(cmp,x1$0,x2$0)
                  ?0 < caml_call2(cmp,x2$0,x3)
                    ?[0,x1$0,[0,x2$0,[0,x3,0]]]
                    :0 < caml_call2(cmp,x1$0,x3)
                      ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                      :[0,x3,[0,x1$0,[0,x2$0,0]]]
                  :0 < caml_call2(cmp,x1$0,x3)
                    ?[0,x2$0,[0,x1$0,[0,x3,0]]]
                    :0 < caml_call2(cmp,x2$0,x3)
                      ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                      :[0,x3,[0,x2$0,[0,x1$0,0]]];
               return [0,s$0,tl$1]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         match=sort(n1,l),
         l2$0=match[2],
         s1=match[1],
         match$0=sort(n2,l2$0),
         tl$0=match$0[2],
         s2=match$0[1],
         l1=s1,
         l2=s2,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h2,accu],l2=t2,accu=accu$0;continue}
              var accu$1=[0,h1,accu],l1=t1,accu=accu$1;
              continue}
            var _B4_=rev_append(l1,accu)}
          else
           var _B4_=rev_append(l2,accu);
          return [0,_B4_,tl$0]}}
      function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _BZ_=l[2];
            if(_BZ_)
             {var
               tl=_BZ_[2],
               x2=_BZ_[1],
               x1=l[1],
               s=0 < caml_call2(cmp,x1,x2)?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]];
              return [0,s,tl]}}}
        else
         if(3 === n && l)
          {var _B1_=l[2];
           if(_B1_)
            {var _B2_=_B1_[2];
             if(_B2_)
              {var
                tl$1=_B2_[2],
                x3=_B2_[1],
                x2$0=_B1_[1],
                x1$0=l[1],
                s$0=
                 0 < caml_call2(cmp,x1$0,x2$0)
                  ?0 < caml_call2(cmp,x1$0,x3)
                    ?0 < caml_call2(cmp,x2$0,x3)
                      ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                      :[0,x2$0,[0,x3,[0,x1$0,0]]]
                    :[0,x2$0,[0,x1$0,[0,x3,0]]]
                  :0 < caml_call2(cmp,x2$0,x3)
                    ?0 < caml_call2(cmp,x1$0,x3)
                      ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                      :[0,x1$0,[0,x3,[0,x2$0,0]]]
                    :[0,x1$0,[0,x2$0,[0,x3,0]]];
               return [0,s$0,tl$1]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         match=rev_sort(n1,l),
         l2$0=match[2],
         s1=match[1],
         match$0=rev_sort(n2,l2$0),
         tl$0=match$0[2],
         s2=match$0[1],
         l1=s1,
         l2=s2,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h1,accu],l1=t1,accu=accu$0;continue}
              var accu$1=[0,h2,accu],l2=t2,accu=accu$1;
              continue}
            var _B0_=rev_append(l1,accu)}
          else
           var _B0_=rev_append(l2,accu);
          return [0,_B0_,tl$0]}}
      var len=length$1(l);
      return 2 <= len?sort(len,l)[1]:l}
    function sort_uniq(cmp,l)
     {function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _BQ_=l[2];
            if(_BQ_)
             {var
               tl=_BQ_[2],
               x2=_BQ_[1],
               x1=l[1],
               c$0=caml_call2(cmp,x1,x2),
               s=0 === c$0?[0,x1,0]:0 < c$0?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]];
              return [0,s,tl]}}}
        else
         if(3 === n && l)
          {var _BS_=l[2];
           if(_BS_)
            {var _BT_=_BS_[2];
             if(_BT_)
              {var
                tl$1=_BT_[2],
                x3=_BT_[1],
                x2$0=_BS_[1],
                x1$0=l[1],
                c$1=caml_call2(cmp,x1$0,x2$0);
               if(0 === c$1)
                var
                 c$2=caml_call2(cmp,x2$0,x3),
                 _BU_=
                  0 === c$2
                   ?[0,x2$0,0]
                   :0 < c$2?[0,x2$0,[0,x3,0]]:[0,x3,[0,x2$0,0]],
                 s$0=_BU_;
               else
                if(0 < c$1)
                 {var c$3=caml_call2(cmp,x2$0,x3);
                  if(0 === c$3)
                   var _BV_=[0,x1$0,[0,x2$0,0]];
                  else
                   if(0 < c$3)
                    var _BV_=[0,x1$0,[0,x2$0,[0,x3,0]]];
                   else
                    var
                     c$4=caml_call2(cmp,x1$0,x3),
                     _BW_=
                      0 === c$4
                       ?[0,x1$0,[0,x2$0,0]]
                       :0 < c$4
                         ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                         :[0,x3,[0,x1$0,[0,x2$0,0]]],
                     _BV_=_BW_;
                  var s$0=_BV_}
                else
                 {var c$5=caml_call2(cmp,x1$0,x3);
                  if(0 === c$5)
                   var _BX_=[0,x2$0,[0,x1$0,0]];
                  else
                   if(0 < c$5)
                    var _BX_=[0,x2$0,[0,x1$0,[0,x3,0]]];
                   else
                    var
                     c$6=caml_call2(cmp,x2$0,x3),
                     _BY_=
                      0 === c$6
                       ?[0,x2$0,[0,x1$0,0]]
                       :0 < c$6
                         ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                         :[0,x3,[0,x2$0,[0,x1$0,0]]],
                     _BX_=_BY_;
                  var s$0=_BX_}
               return [0,s$0,tl$1]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         match=sort(n1,l),
         l2$0=match[2],
         s1=match[1],
         match$0=sort(n2,l2$0),
         tl$0=match$0[2],
         s2=match$0[1],
         l1=s1,
         l2=s2,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 <= c){var accu$1=[0,h2,accu],l2=t2,accu=accu$1;continue}
              var accu$2=[0,h1,accu],l1=t1,accu=accu$2;
              continue}
            var _BR_=rev_append(l1,accu)}
          else
           var _BR_=rev_append(l2,accu);
          return [0,_BR_,tl$0]}}
      function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _BH_=l[2];
            if(_BH_)
             {var
               tl=_BH_[2],
               x2=_BH_[1],
               x1=l[1],
               c$0=caml_call2(cmp,x1,x2),
               s=0 === c$0?[0,x1,0]:0 <= c$0?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]];
              return [0,s,tl]}}}
        else
         if(3 === n && l)
          {var _BJ_=l[2];
           if(_BJ_)
            {var _BK_=_BJ_[2];
             if(_BK_)
              {var
                tl$1=_BK_[2],
                x3=_BK_[1],
                x2$0=_BJ_[1],
                x1$0=l[1],
                c$1=caml_call2(cmp,x1$0,x2$0);
               if(0 === c$1)
                var
                 c$2=caml_call2(cmp,x2$0,x3),
                 _BL_=
                  0 === c$2
                   ?[0,x2$0,0]
                   :0 <= c$2?[0,x3,[0,x2$0,0]]:[0,x2$0,[0,x3,0]],
                 s$0=_BL_;
               else
                if(0 <= c$1)
                 {var c$3=caml_call2(cmp,x1$0,x3);
                  if(0 === c$3)
                   var _BM_=[0,x2$0,[0,x1$0,0]];
                  else
                   if(0 <= c$3)
                    var
                     c$4=caml_call2(cmp,x2$0,x3),
                     _BN_=
                      0 === c$4
                       ?[0,x2$0,[0,x1$0,0]]
                       :0 <= c$4
                         ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                         :[0,x2$0,[0,x3,[0,x1$0,0]]],
                     _BM_=_BN_;
                   else
                    var _BM_=[0,x2$0,[0,x1$0,[0,x3,0]]];
                  var s$0=_BM_}
                else
                 {var c$5=caml_call2(cmp,x2$0,x3);
                  if(0 === c$5)
                   var _BO_=[0,x1$0,[0,x2$0,0]];
                  else
                   if(0 <= c$5)
                    var
                     c$6=caml_call2(cmp,x1$0,x3),
                     _BP_=
                      0 === c$6
                       ?[0,x1$0,[0,x2$0,0]]
                       :0 <= c$6
                         ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                         :[0,x1$0,[0,x3,[0,x2$0,0]]],
                     _BO_=_BP_;
                   else
                    var _BO_=[0,x1$0,[0,x2$0,[0,x3,0]]];
                  var s$0=_BO_}
               return [0,s$0,tl$1]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         match=rev_sort(n1,l),
         l2$0=match[2],
         s1=match[1],
         match$0=rev_sort(n2,l2$0),
         tl$0=match$0[2],
         s2=match$0[1],
         l1=s1,
         l2=s2,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 < c){var accu$1=[0,h1,accu],l1=t1,accu=accu$1;continue}
              var accu$2=[0,h2,accu],l2=t2,accu=accu$2;
              continue}
            var _BI_=rev_append(l1,accu)}
          else
           var _BI_=rev_append(l2,accu);
          return [0,_BI_,tl$0]}}
      var len=length$1(l);
      return 2 <= len?sort(len,l)[1]:l}
    function compare_lengths(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0){var l2$1=l2$0[2],l1$1=l1$0[2],l1$0=l1$1,l2$0=l2$1;continue}
          return 1}
        return l2$0?-1:0}}
    function compare_length_with(l,n)
     {var l$0=l,n$0=n;
      for(;;)
       {if(l$0)
         {var l$1=l$0[2];
          if(0 < n$0){var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;continue}
          return 1}
        return 0 === n$0?0:0 < n$0?-1:1}}
    function equal$6(eq,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _BG_=caml_call2(eq,a1,a2);
            if(_BG_){var l1$0=l1$1,l2$0=l2$1;continue}
            return _BG_}}
        else
         if(! l2$0)return 1;
        return 0}}
    function compare$6(cmp,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {var _BE_=l1$0[2],_BF_=l1$0[1];
          if(l2$0)
           {var l2$1=l2$0[2],a2=l2$0[1],c=caml_call2(cmp,_BF_,a2);
            if(0 === c){var l1$0=_BE_,l2$0=l2$1;continue}
            return c}
          return 1}
        return l2$0?-1:0}}
    function to_seq$1(l)
     {function aux(l,param)
       {if(l)
         {var tail=l[2],x=l[1];
          return [0,x,function(_BD_){return aux(tail,_BD_)}]}
        return 0}
      return function(_BC_){return aux(l,_BC_)}}
    function of_seq(seq)
     {function direct(depth,seq)
       {if(0 === depth)
         {var _BB_=0;
          return rev(fold_left(function(acc,x){return [0,x,acc]},_BB_,seq))}
        var match=caml_call1(seq,0);
        if(match)
         {var next=match[2],x=match[1];
          return [0,x,direct(depth - 1 | 0,next)]}
        return 0}
      return direct(500,seq)}
    var
     include$0=
      [0,
       length$1,
       compare_lengths,
       compare_length_with,
       cons$0,
       hd,
       tl,
       nth,
       nth_opt,
       rev,
       init$0,
       append,
       rev_append,
       flatten,
       flatten,
       equal$6,
       compare$6,
       iter$2,
       iteri$0,
       map$4,
       mapi$0,
       rev_map,
       filter_map$0,
       concat_map,
       fold_left_map,
       fold_left$0,
       fold_right,
       iter2$0,
       map2$0,
       rev_map2,
       fold_left2$0,
       fold_right2,
       for_all$0,
       exists$0,
       for_all2$0,
       exists2$0,
       mem,
       memq,
       find$0,
       find_opt,
       find_map$0,
       find_all,
       find_all,
       filteri,
       partition$0,
       partition_map$0,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(788,include$0,"Stdlib__List");
    var zero=0,one=1,minus_one=-1;
    function abs$0(x){return 0 <= x?x:- x | 0}
    var max_int$0=2147483647,min_int$0=-2147483648;
    function lognot(x){return x ^ -1}
    function equal$7(_BA_,_Bz_){return _BA_ === _Bz_?1:0}
    var compare$7=caml_int_compare;
    function min$1(x,y){return x <= y?x:y}
    function max$1(x,y){return y <= x?x:y}
    function to_string$1(x){return caml_string_of_jsbytes("" + x)}
    var
     Stdlib_Int=
      [0,
       zero,
       one,
       minus_one,
       abs$0,
       max_int$0,
       min_int$0,
       lognot,
       equal$7,
       compare$7,
       min$1,
       max$1,
       to_string$1];
    caml_register_global(789,Stdlib_Int,"Stdlib__Int");
    function make$0(n,c)
     {var s=caml_create_bytes(n);caml_fill_bytes(s,0,n,c);return s}
    function init$1(n,f)
     {var s=caml_create_bytes(n),_Bx_=n - 1 | 0,_Bw_=0;
      if(! (_Bx_ < 0))
       {var i=_Bw_;
        for(;;)
         {caml_bytes_unsafe_set(s,i,caml_call1(f,i));
          var _By_=i + 1 | 0;
          if(_Bx_ !== i){var i=_By_;continue}
          break}}
      return s}
    var empty$0=caml_create_bytes(0);
    function copy(s)
     {var len=caml_ml_bytes_length(s),r=caml_create_bytes(len);
      caml_blit_bytes(s,0,r,0,len);
      return r}
    function of_bytes(b){return caml_string_of_bytes(copy(b))}
    function to_bytes(s){return copy(caml_bytes_of_string(s))}
    function sub(s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       {var r=caml_create_bytes(len);caml_blit_bytes(s,ofs,r,0,len);return r}
      return invalid_arg(cst_String_sub_Bytes_sub)}
    function sub_string(b,ofs,len)
     {return caml_string_of_bytes(sub(b,ofs,len))}
    function symbol$0(a,b)
     {var c=a + b | 0,_Bv_=b < 0?1:0,match=c < 0?1:0,switch$0=0;
      if(a < 0)
       {if(_Bv_ && ! match)switch$0 = 1}
      else
       if(! _Bv_ && match)switch$0 = 1;
      return switch$0?invalid_arg(cst_Bytes_extend):c}
    function extend(s,left,right)
     {var
       len=symbol$0(symbol$0(caml_ml_bytes_length(s),left),right),
       r=caml_create_bytes(len);
      if(0 <= left)
       var dstoff=left,srcoff=0;
      else
       var dstoff=0,srcoff=- left | 0;
      var cpylen=min$1(caml_ml_bytes_length(s) - srcoff | 0,len - dstoff | 0);
      if(0 < cpylen)caml_blit_bytes(s,srcoff,r,dstoff,cpylen);
      return r}
    function fill(s,ofs,len,c)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_fill_bytes(s,ofs,len,c);
      return invalid_arg(cst_String_fill_Bytes_fill)}
    function blit(s1,ofs1,s2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((caml_ml_bytes_length(s1) - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
       return caml_blit_bytes(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_Bytes_blit)}
    function blit$0(s1,ofs1,s2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((caml_ml_string_length(s1) - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
       return caml_blit_string(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_String_blit_Bytes_blit_str)}
    function iter$3(f,a)
     {var _Bt_=caml_ml_bytes_length(a) - 1 | 0,_Bs_=0;
      if(! (_Bt_ < 0))
       {var i=_Bs_;
        for(;;)
         {caml_call1(f,caml_bytes_unsafe_get(a,i));
          var _Bu_=i + 1 | 0;
          if(_Bt_ !== i){var i=_Bu_;continue}
          break}}
      return 0}
    function iteri$1(f,a)
     {var _Bq_=caml_ml_bytes_length(a) - 1 | 0,_Bp_=0;
      if(! (_Bq_ < 0))
       {var i=_Bp_;
        for(;;)
         {caml_call2(f,i,caml_bytes_unsafe_get(a,i));
          var _Br_=i + 1 | 0;
          if(_Bq_ !== i){var i=_Br_;continue}
          break}}
      return 0}
    function concat$0(sep,l)
     {if(l)
       {var seplen=caml_ml_bytes_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _Bm_=param[1];
            if(param[2])
             {var
               tl=param[2],
               x=(caml_ml_bytes_length(_Bm_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_Bytes_concat),
               acc=acc$0,
               param=tl;
              continue}
            var _Bo_=caml_ml_bytes_length(_Bm_) + acc | 0}
          else
           var _Bo_=acc;
          var dst=caml_create_bytes(_Bo_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _Bn_=param$0[1];
              if(param$0[2])
               {var tl$0=param$0[2];
                caml_blit_bytes(_Bn_,0,dst,pos,caml_ml_bytes_length(_Bn_));
                caml_blit_bytes
                 (sep,0,dst,pos + caml_ml_bytes_length(_Bn_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_bytes_length(_Bn_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=tl$0;
                continue}
              caml_blit_bytes(_Bn_,0,dst,pos,caml_ml_bytes_length(_Bn_));
              return dst}
            return dst}}}
      return empty$0}
    function cat$0(s1,s2)
     {var
       l1=caml_ml_bytes_length(s1),
       l2=caml_ml_bytes_length(s2),
       r=caml_create_bytes(l1 + l2 | 0);
      caml_blit_bytes(s1,0,r,0,l1);
      caml_blit_bytes(s2,0,r,l1,l2);
      return r}
    function is_space(param)
     {var _Bl_=param - 9 | 0,switch$0=0;
      if(4 < _Bl_ >>> 0)
       {if(23 === _Bl_)switch$0 = 1}
      else
       if(2 !== _Bl_)switch$0 = 1;
      return switch$0?1:0}
    function trim(s)
     {var len=caml_ml_bytes_length(s),i=[0,0];
      for(;;)
       {if(i[1] < len && is_space(caml_bytes_unsafe_get(s,i[1])))
         {i[1]++;continue}
        var j=[0,len - 1 | 0];
        for(;;)
         {if(i[1] <= j[1] && is_space(caml_bytes_unsafe_get(s,j[1])))
           {j[1] += -1;continue}
          return i[1] <= j[1]?sub(s,i[1],(j[1] - i[1] | 0) + 1 | 0):empty$0}}}
    function escaped$0(s)
     {var n=[0,0],_Be_=caml_ml_bytes_length(s) - 1 | 0,_Bd_=0;
      if(! (_Be_ < 0))
       {var i$0=_Bd_;
        for(;;)
         {var match=caml_bytes_unsafe_get(s,i$0),switch$0=0;
          if(32 <= match)
           {var _Bi_=match - 34 | 0,switch$1=0;
            if(58 < _Bi_ >>> 0)
             {if(93 <= _Bi_)switch$1 = 1}
            else
             if(56 < _Bi_ - 1 >>> 0){switch$0 = 1;switch$1 = 1}
            if(! switch$1){var _Bj_=1;switch$0 = 2}}
          else
           if(11 <= match)
            {if(13 === match)switch$0 = 1}
           else
            if(8 <= match)switch$0 = 1;
          switch(switch$0){case 0:var _Bj_=4;break;case 1:var _Bj_=2;break}
          n[1] = n[1] + _Bj_ | 0;
          var _Bk_=i$0 + 1 | 0;
          if(_Be_ !== i$0){var i$0=_Bk_;continue}
          break}}
      if(n[1] === caml_ml_bytes_length(s))return copy(s);
      var s$0=caml_create_bytes(n[1]);
      n[1] = 0;
      var _Bg_=caml_ml_bytes_length(s) - 1 | 0,_Bf_=0;
      if(! (_Bg_ < 0))
       {var i=_Bf_;
        for(;;)
         {var c=caml_bytes_unsafe_get(s,i),switch$2=0;
          if(35 <= c)
           if(92 === c)
            switch$2 = 2;
           else
            if(127 <= c)switch$2 = 1;else switch$2 = 3;
          else
           if(32 <= c)
            if(34 <= c)switch$2 = 2;else switch$2 = 3;
           else
            if(14 <= c)
             switch$2 = 1;
            else
             switch(c)
              {case 8:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],98);
                break;
               case 9:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],116);
                break;
               case 10:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],110);
                break;
               case 13:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],114);
                break;
               default:switch$2 = 1}
          switch(switch$2)
           {case 1:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c / 100 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + ((c / 10 | 0) % 10 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c % 10 | 0) | 0);
             break;
            case 2:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],c);
             break;
            case 3:caml_bytes_unsafe_set(s$0,n[1],c);break
            }
          n[1]++;
          var _Bh_=i + 1 | 0;
          if(_Bg_ !== i){var i=_Bh_;continue}
          break}}
      return s$0}
    function map$5(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_Bb_=l - 1 | 0,_Ba_=0;
      if(! (_Bb_ < 0))
       {var i=_Ba_;
        for(;;)
         {caml_bytes_unsafe_set(r,i,caml_call1(f,caml_bytes_unsafe_get(s,i)));
          var _Bc_=i + 1 | 0;
          if(_Bb_ !== i){var i=_Bc_;continue}
          break}}
      return r}
    function mapi$1(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_A__=l - 1 | 0,_A9_=0;
      if(! (_A__ < 0))
       {var i=_A9_;
        for(;;)
         {caml_bytes_unsafe_set
           (r,i,caml_call2(f,i,caml_bytes_unsafe_get(s,i)));
          var _A$_=i + 1 | 0;
          if(_A__ !== i){var i=_A$_;continue}
          break}}
      return r}
    function fold_left$1(f,x,a)
     {var r=[0,x],_A7_=caml_ml_bytes_length(a) - 1 | 0,_A6_=0;
      if(! (_A7_ < 0))
       {var i=_A6_;
        for(;;)
         {r[1] = caml_call2(f,r[1],caml_bytes_unsafe_get(a,i));
          var _A8_=i + 1 | 0;
          if(_A7_ !== i){var i=_A8_;continue}
          break}}
      return r[1]}
    function fold_right$0(f,a,x)
     {var r=[0,x],_A4_=caml_ml_bytes_length(a) - 1 | 0;
      if(! (_A4_ < 0))
       {var i=_A4_;
        for(;;)
         {r[1] = caml_call2(f,caml_bytes_unsafe_get(a,i),r[1]);
          var _A5_=i - 1 | 0;
          if(0 !== i){var i=_A5_;continue}
          break}}
      return r[1]}
    function exists$1(p,s)
     {var n=caml_ml_bytes_length(s),i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,caml_bytes_unsafe_get(s,i)))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$1(p,s)
     {var n=caml_ml_bytes_length(s),i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,caml_bytes_unsafe_get(s,i)))
         {var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function uppercase_ascii$0(s){return map$5(uppercase_ascii,s)}
    function lowercase_ascii$0(s){return map$5(lowercase_ascii,s)}
    function apply1(f,s)
     {if(0 === caml_ml_bytes_length(s))return s;
      var r=copy(s);
      caml_bytes_unsafe_set(r,0,caml_call1(f,caml_bytes_unsafe_get(s,0)));
      return r}
    function capitalize_ascii(s){return apply1(uppercase_ascii,s)}
    function uncapitalize_ascii(s){return apply1(lowercase_ascii,s)}
    function starts_with(prefix,s)
     {var
       len_s=caml_ml_bytes_length(s),
       len_pre=caml_ml_bytes_length(prefix),
       _A3_=len_pre <= len_s?1:0;
      if(_A3_)
       {var i=0;
        for(;;)
         {if(i === len_pre)return 1;
          if(caml_bytes_unsafe_get(s,i) !== caml_bytes_unsafe_get(prefix,i))
           return 0;
          var i$0=i + 1 | 0,i=i$0;
          continue}}
      return _A3_}
    function ends_with(suffix,s)
     {var
       len_s=caml_ml_bytes_length(s),
       len_suf=caml_ml_bytes_length(suffix),
       diff=len_s - len_suf | 0,
       _A2_=0 <= diff?1:0;
      if(_A2_)
       {var i=0;
        for(;;)
         {if(i === len_suf)return 1;
          if
           (caml_bytes_unsafe_get(s,diff + i | 0)
            !==
            caml_bytes_unsafe_get(suffix,i))
           return 0;
          var i$0=i + 1 | 0,i=i$0;
          continue}}
      return _A2_}
    function index_rec(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index(s,c){return index_rec(s,caml_ml_bytes_length(s),0,c)}
    function index_rec_opt(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt(s,c)
     {return index_rec_opt(s,caml_ml_bytes_length(s),0,c)}
    function index_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))return index_rec(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_in)}
    function index_from_opt(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))return index_rec_opt(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Byte)}
    function rindex_rec(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex(s,c)
     {return rindex_rec(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from(s,i,c)
     {if(-1 <= i && ! (caml_ml_bytes_length(s) <= i))return rindex_rec(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_r)}
    function rindex_rec_opt(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt(s,c)
     {return rindex_rec_opt(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from_opt(s,i,c)
     {if(-1 <= i && ! (caml_ml_bytes_length(s) <= i))
       return rindex_rec_opt(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Byt)}
    function contains_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))
       try
        {index_rec(s,l,i,c);var _A0_=1;return _A0_}
       catch(_A1_)
        {_A1_ = caml_wrap_exception(_A1_);
         if(_A1_ === Not_found)return 0;
         throw _A1_}
      return invalid_arg(cst_String_contains_from_Bytes)}
    function contains(s,c){return contains_from(s,0,c)}
    function rcontains_from(s,i,c)
     {if(0 <= i && ! (caml_ml_bytes_length(s) <= i))
       try
        {rindex_rec(s,i,c);var _AY_=1;return _AY_}
       catch(_AZ_)
        {_AZ_ = caml_wrap_exception(_AZ_);
         if(_AZ_ === Not_found)return 0;
         throw _AZ_}
      return invalid_arg(cst_String_rcontains_from_Byte)}
    function compare$8(x,y){return runtime.caml_bytes_compare(x,y)}
    function split_on_char(sep,s)
     {var
       r=[0,0],
       j=[0,caml_ml_bytes_length(s)],
       _AU_=caml_ml_bytes_length(s) - 1 | 0;
      if(! (_AU_ < 0))
       {var i=_AU_;
        for(;;)
         {if(caml_bytes_unsafe_get(s,i) === sep)
           {var _AW_=r[1];
            r[1] = [0,sub(s,i + 1 | 0,(j[1] - i | 0) - 1 | 0),_AW_];
            j[1] = i}
          var _AX_=i - 1 | 0;
          if(0 !== i){var i=_AX_;continue}
          break}}
      var _AV_=r[1];
      return [0,sub(s,0,j[1]),_AV_]}
    function uppercase$0(s){return map$5(uppercase,s)}
    function lowercase$0(s){return map$5(lowercase,s)}
    function capitalize(s){return apply1(uppercase,s)}
    function uncapitalize(s){return apply1(lowercase,s)}
    function to_seq$2(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_AS_=i + 1 | 0;
        return [0,x,function(_AT_){return aux(_AS_,_AT_)}]}
      var _AQ_=0;
      return function(_AR_){return aux(_AQ_,_AR_)}}
    function to_seqi(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_AO_=i + 1 | 0;
        return [0,[0,i,x],function(_AP_){return aux(_AO_,_AP_)}]}
      var _AM_=0;
      return function(_AN_){return aux(_AM_,_AN_)}}
    function of_seq$0(i)
     {var n=[0,0],buf=[0,make$0(256,0)];
      iter
       (function(c)
         {if(n[1] === caml_ml_bytes_length(buf[1]))
           {var
             new_len=
              min$1(2 * caml_ml_bytes_length(buf[1]) | 0,max_string_length);
            if(caml_ml_bytes_length(buf[1]) === new_len)
             failwith(cst_Bytes_of_seq_cannot_grow_b);
            var new_buf=make$0(new_len,0);
            blit(buf[1],0,new_buf,0,n[1]);
            buf[1] = new_buf}
          caml_bytes_set(buf[1],n[1],c);
          n[1]++;
          return 0},
        i);
      return sub(buf[1],0,n[1])}
    function get$1(b,i){return caml_bswap16(caml_bytes_get16(b,i))}
    function get_int8(b,i){return caml_bytes_get(b,i) << 24 >> 24}
    function get_uint16_le(b,i){return caml_bytes_get16(b,i)}
    function get_uint16_be(b,i){return caml_bswap16(caml_bytes_get16(b,i))}
    function get_int16_ne(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_le(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_be(b,i){return get_uint16_be(b,i) << 16 >> 16}
    function get_int32_le(b,i){return caml_bytes_get32(b,i)}
    function get_int32_be(b,i){return caml_int32_bswap(caml_bytes_get32(b,i))}
    function get_int64_le(b,i){return caml_bytes_get64(b,i)}
    function get_int64_be(b,i){return caml_int64_bswap(caml_bytes_get64(b,i))}
    function set$0(b,i,x){return caml_bytes_set16(b,i,caml_bswap16(x))}
    function set_int16_le(b,i,x){return caml_bytes_set16(b,i,x)}
    function set_int16_be(b,i,x){return caml_bytes_set16(b,i,caml_bswap16(x))}
    function set_int32_le(b,i,x){return caml_bytes_set32(b,i,x)}
    function set_int32_be(b,i,x)
     {return caml_bytes_set32(b,i,caml_int32_bswap(x))}
    function set_int64_le(b,i,x){return caml_bytes_set64(b,i,x)}
    function set_int64_be(b,i,x)
     {return caml_bytes_set64(b,i,caml_int64_bswap(x))}
    var set_uint8=caml_bytes_set,set_uint16_ne=caml_bytes_set16;
    function dec_ret(n,u){return utf_decode(n,u)}
    function not_in_x80_to_xBF(b){return 2 !== (b >>> 6 | 0)?1:0}
    function not_in_xA0_to_xBF(b){return 5 !== (b >>> 5 | 0)?1:0}
    function not_in_x80_to_x9F(b){return 4 !== (b >>> 5 | 0)?1:0}
    function not_in_x90_to_xBF(b)
     {var _AK_=b < 144?1:0,_AL_=_AK_ || (191 < b?1:0);return _AL_}
    function not_in_x80_to_x8F(b){return 8 !== (b >>> 4 | 0)?1:0}
    function utf_8_uchar_3(b0,b1,b2)
     {return (b0 & 15) << 12 | (b1 & 63) << 6 | b2 & 63}
    function utf_8_uchar_4(b0,b1,b2,b3)
     {return (b0 & 7) << 18 | (b1 & 63) << 12 | (b2 & 63) << 6 | b3 & 63}
    function get_utf_8_uchar(b,i)
     {var b0=caml_bytes_get(b,i),max=caml_ml_bytes_length(b) - 1 | 0;
      if(224 <= b0)
       {var switch$0=0;
        if(237 <= b0)
         {if(! (245 <= b0))
           switch(b0 - 237 | 0)
            {case 0:
              var i$0=i + 1 | 0;
              if(max < i$0)return dec_invalid(1);
              var b1=caml_bytes_unsafe_get(b,i$0);
              if(not_in_x80_to_x9F(b1))return dec_invalid(1);
              var i$1=i$0 + 1 | 0;
              if(max < i$1)return dec_invalid(2);
              var b2=caml_bytes_unsafe_get(b,i$1);
              return not_in_x80_to_xBF(b2)
                      ?dec_invalid(2)
                      :dec_ret(3,utf_8_uchar_3(b0,b1,b2));
             case 3:
              var i$4=i + 1 | 0;
              if(max < i$4)return dec_invalid(1);
              var b1$1=caml_bytes_unsafe_get(b,i$4);
              if(not_in_x90_to_xBF(b1$1))return dec_invalid(1);
              var i$5=i$4 + 1 | 0;
              if(max < i$5)return dec_invalid(2);
              var b2$1=caml_bytes_unsafe_get(b,i$5);
              if(not_in_x80_to_xBF(b2$1))return dec_invalid(2);
              var i$6=i$5 + 1 | 0;
              if(max < i$6)return dec_invalid(3);
              var b3=caml_bytes_unsafe_get(b,i$6);
              return not_in_x80_to_xBF(b3)
                      ?dec_invalid(3)
                      :dec_ret(4,utf_8_uchar_4(b0,b1$1,b2$1,b3));
             case 7:
              var i$10=i + 1 | 0;
              if(max < i$10)return dec_invalid(1);
              var b1$3=caml_bytes_unsafe_get(b,i$10);
              if(not_in_x80_to_x8F(b1$3))return dec_invalid(1);
              var i$11=i$10 + 1 | 0;
              if(max < i$11)return dec_invalid(2);
              var b2$3=caml_bytes_unsafe_get(b,i$11);
              if(not_in_x80_to_xBF(b2$3))return dec_invalid(2);
              var i$12=i$11 + 1 | 0;
              if(max < i$12)return dec_invalid(3);
              var b3$1=caml_bytes_unsafe_get(b,i$12);
              return not_in_x80_to_xBF(b3$1)
                      ?dec_invalid(3)
                      :dec_ret(4,utf_8_uchar_4(b0,b1$3,b2$3,b3$1));
             case 1:
             case 2:switch$0 = 1;break;
             default:
              var i$7=i + 1 | 0;
              if(max < i$7)return dec_invalid(1);
              var b1$2=caml_bytes_unsafe_get(b,i$7);
              if(not_in_x80_to_xBF(b1$2))return dec_invalid(1);
              var i$8=i$7 + 1 | 0;
              if(max < i$8)return dec_invalid(2);
              var b2$2=caml_bytes_unsafe_get(b,i$8);
              if(not_in_x80_to_xBF(b2$2))return dec_invalid(2);
              var i$9=i$8 + 1 | 0;
              if(max < i$9)return dec_invalid(3);
              var b3$0=caml_bytes_unsafe_get(b,i$9);
              return not_in_x80_to_xBF(b3$0)
                      ?dec_invalid(3)
                      :dec_ret(4,utf_8_uchar_4(b0,b1$2,b2$2,b3$0))}}
        else
         {if(! (225 <= b0))
           {var i$13=i + 1 | 0;
            if(max < i$13)return dec_invalid(1);
            var b1$4=caml_bytes_unsafe_get(b,i$13);
            if(not_in_xA0_to_xBF(b1$4))return dec_invalid(1);
            var i$14=i$13 + 1 | 0;
            if(max < i$14)return dec_invalid(2);
            var b2$4=caml_bytes_unsafe_get(b,i$14);
            return not_in_x80_to_xBF(b2$4)
                    ?dec_invalid(2)
                    :dec_ret(3,utf_8_uchar_3(b0,b1$4,b2$4))}
          switch$0 = 1}
        if(switch$0)
         {var i$2=i + 1 | 0;
          if(max < i$2)return dec_invalid(1);
          var b1$0=caml_bytes_unsafe_get(b,i$2);
          if(not_in_x80_to_xBF(b1$0))return dec_invalid(1);
          var i$3=i$2 + 1 | 0;
          if(max < i$3)return dec_invalid(2);
          var b2$0=caml_bytes_unsafe_get(b,i$3);
          return not_in_x80_to_xBF(b2$0)
                  ?dec_invalid(2)
                  :dec_ret(3,utf_8_uchar_3(b0,b1$0,b2$0))}}
      else
       {if(! (128 <= b0))return dec_ret(1,b0);
        if(194 <= b0)
         {var i$15=i + 1 | 0;
          if(max < i$15)return dec_invalid(1);
          var b1$5=caml_bytes_unsafe_get(b,i$15);
          return not_in_x80_to_xBF(b1$5)
                  ?dec_invalid(1)
                  :dec_ret(2,(b0 & 31) << 6 | b1$5 & 63)}}
      return dec_invalid(1)}
    function set_utf_8_uchar(b,i,u)
     {function set(_AJ_,_AI_,_AH_)
       {caml_bytes_unsafe_set(_AJ_,_AI_,_AH_);return 0}
      var max=caml_ml_bytes_length(b) - 1 | 0;
      if(0 <= u)
       {if(127 < u)
         {if(2047 < u)
           {if(65535 < u)
             {if(1114111 < u)throw [0,Assert_failure,_B_];
              var last=i + 3 | 0;
              return max < last
                      ?0
                      :(caml_bytes_set(b,i,240 | u >>> 18 | 0),
                        set(b,i + 1 | 0,128 | (u >>> 12 | 0) & 63),
                        set(b,i + 2 | 0,128 | (u >>> 6 | 0) & 63),
                        set(b,last,128 | u & 63),
                        4)}
            var last$0=i + 2 | 0;
            return max < last$0
                    ?0
                    :(caml_bytes_set(b,i,224 | u >>> 12 | 0),
                      set(b,i + 1 | 0,128 | (u >>> 6 | 0) & 63),
                      set(b,last$0,128 | u & 63),
                      3)}
          var last$1=i + 1 | 0;
          return max < last$1
                  ?0
                  :(caml_bytes_set(b,i,192 | u >>> 6 | 0),
                    set(b,last$1,128 | u & 63),
                    2)}
        caml_bytes_set(b,i,u);
        return 1}
      throw [0,Assert_failure,_C_]}
    function is_valid_utf_8(b)
     {var max=caml_ml_bytes_length(b) - 1 | 0,i=0;
      for(;;)
       {if(max < i)return 1;
        var match=caml_bytes_unsafe_get(b,i);
        if(224 <= match)
         {var switch$0=0;
          if(237 <= match)
           {if(! (245 <= match))
             switch(match - 237 | 0)
              {case 0:
                var last=i + 2 | 0;
                if
                 (!
                  (max < last)
                  &&
                  !
                  not_in_x80_to_x9F(caml_bytes_unsafe_get(b,i + 1 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last)))
                 {var i$0=last + 1 | 0,i=i$0;continue}
                return 0;
               case 3:
                var last$1=i + 3 | 0;
                if
                 (!
                  (max < last$1)
                  &&
                  !
                  not_in_x90_to_xBF(caml_bytes_unsafe_get(b,i + 1 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,i + 2 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$1)))
                 {var i$2=last$1 + 1 | 0,i=i$2;continue}
                return 0;
               case 7:
                var last$3=i + 3 | 0;
                if
                 (!
                  (max < last$3)
                  &&
                  !
                  not_in_x80_to_x8F(caml_bytes_unsafe_get(b,i + 1 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,i + 2 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$3)))
                 {var i$4=last$3 + 1 | 0,i=i$4;continue}
                return 0;
               case 1:
               case 2:switch$0 = 1;break;
               default:
                var last$2=i + 3 | 0;
                if
                 (!
                  (max < last$2)
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,i + 1 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,i + 2 | 0))
                  &&
                  !
                  not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$2)))
                 {var i$3=last$2 + 1 | 0,i=i$3;continue}
                return 0}}
          else
           {if(! (225 <= match))
             {var last$4=i + 2 | 0;
              if
               (!
                (max < last$4)
                &&
                !
                not_in_xA0_to_xBF(caml_bytes_unsafe_get(b,i + 1 | 0))
                &&
                !
                not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$4)))
               {var i$5=last$4 + 1 | 0,i=i$5;continue}
              return 0}
            switch$0 = 1}
          if(switch$0)
           {var last$0=i + 2 | 0;
            if
             (!
              (max < last$0)
              &&
              !
              not_in_x80_to_xBF(caml_bytes_unsafe_get(b,i + 1 | 0))
              &&
              !
              not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$0)))
             {var i$1=last$0 + 1 | 0,i=i$1;continue}
            return 0}}
        else
         {if(! (128 <= match)){var i$7=i + 1 | 0,i=i$7;continue}
          if(194 <= match)
           {var last$5=i + 1 | 0;
            if
             (!
              (max < last$5)
              &&
              !
              not_in_x80_to_xBF(caml_bytes_unsafe_get(b,last$5)))
             {var i$6=last$5 + 1 | 0,i=i$6;continue}
            return 0}}
        return 0}}
    function get_utf_16be_uchar(b,i)
     {var max=caml_ml_bytes_length(b) - 1 | 0;
      if(0 <= i && ! (max < i))
       {if(i === max)return dec_invalid(1);
        var hi=get$1(b,i);
        if(55296 <= hi && ! (57343 < hi))
         {if(56319 < hi)return dec_invalid(2);
          var last=i + 3 | 0;
          if(max < last)return dec_invalid((max - i | 0) + 1 | 0);
          var u=get$1(b,i + 2 | 0);
          if(56320 <= u && ! (57343 < u))
           {var u$0=((hi & 1023) << 10 | u & 1023) + 65536 | 0;
            return dec_ret(4,u$0)}
          return dec_invalid(2)}
        return dec_ret(2,hi)}
      return invalid_arg(cst_index_out_of_bounds)}
    function set_utf_16be_uchar(b,i,u)
     {var max=caml_ml_bytes_length(b) - 1 | 0;
      if(0 <= i && ! (max < i))
       {if(0 <= u)
         {if(65535 < u)
           {if(1114111 < u)throw [0,Assert_failure,_D_];
            var last=i + 3 | 0;
            if(max < last)return 0;
            var
             u$0=u - 65536 | 0,
             hi=55296 | u$0 >>> 10 | 0,
             lo=56320 | u$0 & 1023;
            set$0(b,i,hi);
            set$0(b,i + 2 | 0,lo);
            return 4}
          var last$0=i + 1 | 0;
          return max < last$0?0:(set$0(b,i,u),2)}
        throw [0,Assert_failure,_E_]}
      return invalid_arg(cst_index_out_of_bounds$0)}
    function is_valid_utf_16be(b)
     {var max=caml_ml_bytes_length(b) - 1 | 0,i=0;
      for(;;)
       {if(max < i)return 1;
        if(i === max)return 0;
        var u=get$1(b,i);
        if(55296 <= u && ! (57343 < u))
         {if(56319 < u)return 0;
          var last=i + 3 | 0;
          if(max < last)return 0;
          var u$0=get$1(b,i + 2 | 0);
          if(56320 <= u$0 && ! (57343 < u$0))
           {var i$1=i + 4 | 0,i=i$1;continue}
          return 0}
        var i$0=i + 2 | 0,i=i$0;
        continue}}
    function get_utf_16le_uchar(b,i)
     {var max=caml_ml_bytes_length(b) - 1 | 0;
      if(0 <= i && ! (max < i))
       {if(i === max)return dec_invalid(1);
        var hi=caml_bytes_get16(b,i);
        if(55296 <= hi && ! (57343 < hi))
         {if(56319 < hi)return dec_invalid(2);
          var last=i + 3 | 0;
          if(max < last)return dec_invalid((max - i | 0) + 1 | 0);
          var u=caml_bytes_get16(b,i + 2 | 0);
          if(56320 <= u && ! (57343 < u))
           {var u$0=((hi & 1023) << 10 | u & 1023) + 65536 | 0;
            return dec_ret(4,u$0)}
          return dec_invalid(2)}
        return dec_ret(2,hi)}
      return invalid_arg(cst_index_out_of_bounds$1)}
    function set_utf_16le_uchar(b,i,u)
     {var max=caml_ml_bytes_length(b) - 1 | 0;
      if(0 <= i && ! (max < i))
       {if(0 <= u)
         {if(65535 < u)
           {if(1114111 < u)throw [0,Assert_failure,_F_];
            var last=i + 3 | 0;
            if(max < last)return 0;
            var
             u$0=u - 65536 | 0,
             hi=55296 | u$0 >>> 10 | 0,
             lo=56320 | u$0 & 1023;
            caml_bytes_set16(b,i,hi);
            caml_bytes_set16(b,i + 2 | 0,lo);
            return 4}
          var last$0=i + 1 | 0;
          return max < last$0?0:(caml_bytes_set16(b,i,u),2)}
        throw [0,Assert_failure,_G_]}
      return invalid_arg(cst_index_out_of_bounds$2)}
    function is_valid_utf_16le(b)
     {var max=caml_ml_bytes_length(b) - 1 | 0,i=0;
      for(;;)
       {if(max < i)return 1;
        if(i === max)return 0;
        var u=caml_bytes_get16(b,i);
        if(55296 <= u && ! (57343 < u))
         {if(56319 < u)return 0;
          var last=i + 3 | 0;
          if(max < last)return 0;
          var u$0=caml_bytes_get16(b,i + 2 | 0);
          if(56320 <= u$0 && ! (57343 < u$0))
           {var i$1=i + 4 | 0,i=i$1;continue}
          return 0}
        var i$0=i + 2 | 0,i=i$0;
        continue}}
    var
     set_int64_ne=caml_bytes_set64,
     set_int32_ne=caml_bytes_set32,
     set_int16_ne=caml_bytes_set16,
     set_int8=caml_bytes_set,
     get_int64_ne=caml_bytes_get64,
     get_int32_ne=caml_bytes_get32,
     get_uint16_ne=caml_bytes_get16,
     get_uint8=caml_bytes_get,
     unsafe_of_string=caml_bytes_of_string,
     unsafe_to_string=caml_string_of_bytes,
     equal$8=runtime.caml_bytes_equal,
     include$1=
      [0,
       make$0,
       init$1,
       empty$0,
       copy,
       to_bytes,
       of_bytes,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat$0,
       cat$0,
       iter$3,
       iteri$1,
       map$5,
       mapi$1,
       fold_left$1,
       fold_right$0,
       for_all$1,
       exists$1,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$8,
       equal$8,
       starts_with,
       ends_with,
       unsafe_to_string,
       unsafe_of_string,
       split_on_char,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_utf_8_uchar,
       set_utf_8_uchar,
       is_valid_utf_8,
       get_utf_16be_uchar,
       set_utf_16be_uchar,
       is_valid_utf_16be,
       get_utf_16le_uchar,
       set_utf_16le_uchar,
       is_valid_utf_16le,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le];
    caml_register_global(790,include$1,"Stdlib__Bytes");
    function make$1(n,c){return caml_string_of_bytes(make$0(n,c))}
    function init$2(n,f){return caml_string_of_bytes(init$1(n,f))}
    function copy$0(s)
     {return caml_string_of_bytes(copy(caml_bytes_of_string(s)))}
    function sub$0(s,ofs,len)
     {return caml_string_of_bytes(sub(caml_bytes_of_string(s),ofs,len))}
    function concat$1(sep,l)
     {if(l)
       {var seplen=caml_ml_string_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _AE_=param[1];
            if(param[2])
             {var
               tl=param[2],
               x=(caml_ml_string_length(_AE_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_String_concat),
               acc=acc$0,
               param=tl;
              continue}
            var _AG_=caml_ml_string_length(_AE_) + acc | 0}
          else
           var _AG_=acc;
          var dst=caml_create_bytes(_AG_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _AF_=param$0[1];
              if(param$0[2])
               {var tl$0=param$0[2];
                caml_blit_string(_AF_,0,dst,pos,caml_ml_string_length(_AF_));
                caml_blit_string
                 (sep,0,dst,pos + caml_ml_string_length(_AF_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_string_length(_AF_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=tl$0;
                continue}
              caml_blit_string(_AF_,0,dst,pos,caml_ml_string_length(_AF_))}
            return caml_string_of_bytes(dst)}}}
      return cst$3}
    function iter$4(f,s)
     {var _AC_=caml_ml_string_length(s) - 1 | 0,_AB_=0;
      if(! (_AC_ < 0))
       {var i=_AB_;
        for(;;)
         {caml_call1(f,caml_string_unsafe_get(s,i));
          var _AD_=i + 1 | 0;
          if(_AC_ !== i){var i=_AD_;continue}
          break}}
      return 0}
    function iteri$2(f,s)
     {var _Az_=caml_ml_string_length(s) - 1 | 0,_Ay_=0;
      if(! (_Az_ < 0))
       {var i=_Ay_;
        for(;;)
         {caml_call2(f,i,caml_string_unsafe_get(s,i));
          var _AA_=i + 1 | 0;
          if(_Az_ !== i){var i=_AA_;continue}
          break}}
      return 0}
    function map$6(f,s)
     {return caml_string_of_bytes(map$5(f,caml_bytes_of_string(s)))}
    function mapi$2(f,s)
     {return caml_string_of_bytes(mapi$1(f,caml_bytes_of_string(s)))}
    function fold_right$1(f,x,a)
     {return fold_right$0(f,caml_bytes_of_string(x),a)}
    function fold_left$2(f,a,x)
     {return fold_left$1(f,a,caml_bytes_of_string(x))}
    function exists$2(f,s){return exists$1(f,caml_bytes_of_string(s))}
    function for_all$2(f,s){return for_all$1(f,caml_bytes_of_string(s))}
    function is_space$0(param)
     {var _Ax_=param - 9 | 0,switch$0=0;
      if(4 < _Ax_ >>> 0)
       {if(23 === _Ax_)switch$0 = 1}
      else
       if(2 !== _Ax_)switch$0 = 1;
      return switch$0?1:0}
    function trim$0(s)
     {if(caml_string_equal(s,cst$4))return s;
      if
       (!
        is_space$0(caml_string_unsafe_get(s,0))
        &&
        !
        is_space$0(caml_string_unsafe_get(s,caml_ml_string_length(s) - 1 | 0)))
       return s;
      return caml_string_of_bytes(trim(caml_bytes_of_string(s)))}
    function escaped$1(s)
     {var n=caml_ml_string_length(s),i=0;
      for(;;)
       {if(n <= i)return s;
        var match=caml_string_unsafe_get(s,i),_Aw_=match - 32 | 0,switch$0=0;
        if(59 < _Aw_ >>> 0)
         {if(33 < _Aw_ - 61 >>> 0)switch$0 = 1}
        else
         if(2 === _Aw_)switch$0 = 1;
        if(switch$0)
         return caml_string_of_bytes(escaped$0(caml_bytes_of_string(s)));
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function index_rec$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_string_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index$0(s,c){return index_rec$0(s,caml_ml_string_length(s),0,c)}
    function index_rec_opt$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt$0(s,c)
     {return index_rec_opt$0(s,caml_ml_string_length(s),0,c)}
    function index_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))return index_rec$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_in$0)}
    function index_from_opt$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))return index_rec_opt$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Byte$0)}
    function rindex_rec$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex$0(s,c)
     {return rindex_rec$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from$0(s,i,c)
     {if(-1 <= i && ! (caml_ml_string_length(s) <= i))
       return rindex_rec$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_r$0)}
    function rindex_rec_opt$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt$0(s,c)
     {return rindex_rec_opt$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from_opt$0(s,i,c)
     {if(-1 <= i && ! (caml_ml_string_length(s) <= i))
       return rindex_rec_opt$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Byt$0)}
    function contains_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))
       try
        {index_rec$0(s,l,i,c);var _Au_=1;return _Au_}
       catch(_Av_)
        {_Av_ = caml_wrap_exception(_Av_);
         if(_Av_ === Not_found)return 0;
         throw _Av_}
      return invalid_arg(cst_String_contains_from_Bytes$0)}
    function contains$0(s,c){return contains_from$0(s,0,c)}
    function rcontains_from$0(s,i,c)
     {if(0 <= i && ! (caml_ml_string_length(s) <= i))
       try
        {rindex_rec$0(s,i,c);var _As_=1;return _As_}
       catch(_At_)
        {_At_ = caml_wrap_exception(_At_);
         if(_At_ === Not_found)return 0;
         throw _At_}
      return invalid_arg(cst_String_rcontains_from_Byte$0)}
    function uppercase_ascii$1(s)
     {return caml_string_of_bytes(uppercase_ascii$0(caml_bytes_of_string(s)))}
    function lowercase_ascii$1(s)
     {return caml_string_of_bytes(lowercase_ascii$0(caml_bytes_of_string(s)))}
    function capitalize_ascii$0(s)
     {return caml_string_of_bytes(capitalize_ascii(caml_bytes_of_string(s)))}
    function uncapitalize_ascii$0(s)
     {return caml_string_of_bytes(uncapitalize_ascii(caml_bytes_of_string(s)))}
    function starts_with$0(prefix,s)
     {var
       len_s=caml_ml_string_length(s),
       len_pre=caml_ml_string_length(prefix),
       _Ar_=len_pre <= len_s?1:0;
      if(_Ar_)
       {var i=0;
        for(;;)
         {if(i === len_pre)return 1;
          if(caml_string_unsafe_get(s,i) !== caml_string_unsafe_get(prefix,i))
           return 0;
          var i$0=i + 1 | 0,i=i$0;
          continue}}
      return _Ar_}
    function ends_with$0(suffix,s)
     {var
       len_s=caml_ml_string_length(s),
       len_suf=caml_ml_string_length(suffix),
       diff=len_s - len_suf | 0,
       _Aq_=0 <= diff?1:0;
      if(_Aq_)
       {var i=0;
        for(;;)
         {if(i === len_suf)return 1;
          if
           (caml_string_unsafe_get(s,diff + i | 0)
            !==
            caml_string_unsafe_get(suffix,i))
           return 0;
          var i$0=i + 1 | 0,i=i$0;
          continue}}
      return _Aq_}
    function split_on_char$0(sep,s)
     {var
       r=[0,0],
       j=[0,caml_ml_string_length(s)],
       _Am_=caml_ml_string_length(s) - 1 | 0;
      if(! (_Am_ < 0))
       {var i=_Am_;
        for(;;)
         {if(caml_string_unsafe_get(s,i) === sep)
           {var _Ao_=r[1];
            r[1] = [0,sub$0(s,i + 1 | 0,(j[1] - i | 0) - 1 | 0),_Ao_];
            j[1] = i}
          var _Ap_=i - 1 | 0;
          if(0 !== i){var i=_Ap_;continue}
          break}}
      var _An_=r[1];
      return [0,sub$0(s,0,j[1]),_An_]}
    function uppercase$1(s)
     {return caml_string_of_bytes(uppercase$0(caml_bytes_of_string(s)))}
    function lowercase$1(s)
     {return caml_string_of_bytes(lowercase$0(caml_bytes_of_string(s)))}
    function capitalize$0(s)
     {return caml_string_of_bytes(capitalize(caml_bytes_of_string(s)))}
    function uncapitalize$0(s)
     {return caml_string_of_bytes(uncapitalize(caml_bytes_of_string(s)))}
    function compare$9(x,y){return caml_string_compare(x,y)}
    function to_seq$3(s){return to_seq$2(caml_bytes_of_string(s))}
    function to_seqi$0(s){return to_seqi(caml_bytes_of_string(s))}
    function of_seq$1(g){return caml_string_of_bytes(of_seq$0(g))}
    function get_utf_8_uchar$0(s,i)
     {return get_utf_8_uchar(caml_bytes_of_string(s),i)}
    function is_valid_utf_8$0(s)
     {return is_valid_utf_8(caml_bytes_of_string(s))}
    function get_utf_16be_uchar$0(s,i)
     {return get_utf_16be_uchar(caml_bytes_of_string(s),i)}
    function is_valid_utf_16be$0(s)
     {return is_valid_utf_16be(caml_bytes_of_string(s))}
    function get_utf_16le_uchar$0(s,i)
     {return get_utf_16le_uchar(caml_bytes_of_string(s),i)}
    function is_valid_utf_16le$0(s)
     {return is_valid_utf_16le(caml_bytes_of_string(s))}
    function get_int8$0(s,i){return get_int8(caml_bytes_of_string(s),i)}
    function get_uint16_le$0(s,i)
     {return caml_bytes_get16(caml_bytes_of_string(s),i)}
    function get_uint16_be$0(s,i)
     {return get_uint16_be(caml_bytes_of_string(s),i)}
    function get_int16_ne$0(s,i)
     {return get_int16_ne(caml_bytes_of_string(s),i)}
    function get_int16_le$0(s,i)
     {return get_int16_le(caml_bytes_of_string(s),i)}
    function get_int16_be$0(s,i)
     {return get_int16_be(caml_bytes_of_string(s),i)}
    function get_int32_le$0(s,i)
     {return caml_bytes_get32(caml_bytes_of_string(s),i)}
    function get_int32_be$0(s,i)
     {return get_int32_be(caml_bytes_of_string(s),i)}
    function get_int64_le$0(s,i)
     {return caml_bytes_get64(caml_bytes_of_string(s),i)}
    function get_int64_be$0(s,i)
     {return get_int64_be(caml_bytes_of_string(s),i)}
    var
     get_int64_ne$0=runtime.caml_string_get64,
     get_int32_ne$0=runtime.caml_string_get32,
     get_uint16_ne$0=runtime.caml_string_get16,
     get_uint8$0=caml_string_get,
     equal$9=caml_string_equal,
     include$2=
      [0,
       make$1,
       init$2,
       empty$1,
       of_bytes,
       to_bytes,
       concat$1,
       cat,
       equal$9,
       compare$9,
       starts_with$0,
       ends_with$0,
       contains_from$0,
       rcontains_from$0,
       contains$0,
       sub$0,
       split_on_char$0,
       map$6,
       mapi$2,
       fold_left$2,
       fold_right$1,
       for_all$2,
       exists$2,
       trim$0,
       escaped$1,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       iter$4,
       iteri$2,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       to_seq$3,
       to_seqi$0,
       of_seq$1,
       get_utf_8_uchar$0,
       is_valid_utf_8$0,
       get_utf_16be_uchar$0,
       is_valid_utf_16be$0,
       get_utf_16le_uchar$0,
       is_valid_utf_16le$0,
       blit$0,
       copy$0,
       fill,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       get_uint8$0,
       get_int8$0,
       get_uint16_ne$0,
       get_uint16_be$0,
       get_uint16_le$0,
       get_int16_ne$0,
       get_int16_be$0,
       get_int16_le$0,
       get_int32_ne$0,
       get_int32_be$0,
       get_int32_le$0,
       get_int64_ne$0,
       get_int64_be$0,
       get_int64_le$0];
    caml_register_global(791,include$2,"Stdlib__String");
    function equal$10(param,_Al_){return 1}
    function compare$10(param,_Ak_){return 0}
    function to_string$2(param){return cst$5}
    var Stdlib_Unit=[0,equal$10,compare$10,to_string$2];
    caml_register_global(792,Stdlib_Unit,"Stdlib__Unit");
    function to_buffer(buff,ofs,len,v,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buff) - len | 0) < ofs))
       return runtime.caml_output_value_to_buffer(buff,ofs,len,v,flags);
      return invalid_arg(cst_Marshal_to_buffer_substrin)}
    var header_size=20;
    function data_size(buff,ofs)
     {if(0 <= ofs && ! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
       return caml_marshal_data_size(buff,ofs);
      return invalid_arg(cst_Marshal_data_size)}
    function total_size(buff,ofs){return 20 + data_size(buff,ofs) | 0}
    function from_bytes(buff,ofs)
     {if(0 <= ofs && ! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
       {var len=caml_marshal_data_size(buff,ofs);
        return (caml_ml_bytes_length(buff) - (20 + len | 0) | 0) < ofs
                ?invalid_arg(cst_Marshal_from_bytes$0)
                :runtime.caml_input_value_from_bytes(buff,ofs)}
      return invalid_arg(cst_Marshal_from_bytes)}
    function from_string(buff,ofs)
     {return from_bytes(caml_bytes_of_string(buff),ofs)}
    var
     Stdlib_Marshal=
      [0,
       caml_output_value,
       to_buffer,
       caml_input_value,
       from_bytes,
       from_string,
       header_size,
       data_size,
       total_size];
    caml_register_global(793,Stdlib_Marshal,"Stdlib__Marshal");
    var make_float=runtime.caml_make_float_vect,Floatarray=[0];
    function init$3(l,f)
     {if(0 === l)return [0];
      if(0 <= l)
       {var res=caml_make_vect(l,caml_call1(f,0)),_Ai_=l - 1 | 0,_Ah_=1;
        if(! (_Ai_ < 1))
         {var i=_Ah_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _Aj_=i + 1 | 0;
            if(_Ai_ !== i){var i=_Aj_;continue}
            break}}
        return res}
      return invalid_arg(cst_Array_init)}
    function create_matrix(sx,sy,init)
     {var res=caml_make_vect(sx,[0]),_Af_=sx - 1 | 0,_Ae_=0;
      if(! (_Af_ < 0))
       {var x=_Ae_;
        for(;;)
         {res[1 + x] = caml_make_vect(sy,init);
          var _Ag_=x + 1 | 0;
          if(_Af_ !== x){var x=_Ag_;continue}
          break}}
      return res}
    function copy$1(a)
     {var l=a.length - 1;return 0 === l?[0]:caml_array_sub(a,0,l)}
    function append$1(a1,a2)
     {var l1=a1.length - 1;
      return 0 === l1
              ?copy$1(a2)
              :0 === a2.length - 1
                ?caml_array_sub(a1,0,l1)
                :runtime.caml_array_append(a1,a2)}
    function sub$1(a,ofs,len)
     {if(0 <= ofs && 0 <= len && ! ((a.length - 1 - len | 0) < ofs))
       return caml_array_sub(a,ofs,len);
      return invalid_arg(cst_Array_sub)}
    function fill$0(a,ofs,len,v)
     {if(0 <= ofs && 0 <= len && ! ((a.length - 1 - len | 0) < ofs))
       return runtime.caml_array_fill(a,ofs,len,v);
      return invalid_arg(cst_Array_fill)}
    function blit$1(a1,ofs1,a2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((a1.length - 1 - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((a2.length - 1 - len | 0) < ofs2))
       return runtime.caml_array_blit(a1,ofs1,a2,ofs2,len);
      return invalid_arg(cst_Array_blit)}
    function iter$5(f,a)
     {var _Ac_=a.length - 1 - 1 | 0,_Ab_=0;
      if(! (_Ac_ < 0))
       {var i=_Ab_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _Ad_=i + 1 | 0;
          if(_Ac_ !== i){var i=_Ad_;continue}
          break}}
      return 0}
    function iter2$1(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg(cst_Array_iter2_arrays_must_ha);
      var _z$_=a.length - 1 - 1 | 0,_z__=0;
      if(! (_z$_ < 0))
       {var i=_z__;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _Aa_=i + 1 | 0;
          if(_z$_ !== i){var i=_Aa_;continue}
          break}}
      return 0}
    function map$7(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_z8_=l - 1 | 0,_z7_=1;
      if(! (_z8_ < 1))
       {var i=_z7_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _z9_=i + 1 | 0;
          if(_z8_ !== i){var i=_z9_;continue}
          break}}
      return r}
    function map2$1(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)return invalid_arg(cst_Array_map2_arrays_must_hav);
      if(0 === la)return [0];
      var r=caml_make_vect(la,caml_call2(f,a[1],b[1])),_z5_=la - 1 | 0,_z4_=1;
      if(! (_z5_ < 1))
       {var i=_z4_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _z6_=i + 1 | 0;
          if(_z5_ !== i){var i=_z6_;continue}
          break}}
      return r}
    function iteri$3(f,a)
     {var _z2_=a.length - 1 - 1 | 0,_z1_=0;
      if(! (_z2_ < 0))
       {var i=_z1_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _z3_=i + 1 | 0;
          if(_z2_ !== i){var i=_z3_;continue}
          break}}
      return 0}
    function mapi$3(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call2(f,0,a[1])),_zZ_=l - 1 | 0,_zY_=1;
      if(! (_zZ_ < 1))
       {var i=_zY_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _z0_=i + 1 | 0;
          if(_zZ_ !== i){var i=_z0_;continue}
          break}}
      return r}
    function to_list$1(a)
     {var i$1=a.length - 1 - 1 | 0,i=i$1,res=0;
      for(;;)
       {if(0 <= i)
         {var res$0=[0,a[1 + i],res],i$0=i - 1 | 0,i=i$0,res=res$0;continue}
        return res}}
    function list_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[2],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function of_list(l)
     {if(l)
       {var
         tl=l[2],
         hd=l[1],
         a=caml_make_vect(list_length(0,l),hd),
         i=1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i + 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    function fold_left$3(f,x,a)
     {var r=[0,x],_zW_=a.length - 1 - 1 | 0,_zV_=0;
      if(! (_zW_ < 0))
       {var i=_zV_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _zX_=i + 1 | 0;
          if(_zW_ !== i){var i=_zX_;continue}
          break}}
      return r[1]}
    function fold_left_map$0(f,acc,input_array)
     {var len=input_array.length - 1;
      if(0 === len)return [0,acc,[0]];
      var
       match=caml_call2(f,acc,input_array[1]),
       elt=match[2],
       acc$0=match[1],
       output_array=caml_make_vect(len,elt),
       acc$1=[0,acc$0],
       _zT_=len - 1 | 0,
       _zS_=1;
      if(! (_zT_ < 1))
       {var i=_zS_;
        for(;;)
         {var
           match$0=caml_call2(f,acc$1[1],input_array[1 + i]),
           elt$0=match$0[2],
           acc$2=match$0[1];
          acc$1[1] = acc$2;
          output_array[1 + i] = elt$0;
          var _zU_=i + 1 | 0;
          if(_zT_ !== i){var i=_zU_;continue}
          break}}
      return [0,acc$1[1],output_array]}
    function fold_right$2(f,a,x)
     {var r=[0,x],_zQ_=a.length - 1 - 1 | 0;
      if(! (_zQ_ < 0))
       {var i=_zQ_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _zR_=i - 1 | 0;
          if(0 !== i){var i=_zR_;continue}
          break}}
      return r[1]}
    function exists$3(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$3(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function for_all2$1(p,l1,l2)
     {var n1=l1.length - 1,n2=l2.length - 1;
      if(n1 !== n2)return invalid_arg(cst_Array_for_all2);
      var i=0;
      for(;;)
       {if(i === n1)return 1;
        if(caml_call2(p,l1[1 + i],l2[1 + i]))
         {var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function exists2$1(p,l1,l2)
     {var n1=l1.length - 1,n2=l2.length - 1;
      if(n1 !== n2)return invalid_arg(cst_Array_exists2);
      var i=0;
      for(;;)
       {if(i === n1)return 0;
        if(caml_call2(p,l1[1 + i],l2[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function mem$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function memq$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x === a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function find_opt$0(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        var x=a[1 + i];
        if(caml_call1(p,x))return [0,x];
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function find_map$1(f,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        var r=caml_call1(f,a[1 + i]);
        if(r)return r;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function split$0(x)
     {if(caml_equal(x,[0]))return [0,[0],[0]];
      var
       match=x[1],
       b0=match[2],
       a0=match[1],
       n=x.length - 1,
       a=caml_make_vect(n,a0),
       b=caml_make_vect(n,b0),
       _zO_=n - 1 | 0,
       _zN_=1;
      if(! (_zO_ < 1))
       {var i=_zN_;
        for(;;)
         {var match$0=x[1 + i],bi=match$0[2],ai=match$0[1];
          a[1 + i] = ai;
          b[1 + i] = bi;
          var _zP_=i + 1 | 0;
          if(_zO_ !== i){var i=_zP_;continue}
          break}}
      return [0,a,b]}
    function combine$0(a,b)
     {var na=a.length - 1,nb=b.length - 1;
      if(na !== nb)invalid_arg(cst_Array_combine);
      if(0 === na)return [0];
      var x=caml_make_vect(na,[0,a[1],b[1]]),_zL_=na - 1 | 0,_zK_=1;
      if(! (_zL_ < 1))
       {var i=_zK_;
        for(;;)
         {x[1 + i] = [0,a[1 + i],b[1 + i]];
          var _zM_=i + 1 | 0;
          if(_zL_ !== i){var i=_zM_;continue}
          break}}
      return x}
    var Bottom=[248,cst_Stdlib_Array_Bottom,caml_fresh_oo_id(0)];
    function sort(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {var _zD_=i31 + 1 | 0,_zE_=caml_check_bound(a,_zD_)[1 + _zD_];
          if(caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_zE_) < 0)
           x[1] = i31 + 1 | 0;
          var
           _zF_=i31 + 2 | 0,
           _zG_=caml_check_bound(a,_zF_)[1 + _zF_],
           _zH_=x[1];
          if(caml_call2(cmp,caml_check_bound(a,_zH_)[1 + _zH_],_zG_) < 0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if((i31 + 1 | 0) < l)
         {var _zI_=i31 + 1 | 0,_zJ_=caml_check_bound(a,_zI_)[1 + _zI_];
          if(! (0 <= caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_zJ_)))
           return i31 + 1 | 0}
        if(i31 < l)return i31;
        throw [0,Bottom,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_check_bound(a,j)[1 + j],e))
           {var _zC_=caml_check_bound(a,j)[1 + j];
            caml_check_bound(a,i$0)[1 + i$0] = _zC_;
            var i$0=j;
            continue}
          caml_check_bound(a,i$0)[1 + i$0] = e;
          return 0}}
      function trickle(l,i,e)
       {try
         {var _zB_=trickledown(l,i,e);return _zB_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom)
           {var i$0=exn[2];caml_check_bound(a,i$0)[1 + i$0] = e;return 0}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0),_zA_=caml_check_bound(a,i$1)[1 + i$1];
          caml_check_bound(a,i$0)[1 + i$0] = _zA_;
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _zz_=bubbledown(l,i);return _zz_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_zr_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_zr_ < 0))
       {var i$2=_zr_;
        for(;;)
         {trickle(l,i$2,caml_check_bound(a,i$2)[1 + i$2]);
          var _zy_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_zy_;continue}
          break}}
      var _zs_=l - 1 | 0;
      if(! (_zs_ < 2))
       {var i$0=_zs_;
        a:
        for(;;)
         {var
           e$0=caml_check_bound(a,i$0)[1 + i$0],
           _zw_=caml_check_bound(a,0)[1];
          caml_check_bound(a,i$0)[1 + i$0] = _zw_;
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_H_];
            if
             (0 <= caml_call2(cmp,caml_check_bound(a,father)[1 + father],e$0))
             caml_check_bound(a,i)[1 + i] = e$0;
            else
             {var _zq_=caml_check_bound(a,father)[1 + father];
              caml_check_bound(a,i)[1 + i] = _zq_;
              if(0 < father){var i=father;continue}
              caml_check_bound(a,0)[1] = e$0}
            var _zx_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_zx_;continue a}
            break}
          break}}
      var _zt_=1 < l?1:0;
      if(_zt_)
       {var e=caml_check_bound(a,1)[2],_zu_=caml_check_bound(a,0)[1];
        caml_check_bound(a,1)[2] = _zu_;
        caml_check_bound(a,0)[1] = e;
        var _zv_=0}
      else
       var _zv_=_zt_;
      return _zv_}
    function fast_sort$0(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_check_bound(src2,src2ofs)[1 + src2ofs],
         s1$1=caml_check_bound(a,src1ofs)[1 + src1ofs],
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_check_bound(dst,d)[1 + d] = s2;
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_check_bound(src2,i2$0)[1 + i2$0],
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$1(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_check_bound(dst,d)[1 + d] = s1;
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_check_bound(a,i1$0)[1 + i1$0],
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$1(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _zi_=len - 1 | 0,_zh_=0;
        if(! (_zi_ < 0))
         {var i=_zh_;
          a:
          for(;;)
           {var
             _zj_=srcofs + i | 0,
             e=caml_check_bound(a,_zj_)[1 + _zj_],
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if(dstofs <= j[1])
               {var _zk_=j[1];
                if(0 < caml_call2(cmp,caml_check_bound(dst,_zk_)[1 + _zk_],e))
                 {var
                   _zl_=j[1],
                   _zm_=caml_check_bound(dst,_zl_)[1 + _zl_],
                   _zn_=j[1] + 1 | 0;
                  caml_check_bound(dst,_zn_)[1 + _zn_] = _zm_;
                  j[1] += -1;
                  continue}}
              var _zo_=j[1] + 1 | 0;
              caml_check_bound(dst,_zo_)[1 + _zo_] = e;
              var _zp_=i + 1 | 0;
              if(_zi_ !== i){var i=_zp_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var
       l1=l / 2 | 0,
       l2=l - l1 | 0,
       t=caml_make_vect(l2,caml_check_bound(a,0)[1]);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$4(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_zf_=i + 1 | 0;
          return [0,x,function(_zg_){return aux(_zf_,_zg_)}]}
        return 0}
      var _zd_=0;
      return function(_ze_){return aux(_zd_,_ze_)}}
    function to_seqi$1(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_zb_=i + 1 | 0;
          return [0,[0,i,x],function(_zc_){return aux(_zb_,_zc_)}]}
        return 0}
      var _y$_=0;
      return function(_za_){return aux(_y$_,_za_)}}
    function of_seq$2(i$2)
     {var _y__=0,l=fold_left(function(acc,x){return [0,x,acc]},_y__,i$2);
      if(l)
       {var
         tl=l[2],
         hd=l[1],
         len=list_length(0,l),
         a=caml_make_vect(len,hd),
         i$1=len - 2 | 0,
         i=i$1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i - 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    var
     concat$2=caml_array_concat,
     include$3=
      [0,
       make_float,
       init$3,
       create_matrix,
       create_matrix,
       append$1,
       concat$2,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       iteri$3,
       map$7,
       mapi$3,
       fold_left$3,
       fold_left_map$0,
       fold_right$2,
       iter2$1,
       map2$1,
       for_all$3,
       exists$3,
       for_all2$1,
       exists2$1,
       mem$0,
       memq$0,
       find_opt$0,
       find_map$1,
       split$0,
       combine$0,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(794,include$3,"Stdlib__Array");
    var zero$0=0.,one$0=1.,minus_one$0=-1.;
    function is_finite(x){return x - x == 0.?1:0}
    function is_infinite(x){return 1. / x == 0.?1:0}
    function is_nan(x){return x != x?1:0}
    var pi=3.14159265358979312;
    function is_integer(x)
     {var _y9_=x == runtime.caml_trunc_float(x)?1:0;
      return _y9_?is_finite(x):_y9_}
    function succ$0(x){return caml_nextafter_float(x,infinity)}
    function pred$0(x){return caml_nextafter_float(x,neg_infinity)}
    function equal$11(x,y){return 0 === caml_float_compare(x,y)?1:0}
    function min$2(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return x != x?x:y}
      return y != y?y:x}
    function max$2(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return y != y?y:x}
      return x != x?x:y}
    function min_max(x,y)
     {if(x == x && y == y)
       {if(! (x < y))
         {var switch$0=0;
          if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
          if(switch$0)return [0,y,x]}
        return [0,x,y]}
      return [0,nan,nan]}
    function min_num(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return y != y?x:y}
      return x != x?y:x}
    function max_num(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return x != x?y:x}
      return y != y?x:y}
    function min_max_num(x,y)
     {if(x != x)return [0,y,y];
      if(y != y)return [0,x,x];
      if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return [0,y,x]}
      return [0,x,y]}
    function hash$0(x){return caml_hash(10,100,0,x)}
    function unsafe_fill(a,ofs,len,v)
     {var _y7_=(ofs + len | 0) - 1 | 0;
      if(! (_y7_ < ofs))
       {var i=ofs;
        for(;;)
         {a[1 + i] = v;
          var _y8_=i + 1 | 0;
          if(_y7_ !== i){var i=_y8_;continue}
          break}}
      return 0}
    function check(a,ofs,len,msg)
     {var _y3_=ofs < 0?1:0;
      if(_y3_)
       var _y4_=_y3_;
      else
       {var _y5_=len < 0?1:0;
        if(_y5_)
         var _y4_=_y5_;
        else
         var
          _y6_=(ofs + len | 0) < 0?1:0,
          _y4_=_y6_ || (a.length - 1 < (ofs + len | 0)?1:0)}
      return _y4_?invalid_arg(msg):_y4_}
    function make$2(n,v)
     {var result=caml_floatarray_create(n);
      unsafe_fill(result,0,n,v);
      return result}
    function init$4(l,f)
     {if(0 <= l)
       {var res=caml_floatarray_create(l),_y1_=l - 1 | 0,_y0_=0;
        if(! (_y1_ < 0))
         {var i=_y0_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _y2_=i + 1 | 0;
            if(_y1_ !== i){var i=_y2_;continue}
            break}}
        return res}
      return invalid_arg(cst_Float_Array_init)}
    function append$2(a1,a2)
     {var
       l1=a1.length - 1,
       l2=a2.length - 1,
       result=caml_floatarray_create(l1 + l2 | 0);
      caml_floatarray_blit(a1,0,result,0,l1);
      caml_floatarray_blit(a2,0,result,l1,l2);
      return result}
    function concat$3(l)
     {var acc=0,param=l;
      for(;;)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           x=hd.length - 1 + acc | 0,
           acc$0=acc <= x?x:invalid_arg(cst_Float_Array_concat),
           acc=acc$0,
           param=tl;
          continue}
        var result=caml_floatarray_create(acc),l$0=l,i=0;
        for(;;)
         {if(l$0)
           {var tl$0=l$0[2],hd$0=l$0[1],hlen=hd$0.length - 1;
            caml_floatarray_blit(hd$0,0,result,i,hlen);
            var i$0=i + hlen | 0,l$0=tl$0,i=i$0;
            continue}
          if(i === acc)return result;
          throw [0,Assert_failure,_I_]}}}
    function sub$2(a,ofs,len)
     {check(a,ofs,len,cst_Float_Array_sub);
      var result=caml_floatarray_create(len);
      caml_floatarray_blit(a,ofs,result,0,len);
      return result}
    function copy$2(a)
     {var l=a.length - 1,result=caml_floatarray_create(l);
      caml_floatarray_blit(a,0,result,0,l);
      return result}
    function fill$1(a,ofs,len,v)
     {check(a,ofs,len,cst_Float_Array_fill);return unsafe_fill(a,ofs,len,v)}
    function blit$2(src,sofs,dst,dofs,len)
     {check(src,sofs,len,cst_Float_array_blit);
      check(dst,dofs,len,cst_Float_array_blit$0);
      return caml_floatarray_blit(src,sofs,dst,dofs,len)}
    function to_list$2(a)
     {return init$0(a.length - 1,function(_yZ_){return a[1 + _yZ_]})}
    function of_list$0(l)
     {var result=caml_floatarray_create(length$1(l)),i=0,l$0=l;
      for(;;)
       {if(l$0)
         {var t=l$0[2],h=l$0[1];
          result[1 + i] = h;
          var i$0=i + 1 | 0,i=i$0,l$0=t;
          continue}
        return result}}
    function iter$6(f,a)
     {var _yX_=a.length - 1 - 1 | 0,_yW_=0;
      if(! (_yX_ < 0))
       {var i=_yW_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _yY_=i + 1 | 0;
          if(_yX_ !== i){var i=_yY_;continue}
          break}}
      return 0}
    function iter2$2(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg(cst_Float_Array_iter2_arrays_m);
      var _yU_=a.length - 1 - 1 | 0,_yT_=0;
      if(! (_yU_ < 0))
       {var i=_yT_;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _yV_=i + 1 | 0;
          if(_yU_ !== i){var i=_yV_;continue}
          break}}
      return 0}
    function map$8(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_yR_=l - 1 | 0,_yQ_=0;
      if(! (_yR_ < 0))
       {var i=_yQ_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _yS_=i + 1 | 0;
          if(_yR_ !== i){var i=_yS_;continue}
          break}}
      return r}
    function map2$2(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)return invalid_arg(cst_Float_Array_map2_arrays_mu);
      var r=caml_floatarray_create(la),_yO_=la - 1 | 0,_yN_=0;
      if(! (_yO_ < 0))
       {var i=_yN_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _yP_=i + 1 | 0;
          if(_yO_ !== i){var i=_yP_;continue}
          break}}
      return r}
    function iteri$4(f,a)
     {var _yL_=a.length - 1 - 1 | 0,_yK_=0;
      if(! (_yL_ < 0))
       {var i=_yK_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _yM_=i + 1 | 0;
          if(_yL_ !== i){var i=_yM_;continue}
          break}}
      return 0}
    function mapi$4(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_yI_=l - 1 | 0,_yH_=0;
      if(! (_yI_ < 0))
       {var i=_yH_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _yJ_=i + 1 | 0;
          if(_yI_ !== i){var i=_yJ_;continue}
          break}}
      return r}
    function fold_left$4(f,x,a)
     {var r=[0,x],_yF_=a.length - 1 - 1 | 0,_yE_=0;
      if(! (_yF_ < 0))
       {var i=_yE_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _yG_=i + 1 | 0;
          if(_yF_ !== i){var i=_yG_;continue}
          break}}
      return r[1]}
    function fold_right$3(f,a,x)
     {var r=[0,x],_yC_=a.length - 1 - 1 | 0;
      if(! (_yC_ < 0))
       {var i=_yC_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _yD_=i - 1 | 0;
          if(0 !== i){var i=_yD_;continue}
          break}}
      return r[1]}
    function exists$4(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$4(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function mem$1(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_float_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function mem_ieee(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x == a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    var Bottom$0=[248,cst_Stdlib_Float_Array_Bottom,caml_fresh_oo_id(0)];
    function sort$0(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {if
           (caml_call2
             (cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))
            <
            0)
           x[1] = i31 + 1 | 0;
          if
           (caml_call2
             (cmp,caml_array_get(a,x[1]),caml_array_get(a,i31 + 2 | 0))
            <
            0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if
         ((i31 + 1 | 0)
          <
          l
          &&
          !
          (0
           <=
           caml_call2(cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))))
         return i31 + 1 | 0;
        if(i31 < l)return i31;
        throw [0,Bottom$0,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_array_get(a,j),e))
           {caml_array_set(a,i$0,caml_array_get(a,j));var i$0=j;continue}
          return caml_array_set(a,i$0,e)}}
      function trickle(l,i,e)
       {try
         {var _yB_=trickledown(l,i,e);return _yB_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0)
           {var i$0=exn[2];return caml_array_set(a,i$0,e)}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0);
          caml_array_set(a,i$0,caml_array_get(a,i$1));
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _yA_=bubbledown(l,i);return _yA_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_yu_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_yu_ < 0))
       {var i$2=_yu_;
        for(;;)
         {trickle(l,i$2,caml_array_get(a,i$2));
          var _yz_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_yz_;continue}
          break}}
      var _yv_=l - 1 | 0;
      if(! (_yv_ < 2))
       {var i$0=_yv_;
        a:
        for(;;)
         {var e$0=caml_array_get(a,i$0);
          caml_array_set(a,i$0,caml_array_get(a,0));
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_J_];
            if(0 <= caml_call2(cmp,caml_array_get(a,father),e$0))
             caml_array_set(a,i,e$0);
            else
             {caml_array_set(a,i,caml_array_get(a,father));
              if(0 < father){var i=father;continue}
              caml_array_set(a,0,e$0)}
            var _yy_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_yy_;continue a}
            break}
          break}}
      var _yw_=1 < l?1:0;
      if(_yw_)
       {var e=caml_array_get(a,1);
        caml_array_set(a,1,caml_array_get(a,0));
        var _yx_=caml_array_set(a,0,e)}
      else
       var _yx_=_yw_;
      return _yx_}
    function stable_sort(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_array_get(src2,src2ofs),
         s1$1=caml_array_get(a,src1ofs),
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_array_set(dst,d,s2);
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_array_get(src2,i2$0),
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$2(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_array_set(dst,d,s1);
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_array_get(a,i1$0),
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$2(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _ys_=len - 1 | 0,_yr_=0;
        if(! (_ys_ < 0))
         {var i=_yr_;
          a:
          for(;;)
           {var
             e=caml_array_get(a,srcofs + i | 0),
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if
               (dstofs
                <=
                j[1]
                &&
                0
                <
                caml_call2(cmp,caml_array_get(dst,j[1]),e))
               {caml_array_set(dst,j[1] + 1 | 0,caml_array_get(dst,j[1]));
                j[1] += -1;
                continue}
              caml_array_set(dst,j[1] + 1 | 0,e);
              var _yt_=i + 1 | 0;
              if(_ys_ !== i){var i=_yt_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var l1=l / 2 | 0,l2=l - l1 | 0,t=caml_floatarray_create(l2);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$5(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_yp_=i + 1 | 0;
          return [0,x,function(_yq_){return aux(_yp_,_yq_)}]}
        return 0}
      var _yn_=0;
      return function(_yo_){return aux(_yn_,_yo_)}}
    function to_seqi$2(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_yl_=i + 1 | 0;
          return [0,[0,i,x],function(_ym_){return aux(_yl_,_ym_)}]}
        return 0}
      var _yj_=0;
      return function(_yk_){return aux(_yj_,_yk_)}}
    function of_seq$3(i$2)
     {var
       _yi_=0,
       param$0=fold_left(function(acc,x){return [0,x,acc]},_yi_,i$2),
       len=length$1(param$0),
       a=caml_floatarray_create(len),
       i$1=len - 1 | 0,
       i=i$1,
       param=param$0;
      for(;;)
       {if(param)
         {var tl=param[2],hd=param[1];
          a[1 + i] = hd;
          var i$0=i - 1 | 0,i=i$0,param=tl;
          continue}
        return a}}
    function map_to_array(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_yg_=l - 1 | 0,_yf_=1;
      if(! (_yg_ < 1))
       {var i=_yf_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _yh_=i + 1 | 0;
          if(_yg_ !== i){var i=_yh_;continue}
          break}}
      return r}
    function map_from_array(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_yd_=l - 1 | 0,_yc_=0;
      if(! (_yd_ < 0))
       {var i=_yc_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _ye_=i + 1 | 0;
          if(_yd_ !== i){var i=_ye_;continue}
          break}}
      return r}
    var
     _K_=caml_floatarray_create,
     _L_=caml_array_set,
     _M_=caml_array_get,
     _N_=
      [0,
       function(_yb_){return _yb_.length - 1},
       _M_,
       _L_,
       make$2,
       _K_,
       init$4,
       append$2,
       concat$3,
       sub$2,
       copy$2,
       fill$1,
       blit$2,
       to_list$2,
       of_list$0,
       iter$6,
       iteri$4,
       map$8,
       mapi$4,
       fold_left$4,
       fold_right$3,
       iter2$2,
       map2$2,
       for_all$4,
       exists$4,
       mem$1,
       mem_ieee,
       sort$0,
       stable_sort,
       stable_sort,
       to_seq$5,
       to_seqi$2,
       of_seq$3,
       map_to_array,
       map_from_array],
     _O_=caml_floatarray_create,
     _P_=caml_array_set,
     _Q_=caml_array_get,
     Stdlib_Float=
      [0,
       zero$0,
       one$0,
       minus_one$0,
       succ$0,
       pred$0,
       infinity,
       neg_infinity,
       nan,
       pi,
       max_float,
       min_float,
       epsilon,
       is_finite,
       is_infinite,
       is_nan,
       is_integer,
       of_string_opt,
       to_string,
       caml_float_compare,
       equal$11,
       min$2,
       max$2,
       min_max,
       min_num,
       max_num,
       min_max_num,
       hash$0,
       [0,
        function(_ya_){return _ya_.length - 1},
        _Q_,
        _P_,
        make$2,
        _O_,
        init$4,
        append$2,
        concat$3,
        sub$2,
        copy$2,
        fill$1,
        blit$2,
        to_list$2,
        of_list$0,
        iter$6,
        iteri$4,
        map$8,
        mapi$4,
        fold_left$4,
        fold_right$3,
        iter2$2,
        map2$2,
        for_all$4,
        exists$4,
        mem$1,
        mem_ieee,
        sort$0,
        stable_sort,
        stable_sort,
        to_seq$5,
        to_seqi$2,
        of_seq$3,
        map_to_array,
        map_from_array],
       _N_];
    caml_register_global(795,Stdlib_Float,"Stdlib__Float");
    var zero$1=0,one$1=1,minus_one$1=-1;
    function succ$1(n){return n + 1 | 0}
    function pred$1(n){return n - 1 | 0}
    function abs$1(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$1=-2147483648,max_int$1=2147483647;
    function lognot$0(n){return n ^ -1}
    function unsigned_to_int(n)
     {if
       (!
        (0 < caml_int_compare(0,n))
        &&
        !
        (0 < caml_int_compare(n,2147483647)))
       return [0,n];
      return 0}
    function to_string$3(n){return caml_format_int(cst_d,n)}
    function of_string_opt$0(s)
     {try
       {var _x__=[0,caml_int_of_string(s)];return _x__}
      catch(_x$_)
       {_x$_ = caml_wrap_exception(_x$_);
        if(_x$_[1] === Failure)return 0;
        throw _x$_}}
    function compare$11(x,y){return caml_int_compare(x,y)}
    function equal$12(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function min$3(x,y){return caml_lessequal(x,y)?x:y}
    function max$3(x,y){return caml_greaterequal(x,y)?x:y}
    function unsigned_div(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare(n,d)?one$1:zero$1;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare(r,d)?q + 1 | 0:q}
    function unsigned_rem(n,d){return n - caml_mul(unsigned_div(n,d),d) | 0}
    var
     Stdlib_Int32=
      [0,
       zero$1,
       one$1,
       minus_one$1,
       unsigned_div,
       unsigned_rem,
       succ$1,
       pred$1,
       abs$1,
       max_int$1,
       min_int$1,
       lognot$0,
       unsigned_to_int,
       of_string_opt$0,
       to_string$3,
       compare$11,
       unsigned_compare,
       equal$12,
       min$3,
       max$3];
    caml_register_global(796,Stdlib_Int32,"Stdlib__Int32");
    function succ$2(n){return caml_int64_add(n,_R_)}
    function pred$2(n){return caml_int64_sub(n,_S_)}
    function abs$2(n)
     {return caml_greaterequal(n,_T_)?n:runtime.caml_int64_neg(n)}
    function lognot$1(n){return runtime.caml_int64_xor(n,_U_)}
    var max_int$3=caml_int64_of_int32(2147483647);
    function unsigned_to_int$0(n)
     {if
       (!
        (0 < caml_int64_compare(zero$2,n))
        &&
        !
        (0 < caml_int64_compare(n,max_int$3)))
       return [0,runtime.caml_int64_to_int32(n)];
      return 0}
    function to_string$4(n){return caml_int64_format(cst_d$0,n)}
    function of_string_opt$1(s)
     {try
       {var _x8_=[0,caml_int64_of_string(s)];return _x8_}
      catch(_x9_)
       {_x9_ = caml_wrap_exception(_x9_);
        if(_x9_[1] === Failure)return 0;
        throw _x9_}}
    function compare$12(x,y){return caml_int64_compare(x,y)}
    function equal$13(x,y){return 0 === caml_int64_compare(x,y)?1:0}
    function unsigned_compare$0(n,m)
     {return caml_int64_compare
              (caml_int64_sub(n,min_int$2),caml_int64_sub(m,min_int$2))}
    function min$4(x,y){return caml_lessequal(x,y)?x:y}
    function max$4(x,y){return caml_greaterequal(x,y)?x:y}
    function unsigned_div$0(n,d)
     {if(caml_lessthan(d,zero$2))
       return 0 <= unsigned_compare$0(n,d)?one$2:zero$2;
      var
       q=
        caml_int64_shift_left
         (runtime.caml_int64_div(caml_int64_shift_right_unsigne(n,1),d),1),
       r=caml_int64_sub(n,caml_int64_mul(q,d));
      return 0 <= unsigned_compare$0(r,d)?succ$2(q):q}
    function unsigned_rem$0(n,d)
     {return caml_int64_sub(n,caml_int64_mul(unsigned_div$0(n,d),d))}
    var
     Stdlib_Int64=
      [0,
       zero$2,
       one$2,
       minus_one$2,
       unsigned_div$0,
       unsigned_rem$0,
       succ$2,
       pred$2,
       abs$2,
       max_int$2,
       min_int$2,
       lognot$1,
       unsigned_to_int$0,
       of_string_opt$1,
       to_string$4,
       compare$12,
       unsigned_compare$0,
       equal$13,
       min$4,
       max$4];
    caml_register_global(797,Stdlib_Int64,"Stdlib__Int64");
    var zero$3=0,one$3=1,minus_one$3=-1;
    function succ$3(n){return n + 1 | 0}
    function pred$3(n){return n - 1 | 0}
    function abs$3(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$3=-2147483648,max_int$4=2147483647;
    function lognot$2(n){return n ^ -1}
    function unsigned_to_int$1(n)
     {if
       (!
        (0 < caml_int_compare(0,n))
        &&
        !
        (0 < caml_int_compare(n,2147483647)))
       return [0,n];
      return 0}
    function to_string$5(n){return caml_format_int(cst_d$1,n)}
    function of_string_opt$2(s)
     {try
       {var _x6_=[0,caml_int_of_string(s)];return _x6_}
      catch(_x7_)
       {_x7_ = caml_wrap_exception(_x7_);
        if(_x7_[1] === Failure)return 0;
        throw _x7_}}
    function compare$13(x,y){return caml_int_compare(x,y)}
    function equal$14(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare$1(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function min$5(x,y){return caml_lessequal(x,y)?x:y}
    function max$5(x,y){return caml_greaterequal(x,y)?x:y}
    function unsigned_div$1(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare$1(n,d)?one$3:zero$3;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare$1(r,d)?q + 1 | 0:q}
    function unsigned_rem$1(n,d)
     {return n - caml_mul(unsigned_div$1(n,d),d) | 0}
    var
     Stdlib_Nativeint=
      [0,
       zero$3,
       one$3,
       minus_one$3,
       unsigned_div$1,
       unsigned_rem$1,
       succ$3,
       pred$3,
       abs$3,
       match$1,
       max_int$4,
       min_int$3,
       lognot$2,
       unsigned_to_int$1,
       of_string_opt$2,
       to_string$5,
       compare$13,
       unsigned_compare$1,
       equal$14,
       min$5,
       max$5];
    caml_register_global(798,Stdlib_Nativeint,"Stdlib__Nativeint");
    function engine(tbl,state,buf)
     {var
       result=runtime.caml_lex_engine(tbl,state,buf),
       _x3_=0 <= result?1:0,
       _x4_=_x3_?buf[12] !== dummy_pos?1:0:_x3_;
      if(_x4_)
       {buf[11] = buf[12];
        var _x5_=buf[12];
        buf[12] = [0,_x5_[1],_x5_[2],_x5_[3],buf[4] + buf[6] | 0]}
      return result}
    function new_engine(tbl,state,buf)
     {var
       result=runtime.caml_new_lex_engine(tbl,state,buf),
       _x0_=0 <= result?1:0,
       _x1_=_x0_?buf[12] !== dummy_pos?1:0:_x0_;
      if(_x1_)
       {buf[11] = buf[12];
        var _x2_=buf[12];
        buf[12] = [0,_x2_[1],_x2_[2],_x2_[3],buf[4] + buf[6] | 0]}
      return result}
    function from_function(opt,f)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _xM_=with_positions?zero_pos:dummy_pos,
       _xN_=with_positions?zero_pos:dummy_pos,
       aux_buffer=caml_create_bytes(512),
       _xO_=[0],
       _xP_=0,
       _xQ_=0,
       _xR_=0,
       _xS_=0,
       _xT_=0,
       _xU_=0,
       _xV_=0,
       _xW_=caml_create_bytes(1024);
      return [0,
              function(lexbuf)
               {var
                 read=
                  caml_call2(f,aux_buffer,caml_ml_bytes_length(aux_buffer)),
                 n=0 < read?read:(lexbuf[9] = 1,0);
                if(caml_ml_bytes_length(lexbuf[2]) < (lexbuf[3] + n | 0))
                 {if
                   (((lexbuf[3] - lexbuf[5] | 0) + n | 0)
                    <=
                    caml_ml_bytes_length(lexbuf[2]))
                   blit
                    (lexbuf[2],lexbuf[5],lexbuf[2],0,lexbuf[3] - lexbuf[5] | 0);
                  else
                   {var
                     newlen=
                      min$1
                       (2 * caml_ml_bytes_length(lexbuf[2]) | 0,max_string_length);
                    if(newlen < ((lexbuf[3] - lexbuf[5] | 0) + n | 0))
                     failwith(cst_Lexing_lex_refill_cannot_g);
                    var newbuf=caml_create_bytes(newlen);
                    blit(lexbuf[2],lexbuf[5],newbuf,0,lexbuf[3] - lexbuf[5] | 0);
                    lexbuf[2] = newbuf}
                  var s=lexbuf[5];
                  lexbuf[4] = lexbuf[4] + s | 0;
                  lexbuf[6] = lexbuf[6] - s | 0;
                  lexbuf[5] = 0;
                  lexbuf[7] = lexbuf[7] - s | 0;
                  lexbuf[3] = lexbuf[3] - s | 0;
                  var t=lexbuf[10],_xY_=t.length - 1 - 1 | 0,_xX_=0;
                  if(! (_xY_ < 0))
                   {var i=_xX_;
                    for(;;)
                     {var v=caml_check_bound(t,i)[1 + i];
                      if(0 <= v)caml_check_bound(t,i)[1 + i] = v - s | 0;
                      var _xZ_=i + 1 | 0;
                      if(_xY_ !== i){var i=_xZ_;continue}
                      break}}}
                blit(aux_buffer,0,lexbuf[2],lexbuf[3],n);
                lexbuf[3] = lexbuf[3] + n | 0;
                return 0},
              _xW_,
              _xV_,
              _xU_,
              _xT_,
              _xS_,
              _xR_,
              _xQ_,
              _xP_,
              _xO_,
              _xN_,
              _xM_]}
    function from_channel(with_positions,ic)
     {return from_function
              (with_positions,function(buf,n){return input(ic,buf,0,n)})}
    function from_string$0(opt,s)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _xB_=with_positions?zero_pos:dummy_pos,
       _xC_=with_positions?zero_pos:dummy_pos,
       _xD_=[0],
       _xE_=1,
       _xF_=0,
       _xG_=0,
       _xH_=0,
       _xI_=0,
       _xJ_=0,
       _xK_=caml_ml_string_length(s),
       _xL_=to_bytes(s);
      return [0,
              function(lexbuf){lexbuf[9] = 1;return 0},
              _xL_,
              _xK_,
              _xJ_,
              _xI_,
              _xH_,
              _xG_,
              _xF_,
              _xE_,
              _xD_,
              _xC_,
              _xB_]}
    function set_position(lexbuf,position)
     {lexbuf[12] = [0,lexbuf[12][1],position[2],position[3],position[4]];
      lexbuf[4] = position[4];
      return 0}
    function set_filename(lexbuf,fname)
     {var _xA_=lexbuf[12];
      lexbuf[12] = [0,fname,_xA_[2],_xA_[3],_xA_[4]];
      return 0}
    function with_positions(lexbuf){return lexbuf[12] !== dummy_pos?1:0}
    function lexeme(lexbuf)
     {var len=lexbuf[6] - lexbuf[5] | 0;
      return sub_string(lexbuf[2],lexbuf[5],len)}
    function sub_lexeme(lexbuf,i1,i2)
     {var len=i2 - i1 | 0;return sub_string(lexbuf[2],i1,len)}
    function sub_lexeme_opt(lexbuf,i1,i2)
     {if(0 <= i1){var len=i2 - i1 | 0;return [0,sub_string(lexbuf[2],i1,len)]}
      return 0}
    function sub_lexeme_char(lexbuf,i){return caml_bytes_get(lexbuf[2],i)}
    function sub_lexeme_char_opt(lexbuf,i)
     {return 0 <= i?[0,caml_bytes_get(lexbuf[2],i)]:0}
    function lexeme_char(lexbuf,i)
     {return caml_bytes_get(lexbuf[2],lexbuf[5] + i | 0)}
    function lexeme_start(lexbuf){return lexbuf[11][4]}
    function lexeme_end(lexbuf){return lexbuf[12][4]}
    function lexeme_start_p(lexbuf){return lexbuf[11]}
    function lexeme_end_p(lexbuf){return lexbuf[12]}
    function new_line(lexbuf)
     {var
       lcp=lexbuf[12],
       _xy_=lcp !== dummy_pos?1:0,
       _xz_=_xy_?(lexbuf[12] = [0,lcp[1],lcp[2] + 1 | 0,lcp[4],lcp[4]],0):_xy_;
      return _xz_}
    function flush_input(lb)
     {lb[6] = 0;
      lb[4] = 0;
      var lcp=lb[12];
      if(lcp !== dummy_pos)
       lb[12] = [0,lcp[1],zero_pos[2],zero_pos[3],zero_pos[4]];
      lb[3] = 0;
      return 0}
    var
     Stdlib_Lexing=
      [0,
       dummy_pos,
       from_channel,
       from_string$0,
       from_function,
       set_position,
       set_filename,
       with_positions,
       lexeme,
       lexeme_char,
       lexeme_start,
       lexeme_end,
       lexeme_start_p,
       lexeme_end_p,
       new_line,
       flush_input,
       sub_lexeme,
       sub_lexeme_opt,
       sub_lexeme_char,
       sub_lexeme_char_opt,
       engine,
       new_engine];
    caml_register_global(799,Stdlib_Lexing,"Stdlib__Lexing");
    var
     YYexit=[248,cst_Stdlib_Parsing_YYexit,caml_fresh_oo_id(0)],
     Parse_error=[248,cst_Stdlib_Parsing_Parse_error,caml_fresh_oo_id(0)],
     env=
      [0,
       caml_make_vect(100,0),
       caml_make_vect(100,0),
       caml_make_vect(100,dummy_pos),
       caml_make_vect(100,dummy_pos),
       100,
       0,
       0,
       0,
       dummy_pos,
       dummy_pos,
       0,
       0,
       0,
       0,
       0,
       0];
    function grow_stacks(param)
     {var
       oldsize=env[5],
       newsize=oldsize * 2 | 0,
       new_s=caml_make_vect(newsize,0),
       new_v=caml_make_vect(newsize,0),
       new_start=caml_make_vect(newsize,dummy_pos),
       new_end=caml_make_vect(newsize,dummy_pos);
      blit$1(env[1],0,new_s,0,oldsize);
      env[1] = new_s;
      blit$1(env[2],0,new_v,0,oldsize);
      env[2] = new_v;
      blit$1(env[3],0,new_start,0,oldsize);
      env[3] = new_start;
      blit$1(env[4],0,new_end,0,oldsize);
      env[4] = new_end;
      env[5] = newsize;
      return 0}
    function clear_parser(param)
     {fill$0(env[2],0,env[5],0);env[8] = 0;return 0}
    var current_lookahead_fun=[0,function(param){return 0}];
    function yyparse(tables,start,lexer,lexbuf)
     {var
       init_asp=env[11],
       init_sp=env[14],
       init_stackbase=env[6],
       init_state=env[15],
       init_curr_char=env[7],
       init_lval=env[8],
       init_errflag=env[16];
      env[6] = env[14] + 1 | 0;
      env[7] = start;
      env[10] = lexbuf[12];
      try
       {var cmd=0,arg=0;
        for(;;)
         {var match=runtime.caml_parse_engine(tables,env,cmd,arg);
          switch(match)
           {case 0:
             var arg$0=caml_call1(lexer,lexbuf);
             env[9] = lexbuf[11];
             env[10] = lexbuf[12];
             var cmd=1,arg=arg$0;
             continue;
            case 1:throw Parse_error;
            case 2:grow_stacks(0);var cmd=2,arg=0;continue;
            case 3:grow_stacks(0);var cmd=3,arg=0;continue;
            case 4:
             try
              {var
                _xs_=env[13],
                _xt_=
                 caml_call1(caml_check_bound(tables[1],_xs_)[1 + _xs_],env),
                _xu_=4,
                arg$1=_xt_,
                cmd$0=_xu_}
             catch(_xx_)
              {_xx_ = caml_wrap_exception(_xx_);
               if(_xx_ !== Parse_error)throw _xx_;
               var arg$1=0,cmd$0=5,_xv_=_xx_}
             var cmd=cmd$0,arg=arg$1;
             continue;
            default:
             caml_call1(tables[14],cst_syntax_error);var cmd=5,arg=0;continue}}}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var curr_char=env[7];
        env[11] = init_asp;
        env[14] = init_sp;
        env[6] = init_stackbase;
        env[15] = init_state;
        env[7] = init_curr_char;
        env[8] = init_lval;
        env[16] = init_errflag;
        if(exn[1] === YYexit){var v=exn[2];return v}
        current_lookahead_fun[1]
        =
        function(tok)
         {if(is_block(tok))
           {var _xw_=caml_obj_tag(tok);
            return caml_check_bound(tables[3],_xw_)[1 + _xw_] === curr_char
                    ?1
                    :0}
          return caml_check_bound(tables[2],tok)[1 + tok] === curr_char?1:0};
        throw exn}}
    function peek_val(env,n)
     {var _xr_=env[11] - n | 0;return caml_check_bound(env[2],_xr_)[1 + _xr_]}
    function symbol_start_pos(param)
     {var i=env[12];
      for(;;)
       {if(0 < i)
         {var
           _xo_=(env[11] - i | 0) + 1 | 0,
           st=caml_check_bound(env[3],_xo_)[1 + _xo_],
           _xp_=(env[11] - i | 0) + 1 | 0,
           en=caml_check_bound(env[4],_xp_)[1 + _xp_];
          if(caml_notequal(st,en))return st;
          var i$0=i - 1 | 0,i=i$0;
          continue}
        var _xq_=env[11];
        return caml_check_bound(env[4],_xq_)[1 + _xq_]}}
    function symbol_end_pos(param)
     {var _xn_=env[11];return caml_check_bound(env[4],_xn_)[1 + _xn_]}
    function rhs_start_pos(n)
     {var _xm_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[3],_xm_)[1 + _xm_]}
    function rhs_end_pos(n)
     {var _xl_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[4],_xl_)[1 + _xl_]}
    function symbol_start(param){return symbol_start_pos(0)[4]}
    function symbol_end(param){return symbol_end_pos(0)[4]}
    function rhs_start(n){return rhs_start_pos(n)[4]}
    function rhs_end(n){return rhs_end_pos(n)[4]}
    function is_current_lookahead(tok)
     {return caml_call1(current_lookahead_fun[1],tok)}
    function parse_error(param){return 0}
    var
     Stdlib_Parsing=
      [0,
       symbol_start,
       symbol_end,
       rhs_start,
       rhs_end,
       symbol_start_pos,
       symbol_end_pos,
       rhs_start_pos,
       rhs_end_pos,
       clear_parser,
       Parse_error,
       function(_xk_){return runtime.caml_set_parser_trace(_xk_)},
       YYexit,
       yyparse,
       peek_val,
       is_current_lookahead,
       parse_error];
    caml_register_global(800,Stdlib_Parsing,"Stdlib__Parsing");
    var
     Stdlib_Set=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[4];return h}return 0}
         function create(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           var _xj_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_xj_]}
         function bal(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[3],lv=l[2],ll=l[1],_xe_=height(lr);
               if(_xe_ <= height(ll))return create(ll,lv,create(lr,v,r));
               if(lr)
                {var lrr=lr[3],lrv=lr[2],lrl=lr[1],_xf_=create(lrr,v,r);
                 return create(create(ll,lv,lrl),lrv,_xf_)}
               return invalid_arg(cst_Set_bal)}
             return invalid_arg(cst_Set_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[3],rv=r[2],rl=r[1],_xg_=height(rl);
               if(_xg_ <= height(rr))return create(create(l,v,rl),rv,rr);
               if(rl)
                {var rlr=rl[3],rlv=rl[2],rll=rl[1],_xh_=create(rlr,rv,rr);
                 return create(create(l,v,rll),rlv,_xh_)}
               return invalid_arg(cst_Set_bal$1)}
             return invalid_arg(cst_Set_bal$2)}
           var _xi_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_xi_]}
         function add(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return t;
             if(0 <= c){var rr=add(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=add(x,l);
             return l === ll?t:bal(ll,v,r)}
           return [0,0,x,0,1]}
         function singleton(x){return [0,0,x,0,1]}
         function add_min_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(add_min_element(x,l),v,r)}
           return singleton(x)}
         function add_max_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(l,v,add_max_element(x,r))}
           return singleton(x)}
         function join(l,v,r)
          {if(l)
            {if(r)
              {var
                rh=r[4],
                rr=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[4],
                lr=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,join(lr,v,r))
                       :(lh + 2 | 0) < rh?bal(join(l,v,rl),rv,rr):create(l,v,r)}
             return add_max_element(v,l)}
           return add_min_element(v,r)}
         function min_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _xd_=param$0[1];
               if(_xd_){var param$0=_xd_;continue}
               var v=param$0[2];
               return v}
             throw Not_found}}
         function min_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _xc_=param$0[1];
               if(_xc_){var param$0=_xc_;continue}
               var v=param$0[2];
               return [0,v]}
             return 0}}
         function max_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {if(param$0[3]){var param$1=param$0[3],param$0=param$1;continue}
               var v=param$0[2];
               return v}
             throw Not_found}}
         function max_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {if(param$0[3]){var param$1=param$0[3],param$0=param$1;continue}
               var v=param$0[2];
               return [0,v]}
             return 0}}
         function remove_min_elt(param)
          {if(param)
            {var _xb_=param[1];
             if(_xb_)
              {var r=param[3],v=param[2];return bal(remove_min_elt(_xb_),v,r)}
             var r$0=param[3];
             return r$0}
           return invalid_arg(cst_Set_remove_min_elt)}
         function concat(t1,t2)
          {if(t1)
            {if(t2)
              {var _xa_=remove_min_elt(t2);return join(t1,min_elt(t2),_xa_)}
             return t1}
           return t2}
         function split(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,1,r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,r)]}
           return _V_}
         var empty=0;
         function is_empty(param){return param?0:1}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _w$_=0 === c?1:0;
               if(_w$_)return _w$_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function remove(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {if(l)
                {if(r)
                  {var _w__=remove_min_elt(r);return bal(l,min_elt(r),_w__)}
                 return l}
               return r}
             if(0 <= c){var rr=remove(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=remove(x,l);
             return l === ll?t:bal(ll,v,r)}
           return 0}
         function union(s1,s2)
          {if(s1)
            {if(s2)
              {var
                h2=s2[4],
                r2=s2[3],
                v2=s2[2],
                l2=s2[1],
                h1=s1[4],
                r1=s1[3],
                v1=s1[2],
                l1=s1[1];
               if(h2 <= h1)
                {if(1 === h2)return add(v2,s1);
                 var
                  match=split(v1,s2),
                  r2$0=match[3],
                  l2$0=match[1],
                  _w8_=union(r1,r2$0);
                 return join(union(l1,l2$0),v1,_w8_)}
               if(1 === h1)return add(v1,s2);
               var
                match$0=split(v2,s1),
                r1$0=match$0[3],
                l1$0=match$0[1],
                _w9_=union(r1$0,r2);
               return join(union(l1$0,l2),v2,_w9_)}
             return s1}
           return s2}
         function inter(s1,s2)
          {if(s1)
            {if(s2)
              {var r1=s1[3],v1=s1[2],l1=s1[1],_w4_=split(v1,s2),_w5_=_w4_[1];
               if(_w4_[2])
                {var r2=_w4_[3],_w6_=inter(r1,r2);
                 return join(inter(l1,_w5_),v1,_w6_)}
               var r2$0=_w4_[3],_w7_=inter(r1,r2$0);
               return concat(inter(l1,_w5_),_w7_)}
             return 0}
           return 0}
         function split_bis(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return 0;
             if(0 <= c)
              {var match=split_bis(x,r);
               if(match)
                {var rr=match[2],lr=match[1];return [0,join(l,v,lr),rr]}
               return 0}
             var match$0=split_bis(x,l);
             if(match$0)
              {var rl=match$0[2],ll=match$0[1];
               return [0,
                       ll,
                       function(param){return join(caml_call1(rl,0),v,r)}]}
             return 0}
           return [0,0,function(param){return 0}]}
         function disjoint(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0 && s2$0)
              {var r1=s1$0[3],v1=s1$0[2],l1=s1$0[1];
               if(s1$0 === s2$0)return 0;
               var match=split_bis(v1,s2$0);
               if(match)
                {var r2=match[2],l2=match[1],_w3_=disjoint(l1,l2);
                 if(_w3_)
                  {var s2$1=caml_call1(r2,0),s1$0=r1,s2$0=s2$1;continue}
                 return _w3_}
               return 0}
             return 1}}
         function diff(s1,s2)
          {if(s1)
            {if(s2)
              {var r1=s1[3],v1=s1[2],l1=s1[1],_wZ_=split(v1,s2),_w0_=_wZ_[1];
               if(_wZ_[2])
                {var r2=_wZ_[3],_w1_=diff(r1,r2);
                 return concat(diff(l1,_w0_),_w1_)}
               var r2$0=_wZ_[3],_w2_=diff(r1,r2$0);
               return join(diff(l1,_w0_),v1,_w2_)}
             return s1}
           return 0}
         function cons_enum(s,e)
          {var s$0=s,e$0=e;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                s$1=s$0[1],
                e$1=[0,v,r,e$0],
                s$0=s$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(s1,s2)
          {var e2$2=cons_enum(s2,0),e1$2=cons_enum(s1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[3],
                  r2=e2[2],
                  v2=e2[1],
                  e1$0=e1[3],
                  r1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var
                    e2$1=cons_enum(r2,e2$0),
                    e1$1=cons_enum(r1,e1$0),
                    e1=e1$1,
                    e2=e2$1;
                   continue}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(s1,s2){return 0 === compare(s1,s2)?1:0}
         function subset(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0)
              {if(s2$0)
                {var
                  r2=s2$0[3],
                  v2=s2$0[2],
                  l2=s2$0[1],
                  r1=s1$0[3],
                  v1=s1$0[2],
                  l1=s1$0[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var _wW_=subset(l1,l2);
                   if(_wW_){var s1$0=r1,s2$0=r2;continue}
                   return _wW_}
                 if(0 <= c)
                  {var _wX_=subset([0,0,v1,r1,0],r2);
                   if(_wX_){var s1$0=l1;continue}
                   return _wX_}
                 var _wY_=subset([0,l1,v1,0,0],l2);
                 if(_wY_){var s1$0=r1;continue}
                 return _wY_}
               return 0}
             return 1}}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call1(f,v);
               var param$0=r;
               continue}
             return 0}}
         function fold(f,s,accu)
          {var s$0=s,accu$0=accu;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                l=s$0[1],
                accu$1=caml_call2(f,v,fold(f,l,accu$0)),
                s$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _wT_=caml_call1(p,v);
               if(_wT_)
                {var _wU_=for_all(p,l);
                 if(_wU_){var param$0=r;continue}
                 var _wV_=_wU_}
               else
                var _wV_=_wT_;
               return _wV_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _wQ_=caml_call1(p,v);
               if(_wQ_)
                var _wR_=_wQ_;
               else
                {var _wS_=exists(p,l);
                 if(! _wS_){var param$0=r;continue}
                 var _wR_=_wS_}
               return _wR_}
             return 0}}
         function filter(p,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=filter(p,l),
              pv=caml_call1(p,v),
              r$0=filter(p,r);
             if(pv){if(l === l$0 && r === r$0)return t;return join(l$0,v,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pv=caml_call1(p,v),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pv){var _wO_=concat(lf,rf);return [0,join(lt,v,rt),_wO_]}
             var _wP_=join(lf,v,rf);
             return [0,concat(lt,rt),_wP_]}
           return _W_}
         function cardinal(param)
          {if(param)
            {var r=param[3],l=param[1],_wN_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _wN_ | 0}
           return 0}
         function elements_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,v,elements_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function elements(s){return elements_aux(0,s)}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return v;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return v0}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return v0}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,v];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function try_join(l,v,r)
          {var switch$0=0;
           if(0 !== l)
            {var _wM_=max_elt(l);
             if(0 <= caml_call2(Ord[1],_wM_,v))switch$0 = 1}
           if(! switch$0)
            {var switch$1=0;
             if(0 !== r)
              {var _wL_=min_elt(r);
               if(0 <= caml_call2(Ord[1],v,_wL_))switch$1 = 1}
             if(! switch$1)return join(l,v,r)}
           return union(l,add(v,r))}
         function map(f,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=map(f,l),
              v$0=caml_call1(f,v),
              r$0=map(f,r);
             if(l === l$0 && v === v$0 && r === r$0)return t;
             return try_join(l$0,v$0,r$0)}
           return 0}
         function filter_map(f,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              t1=filter_map(f,l),
              v$0=caml_call1(f,v),
              t2=filter_map(f,r);
             if(v$0)
              {var v$1=v$0[1];
               if(l === t1 && v === v$1 && r === t2)return t;
               return try_join(t1,v$1,t2)}
             if(t1)
              {if(t2)
                {var _wK_=remove_min_elt(t2);
                 return try_join(t1,min_elt(t2),_wK_)}
               return t1}
             return t2}
           return 0}
         function of_list(l)
          {if(l)
            {var _wz_=l[2],_wA_=l[1];
             if(_wz_)
              {var _wB_=_wz_[2],_wC_=_wz_[1];
               if(_wB_)
                {var _wD_=_wB_[2],_wE_=_wB_[1];
                 if(_wD_)
                  {var _wF_=_wD_[2],_wG_=_wD_[1];
                   if(_wF_)
                    {if(_wF_[2])
                      {var
                        l$0=sort_uniq(Ord[1],l),
                        sub=
                         function(n,l)
                          {if(! (3 < n >>> 0))
                            switch(n)
                             {case 0:return [0,0,l];
                              case 1:
                               if(l){var l$3=l[2],x0=l[1];return [0,[0,0,x0,0,1],l$3]}
                               break;
                              case 2:
                               if(l)
                                {var _wH_=l[2];
                                 if(_wH_)
                                  {var l$4=_wH_[2],x1=_wH_[1],x0$0=l[1];
                                   return [0,[0,[0,0,x0$0,0,1],x1,0,2],l$4]}}
                               break;
                              default:
                               if(l)
                                {var _wI_=l[2];
                                 if(_wI_)
                                  {var _wJ_=_wI_[2];
                                   if(_wJ_)
                                    {var l$5=_wJ_[2],x2=_wJ_[1],x1$0=_wI_[1],x0$1=l[1];
                                     return [0,[0,[0,0,x0$1,0,1],x1$0,[0,0,x2,0,1],2],l$5]}}}}
                           var nl=n / 2 | 0,match=sub(nl,l),l$0=match[2],left=match[1];
                           if(l$0)
                            {var
                              l$1=l$0[2],
                              mid=l$0[1],
                              match$0=sub((n - nl | 0) - 1 | 0,l$1),
                              l$2=match$0[2],
                              right=match$0[1];
                             return [0,create(left,mid,right),l$2]}
                           throw [0,Assert_failure,_X_]};
                       return sub(length$1(l$0),l$0)[1]}
                     var x4=_wF_[1];
                     return add(x4,add(_wG_,add(_wE_,add(_wC_,singleton(_wA_)))))}
                   return add(_wG_,add(_wE_,add(_wC_,singleton(_wA_))))}
                 return add(_wE_,add(_wC_,singleton(_wA_)))}
               return add(_wC_,singleton(_wA_))}
             return singleton(_wA_)}
           return empty}
         function add_seq(i,m)
          {return fold_left(function(s,x){return add(x,s)},m,i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[3],t=c[2],x=c[1],_wx_=cons_enum(t,rest);
             return [0,x,function(_wy_){return seq_of_enum(_wx_,_wy_)}]}
           return 0}
         function to_seq(c)
          {var _wv_=cons_enum(c,0);
           return function(_ww_){return seq_of_enum(_wv_,_ww_)}}
         function snoc_enum(s,e)
          {var s$0=s,e$0=e;
           for(;;)
            {if(s$0)
              {var
                s$1=s$0[3],
                v=s$0[2],
                l=s$0[1],
                e$1=[0,v,l,e$0],
                s$0=s$1,
                e$0=e$1;
               continue}
             return e$0}}
         function rev_seq_of_enum(c,param)
          {if(c)
            {var rest=c[3],t=c[2],x=c[1],_wt_=snoc_enum(t,rest);
             return [0,x,function(_wu_){return rev_seq_of_enum(_wt_,_wu_)}]}
           return 0}
         function to_rev_seq(c)
          {var _wr_=snoc_enum(c,0);
           return function(_ws_){return rev_seq_of_enum(_wr_,_ws_)}}
         function to_seq_from(low,s)
          {var s$0=s,c=0;
           for(;;)
            {if(s$0)
              {var r=s$0[3],v=s$0[2],l=s$0[1],n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,r,c],s$0=l,c=c$0;continue}
                 var s$0=r;
                 continue}
               var _wp_=[0,v,r,c]}
             else
              var _wp_=c;
             return function(_wq_){return seq_of_enum(_wp_,_wq_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 singleton,
                 remove,
                 union,
                 inter,
                 disjoint,
                 diff,
                 compare,
                 equal,
                 subset,
                 iter,
                 map,
                 fold,
                 for_all,
                 exists,
                 filter,
                 filter_map,
                 partition,
                 cardinal,
                 elements,
                 min_elt,
                 min_elt_opt,
                 max_elt,
                 max_elt_opt,
                 min_elt,
                 min_elt_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 of_list,
                 to_seq_from,
                 to_seq,
                 to_rev_seq,
                 add_seq,
                 of_seq]}];
    caml_register_global(801,Stdlib_Set,"Stdlib__Set");
    var
     Stdlib_Map=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[5];return h}return 0}
         function create(l,x,d,r)
          {var hl=height(l),hr=height(r),_wo_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_wo_]}
         function singleton(x,d){return [0,0,x,d,0,1]}
         function bal(l,x,d,r)
          {if(l)var h=l[5],hl=h;else var hl=0;
           if(r)var h$0=r[5],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[4],ld=l[3],lv=l[2],ll=l[1],_wj_=height(lr);
               if(_wj_ <= height(ll))return create(ll,lv,ld,create(lr,x,d,r));
               if(lr)
                {var
                  lrr=lr[4],
                  lrd=lr[3],
                  lrv=lr[2],
                  lrl=lr[1],
                  _wk_=create(lrr,x,d,r);
                 return create(create(ll,lv,ld,lrl),lrv,lrd,_wk_)}
               return invalid_arg(cst_Map_bal)}
             return invalid_arg(cst_Map_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[4],rd=r[3],rv=r[2],rl=r[1],_wl_=height(rl);
               if(_wl_ <= height(rr))return create(create(l,x,d,rl),rv,rd,rr);
               if(rl)
                {var
                  rlr=rl[4],
                  rld=rl[3],
                  rlv=rl[2],
                  rll=rl[1],
                  _wm_=create(rlr,rv,rd,rr);
                 return create(create(l,x,d,rll),rlv,rld,_wm_)}
               return invalid_arg(cst_Map_bal$1)}
             return invalid_arg(cst_Map_bal$2)}
           var _wn_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_wn_]}
         var empty=0;
         function is_empty(param){return param?0:1}
         function add(x,data,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return d === data?m:[0,l,x,data,r,h];
             if(0 <= c){var rr=add(x,data,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=add(x,data,l);
             return l === ll?m:bal(ll,v,d,r)}
           return [0,0,x,data,0,1]}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return d;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0,d0]}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0,d0]}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,d];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _wi_=0 === c?1:0;
               if(_wi_)return _wi_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function min_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _wh_=param$0[1];
               if(_wh_){var param$0=_wh_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,v,d]}
             throw Not_found}}
         function min_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _wg_=param$0[1];
               if(_wg_){var param$0=_wg_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,[0,v,d]]}
             return 0}}
         function max_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {if(param$0[4]){var param$1=param$0[4],param$0=param$1;continue}
               var d=param$0[3],v=param$0[2];
               return [0,v,d]}
             throw Not_found}}
         function max_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {if(param$0[4]){var param$1=param$0[4],param$0=param$1;continue}
               var d=param$0[3],v=param$0[2];
               return [0,[0,v,d]]}
             return 0}}
         function remove_min_binding(param)
          {if(param)
            {var _wf_=param[1];
             if(_wf_)
              {var r=param[4],d=param[3],v=param[2];
               return bal(remove_min_binding(_wf_),v,d,r)}
             var r$0=param[4];
             return r$0}
           return invalid_arg(cst_Map_remove_min_elt)}
         function _vQ_(t1,t2)
          {if(t1)
            {if(t2)
              {var match=min_binding(t2),d=match[2],x=match[1];
               return bal(t1,x,d,remove_min_binding(t2))}
             return t1}
           return t2}
         function remove(x,m)
          {if(m)
            {var r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return _vQ_(l,r);
             if(0 <= c){var rr=remove(x,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=remove(x,l);
             return l === ll?m:bal(ll,v,d,r)}
           return 0}
         function update(x,f,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {var match=caml_call1(f,[0,d]);
               if(match)
                {var data=match[1];return d === data?m:[0,l,x,data,r,h]}
               return _vQ_(l,r)}
             if(0 <= c){var rr=update(x,f,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=update(x,f,l);
             return l === ll?m:bal(ll,v,d,r)}
           var match$0=caml_call1(f,0);
           if(match$0){var data$0=match$0[1];return [0,0,x,data$0,0,1]}
           return 0}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[4],d=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call2(f,v,d);
               var param$0=r;
               continue}
             return 0}}
         function map(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=map(f,l),
              d$0=caml_call1(f,d),
              r$0=map(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function mapi(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=mapi(f,l),
              d$0=caml_call2(f,v,d),
              r$0=mapi(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function fold(f,m,accu)
          {var m$0=m,accu$0=accu;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                accu$1=caml_call3(f,v,d,fold(f,l,accu$0)),
                m$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _wc_=caml_call2(p,v,d);
               if(_wc_)
                {var _wd_=for_all(p,l);
                 if(_wd_){var param$0=r;continue}
                 var _we_=_wd_}
               else
                var _we_=_wc_;
               return _we_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _v$_=caml_call2(p,v,d);
               if(_v$_)
                var _wa_=_v$_;
               else
                {var _wb_=exists(p,l);
                 if(! _wb_){var param$0=r;continue}
                 var _wa_=_wb_}
               return _wa_}
             return 0}}
         function add_min_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(add_min_binding(k,x,l),v,d,r)}
           return singleton(k,x)}
         function add_max_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(l,v,d,add_max_binding(k,x,r))}
           return singleton(k,x)}
         function join(l,v,d,r)
          {if(l)
            {if(r)
              {var
                rh=r[5],
                rr=r[4],
                rd=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[5],
                lr=l[4],
                ld=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,ld,join(lr,v,d,r))
                       :(lh + 2 | 0) < rh
                         ?bal(join(l,v,d,rl),rv,rd,rr)
                         :create(l,v,d,r)}
             return add_max_binding(v,d,l)}
           return add_min_binding(v,d,r)}
         function concat(t1,t2)
          {if(t1)
            {if(t2)
              {var match=min_binding(t2),d=match[2],x=match[1];
               return join(t1,x,d,remove_min_binding(t2))}
             return t1}
           return t2}
         function concat_or_join(t1,v,d,t2)
          {if(d){var d$0=d[1];return join(t1,v,d$0,t2)}return concat(t1,t2)}
         function split(x,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,[0,d],r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,d,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,d,r)]}
           return _Y_}
         function merge(f,s1,s2)
          {if(s1)
            {var h1=s1[5],r1=s1[4],d1=s1[3],v1=s1[2],l1=s1[1];
             if(height(s2) <= h1)
              {var
                match=split(v1,s2),
                r2=match[3],
                d2=match[2],
                l2=match[1],
                _v7_=merge(f,r1,r2),
                _v8_=caml_call3(f,v1,[0,d1],d2);
               return concat_or_join(merge(f,l1,l2),v1,_v8_,_v7_)}}
           else
            if(! s2)return 0;
           if(s2)
            {var
              r2$0=s2[4],
              d2$0=s2[3],
              v2=s2[2],
              l2$0=s2[1],
              match$0=split(v2,s1),
              r1$0=match$0[3],
              d1$0=match$0[2],
              l1$0=match$0[1],
              _v9_=merge(f,r1$0,r2$0),
              _v__=caml_call3(f,v2,d1$0,[0,d2$0]);
             return concat_or_join(merge(f,l1$0,l2$0),v2,_v__,_v9_)}
           throw [0,Assert_failure,_Z_]}
         function union(f,s1,s2)
          {if(s1)
            {if(s2)
              {var
                h2=s2[5],
                r2=s2[4],
                d2=s2[3],
                v2=s2[2],
                l2=s2[1],
                h1=s1[5],
                r1=s1[4],
                d1=s1[3],
                v1=s1[2],
                l1=s1[1];
               if(h2 <= h1)
                {var
                  match=split(v1,s2),
                  r2$0=match[3],
                  d2$0=match[2],
                  l2$0=match[1],
                  l=union(f,l1,l2$0),
                  r=union(f,r1,r2$0);
                 if(d2$0)
                  {var d2$1=d2$0[1];
                   return concat_or_join(l,v1,caml_call3(f,v1,d1,d2$1),r)}
                 return join(l,v1,d1,r)}
               var
                match$0=split(v2,s1),
                r1$0=match$0[3],
                d1$0=match$0[2],
                l1$0=match$0[1],
                l$0=union(f,l1$0,l2),
                r$0=union(f,r1$0,r2);
               if(d1$0)
                {var d1$1=d1$0[1];
                 return concat_or_join(l$0,v2,caml_call3(f,v2,d1$1,d2),r$0)}
               return join(l$0,v2,d2,r$0)}
             var s=s1}
           else
            var s=s2;
           return s}
         function filter(p,m)
          {if(m)
            {var
              r=m[4],
              d=m[3],
              v=m[2],
              l=m[1],
              l$0=filter(p,l),
              pvd=caml_call2(p,v,d),
              r$0=filter(p,r);
             if(pvd)
              {if(l === l$0 && r === r$0)return m;return join(l$0,v,d,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function filter_map(f,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=filter_map(f,l),
              fvd=caml_call2(f,v,d),
              r$0=filter_map(f,r);
             if(fvd){var d$0=fvd[1];return join(l$0,v,d$0,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pvd=caml_call2(p,v,d),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pvd){var _v5_=concat(lf,rf);return [0,join(lt,v,d,rt),_v5_]}
             var _v6_=join(lf,v,d,rf);
             return [0,concat(lt,rt),_v6_]}
           return ___}
         function cons_enum(m,e)
          {var m$0=m,e$0=e;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                m$1=m$0[1],
                e$1=[0,v,d,r,e$0],
                m$0=m$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var c$0=caml_call2(cmp,d1,d2);
                   if(0 === c$0)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   return c$0}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  _v2_=0 === caml_call2(Ord[1],v1,v2)?1:0;
                 if(_v2_)
                  {var _v3_=caml_call2(cmp,d1,d2);
                   if(_v3_)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   var _v4_=_v3_}
                 else
                  var _v4_=_v2_;
                 return _v4_}
               return 0}
             return e2?0:1}}
         function cardinal(param)
          {if(param)
            {var r=param[4],l=param[1],_v1_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _v1_ | 0}
           return 0}
         function bindings_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,[0,v,d],bindings_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function bindings(s){return bindings_aux(0,s)}
         function add_seq(i,m)
          {return fold_left
                   (function(m,param)
                     {var v=param[2],k=param[1];return add(k,v,m)},
                    m,
                    i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[4],t=c[3],v=c[2],k=c[1],_vZ_=cons_enum(t,rest);
             return [0,[0,k,v],function(_v0_){return seq_of_enum(_vZ_,_v0_)}]}
           return 0}
         function to_seq(m)
          {var _vX_=cons_enum(m,0);
           return function(_vY_){return seq_of_enum(_vX_,_vY_)}}
         function snoc_enum(s,e)
          {var s$0=s,e$0=e;
           for(;;)
            {if(s$0)
              {var
                s$1=s$0[4],
                d=s$0[3],
                v=s$0[2],
                l=s$0[1],
                e$1=[0,v,d,l,e$0],
                s$0=s$1,
                e$0=e$1;
               continue}
             return e$0}}
         function rev_seq_of_enum(c,param)
          {if(c)
            {var rest=c[4],t=c[3],v=c[2],k=c[1],_vV_=snoc_enum(t,rest);
             return [0,
                     [0,k,v],
                     function(_vW_){return rev_seq_of_enum(_vV_,_vW_)}]}
           return 0}
         function to_rev_seq(c)
          {var _vT_=snoc_enum(c,0);
           return function(_vU_){return rev_seq_of_enum(_vT_,_vU_)}}
         function to_seq_from(low,m)
          {var m$0=m,c=0;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,d,r,c],m$0=l,c=c$0;continue}
                 var m$0=r;
                 continue}
               var _vR_=[0,v,d,r,c]}
             else
              var _vR_=c;
             return function(_vS_){return seq_of_enum(_vR_,_vS_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 update,
                 singleton,
                 remove,
                 merge,
                 union,
                 compare,
                 equal,
                 iter,
                 fold,
                 for_all,
                 exists,
                 filter,
                 filter_map,
                 partition,
                 cardinal,
                 bindings,
                 min_binding,
                 min_binding_opt,
                 max_binding,
                 max_binding_opt,
                 min_binding,
                 min_binding_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 map,
                 mapi,
                 to_seq,
                 to_rev_seq,
                 to_seq_from,
                 add_seq,
                 of_seq]}];
    caml_register_global(802,Stdlib_Map,"Stdlib__Map");
    var Empty=[248,cst_Stdlib_Stack_Empty,caml_fresh_oo_id(0)];
    function create$0(param){return [0,0,0]}
    function clear(s){s[1] = 0;s[2] = 0;return 0}
    function copy$3(s){return [0,s[1],s[2]]}
    function push(x,s){s[1] = [0,x,s[1]];s[2] = s[2] + 1 | 0;return 0}
    function pop(s)
     {var _vP_=s[1];
      if(_vP_)
       {var tl=_vP_[2],hd=_vP_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return hd}
      throw Empty}
    function pop_opt(s)
     {var _vO_=s[1];
      if(_vO_)
       {var tl=_vO_[2],hd=_vO_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return [0,hd]}
      return 0}
    function top(s)
     {var _vN_=s[1];if(_vN_){var hd=_vN_[1];return hd}throw Empty}
    function top_opt(s)
     {var _vM_=s[1];if(_vM_){var hd=_vM_[1];return [0,hd]}return 0}
    function is_empty$0(s){return 0 === s[1]?1:0}
    function length$2(s){return s[2]}
    function iter$7(f,s){return iter$2(f,s[1])}
    function fold$2(f,acc,s){return fold_left$0(f,acc,s[1])}
    function to_seq$6(s){return to_seq$1(s[1])}
    function add_seq(q,i){return iter(function(x){return push(x,q)},i)}
    function of_seq$4(g){var s=create$0(0);add_seq(s,g);return s}
    var
     Stdlib_Stack=
      [0,
       Empty,
       create$0,
       push,
       pop,
       pop_opt,
       top,
       top_opt,
       clear,
       copy$3,
       is_empty$0,
       length$2,
       iter$7,
       fold$2,
       to_seq$6,
       add_seq,
       of_seq$4];
    caml_register_global(803,Stdlib_Stack,"Stdlib__Stack");
    var Empty$0=[248,cst_Stdlib_Queue_Empty,caml_fresh_oo_id(0)];
    function create$1(param){return [0,0,0,0]}
    function clear$0(q){q[1] = 0;q[2] = 0;q[3] = 0;return 0}
    function add(x,q)
     {var cell=[0,x,0],_vL_=q[3];
      return _vL_
              ?(q[1] = q[1] + 1 | 0,_vL_[2] = cell,q[3] = cell,0)
              :(q[1] = 1,q[2] = cell,q[3] = cell,0)}
    function peek(q)
     {var _vK_=q[2];if(_vK_){var content=_vK_[1];return content}throw Empty$0}
    function peek_opt(q)
     {var _vJ_=q[2];if(_vJ_){var content=_vJ_[1];return [0,content]}return 0}
    function take$0(q)
     {var _vH_=q[2];
      if(_vH_)
       {var _vI_=_vH_[1];
        if(_vH_[2])
         {var next=_vH_[2];q[1] = q[1] - 1 | 0;q[2] = next;return _vI_}
        clear$0(q);
        return _vI_}
      throw Empty$0}
    function take_opt(q)
     {var _vF_=q[2];
      if(_vF_)
       {var _vG_=_vF_[1];
        if(_vF_[2])
         {var next=_vF_[2];q[1] = q[1] - 1 | 0;q[2] = next;return [0,_vG_]}
        clear$0(q);
        return [0,_vG_]}
      return 0}
    function copy$4(q)
     {var q_res=[0,q[1],0,0],prev=0,cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2],res=[0,content,0];
          if(prev)prev[2] = res;else q_res[2] = res;
          var prev=res,cell=next;
          continue}
        q_res[3] = prev;
        return q_res}}
    function is_empty$1(q){return 0 === q[1]?1:0}
    function length$3(q){return q[1]}
    function iter$8(f,q)
     {var cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2];
          caml_call1(f,content);
          var cell=next;
          continue}
        return 0}}
    function fold$3(f,accu$1,q)
     {var accu=accu$1,cell=q[2];
      for(;;)
       {if(cell)
         {var
           content=cell[1],
           next=cell[2],
           accu$0=caml_call2(f,accu,content),
           accu=accu$0,
           cell=next;
          continue}
        return accu}}
    function transfer(q1,q2)
     {var _vD_=0 < q1[1]?1:0;
      if(_vD_)
       {var _vE_=q2[3];
        return _vE_
                ?(q2[1]
                  =
                  q2[1]
                  +
                  q1[1]
                  |
                  0,
                  _vE_[2]
                  =
                  q1[2],
                  q2[3]
                  =
                  q1[3],
                  clear$0(q1))
                :(q2[1] = q1[1],q2[2] = q1[2],q2[3] = q1[3],clear$0(q1))}
      return _vD_}
    function to_seq$7(q)
     {function aux(c,param)
       {if(c)
         {var x=c[1],next=c[2];
          return [0,x,function(_vC_){return aux(next,_vC_)}]}
        return 0}
      var _vA_=q[2];
      return function(_vB_){return aux(_vA_,_vB_)}}
    function add_seq$0(q,i){return iter(function(x){return add(x,q)},i)}
    function of_seq$5(g){var q=create$1(0);add_seq$0(q,g);return q}
    var
     Stdlib_Queue=
      [0,
       Empty$0,
       create$1,
       add,
       add,
       take$0,
       take_opt,
       take$0,
       peek,
       peek_opt,
       peek,
       clear$0,
       copy$4,
       is_empty$1,
       length$3,
       iter$8,
       fold$3,
       transfer,
       to_seq$7,
       add_seq$0,
       of_seq$5];
    caml_register_global(804,Stdlib_Queue,"Stdlib__Queue");
    var
     Failure$0=[248,cst_Stdlib_Stream_Failure,caml_fresh_oo_id(0)],
     Error=[248,cst_Stdlib_Stream_Error,caml_fresh_oo_id(0)];
    function count(param)
     {if(param){var match=param[1],count=match[1];return count}return 0}
    function data(param)
     {if(param){var match=param[1],data=match[2];return data}return 0}
    function fill_buff(b)
     {b[3] = input(b[1],b[2],0,caml_ml_bytes_length(b[2]));b[4] = 0;return 0}
    function get_data(count,d)
     {var d$0=d;
      for(;;)
       {if(typeof d$0 !== "number")
         switch(d$0[0])
          {case 1:
            var d2=d$0[2],d1=d$0[1],match=get_data(count,d1);
            if(typeof match === "number")
             {var d$0=d2;continue}
            else
             {if(0 === match[0])
               {var d11=match[2],a=match[1];return [0,a,[1,d11,d2]]}
              throw [0,Assert_failure,_$_]}
           case 2:
            var
             f=d$0[1],
             _vw_=caml_obj_tag(f),
             d$1=250 === _vw_?f[1]:246 === _vw_?force_lazy_block(f):f,
             d$0=d$1;
            continue;
           case 3:
            var _vx_=d$0[1],_vy_=_vx_[1];
            if(_vy_)
             {var _vz_=_vy_[1];
              if(_vz_){var a$0=_vz_[1];_vx_[1] = 0;return [0,a$0,d$0]}
              return 0}
            var match$0=caml_call1(_vx_[2],count);
            if(match$0){var a$1=match$0[1];return [0,a$1,d$0]}
            _vx_[1] = _aa_;
            return 0;
           case 4:
            var b=d$0[1];
            if(b[3] <= b[4])fill_buff(b);
            if(0 === b[3])return 0;
            var r=caml_bytes_unsafe_get(b[2],b[4]);
            b[4] = b[4] + 1 | 0;
            return [0,r,d$0]
           }
        return d$0}}
    function peek_data(s)
     {for(;;)
       {var _vr_=s[2];
        if(typeof _vr_ === "number")
         return 0;
        else
         switch(_vr_[0])
          {case 0:var a=_vr_[1];return [0,a];
           case 1:
            var d=get_data(s[1],s[2]);
            if(typeof d === "number")
             return 0;
            else
             {if(0 === d[0]){var a$0=d[1];s[2] = d;return [0,a$0]}
              throw [0,Assert_failure,_ab_]}
           case 2:
            var
             f=_vr_[1],
             _vs_=caml_obj_tag(f),
             _vt_=250 === _vs_?f[1]:246 === _vs_?force_lazy_block(f):f;
            s[2] = _vt_;
            continue;
           case 3:
            var _vu_=_vr_[1],_vv_=_vu_[1];
            if(_vv_){var a$1=_vv_[1];return a$1}
            var x=caml_call1(_vu_[2],s[1]);
            _vu_[1] = [0,x];
            return x;
           default:
            var b=_vr_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :[0,caml_bytes_unsafe_get(b[2],b[4])]}}}
    function peek$0(param)
     {if(param){var s=param[1];return peek_data(s)}return 0}
    function junk_data(s)
     {for(;;)
       {var _vp_=s[2];
        if(typeof _vp_ !== "number")
         switch(_vp_[0])
          {case 0:var d=_vp_[2];s[1] = s[1] + 1 | 0;s[2] = d;return 0;
           case 3:
            var _vq_=_vp_[1];
            if(_vq_[1]){s[1] = s[1] + 1 | 0;_vq_[1] = 0;return 0}
            break;
           case 4:
            var b=_vp_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :(s[1] = s[1] + 1 | 0,b[4] = b[4] + 1 | 0,0)
           }
        var match=peek_data(s);
        if(match)continue;
        return 0}}
    function junk(param)
     {if(param){var data=param[1];return junk_data(data)}return 0}
    function nget_data(n,s)
     {if(0 < n)
       {var match=peek_data(s);
        if(match)
         {var a=match[1];
          junk_data(s);
          var
           match$0=nget_data(n - 1 | 0,s),
           k=match$0[3],
           d=match$0[2],
           al=match$0[1];
          return [0,[0,a,al],[0,a,d],k + 1 | 0]}
        return [0,0,s[2],0]}
      return [0,0,s[2],0]}
    function npeek(n,param)
     {if(param)
       {var
         d$0=param[1],
         match=nget_data(n,d$0),
         len=match[3],
         d=match[2],
         al=match[1];
        d$0[1] = d$0[1] - len | 0;
        d$0[2] = d;
        return al}
      return 0}
    function next(s)
     {var match=peek$0(s);
      if(match){var a=match[1];junk(s);return a}
      throw Failure$0}
    function empty$2(s){var match=peek$0(s);if(match)throw Failure$0;return 0}
    function iter$9(f,strm)
     {for(;;)
       {var match=peek$0(strm);
        if(match){var a=match[1];junk(strm);caml_call1(f,a);continue}
        return 0}}
    function from(f){return [0,[0,0,[3,[0,0,f]]]]}
    function of_list$1(l)
     {var _vo_=0;
      return [0,[0,0,fold_right(function(x,l){return [0,x,l]},l,_vo_)]]}
    function of_string(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_string_length(s)
                         ?(count[1]++,[0,caml_string_get(s,c)])
                         :0})}
    function of_bytes$0(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_bytes_length(s)
                         ?(count[1]++,[0,caml_bytes_get(s,c)])
                         :0})}
    function of_channel(ic)
     {return [0,[0,0,[4,[0,ic,caml_create_bytes(4096),0,0]]]]}
    function iapp(i,s){var _vn_=data(s);return [0,[0,0,[1,data(i),_vn_]]]}
    function icons(i,s){return [0,[0,0,[0,i,data(s)]]]}
    function ising(i){return [0,[0,0,[0,i,0]]]}
    function lapp(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_vl_)
                  {var _vm_=data(s);return [1,data(caml_call1(f,0)),_vm_]}]]]]}
    function lcons(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_vj_)
                  {var _vk_=data(s);return [0,caml_call1(f,0),_vk_]}]]]]}
    function lsing(f)
     {return [0,[0,0,[2,[246,function(_vi_){return [0,caml_call1(f,0),0]}]]]]}
    var sempty=0;
    function slazy(f)
     {return [0,[0,0,[2,[246,function(_vh_){return data(caml_call1(f,0))}]]]]}
    function dump_data(f,param)
     {if(typeof param === "number")
       return print_string(cst_Sempty);
      else
       switch(param[0])
        {case 0:
          var d=param[2],a=param[1];
          print_string(cst_Scons);
          caml_call1(f,a);
          print_string(cst$7);
          dump_data(f,d);
          return print_string(cst$8);
         case 1:
          var d2=param[2],d1=param[1];
          print_string(cst_Sapp);
          dump_data(f,d1);
          print_string(cst$9);
          dump_data(f,d2);
          return print_string(cst$10);
         case 2:return print_string(cst_Slazy);
         case 3:return print_string(cst_Sgen);
         default:return print_string(cst_Sbuffio)}}
    function dump(f,s)
     {print_string(cst_count);
      print_int(count(s));
      print_string(cst_data);
      dump_data(f,data(s));
      print_string(cst$6);
      return print_newline(0)}
    var
     Stdlib_Stream=
      [0,
       Failure$0,
       Error,
       from,
       of_list$1,
       of_string,
       of_bytes$0,
       of_channel,
       iter$9,
       next,
       empty$2,
       peek$0,
       junk,
       count,
       npeek,
       iapp,
       icons,
       ising,
       lapp,
       lcons,
       lsing,
       sempty,
       slazy,
       dump];
    caml_register_global(805,Stdlib_Stream,"Stdlib__Stream");
    function create$2(n)
     {var
       n$0=1 <= n?n:1,
       n$1=max_string_length < n$0?max_string_length:n$0,
       s=caml_create_bytes(n$1);
      return [0,s,0,n$1,s]}
    function contents(b){return sub_string(b[1],0,b[2])}
    function to_bytes$0(b){return sub(b[1],0,b[2])}
    function sub$3(b,ofs,len)
     {if(0 <= ofs && 0 <= len && ! ((b[2] - len | 0) < ofs))
       return sub_string(b[1],ofs,len);
      return invalid_arg(cst_Buffer_sub)}
    function blit$3(src,srcoff,dst,dstoff,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        srcoff
        &&
        !
        ((src[2] - len | 0) < srcoff)
        &&
        0
        <=
        dstoff
        &&
        !
        ((caml_ml_bytes_length(dst) - len | 0) < dstoff))
       return caml_blit_bytes(src[1],srcoff,dst,dstoff,len);
      return invalid_arg(cst_Buffer_blit)}
    function nth$0(b,ofs)
     {if(0 <= ofs && ! (b[2] <= ofs))return caml_bytes_unsafe_get(b[1],ofs);
      return invalid_arg(cst_Buffer_nth)}
    function length$4(b){return b[2]}
    function clear$1(b){b[2] = 0;return 0}
    function reset(b)
     {b[2] = 0;b[1] = b[4];b[3] = caml_ml_bytes_length(b[1]);return 0}
    function resize(b,more)
     {var old_pos=b[2],old_len=b[3],new_len=[0,old_len];
      for(;;)
       {if(new_len[1] < (old_pos + more | 0))
         {new_len[1] = 2 * new_len[1] | 0;continue}
        if(max_string_length < new_len[1])
         if((old_pos + more | 0) <= max_string_length)
          new_len[1] = max_string_length;
         else
          failwith(cst_Buffer_add_cannot_grow_buf);
        var new_buffer=caml_create_bytes(new_len[1]);
        blit(b[1],0,new_buffer,0,b[2]);
        b[1] = new_buffer;
        b[3] = new_len[1];
        if((b[2] + more | 0) <= b[3])
         {if((old_pos + more | 0) <= b[3])return 0;
          throw [0,Assert_failure,_ac_]}
        throw [0,Assert_failure,_ad_]}}
    function add_char(b,c)
     {var pos=b[2];
      if(b[3] <= pos)resize(b,1);
      caml_bytes_unsafe_set(b[1],pos,c);
      b[2] = pos + 1 | 0;
      return 0}
    var uchar_utf_8_byte_length_max=4,uchar_utf_16_byte_length_max=4;
    function add_utf_8_uchar(b,u)
     {for(;;)
       {var pos=b[2];
        if(b[3] <= pos)resize(b,uchar_utf_8_byte_length_max);
        var n=set_utf_8_uchar(b[1],pos,u);
        if(0 === n){resize(b,uchar_utf_8_byte_length_max);continue}
        b[2] = pos + n | 0;
        return 0}}
    function add_utf_16be_uchar(b,u)
     {for(;;)
       {var pos=b[2];
        if(b[3] <= pos)resize(b,uchar_utf_16_byte_length_max);
        var n=set_utf_16be_uchar(b[1],pos,u);
        if(0 === n){resize(b,uchar_utf_16_byte_length_max);continue}
        b[2] = pos + n | 0;
        return 0}}
    function add_utf_16le_uchar(b,u)
     {for(;;)
       {var pos=b[2];
        if(b[3] <= pos)resize(b,uchar_utf_16_byte_length_max);
        var n=set_utf_16le_uchar(b[1],pos,u);
        if(0 === n){resize(b,uchar_utf_16_byte_length_max);continue}
        b[2] = pos + n | 0;
        return 0}}
    function add_substring(b,s,offset,len)
     {var _ve_=offset < 0?1:0;
      if(_ve_)
       var _vf_=_ve_;
      else
       var
        _vg_=len < 0?1:0,
        _vf_=_vg_ || ((caml_ml_string_length(s) - len | 0) < offset?1:0);
      if(_vf_)invalid_arg(cst_Buffer_add_substring_add_s);
      var new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      caml_blit_string(s,offset,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_subbytes(b,s,offset,len)
     {return add_substring(b,caml_string_of_bytes(s),offset,len)}
    function add_string(b,s)
     {var len=caml_ml_string_length(s),new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      caml_blit_string(s,0,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_bytes(b,s){return add_string(b,caml_string_of_bytes(s))}
    function add_buffer(b,bs){return add_subbytes(b,bs[1],0,bs[2])}
    function add_channel(b,ic,len)
     {var _vc_=len < 0?1:0,_vd_=_vc_ || (max_string_length < len?1:0);
      if(_vd_)invalid_arg(cst_Buffer_add_channel);
      if(b[3] < (b[2] + len | 0))resize(b,len);
      var already_read=0,ofs=b[2],to_read=len,_vb_=b[1];
      for(;;)
       {if(0 !== to_read)
         {var r=input(ic,_vb_,ofs,to_read);
          if(0 !== r)
           {var
             already_read$0=already_read + r | 0,
             ofs$0=ofs + r | 0,
             to_read$0=to_read - r | 0,
             already_read=already_read$0,
             ofs=ofs$0,
             to_read=to_read$0;
            continue}}
        if((b[2] + already_read | 0) <= b[3])
         {b[2] = b[2] + already_read | 0;
          if(already_read < len)throw End_of_file;
          return 0}
        throw [0,Assert_failure,_ae_]}}
    function output_buffer(oc,b){return output(oc,b[1],0,b[2])}
    function add_substitute(b,f,s)
     {var lim$1=caml_ml_string_length(s),previous=32,i$7=0;
      for(;;)
       {if(i$7 < lim$1)
         {var current=caml_string_get(s,i$7);
          if(36 === current)
           {if(92 === previous)
             {add_char(b,current);
              var i$8=i$7 + 1 | 0,previous=32,i$7=i$8;
              continue}
            var start=i$7 + 1 | 0;
            if(lim$1 <= start)throw Not_found;
            var opening=caml_string_get(s,start),switch$0=0;
            if(40 !== opening && 123 !== opening)
             {var i$6=start + 1 | 0,lim$0=caml_ml_string_length(s),i$3=i$6;
              for(;;)
               {if(lim$0 <= i$3)
                 var stop=lim$0;
                else
                 {var match=caml_string_get(s,i$3),switch$1=0;
                  if(91 <= match)
                   {if(97 <= match)
                     {if(! (123 <= match))switch$1 = 1}
                    else
                     if(95 === match)switch$1 = 1}
                  else
                   if(58 <= match)
                    {if(65 <= match)switch$1 = 1}
                   else
                    if(48 <= match)switch$1 = 1;
                  if(switch$1){var i$4=i$3 + 1 | 0,i$3=i$4;continue}
                  var stop=i$3}
                var match$0=[0,sub$0(s,start,stop - start | 0),stop];
                switch$0 = 1;
                break}}
            if(! switch$0)
             {var i$5=start + 1 | 0,k$2=0;
              if(40 === opening)
               var _u$_=41;
              else
               {if(123 !== opening)throw [0,Assert_failure,_af_];var _u$_=125}
              var lim=caml_ml_string_length(s),k=k$2,i=i$5;
              for(;;)
               {if(lim <= i)throw Not_found;
                if(caml_string_get(s,i) === opening)
                 {var i$0=i + 1 | 0,k$0=k + 1 | 0,k=k$0,i=i$0;continue}
                if(caml_string_get(s,i) !== _u$_)
                 {var i$2=i + 1 | 0,i=i$2;continue}
                if(0 !== k)
                 {var i$1=i + 1 | 0,k$1=k - 1 | 0,k=k$1,i=i$1;continue}
                var
                 match$0=
                  [0,sub$0(s,i$5,(i - start | 0) - 1 | 0),i + 1 | 0];
                break}}
            var next_i=match$0[2],ident=match$0[1];
            add_string(b,caml_call1(f,ident));
            var previous=32,i$7=next_i;
            continue}
          if(92 === previous)
           {add_char(b,92);
            add_char(b,current);
            var i$9=i$7 + 1 | 0,previous=32,i$7=i$9;
            continue}
          if(92 === current)
           {var i$10=i$7 + 1 | 0,previous=current,i$7=i$10;continue}
          add_char(b,current);
          var i$11=i$7 + 1 | 0,previous=current,i$7=i$11;
          continue}
        var _va_=92 === previous?1:0;
        return _va_?add_char(b,previous):_va_}}
    function truncate(b,len)
     {if(0 <= len && ! (b[2] < len)){b[2] = len;return 0}
      return invalid_arg(cst_Buffer_truncate)}
    function to_seq$8(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_unsafe_get(b[1],i),_u9_=i + 1 | 0;
        return [0,x,function(_u__){return aux(_u9_,_u__)}]}
      var _u7_=0;
      return function(_u8_){return aux(_u7_,_u8_)}}
    function to_seqi$3(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_unsafe_get(b[1],i),_u5_=i + 1 | 0;
        return [0,[0,i,x],function(_u6_){return aux(_u5_,_u6_)}]}
      var _u3_=0;
      return function(_u4_){return aux(_u3_,_u4_)}}
    function add_seq$1(b,seq)
     {return iter(function(_u2_){return add_char(b,_u2_)},seq)}
    function of_seq$6(i){var b=create$2(32);add_seq$1(b,i);return b}
    function add_int8(b,x)
     {var new_position=b[2] + 1 | 0;
      if(b[3] < new_position)resize(b,1);
      caml_bytes_unsafe_set(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_ne(b,x)
     {var new_position=b[2] + 2 | 0;
      if(b[3] < new_position)resize(b,2);
      caml_bytes_set16(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int32_ne(b,x)
     {var new_position=b[2] + 4 | 0;
      if(b[3] < new_position)resize(b,4);
      caml_bytes_set32(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int64_ne(b,x)
     {var new_position=b[2] + 8 | 0;
      if(b[3] < new_position)resize(b,8);
      caml_bytes_set64(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_le(b,x){return add_int16_ne(b,x)}
    function add_int16_be(b,x)
     {var x$0=caml_bswap16(x);return add_int16_ne(b,x$0)}
    function add_int32_le(b,x){return add_int32_ne(b,x)}
    function add_int32_be(b,x)
     {var x$0=caml_int32_bswap(x);return add_int32_ne(b,x$0)}
    function add_int64_le(b,x){return add_int64_ne(b,x)}
    function add_int64_be(b,x)
     {var x$0=caml_int64_bswap(x);return add_int64_ne(b,x$0)}
    var
     Stdlib_Buffer=
      [0,
       create$2,
       contents,
       to_bytes$0,
       sub$3,
       blit$3,
       nth$0,
       length$4,
       clear$1,
       reset,
       output_buffer,
       truncate,
       add_char,
       add_utf_8_uchar,
       add_utf_16le_uchar,
       add_utf_16be_uchar,
       add_string,
       add_bytes,
       add_substring,
       add_subbytes,
       add_substitute,
       add_buffer,
       add_channel,
       to_seq$8,
       to_seqi$3,
       add_seq$1,
       of_seq$6,
       add_int8,
       add_int8,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int32_ne,
       add_int32_be,
       add_int32_le,
       add_int64_ne,
       add_int64_be,
       add_int64_le];
    caml_register_global(806,Stdlib_Buffer,"Stdlib__Buffer");
    function create_char_set(param){return make$0(32,0)}
    function add_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return caml_bytes_set
              (char_set,
               str_ind,
               char_of_int(caml_bytes_get(char_set,str_ind) | mask))}
    function freeze_char_set(char_set){return of_bytes(char_set)}
    function rev_char_set(char_set)
     {var char_set$0=create_char_set(0),i=0;
      for(;;)
       {caml_bytes_set
         (char_set$0,i,char_of_int(caml_string_get(char_set,i) ^ 255));
        var _u1_=i + 1 | 0;
        if(31 !== i){var i=_u1_;continue}
        return caml_string_of_bytes(char_set$0)}}
    function is_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return 0 !== (caml_string_get(char_set,str_ind) & mask)?1:0}
    function pad_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return [0,1,width]}return 0}
    function param_format_of_ignored_format(ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:return [0,[0,fmt]];
         case 1:return [0,[1,fmt]];
         case 2:return [0,[19,fmt]];
         default:return [0,[22,fmt]]}
      else
       switch(ign[0])
        {case 0:var pad_opt=ign[1];return [0,[2,pad_of_pad_opt(pad_opt),fmt]];
         case 1:
          var pad_opt$0=ign[1];return [0,[3,pad_of_pad_opt(pad_opt$0),fmt]];
         case 2:
          var pad_opt$1=ign[2],iconv=ign[1];
          return [0,[4,iconv,pad_of_pad_opt(pad_opt$1),0,fmt]];
         case 3:
          var pad_opt$2=ign[2],iconv$0=ign[1];
          return [0,[5,iconv$0,pad_of_pad_opt(pad_opt$2),0,fmt]];
         case 4:
          var pad_opt$3=ign[2],iconv$1=ign[1];
          return [0,[6,iconv$1,pad_of_pad_opt(pad_opt$3),0,fmt]];
         case 5:
          var pad_opt$4=ign[2],iconv$2=ign[1];
          return [0,[7,iconv$2,pad_of_pad_opt(pad_opt$4),0,fmt]];
         case 6:
          var prec_opt=ign[2],pad_opt$5=ign[1];
          if(prec_opt)var ndec=prec_opt[1],_u0_=[0,ndec];else var _u0_=0;
          return [0,[8,_ag_,pad_of_pad_opt(pad_opt$5),_u0_,fmt]];
         case 7:
          var pad_opt$6=ign[1];return [0,[9,pad_of_pad_opt(pad_opt$6),fmt]];
         case 8:
          var fmtty=ign[2],pad_opt$7=ign[1];
          return [0,[13,pad_opt$7,fmtty,fmt]];
         case 9:
          var fmtty$0=ign[2],pad_opt$8=ign[1];
          return [0,[14,pad_opt$8,fmtty$0,fmt]];
         case 10:
          var char_set=ign[2],width_opt=ign[1];
          return [0,[20,width_opt,char_set,fmt]];
         default:var counter=ign[1];return [0,[21,counter,fmt]]}}
    function default_float_precision(fconv){return 5 === fconv[2]?12:-6}
    function buffer_create(init_size)
     {return [0,0,caml_create_bytes(init_size)]}
    function buffer_check_size(buf,overhead)
     {var
       len=caml_ml_bytes_length(buf[2]),
       min_len=buf[1] + overhead | 0,
       _uY_=len < min_len?1:0;
      if(_uY_)
       {var
         new_len=max$1(len * 2 | 0,min_len),
         new_str=caml_create_bytes(new_len);
        blit(buf[2],0,new_str,0,len);
        buf[2] = new_str;
        var _uZ_=0}
      else
       var _uZ_=_uY_;
      return _uZ_}
    function buffer_add_char(buf,c)
     {buffer_check_size(buf,1);
      caml_bytes_set(buf[2],buf[1],c);
      buf[1] = buf[1] + 1 | 0;
      return 0}
    function buffer_add_string(buf,s)
     {var str_len=caml_ml_string_length(s);
      buffer_check_size(buf,str_len);
      blit$0(s,0,buf[2],buf[1],str_len);
      buf[1] = buf[1] + str_len | 0;
      return 0}
    function buffer_contents(buf){return sub_string(buf[2],0,buf[1])}
    function char_of_iconv(iconv)
     {switch(iconv)
       {case 6:
        case 7:return 120;
        case 8:
        case 9:return 88;
        case 10:
        case 11:return 111;
        case 12:
        case 15:return 117;
        case 0:
        case 1:
        case 2:
        case 13:return 100;
        default:return 105}}
    function char_of_fconv(opt,fconv)
     {if(opt)var sth=opt[1],cF=sth;else var cF=70;
      switch(fconv[2])
       {case 0:return 102;
        case 1:return 101;
        case 2:return 69;
        case 3:return 103;
        case 4:return 71;
        case 5:return cF;
        case 6:return 104;
        case 7:return 72;
        default:return 70}}
    function bprint_padty(buf,padty)
     {switch(padty)
       {case 0:return buffer_add_char(buf,45);
        case 1:return 0;
        default:return buffer_add_char(buf,48)}}
    function bprint_ignored_flag(buf,ign_flag)
     {return ign_flag?buffer_add_char(buf,95):ign_flag}
    function bprint_pad_opt(buf,pad_opt)
     {if(pad_opt)
       {var width=pad_opt[1];
        return buffer_add_string(buf,caml_string_of_jsbytes("" + width))}
      return 0}
    function bprint_padding(buf,pad)
     {if(typeof pad === "number")
       return 0;
      else
       {if(0 === pad[0])
         {var n=pad[2],padty=pad[1];
          bprint_padty(buf,padty);
          return buffer_add_string(buf,caml_string_of_jsbytes("" + n))}
        var padty$0=pad[1];
        bprint_padty(buf,padty$0);
        return buffer_add_char(buf,42)}}
    function bprint_precision(buf,prec)
     {if(typeof prec === "number")return prec?buffer_add_string(buf,cst$11):0;
      var n=prec[1];
      buffer_add_char(buf,46);
      return buffer_add_string(buf,caml_string_of_jsbytes("" + n))}
    function bprint_iconv_flag(buf,iconv)
     {switch(iconv)
       {case 1:
        case 4:return buffer_add_char(buf,43);
        case 2:
        case 5:return buffer_add_char(buf,32);
        case 7:
        case 9:
        case 11:
        case 13:
        case 14:
        case 15:return buffer_add_char(buf,35);
        default:return 0}}
    function bprint_altint_fmt(buf,ign_flag,iconv,pad,prec,c)
     {buffer_add_char(buf,37);
      bprint_ignored_flag(buf,ign_flag);
      bprint_iconv_flag(buf,iconv);
      bprint_padding(buf,pad);
      bprint_precision(buf,prec);
      buffer_add_char(buf,c);
      return buffer_add_char(buf,char_of_iconv(iconv))}
    function bprint_fconv_flag(buf,fconv)
     {switch(fconv[1])
       {case 0:break;
        case 1:buffer_add_char(buf,43);break;
        default:buffer_add_char(buf,32)}
      return 8 <= fconv[2]?buffer_add_char(buf,35):0}
    function string_of_formatting_lit(formatting_lit)
     {if(typeof formatting_lit === "number")
       switch(formatting_lit)
        {case 0:return cst$12;
         case 1:return cst$13;
         case 2:return cst$14;
         case 3:return cst$15;
         case 4:return cst$16;
         case 5:return cst$17;
         default:return cst$18}
      else
       switch(formatting_lit[0])
        {case 0:var str=formatting_lit[1];return str;
         case 1:var str$0=formatting_lit[1];return str$0;
         default:var c=formatting_lit[1];return cat(cst$19,make$1(1,c))}}
    function bprint_char_literal(buf,chr)
     {return 37 === chr?buffer_add_string(buf,cst$20):buffer_add_char(buf,chr)}
    function bprint_string_literal(buf,str)
     {var _uW_=caml_ml_string_length(str) - 1 | 0,_uV_=0;
      if(! (_uW_ < 0))
       {var i=_uV_;
        for(;;)
         {bprint_char_literal(buf,caml_string_get(str,i));
          var _uX_=i + 1 | 0;
          if(_uW_ !== i){var i=_uX_;continue}
          break}}
      return 0}
    function bprint_fmtty(buf,fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:
           var rest=fmtty$0[1];
           buffer_add_string(buf,cst_c);
           var fmtty$0=rest;
           continue;
          case 1:
           var rest$0=fmtty$0[1];
           buffer_add_string(buf,cst_s);
           var fmtty$0=rest$0;
           continue;
          case 2:
           var rest$1=fmtty$0[1];
           buffer_add_string(buf,cst_i);
           var fmtty$0=rest$1;
           continue;
          case 3:
           var rest$2=fmtty$0[1];
           buffer_add_string(buf,cst_li);
           var fmtty$0=rest$2;
           continue;
          case 4:
           var rest$3=fmtty$0[1];
           buffer_add_string(buf,cst_ni);
           var fmtty$0=rest$3;
           continue;
          case 5:
           var rest$4=fmtty$0[1];
           buffer_add_string(buf,cst_Li);
           var fmtty$0=rest$4;
           continue;
          case 6:
           var rest$5=fmtty$0[1];
           buffer_add_string(buf,cst_f);
           var fmtty$0=rest$5;
           continue;
          case 7:
           var rest$6=fmtty$0[1];
           buffer_add_string(buf,cst_B);
           var fmtty$0=rest$6;
           continue;
          case 8:
           var rest$7=fmtty$0[2],sub_fmtty=fmtty$0[1];
           buffer_add_string(buf,cst$21);
           bprint_fmtty(buf,sub_fmtty);
           buffer_add_string(buf,cst$22);
           var fmtty$0=rest$7;
           continue;
          case 9:
           var rest$8=fmtty$0[3],sub_fmtty$0=fmtty$0[1];
           buffer_add_string(buf,cst$23);
           bprint_fmtty(buf,sub_fmtty$0);
           buffer_add_string(buf,cst$24);
           var fmtty$0=rest$8;
           continue;
          case 10:
           var rest$9=fmtty$0[1];
           buffer_add_string(buf,cst_a);
           var fmtty$0=rest$9;
           continue;
          case 11:
           var rest$10=fmtty$0[1];
           buffer_add_string(buf,cst_t$0);
           var fmtty$0=rest$10;
           continue;
          case 12:
           var rest$11=fmtty$0[1];
           buffer_add_string(buf,cst$25);
           var fmtty$0=rest$11;
           continue;
          case 13:
           var rest$12=fmtty$0[1];
           buffer_add_string(buf,cst_r$0);
           var fmtty$0=rest$12;
           continue;
          default:
           var rest$13=fmtty$0[1];
           buffer_add_string(buf,cst_r$1);
           var fmtty$0=rest$13;
           continue}}
    function int_of_custom_arity(param)
     {if(param){var x=param[1];return 1 + int_of_custom_arity(x) | 0}return 0}
    function string_of_fmt(fmt)
     {var buf=buffer_create(16);
      function fmtiter(fmt,ign_flag)
       {var fmt$0=fmt,ign_flag$0=ign_flag;
        a:
        for(;;)
         if(typeof fmt$0 === "number")
          return 0;
         else
          switch(fmt$0[0])
           {case 0:
             var rest=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             buffer_add_char(buf,99);
             var fmt$0=rest,ign_flag$0=0;
             continue;
            case 1:
             var rest$0=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             buffer_add_char(buf,67);
             var fmt$0=rest$0,ign_flag$0=0;
             continue;
            case 2:
             var rest$1=fmt$0[2],pad=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_padding(buf,pad);
             buffer_add_char(buf,115);
             var fmt$0=rest$1,ign_flag$0=0;
             continue;
            case 3:
             var rest$2=fmt$0[2],pad$0=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_padding(buf,pad$0);
             buffer_add_char(buf,83);
             var fmt$0=rest$2,ign_flag$0=0;
             continue;
            case 4:
             var rest$3=fmt$0[4],prec=fmt$0[3],pad$1=fmt$0[2],iconv=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_iconv_flag(buf,iconv);
             bprint_padding(buf,pad$1);
             bprint_precision(buf,prec);
             buffer_add_char(buf,char_of_iconv(iconv));
             var fmt$0=rest$3,ign_flag$0=0;
             continue;
            case 5:
             var
              rest$4=fmt$0[4],
              prec$0=fmt$0[3],
              pad$2=fmt$0[2],
              iconv$0=fmt$0[1];
             bprint_altint_fmt(buf,ign_flag$0,iconv$0,pad$2,prec$0,108);
             var fmt$0=rest$4,ign_flag$0=0;
             continue;
            case 6:
             var
              rest$5=fmt$0[4],
              prec$1=fmt$0[3],
              pad$3=fmt$0[2],
              iconv$1=fmt$0[1];
             bprint_altint_fmt(buf,ign_flag$0,iconv$1,pad$3,prec$1,110);
             var fmt$0=rest$5,ign_flag$0=0;
             continue;
            case 7:
             var
              rest$6=fmt$0[4],
              prec$2=fmt$0[3],
              pad$4=fmt$0[2],
              iconv$2=fmt$0[1];
             bprint_altint_fmt(buf,ign_flag$0,iconv$2,pad$4,prec$2,76);
             var fmt$0=rest$6,ign_flag$0=0;
             continue;
            case 8:
             var
              rest$7=fmt$0[4],
              prec$3=fmt$0[3],
              pad$5=fmt$0[2],
              fconv=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_fconv_flag(buf,fconv);
             bprint_padding(buf,pad$5);
             bprint_precision(buf,prec$3);
             buffer_add_char(buf,char_of_fconv(0,fconv));
             var fmt$0=rest$7,ign_flag$0=0;
             continue;
            case 9:
             var rest$8=fmt$0[2],pad$6=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_padding(buf,pad$6);
             buffer_add_char(buf,66);
             var fmt$0=rest$8,ign_flag$0=0;
             continue;
            case 10:
             var rest$9=fmt$0[1];
             buffer_add_string(buf,cst$26);
             var fmt$0=rest$9;
             continue;
            case 11:
             var rest$10=fmt$0[2],str=fmt$0[1];
             bprint_string_literal(buf,str);
             var fmt$0=rest$10;
             continue;
            case 12:
             var rest$11=fmt$0[2],chr$0=fmt$0[1];
             bprint_char_literal(buf,chr$0);
             var fmt$0=rest$11;
             continue;
            case 13:
             var rest$12=fmt$0[3],fmtty=fmt$0[2],pad_opt=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_pad_opt(buf,pad_opt);
             buffer_add_char(buf,123);
             bprint_fmtty(buf,fmtty);
             buffer_add_char(buf,37);
             buffer_add_char(buf,125);
             var fmt$0=rest$12,ign_flag$0=0;
             continue;
            case 14:
             var rest$13=fmt$0[3],fmtty$0=fmt$0[2],pad_opt$0=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_pad_opt(buf,pad_opt$0);
             buffer_add_char(buf,40);
             bprint_fmtty(buf,fmtty$0);
             buffer_add_char(buf,37);
             buffer_add_char(buf,41);
             var fmt$0=rest$13,ign_flag$0=0;
             continue;
            case 15:
             var rest$14=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             buffer_add_char(buf,97);
             var fmt$0=rest$14,ign_flag$0=0;
             continue;
            case 16:
             var rest$15=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             buffer_add_char(buf,116);
             var fmt$0=rest$15,ign_flag$0=0;
             continue;
            case 17:
             var rest$16=fmt$0[2],fmting_lit=fmt$0[1];
             bprint_string_literal(buf,string_of_formatting_lit(fmting_lit));
             var fmt$0=rest$16;
             continue;
            case 18:
             var rest$17=fmt$0[2],fmting_gen=fmt$0[1];
             if(0 === fmting_gen[0])
              {var match$1=fmting_gen[1],str$0=match$1[2];
               buffer_add_string(buf,cst$27);
               buffer_add_string(buf,str$0)}
             else
              {var match$2=fmting_gen[1],str$1=match$2[2];
               buffer_add_string(buf,cst$28);
               buffer_add_string(buf,str$1)}
             var fmt$0=rest$17;
             continue;
            case 19:
             var rest$18=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             buffer_add_char(buf,114);
             var fmt$0=rest$18,ign_flag$0=0;
             continue;
            case 20:
             var rest$19=fmt$0[3],char_set=fmt$0[2],width_opt=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_pad_opt(buf,width_opt);
             var
              print_char=
               function(buf,i)
                {var c=char_of_int(i);
                 return 37 === c
                         ?(buffer_add_char(buf,37),buffer_add_char(buf,37))
                         :64 === c
                           ?(buffer_add_char(buf,37),buffer_add_char(buf,64))
                           :buffer_add_char(buf,c)};
             buffer_add_char(buf,91);
             var
              _uL_=
               is_in_char_set(char_set,0)
                ?(buffer_add_char(buf,94),rev_char_set(char_set))
                :char_set,
              is_alone$0=
               function(_uQ_)
                {function is_alone(c)
                  {var
                    after=chr(c + 1 | 0),
                    before=chr(c - 1 | 0),
                    _uR_=is_in_char_set(_uQ_,c);
                   if(_uR_)
                    var
                     _uS_=is_in_char_set(_uQ_,before),
                     _uT_=_uS_?is_in_char_set(_uQ_,after):_uS_,
                     _uU_=1 - _uT_;
                   else
                    var _uU_=_uR_;
                   return _uU_}
                 return is_alone},
              is_alone=is_alone$0(_uL_);
             if(is_alone(93))buffer_add_char(buf,93);
             var i=1;
             b:
             for(;;)
              {if(i < 256)
                {if(! is_in_char_set(_uL_,char_of_int(i)))
                  {var i$0=i + 1 | 0,i=i$0;continue}
                 var match=char_of_int(i),switcher=match - 45 | 0,switch$0=0;
                 if(48 < switcher >>> 0)
                  if(210 <= switcher)print_char(buf,255);else switch$0 = 1;
                 else
                  {if(46 < switcher - 1 >>> 0)
                    {var i$2=i + 1 | 0,i=i$2;continue}
                   switch$0 = 1}
                 if(switch$0)
                  {var i$1=i + 1 | 0;
                   if(! is_in_char_set(_uL_,char_of_int(i$1)))
                    {print_char(buf,i$1 - 1 | 0);
                     var i$6=i$1 + 1 | 0,i=i$6;
                     continue}
                   var
                    match$0=char_of_int(i$1),
                    switcher$0=match$0 - 45 | 0,
                    switch$1=0;
                   if(48 < switcher$0 >>> 0)
                    if(210 <= switcher$0)
                     {print_char(buf,254);print_char(buf,255)}
                    else
                     switch$1 = 1;
                   else
                    if(46 < switcher$0 - 1 >>> 0)
                     {if(! is_in_char_set(_uL_,char_of_int(i$1 + 1 | 0)))
                       {print_char(buf,i$1 - 1 | 0);
                        var i$5=i$1 + 1 | 0,i=i$5;
                        continue}
                      switch$1 = 1}
                    else
                     switch$1 = 1;
                   if(switch$1)
                    {if(! is_in_char_set(_uL_,char_of_int(i$1 + 1 | 0)))
                      {print_char(buf,i$1 - 1 | 0);
                       print_char(buf,i$1);
                       var i$4=i$1 + 2 | 0,i=i$4;
                       continue}
                     var j=i$1 + 2 | 0,i$3=i$1 - 1 | 0,j$0=j;
                     for(;;)
                      {if(256 !== j$0 && is_in_char_set(_uL_,char_of_int(j$0)))
                        {var j$1=j$0 + 1 | 0,j$0=j$1;continue}
                       print_char(buf,i$3);
                       print_char(buf,45);
                       print_char(buf,j$0 - 1 | 0);
                       if(j$0 < 256){var i$7=j$0 + 1 | 0,i=i$7;continue b}
                       break}}}}
               if(is_alone(45))buffer_add_char(buf,45);
               buffer_add_char(buf,93);
               var fmt$0=rest$19,ign_flag$0=0;
               continue a}
            case 21:
             var rest$20=fmt$0[2],counter=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             switch(counter)
              {case 0:var _uM_=108;break;
               case 1:var _uM_=110;break;
               default:var _uM_=78}
             buffer_add_char(buf,_uM_);
             var fmt$0=rest$20,ign_flag$0=0;
             continue;
            case 22:
             var rest$21=fmt$0[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag$0);
             bprint_string_literal(buf,cst_0c);
             var fmt$0=rest$21,ign_flag$0=0;
             continue;
            case 23:
             var
              rest$22=fmt$0[2],
              ign=fmt$0[1],
              match$3=param_format_of_ignored_format(ign,rest$22),
              fmt$1=match$3[1],
              fmt$0=fmt$1,
              ign_flag$0=1;
             continue;
            default:
             var
              rest$23=fmt$0[3],
              arity=fmt$0[1],
              _uO_=int_of_custom_arity(arity),
              _uN_=1;
             if(! (_uO_ < 1))
              {var i$8=_uN_;
               for(;;)
                {buffer_add_char(buf,37);
                 bprint_ignored_flag(buf,ign_flag$0);
                 buffer_add_char(buf,63);
                 var _uP_=i$8 + 1 | 0;
                 if(_uO_ !== i$8){var i$8=_uP_;continue}
                 break}}
             var fmt$0=rest$23,ign_flag$0=0;
             continue}}
      fmtiter(fmt,0);
      return buffer_contents(buf)}
    function symm(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,symm(rest)];
         case 1:var rest$0=param[1];return [1,symm(rest$0)];
         case 2:var rest$1=param[1];return [2,symm(rest$1)];
         case 3:var rest$2=param[1];return [3,symm(rest$2)];
         case 4:var rest$3=param[1];return [4,symm(rest$3)];
         case 5:var rest$4=param[1];return [5,symm(rest$4)];
         case 6:var rest$5=param[1];return [6,symm(rest$5)];
         case 7:var rest$6=param[1];return [7,symm(rest$6)];
         case 8:var rest$7=param[2],ty=param[1];return [8,ty,symm(rest$7)];
         case 9:
          var rest$8=param[3],ty2=param[2],ty1=param[1];
          return [9,ty2,ty1,symm(rest$8)];
         case 10:var rest$9=param[1];return [10,symm(rest$9)];
         case 11:var rest$10=param[1];return [11,symm(rest$10)];
         case 12:var rest$11=param[1];return [12,symm(rest$11)];
         case 13:var rest$12=param[1];return [13,symm(rest$12)];
         default:var rest$13=param[1];return [14,symm(rest$13)]}}
    function trans(ty1,ty2)
     {var switch$0=0;
      if(typeof ty1 === "number")
       if(typeof ty2 === "number")
        return 0;
       else
        switch(ty2[0])
         {case 10:break;
          case 11:switch$0 = 1;break;
          case 12:switch$0 = 2;break;
          case 13:switch$0 = 3;break;
          case 14:switch$0 = 4;break;
          case 8:switch$0 = 5;break;
          case 9:switch$0 = 6;break;
          default:throw [0,Assert_failure,_ah_]}
      else
       switch(ty1[0])
        {case 0:
          var switch$1=0,_us_=ty1[1];
          if(typeof ty2 !== "number")
           switch(ty2[0])
            {case 0:var rest2=ty2[1];return [0,trans(_us_,rest2)];
             case 8:switch$0 = 5;switch$1 = 1;break;
             case 9:switch$0 = 6;switch$1 = 1;break;
             case 10:switch$1 = 1;break;
             case 11:switch$0 = 1;switch$1 = 1;break;
             case 12:switch$0 = 2;switch$1 = 1;break;
             case 13:switch$0 = 3;switch$1 = 1;break;
             case 14:switch$0 = 4;switch$1 = 1;break
             }
          if(! switch$1)switch$0 = 7;
          break;
         case 1:
          var switch$2=0,_ut_=ty1[1];
          if(typeof ty2 !== "number")
           switch(ty2[0])
            {case 1:var rest2$0=ty2[1];return [1,trans(_ut_,rest2$0)];
             case 8:switch$0 = 5;switch$2 = 1;break;
             case 9:switch$0 = 6;switch$2 = 1;break;
             case 10:switch$2 = 1;break;
             case 11:switch$0 = 1;switch$2 = 1;break;
             case 12:switch$0 = 2;switch$2 = 1;break;
             case 13:switch$0 = 3;switch$2 = 1;break;
             case 14:switch$0 = 4;switch$2 = 1;break
             }
          if(! switch$2)switch$0 = 7;
          break;
         case 2:
          var switch$3=0,_uu_=ty1[1];
          if(typeof ty2 === "number")
           switch$3 = 1;
          else
           switch(ty2[0])
            {case 2:var rest2$1=ty2[1];return [2,trans(_uu_,rest2$1)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$3 = 1}
          if(switch$3)switch$0 = 7;
          break;
         case 3:
          var switch$4=0,_uv_=ty1[1];
          if(typeof ty2 === "number")
           switch$4 = 1;
          else
           switch(ty2[0])
            {case 3:var rest2$2=ty2[1];return [3,trans(_uv_,rest2$2)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$4 = 1}
          if(switch$4)switch$0 = 7;
          break;
         case 4:
          var switch$5=0,_uw_=ty1[1];
          if(typeof ty2 === "number")
           switch$5 = 1;
          else
           switch(ty2[0])
            {case 4:var rest2$3=ty2[1];return [4,trans(_uw_,rest2$3)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$5 = 1}
          if(switch$5)switch$0 = 7;
          break;
         case 5:
          var switch$6=0,_ux_=ty1[1];
          if(typeof ty2 === "number")
           switch$6 = 1;
          else
           switch(ty2[0])
            {case 5:var rest2$4=ty2[1];return [5,trans(_ux_,rest2$4)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$6 = 1}
          if(switch$6)switch$0 = 7;
          break;
         case 6:
          var switch$7=0,_uy_=ty1[1];
          if(typeof ty2 === "number")
           switch$7 = 1;
          else
           switch(ty2[0])
            {case 6:var rest2$5=ty2[1];return [6,trans(_uy_,rest2$5)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$7 = 1}
          if(switch$7)switch$0 = 7;
          break;
         case 7:
          var switch$8=0,_uz_=ty1[1];
          if(typeof ty2 === "number")
           switch$8 = 1;
          else
           switch(ty2[0])
            {case 7:var rest2$6=ty2[1];return [7,trans(_uz_,rest2$6)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$8 = 1}
          if(switch$8)switch$0 = 7;
          break;
         case 8:
          var switch$9=0,_uA_=ty1[2],_uB_=ty1[1];
          if(typeof ty2 === "number")
           switch$9 = 1;
          else
           switch(ty2[0])
            {case 8:
              var rest2$7=ty2[2],ty2$0=ty2[1],_uC_=trans(_uA_,rest2$7);
              return [8,trans(_uB_,ty2$0),_uC_];
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$9 = 1}
          if(switch$9)throw [0,Assert_failure,_aq_];
          break;
         case 9:
          var switch$10=0,_uD_=ty1[3],_uE_=ty1[2],_uF_=ty1[1];
          if(typeof ty2 === "number")
           switch$10 = 1;
          else
           switch(ty2[0])
            {case 8:switch$0 = 5;break;
             case 9:
              var
               rest2$8=ty2[3],
               ty22=ty2[2],
               ty21=ty2[1],
               ty=trans(symm(_uE_),ty21),
               match=fmtty_rel_det(ty),
               f4=match[4],
               f2=match[2];
              caml_call1(f2,0);
              caml_call1(f4,0);
              return [9,_uF_,ty22,trans(_uD_,rest2$8)];
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$10 = 1}
          if(switch$10)throw [0,Assert_failure,_ar_];
          break;
         case 10:
          var _uG_=ty1[1];
          if(typeof ty2 !== "number" && 10 === ty2[0])
           {var rest2$9=ty2[1];return [10,trans(_uG_,rest2$9)]}
          throw [0,Assert_failure,_as_];
         case 11:
          var switch$11=0,_uH_=ty1[1];
          if(typeof ty2 === "number")
           switch$11 = 1;
          else
           switch(ty2[0])
            {case 10:break;
             case 11:var rest2$10=ty2[1];return [11,trans(_uH_,rest2$10)];
             default:switch$11 = 1}
          if(switch$11)throw [0,Assert_failure,_at_];
          break;
         case 12:
          var switch$12=0,_uI_=ty1[1];
          if(typeof ty2 === "number")
           switch$12 = 1;
          else
           switch(ty2[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:var rest2$11=ty2[1];return [12,trans(_uI_,rest2$11)];
             default:switch$12 = 1}
          if(switch$12)throw [0,Assert_failure,_au_];
          break;
         case 13:
          var switch$13=0,_uJ_=ty1[1];
          if(typeof ty2 === "number")
           switch$13 = 1;
          else
           switch(ty2[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:var rest2$12=ty2[1];return [13,trans(_uJ_,rest2$12)];
             default:switch$13 = 1}
          if(switch$13)throw [0,Assert_failure,_av_];
          break;
         default:
          var switch$14=0,_uK_=ty1[1];
          if(typeof ty2 === "number")
           switch$14 = 1;
          else
           switch(ty2[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:var rest2$13=ty2[1];return [14,trans(_uK_,rest2$13)];
             default:switch$14 = 1}
          if(switch$14)throw [0,Assert_failure,_aw_]}
      switch(switch$0)
       {case 0:throw [0,Assert_failure,_ak_];
        case 1:throw [0,Assert_failure,_al_];
        case 2:throw [0,Assert_failure,_am_];
        case 3:throw [0,Assert_failure,_an_];
        case 4:throw [0,Assert_failure,_ao_];
        case 5:throw [0,Assert_failure,_ai_];
        case 6:throw [0,Assert_failure,_aj_];
        default:throw [0,Assert_failure,_ap_]}}
    function fmtty_rel_det(param)
     {if(typeof param === "number")
       {var
         _t6_=function(param){return 0},
         _t7_=function(param){return 0},
         _t8_=function(param){return 0};
        return [0,function(param){return 0},_t8_,_t7_,_t6_]}
      else
       switch(param[0])
        {case 0:
          var
           rest=param[1],
           match=fmtty_rel_det(rest),
           de=match[4],
           ed=match[3],
           af=match[2],
           fa=match[1],
           _t9_=function(param){caml_call1(af,0);return 0};
          return [0,function(param){caml_call1(fa,0);return 0},_t9_,ed,de];
         case 1:
          var
           rest$0=param[1],
           match$0=fmtty_rel_det(rest$0),
           de$0=match$0[4],
           ed$0=match$0[3],
           af$0=match$0[2],
           fa$0=match$0[1],
           _t__=function(param){caml_call1(af$0,0);return 0};
          return [0,
                  function(param){caml_call1(fa$0,0);return 0},
                  _t__,
                  ed$0,
                  de$0];
         case 2:
          var
           rest$1=param[1],
           match$1=fmtty_rel_det(rest$1),
           de$1=match$1[4],
           ed$1=match$1[3],
           af$1=match$1[2],
           fa$1=match$1[1],
           _t$_=function(param){caml_call1(af$1,0);return 0};
          return [0,
                  function(param){caml_call1(fa$1,0);return 0},
                  _t$_,
                  ed$1,
                  de$1];
         case 3:
          var
           rest$2=param[1],
           match$2=fmtty_rel_det(rest$2),
           de$2=match$2[4],
           ed$2=match$2[3],
           af$2=match$2[2],
           fa$2=match$2[1],
           _ua_=function(param){caml_call1(af$2,0);return 0};
          return [0,
                  function(param){caml_call1(fa$2,0);return 0},
                  _ua_,
                  ed$2,
                  de$2];
         case 4:
          var
           rest$3=param[1],
           match$3=fmtty_rel_det(rest$3),
           de$3=match$3[4],
           ed$3=match$3[3],
           af$3=match$3[2],
           fa$3=match$3[1],
           _ub_=function(param){caml_call1(af$3,0);return 0};
          return [0,
                  function(param){caml_call1(fa$3,0);return 0},
                  _ub_,
                  ed$3,
                  de$3];
         case 5:
          var
           rest$4=param[1],
           match$4=fmtty_rel_det(rest$4),
           de$4=match$4[4],
           ed$4=match$4[3],
           af$4=match$4[2],
           fa$4=match$4[1],
           _uc_=function(param){caml_call1(af$4,0);return 0};
          return [0,
                  function(param){caml_call1(fa$4,0);return 0},
                  _uc_,
                  ed$4,
                  de$4];
         case 6:
          var
           rest$5=param[1],
           match$5=fmtty_rel_det(rest$5),
           de$5=match$5[4],
           ed$5=match$5[3],
           af$5=match$5[2],
           fa$5=match$5[1],
           _ud_=function(param){caml_call1(af$5,0);return 0};
          return [0,
                  function(param){caml_call1(fa$5,0);return 0},
                  _ud_,
                  ed$5,
                  de$5];
         case 7:
          var
           rest$6=param[1],
           match$6=fmtty_rel_det(rest$6),
           de$6=match$6[4],
           ed$6=match$6[3],
           af$6=match$6[2],
           fa$6=match$6[1],
           _ue_=function(param){caml_call1(af$6,0);return 0};
          return [0,
                  function(param){caml_call1(fa$6,0);return 0},
                  _ue_,
                  ed$6,
                  de$6];
         case 8:
          var
           rest$7=param[2],
           match$7=fmtty_rel_det(rest$7),
           de$7=match$7[4],
           ed$7=match$7[3],
           af$7=match$7[2],
           fa$7=match$7[1],
           _uf_=function(param){caml_call1(af$7,0);return 0};
          return [0,
                  function(param){caml_call1(fa$7,0);return 0},
                  _uf_,
                  ed$7,
                  de$7];
         case 9:
          var
           rest$8=param[3],
           ty2=param[2],
           ty1=param[1],
           match$8=fmtty_rel_det(rest$8),
           de$8=match$8[4],
           ed$8=match$8[3],
           af$8=match$8[2],
           fa$8=match$8[1],
           ty=trans(symm(ty1),ty2),
           match$9=fmtty_rel_det(ty),
           jd=match$9[4],
           dj=match$9[3],
           ga=match$9[2],
           ag=match$9[1],
           _ug_=function(param){caml_call1(jd,0);caml_call1(de$8,0);return 0},
           _uh_=function(param){caml_call1(ed$8,0);caml_call1(dj,0);return 0},
           _ui_=function(param){caml_call1(ga,0);caml_call1(af$8,0);return 0};
          return [0,
                  function(param)
                   {caml_call1(fa$8,0);caml_call1(ag,0);return 0},
                  _ui_,
                  _uh_,
                  _ug_];
         case 10:
          var
           rest$9=param[1],
           match$10=fmtty_rel_det(rest$9),
           de$9=match$10[4],
           ed$9=match$10[3],
           af$9=match$10[2],
           fa$9=match$10[1],
           _uj_=function(param){caml_call1(af$9,0);return 0};
          return [0,
                  function(param){caml_call1(fa$9,0);return 0},
                  _uj_,
                  ed$9,
                  de$9];
         case 11:
          var
           rest$10=param[1],
           match$11=fmtty_rel_det(rest$10),
           de$10=match$11[4],
           ed$10=match$11[3],
           af$10=match$11[2],
           fa$10=match$11[1],
           _uk_=function(param){caml_call1(af$10,0);return 0};
          return [0,
                  function(param){caml_call1(fa$10,0);return 0},
                  _uk_,
                  ed$10,
                  de$10];
         case 12:
          var
           rest$11=param[1],
           match$12=fmtty_rel_det(rest$11),
           de$11=match$12[4],
           ed$11=match$12[3],
           af$11=match$12[2],
           fa$11=match$12[1],
           _ul_=function(param){caml_call1(af$11,0);return 0};
          return [0,
                  function(param){caml_call1(fa$11,0);return 0},
                  _ul_,
                  ed$11,
                  de$11];
         case 13:
          var
           rest$12=param[1],
           match$13=fmtty_rel_det(rest$12),
           de$12=match$13[4],
           ed$12=match$13[3],
           af$12=match$13[2],
           fa$12=match$13[1],
           _um_=function(param){caml_call1(de$12,0);return 0},
           _un_=function(param){caml_call1(ed$12,0);return 0},
           _uo_=function(param){caml_call1(af$12,0);return 0};
          return [0,
                  function(param){caml_call1(fa$12,0);return 0},
                  _uo_,
                  _un_,
                  _um_];
         default:
          var
           rest$13=param[1],
           match$14=fmtty_rel_det(rest$13),
           de$13=match$14[4],
           ed$13=match$14[3],
           af$13=match$14[2],
           fa$13=match$14[1],
           _up_=function(param){caml_call1(de$13,0);return 0},
           _uq_=function(param){caml_call1(ed$13,0);return 0},
           _ur_=function(param){caml_call1(af$13,0);return 0};
          return [0,
                  function(param){caml_call1(fa$13,0);return 0},
                  _ur_,
                  _uq_,
                  _up_]}}
    function fmtty_of_precision_fmtty(prec,fmtty)
     {return typeof prec === "number"?prec?[2,fmtty]:fmtty:fmtty}
    function fmtty_of_padding_fmtty(pad,fmtty)
     {return typeof pad === "number"?fmtty:0 === pad[0]?fmtty:[2,fmtty]}
    function fmtty_of_custom(arity,fmtty)
     {if(arity)
       {var arity$0=arity[1];return [12,fmtty_of_custom(arity$0,fmtty)]}
      return fmtty}
    function fmtty_of_fmt(fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:var rest=fmtty$0[1];return [0,fmtty_of_fmt(rest)];
          case 1:var rest$0=fmtty$0[1];return [0,fmtty_of_fmt(rest$0)];
          case 2:
           var rest$1=fmtty$0[2],pad=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad,[1,fmtty_of_fmt(rest$1)]);
          case 3:
           var rest$2=fmtty$0[2],pad$0=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$0,[1,fmtty_of_fmt(rest$2)]);
          case 4:
           var
            rest$3=fmtty$0[4],
            prec=fmtty$0[3],
            pad$1=fmtty$0[2],
            ty_rest=fmtty_of_fmt(rest$3),
            prec_ty=fmtty_of_precision_fmtty(prec,[2,ty_rest]);
           return fmtty_of_padding_fmtty(pad$1,prec_ty);
          case 5:
           var
            rest$4=fmtty$0[4],
            prec$0=fmtty$0[3],
            pad$2=fmtty$0[2],
            ty_rest$0=fmtty_of_fmt(rest$4),
            prec_ty$0=fmtty_of_precision_fmtty(prec$0,[3,ty_rest$0]);
           return fmtty_of_padding_fmtty(pad$2,prec_ty$0);
          case 6:
           var
            rest$5=fmtty$0[4],
            prec$1=fmtty$0[3],
            pad$3=fmtty$0[2],
            ty_rest$1=fmtty_of_fmt(rest$5),
            prec_ty$1=fmtty_of_precision_fmtty(prec$1,[4,ty_rest$1]);
           return fmtty_of_padding_fmtty(pad$3,prec_ty$1);
          case 7:
           var
            rest$6=fmtty$0[4],
            prec$2=fmtty$0[3],
            pad$4=fmtty$0[2],
            ty_rest$2=fmtty_of_fmt(rest$6),
            prec_ty$2=fmtty_of_precision_fmtty(prec$2,[5,ty_rest$2]);
           return fmtty_of_padding_fmtty(pad$4,prec_ty$2);
          case 8:
           var
            rest$7=fmtty$0[4],
            prec$3=fmtty$0[3],
            pad$5=fmtty$0[2],
            ty_rest$3=fmtty_of_fmt(rest$7),
            prec_ty$3=fmtty_of_precision_fmtty(prec$3,[6,ty_rest$3]);
           return fmtty_of_padding_fmtty(pad$5,prec_ty$3);
          case 9:
           var rest$8=fmtty$0[2],pad$6=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$6,[7,fmtty_of_fmt(rest$8)]);
          case 10:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 11:var fmtty$2=fmtty$0[2],fmtty$0=fmtty$2;continue;
          case 12:var fmtty$3=fmtty$0[2],fmtty$0=fmtty$3;continue;
          case 13:
           var rest$9=fmtty$0[3],ty=fmtty$0[2];
           return [8,ty,fmtty_of_fmt(rest$9)];
          case 14:
           var rest$10=fmtty$0[3],ty$0=fmtty$0[2];
           return [9,ty$0,ty$0,fmtty_of_fmt(rest$10)];
          case 15:var rest$11=fmtty$0[1];return [10,fmtty_of_fmt(rest$11)];
          case 16:var rest$12=fmtty$0[1];return [11,fmtty_of_fmt(rest$12)];
          case 17:var fmtty$4=fmtty$0[2],fmtty$0=fmtty$4;continue;
          case 18:
           var
            rest$13=fmtty$0[2],
            fmting_gen=fmtty$0[1],
            _t4_=fmtty_of_fmt(rest$13);
           if(0 === fmting_gen[0])
            var match=fmting_gen[1],fmt=match[1],_t5_=fmtty_of_fmt(fmt);
           else
            var
             match$0=fmting_gen[1],
             fmt$0=match$0[1],
             _t5_=fmtty_of_fmt(fmt$0);
           return concat_fmtty(_t5_,_t4_);
          case 19:var rest$14=fmtty$0[1];return [13,fmtty_of_fmt(rest$14)];
          case 20:var rest$15=fmtty$0[3];return [1,fmtty_of_fmt(rest$15)];
          case 21:var rest$16=fmtty$0[2];return [2,fmtty_of_fmt(rest$16)];
          case 22:var rest$17=fmtty$0[1];return [0,fmtty_of_fmt(rest$17)];
          case 23:
           var rest$18=fmtty$0[2],ign=fmtty$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:return [14,fmtty_of_fmt(rest$18)];
              default:var fmtty$0=rest$18;continue}
           else
            switch(ign[0])
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:var fmtty$0=rest$18;continue;
              case 3:var fmtty$0=rest$18;continue;
              case 4:var fmtty$0=rest$18;continue;
              case 5:var fmtty$0=rest$18;continue;
              case 6:var fmtty$0=rest$18;continue;
              case 7:var fmtty$0=rest$18;continue;
              case 8:var fmtty$0=rest$18;continue;
              case 9:
               var fmtty$5=ign[2];
               return concat_fmtty(fmtty$5,fmtty_of_fmt(rest$18));
              case 10:var fmtty$0=rest$18;continue;
              default:var fmtty$0=rest$18;continue}
          default:
           var rest$19=fmtty$0[3],arity=fmtty$0[1];
           return fmtty_of_custom(arity,fmtty_of_fmt(rest$19))}}
    var
     Type_mismatch=
      [248,cst_CamlinternalFormat_Type_mi,caml_fresh_oo_id(0)];
    function type_padding(pad,fmtty)
     {if(typeof pad === "number")
       return [0,0,fmtty];
      else
       {if(0 === pad[0])
         {var w=pad[2],padty=pad[1];return [0,[0,padty,w],fmtty]}
        if(typeof fmtty !== "number" && 2 === fmtty[0])
         {var rest=fmtty[1],padty$0=pad[1];return [0,[1,padty$0],rest]}
        throw Type_mismatch}}
    function type_padprec(pad,prec,fmtty)
     {var match=type_padding(pad,fmtty);
      if(typeof prec === "number")
       {if(prec)
         {var _t3_=match[2];
          if(typeof _t3_ !== "number" && 2 === _t3_[0])
           {var rest=_t3_[1],pad$0=match[1];return [0,pad$0,1,rest]}
          throw Type_mismatch}
        var rest$0=match[2],pad$1=match[1];
        return [0,pad$1,0,rest$0]}
      var rest$1=match[2],pad$2=match[1],p=prec[1];
      return [0,pad$2,[0,p],rest$1]}
    function type_ignored_format_substituti(sub_fmtty,fmt,fmtty)
     {if(typeof sub_fmtty === "number")
       return [0,0,type_format_gen(fmt,fmtty)];
      else
       switch(sub_fmtty[0])
        {case 0:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest=fmtty[1],
             sub_fmtty_rest=sub_fmtty[1],
             match=
              type_ignored_format_substituti(sub_fmtty_rest,fmt,fmtty_rest),
             fmt$0=match[2],
             sub_fmtty_rest$0=match[1];
            return [0,[0,sub_fmtty_rest$0],fmt$0]}
          break;
         case 1:
          if(typeof fmtty !== "number" && 1 === fmtty[0])
           {var
             fmtty_rest$0=fmtty[1],
             sub_fmtty_rest$1=sub_fmtty[1],
             match$0=
              type_ignored_format_substituti
               (sub_fmtty_rest$1,fmt,fmtty_rest$0),
             fmt$1=match$0[2],
             sub_fmtty_rest$2=match$0[1];
            return [0,[1,sub_fmtty_rest$2],fmt$1]}
          break;
         case 2:
          if(typeof fmtty !== "number" && 2 === fmtty[0])
           {var
             fmtty_rest$1=fmtty[1],
             sub_fmtty_rest$3=sub_fmtty[1],
             match$1=
              type_ignored_format_substituti
               (sub_fmtty_rest$3,fmt,fmtty_rest$1),
             fmt$2=match$1[2],
             sub_fmtty_rest$4=match$1[1];
            return [0,[2,sub_fmtty_rest$4],fmt$2]}
          break;
         case 3:
          if(typeof fmtty !== "number" && 3 === fmtty[0])
           {var
             fmtty_rest$2=fmtty[1],
             sub_fmtty_rest$5=sub_fmtty[1],
             match$2=
              type_ignored_format_substituti
               (sub_fmtty_rest$5,fmt,fmtty_rest$2),
             fmt$3=match$2[2],
             sub_fmtty_rest$6=match$2[1];
            return [0,[3,sub_fmtty_rest$6],fmt$3]}
          break;
         case 4:
          if(typeof fmtty !== "number" && 4 === fmtty[0])
           {var
             fmtty_rest$3=fmtty[1],
             sub_fmtty_rest$7=sub_fmtty[1],
             match$3=
              type_ignored_format_substituti
               (sub_fmtty_rest$7,fmt,fmtty_rest$3),
             fmt$4=match$3[2],
             sub_fmtty_rest$8=match$3[1];
            return [0,[4,sub_fmtty_rest$8],fmt$4]}
          break;
         case 5:
          if(typeof fmtty !== "number" && 5 === fmtty[0])
           {var
             fmtty_rest$4=fmtty[1],
             sub_fmtty_rest$9=sub_fmtty[1],
             match$4=
              type_ignored_format_substituti
               (sub_fmtty_rest$9,fmt,fmtty_rest$4),
             fmt$5=match$4[2],
             sub_fmtty_rest$10=match$4[1];
            return [0,[5,sub_fmtty_rest$10],fmt$5]}
          break;
         case 6:
          if(typeof fmtty !== "number" && 6 === fmtty[0])
           {var
             fmtty_rest$5=fmtty[1],
             sub_fmtty_rest$11=sub_fmtty[1],
             match$5=
              type_ignored_format_substituti
               (sub_fmtty_rest$11,fmt,fmtty_rest$5),
             fmt$6=match$5[2],
             sub_fmtty_rest$12=match$5[1];
            return [0,[6,sub_fmtty_rest$12],fmt$6]}
          break;
         case 7:
          if(typeof fmtty !== "number" && 7 === fmtty[0])
           {var
             fmtty_rest$6=fmtty[1],
             sub_fmtty_rest$13=sub_fmtty[1],
             match$6=
              type_ignored_format_substituti
               (sub_fmtty_rest$13,fmt,fmtty_rest$6),
             fmt$7=match$6[2],
             sub_fmtty_rest$14=match$6[1];
            return [0,[7,sub_fmtty_rest$14],fmt$7]}
          break;
         case 8:
          if(typeof fmtty !== "number" && 8 === fmtty[0])
           {var
             fmtty_rest$7=fmtty[2],
             sub2_fmtty=fmtty[1],
             sub_fmtty_rest$15=sub_fmtty[2],
             sub2_fmtty$0=sub_fmtty[1];
            if(caml_notequal([0,sub2_fmtty$0],[0,sub2_fmtty]))
             throw Type_mismatch;
            var
             match$7=
              type_ignored_format_substituti
               (sub_fmtty_rest$15,fmt,fmtty_rest$7),
             fmt$8=match$7[2],
             sub_fmtty_rest$16=match$7[1];
            return [0,[8,sub2_fmtty,sub_fmtty_rest$16],fmt$8]}
          break;
         case 9:
          if(typeof fmtty !== "number" && 9 === fmtty[0])
           {var
             fmtty_rest$8=fmtty[3],
             sub2_fmtty$1=fmtty[2],
             sub1_fmtty=fmtty[1],
             sub_fmtty_rest$17=sub_fmtty[3],
             sub2_fmtty$2=sub_fmtty[2],
             sub1_fmtty$0=sub_fmtty[1],
             _t1_=[0,erase_rel(sub1_fmtty)];
            if(caml_notequal([0,erase_rel(sub1_fmtty$0)],_t1_))
             throw Type_mismatch;
            var _t2_=[0,erase_rel(sub2_fmtty$1)];
            if(caml_notequal([0,erase_rel(sub2_fmtty$2)],_t2_))
             throw Type_mismatch;
            var
             sub_fmtty$0=trans(symm(sub1_fmtty),sub2_fmtty$1),
             match$8=fmtty_rel_det(sub_fmtty$0),
             f4=match$8[4],
             f2=match$8[2];
            caml_call1(f2,0);
            caml_call1(f4,0);
            var
             match$9=
              type_ignored_format_substituti
               (erase_rel(sub_fmtty_rest$17),fmt,fmtty_rest$8),
             fmt$9=match$9[2],
             sub_fmtty_rest$18=match$9[1];
            return [0,
                    [9,sub1_fmtty,sub2_fmtty$1,symm(sub_fmtty_rest$18)],
                    fmt$9]}
          break;
         case 10:
          if(typeof fmtty !== "number" && 10 === fmtty[0])
           {var
             fmtty_rest$9=fmtty[1],
             sub_fmtty_rest$19=sub_fmtty[1],
             match$10=
              type_ignored_format_substituti
               (sub_fmtty_rest$19,fmt,fmtty_rest$9),
             fmt$10=match$10[2],
             sub_fmtty_rest$20=match$10[1];
            return [0,[10,sub_fmtty_rest$20],fmt$10]}
          break;
         case 11:
          if(typeof fmtty !== "number" && 11 === fmtty[0])
           {var
             fmtty_rest$10=fmtty[1],
             sub_fmtty_rest$21=sub_fmtty[1],
             match$11=
              type_ignored_format_substituti
               (sub_fmtty_rest$21,fmt,fmtty_rest$10),
             fmt$11=match$11[2],
             sub_fmtty_rest$22=match$11[1];
            return [0,[11,sub_fmtty_rest$22],fmt$11]}
          break;
         case 13:
          if(typeof fmtty !== "number" && 13 === fmtty[0])
           {var
             fmtty_rest$11=fmtty[1],
             sub_fmtty_rest$23=sub_fmtty[1],
             match$12=
              type_ignored_format_substituti
               (sub_fmtty_rest$23,fmt,fmtty_rest$11),
             fmt$12=match$12[2],
             sub_fmtty_rest$24=match$12[1];
            return [0,[13,sub_fmtty_rest$24],fmt$12]}
          break;
         case 14:
          if(typeof fmtty !== "number" && 14 === fmtty[0])
           {var
             fmtty_rest$12=fmtty[1],
             sub_fmtty_rest$25=sub_fmtty[1],
             match$13=
              type_ignored_format_substituti
               (sub_fmtty_rest$25,fmt,fmtty_rest$12),
             fmt$13=match$13[2],
             sub_fmtty_rest$26=match$13[1];
            return [0,[14,sub_fmtty_rest$26],fmt$13]}
          break
         }
      throw Type_mismatch}
    function type_format_gen(fmt,fmtty)
     {if(typeof fmt === "number")
       return [0,0,fmtty];
      else
       switch(fmt[0])
        {case 0:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest=fmtty[1],
             fmt_rest=fmt[1],
             match=type_format_gen(fmt_rest,fmtty_rest),
             fmtty$0=match[2],
             fmt$0=match[1];
            return [0,[0,fmt$0],fmtty$0]}
          break;
         case 1:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest$0=fmtty[1],
             fmt_rest$0=fmt[1],
             match$0=type_format_gen(fmt_rest$0,fmtty_rest$0),
             fmtty$1=match$0[2],
             fmt$1=match$0[1];
            return [0,[1,fmt$1],fmtty$1]}
          break;
         case 2:
          var
           fmt_rest$1=fmt[2],
           pad=fmt[1],
           match$1=type_padding(pad,fmtty),
           _tK_=match$1[2],
           _tJ_=match$1[1];
          if(typeof _tK_ !== "number" && 1 === _tK_[0])
           {var
             fmtty_rest$1=_tK_[1],
             match$2=type_format_gen(fmt_rest$1,fmtty_rest$1),
             fmtty$2=match$2[2],
             fmt$2=match$2[1];
            return [0,[2,_tJ_,fmt$2],fmtty$2]}
          throw Type_mismatch;
         case 3:
          var
           fmt_rest$2=fmt[2],
           pad$0=fmt[1],
           match$3=type_padding(pad$0,fmtty),
           _tM_=match$3[2],
           _tL_=match$3[1];
          if(typeof _tM_ !== "number" && 1 === _tM_[0])
           {var
             fmtty_rest$2=_tM_[1],
             match$4=type_format_gen(fmt_rest$2,fmtty_rest$2),
             fmtty$3=match$4[2],
             fmt$3=match$4[1];
            return [0,[3,_tL_,fmt$3],fmtty$3]}
          throw Type_mismatch;
         case 4:
          var
           fmt_rest$3=fmt[4],
           prec=fmt[3],
           pad$1=fmt[2],
           iconv=fmt[1],
           match$5=type_padprec(pad$1,prec,fmtty),
           _tO_=match$5[3],
           _tN_=match$5[1];
          if(typeof _tO_ !== "number" && 2 === _tO_[0])
           {var
             fmtty_rest$3=_tO_[1],
             prec$0=match$5[2],
             match$6=type_format_gen(fmt_rest$3,fmtty_rest$3),
             fmtty$4=match$6[2],
             fmt$4=match$6[1];
            return [0,[4,iconv,_tN_,prec$0,fmt$4],fmtty$4]}
          throw Type_mismatch;
         case 5:
          var
           fmt_rest$4=fmt[4],
           prec$1=fmt[3],
           pad$2=fmt[2],
           iconv$0=fmt[1],
           match$7=type_padprec(pad$2,prec$1,fmtty),
           _tQ_=match$7[3],
           _tP_=match$7[1];
          if(typeof _tQ_ !== "number" && 3 === _tQ_[0])
           {var
             fmtty_rest$4=_tQ_[1],
             prec$2=match$7[2],
             match$8=type_format_gen(fmt_rest$4,fmtty_rest$4),
             fmtty$5=match$8[2],
             fmt$5=match$8[1];
            return [0,[5,iconv$0,_tP_,prec$2,fmt$5],fmtty$5]}
          throw Type_mismatch;
         case 6:
          var
           fmt_rest$5=fmt[4],
           prec$3=fmt[3],
           pad$3=fmt[2],
           iconv$1=fmt[1],
           match$9=type_padprec(pad$3,prec$3,fmtty),
           _tS_=match$9[3],
           _tR_=match$9[1];
          if(typeof _tS_ !== "number" && 4 === _tS_[0])
           {var
             fmtty_rest$5=_tS_[1],
             prec$4=match$9[2],
             match$10=type_format_gen(fmt_rest$5,fmtty_rest$5),
             fmtty$6=match$10[2],
             fmt$6=match$10[1];
            return [0,[6,iconv$1,_tR_,prec$4,fmt$6],fmtty$6]}
          throw Type_mismatch;
         case 7:
          var
           fmt_rest$6=fmt[4],
           prec$5=fmt[3],
           pad$4=fmt[2],
           iconv$2=fmt[1],
           match$11=type_padprec(pad$4,prec$5,fmtty),
           _tU_=match$11[3],
           _tT_=match$11[1];
          if(typeof _tU_ !== "number" && 5 === _tU_[0])
           {var
             fmtty_rest$6=_tU_[1],
             prec$6=match$11[2],
             match$12=type_format_gen(fmt_rest$6,fmtty_rest$6),
             fmtty$7=match$12[2],
             fmt$7=match$12[1];
            return [0,[7,iconv$2,_tT_,prec$6,fmt$7],fmtty$7]}
          throw Type_mismatch;
         case 8:
          var
           fmt_rest$7=fmt[4],
           prec$7=fmt[3],
           pad$5=fmt[2],
           fconv=fmt[1],
           match$13=type_padprec(pad$5,prec$7,fmtty),
           _tW_=match$13[3],
           _tV_=match$13[1];
          if(typeof _tW_ !== "number" && 6 === _tW_[0])
           {var
             fmtty_rest$7=_tW_[1],
             prec$8=match$13[2],
             match$14=type_format_gen(fmt_rest$7,fmtty_rest$7),
             fmtty$8=match$14[2],
             fmt$8=match$14[1];
            return [0,[8,fconv,_tV_,prec$8,fmt$8],fmtty$8]}
          throw Type_mismatch;
         case 9:
          var
           fmt_rest$8=fmt[2],
           pad$6=fmt[1],
           match$15=type_padding(pad$6,fmtty),
           _tY_=match$15[2],
           _tX_=match$15[1];
          if(typeof _tY_ !== "number" && 7 === _tY_[0])
           {var
             fmtty_rest$8=_tY_[1],
             match$16=type_format_gen(fmt_rest$8,fmtty_rest$8),
             fmtty$9=match$16[2],
             fmt$9=match$16[1];
            return [0,[9,_tX_,fmt$9],fmtty$9]}
          throw Type_mismatch;
         case 10:
          var
           fmt_rest$9=fmt[1],
           match$17=type_format_gen(fmt_rest$9,fmtty),
           fmtty$10=match$17[2],
           fmt$10=match$17[1];
          return [0,[10,fmt$10],fmtty$10];
         case 11:
          var
           fmt_rest$10=fmt[2],
           str=fmt[1],
           match$18=type_format_gen(fmt_rest$10,fmtty),
           fmtty$11=match$18[2],
           fmt$11=match$18[1];
          return [0,[11,str,fmt$11],fmtty$11];
         case 12:
          var
           fmt_rest$11=fmt[2],
           chr=fmt[1],
           match$19=type_format_gen(fmt_rest$11,fmtty),
           fmtty$12=match$19[2],
           fmt$12=match$19[1];
          return [0,[12,chr,fmt$12],fmtty$12];
         case 13:
          if(typeof fmtty !== "number" && 8 === fmtty[0])
           {var
             fmtty_rest$9=fmtty[2],
             sub_fmtty=fmtty[1],
             fmt_rest$12=fmt[3],
             sub_fmtty$0=fmt[2],
             pad_opt=fmt[1];
            if(caml_notequal([0,sub_fmtty$0],[0,sub_fmtty]))
             throw Type_mismatch;
            var
             match$20=type_format_gen(fmt_rest$12,fmtty_rest$9),
             fmtty$13=match$20[2],
             fmt$13=match$20[1];
            return [0,[13,pad_opt,sub_fmtty,fmt$13],fmtty$13]}
          break;
         case 14:
          if(typeof fmtty !== "number" && 9 === fmtty[0])
           {var
             fmtty_rest$10=fmtty[3],
             sub_fmtty1=fmtty[1],
             fmt_rest$13=fmt[3],
             sub_fmtty$1=fmt[2],
             pad_opt$0=fmt[1],
             _tZ_=[0,erase_rel(sub_fmtty1)];
            if(caml_notequal([0,erase_rel(sub_fmtty$1)],_tZ_))
             throw Type_mismatch;
            var
             match$21=type_format_gen(fmt_rest$13,erase_rel(fmtty_rest$10)),
             fmtty$14=match$21[2],
             fmt$14=match$21[1];
            return [0,[14,pad_opt$0,sub_fmtty1,fmt$14],fmtty$14]}
          break;
         case 15:
          if(typeof fmtty !== "number" && 10 === fmtty[0])
           {var
             fmtty_rest$11=fmtty[1],
             fmt_rest$14=fmt[1],
             match$22=type_format_gen(fmt_rest$14,fmtty_rest$11),
             fmtty$15=match$22[2],
             fmt$15=match$22[1];
            return [0,[15,fmt$15],fmtty$15]}
          break;
         case 16:
          if(typeof fmtty !== "number" && 11 === fmtty[0])
           {var
             fmtty_rest$12=fmtty[1],
             fmt_rest$15=fmt[1],
             match$23=type_format_gen(fmt_rest$15,fmtty_rest$12),
             fmtty$16=match$23[2],
             fmt$16=match$23[1];
            return [0,[16,fmt$16],fmtty$16]}
          break;
         case 17:
          var
           fmt_rest$16=fmt[2],
           formatting_lit=fmt[1],
           match$24=type_format_gen(fmt_rest$16,fmtty),
           fmtty$17=match$24[2],
           fmt$17=match$24[1];
          return [0,[17,formatting_lit,fmt$17],fmtty$17];
         case 18:
          var fmt_rest$17=fmt[2],formatting_gen=fmt[1];
          if(0 === formatting_gen[0])
           {var
             match$28=formatting_gen[1],
             str$0=match$28[2],
             fmt1=match$28[1],
             match$29=type_format_gen(fmt1,fmtty),
             fmtty2=match$29[2],
             fmt2=match$29[1],
             match$30=type_format_gen(fmt_rest$17,fmtty2),
             fmtty3=match$30[2],
             fmt3=match$30[1];
            return [0,[18,[0,[0,fmt2,str$0]],fmt3],fmtty3]}
          var
           match$31=formatting_gen[1],
           str$1=match$31[2],
           fmt1$0=match$31[1],
           match$32=type_format_gen(fmt1$0,fmtty),
           fmtty2$0=match$32[2],
           fmt2$0=match$32[1],
           match$33=type_format_gen(fmt_rest$17,fmtty2$0),
           fmtty3$0=match$33[2],
           fmt3$0=match$33[1];
          return [0,[18,[1,[0,fmt2$0,str$1]],fmt3$0],fmtty3$0];
         case 19:
          if(typeof fmtty !== "number" && 13 === fmtty[0])
           {var
             fmtty_rest$13=fmtty[1],
             fmt_rest$18=fmt[1],
             match$25=type_format_gen(fmt_rest$18,fmtty_rest$13),
             fmtty$18=match$25[2],
             fmt$18=match$25[1];
            return [0,[19,fmt$18],fmtty$18]}
          break;
         case 20:
          if(typeof fmtty !== "number" && 1 === fmtty[0])
           {var
             fmtty_rest$14=fmtty[1],
             fmt_rest$19=fmt[3],
             char_set=fmt[2],
             width_opt=fmt[1],
             match$26=type_format_gen(fmt_rest$19,fmtty_rest$14),
             fmtty$19=match$26[2],
             fmt$19=match$26[1];
            return [0,[20,width_opt,char_set,fmt$19],fmtty$19]}
          break;
         case 21:
          if(typeof fmtty !== "number" && 2 === fmtty[0])
           {var
             fmtty_rest$15=fmtty[1],
             fmt_rest$20=fmt[2],
             counter=fmt[1],
             match$27=type_format_gen(fmt_rest$20,fmtty_rest$15),
             fmtty$20=match$27[2],
             fmt$20=match$27[1];
            return [0,[21,counter,fmt$20],fmtty$20]}
          break;
         case 23:
          var rest=fmt[2],ign=fmt[1];
          if(typeof ign === "number")
           switch(ign)
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:
              if(typeof fmtty !== "number" && 14 === fmtty[0])
               {var
                 fmtty_rest$16=fmtty[1],
                 match$34=type_format_gen(rest,fmtty_rest$16),
                 fmtty$21=match$34[2],
                 fmt$21=match$34[1];
                return [0,[23,2,fmt$21],fmtty$21]}
              throw Type_mismatch;
             default:return type_ignored_param_one(ign,rest,fmtty)}
          else
           switch(ign[0])
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:return type_ignored_param_one(ign,rest,fmtty);
             case 3:return type_ignored_param_one(ign,rest,fmtty);
             case 4:return type_ignored_param_one(ign,rest,fmtty);
             case 5:return type_ignored_param_one(ign,rest,fmtty);
             case 6:return type_ignored_param_one(ign,rest,fmtty);
             case 7:return type_ignored_param_one(ign,rest,fmtty);
             case 8:
              var sub_fmtty$2=ign[2],pad_opt$1=ign[1];
              return type_ignored_param_one
                      ([8,pad_opt$1,sub_fmtty$2],rest,fmtty);
             case 9:
              var
               sub_fmtty$3=ign[2],
               pad_opt$2=ign[1],
               _t0_=type_ignored_format_substituti(sub_fmtty$3,rest,fmtty),
               match$35=_t0_[2],
               fmtty$22=match$35[2],
               fmt$22=match$35[1],
               sub_fmtty$4=_t0_[1];
              return [0,[23,[9,pad_opt$2,sub_fmtty$4],fmt$22],fmtty$22];
             case 10:return type_ignored_param_one(ign,rest,fmtty);
             default:return type_ignored_param_one(ign,rest,fmtty)}
         }
      throw Type_mismatch}
    function type_ignored_param_one(ign,fmt,fmtty)
     {var match=type_format_gen(fmt,fmtty),fmtty$0=match[2],fmt$0=match[1];
      return [0,[23,ign,fmt$0],fmtty$0]}
    function type_format(fmt,fmtty)
     {var _tI_=type_format_gen(fmt,fmtty);
      if(typeof _tI_[2] === "number"){var fmt$0=_tI_[1];return fmt$0}
      throw Type_mismatch}
    function recast(fmt,fmtty){return type_format(fmt,erase_rel(symm(fmtty)))}
    function fix_padding(padty,width,str)
     {var
       len=caml_ml_string_length(str),
       padty$0=0 <= width?padty:0,
       width$0=abs(width);
      if(width$0 <= len)return str;
      var _tH_=2 === padty$0?48:32,res=make$0(width$0,_tH_);
      switch(padty$0)
       {case 0:blit$0(str,0,res,0,len);break;
        case 1:blit$0(str,0,res,width$0 - len | 0,len);break;
        default:
         var switch$0=0;
         if(0 < len)
          {var switch$1=0;
           if
            (43
             !==
             caml_string_get(str,0)
             &&
             45
             !==
             caml_string_get(str,0)
             &&
             32
             !==
             caml_string_get(str,0))
            {switch$0 = 1;switch$1 = 1}
           if(! switch$1)
            {caml_bytes_set(res,0,caml_string_get(str,0));
             blit$0(str,1,res,(width$0 - len | 0) + 1 | 0,len - 1 | 0)}}
         else
          switch$0 = 1;
         if(switch$0)
          {var switch$2=0;
           if(1 < len && 48 === caml_string_get(str,0))
            {var switch$3=0;
             if
              (120
               !==
               caml_string_get(str,1)
               &&
               88
               !==
               caml_string_get(str,1))
              {switch$2 = 1;switch$3 = 1}
             if(! switch$3)
              {caml_bytes_set(res,1,caml_string_get(str,1));
               blit$0(str,2,res,(width$0 - len | 0) + 2 | 0,len - 2 | 0)}}
           else
            switch$2 = 1;
           if(switch$2)blit$0(str,0,res,width$0 - len | 0,len)}}
      return caml_string_of_bytes(res)}
    function fix_int_precision(prec,str)
     {var
       prec$0=abs(prec),
       len=caml_ml_string_length(str),
       c=caml_string_get(str,0),
       switch$0=0;
      if(58 <= c)
       {if(71 <= c)
         {if(! (5 < c - 97 >>> 0))switch$0 = 1}
        else
         if(65 <= c)switch$0 = 1}
      else
       {var switch$1=0;
        if(32 !== c)
         if(43 <= c)
          switch(c - 43 | 0)
           {case 5:
             if(len < (prec$0 + 2 | 0) && 1 < len)
              {var switch$2=0;
               if
                (120
                 ===
                 caml_string_get(str,1)
                 ||
                 88
                 ===
                 caml_string_get(str,1))
                switch$2 = 1;
               if(switch$2)
                {var res$1=make$0(prec$0 + 2 | 0,48);
                 caml_bytes_set(res$1,1,caml_string_get(str,1));
                 blit$0(str,2,res$1,(prec$0 - len | 0) + 4 | 0,len - 2 | 0);
                 return caml_string_of_bytes(res$1)}}
             switch$0 = 1;
             switch$1 = 1;
             break;
            case 0:
            case 2:break;
            case 1:
            case 3:
            case 4:switch$1 = 1;break;
            default:switch$0 = 1;switch$1 = 1}
         else
          switch$1 = 1;
        if(! switch$1 && len < (prec$0 + 1 | 0))
         {var res$0=make$0(prec$0 + 1 | 0,48);
          caml_bytes_set(res$0,0,c);
          blit$0(str,1,res$0,(prec$0 - len | 0) + 2 | 0,len - 1 | 0);
          return caml_string_of_bytes(res$0)}}
      if(switch$0 && len < prec$0)
       {var res=make$0(prec$0,48);
        blit$0(str,0,res,prec$0 - len | 0,len);
        return caml_string_of_bytes(res)}
      return str}
    function string_to_caml_string(str)
     {var
       str$0=escaped$1(str),
       l=caml_ml_string_length(str$0),
       res=make$0(l + 2 | 0,34);
      caml_blit_string(str$0,0,res,1,l);
      return caml_string_of_bytes(res)}
    function format_of_fconv(fconv,prec)
     {var
       prec$0=abs(prec),
       symb=char_of_fconv(_ax_,fconv),
       buf=buffer_create(16);
      buffer_add_char(buf,37);
      bprint_fconv_flag(buf,fconv);
      buffer_add_char(buf,46);
      buffer_add_string(buf,caml_string_of_jsbytes("" + prec$0));
      buffer_add_char(buf,symb);
      return buffer_contents(buf)}
    function transform_int_alt(iconv,s)
     {if(13 <= iconv)
       {var n=[0,0],_tC_=caml_ml_string_length(s) - 1 | 0,_tB_=0;
        if(! (_tC_ < 0))
         {var i$0=_tB_;
          for(;;)
           {var match=caml_string_unsafe_get(s,i$0);
            if(! (9 < match - 48 >>> 0))n[1]++;
            var _tG_=i$0 + 1 | 0;
            if(_tC_ !== i$0){var i$0=_tG_;continue}
            break}}
        var
         digits=n[1],
         buf=
          caml_create_bytes
           (caml_ml_string_length(s) + ((digits - 1 | 0) / 3 | 0) | 0),
         pos=[0,0],
         put=function(c){caml_bytes_set(buf,pos[1],c);pos[1]++;return 0},
         left=[0,((digits - 1 | 0) % 3 | 0) + 1 | 0],
         _tE_=caml_ml_string_length(s) - 1 | 0,
         _tD_=0;
        if(! (_tE_ < 0))
         {var i=_tD_;
          for(;;)
           {var c=caml_string_unsafe_get(s,i);
            if(9 < c - 48 >>> 0)
             put(c);
            else
             {if(0 === left[1]){put(95);left[1] = 3}left[1] += -1;put(c)}
            var _tF_=i + 1 | 0;
            if(_tE_ !== i){var i=_tF_;continue}
            break}}
        return caml_string_of_bytes(buf)}
      return s}
    function convert_int(iconv,n)
     {switch(iconv)
       {case 1:var _tA_=cst_d$3;break;
        case 2:var _tA_=cst_d$4;break;
        case 4:var _tA_=cst_i$1;break;
        case 5:var _tA_=cst_i$2;break;
        case 6:var _tA_=cst_x;break;
        case 7:var _tA_=cst_x$0;break;
        case 8:var _tA_=cst_X$0;break;
        case 9:var _tA_=cst_X$1;break;
        case 10:var _tA_=cst_o;break;
        case 11:var _tA_=cst_o$0;break;
        case 0:
        case 13:var _tA_=cst_d$2;break;
        case 3:
        case 14:var _tA_=cst_i$0;break;
        default:var _tA_=cst_u}
      return transform_int_alt(iconv,caml_format_int(_tA_,n))}
    function convert_int32(iconv,n)
     {switch(iconv)
       {case 1:var _tz_=cst_ld$0;break;
        case 2:var _tz_=cst_ld$1;break;
        case 4:var _tz_=cst_li$1;break;
        case 5:var _tz_=cst_li$2;break;
        case 6:var _tz_=cst_lx;break;
        case 7:var _tz_=cst_lx$0;break;
        case 8:var _tz_=cst_lX;break;
        case 9:var _tz_=cst_lX$0;break;
        case 10:var _tz_=cst_lo;break;
        case 11:var _tz_=cst_lo$0;break;
        case 0:
        case 13:var _tz_=cst_ld;break;
        case 3:
        case 14:var _tz_=cst_li$0;break;
        default:var _tz_=cst_lu}
      return transform_int_alt(iconv,caml_format_int(_tz_,n))}
    function convert_nativeint(iconv,n)
     {switch(iconv)
       {case 1:var _ty_=cst_nd$0;break;
        case 2:var _ty_=cst_nd$1;break;
        case 4:var _ty_=cst_ni$1;break;
        case 5:var _ty_=cst_ni$2;break;
        case 6:var _ty_=cst_nx;break;
        case 7:var _ty_=cst_nx$0;break;
        case 8:var _ty_=cst_nX;break;
        case 9:var _ty_=cst_nX$0;break;
        case 10:var _ty_=cst_no;break;
        case 11:var _ty_=cst_no$0;break;
        case 0:
        case 13:var _ty_=cst_nd;break;
        case 3:
        case 14:var _ty_=cst_ni$0;break;
        default:var _ty_=cst_nu}
      return transform_int_alt(iconv,caml_format_int(_ty_,n))}
    function convert_int64(iconv,n)
     {switch(iconv)
       {case 1:var _tx_=cst_Ld$0;break;
        case 2:var _tx_=cst_Ld$1;break;
        case 4:var _tx_=cst_Li$1;break;
        case 5:var _tx_=cst_Li$2;break;
        case 6:var _tx_=cst_Lx;break;
        case 7:var _tx_=cst_Lx$0;break;
        case 8:var _tx_=cst_LX;break;
        case 9:var _tx_=cst_LX$0;break;
        case 10:var _tx_=cst_Lo;break;
        case 11:var _tx_=cst_Lo$0;break;
        case 0:
        case 13:var _tx_=cst_Ld;break;
        case 3:
        case 14:var _tx_=cst_Li$0;break;
        default:var _tx_=cst_Lu}
      return transform_int_alt(iconv,caml_int64_format(_tx_,n))}
    function convert_float(fconv,prec,x)
     {function hex(param)
       {switch(fconv[1])
         {case 0:var sign=45;break;
          case 1:var sign=43;break;
          default:var sign=32}
        return runtime.caml_hexstring_of_float(x,prec,sign)}
      function caml_special_val(str)
       {var match=runtime.caml_classify_float(x);
        return 3 === match
                ?x < 0.?cst_neg_infinity:cst_infinity
                :4 <= match?cst_nan:str}
      switch(fconv[2])
       {case 5:
         var
          str=caml_format_float(format_of_fconv(fconv,prec),x),
          len=caml_ml_string_length(str),
          i=0;
         for(;;)
          {if(i === len)
            var _tv_=0;
           else
            {var match=caml_string_get(str,i),_tu_=match - 46 | 0,switch$0=0;
             if(23 < _tu_ >>> 0)
              {if(55 === _tu_)switch$0 = 1}
             else
              if(21 < _tu_ - 1 >>> 0)switch$0 = 1;
             if(! switch$0){var i$0=i + 1 | 0,i=i$0;continue}
             var _tv_=1}
           var _tw_=_tv_?str:cat(str,cst$29);
           return caml_special_val(_tw_)}
        case 6:return hex(0);
        case 7:return uppercase_ascii$1(hex(0));
        case 8:return caml_special_val(hex(0));
        default:return caml_format_float(format_of_fconv(fconv,prec),x)}}
    function string_of_fmtty(fmtty)
     {var buf=buffer_create(16);
      bprint_fmtty(buf,fmtty);
      return buffer_contents(buf)}
    function make_printf$0(counter,k,acc,fmt)
     {var k$0=k,acc$0=acc,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,acc$0);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest)};
          case 1:
           var rest$0=fmt$0[1];
           return function(c)
            {var
              str=escaped(c),
              l=caml_ml_string_length(str),
              res=make$0(l + 2 | 0,39);
             caml_blit_string(str,0,res,1,l);
             var new_acc=[4,acc$0,caml_string_of_bytes(res)];
             return make_printf(k$0,new_acc,rest$0)};
          case 2:
           var rest$1=fmt$0[2],pad=fmt$0[1];
           return make_padding(k$0,acc$0,rest$1,pad,function(str){return str});
          case 3:
           var rest$2=fmt$0[2],pad$0=fmt$0[1];
           return make_padding(k$0,acc$0,rest$2,pad$0,string_to_caml_string);
          case 4:
           var rest$3=fmt$0[4],prec=fmt$0[3],pad$1=fmt$0[2],iconv=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$3,pad$1,prec,convert_int,iconv);
          case 5:
           var
            rest$4=fmt$0[4],
            prec$0=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$0=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$4,pad$2,prec$0,convert_int32,iconv$0);
          case 6:
           var
            rest$5=fmt$0[4],
            prec$1=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$1=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$5,pad$3,prec$1,convert_nativeint,iconv$1);
          case 7:
           var
            rest$6=fmt$0[4],
            prec$2=fmt$0[3],
            pad$4=fmt$0[2],
            iconv$2=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$6,pad$4,prec$2,convert_int64,iconv$2);
          case 8:
           var rest$7=fmt$0[4],prec$3=fmt$0[3],pad$5=fmt$0[2],fconv=fmt$0[1];
           if(typeof pad$5 === "number")
            {if(typeof prec$3 === "number")
              return prec$3
                      ?function(p,x)
                        {var str=convert_float(fconv,p,x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)}
                      :function(x)
                        {var
                          str=
                           convert_float(fconv,default_float_precision(fconv),x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)};
             var p=prec$3[1];
             return function(x)
              {var str=convert_float(fconv,p,x);
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
           else
            {if(0 === pad$5[0])
              {var _tr_=pad$5[2],_ts_=pad$5[1];
               if(typeof prec$3 === "number")
                return prec$3
                        ?function(p,x)
                          {var str=fix_padding(_ts_,_tr_,convert_float(fconv,p,x));
                           return make_printf(k$0,[4,acc$0,str],rest$7)}
                        :function(x)
                          {var
                            str=convert_float(fconv,default_float_precision(fconv),x),
                            str$0=fix_padding(_ts_,_tr_,str);
                           return make_printf(k$0,[4,acc$0,str$0],rest$7)};
               var p$0=prec$3[1];
               return function(x)
                {var str=fix_padding(_ts_,_tr_,convert_float(fconv,p$0,x));
                 return make_printf(k$0,[4,acc$0,str],rest$7)}}
             var _tt_=pad$5[1];
             if(typeof prec$3 === "number")
              return prec$3
                      ?function(w,p,x)
                        {var str=fix_padding(_tt_,w,convert_float(fconv,p,x));
                         return make_printf(k$0,[4,acc$0,str],rest$7)}
                      :function(w,x)
                        {var
                          str=convert_float(fconv,default_float_precision(fconv),x),
                          str$0=fix_padding(_tt_,w,str);
                         return make_printf(k$0,[4,acc$0,str$0],rest$7)};
             var p$1=prec$3[1];
             return function(w,x)
              {var str=fix_padding(_tt_,w,convert_float(fconv,p$1,x));
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
          case 9:
           var rest$8=fmt$0[2],pad$6=fmt$0[1];
           return make_padding(k$0,acc$0,rest$8,pad$6,string_of_bool);
          case 10:
           var fmt$1=fmt$0[1],acc$1=[7,acc$0],acc$0=acc$1,fmt$0=fmt$1;
           continue;
          case 11:
           var
            fmt$2=fmt$0[2],
            str=fmt$0[1],
            acc$2=[2,acc$0,str],
            acc$0=acc$2,
            fmt$0=fmt$2;
           continue;
          case 12:
           var
            fmt$3=fmt$0[2],
            chr=fmt$0[1],
            acc$3=[3,acc$0,chr],
            acc$0=acc$3,
            fmt$0=fmt$3;
           continue;
          case 13:
           var
            rest$9=fmt$0[3],
            sub_fmtty=fmt$0[2],
            ty=string_of_fmtty(sub_fmtty);
           return function(str){return make_printf(k$0,[4,acc$0,ty],rest$9)};
          case 14:
           var rest$10=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_printf
                     (k$0,acc$0,concat_fmt(recast(fmt,fmtty),rest$10))};
          case 15:
           var rest$11=fmt$0[1];
           return function(f,x)
            {return make_printf
                     (k$0,
                      [6,acc$0,function(o){return caml_call2(f,o,x)}],
                      rest$11)};
          case 16:
           var rest$12=fmt$0[1];
           return function(f){return make_printf(k$0,[6,acc$0,f],rest$12)};
          case 17:
           var
            fmt$4=fmt$0[2],
            fmting_lit=fmt$0[1],
            acc$4=[0,acc$0,fmting_lit],
            acc$0=acc$4,
            fmt$0=fmt$4;
           continue;
          case 18:
           var _tp_=fmt$0[1];
           if(0 === _tp_[0])
            {var
              rest$13=fmt$0[2],
              match=_tp_[1],
              fmt$5=match[1],
              k$3=
               function(acc,k,rest)
                {function k$0(kacc)
                  {return make_printf(k,[1,acc,[0,kacc]],rest)}
                 return k$0},
              k$1=k$3(acc$0,k$0,rest$13),
              k$0=k$1,
              acc$0=0,
              fmt$0=fmt$5;
             continue}
           var
            rest$14=fmt$0[2],
            match$0=_tp_[1],
            fmt$6=match$0[1],
            k$4=
             function(acc,k,rest)
              {function k$0(kacc){return make_printf(k,[1,acc,[1,kacc]],rest)}
               return k$0},
            k$2=k$4(acc$0,k$0,rest$14),
            k$0=k$2,
            acc$0=0,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_ay_];
          case 20:
           var rest$15=fmt$0[3],new_acc=[8,acc$0,cst_Printf_bad_conversion];
           return function(param){return make_printf(k$0,new_acc,rest$15)};
          case 21:
           var rest$16=fmt$0[2];
           return function(n)
            {var new_acc=[4,acc$0,caml_format_int(cst_u$0,n)];
             return make_printf(k$0,new_acc,rest$16)};
          case 22:
           var rest$17=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest$17)};
          case 23:
           var rest$18=fmt$0[2],ign=fmt$0[1];
           if(counter < 50)
            {var counter$1=counter + 1 | 0;
             return make_ignored_param$0(counter$1,k$0,acc$0,ign,rest$18)}
           return caml_trampoline_return
                   (make_ignored_param$0,[0,k$0,acc$0,ign,rest$18]);
          default:
           var
            rest$19=fmt$0[3],
            f=fmt$0[2],
            arity=fmt$0[1],
            _tq_=caml_call1(f,0);
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return make_custom$0(counter$0,k$0,acc$0,rest$19,arity,_tq_)}
           return caml_trampoline_return
                   (make_custom$0,[0,k$0,acc$0,rest$19,arity,_tq_])}}
    function make_ignored_param$0(counter,k,acc,ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return make_invalid_arg(counter$0,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return make_invalid_arg(counter$1,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:throw [0,Assert_failure,_az_];
         default:
          if(counter < 50)
           {var counter$2=counter + 1 | 0;
            return make_invalid_arg(counter$2,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(ign[0])
        {case 0:
          if(counter < 50)
           {var counter$3=counter + 1 | 0;
            return make_invalid_arg(counter$3,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$4=counter + 1 | 0;
            return make_invalid_arg(counter$4,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:
          if(counter < 50)
           {var counter$5=counter + 1 | 0;
            return make_invalid_arg(counter$5,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 3:
          if(counter < 50)
           {var counter$6=counter + 1 | 0;
            return make_invalid_arg(counter$6,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 4:
          if(counter < 50)
           {var counter$7=counter + 1 | 0;
            return make_invalid_arg(counter$7,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 5:
          if(counter < 50)
           {var counter$8=counter + 1 | 0;
            return make_invalid_arg(counter$8,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 6:
          if(counter < 50)
           {var counter$9=counter + 1 | 0;
            return make_invalid_arg(counter$9,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 7:
          if(counter < 50)
           {var counter$10=counter + 1 | 0;
            return make_invalid_arg(counter$10,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 8:
          if(counter < 50)
           {var counter$11=counter + 1 | 0;
            return make_invalid_arg(counter$11,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 9:
          var fmtty=ign[2];
          if(counter < 50)
           {var counter$14=counter + 1 | 0;
            return make_from_fmtty$0(counter$14,k,acc,fmtty,fmt)}
          return caml_trampoline_return(make_from_fmtty$0,[0,k,acc,fmtty,fmt]);
         case 10:
          if(counter < 50)
           {var counter$12=counter + 1 | 0;
            return make_invalid_arg(counter$12,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         default:
          if(counter < 50)
           {var counter$13=counter + 1 | 0;
            return make_invalid_arg(counter$13,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}}
    function make_from_fmtty$0(counter,k,acc,fmtty,fmt)
     {if(typeof fmtty === "number")
       {if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return make_invalid_arg(counter$0,k,acc,fmt)}
        return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(fmtty[0])
        {case 0:
          var rest=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest,fmt)};
         case 1:
          var rest$0=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$0,fmt)};
         case 2:
          var rest$1=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$1,fmt)};
         case 3:
          var rest$2=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$2,fmt)};
         case 4:
          var rest$3=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$3,fmt)};
         case 5:
          var rest$4=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$4,fmt)};
         case 6:
          var rest$5=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$5,fmt)};
         case 7:
          var rest$6=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$6,fmt)};
         case 8:
          var rest$7=fmtty[2];
          return function(param){return make_from_fmtty(k,acc,rest$7,fmt)};
         case 9:
          var
           rest$8=fmtty[3],
           ty2=fmtty[2],
           ty1=fmtty[1],
           ty=trans(symm(ty1),ty2);
          return function(param)
           {return make_from_fmtty(k,acc,concat_fmtty(ty,rest$8),fmt)};
         case 10:
          var rest$9=fmtty[1];
          return function(param,_to_)
           {return make_from_fmtty(k,acc,rest$9,fmt)};
         case 11:
          var rest$10=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$10,fmt)};
         case 12:
          var rest$11=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$11,fmt)};
         case 13:throw [0,Assert_failure,_aA_];
         default:throw [0,Assert_failure,_aB_]}}
    function make_invalid_arg(counter,k,acc,fmt)
     {var _tn_=[8,acc,cst_Printf_bad_conversion$0];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_tn_,fmt)}
      return caml_trampoline_return(make_printf$0,[0,k,_tn_,fmt])}
    function make_custom$0(counter,k,acc,rest,arity,f)
     {if(arity)
       {var arity$0=arity[1];
        return function(x)
         {return make_custom(k,acc,rest,arity$0,caml_call1(f,x))}}
      var _tm_=[4,acc,f];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_tm_,rest)}
      return caml_trampoline_return(make_printf$0,[0,k,_tm_,rest])}
    function make_printf(k,acc,fmt)
     {return caml_trampoline(make_printf$0(0,k,acc,fmt))}
    function make_ignored_param(k,acc,ign,fmt)
     {return caml_trampoline(make_ignored_param$0(0,k,acc,ign,fmt))}
    function make_from_fmtty(k,acc,fmtty,fmt)
     {return caml_trampoline(make_from_fmtty$0(0,k,acc,fmtty,fmt))}
    function make_custom(k,acc,rest,arity,f)
     {return caml_trampoline(make_custom$0(0,k,acc,rest,arity,f))}
    function make_padding(k,acc,fmt,pad,trans)
     {if(typeof pad === "number")
       return function(x)
        {var new_acc=[4,acc,caml_call1(trans,x)];
         return make_printf(k,new_acc,fmt)};
      else
       {if(0 === pad[0])
         {var width=pad[2],padty=pad[1];
          return function(x)
           {var new_acc=[4,acc,fix_padding(padty,width,caml_call1(trans,x))];
            return make_printf(k,new_acc,fmt)}}
        var padty$0=pad[1];
        return function(w,x)
         {var new_acc=[4,acc,fix_padding(padty$0,w,caml_call1(trans,x))];
          return make_printf(k,new_acc,fmt)}}}
    function make_int_padding_precision(k,acc,fmt,pad,prec,trans,iconv)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         return prec
                 ?function(p,x)
                   {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(x)
                   {var str=caml_call2(trans,iconv,x);
                    return make_printf(k,[4,acc,str],fmt)};
        var p=prec[1];
        return function(x)
         {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
          return make_printf(k,[4,acc,str],fmt)}}
      else
       {if(0 === pad[0])
         {var _tj_=pad[2],_tk_=pad[1];
          if(typeof prec === "number")
           return prec
                   ?function(p,x)
                     {var
                       str=
                        fix_padding
                         (_tk_,_tj_,fix_int_precision(p,caml_call2(trans,iconv,x)));
                      return make_printf(k,[4,acc,str],fmt)}
                   :function(x)
                     {var str=fix_padding(_tk_,_tj_,caml_call2(trans,iconv,x));
                      return make_printf(k,[4,acc,str],fmt)};
          var p$0=prec[1];
          return function(x)
           {var
             str=
              fix_padding
               (_tk_,_tj_,fix_int_precision(p$0,caml_call2(trans,iconv,x)));
            return make_printf(k,[4,acc,str],fmt)}}
        var _tl_=pad[1];
        if(typeof prec === "number")
         return prec
                 ?function(w,p,x)
                   {var
                     str=
                      fix_padding
                       (_tl_,w,fix_int_precision(p,caml_call2(trans,iconv,x)));
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(w,x)
                   {var str=fix_padding(_tl_,w,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)};
        var p$1=prec[1];
        return function(w,x)
         {var
           str=
            fix_padding
             (_tl_,w,fix_int_precision(p$1,caml_call2(trans,iconv,x)));
          return make_printf(k,[4,acc,str],fmt)}}}
    function make_iprintf$0(counter,k,o,fmt)
     {var k$0=k,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,o);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1],_sA_=make_iprintf(k$0,o,rest);
           return function(_ti_){return _sA_};
          case 1:
           var rest$0=fmt$0[1],_sB_=make_iprintf(k$0,o,rest$0);
           return function(_th_){return _sB_};
          case 2:
           var _sC_=fmt$0[1];
           if(typeof _sC_ === "number")
            {var rest$1=fmt$0[2],_sD_=make_iprintf(k$0,o,rest$1);
             return function(_td_){return _sD_}}
           else
            {if(0 === _sC_[0])
              {var rest$2=fmt$0[2],_sE_=make_iprintf(k$0,o,rest$2);
               return function(_tg_){return _sE_}}
             var
              rest$3=fmt$0[2],
              _sF_=make_iprintf(k$0,o,rest$3),
              _sG_=function(_tf_){return _sF_};
             return function(_te_){return _sG_}}
          case 3:
           var _sH_=fmt$0[1];
           if(typeof _sH_ === "number")
            {var rest$4=fmt$0[2],_sI_=make_iprintf(k$0,o,rest$4);
             return function(_s$_){return _sI_}}
           else
            {if(0 === _sH_[0])
              {var rest$5=fmt$0[2],_sJ_=make_iprintf(k$0,o,rest$5);
               return function(_tc_){return _sJ_}}
             var
              rest$6=fmt$0[2],
              _sK_=make_iprintf(k$0,o,rest$6),
              _sL_=function(_tb_){return _sK_};
             return function(_ta_){return _sL_}}
          case 4:
           var rest$7=fmt$0[4],prec=fmt$0[3],pad=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$7,pad,prec);
          case 5:
           var rest$8=fmt$0[4],prec$0=fmt$0[3],pad$0=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$8,pad$0,prec$0);
          case 6:
           var rest$9=fmt$0[4],prec$1=fmt$0[3],pad$1=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$9,pad$1,prec$1);
          case 7:
           var rest$10=fmt$0[4],prec$2=fmt$0[3],pad$2=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$10,pad$2,prec$2);
          case 8:
           var rest$11=fmt$0[4],prec$3=fmt$0[3],pad$3=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$11,pad$3,prec$3);
          case 9:
           var _sM_=fmt$0[1];
           if(typeof _sM_ === "number")
            {var rest$12=fmt$0[2],_sN_=make_iprintf(k$0,o,rest$12);
             return function(_s7_){return _sN_}}
           else
            {if(0 === _sM_[0])
              {var rest$13=fmt$0[2],_sO_=make_iprintf(k$0,o,rest$13);
               return function(_s__){return _sO_}}
             var
              rest$14=fmt$0[2],
              _sP_=make_iprintf(k$0,o,rest$14),
              _sQ_=function(_s9_){return _sP_};
             return function(_s8_){return _sQ_}}
          case 10:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 11:var fmt$2=fmt$0[2],fmt$0=fmt$2;continue;
          case 12:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 13:
           var rest$15=fmt$0[3],_sR_=make_iprintf(k$0,o,rest$15);
           return function(_s6_){return _sR_};
          case 14:
           var rest$16=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_iprintf(k$0,o,concat_fmt(recast(fmt,fmtty),rest$16))};
          case 15:
           var
            rest$17=fmt$0[1],
            _sS_=make_iprintf(k$0,o,rest$17),
            _sT_=function(_s5_){return _sS_};
           return function(_s4_){return _sT_};
          case 16:
           var rest$18=fmt$0[1],_sU_=make_iprintf(k$0,o,rest$18);
           return function(_s3_){return _sU_};
          case 17:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 18:
           var _sV_=fmt$0[1];
           if(0 === _sV_[0])
            {var
              rest$19=fmt$0[2],
              match=_sV_[1],
              fmt$5=match[1],
              k$3=
               function(k,rest)
                {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
              k$1=k$3(k$0,rest$19),
              k$0=k$1,
              fmt$0=fmt$5;
             continue}
           var
            rest$20=fmt$0[2],
            match$0=_sV_[1],
            fmt$6=match$0[1],
            k$4=
             function(k,rest)
              {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
            k$2=k$4(k$0,rest$20),
            k$0=k$2,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_aC_];
          case 20:
           var rest$21=fmt$0[3],_sW_=make_iprintf(k$0,o,rest$21);
           return function(_s2_){return _sW_};
          case 21:
           var rest$22=fmt$0[2],_sX_=make_iprintf(k$0,o,rest$22);
           return function(_s1_){return _sX_};
          case 22:
           var rest$23=fmt$0[1],_sY_=make_iprintf(k$0,o,rest$23);
           return function(_s0_){return _sY_};
          case 23:
           var rest$24=fmt$0[2],ign=fmt$0[1],_sZ_=0;
           return make_ignored_param
                   (function(param){return caml_call1(k$0,o)},_sZ_,ign,rest$24);
          default:
           var rest$25=fmt$0[3],arity=fmt$0[1];
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return fn_of_custom_arity$0(counter$0,k$0,o,rest$25,arity)}
           return caml_trampoline_return
                   (fn_of_custom_arity$0,[0,k$0,o,rest$25,arity])}}
    function fn_of_custom_arity$0(counter,k,o,fmt,param)
     {if(param)
       {var arity=param[1],_sy_=fn_of_custom_arity(k,o,fmt,arity);
        return function(_sz_){return _sy_}}
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_iprintf$0(counter$0,k,o,fmt)}
      return caml_trampoline_return(make_iprintf$0,[0,k,o,fmt])}
    function make_iprintf(k,o,fmt)
     {return caml_trampoline(make_iprintf$0(0,k,o,fmt))}
    function fn_of_custom_arity(k,o,fmt,param)
     {return caml_trampoline(fn_of_custom_arity$0(0,k,o,fmt,param))}
    function fn_of_padding_precision(k,o,fmt,pad,prec)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(prec)
           {var _r6_=make_iprintf(k,o,fmt),_r7_=function(_sm_){return _r6_};
            return function(_sl_){return _r7_}}
          var _r8_=make_iprintf(k,o,fmt);
          return function(_sk_){return _r8_}}
        var _r9_=make_iprintf(k,o,fmt);
        return function(_sj_){return _r9_}}
      else
       {if(0 === pad[0])
         {if(typeof prec === "number")
           {if(prec)
             {var _r__=make_iprintf(k,o,fmt),_r$_=function(_sx_){return _r__};
              return function(_sw_){return _r$_}}
            var _sa_=make_iprintf(k,o,fmt);
            return function(_sv_){return _sa_}}
          var _sb_=make_iprintf(k,o,fmt);
          return function(_su_){return _sb_}}
        if(typeof prec === "number")
         {if(prec)
           {var
             _sc_=make_iprintf(k,o,fmt),
             _sd_=function(_st_){return _sc_},
             _se_=function(_ss_){return _sd_};
            return function(_sr_){return _se_}}
          var _sf_=make_iprintf(k,o,fmt),_sg_=function(_sq_){return _sf_};
          return function(_sp_){return _sg_}}
        var _sh_=make_iprintf(k,o,fmt),_si_=function(_so_){return _sh_};
        return function(_sn_){return _si_}}}
    function output_acc(o,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           output_acc(o,p);
           return output_string(o,s);
          case 1:
           var _r4_=acc$0[2],_r5_=acc$0[1];
           if(0 === _r4_[0])
            {var acc$1=_r4_[1];
             output_acc(o,_r5_);
             output_string(o,cst$30);
             var acc$0=acc$1;
             continue}
           var acc$2=_r4_[1];
           output_acc(o,_r5_);
           output_string(o,cst$31);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           output_acc(o,p$2);
           return caml_call1(f,o);
          case 7:var p$3=acc$0[1];output_acc(o,p$3);return caml_ml_flush(o);
          case 8:
           var msg=acc$0[2],p$4=acc$0[1];
           output_acc(o,p$4);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           output_acc(o,p$0);
           return output_string(o,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];
           output_acc(o,p$1);
           return caml_ml_output_char(o,c)}}
    function bufput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           bufput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _r2_=acc$0[2],_r3_=acc$0[1];
           if(0 === _r2_[0])
            {var acc$1=_r2_[1];
             bufput_acc(b,_r3_);
             add_string(b,cst$32);
             var acc$0=acc$1;
             continue}
           var acc$2=_r2_[1];
           bufput_acc(b,_r3_);
           add_string(b,cst$33);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           bufput_acc(b,p$2);
           return caml_call1(f,b);
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           bufput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           bufput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];bufput_acc(b,p$1);return add_char(b,c)}}
    function strput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           strput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _r0_=acc$0[2],_r1_=acc$0[1];
           if(0 === _r0_[0])
            {var acc$1=_r0_[1];
             strput_acc(b,_r1_);
             add_string(b,cst$34);
             var acc$0=acc$1;
             continue}
           var acc$2=_r0_[1];
           strput_acc(b,_r1_);
           add_string(b,cst$35);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           strput_acc(b,p$2);
           return add_string(b,caml_call1(f,0));
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           strput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           strput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];strput_acc(b,p$1);return add_char(b,c)}}
    function failwith_message(param)
     {var fmt=param[1],buf=create$2(256);
      function k(acc){strput_acc(buf,acc);return failwith(contents(buf))}
      return make_printf(k,0,fmt)}
    function open_box_of_string(str)
     {if(caml_string_equal(str,cst$36))return _aD_;
      var len=caml_ml_string_length(str);
      function invalid_box(param)
       {return caml_call1(failwith_message(_aE_),str)}
      function parse_spaces(i)
       {var i$0=i;
        for(;;)
         {if(i$0 === len)return i$0;
          var match=caml_string_get(str,i$0);
          if(9 !== match && 32 !== match)return i$0;
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function parse_lword(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var match=caml_string_get(str,j$0);
          if(25 < match - 97 >>> 0)return j$0;
          var j$1=j$0 + 1 | 0,j$0=j$1;
          continue}}
      function parse_int(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var match=caml_string_get(str,j$0),switch$0=0;
          if(48 <= match)
           {if(! (58 <= match))switch$0 = 1}
          else
           if(45 === match)switch$0 = 1;
          if(switch$0){var j$1=j$0 + 1 | 0,j$0=j$1;continue}
          return j$0}}
      var
       wstart=parse_spaces(0),
       wend=parse_lword(wstart,wstart),
       box_name=sub$0(str,wstart,wend - wstart | 0),
       nstart=parse_spaces(wend),
       nend=parse_int(nstart,nstart);
      if(nstart === nend)
       var indent=0;
      else
       try
        {var
          _rY_=caml_int_of_string(sub$0(str,nstart,nend - nstart | 0)),
          indent=_rY_}
       catch(_rZ_)
        {_rZ_ = caml_wrap_exception(_rZ_);
         if(_rZ_[1] !== Failure)throw _rZ_;
         var indent=invalid_box(0)}
      var exp_end=parse_spaces(nend);
      if(exp_end !== len)invalid_box(0);
      var switch$0=0;
      if
       (caml_string_notequal(box_name,cst$37)
        &&
        caml_string_notequal(box_name,cst_b$0))
       var
        box_type=
         caml_string_notequal(box_name,cst_h)
          ?caml_string_notequal(box_name,cst_hov)
            ?caml_string_notequal(box_name,cst_hv)
              ?caml_string_notequal(box_name,cst_v)?invalid_box(0):1
              :2
            :3
          :0;
      else
       switch$0 = 1;
      if(switch$0)var box_type=4;
      return [0,indent,box_type]}
    function make_padding_fmt_ebb(pad,fmt)
     {if(typeof pad === "number")
       return [0,0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],fmt]}}
    function make_padprec_fmt_ebb(pad,prec,fmt)
     {if(typeof prec === "number")
       var match=prec?[0,1,fmt]:[0,0,fmt];
      else
       var p=prec[1],match=[0,[0,p],fmt];
      var prec$0=match[1];
      if(typeof pad === "number")
       return [0,0,prec$0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],prec$0,fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],prec$0,fmt]}}
    function fmt_ebb_of_string(legacy_behavior,str)
     {if(legacy_behavior)
       var flag=legacy_behavior[1],legacy_behavior$0=flag;
      else
       var legacy_behavior$0=1;
      function invalid_format_message(str_ind,msg)
       {return caml_call3(failwith_message(_aF_),str,str_ind,msg)}
      function unexpected_end_of_format(end_ind)
       {return invalid_format_message(end_ind,cst_unexpected_end_of_format)}
      function invalid_format_without(str_ind,c,s)
       {return caml_call4(failwith_message(_aG_),str,str_ind,c,s)}
      function expected_character(str_ind,expected,read)
       {return caml_call4(failwith_message(_aH_),str,str_ind,expected,read)}
      function add_literal(lit_start,str_ind,fmt)
       {var size=str_ind - lit_start | 0;
        return 0 === size
                ?[0,fmt]
                :1 === size
                  ?[0,[12,caml_string_get(str,lit_start),fmt]]
                  :[0,[11,sub$0(str,lit_start,size),fmt]]}
      function parse_positive(str_ind,end_ind,acc)
       {var str_ind$0=str_ind,acc$0=acc;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var c=caml_string_get(str,str_ind$0);
          if(9 < c - 48 >>> 0)return [0,str_ind$0,acc$0];
          var acc$1=(acc$0 * 10 | 0) + (c - 48 | 0) | 0;
          if(max_string_length < acc$1)
           return caml_call3
                   (failwith_message(_aY_),str,acc$1,max_string_length);
          var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,acc$0=acc$1;
          continue}}
      function parse_integer(str_ind,end_ind)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var match=caml_string_get(str,str_ind);
        if(48 <= match)
         {if(! (58 <= match))return parse_positive(str_ind,end_ind,0)}
        else
         if(45 === match)
          {if((str_ind + 1 | 0) === end_ind)unexpected_end_of_format(end_ind);
           var c=caml_string_get(str,str_ind + 1 | 0);
           if(9 < c - 48 >>> 0)
            return expected_character(str_ind + 1 | 0,cst_digit,c);
           var
            match$0=parse_positive(str_ind + 1 | 0,end_ind,0),
            n=match$0[2],
            next_ind=match$0[1];
           return [0,next_ind,- n | 0]}
        throw [0,Assert_failure,_aZ_]}
      function parse_spaces(str_ind,end_ind)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          if(32 === caml_string_get(str,str_ind$0))
           {var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;continue}
          return str_ind$0}}
      function incompatible_flag(pct_ind,str_ind,symb,option)
       {var subfmt=sub$0(str,pct_ind,str_ind - pct_ind | 0);
        return caml_call5
                (failwith_message(_a4_),str,pct_ind,option,symb,subfmt)}
      function compute_int_conv(pct_ind,str_ind,plus,hash,space,symb)
       {var plus$0=plus,hash$0=hash,space$0=space;
        for(;;)
         {var switch$0=0;
          if(plus$0)
           {if(hash$0)
             switch$0 = 1;
            else
             if(! space$0){if(100 === symb)return 1;if(105 === symb)return 4}}
          else
           if(hash$0)
            if(space$0)
             switch$0 = 1;
            else
             {var switcher$0=symb - 88 | 0;
              if(32 < switcher$0 >>> 0)
               switch$0 = 1;
              else
               switch(switcher$0)
                {case 0:return 9;
                 case 12:return 13;
                 case 17:return 14;
                 case 23:return 11;
                 case 29:return 15;
                 case 32:return 7;
                 default:switch$0 = 1}}
           else
            if(space$0)
             {if(100 === symb)return 2;if(105 === symb)return 5}
            else
             {var switcher$1=symb - 88 | 0;
              if(! (32 < switcher$1 >>> 0))
               switch(switcher$1)
                {case 0:return 8;
                 case 12:return 0;
                 case 17:return 3;
                 case 23:return 10;
                 case 29:return 12;
                 case 32:return 6
                 }}
          if(switch$0)
           {var switcher=symb - 88 | 0;
            if(! (32 < switcher >>> 0))
             switch(switcher)
              {case 0:if(legacy_behavior$0)return 9;break;
               case 23:if(legacy_behavior$0)return 11;break;
               case 32:if(legacy_behavior$0)return 7;break;
               case 12:
               case 17:
               case 29:
                if(legacy_behavior$0){var hash$0=0;continue}
                return incompatible_flag(pct_ind,str_ind,symb,cst$49)
               }}
          if(plus$0)
           {if(space$0)
             {if(legacy_behavior$0){var space$0=0;continue}
              return incompatible_flag(pct_ind,str_ind,32,cst$46)}
            if(legacy_behavior$0){var plus$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$47)}
          if(space$0)
           {if(legacy_behavior$0){var space$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$48)}
          throw [0,Assert_failure,_a2_]}}
      function search_subformat_end(str_ind,end_ind,c)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)
           caml_call3(failwith_message(_a0_),str,c,end_ind);
          var match=caml_string_get(str,str_ind$0);
          if(37 === match)
           {if((str_ind$0 + 1 | 0) === end_ind)
             unexpected_end_of_format(end_ind);
            if(caml_string_get(str,str_ind$0 + 1 | 0) === c)return str_ind$0;
            var match$0=caml_string_get(str,str_ind$0 + 1 | 0);
            if(95 <= match$0)
             {if(123 <= match$0)
               {if(! (126 <= match$0))
                 switch(match$0 - 123 | 0)
                  {case 0:
                    var
                     sub_end=search_subformat_end(str_ind$0 + 2 | 0,end_ind,125),
                     str_ind$2=sub_end + 2 | 0,
                     str_ind$0=str_ind$2;
                    continue;
                   case 1:break;
                   default:
                    return expected_character
                            (str_ind$0 + 1 | 0,cst_character,125)}}
              else
               if(! (96 <= match$0))
                {if((str_ind$0 + 2 | 0) === end_ind)
                  unexpected_end_of_format(end_ind);
                 var match$1=caml_string_get(str,str_ind$0 + 2 | 0);
                 if(40 === match$1)
                  {var
                    sub_end$0=search_subformat_end(str_ind$0 + 3 | 0,end_ind,41),
                    str_ind$3=sub_end$0 + 2 | 0,
                    str_ind$0=str_ind$3;
                   continue}
                 if(123 === match$1)
                  {var
                    sub_end$1=
                     search_subformat_end(str_ind$0 + 3 | 0,end_ind,125),
                    str_ind$4=sub_end$1 + 2 | 0,
                    str_ind$0=str_ind$4;
                   continue}
                 var str_ind$5=str_ind$0 + 3 | 0,str_ind$0=str_ind$5;
                 continue}}
            else
             {if(40 === match$0)
               {var
                 sub_end$2=search_subformat_end(str_ind$0 + 2 | 0,end_ind,41),
                 str_ind$6=sub_end$2 + 2 | 0,
                 str_ind$0=str_ind$6;
                continue}
              if(41 === match$0)
               return expected_character(str_ind$0 + 1 | 0,cst_character$0,41)}
            var str_ind$1=str_ind$0 + 2 | 0,str_ind$0=str_ind$1;
            continue}
          var str_ind$7=str_ind$0 + 1 | 0,str_ind$0=str_ind$7;
          continue}}
      function parse_magic_size(str_ind,end_ind)
       {try
         {var
           str_ind_1=parse_spaces(str_ind,end_ind),
           match$2=caml_string_get(str,str_ind_1),
           switch$0=0;
          if(48 <= match$2)
           {if(! (58 <= match$2))switch$0 = 1}
          else
           if(45 === match$2)switch$0 = 1;
          if(switch$0)
           {var
             match$3=parse_integer(str_ind_1,end_ind),
             size=match$3[2],
             str_ind_2=match$3[1],
             str_ind_3=parse_spaces(str_ind_2,end_ind);
            if(62 !== caml_string_get(str,str_ind_3))throw Not_found;
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _rW_=[0,[0,str_ind_3 + 1 | 0,[1,s,size]]]}
          else
           var _rW_=0;
          var _rV_=_rW_}
        catch(_rX_)
         {_rX_ = caml_wrap_exception(_rX_);
          if(_rX_ !== Not_found && _rX_[1] !== Failure)throw _rX_;
          var _rV_=0}
        if(_rV_)
         {var
           match=_rV_[1],
           formatting_lit=match[2],
           next_ind=match[1],
           match$0=parse(next_ind,end_ind),
           fmt_rest=match$0[1];
          return [0,[17,formatting_lit,fmt_rest]]}
        var match$1=parse(str_ind,end_ind),fmt_rest$0=match$1[1];
        return [0,[17,_aW_,fmt_rest$0]]}
      function parse_good_break(str_ind,end_ind)
       {try
         {var
           _rO_=str_ind === end_ind?1:0,
           _rP_=_rO_ || (60 !== caml_string_get(str,str_ind)?1:0);
          if(_rP_)throw Not_found;
          var
           str_ind_1=parse_spaces(str_ind + 1 | 0,end_ind),
           match$0=caml_string_get(str,str_ind_1),
           switch$0=0;
          if(48 <= match$0)
           {if(! (58 <= match$0))switch$0 = 1}
          else
           if(45 === match$0)switch$0 = 1;
          if(! switch$0)throw Not_found;
          var
           match$1=parse_integer(str_ind_1,end_ind),
           width=match$1[2],
           str_ind_2=match$1[1],
           str_ind_3=parse_spaces(str_ind_2,end_ind),
           match$2=caml_string_get(str,str_ind_3),
           switcher=match$2 - 45 | 0,
           switch$1=0;
          if(12 < switcher >>> 0)
           if(17 === switcher)
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _rQ_=[0,s,width,0],
             _rR_=str_ind_3 + 1 | 0,
             formatting_lit$0=_rQ_,
             next_ind=_rR_;
           else
            switch$1 = 1;
          else
           if(1 < switcher - 1 >>> 0)
            {var
              match$3=parse_integer(str_ind_3,end_ind),
              offset=match$3[2],
              str_ind_4=match$3[1],
              str_ind_5=parse_spaces(str_ind_4,end_ind);
             if(62 !== caml_string_get(str,str_ind_5))throw Not_found;
             var
              s$0=sub$0(str,str_ind - 2 | 0,(str_ind_5 - str_ind | 0) + 3 | 0),
              _rS_=[0,s$0,width,offset],
              _rT_=str_ind_5 + 1 | 0,
              formatting_lit$0=_rS_,
              next_ind=_rT_}
           else
            switch$1 = 1;
          if(switch$1)throw Not_found}
        catch(_rU_)
         {_rU_ = caml_wrap_exception(_rU_);
          if(_rU_ !== Not_found && _rU_[1] !== Failure)throw _rU_;
          var formatting_lit$0=formatting_lit,next_ind=str_ind}
        var match=parse(next_ind,end_ind),fmt_rest=match[1];
        return [0,[17,formatting_lit$0,fmt_rest]]}
      function parse_tag(is_open_tag,str_ind,end_ind)
       {try
         {if(str_ind === end_ind)throw Not_found;
          var match$0=caml_string_get(str,str_ind);
          if(60 === match$0)
           {var ind=index_from$0(str,str_ind + 1 | 0,62);
            if(end_ind <= ind)throw Not_found;
            var
             sub_str=sub$0(str,str_ind,(ind - str_ind | 0) + 1 | 0),
             match$1=parse(ind + 1 | 0,end_ind),
             fmt_rest$0=match$1[1],
             match$2=parse(str_ind,ind + 1 | 0),
             sub_fmt=match$2[1],
             sub_format$0=[0,sub_fmt,sub_str],
             formatting$0=is_open_tag?[0,sub_format$0]:[1,sub_format$0],
             _rM_=[0,[18,formatting$0,fmt_rest$0]];
            return _rM_}
          throw Not_found}
        catch(_rN_)
         {_rN_ = caml_wrap_exception(_rN_);
          if(_rN_ === Not_found)
           {var
             match=parse(str_ind,end_ind),
             fmt_rest=match[1],
             formatting=is_open_tag?[0,sub_format]:[1,sub_format];
            return [0,[18,formatting,fmt_rest]]}
          throw _rN_}}
      function parse_flags(pct_ind,str_ind,end_ind,ign)
       {var zero=[0,0],minus=[0,0],plus=[0,0],space=[0,0],hash=[0,0];
        function set_flag(str_ind,flag)
         {var _rJ_=flag[1],_rK_=_rJ_?1 - legacy_behavior$0:_rJ_;
          if(_rK_)
           {var _rL_=caml_string_get(str,str_ind);
            caml_call3(failwith_message(_aI_),str,str_ind,_rL_)}
          flag[1] = 1;
          return 0}
        var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var match=caml_string_get(str,str_ind$0),switcher=match - 32 | 0;
          if(! (16 < switcher >>> 0))
           switch(switcher)
            {case 0:
              set_flag(str_ind$0,space);
              var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
              continue;
             case 3:
              set_flag(str_ind$0,hash);
              var str_ind$2=str_ind$0 + 1 | 0,str_ind$0=str_ind$2;
              continue;
             case 11:
              set_flag(str_ind$0,plus);
              var str_ind$3=str_ind$0 + 1 | 0,str_ind$0=str_ind$3;
              continue;
             case 13:
              set_flag(str_ind$0,minus);
              var str_ind$4=str_ind$0 + 1 | 0,str_ind$0=str_ind$4;
              continue;
             case 16:
              set_flag(str_ind$0,zero);
              var str_ind$5=str_ind$0 + 1 | 0,str_ind$0=str_ind$5;
              continue
             }
          var
           _rE_=space[1],
           _rF_=hash[1],
           _rG_=plus[1],
           _rH_=minus[1],
           _rI_=zero[1];
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           padty=
            _rI_
             ?_rH_
               ?legacy_behavior$0
                 ?0
                 :incompatible_flag(pct_ind,str_ind$0,45,cst_0)
               :2
             :_rH_?0:1,
           match$0=caml_string_get(str,str_ind$0);
          if(48 <= match$0)
           {if(! (58 <= match$0))
             {var
               match$1=parse_positive(str_ind$0,end_ind,0),
               width=match$1[2],
               new_ind=match$1[1];
              return parse_after_padding
                      (pct_ind,
                       new_ind,
                       end_ind,
                       _rH_,
                       _rG_,
                       _rF_,
                       _rE_,
                       ign,
                       [0,padty,width])}}
          else
           if(42 === match$0)
            return parse_after_padding
                    (pct_ind,
                     str_ind$0 + 1 | 0,
                     end_ind,
                     _rH_,
                     _rG_,
                     _rF_,
                     _rE_,
                     ign,
                     [1,padty]);
          switch(padty)
           {case 0:
             if(1 - legacy_behavior$0)
              invalid_format_without(str_ind$0 - 1 | 0,45,cst_padding);
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_rH_,_rG_,_rF_,_rE_,ign,0);
            case 1:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_rH_,_rG_,_rF_,_rE_,ign,0);
            default:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_rH_,_rG_,_rF_,_rE_,ign,_aJ_)}}}
      function parse_after_padding
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var symb=caml_string_get(str,str_ind);
        if(46 === symb)
         {var str_ind$0=str_ind + 1 | 0;
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           parse_literal=
            function(minus,str_ind)
             {var
               match=parse_positive(str_ind,end_ind,0),
               prec=match[2],
               new_ind=match[1];
              return parse_after_precision
                      (pct_ind,
                       new_ind,
                       end_ind,
                       minus,
                       plus,
                       hash,
                       space,
                       ign,
                       pad,
                       [0,prec])},
           symb$0=caml_string_get(str,str_ind$0);
          if(48 <= symb$0)
           {if(! (58 <= symb$0))return parse_literal(minus,str_ind$0)}
          else
           if(42 <= symb$0)
            switch(symb$0 - 42 | 0)
             {case 0:
               return parse_after_precision
                       (pct_ind,
                        str_ind$0 + 1 | 0,
                        end_ind,
                        minus,
                        plus,
                        hash,
                        space,
                        ign,
                        pad,
                        1);
              case 1:
              case 3:
               if(legacy_behavior$0)
                {var
                  _rD_=str_ind$0 + 1 | 0,
                  minus$0=minus || (45 === symb$0?1:0);
                 return parse_literal(minus$0,_rD_)}
               break
              }
          return legacy_behavior$0
                  ?parse_after_precision
                    (pct_ind,
                     str_ind$0,
                     end_ind,
                     minus,
                     plus,
                     hash,
                     space,
                     ign,
                     pad,
                     _aK_)
                  :invalid_format_without(str_ind$0 - 1 | 0,46,cst_precision)}
        return parse_conversion
                (pct_ind,
                 str_ind + 1 | 0,
                 end_ind,
                 plus,
                 hash,
                 space,
                 ign,
                 pad,
                 0,
                 pad,
                 symb)}
      function parse_after_precision
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad,prec)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        function parse_conv(padprec)
         {return parse_conversion
                  (pct_ind,
                   str_ind + 1 | 0,
                   end_ind,
                   plus,
                   hash,
                   space,
                   ign,
                   pad,
                   prec,
                   padprec,
                   caml_string_get(str,str_ind))}
        if(typeof pad === "number")
         {if(typeof prec === "number" && ! prec)return parse_conv(0);
          if(minus)
           {if(typeof prec === "number")return parse_conv(_aL_);
            var n=prec[1];
            return parse_conv([0,0,n])}
          if(typeof prec === "number")return parse_conv(_aM_);
          var n$0=prec[1];
          return parse_conv([0,1,n$0])}
        return parse_conv(pad)}
      function parse_conversion
       (pct_ind,str_ind,end_ind,plus,hash,space,ign,pad,prec,padprec,symb)
       {var
         plus_used=[0,0],
         hash_used=[0,0],
         space_used=[0,0],
         ign_used=[0,0],
         pad_used=[0,0],
         prec_used=[0,0];
        function get_plus(param){plus_used[1] = 1;return plus}
        function get_hash(param){hash_used[1] = 1;return hash}
        function get_space(param){space_used[1] = 1;return space}
        function get_ign(param){ign_used[1] = 1;return ign}
        function get_pad(param){pad_used[1] = 1;return pad}
        function get_prec(param){prec_used[1] = 1;return prec}
        function get_padprec(param){pad_used[1] = 1;return padprec}
        function get_int_pad(param)
         {var pad=get_pad(0),match=get_prec(0);
          if(typeof match === "number" && ! match)return pad;
          if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var n=pad[2];
                return legacy_behavior$0
                        ?[0,1,n]
                        :incompatible_flag(pct_ind,str_ind,48,cst_precision$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aN_
                      :incompatible_flag(pct_ind,str_ind,48,cst_precision$1)
                    :pad}}
        function check_no_0(symb,pad)
         {if(typeof pad === "number")
           return pad;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var width=pad[2];
                return legacy_behavior$0
                        ?[0,1,width]
                        :incompatible_flag(pct_ind,str_ind,symb,cst_0$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aO_
                      :incompatible_flag(pct_ind,str_ind,symb,cst_0$1)
                    :pad}}
        function opt_of_pad(c,pad)
         {if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             switch(pad[1])
              {case 0:
                var width=pad[2];
                return legacy_behavior$0
                        ?[0,width]
                        :incompatible_flag(pct_ind,str_ind,c,cst$38);
               case 1:var width$0=pad[2];return [0,width$0];
               default:
                var width$1=pad[2];
                return legacy_behavior$0
                        ?[0,width$1]
                        :incompatible_flag(pct_ind,str_ind,c,cst_0$2)}
            return incompatible_flag(pct_ind,str_ind,c,cst$39)}}
        function get_pad_opt(c){return opt_of_pad(c,get_pad(0))}
        function get_padprec_opt(c){return opt_of_pad(c,get_padprec(0))}
        var switch$0=0;
        if(124 <= symb)
         switch$0 = 1;
        else
         switch(symb)
          {case 33:
            var
             match$6=parse(str_ind,end_ind),
             fmt_rest$5=match$6[1],
             fmt_result=[0,[10,fmt_rest$5]];
            break;
           case 40:
            var
             sub_end=search_subformat_end(str_ind,end_ind,41),
             match$8=parse(sub_end + 2 | 0,end_ind),
             fmt_rest$7=match$8[1],
             match$9=parse(str_ind,sub_end),
             sub_fmt=match$9[1],
             sub_fmtty=fmtty_of_fmt(sub_fmt);
            if(get_ign(0))
             var
              ignored$2=[9,get_pad_opt(95),sub_fmtty],
              _ra_=[0,[23,ignored$2,fmt_rest$7]];
            else
             var _ra_=[0,[14,get_pad_opt(40),sub_fmtty,fmt_rest$7]];
            var fmt_result=_ra_;
            break;
           case 44:var fmt_result=parse(str_ind,end_ind);break;
           case 67:
            var
             match$12=parse(str_ind,end_ind),
             fmt_rest$10=match$12[1],
             _rc_=get_ign(0)?[0,[23,1,fmt_rest$10]]:[0,[1,fmt_rest$10]],
             fmt_result=_rc_;
            break;
           case 78:
            var
             match$16=parse(str_ind,end_ind),
             fmt_rest$14=match$16[1],
             counter$0=2;
            if(get_ign(0))
             var ignored$6=[11,counter$0],_ri_=[0,[23,ignored$6,fmt_rest$14]];
            else
             var _ri_=[0,[21,counter$0,fmt_rest$14]];
            var fmt_result=_ri_;
            break;
           case 83:
            var
             pad$6=check_no_0(symb,get_padprec(0)),
             match$17=parse(str_ind,end_ind),
             fmt_rest$15=match$17[1];
            if(get_ign(0))
             var
              ignored$7=[1,get_padprec_opt(95)],
              _rj_=[0,[23,ignored$7,fmt_rest$15]];
            else
             var
              match$18=make_padding_fmt_ebb(pad$6,fmt_rest$15),
              fmt_rest$16=match$18[2],
              pad$7=match$18[1],
              _rj_=[0,[3,pad$7,fmt_rest$16]];
            var fmt_result=_rj_;
            break;
           case 91:
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var
             char_set=create_char_set(0),
             add_char=function(c){return add_in_char_set(char_set,c)},
             add_range=
              function(c$0,c)
               {if(! (c < c$0))
                 {var i=c$0;
                  for(;;)
                   {add_in_char_set(char_set,char_of_int(i));
                    var _rC_=i + 1 | 0;
                    if(c !== i){var i=_rC_;continue}
                    break}}
                return 0},
             fail_single_percent=
              function(str_ind)
               {return caml_call2(failwith_message(_aX_),str,str_ind)},
             parse_char_set_content=
              function(counter,str_ind,end_ind)
               {var str_ind$0=str_ind;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c=caml_string_get(str,str_ind$0);
                  if(45 === c)
                   {add_char(45);
                    var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
                    continue}
                  if(93 === c)return str_ind$0 + 1 | 0;
                  var _rB_=str_ind$0 + 1 | 0;
                  if(counter < 50)
                   {var counter$0=counter + 1 | 0;
                    return parse_char_set_after_char$0(counter$0,_rB_,end_ind,c)}
                  return caml_trampoline_return
                          (parse_char_set_after_char$0,[0,_rB_,end_ind,c])}},
             parse_char_set_after_char$0=
              function(counter,str_ind,end_ind,c)
               {var str_ind$0=str_ind,c$0=c;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c$1=caml_string_get(str,str_ind$0),switch$0=0;
                  if(46 <= c$1)
                   {if(64 === c$1)
                     switch$0 = 1;
                    else
                     if(93 === c$1){add_char(c$0);return str_ind$0 + 1 | 0}}
                  else
                   if(37 === c$1)
                    switch$0 = 1;
                   else
                    if(45 <= c$1)
                     {var str_ind$2=str_ind$0 + 1 | 0;
                      if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
                      var c$2=caml_string_get(str,str_ind$2);
                      if(37 === c$2)
                       {if((str_ind$2 + 1 | 0) === end_ind)
                         unexpected_end_of_format(end_ind);
                        var c$3=caml_string_get(str,str_ind$2 + 1 | 0);
                        if(37 !== c$3 && 64 !== c$3)
                         return fail_single_percent(str_ind$2);
                        add_range(c$0,c$3);
                        var _rz_=str_ind$2 + 2 | 0;
                        if(counter < 50)
                         {var counter$2=counter + 1 | 0;
                          return parse_char_set_content(counter$2,_rz_,end_ind)}
                        return caml_trampoline_return
                                (parse_char_set_content,[0,_rz_,end_ind])}
                      if(93 === c$2)
                       {add_char(c$0);add_char(45);return str_ind$2 + 1 | 0}
                      add_range(c$0,c$2);
                      var _rA_=str_ind$2 + 1 | 0;
                      if(counter < 50)
                       {var counter$1=counter + 1 | 0;
                        return parse_char_set_content(counter$1,_rA_,end_ind)}
                      return caml_trampoline_return
                              (parse_char_set_content,[0,_rA_,end_ind])}
                  if(switch$0 && 37 === c$0)
                   {add_char(c$1);
                    var _ry_=str_ind$0 + 1 | 0;
                    if(counter < 50)
                     {var counter$0=counter + 1 | 0;
                      return parse_char_set_content(counter$0,_ry_,end_ind)}
                    return caml_trampoline_return
                            (parse_char_set_content,[0,_ry_,end_ind])}
                  if(37 === c$0)fail_single_percent(str_ind$0);
                  add_char(c$0);
                  var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,c$0=c$1;
                  continue}},
             parse_char_set_after_char=
              function(str_ind,end_ind,c)
               {return caml_trampoline
                        (parse_char_set_after_char$0(0,str_ind,end_ind,c))};
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var match$31=caml_string_get(str,str_ind);
            if(94 === match$31)
             var str_ind$0=str_ind + 1 | 0,reverse=1,str_ind$1=str_ind$0;
            else
             var reverse=0,str_ind$1=str_ind;
            if(str_ind$1 === end_ind)unexpected_end_of_format(end_ind);
            var
             c=caml_string_get(str,str_ind$1),
             next_ind=parse_char_set_after_char(str_ind$1 + 1 | 0,end_ind,c),
             char_set$0=freeze_char_set(char_set),
             char_set$1=reverse?rev_char_set(char_set$0):char_set$0,
             match$21=parse(next_ind,end_ind),
             fmt_rest$19=match$21[1];
            if(get_ign(0))
             var
              ignored$9=[10,get_pad_opt(95),char_set$1],
              _ro_=[0,[23,ignored$9,fmt_rest$19]];
            else
             var _ro_=[0,[20,get_pad_opt(91),char_set$1,fmt_rest$19]];
            var fmt_result=_ro_;
            break;
           case 97:
            var
             match$22=parse(str_ind,end_ind),
             fmt_rest$20=match$22[1],
             fmt_result=[0,[15,fmt_rest$20]];
            break;
           case 99:
            var
             char_format=
              function(fmt_rest)
               {return get_ign(0)?[0,[23,0,fmt_rest]]:[0,[0,fmt_rest]]},
             match$23=parse(str_ind,end_ind),
             fmt_rest$21=match$23[1],
             match$24=get_pad_opt(99);
            if(match$24)
             {if(0 === match$24[1])
               var
                _rp_=get_ign(0)?[0,[23,3,fmt_rest$21]]:[0,[22,fmt_rest$21]],
                _rq_=_rp_;
              else
               var
                _rq_=
                 legacy_behavior$0
                  ?char_format(fmt_rest$21)
                  :invalid_format_message
                    (str_ind,cst_non_zero_widths_are_unsupp);
              var _rr_=_rq_}
            else
             var _rr_=char_format(fmt_rest$21);
            var fmt_result=_rr_;
            break;
           case 114:
            var
             match$25=parse(str_ind,end_ind),
             fmt_rest$22=match$25[1],
             _rs_=get_ign(0)?[0,[23,2,fmt_rest$22]]:[0,[19,fmt_rest$22]],
             fmt_result=_rs_;
            break;
           case 115:
            var
             pad$9=check_no_0(symb,get_padprec(0)),
             match$26=parse(str_ind,end_ind),
             fmt_rest$23=match$26[1];
            if(get_ign(0))
             var
              ignored$10=[0,get_padprec_opt(95)],
              _rt_=[0,[23,ignored$10,fmt_rest$23]];
            else
             var
              match$27=make_padding_fmt_ebb(pad$9,fmt_rest$23),
              fmt_rest$24=match$27[2],
              pad$10=match$27[1],
              _rt_=[0,[2,pad$10,fmt_rest$24]];
            var fmt_result=_rt_;
            break;
           case 116:
            var
             match$28=parse(str_ind,end_ind),
             fmt_rest$25=match$28[1],
             fmt_result=[0,[16,fmt_rest$25]];
            break;
           case 123:
            var
             sub_end$0=search_subformat_end(str_ind,end_ind,125),
             match$29=parse(str_ind,sub_end$0),
             sub_fmt$0=match$29[1],
             match$30=parse(sub_end$0 + 2 | 0,end_ind),
             fmt_rest$26=match$30[1],
             sub_fmtty$0=fmtty_of_fmt(sub_fmt$0);
            if(get_ign(0))
             var
              ignored$11=[8,get_pad_opt(95),sub_fmtty$0],
              _ru_=[0,[23,ignored$11,fmt_rest$26]];
            else
             var _ru_=[0,[13,get_pad_opt(123),sub_fmtty$0,fmt_rest$26]];
            var fmt_result=_ru_;
            break;
           case 66:
           case 98:
            var
             pad$3=check_no_0(symb,get_padprec(0)),
             match$10=parse(str_ind,end_ind),
             fmt_rest$8=match$10[1];
            if(get_ign(0))
             var
              ignored$3=[7,get_padprec_opt(95)],
              _rb_=[0,[23,ignored$3,fmt_rest$8]];
            else
             var
              match$11=make_padding_fmt_ebb(pad$3,fmt_rest$8),
              fmt_rest$9=match$11[2],
              pad$4=match$11[1],
              _rb_=[0,[9,pad$4,fmt_rest$9]];
            var fmt_result=_rb_;
            break;
           case 37:
           case 64:
            var
             match$7=parse(str_ind,end_ind),
             fmt_rest$6=match$7[1],
             fmt_result=[0,[12,symb,fmt_rest$6]];
            break;
           case 76:
           case 108:
           case 110:
            var switch$1=0;
            if(str_ind !== end_ind)
             {var
               symb$0=caml_string_get(str,str_ind),
               _rv_=symb$0 - 88 | 0,
               switch$2=0;
              if(! (32 < _rv_ >>> 0))
               switch(_rv_)
                {case 0:
                 case 12:
                 case 17:
                 case 23:
                 case 29:
                 case 32:var _rh_=1;switch$2 = 1;break
                 }
              if(! switch$2)var _rh_=0;
              if(_rh_){switch$0 = 1;switch$1 = 1}}
            if(! switch$1)
             {var
               match$15=parse(str_ind,end_ind),
               fmt_rest$13=match$15[1],
               switch$3=0;
              if(108 <= symb)
               {if(! (111 <= symb))
                 switch(symb - 108 | 0)
                  {case 0:var counter=0;switch$3 = 1;break;
                   case 1:break;
                   default:var counter=1;switch$3 = 1}}
              else
               if(76 === symb){var counter=2;switch$3 = 1}
              if(! switch$3)throw [0,Assert_failure,_a1_];
              if(get_ign(0))
               var ignored$5=[11,counter],_rg_=[0,[23,ignored$5,fmt_rest$13]];
              else
               var _rg_=[0,[21,counter,fmt_rest$13]];
              var fmt_result=_rg_}
            break;
           case 32:
           case 35:
           case 43:
           case 45:
           case 95:
            var
             fmt_result=
              caml_call3(failwith_message(_aS_),str,pct_ind,symb);
            break;
           case 88:
           case 100:
           case 105:
           case 111:
           case 117:
           case 120:
            var
             _rk_=get_space(0),
             _rl_=get_hash(0),
             iconv$2=
              compute_int_conv(pct_ind,str_ind,get_plus(0),_rl_,_rk_,symb),
             match$19=parse(str_ind,end_ind),
             fmt_rest$17=match$19[1];
            if(get_ign(0))
             var
              ignored$8=[2,iconv$2,get_pad_opt(95)],
              _rm_=[0,[23,ignored$8,fmt_rest$17]];
            else
             var
              _rn_=get_prec(0),
              match$20=make_padprec_fmt_ebb(get_int_pad(0),_rn_,fmt_rest$17),
              fmt_rest$18=match$20[3],
              prec$4=match$20[2],
              pad$8=match$20[1],
              _rm_=[0,[4,iconv$2,pad$8,prec$4,fmt_rest$18]];
            var fmt_result=_rm_;
            break;
           case 69:
           case 70:
           case 71:
           case 72:
           case 101:
           case 102:
           case 103:
           case 104:
            var
             space$1=get_space(0),
             hash$1=get_hash(0),
             plus$2=get_plus(0),
             flag=
              plus$2
               ?space$1
                 ?legacy_behavior$0
                   ?1
                   :incompatible_flag(pct_ind,str_ind,32,cst$50)
                 :1
               :space$1?2:0,
             switch$4=0;
            if(73 <= symb)
             {var switcher=symb - 101 | 0;
              if(3 < switcher >>> 0)
               switch$4 = 1;
              else
               {switch(switcher)
                 {case 0:var _rw_=1;break;
                  case 1:var _rw_=0;break;
                  case 2:var _rw_=3;break;
                  default:var _rw_=6}
                var kind=_rw_}}
            else
             if(69 <= symb)
              {var switch$5=0;
               switch(symb - 69 | 0)
                {case 0:var _rx_=2;break;
                 case 1:switch$4 = 1;switch$5 = 1;break;
                 case 2:var _rx_=4;break;
                 default:var _rx_=7}
               if(! switch$5)var kind=_rx_}
             else
              switch$4 = 1;
            if(switch$4)
             {var switch$6=0;
              if(hash$1)
               if(70 === symb)var kind=8;else switch$6 = 1;
              else
               if(70 === symb)var kind=5;else switch$6 = 1;
              if(switch$6)throw [0,Assert_failure,_a3_]}
            var
             fconv=[0,flag,kind],
             match$13=parse(str_ind,end_ind),
             fmt_rest$11=match$13[1];
            if(get_ign(0))
             {var match=get_prec(0);
              if(typeof match === "number")
               var _rd_=match?incompatible_flag(pct_ind,str_ind,95,cst$40):0;
              else
               var ndec=match[1],_rd_=[0,ndec];
              var
               ignored$4=[6,get_pad_opt(95),_rd_],
               _re_=[0,[23,ignored$4,fmt_rest$11]]}
            else
             var
              _rf_=get_prec(0),
              match$14=make_padprec_fmt_ebb(get_pad(0),_rf_,fmt_rest$11),
              fmt_rest$12=match$14[3],
              prec$3=match$14[2],
              pad$5=match$14[1],
              _re_=[0,[8,fconv,pad$5,prec$3,fmt_rest$12]];
            var fmt_result=_re_;
            break;
           default:switch$0 = 1}
        if(switch$0)
         {var switch$7=0;
          if(108 <= symb)
           if(111 <= symb)
            switch$7 = 1;
           else
            {var switch$8=0;
             switch(symb - 108 | 0)
              {case 0:
                var
                 _qW_=caml_string_get(str,str_ind),
                 _qX_=get_space(0),
                 _qY_=get_hash(0),
                 iconv=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_qY_,_qX_,_qW_),
                 match$0=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest=match$0[1];
                if(get_ign(0))
                 var
                  ignored=[3,iconv,get_pad_opt(95)],
                  _qZ_=[0,[23,ignored,fmt_rest]];
                else
                 var
                  _q1_=get_prec(0),
                  match$1=make_padprec_fmt_ebb(get_int_pad(0),_q1_,fmt_rest),
                  fmt_rest$0=match$1[3],
                  prec$0=match$1[2],
                  pad$0=match$1[1],
                  _qZ_=[0,[5,iconv,pad$0,prec$0,fmt_rest$0]];
                var _q0_=_qZ_;
                break;
               case 1:switch$7 = 1;switch$8 = 1;break;
               default:
                var
                 _q2_=caml_string_get(str,str_ind),
                 _q3_=get_space(0),
                 _q4_=get_hash(0),
                 iconv$0=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_q4_,_q3_,_q2_),
                 match$2=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest$1=match$2[1];
                if(get_ign(0))
                 var
                  ignored$0=[4,iconv$0,get_pad_opt(95)],
                  _q5_=[0,[23,ignored$0,fmt_rest$1]];
                else
                 var
                  _q6_=get_prec(0),
                  match$3=make_padprec_fmt_ebb(get_int_pad(0),_q6_,fmt_rest$1),
                  fmt_rest$2=match$3[3],
                  prec$1=match$3[2],
                  pad$1=match$3[1],
                  _q5_=[0,[6,iconv$0,pad$1,prec$1,fmt_rest$2]];
                var _q0_=_q5_}
             if(! switch$8)var fmt_result=_q0_}
          else
           if(76 === symb)
            {var
              _q7_=caml_string_get(str,str_ind),
              _q8_=get_space(0),
              _q9_=get_hash(0),
              iconv$1=
               compute_int_conv
                (pct_ind,str_ind + 1 | 0,get_plus(0),_q9_,_q8_,_q7_),
              match$4=parse(str_ind + 1 | 0,end_ind),
              fmt_rest$3=match$4[1];
             if(get_ign(0))
              var
               ignored$1=[5,iconv$1,get_pad_opt(95)],
               _q__=[0,[23,ignored$1,fmt_rest$3]];
             else
              var
               _q$_=get_prec(0),
               match$5=make_padprec_fmt_ebb(get_int_pad(0),_q$_,fmt_rest$3),
               fmt_rest$4=match$5[3],
               prec$2=match$5[2],
               pad$2=match$5[1],
               _q__=[0,[7,iconv$1,pad$2,prec$2,fmt_rest$4]];
             var fmt_result=_q__}
           else
            switch$7 = 1;
          if(switch$7)
           var
            fmt_result=
             caml_call3(failwith_message(_aP_),str,str_ind - 1 | 0,symb)}
        if(1 - legacy_behavior$0)
         {var _qN_=1 - plus_used[1],plus$0=_qN_?plus:_qN_;
          if(plus$0)incompatible_flag(pct_ind,str_ind,symb,cst$41);
          var _qO_=1 - hash_used[1],hash$0=_qO_?hash:_qO_;
          if(hash$0)incompatible_flag(pct_ind,str_ind,symb,cst$42);
          var _qP_=1 - space_used[1],space$0=_qP_?space:_qP_;
          if(space$0)incompatible_flag(pct_ind,str_ind,symb,cst$43);
          var _qQ_=1 - pad_used[1],_qR_=_qQ_?caml_notequal([0,pad],_aQ_):_qQ_;
          if(_qR_)incompatible_flag(pct_ind,str_ind,symb,cst_padding$0);
          var
           _qS_=1 - prec_used[1],
           _qT_=_qS_?caml_notequal([0,prec],_aR_):_qS_;
          if(_qT_)
           {var _qU_=ign?95:symb;
            incompatible_flag(pct_ind,str_ind,_qU_,cst_precision$2)}
          var plus$1=ign?plus:ign;
          if(plus$1)incompatible_flag(pct_ind,str_ind,95,cst$44)}
        var _qV_=1 - ign_used[1],ign$0=_qV_?ign:_qV_;
        if(ign$0)
         {var switch$9=0;
          if(38 <= symb)
           {if(44 !== symb && 64 !== symb)switch$9 = 1}
          else
           if(33 !== symb && ! (37 <= symb))switch$9 = 1;
          var switch$10=0;
          if(switch$9 || ! legacy_behavior$0)switch$10 = 1;
          if(switch$10)incompatible_flag(pct_ind,str_ind,symb,cst$45)}
        return fmt_result}
      function parse(lit_start,end_ind)
       {var str_ind=lit_start;
        for(;;)
         {if(str_ind === end_ind)return add_literal(lit_start,str_ind,0);
          var match=caml_string_get(str,str_ind);
          if(37 === match)
           {var str_ind$2=str_ind + 1 | 0;
            if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
            var
             match$1=caml_string_get(str,str_ind$2),
             _qM_=
              95 === match$1
               ?parse_flags(str_ind,str_ind$2 + 1 | 0,end_ind,1)
               :parse_flags(str_ind,str_ind$2,end_ind,0),
             fmt_rest=_qM_[1];
            return add_literal(lit_start,str_ind,fmt_rest)}
          if(64 === match)
           {var str_ind$0=str_ind + 1 | 0;
            if(str_ind$0 === end_ind)
             var match$0=_aT_;
            else
             {var c=caml_string_get(str,str_ind$0),switch$0=0;
              if(65 <= c)
               if(94 <= c)
                {var switcher=c - 123 | 0;
                 if(2 < switcher >>> 0)
                  switch$0 = 1;
                 else
                  switch(switcher)
                   {case 0:
                     var match$0=parse_tag(1,str_ind$0 + 1 | 0,end_ind);break;
                    case 1:switch$0 = 1;break;
                    default:
                     var
                      match$3=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$2=match$3[1],
                      match$0=[0,[17,1,fmt_rest$2]]}}
               else
                if(91 <= c)
                 switch(c - 91 | 0)
                  {case 0:
                    var match$0=parse_tag(0,str_ind$0 + 1 | 0,end_ind);break;
                   case 1:switch$0 = 1;break;
                   default:
                    var
                     match$4=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$3=match$4[1],
                     match$0=[0,[17,0,fmt_rest$3]]}
                else
                 switch$0 = 1;
              else
               if(10 === c)
                var
                 match$5=parse(str_ind$0 + 1 | 0,end_ind),
                 fmt_rest$4=match$5[1],
                 match$0=[0,[17,3,fmt_rest$4]];
               else
                if(32 <= c)
                 switch(c - 32 | 0)
                  {case 0:
                    var
                     match$6=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$5=match$6[1],
                     match$0=[0,[17,_aU_,fmt_rest$5]];
                    break;
                   case 5:
                    var switch$1=0;
                    if
                     ((str_ind$0 + 1 | 0)
                      <
                      end_ind
                      &&
                      37
                      ===
                      caml_string_get(str,str_ind$0 + 1 | 0))
                     {var
                       match$7=parse(str_ind$0 + 2 | 0,end_ind),
                       fmt_rest$6=match$7[1],
                       match$0=[0,[17,6,fmt_rest$6]];
                      switch$1 = 1}
                    if(! switch$1)
                     var
                      match$8=parse(str_ind$0,end_ind),
                      fmt_rest$7=match$8[1],
                      match$0=[0,[12,64,fmt_rest$7]];
                    break;
                   case 12:
                    var
                     match$9=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$8=match$9[1],
                     match$0=[0,[17,_aV_,fmt_rest$8]];
                    break;
                   case 14:
                    var
                     match$10=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$9=match$10[1],
                     match$0=[0,[17,4,fmt_rest$9]];
                    break;
                   case 27:
                    var match$0=parse_good_break(str_ind$0 + 1 | 0,end_ind);
                    break;
                   case 28:
                    var match$0=parse_magic_size(str_ind$0 + 1 | 0,end_ind);
                    break;
                   case 31:
                    var
                     match$11=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$10=match$11[1],
                     match$0=[0,[17,2,fmt_rest$10]];
                    break;
                   case 32:
                    var
                     match$12=parse(str_ind$0 + 1 | 0,end_ind),
                     fmt_rest$11=match$12[1],
                     match$0=[0,[17,5,fmt_rest$11]];
                    break;
                   default:switch$0 = 1}
                else
                 switch$0 = 1;
              if(switch$0)
               var
                match$2=parse(str_ind$0 + 1 | 0,end_ind),
                fmt_rest$1=match$2[1],
                match$0=[0,[17,[2,c],fmt_rest$1]]}
            var fmt_rest$0=match$0[1];
            return add_literal(lit_start,str_ind,fmt_rest$0)}
          var str_ind$1=str_ind + 1 | 0,str_ind=str_ind$1;
          continue}}
      return parse(0,caml_ml_string_length(str))}
    function format_of_string_fmtty(str,fmtty)
     {var match=fmt_ebb_of_string(0,str),fmt=match[1];
      try
       {var _qK_=[0,type_format(fmt,fmtty),str];return _qK_}
      catch(_qL_)
       {_qL_ = caml_wrap_exception(_qL_);
        if(_qL_ === Type_mismatch)
         {var _qJ_=string_of_fmtty(fmtty);
          return caml_call2(failwith_message(_a5_),str,_qJ_)}
        throw _qL_}}
    function format_of_string_format(str,param)
     {var
       str$0=param[2],
       fmt=param[1],
       match=fmt_ebb_of_string(0,str),
       fmt$0=match[1];
      try
       {var _qH_=[0,type_format(fmt$0,fmtty_of_fmt(fmt)),str];return _qH_}
      catch(_qI_)
       {_qI_ = caml_wrap_exception(_qI_);
        if(_qI_ === Type_mismatch)
         return caml_call2(failwith_message(_a6_),str,str$0);
        throw _qI_}}
    var
     CamlinternalFormat=
      [0,
       is_in_char_set,
       rev_char_set,
       create_char_set,
       add_in_char_set,
       freeze_char_set,
       param_format_of_ignored_format,
       make_printf,
       make_iprintf,
       output_acc,
       bufput_acc,
       strput_acc,
       type_format,
       fmt_ebb_of_string,
       format_of_string_fmtty,
       format_of_string_format,
       char_of_iconv,
       string_of_formatting_lit,
       string_of_fmtty,
       string_of_fmt,
       open_box_of_string,
       symm,
       trans,
       recast];
    caml_register_global(807,CamlinternalFormat,"CamlinternalFormat");
    function kfprintf(k,o,param)
     {var fmt=param[1],_qG_=0;
      return make_printf
              (function(acc){output_acc(o,acc);return caml_call1(k,o)},
               _qG_,
               fmt)}
    function kbprintf(k,b,param)
     {var fmt=param[1],_qF_=0;
      return make_printf
              (function(acc){bufput_acc(b,acc);return caml_call1(k,b)},
               _qF_,
               fmt)}
    function ikfprintf(k,oc,param)
     {var fmt=param[1];return make_iprintf(k,oc,fmt)}
    function fprintf(oc,fmt){return kfprintf(function(_qE_){return 0},oc,fmt)}
    function bprintf(b,fmt){return kbprintf(function(_qD_){return 0},b,fmt)}
    function ifprintf(oc,fmt)
     {return ikfprintf(function(_qC_){return 0},oc,fmt)}
    function ibprintf(b,fmt){return ikfprintf(function(_qB_){return 0},b,fmt)}
    function printf(fmt){return fprintf(stdout,fmt)}
    function eprintf(fmt){return fprintf(stderr,fmt)}
    function ksprintf(k,param)
     {var fmt=param[1];
      function k$0(acc)
       {var buf=create$2(64);
        strput_acc(buf,acc);
        return caml_call1(k,contents(buf))}
      return make_printf(k$0,0,fmt)}
    function sprintf(fmt){return ksprintf(function(s){return s},fmt)}
    var
     Stdlib_Printf=
      [0,
       fprintf,
       printf,
       eprintf,
       sprintf,
       bprintf,
       ifprintf,
       ibprintf,
       kfprintf,
       ikfprintf,
       ksprintf,
       kbprintf,
       ikfprintf,
       ksprintf];
    caml_register_global(808,Stdlib_Printf,"Stdlib__Printf");
    var
     Bad=[248,cst_Stdlib_Arg_Bad,caml_fresh_oo_id(0)],
     Help=[248,cst_Stdlib_Arg_Help,caml_fresh_oo_id(0)],
     Stop=[248,cst_Stdlib_Arg_Stop,caml_fresh_oo_id(0)];
    function assoc3(x,l)
     {var l$0=l;
      for(;;)
       {if(l$0)
         {var match=l$0[1],y2=match[2],y1=match[1];
          if(caml_equal(y1,x))return y2;
          var l$1=l$0[2],l$0=l$1;
          continue}
        throw Not_found}}
    function split$1(s)
     {var
       i=index$0(s,61),
       len=caml_ml_string_length(s),
       _qA_=sub$0(s,i + 1 | 0,len - (i + 1 | 0) | 0);
      return [0,sub$0(s,0,i),_qA_]}
    function make_symlist(prefix,sep,suffix,l)
     {if(l)
       {var t=l[2],h=l[1],_qz_=cat(prefix,h);
        return cat
                (fold_left$0(function(x,y){return cat(x,cat(sep,y))},_qz_,t),
                 suffix)}
      return cst_none}
    function help_action(param){throw [0,Stop,_a9_]}
    function add_help(speclist)
     {try
       {assoc3(cst_help$2,speclist);var _qw_=0,_qu_=_qw_}
      catch(_qy_)
       {_qy_ = caml_wrap_exception(_qy_);
        if(_qy_ !== Not_found)throw _qy_;
        var
         _qu_=
          [0,[0,cst_help,[0,help_action],cst_Display_this_list_of_optio],0]}
      try
       {assoc3(cst_help$1,speclist);var _qv_=0,add2=_qv_}
      catch(_qx_)
       {_qx_ = caml_wrap_exception(_qx_);
        if(_qx_ !== Not_found)throw _qx_;
        var
         add2=
          [0,
           [0,cst_help$0,[0,help_action],cst_Display_this_list_of_optio$0],
           0]}
      return append(speclist,append(_qu_,add2))}
    function usage_b(buf,speclist,errmsg)
     {caml_call1(bprintf(buf,_a__),errmsg);
      var _qr_=add_help(speclist);
      return iter$2
              (function(param)
                {var
                  doc=param[3],
                  spec=param[2],
                  key=param[1],
                  _qs_=0 < caml_ml_string_length(doc)?1:0;
                 if(_qs_)
                  {if(11 === spec[0])
                    {var l=spec[1],_qt_=make_symlist(cst$53,cst$52,cst$51,l);
                     return caml_call3(bprintf(buf,_a8_),key,_qt_,doc)}
                   return caml_call2(bprintf(buf,_a7_),key,doc)}
                 return _qs_},
               _qr_)}
    function usage_string(speclist,errmsg)
     {var b=create$2(200);usage_b(b,speclist,errmsg);return contents(b)}
    function usage(speclist,errmsg)
     {var _qq_=usage_string(speclist,errmsg);
      return caml_call1(eprintf(_a$_),_qq_)}
    var current=[0,0];
    function bool_of_string_opt$0(x)
     {try
       {var _qo_=[0,bool_of_string(x)];return _qo_}
      catch(_qp_)
       {_qp_ = caml_wrap_exception(_qp_);
        if(_qp_[1] === Invalid_argument)return 0;
        throw _qp_}}
    function int_of_string_opt$0(x)
     {try
       {var _qm_=[0,caml_int_of_string(x)];return _qm_}
      catch(_qn_)
       {_qn_ = caml_wrap_exception(_qn_);
        if(_qn_[1] === Failure)return 0;
        throw _qn_}}
    function float_of_string_opt(x)
     {try
       {var _qk_=[0,caml_float_of_string(x)];return _qk_}
      catch(_ql_)
       {_ql_ = caml_wrap_exception(_ql_);
        if(_ql_[1] === Failure)return 0;
        throw _ql_}}
    function parse_and_expand_argv_dynamic_
     (allow_expand,current,argv,speclist,anonfun,errmsg)
     {var initpos=current[1];
      function convert_error(error)
       {var
         b=create$2(200),
         progname=
          initpos < argv[1].length - 1
           ?caml_check_bound(argv[1],initpos)[1 + initpos]
           :cst$54;
        switch(error[0])
         {case 0:
           var _qj_=error[1];
           if
            (caml_string_notequal(_qj_,cst_help$3)
             &&
             caml_string_notequal(_qj_,cst_help$4))
            caml_call2(bprintf(b,_ba_),progname,_qj_);
           break;
          case 1:
           var expected=error[3],arg=error[2],opt=error[1];
           caml_call4(bprintf(b,_bd_),progname,arg,opt,expected);
           break;
          case 2:var s=error[1];caml_call2(bprintf(b,_be_),progname,s);break;
          default:var s$0=error[1];caml_call2(bprintf(b,_bf_),progname,s$0)}
        usage_b(b,speclist[1],errmsg);
        if(! caml_equal(error,_bb_) && ! caml_equal(error,_bc_))
         return [0,Bad,contents(b)];
        return [0,Help,contents(b)]}
      current[1]++;
      for(;;)
       {if(current[1] < argv[1].length - 1)
         {try
           {var
             _p__=current[1],
             s=caml_check_bound(argv[1],_p__)[1 + _p__],
             switch$0=0;
            if(1 <= caml_ml_string_length(s) && 45 === caml_string_get(s,0))
             {try
               {var
                 follow$1=0,
                 _qa_=assoc3(s,speclist[1]),
                 follow$0=follow$1,
                 action=_qa_}
              catch(_qh_)
               {_qh_ = caml_wrap_exception(_qh_);
                if(_qh_ !== Not_found)throw _qh_;
                try
                 {var
                   match=split$1(s),
                   arg=match[2],
                   keyword=match[1],
                   follow=[0,arg],
                   _p$_=assoc3(keyword,speclist[1])}
                catch(_qi_)
                 {_qi_ = caml_wrap_exception(_qi_);
                  if(_qi_ === Not_found)throw [0,Stop,[0,s]];
                  throw _qi_;
                  var _qb_=_qi_}
                var follow$0=follow,action=_p$_,_qc_=_qh_}
              var
               no_arg$0=
                function(s,follow)
                 {function no_arg(param)
                   {if(follow)
                     {var arg=follow[1];throw [0,Stop,[1,s,arg,cst_no_argument]]}
                    return 0}
                  return no_arg},
               no_arg=no_arg$0(s,follow$0),
               get_arg$0=
                function(s,follow)
                 {function get_arg(param)
                   {if(follow){var arg=follow[1];return arg}
                    if((current[1] + 1 | 0) < argv[1].length - 1)
                     {var _qg_=current[1] + 1 | 0;
                      return caml_check_bound(argv[1],_qg_)[1 + _qg_]}
                    throw [0,Stop,[2,s]]}
                  return get_arg},
               get_arg=get_arg$0(s,follow$0),
               consume_arg$0=
                function(follow)
                 {function consume_arg(param)
                   {return follow?0:(current[1]++,0)}
                  return consume_arg},
               consume_arg=consume_arg$0(follow$0),
               treat_action$0=
                function(s,no_arg,get_arg,consume_arg)
                 {function treat_action(param)
                   {switch(param[0])
                     {case 0:var f=param[1];no_arg(0);return caml_call1(f,0);
                      case 1:
                       var
                        f$0=param[1],
                        arg=get_arg(0),
                        match=bool_of_string_opt$0(arg);
                       if(match)
                        {var s$0=match[1];caml_call1(f$0,s$0);return consume_arg(0)}
                       throw [0,Stop,[1,s,arg,cst_a_boolean]];
                      case 2:var r=param[1];no_arg(0);r[1] = 1;return 0;
                      case 3:var r$0=param[1];no_arg(0);r$0[1] = 0;return 0;
                      case 4:
                       var f$1=param[1],arg$0=get_arg(0);
                       caml_call1(f$1,arg$0);
                       return consume_arg(0);
                      case 5:
                       var r$1=param[1];r$1[1] = get_arg(0);return consume_arg(0);
                      case 6:
                       var
                        f$2=param[1],
                        arg$1=get_arg(0),
                        match$0=int_of_string_opt$0(arg$1);
                       if(match$0)
                        {var x=match$0[1];caml_call1(f$2,x);return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$1,cst_an_integer]];
                      case 7:
                       var
                        r$2=param[1],
                        arg$2=get_arg(0),
                        match$1=int_of_string_opt$0(arg$2);
                       if(match$1)
                        {var x$0=match$1[1];r$2[1] = x$0;return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$2,cst_an_integer$0]];
                      case 8:
                       var
                        f$3=param[1],
                        arg$3=get_arg(0),
                        match$2=float_of_string_opt(arg$3);
                       if(match$2)
                        {var x$1=match$2[1];
                         caml_call1(f$3,x$1);
                         return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$3,cst_a_float]];
                      case 9:
                       var
                        r$3=param[1],
                        arg$4=get_arg(0),
                        match$3=float_of_string_opt(arg$4);
                       if(match$3)
                        {var x$2=match$3[1];r$3[1] = x$2;return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$4,cst_a_float$0]];
                      case 10:
                       var specs=param[1];
                       no_arg(0);
                       return iter$2(treat_action,specs);
                      case 11:
                       var f$4=param[2],symb=param[1],arg$5=get_arg(0);
                       if(mem(arg$5,symb))
                        {caml_call1(f$4,arg$5);return consume_arg(0)}
                       throw [0,
                              Stop,
                              [1,
                               s,
                               arg$5,
                               cat(cst_one_of,make_symlist(cst$57,cst$56,cst$55,symb))]];
                      case 12:
                       var f$5=param[1];
                       no_arg(0);
                       for(;;)
                        {if(current[1] < (argv[1].length - 1 - 1 | 0))
                          {var _qd_=current[1] + 1 | 0;
                           caml_call1(f$5,caml_check_bound(argv[1],_qd_)[1 + _qd_]);
                           consume_arg(0);
                           continue}
                         return 0}
                      case 13:
                       var f$6=param[1];
                       no_arg(0);
                       var acc=[0,0];
                       for(;;)
                        {if(current[1] < (argv[1].length - 1 - 1 | 0))
                          {var _qf_=current[1] + 1 | 0,_qe_=acc[1];
                           acc[1] = [0,caml_check_bound(argv[1],_qf_)[1 + _qf_],_qe_];
                           consume_arg(0);
                           continue}
                         return caml_call1(f$6,rev(acc[1]))}
                      default:
                       var f$7=param[1];
                       if(1 - allow_expand)
                        throw [0,Invalid_argument,cst_Arg_Expand_is_is_only_allo];
                       var arg$6=get_arg(0),newarg=caml_call1(f$7,arg$6);
                       consume_arg(0);
                       var
                        before=sub$1(argv[1],0,current[1] + 1 | 0),
                        after=
                         sub$1
                          (argv[1],
                           current[1] + 1 | 0,
                           (argv[1].length - 1 - current[1] | 0) - 1 | 0);
                       argv[1]
                       =
                       caml_array_concat([0,before,[0,newarg,[0,after,0]]]);
                       return 0}}
                  return treat_action},
               treat_action=treat_action$0(s,no_arg,get_arg,consume_arg);
              treat_action(action);
              switch$0 = 1}
            if(! switch$0)caml_call1(anonfun,s)}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            if(exn$0[1] === Bad){var m=exn$0[2];throw convert_error([3,m])}
            if(exn$0[1] === Stop){var e=exn$0[2];throw convert_error(e)}
            throw exn$0;
            var exn=exn$0}
          current[1]++;
          continue}
        return 0}}
    function parse_and_expand_argv_dynamic
     (current,argv,speclist,anonfun,errmsg)
     {return parse_and_expand_argv_dynamic_
              (1,current,argv,speclist,anonfun,errmsg)}
    function parse_argv_dynamic(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_and_expand_argv_dynamic_
              (0,current$0,[0,argv],speclist,anonfun,errmsg)}
    function parse_argv(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_argv_dynamic
              ([0,current$0],argv,[0,speclist],anonfun,errmsg)}
    function parse(l,f,msg)
     {try
       {var _p9_=parse_argv(0,caml_sys_argv(0),l,f,msg);return _p9_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_bg_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_bh_),msg$1);return exit(0)}
        throw exn}}
    function parse_dynamic(l,f,msg)
     {try
       {var _p8_=parse_argv_dynamic(0,caml_sys_argv(0),l,f,msg);return _p8_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_bi_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_bj_),msg$1);return exit(0)}
        throw exn}}
    function parse_expand(l,f,msg)
     {try
       {var
         argv=[0,caml_sys_argv(0)],
         spec=[0,l],
         current$0=[0,current[1]],
         _p7_=parse_and_expand_argv_dynamic(current$0,argv,spec,f,msg);
        return _p7_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_bk_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_bl_),msg$1);return exit(0)}
        throw exn}}
    function second_word(s)
     {var len=caml_ml_string_length(s);
      function loop(n)
       {var n$0=n;
        for(;;)
         {if(len <= n$0)return len;
          if(32 === caml_string_get(s,n$0))
           {var n$1=n$0 + 1 | 0,n$0=n$1;continue}
          return n$0}}
      try
       {var n$0=index$0(s,9)}
      catch(_p5_)
       {_p5_ = caml_wrap_exception(_p5_);
        if(_p5_ === Not_found)
         {try
           {var n=index$0(s,32)}
          catch(_p6_)
           {_p6_ = caml_wrap_exception(_p6_);
            if(_p6_ === Not_found)return len;
            throw _p6_}
          return loop(n + 1 | 0)}
        throw _p5_}
      return loop(n$0 + 1 | 0)}
    function max_arg_len(cur,param)
     {var doc=param[3],spec=param[2],kwd=param[1];
      return 11 === spec[0]
              ?max$1(cur,caml_ml_string_length(kwd))
              :max$1(cur,caml_ml_string_length(kwd) + second_word(doc) | 0)}
    function replace_leading_tab(s)
     {var seen=[0,0];
      return map$6
              (function(c)
                {if(9 === c && ! seen[1]){seen[1] = 1;return 32}return c},
               s)}
    function align(opt,speclist)
     {if(opt)var sth=opt[1],limit=sth;else var limit=max_int;
      var
       completed=add_help(speclist),
       len=fold_left$0(max_arg_len,0,completed),
       len$0=min$1(len,limit);
      return map$4
              (function(ksd)
                {var _p3_=ksd[1],_p4_=ksd[2];
                 if(caml_string_notequal(ksd[3],cst$58))
                  {if(11 === _p4_[0])
                    {var
                      msg$0=ksd[3],
                      cutcol$0=second_word(msg$0),
                      spaces$0=make$1(max$1(0,len$0 - cutcol$0 | 0) + 3 | 0,32);
                     return [0,
                             _p3_,
                             _p4_,
                             cat(cst$59,cat(spaces$0,replace_leading_tab(msg$0)))]}
                   var
                    msg=ksd[3],
                    spec=ksd[2],
                    cutcol=second_word(msg),
                    kwd_len=caml_ml_string_length(_p3_),
                    diff=(len$0 - kwd_len | 0) - cutcol | 0;
                   if(0 < diff)
                    {var
                      spaces=make$1(diff,32),
                      prefix=sub$0(replace_leading_tab(msg),0,cutcol),
                      suffix=
                       sub$0(msg,cutcol,caml_ml_string_length(msg) - cutcol | 0);
                     return [0,_p3_,spec,cat(prefix,cat(spaces,suffix))]}
                   return [0,_p3_,spec,replace_leading_tab(msg)]}
                 return ksd},
               completed)}
    function read_aux(trim,sep,file)
     {var ic=open_bin$0(file),buf=create$2(200),words=[0,0];
      function stash(param)
       {var s=contents(buf);
        if(trim)
         {var len=caml_ml_string_length(s),switch$0=0;
          if(0 < len && 13 === caml_string_get(s,len - 1 | 0))
           {var _p2_=sub$0(s,0,len - 1 | 0);switch$0 = 1}
          if(! switch$0)var _p2_=s;
          var word=_p2_}
        else
         var word=s;
        words[1] = [0,word,words[1]];
        return clear$1(buf)}
      try
       {for(;;)
         {var c=caml_ml_input_char(ic);
          if(c === sep)stash(0);else add_char(buf,c);
          continue}}
      catch(_p1_)
       {_p1_ = caml_wrap_exception(_p1_);
        if(_p1_ === End_of_file)
         {if(0 < buf[2])stash(0);
          caml_ml_close_channel(ic);
          return of_list(rev(words[1]))}
        throw _p1_}}
    var _bm_=10,_bn_=1;
    function read_arg(_p0_){return read_aux(_bn_,_bm_,_p0_)}
    var _bo_=0,_bp_=0;
    function read_arg0(_pZ_){return read_aux(_bp_,_bo_,_pZ_)}
    function write_aux(sep,file,args)
     {var oc=open_bin(file);
      iter$5(function(s){return caml_call2(fprintf(oc,_bq_),s,sep)},args);
      return close(oc)}
    var _br_=10;
    function write_arg(_pX_,_pY_){return write_aux(_br_,_pX_,_pY_)}
    var _bs_=0;
    function write_arg0(_pV_,_pW_){return write_aux(_bs_,_pV_,_pW_)}
    var
     Stdlib_Arg=
      [0,
       parse,
       parse_dynamic,
       parse_argv,
       parse_argv_dynamic,
       parse_and_expand_argv_dynamic,
       parse_expand,
       Help,
       Bad,
       usage,
       usage_string,
       align,
       current,
       read_arg,
       read_arg0,
       write_arg,
       write_arg0];
    caml_register_global(809,Stdlib_Arg,"Stdlib__Arg");
    var
     Stdlib_Atomic=
      [0,make,get,set,exchange,compare_and_set,fetch_and_add,incr,decr];
    caml_register_global(810,Stdlib_Atomic,"Stdlib__Atomic");
    var printers=[0,0];
    function field(x,i)
     {var f=x[1 + i];
      return is_block(f)
              ?caml_obj_tag(f) === 252
                ?caml_call1(sprintf(_bt_),f)
                :caml_obj_tag(f) === 253?to_string(f):cst$60
              :caml_call1(sprintf(_bu_),f)}
    function other_fields(x,i)
     {if(x.length - 1 <= i)return cst$61;
      var _pT_=other_fields(x,i + 1 | 0),_pU_=field(x,i);
      return caml_call2(sprintf(_bv_),_pU_,_pT_)}
    function use_printers(x)
     {function conv(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1];
            try
             {var switch$0=0,val=caml_call1(hd,x);switch$0 = 1}
            catch(_pS_){}
            if(switch$0 && val){var s=val[1];return [0,s]}
            var param$0=tl;
            continue}
          return 0}}
      return conv(printers[1])}
    function to_string_default(x)
     {if(x === Out_of_memory)return cst_Out_of_memory;
      if(x === Stack_overflow)return cst_Stack_overflow;
      if(x[1] === Match_failure)
       {var match$0=x[2],char$0=match$0[3],line=match$0[2],file=match$0[1];
        return caml_call5
                (sprintf(locfmt),
                 file,
                 line,
                 char$0,
                 char$0 + 5 | 0,
                 cst_Pattern_matching_failed)}
      if(x[1] === Assert_failure)
       {var
         match$1=x[2],
         char$1=match$1[3],
         line$0=match$1[2],
         file$0=match$1[1];
        return caml_call5
                (sprintf(locfmt),
                 file$0,
                 line$0,
                 char$1,
                 char$1 + 6 | 0,
                 cst_Assertion_failed)}
      if(x[1] === Undefined_recursive_module)
       {var
         match$2=x[2],
         char$2=match$2[3],
         line$1=match$2[2],
         file$1=match$2[1];
        return caml_call5
                (sprintf(locfmt),
                 file$1,
                 line$1,
                 char$2,
                 char$2 + 6 | 0,
                 cst_Undefined_recursive_module)}
      if(0 === caml_obj_tag(x))
       {var constructor=x[1][1],match=x.length - 1;
        if(2 < match >>> 0)
         var
          _pO_=other_fields(x,2),
          _pP_=field(x,1),
          _pR_=caml_call2(sprintf(_bw_),_pP_,_pO_);
        else
         switch(match)
          {case 0:var _pR_=cst$62;break;
           case 1:var _pR_=cst$63;break;
           default:var _pQ_=field(x,1),_pR_=caml_call1(sprintf(_bx_),_pQ_)}
        return cat(constructor,_pR_)}
      return x[1]}
    function to_string$6(e)
     {var match=use_printers(e);
      if(match){var s=match[1];return s}
      return to_string_default(e)}
    function print(fct,arg)
     {try
       {var _pN_=caml_call1(fct,arg);return _pN_}
      catch(x)
       {x = caml_wrap_exception(x);
        var _pM_=to_string$6(x);
        caml_call1(eprintf(_by_),_pM_);
        caml_ml_flush(stderr);
        throw x}}
    function catch$0(fct,arg)
     {try
       {var _pL_=caml_call1(fct,arg);return _pL_}
      catch(x)
       {x = caml_wrap_exception(x);
        caml_ml_flush(stdout);
        var _pK_=to_string$6(x);
        caml_call1(eprintf(_bz_),_pK_);
        return exit(2)}}
    function raw_backtrace_entries(bt){return bt}
    function convert_raw_backtrace(bt)
     {return [0,runtime.caml_convert_raw_backtrace(bt)]}
    function format_backtrace_slot(pos,slot)
     {function info(is_raise)
       {return is_raise
                ?0 === pos?cst_Raised_at:cst_Re_raised_at
                :0 === pos?cst_Raised_by_primitive_operat:cst_Called_from}
      if(0 === slot[0])
       {var
         _pC_=slot[5],
         _pD_=slot[4],
         _pE_=slot[3],
         _pF_=slot[6]?cst_inlined:cst$64,
         _pG_=slot[2],
         _pH_=slot[7],
         _pI_=info(slot[1]);
        return [0,
                caml_call7(sprintf(_bA_),_pI_,_pH_,_pG_,_pF_,_pE_,_pD_,_pC_)]}
      if(slot[1])return 0;
      var _pJ_=info(0);
      return [0,caml_call1(sprintf(_bB_),_pJ_)]}
    function print_raw_backtrace(outchan,raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],_pA_=a.length - 1 - 1 | 0,_pz_=0;
        if(! (_pA_ < 0))
         {var i=_pz_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(fprintf(outchan,_bC_),str)}
            var _pB_=i + 1 | 0;
            if(_pA_ !== i){var i=_pB_;continue}
            break}}
        return 0}
      return fprintf(outchan,_bD_)}
    function print_backtrace(outchan)
     {return print_raw_backtrace(outchan,caml_get_exception_raw_backtra(0))}
    function raw_backtrace_to_string(raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],b=create$2(1024),_px_=a.length - 1 - 1 | 0,_pw_=0;
        if(! (_px_ < 0))
         {var i=_pw_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(bprintf(b,_bE_),str)}
            var _py_=i + 1 | 0;
            if(_px_ !== i){var i=_py_;continue}
            break}}
        return contents(b)}
      return cst_Program_not_linked_with_g_}
    function backtrace_slot_is_raise(param)
     {return 0 === param[0]?param[1]:param[1]}
    function backtrace_slot_is_inline(param){return 0 === param[0]?param[6]:0}
    function backtrace_slot_location(param)
     {return 0 === param[0]?[0,[0,param[2],param[3],param[4],param[5]]]:0}
    function backtrace_slot_defname(param)
     {if(0 === param[0] && caml_string_notequal(param[7],cst$65))
       return [0,param[7]];
      return 0}
    function backtrace_slots(raw_backtrace)
     {var match=convert_raw_backtrace(raw_backtrace);
      if(match)
       {var backtrace=match[1],i$1=backtrace.length - 1 - 1 | 0,i=i$1;
        for(;;)
         {if(-1 === i)
           var _pv_=0;
          else
           {var
             param=caml_check_bound(backtrace,i)[1 + i],
             _pu_=0 === param[0]?1:0;
            if(! _pu_){var i$0=i - 1 | 0,i=i$0;continue}
            var _pv_=_pu_}
          return _pv_?[0,backtrace]:0}}
      return 0}
    function backtrace_slots_of_raw_entry(entry)
     {return backtrace_slots([0,entry])}
    function raw_backtrace_length(bt){return bt.length - 1}
    function get_backtrace(param)
     {return raw_backtrace_to_string(caml_get_exception_raw_backtra(0))}
    function register_printer(fn)
     {for(;;)
       {var
         old_printers=printers[1],
         new_printers=[0,fn,old_printers],
         success=compare_and_set(printers,old_printers,new_printers),
         _pt_=1 - success;
        if(_pt_)continue;
        return _pt_}}
    function exn_slot(x){return 0 === caml_obj_tag(x)?x[1]:x}
    function exn_slot_id(x){var slot=exn_slot(x);return slot[2]}
    function exn_slot_name(x){var slot=exn_slot(x);return slot[1]}
    var errors=_bF_.slice();
    function default_uncaught_exception_han(exn,raw_backtrace)
     {var _pr_=to_string$6(exn);
      caml_call1(eprintf(_bG_),_pr_);
      print_raw_backtrace(stderr,raw_backtrace);
      var status=runtime.caml_ml_debug_info_status(0);
      if(status < 0)
       {var _ps_=abs(status);
        prerr_endline(caml_check_bound(errors,_ps_)[1 + _ps_])}
      return caml_ml_flush(stderr)}
    var uncaught_exception_handler=[0,default_uncaught_exception_han];
    function set_uncaught_exception_handler(fn)
     {uncaught_exception_handler[1] = fn;return 0}
    var empty_backtrace=[0];
    function handle_uncaught_exception(exn,debugger_in_use)
     {try
       {try
         {var
           raw_backtrace=
            debugger_in_use?empty_backtrace:caml_get_exception_raw_backtra(0);
          try {do_at_exit(0)}catch(_pq_){}
          try
           {var
             _pm_=caml_call2(uncaught_exception_handler[1],exn,raw_backtrace),
             _pl_=_pm_}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            var
             raw_backtrace$0=caml_get_exception_raw_backtra(0),
             _pj_=to_string$6(exn);
            caml_call1(eprintf(_bH_),_pj_);
            print_raw_backtrace(stderr,raw_backtrace);
            var _pk_=to_string$6(exn$0);
            caml_call1(eprintf(_bI_),_pk_);
            print_raw_backtrace(stderr,raw_backtrace$0);
            var _pl_=caml_ml_flush(stderr)}
          var _pn_=_pl_}
        catch(_pp_)
         {_pp_ = caml_wrap_exception(_pp_);
          if(_pp_ !== Out_of_memory)throw _pp_;
          var _pn_=prerr_endline(cst_Fatal_error_out_of_memory_)}
        return _pn_}
      catch(_po_){return 0}}
    caml_register_named_value
     (caml_string_of_jsbytes("Printexc.handle_uncaught_exception"),
      handle_uncaught_exception);
    function _bJ_(_pi_){return runtime.caml_raw_backtrace_next_slot(_pi_)}
    function _bK_(_ph_){return runtime.caml_convert_raw_backtrace_slot(_ph_)}
    function _bL_(_pg_,_pf_)
     {return runtime.caml_raw_backtrace_slot(_pg_,_pf_)}
    var
     _bM_=
      [0,
       backtrace_slot_is_raise,
       backtrace_slot_is_inline,
       backtrace_slot_location,
       backtrace_slot_defname,
       format_backtrace_slot];
    function _bN_(_pe_){return caml_get_exception_raw_backtra(_pe_)}
    function _bO_(_pd_){return runtime.caml_backtrace_status(_pd_)}
    var
     Stdlib_Printexc=
      [0,
       to_string$6,
       to_string_default,
       print,
       catch$0,
       print_backtrace,
       get_backtrace,
       function(_pc_){return runtime.caml_record_backtrace(_pc_)},
       _bO_,
       register_printer,
       use_printers,
       raw_backtrace_entries,
       _bN_,
       print_raw_backtrace,
       raw_backtrace_to_string,
       default_uncaught_exception_han,
       set_uncaught_exception_handler,
       backtrace_slots,
       backtrace_slots_of_raw_entry,
       _bM_,
       raw_backtrace_length,
       _bL_,
       _bK_,
       _bJ_,
       exn_slot_id,
       exn_slot_name];
    caml_register_global(811,Stdlib_Printexc,"Stdlib__Printexc");
    function const$0(c,param){return c}
    function flip(f,x,y){return caml_call2(f,y,x)}
    function negate(p,v){return 1 - caml_call1(p,v)}
    var
     Finally_raised=
      [248,cst_Stdlib_Fun_Finally_raised,caml_fresh_oo_id(0)];
    register_printer
     (function(param)
       {if(param[1] === Finally_raised)
         {var exn=param[2];
          return [0,cat(cst_Fun_Finally_raised,to_string$6(exn))]}
        return 0});
    function protect(finally$0,work)
     {function finally_no_exn(param)
       {try
         {var _pb_=caml_call1(finally$0,0);return _pb_}
        catch(e)
         {e = caml_wrap_exception(e);
          var bt=caml_get_exception_raw_backtra(0),exn=[0,Finally_raised,e];
          caml_restore_raw_backtrace(exn,bt);
          throw exn}}
      try
       {var result=caml_call1(work,0)}
      catch(work_exn)
       {work_exn = caml_wrap_exception(work_exn);
        var work_bt=caml_get_exception_raw_backtra(0);
        finally_no_exn(0);
        caml_restore_raw_backtrace(work_exn,work_bt);
        throw work_exn}
      finally_no_exn(0);
      return result}
    var Stdlib_Fun=[0,const$0,flip,negate,protect,Finally_raised];
    caml_register_global(812,Stdlib_Fun,"Stdlib__Fun");
    function print_stat(c)
     {var st=runtime.caml_gc_stat(0),_oV_=st[4];
      caml_call1(fprintf(c,_bP_),_oV_);
      var _oW_=st[5];
      caml_call1(fprintf(c,_bQ_),_oW_);
      var _oX_=st[14];
      caml_call1(fprintf(c,_bR_),_oX_);
      var _oY_=st[17];
      caml_call1(fprintf(c,_bS_),_oY_);
      fprintf(c,_bT_);
      var
       _oZ_=st[1],
       l1=caml_ml_string_length(caml_call1(sprintf(_bU_),_oZ_)),
       _o0_=st[1];
      caml_call2(fprintf(c,_bV_),l1,_o0_);
      var _o1_=st[2];
      caml_call2(fprintf(c,_bW_),l1,_o1_);
      var _o2_=st[3];
      caml_call2(fprintf(c,_bX_),l1,_o2_);
      fprintf(c,_bY_);
      var
       _o3_=st[15],
       l2=caml_ml_string_length(caml_call1(sprintf(_bZ_),_o3_)),
       _o4_=st[15];
      caml_call2(fprintf(c,_b0_),l2,_o4_);
      var _o5_=st[6];
      caml_call2(fprintf(c,_b1_),l2,_o5_);
      var _o6_=st[8];
      caml_call2(fprintf(c,_b2_),l2,_o6_);
      var _o7_=st[10];
      caml_call2(fprintf(c,_b3_),l2,_o7_);
      var _o8_=st[12];
      caml_call2(fprintf(c,_b4_),l2,_o8_);
      var _o9_=st[13];
      caml_call2(fprintf(c,_b5_),l2,_o9_);
      fprintf(c,_b6_);
      var _o__=st[9];
      caml_call1(fprintf(c,_b7_),_o__);
      var _o$_=st[11];
      caml_call1(fprintf(c,_b8_),_o$_);
      var _pa_=st[7];
      return caml_call1(fprintf(c,_b9_),_pa_)}
    function allocated_bytes(param)
     {var
       match=runtime.caml_gc_counters(0),
       ma=match[3],
       pro=match[2],
       mi=match[1];
      return (mi + ma - pro) * 4}
    function create_alarm(f){return [0,1]}
    function delete_alarm(a){a[1] = 0;return 0}
    function _b__(param){return 0}
    function _b$_(param){return 0}
    function _ca_(param){return 0}
    function _cb_(param){return 0}
    var null_tracker=[0,function(param){return 0},_cb_,_ca_,_b$_,_b__];
    function start(sampling_rate,opt,tracker)
     {if(opt)
       var sth=opt[1],callstack_size=sth;
      else
       var callstack_size=max_int;
      return runtime.caml_memprof_start(sampling_rate,callstack_size,tracker)}
    var _cc_=[0,null_tracker,start,runtime.caml_memprof_stop];
    function _cd_(_oU_){return runtime.caml_final_release(_oU_)}
    function _ce_(_oT_,_oS_)
     {return runtime.caml_final_register_called_without_value(_oT_,_oS_)}
    var
     Stdlib_Gc=
      [0,
       print_stat,
       allocated_bytes,
       function(_oR_,_oQ_){return runtime.caml_final_register(_oR_,_oQ_)},
       _ce_,
       _cd_,
       create_alarm,
       delete_alarm,
       _cc_];
    caml_register_global(813,Stdlib_Gc,"Stdlib__Gc");
    function string(str)
     {return caml_md5_string(str,0,caml_ml_string_length(str))}
    function bytes(b){return string(caml_string_of_bytes(b))}
    function substring(str,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_string_length(str) - len | 0) < ofs))
       return caml_md5_string(str,ofs,len);
      return invalid_arg(cst_Digest_substring)}
    function subbytes(b,ofs,len)
     {return substring(caml_string_of_bytes(b),ofs,len)}
    function file(filename)
     {var ic=open_bin$0(filename);
      try
       {var d=runtime.caml_md5_chan(ic,-1)}
      catch(e){e = caml_wrap_exception(e);caml_ml_close_channel(ic);throw e}
      caml_ml_close_channel(ic);
      return d}
    function output$0(chan,digest){return output_string(chan,digest)}
    function input$0(chan){return really_input_string(chan,16)}
    function char_hex(n){var _oP_=10 <= n?87:48;return n + _oP_ | 0}
    function to_hex(d)
     {if(16 !== caml_ml_string_length(d))invalid_arg(cst_Digest_to_hex);
      var result=caml_create_bytes(32),i=0;
      for(;;)
       {var x=caml_string_get(d,i);
        caml_bytes_unsafe_set(result,i * 2 | 0,char_hex(x >>> 4 | 0));
        caml_bytes_unsafe_set(result,(i * 2 | 0) + 1 | 0,char_hex(x & 15));
        var _oO_=i + 1 | 0;
        if(15 !== i){var i=_oO_;continue}
        return caml_string_of_bytes(result)}}
    function from_hex(s)
     {if(32 !== caml_ml_string_length(s))invalid_arg(cst_Digest_from_hex);
      function digit(c)
       {if(65 <= c)
         {if(97 <= c)
           {if(! (103 <= c))return (c - 97 | 0) + 10 | 0}
          else
           if(! (71 <= c))return (c - 65 | 0) + 10 | 0}
        else
         if(! (9 < c - 48 >>> 0))return c - 48 | 0;
        throw [0,Invalid_argument,cst_Digest_from_hex$0]}
      var result=caml_create_bytes(16),i=0;
      for(;;)
       {var i$0=2 * i | 0,_oM_=digit(caml_string_get(s,i$0 + 1 | 0));
        caml_bytes_set
         (result,i,chr((digit(caml_string_get(s,i$0)) << 4) + _oM_ | 0));
        var _oN_=i + 1 | 0;
        if(15 !== i){var i=_oN_;continue}
        return caml_string_of_bytes(result)}}
    var
     Stdlib_Digest=
      [0,
       compare$9,
       equal$9,
       string,
       bytes,
       substring,
       subbytes,
       file,
       output$0,
       input$0,
       to_hex,
       from_hex];
    caml_register_global(814,Stdlib_Digest,"Stdlib__Digest");
    function new_state(param){return [0,caml_make_vect(55,0),0]}
    function assign(st1,st2)
     {blit$1(st2[1],0,st1[1],0,55);st1[2] = st2[2];return 0}
    function full_init(s,seed)
     {var seed$0=0 === seed.length - 1?[0,0]:seed,l=seed$0.length - 1,i$0=0;
      for(;;)
       {caml_check_bound(s[1],i$0)[1 + i$0] = i$0;
        var _oL_=i$0 + 1 | 0;
        if(54 !== i$0){var i$0=_oL_;continue}
        var accu=[0,cst_x$1],_oH_=54 + max$1(55,l) | 0,_oG_=0;
        if(! (_oH_ < 0))
         {var i=_oG_;
          for(;;)
           {var
             j=i % 55 | 0,
             k=caml_mod(i,l),
             x=caml_check_bound(seed$0,k)[1 + k];
            accu[1] = string(cat(accu[1],caml_string_of_jsbytes("" + x)));
            var
             _oI_=accu[1],
             _oC_=caml_string_get(_oI_,3) << 24,
             _oD_=caml_string_get(_oI_,2) << 16,
             _oE_=caml_string_get(_oI_,1) << 8,
             _oF_=((caml_string_get(_oI_,0) + _oE_ | 0) + _oD_ | 0) + _oC_ | 0,
             _oJ_=(caml_check_bound(s[1],j)[1 + j] ^ _oF_) & 1073741823;
            caml_check_bound(s[1],j)[1 + j] = _oJ_;
            var _oK_=i + 1 | 0;
            if(_oH_ !== i){var i=_oK_;continue}
            break}}
        s[2] = 0;
        return 0}}
    function make$3(seed)
     {var result=new_state(0);full_init(result,seed);return result}
    function make_self_init(param){return make$3(caml_sys_random_seed(0))}
    function copy$5(s){var result=new_state(0);assign(result,s);return result}
    function bits(s)
     {s[2] = (s[2] + 1 | 0) % 55 | 0;
      var
       _oz_=s[2],
       curval=caml_check_bound(s[1],_oz_)[1 + _oz_],
       _oA_=(s[2] + 24 | 0) % 55 | 0,
       newval=
        caml_check_bound(s[1],_oA_)[1 + _oA_]
        +
        (curval ^ (curval >>> 25 | 0) & 31)
        |
        0,
       newval30=newval & 1073741823,
       _oB_=s[2];
      caml_check_bound(s[1],_oB_)[1 + _oB_] = newval30;
      return newval30}
    function intaux(s,n)
     {for(;;)
       {var r=bits(s),v=caml_mod(r,n);
        if(((1073741823 - n | 0) + 1 | 0) < (r - v | 0))continue;
        return v}}
    function int$0(s,bound)
     {if(! (1073741823 < bound) && 0 < bound)return intaux(s,bound);
      return invalid_arg(cst_Random_int)}
    function full_int(s,bound)
     {if(0 < bound)
       {if(1073741823 < bound)
         for(;;)
          {var b1=bits(s),b2=bits(s);
           if(bound <= 2147483647)
            var bpos=(b2 & 1073725440) << 1 | b1 >>> 15 | 0,r=bpos;
           else
            var
             b3=bits(s),
             bpos$0=
              ((b3 & 1073741312) << 12 | b2 >>> 9 | 0)
              <<
              20
              |
              b1
              >>>
              10
              |
              0,
             r=bpos$0;
           var v=caml_mod(r,bound);
           if(((2147483647 - bound | 0) + 1 | 0) < (r - v | 0))continue;
           return v}
        return intaux(s,bound)}
      return invalid_arg(cst_Random_full_int)}
    function int32(s,bound)
     {if(caml_lessequal(bound,0))return invalid_arg(cst_Random_int32);
      for(;;)
       {var b1=bits(s),b2=(bits(s) & 1) << 30,r=b1 | b2,v=caml_mod(r,bound);
        if(caml_greaterthan(r - v | 0,(2147483647 - bound | 0) + 1 | 0))
         continue;
        return v}}
    function int64(s,bound)
     {if(caml_lessequal(bound,_cg_))return invalid_arg(cst_Random_int64);
      for(;;)
       {var
         b1=caml_int64_of_int32(bits(s)),
         b2=caml_int64_shift_left(caml_int64_of_int32(bits(s)),30),
         b3=caml_int64_shift_left(caml_int64_of_int32(bits(s) & 7),60),
         r=caml_int64_or(b1,caml_int64_or(b2,b3)),
         v=runtime.caml_int64_mod(r,bound);
        if
         (caml_greaterthan
           (caml_int64_sub(r,v),
            caml_int64_add(caml_int64_sub(max_int$2,bound),_cf_)))
         continue;
        return v}}
    function nativeint(s,bound){return int32(s,bound)}
    function float$0(s,bound)
     {var r1=bits(s),r2=bits(s);
      return (r1 / 1073741824. + r2) / 1073741824. * bound}
    function bool(s){return 0 === (bits(s) & 1)?1:0}
    function bits32(s)
     {var b1=bits(s) >>> 14 | 0,b2=bits(s) >>> 14 | 0;return b1 | b2 << 16}
    function bits64(s)
     {var
       b1=caml_int64_shift_right_unsigne(caml_int64_of_int32(bits(s)),9),
       b2=caml_int64_shift_right_unsigne(caml_int64_of_int32(bits(s)),9),
       b3=caml_int64_shift_right_unsigne(caml_int64_of_int32(bits(s)),8);
      return caml_int64_or
              (b1,
               caml_int64_or
                (caml_int64_shift_left(b2,21),caml_int64_shift_left(b3,42)))}
    function nativebits(s){return bits32(s)}
    var default$0=[0,_ch_.slice(),0];
    function bits$0(param){return bits(default$0)}
    function int$1(bound){return int$0(default$0,bound)}
    function full_int$0(bound){return full_int(default$0,bound)}
    function int32$0(bound){return int32(default$0,bound)}
    function nativeint$0(bound){return nativeint(default$0,bound)}
    function int64$0(bound){return int64(default$0,bound)}
    function float$1(scale){return float$0(default$0,scale)}
    function bool$0(param){return bool(default$0)}
    function bits32$0(param){return bits32(default$0)}
    function bits64$0(param){return bits64(default$0)}
    function nativebits$0(param){return nativebits(default$0)}
    function full_init$0(seed){return full_init(default$0,seed)}
    function init$5(seed){return full_init(default$0,[0,seed])}
    function self_init(param){return full_init$0(caml_sys_random_seed(0))}
    function get_state(param){return copy$5(default$0)}
    function set_state(s){return assign(default$0,s)}
    var
     _ci_=
      [0,
       make$3,
       make_self_init,
       copy$5,
       bits,
       int$0,
       full_int,
       int32,
       nativeint,
       int64,
       float$0,
       bool,
       bits32,
       bits64,
       nativebits],
     Stdlib_Random=
      [0,
       init$5,
       full_init$0,
       self_init,
       bits$0,
       int$1,
       full_int$0,
       int32$0,
       nativeint$0,
       int64$0,
       float$1,
       bool$0,
       bits32$0,
       bits64$0,
       nativebits$0,
       _ci_,
       get_state,
       set_state];
    caml_register_global(815,Stdlib_Random,"Stdlib__Random");
    function ongoing_traversal(h)
     {var _ox_=h.length - 1 < 4?1:0,_oy_=_ox_ || (h[4] < 0?1:0);return _oy_}
    function flip_ongoing_traversal(h){h[4] = - h[4] | 0;return 0}
    try
     {var _c5_=caml_sys_getenv(cst_OCAMLRUNPARAM),params=_c5_}
    catch(_ov_)
     {_ov_ = caml_wrap_exception(_ov_);
      if(_ov_ !== Not_found)throw _ov_;
      try
       {var _c4_=caml_sys_getenv(cst_CAMLRUNPARAM),_cj_=_c4_}
      catch(_ow_)
       {_ow_ = caml_wrap_exception(_ow_);
        if(_ow_ !== Not_found)throw _ow_;
        var _cj_=cst$66}
      var params=_cj_}
    var
     randomized_default=contains$0(params,82),
     randomized=[0,randomized_default];
    function randomize(param){randomized[1] = 1;return 0}
    function is_randomized(param){return randomized[1]}
    var prng=[246,function(_ou_){return caml_call1(_ci_[2],0)}];
    function power_2_above(x,n)
     {var x$0=x;
      for(;;)
       {if(n <= x$0)return x$0;
        if(max_array_length < (x$0 * 2 | 0))return x$0;
        var x$1=x$0 * 2 | 0,x$0=x$1;
        continue}}
    function create$3(opt,initial_size)
     {if(opt)var sth=opt[1],random=sth;else var random=randomized[1];
      var s=power_2_above(16,initial_size);
      if(random)
       var
        _os_=caml_obj_tag(prng),
        _ot_=250 === _os_?prng[1]:246 === _os_?force_lazy_block(prng):prng,
        seed=caml_call1(_ci_[4],_ot_);
      else
       var seed=0;
      return [0,0,caml_make_vect(s,0),seed,s]}
    function clear$2(h)
     {var _or_=0 < h[1]?1:0;
      return _or_?(h[1] = 0,fill$0(h[2],0,h[2].length - 1,0)):_or_}
    function reset$0(h)
     {var len=h[2].length - 1;
      if(4 <= h.length - 1 && len !== abs(h[4]))
       {h[1] = 0;h[2] = caml_make_vect(abs(h[4]),0);return 0}
      return clear$2(h)}
    function copy_bucketlist(param)
     {if(param)
       {var
         key=param[1],
         data=param[2],
         next=param[3],
         prec$0=[0,key,data,next],
         prec=prec$0,
         param$0=next;
        for(;;)
         {if(param$0)
           {var
             key$0=param$0[1],
             data$0=param$0[2],
             next$0=param$0[3],
             r=[0,key$0,data$0,next$0];
            prec[3] = r;
            var prec=r,param$0=next$0;
            continue}
          return prec$0}}
      return 0}
    function copy$6(init)
     {var _oo_=init[4],_op_=init[3],_oq_=map$7(copy_bucketlist,init[2]);
      return [0,init[1],_oq_,_op_,_oo_]}
    function length$5(h){return h[1]}
    function insert_all_buckets(indexfun,inplace,odata,ndata)
     {var
       nsize=ndata.length - 1,
       ndata_tail=caml_make_vect(nsize,0),
       _oi_=odata.length - 1 - 1 | 0,
       _oh_=0;
      if(! (_oi_ < 0))
       {var i$0=_oh_;
        a:
        for(;;)
         {var cell$1=caml_check_bound(odata,i$0)[1 + i$0],cell=cell$1;
          for(;;)
           {if(cell)
             {var
               key=cell[1],
               data=cell[2],
               next=cell[3],
               cell$0=inplace?cell:[0,key,data,0],
               nidx=caml_call1(indexfun,key),
               match=caml_check_bound(ndata_tail,nidx)[1 + nidx];
              if(match)
               match[3] = cell$0;
              else
               caml_check_bound(ndata,nidx)[1 + nidx] = cell$0;
              caml_check_bound(ndata_tail,nidx)[1 + nidx] = cell$0;
              var cell=next;
              continue}
            var _on_=i$0 + 1 | 0;
            if(_oi_ !== i$0){var i$0=_on_;continue a}
            break}
          break}}
      if(inplace)
       {var _ok_=nsize - 1 | 0,_oj_=0;
        if(! (_ok_ < 0))
         {var i=_oj_;
          for(;;)
           {var match$0=caml_check_bound(ndata_tail,i)[1 + i];
            if(match$0)match$0[3] = 0;
            var _om_=i + 1 | 0;
            if(_ok_ !== i){var i=_om_;continue}
            break}}
        var _ol_=0}
      else
       var _ol_=inplace;
      return _ol_}
    function resize$0(indexfun,h)
     {var
       odata=h[2],
       osize=odata.length - 1,
       nsize=osize * 2 | 0,
       _og_=nsize < max_array_length?1:0;
      if(_og_)
       {var ndata=caml_make_vect(nsize,0),inplace=1 - ongoing_traversal(h);
        h[2] = ndata;
        return insert_all_buckets(caml_call1(indexfun,h),inplace,odata,ndata)}
      return _og_}
    function iter$10(f,h)
     {function do_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var key=param$0[1],data=param$0[2],next=param$0[3];
            caml_call2(f,key,data);
            var param$0=next;
            continue}
          return 0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],_oc_=d.length - 1 - 1 | 0,_ob_=0;
        if(! (_oc_ < 0))
         {var i=_ob_;
          for(;;)
           {do_bucket(caml_check_bound(d,i)[1 + i]);
            var _of_=i + 1 | 0;
            if(_oc_ !== i){var i=_of_;continue}
            break}}
        var _od_=1 - old_trav,_oe_=_od_?flip_ongoing_traversal(h):_od_;
        return _oe_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function filter_map_inplace_bucket(f,h,i,prec,slot)
     {var prec$0=prec,slot$0=slot;
      for(;;)
       {if(slot$0)
         {var
           key=slot$0[1],
           data=slot$0[2],
           next=slot$0[3],
           match=caml_call2(f,key,data);
          if(match)
           {var data$0=match[1];
            if(prec$0)
             prec$0[3] = slot$0;
            else
             caml_check_bound(h[2],i)[1 + i] = slot$0;
            slot$0[2] = data$0;
            var prec$0=slot$0,slot$0=next;
            continue}
          h[1] = h[1] - 1 | 0;
          var slot$0=next;
          continue}
        return prec$0
                ?(prec$0[3] = 0,0)
                :(caml_check_bound(h[2],i)[1 + i] = 0,0)}}
    function filter_map_inplace(f,h)
     {var d=h[2],old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var _n9_=d.length - 1 - 1 | 0,_n8_=0;
        if(! (_n9_ < 0))
         {var i=_n8_;
          for(;;)
           {filter_map_inplace_bucket(f,h,i,0,caml_check_bound(h[2],i)[1 + i]);
            var _oa_=i + 1 | 0;
            if(_n9_ !== i){var i=_oa_;continue}
            break}}
        var _n__=1 - old_trav,_n$_=_n__?flip_ongoing_traversal(h):_n__;
        return _n$_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function fold$4(f,h,init)
     {function do_bucket(b,accu)
       {var b$0=b,accu$0=accu;
        for(;;)
         {if(b$0)
           {var
             key=b$0[1],
             data=b$0[2],
             next=b$0[3],
             accu$1=caml_call3(f,key,data,accu$0),
             b$0=next,
             accu$0=accu$1;
            continue}
          return accu$0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],accu=[0,init],_n4_=d.length - 1 - 1 | 0,_n3_=0;
        if(! (_n4_ < 0))
         {var i=_n3_;
          for(;;)
           {var _n6_=accu[1];
            accu[1] = do_bucket(caml_check_bound(d,i)[1 + i],_n6_);
            var _n7_=i + 1 | 0;
            if(_n4_ !== i){var i=_n7_;continue}
            break}}
        if(1 - old_trav)flip_ongoing_traversal(h);
        var _n5_=accu[1];
        return _n5_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function bucket_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[3],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function stats(h)
     {var
       _nZ_=h[2],
       _n0_=0,
       mbl=
        fold_left$3
         (function(m,b){return max$1(m,bucket_length(0,b))},_n0_,_nZ_),
       histo=caml_make_vect(mbl + 1 | 0,0),
       _n1_=h[2];
      iter$5
       (function(b)
         {var
           l=bucket_length(0,b),
           _n2_=caml_check_bound(histo,l)[1 + l] + 1 | 0;
          caml_check_bound(histo,l)[1 + l] = _n2_;
          return 0},
        _n1_);
      return [0,h[1],h[2].length - 1,mbl,histo]}
    function to_seq$9(tbl)
     {var tbl_data=tbl[2];
      function aux(i,buck,param)
       {var i$0=i,buck$0=buck;
        for(;;)
         {if(buck$0)
           {var key=buck$0[1],data=buck$0[2],next=buck$0[3];
            return [0,[0,key,data],function(_nY_){return aux(i$0,next,_nY_)}]}
          if(i$0 === tbl_data.length - 1)return 0;
          var
           buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           buck$0=buck$1;
          continue}}
      var _nV_=0,_nW_=0;
      return function(_nX_){return aux(_nW_,_nV_,_nX_)}}
    function to_seq_keys(m)
     {var _nR_=to_seq$9(m);
      function _nS_(_nU_){return _nU_[1]}
      return function(_nT_){return map$1(_nS_,_nR_,_nT_)}}
    function to_seq_values(m)
     {var _nN_=to_seq$9(m);
      function _nO_(_nQ_){return _nQ_[2]}
      return function(_nP_){return map$1(_nO_,_nN_,_nP_)}}
    function MakeSeeded(H)
     {function key_index(h,key)
       {var _nM_=h[2].length - 1 - 1 | 0;
        return caml_call2(H[2],h[3],key) & _nM_}
      function add(h,key,data)
       {var
         i=key_index(h,key),
         bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _nL_=h[2].length - 1 << 1 < h[1]?1:0;
        return _nL_?resize$0(key_index,h):_nL_}
      function remove(h,key)
       {var
         i=key_index(h,key),
         c$0=caml_check_bound(h[2],i)[1 + i],
         prec=0,
         c=c$0;
        for(;;)
         {if(c)
           {var k=c[1],next=c[3];
            if(caml_call2(H[1],k,key))
             {h[1] = h[1] - 1 | 0;
              return prec
                      ?(prec[3] = next,0)
                      :(caml_check_bound(h[2],i)[1 + i] = next,0)}
            var prec=c,c=next;
            continue}
          return 0}}
      function find(h,key)
       {var _nK_=key_index(h,key),match=caml_check_bound(h[2],_nK_)[1 + _nK_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return d1;
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return d2;
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return d3;
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return data;
                  var param=next;
                  continue}
                throw Not_found}}
            throw Not_found}
          throw Not_found}
        throw Not_found}
      function find_opt(h,key)
       {var _nJ_=key_index(h,key),match=caml_check_bound(h[2],_nJ_)[1 + _nJ_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return [0,d1];
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return [0,d2];
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return [0,d3];
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return [0,data];
                  var param=next;
                  continue}
                return 0}}
            return 0}
          return 0}
        return 0}
      function find_all(h,key)
       {function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var k=param$0[1],d=param$0[2],next=param$0[3];
              if(caml_call2(H[1],k,key))return [0,d,find_in_bucket(next)];
              var param$0=next;
              continue}
            return 0}}
        var _nI_=key_index(h,key);
        return find_in_bucket(caml_check_bound(h[2],_nI_)[1 + _nI_])}
      function replace(h,key,data)
       {var
         i=key_index(h,key),
         param$0=caml_check_bound(h[2],i)[1 + i],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3];
            if(! caml_call2(H[1],k,key)){var param=next;continue}
            param[1] = key;
            param[2] = data;
            var _nF_=0}
          else
           var _nF_=1;
          if(_nF_)
           {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
            h[1] = h[1] + 1 | 0;
            var _nG_=h[2].length - 1 << 1 < h[1]?1:0;
            if(_nG_)return resize$0(key_index,h);
            var _nH_=_nG_}
          else
           var _nH_=_nF_;
          return _nH_}}
      function mem(h,key)
       {var
         _nE_=key_index(h,key),
         param$0=caml_check_bound(h[2],_nE_)[1 + _nE_],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3],_nD_=caml_call2(H[1],k,key);
            if(_nD_)return _nD_;
            var param=next;
            continue}
          return 0}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create$3,
              clear$2,
              reset$0,
              copy$6,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$10,
              filter_map_inplace,
              fold$4,
              length$5,
              stats,
              to_seq$9,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    function Make$0(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       _nC_=include[1];
      function create(sz){return caml_call2(_nC_,_ck_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    function hash$1(x){return caml_hash(10,100,0,x)}
    function hash_param(n1,n2,x){return caml_hash(n1,n2,0,x)}
    function seeded_hash(seed,x){return caml_hash(10,100,seed,x)}
    function key_index(h,key)
     {return 4 <= h.length - 1
              ?caml_hash(10,100,h[3],key) & (h[2].length - 1 - 1 | 0)
              :invalid_arg(cst_Hashtbl_unsupported_hash_t)}
    function add$0(h,key,data)
     {var
       i=key_index(h,key),
       bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
      caml_check_bound(h[2],i)[1 + i] = bucket;
      h[1] = h[1] + 1 | 0;
      var _nB_=h[2].length - 1 << 1 < h[1]?1:0;
      return _nB_?resize$0(key_index,h):_nB_}
    function remove(h,key)
     {var i=key_index(h,key),c$0=caml_check_bound(h[2],i)[1 + i],prec=0,c=c$0;
      for(;;)
       {if(c)
         {var k=c[1],next=c[3];
          if(0 === caml_compare(k,key))
           {h[1] = h[1] - 1 | 0;
            return prec
                    ?(prec[3] = next,0)
                    :(caml_check_bound(h[2],i)[1 + i] = next,0)}
          var prec=c,c=next;
          continue}
        return 0}}
    function find$1(h,key)
     {var _nA_=key_index(h,key),match=caml_check_bound(h[2],_nA_)[1 + _nA_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return d1;
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return d2;
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return d3;
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return data;
                var param=next;
                continue}
              throw Not_found}}
          throw Not_found}
        throw Not_found}
      throw Not_found}
    function find_opt$1(h,key)
     {var _nz_=key_index(h,key),match=caml_check_bound(h[2],_nz_)[1 + _nz_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return [0,d1];
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return [0,d2];
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return [0,d3];
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return [0,data];
                var param=next;
                continue}
              return 0}}
          return 0}
        return 0}
      return 0}
    function find_all$0(h,key)
     {function find_in_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var k=param$0[1],data=param$0[2],next=param$0[3];
            if(0 === caml_compare(k,key))return [0,data,find_in_bucket(next)];
            var param$0=next;
            continue}
          return 0}}
      var _ny_=key_index(h,key);
      return find_in_bucket(caml_check_bound(h[2],_ny_)[1 + _ny_])}
    function replace(h,key,data)
     {var
       i=key_index(h,key),
       param$0=caml_check_bound(h[2],i)[1 + i],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3];
          if(0 !== caml_compare(k,key)){var param=next;continue}
          param[1] = key;
          param[2] = data;
          var _nv_=0}
        else
         var _nv_=1;
        if(_nv_)
         {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
          h[1] = h[1] + 1 | 0;
          var _nw_=h[2].length - 1 << 1 < h[1]?1:0;
          if(_nw_)return resize$0(key_index,h);
          var _nx_=_nw_}
        else
         var _nx_=_nv_;
        return _nx_}}
    function mem$2(h,key)
     {var
       _nu_=key_index(h,key),
       param$0=caml_check_bound(h[2],_nu_)[1 + _nu_],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3],_nt_=0 === caml_compare(k,key)?1:0;
          if(_nt_)return _nt_;
          var param=next;
          continue}
        return 0}}
    function add_seq$2(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return add$0(tbl,k,v)},
               i)}
    function replace_seq(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return replace(tbl,k,v)},
               i)}
    function of_seq$7(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
    function rebuild(opt,h)
     {if(opt)var sth=opt[1],random=sth;else var random=randomized[1];
      var s=power_2_above(16,h[2].length - 1);
      if(random)
       var
        _nm_=caml_obj_tag(prng),
        _nn_=250 === _nm_?prng[1]:246 === _nm_?force_lazy_block(prng):prng,
        seed=caml_call1(_ci_[4],_nn_);
      else
       var seed=4 <= h.length - 1?h[3]:0;
      var
       _no_=4 <= h.length - 1?h[4]:s,
       h$0=[0,h[1],caml_make_vect(s,0),seed,_no_],
       _np_=h$0[2],
       _nq_=h[2],
       _nr_=0;
      insert_all_buckets
       (function(_ns_){return key_index(h$0,_ns_)},_nr_,_nq_,_np_);
      return h$0}
    var
     Stdlib_Hashtbl=
      [0,
       create$3,
       clear$2,
       reset$0,
       copy$6,
       add$0,
       find$1,
       find_opt$1,
       find_all$0,
       mem$2,
       remove,
       replace,
       iter$10,
       filter_map_inplace,
       fold$4,
       length$5,
       randomize,
       is_randomized,
       rebuild,
       stats,
       to_seq$9,
       to_seq_keys,
       to_seq_values,
       add_seq$2,
       replace_seq,
       of_seq$7,
       Make$0,
       MakeSeeded,
       hash$1,
       seeded_hash,
       hash_param,
       caml_hash];
    caml_register_global(816,Stdlib_Hashtbl,"Stdlib__Hashtbl");
    function weak_create(l)
     {var _nk_=0 <= l?1:0,_nl_=_nk_?l <= _q_[15]?1:0:_nk_;
      if(1 - _nl_)invalid_arg(cst_Weak_create);
      return runtime.caml_weak_create(l)}
    function length$6(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset$0(e,o,msg)
     {var _nh_=0 <= o?1:0,_ni_=_nh_?o < length$6(e)?1:0:_nh_,_nj_=1 - _ni_;
      return _nj_?invalid_arg(msg):_nj_}
    function set$1(e,o,x)
     {raise_if_invalid_offset$0(e,o,cst_Weak_set);
      if(x){var x$0=x[1];return caml_ephe_set_key(e,o,x$0)}
      return caml_ephe_unset_key(e,o)}
    function get$2(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get);
      return runtime.caml_weak_get(e,o)}
    function get_copy(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get_copy);
      return runtime.caml_weak_get_copy(e,o)}
    function check$0(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_check);
      return runtime.caml_weak_check(e,o)}
    function blit$4(e1,o1,e2,o2,l)
     {if
       (0
        <=
        l
        &&
        0
        <=
        o1
        &&
        !
        ((length$6(e1) - l | 0) < o1)
        &&
        0
        <=
        o2
        &&
        !
        ((length$6(e2) - l | 0) < o2))
       {var
         _nf_=0 !== l?1:0,
         _ng_=_nf_?runtime.caml_weak_blit(e1,o1,e2,o2,l):_nf_;
        return _ng_}
      return invalid_arg(cst_Weak_blit)}
    function fill$2(ar,ofs,len,x)
     {if(0 <= ofs && 0 <= len && ! ((length$6(ar) - len | 0) < ofs))
       {var _nd_=(ofs + len | 0) - 1 | 0;
        if(! (_nd_ < ofs))
         {var i=ofs;
          for(;;)
           {set$1(ar,i,x);
            var _ne_=i + 1 | 0;
            if(_nd_ !== i){var i=_ne_;continue}
            break}}
        return 0}
      throw [0,Invalid_argument,cst_Weak_fill]}
    function Make$1(H)
     {var emptybucket=weak_create(0);
      function get_index(t,h){return caml_mod(h & 2147483647,t[1].length - 1)}
      var limit=7;
      function create(sz)
       {var
         sz$0=7 <= sz?sz:7,
         sz$1=max_array_length < sz$0?max_array_length:sz$0;
        return [0,
                caml_make_vect(sz$1,emptybucket),
                caml_make_vect(sz$1,[0]),
                limit,
                0,
                0]}
      function clear(t)
       {var _nb_=t[1].length - 1 - 1 | 0,_na_=0;
        if(! (_nb_ < 0))
         {var i=_na_;
          for(;;)
           {caml_check_bound(t[1],i)[1 + i] = emptybucket;
            caml_check_bound(t[2],i)[1 + i] = [0];
            var _nc_=i + 1 | 0;
            if(_nb_ !== i){var i=_nc_;continue}
            break}}
        t[3] = limit;
        t[4] = 0;
        return 0}
      function fold(f,t,init)
       {var _m$_=t[1],i=0;
        return fold_right$2
                (function(b,accu$1)
                  {var i$0=i,accu=accu$1;
                   for(;;)
                    {if(length$6(b) <= i$0)return accu;
                     var match=get$2(b,i$0);
                     if(match)
                      {var
                        v=match[1],
                        accu$0=caml_call2(f,v,accu),
                        i$1=i$0 + 1 | 0,
                        i$0=i$1,
                        accu=accu$0;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _m$_,
                 init)}
      function iter(f,t)
       {var _m__=t[1],i=0;
        return iter$5
                (function(b)
                  {var i$0=i;
                   for(;;)
                    {if(length$6(b) <= i$0)return 0;
                     var match=get$2(b,i$0);
                     if(match)
                      {var v=match[1];
                       caml_call1(f,v);
                       var i$1=i$0 + 1 | 0,i$0=i$1;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _m__)}
      function count_bucket(i,b,accu)
       {var i$0=i,accu$0=accu;
        for(;;)
         {if(length$6(b) <= i$0)return accu$0;
          var
           _m9_=check$0(b,i$0)?1:0,
           accu$1=accu$0 + _m9_ | 0,
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           accu$0=accu$1;
          continue}}
      function count(t)
       {var _m4_=0,_m5_=t[1],_m6_=0;
        return fold_right$2
                (function(_m7_,_m8_){return count_bucket(_m6_,_m7_,_m8_)},
                 _m5_,
                 _m4_)}
      function add_aux(t,setter,d,h,index)
       {var
         bucket$0=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$6(bucket$0),
         i$3=0;
        for(;;)
         {if(sz <= i$3)
           {var
             newsz=
              min$1(((3 * sz | 0) / 2 | 0) + 3 | 0,max_array_length - 2 | 0);
            if(newsz <= sz)failwith(cst_Weak_Make_hash_bucket_cann);
            var
             newbucket$0=weak_create(newsz),
             newhashes=caml_make_vect(newsz,0);
            blit$4(bucket$0,0,newbucket$0,0,sz);
            blit$1(hashes,0,newhashes,0,sz);
            caml_call3(setter,newbucket$0,sz,d);
            caml_check_bound(newhashes,sz)[1 + sz] = h;
            caml_check_bound(t[1],index)[1 + index] = newbucket$0;
            caml_check_bound(t[2],index)[1 + index] = newhashes;
            var _m0_=sz <= t[3]?1:0,_m1_=_m0_?t[3] < newsz?1:0:_m0_;
            if(_m1_)
             {t[4] = t[4] + 1 | 0;
              var i$4=0;
              for(;;)
               {var
                 _mQ_=t[5],
                 bucket=caml_check_bound(t[1],_mQ_)[1 + _mQ_],
                 _mR_=t[5],
                 hbucket=caml_check_bound(t[2],_mR_)[1 + _mR_],
                 n=length$6(bucket),
                 prev_len=(((n - 3 | 0) * 2 | 0) + 2 | 0) / 3 | 0,
                 live=count_bucket(0,bucket,0);
                if(live <= prev_len)
                 {var j$2=length$6(bucket) - 1 | 0,i$0=0,j=j$2;
                  for(;;)
                   {if(prev_len <= j)
                     {if(check$0(bucket,i$0))
                       {var i$1=i$0 + 1 | 0,i$0=i$1;continue}
                      if(check$0(bucket,j))
                       {blit$4(bucket,j,bucket,i$0,1);
                        var _mS_=caml_check_bound(hbucket,j)[1 + j];
                        caml_check_bound(hbucket,i$0)[1 + i$0] = _mS_;
                        var j$0=j - 1 | 0,i$2=i$0 + 1 | 0,i$0=i$2,j=j$0;
                        continue}
                      var j$1=j - 1 | 0,j=j$1;
                      continue}
                    if(0 === prev_len)
                     {var _mT_=t[5];
                      caml_check_bound(t[1],_mT_)[1 + _mT_] = emptybucket;
                      var _mU_=t[5];
                      caml_check_bound(t[2],_mU_)[1 + _mU_] = [0]}
                    else
                     {var newbucket=weak_create(prev_len);
                      blit$4(bucket,0,newbucket,0,prev_len);
                      var _mX_=t[5];
                      caml_check_bound(t[1],_mX_)[1 + _mX_] = newbucket;
                      var _mY_=sub$1(hbucket,0,prev_len),_mZ_=t[5];
                      caml_check_bound(t[2],_mZ_)[1 + _mZ_] = _mY_}
                    var _mV_=t[3] < n?1:0,_mW_=_mV_?prev_len <= t[3]?1:0:_mV_;
                    if(_mW_)t[4] = t[4] - 1 | 0;
                    break}}
                t[5] = caml_mod(t[5] + 1 | 0,t[1].length - 1);
                var _m3_=i$4 + 1 | 0;
                if(2 !== i$4){var i$4=_m3_;continue}
                break}}
            var _m2_=((t[1].length - 1) / 2 | 0) < t[4]?1:0;
            if(_m2_)
             {var
               n$0=t[1].length - 1,
               newlen=min$1(((3 * n$0 | 0) / 2 | 0) + 3 | 0,max_array_length);
              if(n$0 < newlen)
               {var newt=create(newlen),_mP_=t[1],i=0;
                iteri$3
                 (function(j,ob)
                   {var i$0=i;
                    for(;;)
                     {if(length$6(ob) <= i$0)return 0;
                      var match=check$0(ob,i$0);
                      if(match)
                       {var
                         oh=caml_check_bound(t[2],j)[1 + j],
                         setter$0=
                          function(i)
                           {function setter(nb,ni,param){return blit$4(ob,i,nb,ni,1)}
                            return setter},
                         setter=setter$0(i$0),
                         h=caml_check_bound(oh,i$0)[1 + i$0];
                        add_aux(newt,setter,0,h,get_index(newt,h));
                        var i$1=i$0 + 1 | 0,i$0=i$1;
                        continue}
                      var i$2=i$0 + 1 | 0,i$0=i$2;
                      continue}},
                  _mP_);
                t[1] = newt[1];
                t[2] = newt[2];
                t[3] = newt[3];
                t[4] = newt[4];
                t[5] = caml_mod(t[5],newt[1].length - 1);
                return 0}
              t[3] = max_int;
              t[4] = 0;
              return 0}
            return _m2_}
          if(check$0(bucket$0,i$3)){var i$5=i$3 + 1 | 0,i$3=i$5;continue}
          caml_call3(setter,bucket$0,i$3,d);
          caml_check_bound(hashes,i$3)[1 + i$3] = h;
          return 0}}
      function add(t,d)
       {var h=caml_call1(H[2],d);
        return add_aux(t,set$1,[0,d],h,get_index(t,h))}
      function find_or(t,d,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$6(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return caml_call2(ifnotfound,h,index);
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$2(bucket,i);
                if(match$0){var v$0=match$0[1];return v$0}
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function merge(t,d)
       {return find_or
                (t,
                 d,
                 function(h,index){add_aux(t,set$1,[0,d],h,index);return d})}
      function find(t,d)
       {return find_or(t,d,function(h,index){throw Not_found})}
      function find_opt(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$6(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return 0;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var v$0=get$2(bucket,i);
                if(v$0)return v$0;
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function find_shadow(t,d,iffound,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$6(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return ifnotfound;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))return caml_call2(iffound,bucket,i)}
            var i$0=i + 1 | 0,i=i$0;
            continue}
          var i$1=i + 1 | 0,i=i$1;
          continue}}
      function remove(t,d)
       {var _mO_=0;
        return find_shadow(t,d,function(w,i){return set$1(w,i,0)},_mO_)}
      function mem(t,d)
       {var _mN_=0;return find_shadow(t,d,function(w,i){return 1},_mN_)}
      function find_all(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$6(bucket),
         i=0,
         accu=0;
        for(;;)
         {if(sz <= i)return accu;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$2(bucket,i);
                if(match$0)
                 {var
                   v$0=match$0[1],
                   accu$0=[0,v$0,accu],
                   i$0=i + 1 | 0,
                   i=i$0,
                   accu=accu$0;
                  continue}
                var i$1=i + 1 | 0,i=i$1;
                continue}}
            var i$2=i + 1 | 0,i=i$2;
            continue}
          var i$3=i + 1 | 0,i=i$3;
          continue}}
      function stats(t)
       {var len=t[1].length - 1,lens=map$7(length$6,t[1]);
        sort(caml_int_compare,lens);
        var
         _mF_=0,
         totlen=
          fold_left$3(function(_mM_,_mL_){return _mM_ + _mL_ | 0},_mF_,lens),
         _mG_=len - 1 | 0,
         _mI_=len / 2 | 0,
         _mH_=caml_check_bound(lens,_mG_)[1 + _mG_],
         _mJ_=caml_check_bound(lens,_mI_)[1 + _mI_],
         _mK_=caml_check_bound(lens,0)[1];
        return [0,len,count(t),totlen,_mK_,_mJ_,_mH_]}
      return [0,
              create,
              clear,
              merge,
              add,
              remove,
              find,
              find_opt,
              find_all,
              mem,
              iter,
              fold,
              count,
              stats]}
    var
     Stdlib_Weak=
      [0,
       weak_create,
       length$6,
       set$1,
       get$2,
       get_copy,
       check$0,
       fill$2,
       blit$4,
       Make$1];
    caml_register_global(817,Stdlib_Weak,"Stdlib__Weak");
    function id$0(x){return x}
    var
     String_tag=[248,cst_Stdlib_Format_String_tag,caml_fresh_oo_id(0)],
     size=0,
     unknown=-1;
    function pp_enqueue(state,token)
     {state[13] = state[13] + token[3] | 0;return add(token,state[28])}
    var pp_infinity=1000000010;
    function pp_output_string(state,s)
     {return caml_call3(state[17],s,0,caml_ml_string_length(s))}
    function pp_output_newline(state){return caml_call1(state[19],0)}
    function format_pp_text(state,size,text)
     {state[9] = state[9] - size | 0;
      pp_output_string(state,text);
      state[11] = 0;
      return 0}
    function format_string(state,s)
     {var _mE_=caml_string_notequal(s,cst$67);
      return _mE_?format_pp_text(state,caml_ml_string_length(s),s):_mE_}
    function break_new_line(state,param,width)
     {var after=param[3],offset=param[2],before=param[1];
      format_string(state,before);
      pp_output_newline(state);
      state[11] = 1;
      var
       indent=(state[6] - width | 0) + offset | 0,
       real_indent=min$1(state[8],indent);
      state[10] = real_indent;
      state[9] = state[6] - state[10] | 0;
      caml_call1(state[21],state[10]);
      return format_string(state,after)}
    function break_line(state,width){return break_new_line(state,_cl_,width)}
    function break_same_line(state,param)
     {var after=param[3],width=param[2],before=param[1];
      format_string(state,before);
      state[9] = state[9] - width | 0;
      caml_call1(state[20],width);
      return format_string(state,after)}
    function format_pp_token(state,size$0,param)
     {if(typeof param === "number")
       switch(param)
        {case 0:
          var match$3=top_opt(state[3]);
          if(match$3)
           {var
             match$4=match$3[1],
             tabs=match$4[1],
             add_tab=
              function(n,ls)
               {if(ls)
                 {var l=ls[2],x=ls[1];
                  return caml_lessthan(n,x)?[0,n,ls]:[0,x,add_tab(n,l)]}
                return [0,n,0]};
            tabs[1] = add_tab(state[6] - state[9] | 0,tabs[1]);
            return 0}
          return 0;
         case 1:pop_opt(state[2]);return 0;
         case 2:pop_opt(state[3]);return 0;
         case 3:
          var match$5=top_opt(state[2]);
          if(match$5)
           {var match$6=match$5[1],width$0=match$6[2];
            return break_line(state,width$0)}
          return pp_output_newline(state);
         case 4:
          var _mB_=state[10] !== (state[6] - state[9] | 0)?1:0;
          if(_mB_)
           {var match$1=take_opt(state[28]);
            if(match$1)
             {var match$2=match$1[1],size=match$2[1],length=match$2[3];
              state[12] = state[12] - length | 0;
              state[9] = state[9] + size | 0;
              return 0}
            return 0}
          return _mB_;
         default:
          var match$7=pop_opt(state[5]);
          if(match$7)
           {var tag_name=match$7[1],marker=caml_call1(state[25],tag_name);
            return pp_output_string(state,marker)}
          return 0}
      else
       switch(param[0])
        {case 0:var s=param[1];return format_pp_text(state,size$0,s);
         case 1:
          var
           breaks=param[2],
           fits=param[1],
           off=breaks[2],
           before=breaks[1],
           match$8=top_opt(state[2]);
          if(match$8)
           {var match$9=match$8[1],width$1=match$9[2],box_type$0=match$9[1];
            switch(box_type$0)
             {case 0:return break_same_line(state,fits);
              case 1:return break_new_line(state,breaks,width$1);
              case 2:return break_new_line(state,breaks,width$1);
              case 3:
               return state[9] < (size$0 + caml_ml_string_length(before) | 0)
                       ?break_new_line(state,breaks,width$1)
                       :break_same_line(state,fits);
              case 4:
               return state[11]
                       ?break_same_line(state,fits)
                       :state[9] < (size$0 + caml_ml_string_length(before) | 0)
                         ?break_new_line(state,breaks,width$1)
                         :((state[6] - width$1 | 0) + off | 0) < state[10]
                           ?break_new_line(state,breaks,width$1)
                           :break_same_line(state,fits);
              default:return break_same_line(state,fits)}}
          return 0;
         case 2:
          var
           off$0=param[2],
           n=param[1],
           insertion_point=state[6] - state[9] | 0,
           match$10=top_opt(state[3]);
          if(match$10)
           {var match$11=match$10[1],tabs$0=match$11[1],_mC_=tabs$0[1];
            if(_mC_)
             {var first=_mC_[1],param$0=tabs$0[1];
              for(;;)
               {if(param$0)
                 {var tail=param$0[2],head=param$0[1];
                  if(! (insertion_point <= head)){var param$0=tail;continue}
                  var _mD_=head}
                else
                 var _mD_=first;
                var tab=_mD_;
                break}}
            else
             var tab=insertion_point;
            var offset=tab - insertion_point | 0;
            return 0 <= offset
                    ?break_same_line(state,[0,cst$69,offset + n | 0,cst$68])
                    :break_new_line
                      (state,[0,cst$71,tab + off$0 | 0,cst$70],state[6])}
          return 0;
         case 3:
          var
           ty=param[2],
           off$1=param[1],
           insertion_point$0=state[6] - state[9] | 0;
          if(state[8] < insertion_point$0)
           {var match=top_opt(state[2]);
            if(match)
             {var match$0=match[1],width=match$0[2],box_type=match$0[1];
              if(state[9] < width && ! (3 < box_type - 1 >>> 0))
               break_line(state,width)}
            else
             pp_output_newline(state)}
          var
           width$2=state[9] - off$1 | 0,
           box_type$1=1 === ty?1:state[9] < size$0?ty:5;
          return push([0,box_type$1,width$2],state[2]);
         case 4:var tbox=param[1];return push(tbox,state[3]);
         default:
          var tag_name$0=param[1],marker$0=caml_call1(state[24],tag_name$0);
          pp_output_string(state,marker$0);
          return push(tag_name$0,state[5])}}
    function advance_left(state)
     {for(;;)
       {var match=peek_opt(state[28]);
        if(match)
         {var
           match$0=match[1],
           size=match$0[1],
           length=match$0[3],
           token=match$0[2],
           pending_count=state[13] - state[12] | 0,
           _mz_=0 <= size?1:0,
           _mA_=_mz_ || (state[9] <= pending_count?1:0);
          if(_mA_)
           {take$0(state[28]);
            var size$0=0 <= size?size:pp_infinity;
            format_pp_token(state,size$0,token);
            state[12] = length + state[12] | 0;
            continue}
          return _mA_}
        return 0}}
    function enqueue_advance(state,tok)
     {pp_enqueue(state,tok);return advance_left(state)}
    function enqueue_string_as(state,size,s)
     {return enqueue_advance(state,[0,size,[0,s],size])}
    function initialize_scan_stack(stack)
     {clear(stack);
      var queue_elem=[0,unknown,_cm_,0];
      return push([0,-1,queue_elem],stack)}
    function set_size(state,ty)
     {var match=top_opt(state[1]);
      if(match)
       {var
         match$0=match[1],
         queue_elem=match$0[2],
         left_total=match$0[1],
         _mu_=queue_elem[1];
        if(left_total < state[12])return initialize_scan_stack(state[1]);
        var _mv_=queue_elem[2];
        if(typeof _mv_ !== "number")
         switch(_mv_[0])
          {case 3:
            var
             _mx_=1 - ty,
             _my_=
              _mx_
               ?(queue_elem[1] = state[13] + _mu_ | 0,pop_opt(state[1]),0)
               :_mx_;
            return _my_;
           case 1:
           case 2:
            var
             _mw_=
              ty?(queue_elem[1] = state[13] + _mu_ | 0,pop_opt(state[1]),0):ty;
            return _mw_
           }
        return 0}
      return 0}
    function scan_push(state,b,token)
     {pp_enqueue(state,token);
      if(b)set_size(state,1);
      var elem=[0,state[13],token];
      return push(elem,state[1])}
    function pp_open_box_gen(state,indent,br_ty)
     {state[14] = state[14] + 1 | 0;
      if(state[14] < state[15])
       {var size=- state[13] | 0,elem=[0,size,[3,indent,br_ty],0];
        return scan_push(state,0,elem)}
      var _ms_=state[14] === state[15]?1:0;
      if(_ms_)
       {var _mt_=state[16];
        return enqueue_string_as(state,caml_ml_string_length(_mt_),_mt_)}
      return _ms_}
    function pp_close_box(state,param)
     {var _mq_=1 < state[14]?1:0;
      if(_mq_)
       {if(state[14] < state[15])
         {pp_enqueue(state,[0,size,1,0]);set_size(state,1);set_size(state,0)}
        state[14] = state[14] - 1 | 0;
        var _mr_=0}
      else
       var _mr_=_mq_;
      return _mr_}
    function pp_open_stag(state,tag_name)
     {if(state[22]){push(tag_name,state[4]);caml_call1(state[26],tag_name)}
      var _mp_=state[23];
      if(_mp_)
       {var token=[5,tag_name];return pp_enqueue(state,[0,size,token,0])}
      return _mp_}
    function pp_close_stag(state,param)
     {if(state[23])pp_enqueue(state,[0,size,5,0]);
      var _mn_=state[22];
      if(_mn_)
       {var match=pop_opt(state[4]);
        if(match){var tag_name=match[1];return caml_call1(state[27],tag_name)}
        var _mo_=0}
      else
       var _mo_=_mn_;
      return _mo_}
    function pp_open_tag(state,s){return pp_open_stag(state,[0,String_tag,s])}
    function pp_close_tag(state,param){return pp_close_stag(state,0)}
    function pp_set_print_tags(state,b){state[22] = b;return 0}
    function pp_set_mark_tags(state,b){state[23] = b;return 0}
    function pp_get_print_tags(state,param){return state[22]}
    function pp_get_mark_tags(state,param){return state[23]}
    function pp_set_tags(state,b)
     {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b)}
    function pp_get_formatter_stag_function(state,param)
     {return [0,state[24],state[25],state[26],state[27]]}
    function pp_set_formatter_stag_function(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      state[24] = mot;
      state[25] = mct;
      state[26] = pot;
      state[27] = pct;
      return 0}
    function pp_rinit(state)
     {state[12] = 1;
      state[13] = 1;
      clear$0(state[28]);
      initialize_scan_stack(state[1]);
      clear(state[2]);
      clear(state[3]);
      clear(state[4]);
      clear(state[5]);
      state[10] = 0;
      state[14] = 0;
      state[9] = state[6];
      return pp_open_box_gen(state,0,3)}
    function pp_flush_queue(state,b)
     {var _mm_=state[4];
      iter$7(function(param){return pp_close_tag(state,0)},_mm_);
      for(;;)
       {if(1 < state[14]){pp_close_box(state,0);continue}
        state[13] = pp_infinity;
        advance_left(state);
        if(b)pp_output_newline(state);
        return pp_rinit(state)}}
    function pp_print_as_size(state,size,s)
     {var _ml_=state[14] < state[15]?1:0;
      return _ml_?enqueue_string_as(state,size,s):_ml_}
    function pp_print_as(state,isize,s)
     {return pp_print_as_size(state,isize,s)}
    function pp_print_string(state,s)
     {return pp_print_as(state,caml_ml_string_length(s),s)}
    function pp_print_bytes(state,s)
     {return pp_print_as(state,caml_ml_bytes_length(s),of_bytes(s))}
    function pp_print_int(state,i)
     {return pp_print_string(state,caml_string_of_jsbytes("" + i))}
    function pp_print_float(state,f)
     {return pp_print_string(state,to_string(f))}
    function pp_print_bool(state,b)
     {return pp_print_string(state,string_of_bool(b))}
    function pp_print_char(state,c){return pp_print_as(state,1,make$1(1,c))}
    function pp_open_hbox(state,param){return pp_open_box_gen(state,0,0)}
    function pp_open_vbox(state,indent)
     {return pp_open_box_gen(state,indent,1)}
    function pp_open_hvbox(state,indent)
     {return pp_open_box_gen(state,indent,2)}
    function pp_open_hovbox(state,indent)
     {return pp_open_box_gen(state,indent,3)}
    function pp_open_box(state,indent){return pp_open_box_gen(state,indent,4)}
    function pp_print_newline(state,param)
     {pp_flush_queue(state,1);return caml_call1(state[18],0)}
    function pp_print_flush(state,param)
     {pp_flush_queue(state,0);return caml_call1(state[18],0)}
    function pp_force_newline(state,param)
     {var _mk_=state[14] < state[15]?1:0;
      return _mk_?enqueue_advance(state,[0,size,3,0]):_mk_}
    function pp_print_if_newline(state,param)
     {var _mj_=state[14] < state[15]?1:0;
      return _mj_?enqueue_advance(state,[0,size,4,0]):_mj_}
    function pp_print_custom_break(state,fits,breaks)
     {var
       after=fits[3],
       width=fits[2],
       before=fits[1],
       _mi_=state[14] < state[15]?1:0;
      if(_mi_)
       {var
         size=- state[13] | 0,
         token=[1,fits,breaks],
         length=
          (caml_ml_string_length(before) + width | 0)
          +
          caml_ml_string_length(after)
          |
          0,
         elem=[0,size,token,length];
        return scan_push(state,1,elem)}
      return _mi_}
    function pp_print_break(state,width,offset)
     {return pp_print_custom_break
              (state,[0,cst$75,width,cst$74],[0,cst$73,offset,cst$72])}
    function pp_print_space(state,param){return pp_print_break(state,1,0)}
    function pp_print_cut(state,param){return pp_print_break(state,0,0)}
    function pp_open_tbox(state,param)
     {state[14] = state[14] + 1 | 0;
      var _mh_=state[14] < state[15]?1:0;
      if(_mh_)
       {var elem=[0,size,[4,[0,[0,0]]],0];return enqueue_advance(state,elem)}
      return _mh_}
    function pp_close_tbox(state,param)
     {var _me_=1 < state[14]?1:0;
      if(_me_)
       {var _mf_=state[14] < state[15]?1:0;
        if(_mf_)
         {var elem=[0,size,2,0];
          enqueue_advance(state,elem);
          state[14] = state[14] - 1 | 0;
          var _mg_=0}
        else
         var _mg_=_mf_}
      else
       var _mg_=_me_;
      return _mg_}
    function pp_print_tbreak(state,width,offset)
     {var _md_=state[14] < state[15]?1:0;
      if(_md_)
       {var size=- state[13] | 0,elem=[0,size,[2,width,offset],width];
        return scan_push(state,1,elem)}
      return _md_}
    function pp_print_tab(state,param){return pp_print_tbreak(state,0,0)}
    function pp_set_tab(state,param)
     {var _mc_=state[14] < state[15]?1:0;
      if(_mc_){var elem=[0,size,0,0];return enqueue_advance(state,elem)}
      return _mc_}
    function pp_set_max_boxes(state,n)
     {var _ma_=1 < n?1:0,_mb_=_ma_?(state[15] = n,0):_ma_;return _mb_}
    function pp_get_max_boxes(state,param){return state[15]}
    function pp_over_max_boxes(state,param)
     {return state[14] === state[15]?1:0}
    function pp_set_ellipsis_text(state,s){state[16] = s;return 0}
    function pp_get_ellipsis_text(state,param){return state[16]}
    function pp_limit(n){return n < 1000000010?n:1000000009}
    function pp_set_max_indent(state,n$0)
     {var _l$_=1 < n$0?1:0;
      if(_l$_)
       {var n$1=state[6] - n$0 | 0,_l__=1 <= n$1?1:0;
        if(_l__)
         {var n=pp_limit(n$1);
          state[7] = n;
          state[8] = state[6] - state[7] | 0;
          return pp_rinit(state)}
        return _l__}
      return _l$_}
    function pp_get_max_indent(state,param){return state[8]}
    function pp_set_margin(state,n)
     {var _l9_=1 <= n?1:0;
      if(_l9_)
       {var n$0=pp_limit(n);
        state[6] = n$0;
        var
         new_max_indent=
          state[8] <= state[6]
           ?state[8]
           :max$1(max$1(state[6] - state[7] | 0,state[6] / 2 | 0),1);
        return pp_set_max_indent(state,new_max_indent)}
      return _l9_}
    function validate_geometry(param)
     {var margin=param[2],max_indent=param[1];
      return 2 <= max_indent?margin <= max_indent?_cn_:_co_:_cp_}
    function check_geometry(geometry)
     {var match=validate_geometry(geometry);return 0 === match[0]?1:0}
    function pp_get_margin(state,param){return state[6]}
    function pp_set_full_geometry(state,param)
     {var margin=param[2],max_indent=param[1];
      pp_set_margin(state,margin);
      pp_set_max_indent(state,max_indent);
      return 0}
    function pp_set_geometry(state,max_indent,margin)
     {var geometry=[0,max_indent,margin],match=validate_geometry(geometry);
      if(0 === match[0])return pp_set_full_geometry(state,geometry);
      var msg=match[1];
      throw [0,Invalid_argument,cat(cst_Format_pp_set_geometry,msg)]}
    function pp_safe_set_geometry(state,max_indent,margin)
     {var geometry=[0,max_indent,margin],match=validate_geometry(geometry);
      return 0 === match[0]?pp_set_full_geometry(state,geometry):0}
    function pp_get_geometry(state,param){return [0,state[8],state[6]]}
    function pp_update_geometry(state,update)
     {var geometry=pp_get_geometry(state,0);
      return pp_set_full_geometry(state,caml_call1(update,geometry))}
    function pp_set_formatter_out_functions(state,param)
     {var j=param[5],i=param[4],h=param[3],g=param[2],f=param[1];
      state[17] = f;
      state[18] = g;
      state[19] = h;
      state[20] = i;
      state[21] = j;
      return 0}
    function pp_get_formatter_out_functions(state,param)
     {return [0,state[17],state[18],state[19],state[20],state[21]]}
    function pp_set_formatter_output_functi(state,f,g)
     {state[17] = f;state[18] = g;return 0}
    function pp_get_formatter_output_functi(state,param)
     {return [0,state[17],state[18]]}
    function display_newline(state,param)
     {return caml_call3(state[17],cst$76,0,1)}
    var blank_line=make$1(80,32);
    function display_indent(state,n)
     {var n$0=n;
      for(;;)
       {var _l8_=0 < n$0?1:0;
        if(_l8_)
         {if(80 < n$0)
           {caml_call3(state[17],blank_line,0,80);
            var n$1=n$0 - 80 | 0,n$0=n$1;
            continue}
          return caml_call3(state[17],blank_line,0,n$0)}
        return _l8_}}
    function pp_set_formatter_out_channel(state,oc)
     {state[17]
      =
      function(_l5_,_l6_,_l7_){return output_substring(oc,_l5_,_l6_,_l7_)};
      state[18] = function(param){return caml_ml_flush(oc)};
      state[19] = function(_l4_){return display_newline(state,_l4_)};
      state[20] = function(_l3_){return display_indent(state,_l3_)};
      state[21] = function(_l2_){return display_indent(state,_l2_)};
      return 0}
    function default_pp_mark_open_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return cat(cst$78,cat(s,cst$77))}
      return cst$79}
    function default_pp_mark_close_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return cat(cst$81,cat(s,cst$80))}
      return cst$82}
    function default_pp_print_open_tag(_l1_){return 0}
    function default_pp_print_close_tag(_l0_){return 0}
    function pp_make_formatter(f,g,h,i,j)
     {var pp_queue=create$1(0),sys_tok=[0,unknown,_cq_,0];
      add(sys_tok,pp_queue);
      var scan_stack=create$0(0);
      initialize_scan_stack(scan_stack);
      push([0,1,sys_tok],scan_stack);
      var _lX_=create$0(0),_lY_=create$0(0),_lZ_=create$0(0);
      return [0,
              scan_stack,
              create$0(0),
              _lZ_,
              _lY_,
              _lX_,
              78,
              10,
              68,
              78,
              0,
              1,
              1,
              1,
              1,
              max_int,
              cst$83,
              f,
              g,
              h,
              i,
              j,
              0,
              0,
              default_pp_mark_open_tag,
              default_pp_mark_close_tag,
              default_pp_print_open_tag,
              default_pp_print_close_tag,
              pp_queue]}
    function formatter_of_out_functions(out_funs)
     {return pp_make_formatter
              (out_funs[1],out_funs[2],out_funs[3],out_funs[4],out_funs[5])}
    function make_formatter(output,flush)
     {function _lP_(_lW_){return 0}
      function _lQ_(_lV_){return 0}
      var
       ppf=
        pp_make_formatter(output,flush,function(_lU_){return 0},_lQ_,_lP_);
      ppf[19] = function(_lT_){return display_newline(ppf,_lT_)};
      ppf[20] = function(_lS_){return display_indent(ppf,_lS_)};
      ppf[21] = function(_lR_){return display_indent(ppf,_lR_)};
      return ppf}
    function formatter_of_out_channel(oc)
     {function _lL_(param){return caml_ml_flush(oc)}
      return make_formatter
              (function(_lM_,_lN_,_lO_)
                {return output_substring(oc,_lM_,_lN_,_lO_)},
               _lL_)}
    function formatter_of_buffer(b)
     {function _lG_(_lK_){return 0}
      return make_formatter
              (function(_lH_,_lI_,_lJ_)
                {return add_substring(b,_lH_,_lI_,_lJ_)},
               _lG_)}
    var pp_buffer_size=512;
    function pp_make_buffer(param){return create$2(pp_buffer_size)}
    var
     stdbuf=pp_make_buffer(0),
     std_formatter=formatter_of_out_channel(stdout),
     err_formatter=formatter_of_out_channel(stderr),
     str_formatter=formatter_of_buffer(stdbuf);
    function flush_buffer_formatter(buf,ppf)
     {pp_flush_queue(ppf,0);var s=contents(buf);reset(buf);return s}
    function flush_str_formatter(param)
     {return flush_buffer_formatter(stdbuf,str_formatter)}
    function make_symbolic_output_buffer(param){return [0,0]}
    function clear_symbolic_output_buffer(sob){sob[1] = 0;return 0}
    function get_symbolic_output_buffer(sob){return rev(sob[1])}
    function flush_symbolic_output_buffer(sob)
     {var items=get_symbolic_output_buffer(sob);
      clear_symbolic_output_buffer(sob);
      return items}
    function add_symbolic_output_item(sob,item)
     {sob[1] = [0,item,sob[1]];return 0}
    function formatter_of_symbolic_output_b(sob)
     {function f(s,i,n){return add_symbolic_output_item(sob,[0,sub$0(s,i,n)])}
      function g(_lF_){return add_symbolic_output_item(sob,0)}
      function h(_lE_){return add_symbolic_output_item(sob,1)}
      function i(n){return add_symbolic_output_item(sob,[1,n])}
      function j(n){return add_symbolic_output_item(sob,[2,n])}
      return pp_make_formatter(f,g,h,i,j)}
    function open_hbox(_lD_){return pp_open_hbox(std_formatter,_lD_)}
    function open_vbox(_lC_){return pp_open_vbox(std_formatter,_lC_)}
    function open_hvbox(_lB_){return pp_open_hvbox(std_formatter,_lB_)}
    function open_hovbox(_lA_){return pp_open_hovbox(std_formatter,_lA_)}
    function open_box(_lz_){return pp_open_box(std_formatter,_lz_)}
    function close_box(_ly_){return pp_close_box(std_formatter,_ly_)}
    function open_tag(_lx_){return pp_open_tag(std_formatter,_lx_)}
    function close_tag(_lw_){return pp_close_tag(std_formatter,_lw_)}
    function open_stag(_lv_){return pp_open_stag(std_formatter,_lv_)}
    function close_stag(_lu_){return pp_close_stag(std_formatter,_lu_)}
    function print_as(_ls_,_lt_){return pp_print_as(std_formatter,_ls_,_lt_)}
    function print_string$0(_lr_){return pp_print_string(std_formatter,_lr_)}
    function print_bytes$0(_lq_){return pp_print_bytes(std_formatter,_lq_)}
    function print_int$0(_lp_){return pp_print_int(std_formatter,_lp_)}
    function print_float$0(_lo_){return pp_print_float(std_formatter,_lo_)}
    function print_char$0(_ln_){return pp_print_char(std_formatter,_ln_)}
    function print_bool(_lm_){return pp_print_bool(std_formatter,_lm_)}
    function print_break(_lk_,_ll_)
     {return pp_print_break(std_formatter,_lk_,_ll_)}
    function print_cut(_lj_){return pp_print_cut(std_formatter,_lj_)}
    function print_space(_li_){return pp_print_space(std_formatter,_li_)}
    function force_newline(_lh_){return pp_force_newline(std_formatter,_lh_)}
    function print_flush(_lg_){return pp_print_flush(std_formatter,_lg_)}
    function print_newline$0(_lf_)
     {return pp_print_newline(std_formatter,_lf_)}
    function print_if_newline(_le_)
     {return pp_print_if_newline(std_formatter,_le_)}
    function open_tbox(_ld_){return pp_open_tbox(std_formatter,_ld_)}
    function close_tbox(_lc_){return pp_close_tbox(std_formatter,_lc_)}
    function print_tbreak(_la_,_lb_)
     {return pp_print_tbreak(std_formatter,_la_,_lb_)}
    function set_tab(_k$_){return pp_set_tab(std_formatter,_k$_)}
    function print_tab(_k__){return pp_print_tab(std_formatter,_k__)}
    function set_margin(_k9_){return pp_set_margin(std_formatter,_k9_)}
    function get_margin(_k8_){return std_formatter[6]}
    function set_max_indent(_k7_)
     {return pp_set_max_indent(std_formatter,_k7_)}
    function get_max_indent(_k6_){return std_formatter[8]}
    function set_geometry(_k4_,_k5_)
     {return pp_set_geometry(std_formatter,_k4_,_k5_)}
    function safe_set_geometry(_k2_,_k3_)
     {return pp_safe_set_geometry(std_formatter,_k2_,_k3_)}
    function get_geometry(_k1_){return pp_get_geometry(std_formatter,_k1_)}
    function update_geometry(_k0_)
     {return pp_update_geometry(std_formatter,_k0_)}
    function set_max_boxes(_kZ_){return pp_set_max_boxes(std_formatter,_kZ_)}
    function get_max_boxes(_kY_){return std_formatter[15]}
    function over_max_boxes(_kX_)
     {return pp_over_max_boxes(std_formatter,_kX_)}
    function set_ellipsis_text(_kW_)
     {return pp_set_ellipsis_text(std_formatter,_kW_)}
    function get_ellipsis_text(_kV_){return std_formatter[16]}
    function set_formatter_out_channel(_kU_)
     {return pp_set_formatter_out_channel(std_formatter,_kU_)}
    function set_formatter_out_functions(_kT_)
     {return pp_set_formatter_out_functions(std_formatter,_kT_)}
    function get_formatter_out_functions(_kS_)
     {return pp_get_formatter_out_functions(std_formatter,_kS_)}
    function set_formatter_output_functions(_kQ_,_kR_)
     {return pp_set_formatter_output_functi(std_formatter,_kQ_,_kR_)}
    function get_formatter_output_functions(_kP_)
     {return pp_get_formatter_output_functi(std_formatter,_kP_)}
    function set_formatter_stag_functions(_kO_)
     {return pp_set_formatter_stag_function(std_formatter,_kO_)}
    function get_formatter_stag_functions(_kN_)
     {return pp_get_formatter_stag_function(std_formatter,_kN_)}
    function set_print_tags(_kM_)
     {return pp_set_print_tags(std_formatter,_kM_)}
    function get_print_tags(_kL_){return std_formatter[22]}
    function set_mark_tags(_kK_){return pp_set_mark_tags(std_formatter,_kK_)}
    function get_mark_tags(_kJ_){return std_formatter[23]}
    function set_tags(_kI_){return pp_set_tags(std_formatter,_kI_)}
    function pp_print_list(opt,pp_v,ppf,param)
     {var opt$0=opt,param$0=param;
      for(;;)
       {if(opt$0)var sth=opt$0[1],pp_sep=sth;else var pp_sep=pp_print_cut;
        if(param$0)
         {var _kH_=param$0[1];
          if(param$0[2])
           {var vs=param$0[2];
            caml_call2(pp_v,ppf,_kH_);
            caml_call2(pp_sep,ppf,0);
            var opt$1=[0,pp_sep],opt$0=opt$1,param$0=vs;
            continue}
          return caml_call2(pp_v,ppf,_kH_)}
        return 0}}
    function pp_print_seq(opt,pp_v,ppf,seq$1)
     {if(opt)var sth=opt[1],pp_sep=sth;else var pp_sep=pp_print_cut;
      var match$0=caml_call1(seq$1,0);
      if(match$0)
       {var seq$2=match$0[2],v$0=match$0[1];
        caml_call2(pp_v,ppf,v$0);
        var seq=seq$2;
        for(;;)
         {var match=caml_call1(seq,0);
          if(match)
           {var seq$0=match[2],v=match[1];
            caml_call2(pp_sep,ppf,0);
            caml_call2(pp_v,ppf,v);
            var seq=seq$0;
            continue}
          return 0}}
      return 0}
    function pp_print_text(ppf,s)
     {var len=caml_ml_string_length(s),left=[0,0],right=[0,0];
      function flush(param)
       {pp_print_string(ppf,sub$0(s,left[1],right[1] - left[1] | 0));
        right[1]++;
        left[1] = right[1];
        return 0}
      for(;;)
       {if(right[1] !== len)
         {var match=caml_string_get(s,right[1]);
          if(10 === match)
           {flush(0);pp_force_newline(ppf,0)}
          else
           if(32 === match){flush(0);pp_print_space(ppf,0)}else right[1]++;
          continue}
        var _kG_=left[1] !== len?1:0;
        return _kG_?flush(0):_kG_}}
    function pp_print_option(opt,pp_v,ppf,param)
     {if(opt)
       var sth=opt[1],none=sth;
      else
       var none=function(param,_kF_){return 0};
      if(param){var v=param[1];return caml_call2(pp_v,ppf,v)}
      return caml_call2(none,ppf,0)}
    function pp_print_result(ok,error,ppf,param)
     {if(0 === param[0]){var v=param[1];return caml_call2(ok,ppf,v)}
      var e=param[1];
      return caml_call2(error,ppf,e)}
    function pp_print_either(left,right,ppf,param)
     {if(0 === param[0]){var l=param[1];return caml_call2(left,ppf,l)}
      var r=param[1];
      return caml_call2(right,ppf,r)}
    function compute_tag(output,tag_acc)
     {var buf=create$2(16),ppf=formatter_of_buffer(buf);
      caml_call2(output,ppf,tag_acc);
      pp_print_flush(ppf,0);
      var len=buf[2];
      return 2 <= len?sub$3(buf,1,len - 2 | 0):contents(buf)}
    function output_formatting_lit(ppf,fmting_lit)
     {if(typeof fmting_lit === "number")
       switch(fmting_lit)
        {case 0:return pp_close_box(ppf,0);
         case 1:return pp_close_tag(ppf,0);
         case 2:return pp_print_flush(ppf,0);
         case 3:return pp_force_newline(ppf,0);
         case 4:return pp_print_newline(ppf,0);
         case 5:return pp_print_char(ppf,64);
         default:return pp_print_char(ppf,37)}
      else
       switch(fmting_lit[0])
        {case 0:
          var offset=fmting_lit[3],width=fmting_lit[2];
          return pp_print_break(ppf,width,offset);
         case 1:return 0;
         default:
          var c=fmting_lit[1];
          pp_print_char(ppf,64);
          return pp_print_char(ppf,c)}}
    function output_acc$0(ppf,acc)
     {var switch$0=0;
      if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          output_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _kv_=acc[2],_kw_=acc[1];
          if(0 === _kv_[0])
           {var acc$0=_kv_[1];
            output_acc$0(ppf,_kw_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(output_acc$0,acc$0)])}
          var acc$1=_kv_[1];
          output_acc$0(ppf,_kw_);
          var
           match=open_box_of_string(compute_tag(output_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _kx_=acc[1],switch$1=0;
          if(typeof _kx_ !== "number" && 0 === _kx_[0])
           {var _ky_=_kx_[2],switch$2=0;
            if(typeof _ky_ !== "number" && 1 === _ky_[0])
             {var s$0=acc[2],size=_ky_[2],p$1=_kx_[1];
              switch$1 = 1;
              switch$2 = 1}}
          if(! switch$1){var s=acc[2],p$0=_kx_;switch$0 = 2}
          break;
         case 3:
          var _kz_=acc[1],switch$3=0;
          if(typeof _kz_ !== "number" && 0 === _kz_[0])
           {var _kA_=_kz_[2],switch$4=0;
            if(typeof _kA_ !== "number" && 1 === _kA_[0])
             {var c$0=acc[2],size$0=_kA_[2],p$3=_kz_[1];
              switch$0 = 1;
              switch$3 = 1;
              switch$4 = 1}}
          if(! switch$3){var c=acc[2],p$2=_kz_;switch$0 = 3}
          break;
         case 4:
          var _kB_=acc[1],switch$5=0;
          if(typeof _kB_ !== "number" && 0 === _kB_[0])
           {var _kC_=_kB_[2],switch$6=0;
            if(typeof _kC_ !== "number" && 1 === _kC_[0])
             {var s$0=acc[2],size=_kC_[2],p$1=_kB_[1];
              switch$5 = 1;
              switch$6 = 1}}
          if(! switch$5){var s=acc[2],p$0=_kB_;switch$0 = 2}
          break;
         case 5:
          var _kD_=acc[1],switch$7=0;
          if(typeof _kD_ === "number" || ! (0 === _kD_[0]))
           switch$7 = 1;
          else
           {var _kE_=_kD_[2],switch$8=0;
            if(typeof _kE_ !== "number" && 1 === _kE_[0])
             {var c$0=acc[2],size$0=_kE_[2],p$3=_kD_[1];
              switch$0 = 1;
              switch$8 = 1}
            if(! switch$8)switch$7 = 1}
          if(switch$7){var c=acc[2],p$2=_kD_;switch$0 = 3}
          break;
         case 6:
          var f$0=acc[2],p$4=acc[1];
          output_acc$0(ppf,p$4);
          return caml_call1(f$0,ppf);
         case 7:
          var p$5=acc[1];output_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          output_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:output_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         output_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$1(1,c$0));
        case 2:output_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:output_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function strput_acc$0(ppf,acc)
     {var switch$0=0;
      if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          strput_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _kj_=acc[2],_kk_=acc[1];
          if(0 === _kj_[0])
           {var acc$0=_kj_[1];
            strput_acc$0(ppf,_kk_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(strput_acc$0,acc$0)])}
          var acc$1=_kj_[1];
          strput_acc$0(ppf,_kk_);
          var
           match=open_box_of_string(compute_tag(strput_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _kl_=acc[1],switch$1=0;
          if(typeof _kl_ !== "number" && 0 === _kl_[0])
           {var _km_=_kl_[2],switch$2=0;
            if(typeof _km_ !== "number" && 1 === _km_[0])
             {var s$0=acc[2],size=_km_[2],p$1=_kl_[1];
              switch$1 = 1;
              switch$2 = 1}}
          if(! switch$1){var s=acc[2],p$0=_kl_;switch$0 = 2}
          break;
         case 3:
          var _kn_=acc[1],switch$3=0;
          if(typeof _kn_ !== "number" && 0 === _kn_[0])
           {var _ko_=_kn_[2],switch$4=0;
            if(typeof _ko_ !== "number" && 1 === _ko_[0])
             {var c$0=acc[2],size$0=_ko_[2],p$3=_kn_[1];
              switch$0 = 1;
              switch$3 = 1;
              switch$4 = 1}}
          if(! switch$3){var c=acc[2],p$2=_kn_;switch$0 = 3}
          break;
         case 4:
          var _kp_=acc[1],switch$5=0;
          if(typeof _kp_ !== "number" && 0 === _kp_[0])
           {var _kq_=_kp_[2],switch$6=0;
            if(typeof _kq_ !== "number" && 1 === _kq_[0])
             {var s$0=acc[2],size=_kq_[2],p$1=_kp_[1];
              switch$5 = 1;
              switch$6 = 1}}
          if(! switch$5){var s=acc[2],p$0=_kp_;switch$0 = 2}
          break;
         case 5:
          var _kr_=acc[1],switch$7=0;
          if(typeof _kr_ === "number" || ! (0 === _kr_[0]))
           switch$7 = 1;
          else
           {var _ks_=_kr_[2],switch$8=0;
            if(typeof _ks_ !== "number" && 1 === _ks_[0])
             {var c$0=acc[2],size$0=_ks_[2],p$3=_kr_[1];
              switch$0 = 1;
              switch$8 = 1}
            if(! switch$8)switch$7 = 1}
          if(switch$7){var c=acc[2],p$2=_kr_;switch$0 = 3}
          break;
         case 6:
          var _kt_=acc[1];
          if(typeof _kt_ !== "number" && 0 === _kt_[0])
           {var _ku_=_kt_[2];
            if(typeof _ku_ !== "number" && 1 === _ku_[0])
             {var f$1=acc[2],size$1=_ku_[2],p$4=_kt_[1];
              strput_acc$0(ppf,p$4);
              return pp_print_as_size(ppf,size$1,caml_call1(f$1,0))}}
          var f$0=acc[2];
          strput_acc$0(ppf,_kt_);
          return pp_print_string(ppf,caml_call1(f$0,0));
         case 7:
          var p$5=acc[1];strput_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          strput_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:strput_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         strput_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$1(1,c$0));
        case 2:strput_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:strput_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function kfprintf$0(k,ppf,param)
     {var fmt=param[1],_ki_=0;
      return make_printf
              (function(acc){output_acc$0(ppf,acc);return caml_call1(k,ppf)},
               _ki_,
               fmt)}
    function ikfprintf$0(k,ppf,param)
     {var fmt=param[1];return make_iprintf(k,ppf,fmt)}
    function ifprintf$0(ppf,param)
     {var fmt=param[1],_kg_=0;
      return make_iprintf(function(_kh_){return 0},_kg_,fmt)}
    function fprintf$0(ppf)
     {function _kd_(_kf_){return 0}
      return function(_ke_){return kfprintf$0(_kd_,ppf,_ke_)}}
    function printf$0(fmt){return caml_call1(fprintf$0(std_formatter),fmt)}
    function eprintf$0(fmt){return caml_call1(fprintf$0(err_formatter),fmt)}
    function kdprintf(k,param)
     {var fmt=param[1],_kc_=0;
      return make_printf
              (function(acc)
                {return caml_call1
                         (k,function(ppf){return output_acc$0(ppf,acc)})},
               _kc_,
               fmt)}
    function dprintf(fmt){return kdprintf(function(i){return i},fmt)}
    function kprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {strput_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function sprintf$0(fmt){return kprintf(id$0,fmt)}
    function kasprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {output_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function asprintf(fmt){return kasprintf(id$0,fmt)}
    function flush_standard_formatters(param)
     {pp_print_flush(std_formatter,0);return pp_print_flush(err_formatter,0)}
    at_exit(flush_standard_formatters);
    function pp_set_all_formatter_output_fu(state,f,g,h,i)
     {pp_set_formatter_output_functi(state,f,g);
      state[19] = h;
      state[20] = i;
      return 0}
    function pp_get_all_formatter_output_fu(state,param)
     {return [0,state[17],state[18],state[19],state[20]]}
    function set_all_formatter_output_funct(_j__,_j$_,_ka_,_kb_)
     {return pp_set_all_formatter_output_fu(std_formatter,_j__,_j$_,_ka_,_kb_)}
    function get_all_formatter_output_funct(_j9_)
     {return pp_get_all_formatter_output_fu(std_formatter,_j9_)}
    function bprintf$0(b,param)
     {var fmt=param[1],ppf=formatter_of_buffer(b);
      function k(acc){output_acc$0(ppf,acc);return pp_flush_queue(ppf,0)}
      return make_printf(k,0,fmt)}
    function pp_set_formatter_tag_functions(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      function stringify(f,e,param)
       {if(param[1] === String_tag){var s=param[2];return caml_call1(f,s)}
        return e}
      state[24] = function(_j8_){return stringify(mot,cst$84,_j8_)};
      state[25] = function(_j7_){return stringify(mct,cst$85,_j7_)};
      var _j3_=0;
      state[26] = function(_j6_){return stringify(pot,_j3_,_j6_)};
      var _j4_=0;
      state[27] = function(_j5_){return stringify(pct,_j4_,_j5_)};
      return 0}
    function pp_get_formatter_tag_functions(fmt,param)
     {var funs=pp_get_formatter_stag_function(fmt,0);
      function mark_open_tag(s){return caml_call1(funs[1],[0,String_tag,s])}
      function mark_close_tag(s){return caml_call1(funs[2],[0,String_tag,s])}
      function print_open_tag(s){return caml_call1(funs[3],[0,String_tag,s])}
      function print_close_tag(s){return caml_call1(funs[4],[0,String_tag,s])}
      return [0,mark_open_tag,mark_close_tag,print_open_tag,print_close_tag]}
    function set_formatter_tag_functions(_j2_)
     {return pp_set_formatter_tag_functions(std_formatter,_j2_)}
    function get_formatter_tag_functions(_j1_)
     {return pp_get_formatter_tag_functions(std_formatter,_j1_)}
    var
     Stdlib_Format=
      [0,
       pp_open_box,
       open_box,
       pp_close_box,
       close_box,
       pp_open_hbox,
       open_hbox,
       pp_open_vbox,
       open_vbox,
       pp_open_hvbox,
       open_hvbox,
       pp_open_hovbox,
       open_hovbox,
       pp_print_string,
       print_string$0,
       pp_print_bytes,
       print_bytes$0,
       pp_print_as,
       print_as,
       pp_print_int,
       print_int$0,
       pp_print_float,
       print_float$0,
       pp_print_char,
       print_char$0,
       pp_print_bool,
       print_bool,
       pp_print_space,
       print_space,
       pp_print_cut,
       print_cut,
       pp_print_break,
       print_break,
       pp_print_custom_break,
       pp_force_newline,
       force_newline,
       pp_print_if_newline,
       print_if_newline,
       pp_print_flush,
       print_flush,
       pp_print_newline,
       print_newline$0,
       pp_set_margin,
       set_margin,
       pp_get_margin,
       get_margin,
       pp_set_max_indent,
       set_max_indent,
       pp_get_max_indent,
       get_max_indent,
       check_geometry,
       pp_set_geometry,
       set_geometry,
       pp_safe_set_geometry,
       safe_set_geometry,
       pp_update_geometry,
       update_geometry,
       pp_get_geometry,
       get_geometry,
       pp_set_max_boxes,
       set_max_boxes,
       pp_get_max_boxes,
       get_max_boxes,
       pp_over_max_boxes,
       over_max_boxes,
       pp_open_tbox,
       open_tbox,
       pp_close_tbox,
       close_tbox,
       pp_set_tab,
       set_tab,
       pp_print_tab,
       print_tab,
       pp_print_tbreak,
       print_tbreak,
       pp_set_ellipsis_text,
       set_ellipsis_text,
       pp_get_ellipsis_text,
       get_ellipsis_text,
       String_tag,
       pp_open_stag,
       open_stag,
       pp_close_stag,
       close_stag,
       pp_set_tags,
       set_tags,
       pp_set_print_tags,
       set_print_tags,
       pp_set_mark_tags,
       set_mark_tags,
       pp_get_print_tags,
       get_print_tags,
       pp_get_mark_tags,
       get_mark_tags,
       pp_set_formatter_out_channel,
       set_formatter_out_channel,
       pp_set_formatter_output_functi,
       set_formatter_output_functions,
       pp_get_formatter_output_functi,
       get_formatter_output_functions,
       pp_set_formatter_out_functions,
       set_formatter_out_functions,
       pp_get_formatter_out_functions,
       get_formatter_out_functions,
       pp_set_formatter_stag_function,
       set_formatter_stag_functions,
       pp_get_formatter_stag_function,
       get_formatter_stag_functions,
       formatter_of_out_channel,
       std_formatter,
       err_formatter,
       formatter_of_buffer,
       stdbuf,
       str_formatter,
       flush_str_formatter,
       make_formatter,
       formatter_of_out_functions,
       make_symbolic_output_buffer,
       clear_symbolic_output_buffer,
       get_symbolic_output_buffer,
       flush_symbolic_output_buffer,
       add_symbolic_output_item,
       formatter_of_symbolic_output_b,
       pp_print_list,
       pp_print_seq,
       pp_print_text,
       pp_print_option,
       pp_print_result,
       pp_print_either,
       fprintf$0,
       printf$0,
       eprintf$0,
       sprintf$0,
       asprintf,
       dprintf,
       ifprintf$0,
       kfprintf$0,
       kdprintf,
       ikfprintf$0,
       kprintf,
       kasprintf,
       bprintf$0,
       kprintf,
       set_all_formatter_output_funct,
       get_all_formatter_output_funct,
       pp_set_all_formatter_output_fu,
       pp_get_all_formatter_output_fu,
       pp_open_tag,
       open_tag,
       pp_close_tag,
       close_tag,
       pp_set_formatter_tag_functions,
       set_formatter_tag_functions,
       pp_get_formatter_tag_functions,
       get_formatter_tag_functions];
    caml_register_global(818,Stdlib_Format,"Stdlib__Format");
    var null_char=0;
    function next_char(ib)
     {try
       {var c=caml_call1(ib[7],0);
        ib[2] = c;
        ib[3] = 1;
        ib[4] = ib[4] + 1 | 0;
        if(10 === c)ib[5] = ib[5] + 1 | 0;
        return c}
      catch(_j0_)
       {_j0_ = caml_wrap_exception(_j0_);
        if(_j0_ === End_of_file)
         {ib[2] = null_char;ib[3] = 0;ib[1] = 1;return null_char}
        throw _j0_}}
    function peek_char(ib){return ib[3]?ib[2]:next_char(ib)}
    function checked_peek_char(ib)
     {var c=peek_char(ib);if(ib[1])throw End_of_file;return c}
    function end_of_input(ib){peek_char(ib);return ib[1]}
    function beginning_of_input(ib){return 0 === ib[4]?1:0}
    function name_of_input(ib)
     {var _jZ_=ib[9];
      if(typeof _jZ_ === "number")
       return 0 === _jZ_?cst_unnamed_function:cst_unnamed_character_string;
      else
       {if(0 === _jZ_[0])return cst_unnamed_Stdlib_input_chann;
        var fname=_jZ_[1];
        return fname}}
    function char_count(ib){return ib[3]?ib[4] - 1 | 0:ib[4]}
    function reset_token(ib){return reset(ib[8])}
    function invalidate_current_char(ib){ib[3] = 0;return 0}
    function token_string(ib)
     {var token_buffer=ib[8],tok=contents(token_buffer);
      clear$1(token_buffer);
      ib[6] = ib[6] + 1 | 0;
      return tok}
    function skip_char(width,ib){invalidate_current_char(ib);return width}
    function ignore_char(width,ib){return skip_char(width - 1 | 0,ib)}
    function store_char(width,ib,c)
     {add_char(ib[8],c);return ignore_char(width,ib)}
    var default_token_buffer_size=1024;
    function create$4(iname,next)
     {return [0,
              0,
              null_char,
              0,
              0,
              0,
              0,
              next,
              create$2(default_token_buffer_size),
              iname]}
    function from_string$1(s)
     {var i=[0,0],len=caml_ml_string_length(s);
      function next(param)
       {if(len <= i[1])throw End_of_file;
        var c=caml_string_get(s,i[1]);
        i[1]++;
        return c}
      return create$4(1,next)}
    var _cr_=0;
    function from_function$0(_jY_){return create$4(_cr_,_jY_)}
    var len=1024;
    function scan_close_at_end(ic)
     {caml_ml_close_channel(ic);throw End_of_file}
    function scan_raise_at_end(ic){throw End_of_file}
    function from_ic(scan_close_ic,iname,ic)
     {var buf=caml_create_bytes(1024),i=[0,0],lim=[0,0],eof=[0,0];
      function next(param)
       {if(i[1] < lim[1]){var c=caml_bytes_get(buf,i[1]);i[1]++;return c}
        if(eof[1])throw End_of_file;
        lim[1] = input(ic,buf,0,len);
        return 0 === lim[1]
                ?(eof[1] = 1,caml_call1(scan_close_ic,ic))
                :(i[1] = 1,caml_bytes_get(buf,0))}
      return create$4(iname,next)}
    var stdib=from_ic(scan_raise_at_end,[1,cst$86,stdin],stdin);
    function open_in_file(open_in,fname)
     {if(caml_string_notequal(fname,cst$87))
       {var ic=caml_call1(open_in,fname);
        return from_ic(scan_close_at_end,[1,fname,ic],ic)}
      return stdib}
    function from_file(_jX_){return open_in_file(open_text$0,_jX_)}
    function from_file_bin(_jW_){return open_in_file(open_bin$0,_jW_)}
    function from_channel$0(ic){return from_ic(scan_raise_at_end,[0,ic],ic)}
    function close_in(ib)
     {var _jV_=ib[9];
      if(typeof _jV_ === "number")
       return 0;
      else
       {if(0 === _jV_[0]){var ic=_jV_[1];return caml_ml_close_channel(ic)}
        var ic$0=_jV_[2];
        return caml_ml_close_channel(ic$0)}}
    var memo=[0,0];
    function memo_from_ic(scan_close_ic,ic)
     {try
       {var _jT_=assq(ic,memo[1]);return _jT_}
      catch(_jU_)
       {_jU_ = caml_wrap_exception(_jU_);
        if(_jU_ === Not_found)
         {var ib=from_ic(scan_close_ic,[0,ic],ic);
          memo[1] = [0,[0,ic,ib],memo[1]];
          return ib}
        throw _jU_}}
    function memo_from_channel(_jS_)
     {return memo_from_ic(scan_raise_at_end,_jS_)}
    var Scan_failure=[248,cst_Stdlib_Scanf_Scan_failure,caml_fresh_oo_id(0)];
    function bad_input(s){throw [0,Scan_failure,s]}
    function bad_input_escape(c)
     {return bad_input(caml_call1(sprintf(_cs_),c))}
    function bad_token_length(message)
     {return bad_input(caml_call1(sprintf(_ct_),message))}
    function bad_float(param)
     {return bad_input(cst_no_dot_or_exponent_part_fo)}
    function bad_hex_float(param)
     {return bad_input(cst_not_a_valid_float_in_hexad)}
    function character_mismatch(c,ci)
     {return bad_input(caml_call2(sprintf(_cv_),c,ci))}
    function check_this_char(ib,c)
     {var ci=checked_peek_char(ib);
      return ci === c?invalidate_current_char(ib):character_mismatch(c,ci)}
    function check_char(ib,c$0)
     {if(10 === c$0)
       {var ci=checked_peek_char(ib);
        return 10 === ci
                ?invalidate_current_char(ib)
                :13 === ci
                  ?(invalidate_current_char(ib),check_this_char(ib,10))
                  :character_mismatch(10,ci)}
      if(32 === c$0)
       for(;;)
        {var c=peek_char(ib),_jQ_=1 - ib[1];
         if(_jQ_)
          {var _jR_=c - 9 | 0,switch$0=0;
           if(4 < _jR_ >>> 0)
            {if(23 === _jR_)switch$0 = 1}
           else
            if(1 < _jR_ - 2 >>> 0)switch$0 = 1;
           if(switch$0){invalidate_current_char(ib);continue}
           return 0}
         return _jQ_}
      return check_this_char(ib,c$0)}
    function token_char(ib){return caml_string_get(token_string(ib),0)}
    function token_bool(ib)
     {var s=token_string(ib);
      return caml_string_notequal(s,cst_false$3)
              ?caml_string_notequal(s,cst_true$3)
                ?bad_input(caml_call1(sprintf(_cw_),s))
                :1
              :0}
    function integer_conversion_of_char(param)
     {var switcher=param - 88 | 0;
      if(! (32 < switcher >>> 0))
       switch(switcher)
        {case 10:return 0;
         case 12:return 1;
         case 17:return 2;
         case 23:return 3;
         case 29:return 4;
         case 0:
         case 32:return 5
         }
      throw [0,Assert_failure,_cx_]}
    function token_int_literal(conv,ib)
     {switch(conv)
       {case 0:var tok=cat(cst_0b,token_string(ib));break;
        case 3:var tok=cat(cst_0o,token_string(ib));break;
        case 4:var tok=cat(cst_0u,token_string(ib));break;
        case 5:var tok=cat(cst_0x,token_string(ib));break;
        default:var tok=token_string(ib)}
      var l=caml_ml_string_length(tok);
      if(0 !== l && 43 === caml_string_get(tok,0))
       return sub$0(tok,1,l - 1 | 0);
      return tok}
    function token_float(ib){return caml_float_of_string(token_string(ib))}
    function scan_decimal_digit_star(width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(58 <= c)
         {if(95 === c)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}}
        else
         if(48 <= c)
          {var width$2=store_char(width$0,ib,c),width$0=width$2;continue}
        return width$0}}
    function scan_unsigned_decimal_int(width,ib)
     {if(0 === width)return bad_token_length(cst_decimal_digits);
      var c=checked_peek_char(ib);
      if(9 < c - 48 >>> 0)return bad_input(caml_call1(sprintf(_cy_),c));
      var width$0=store_char(width,ib,c);
      return scan_decimal_digit_star(width$0,ib)}
    function scan_digit_plus(basis,digitp,width$2,ib)
     {if(0 === width$2)return bad_token_length(cst_digits);
      var c$0=checked_peek_char(ib);
      if(caml_call1(digitp,c$0))
       {var width$3=store_char(width$2,ib,c$0),width=width$3;
        for(;;)
         {if(0 === width)return width;
          var c=peek_char(ib);
          if(ib[1])return width;
          if(caml_call1(digitp,c))
           {var width$0=store_char(width,ib,c),width=width$0;continue}
          if(95 === c)
           {var width$1=ignore_char(width,ib),width=width$1;continue}
          return width}}
      return bad_input(caml_call2(sprintf(_cz_),c$0,basis))}
    function is_binary_digit(param){return 1 < param - 48 >>> 0?0:1}
    function scan_binary_int(_jO_,_jP_)
     {return scan_digit_plus(cst_binary,is_binary_digit,_jO_,_jP_)}
    function is_octal_digit(param){return 7 < param - 48 >>> 0?0:1}
    function scan_octal_int(_jM_,_jN_)
     {return scan_digit_plus(cst_octal,is_octal_digit,_jM_,_jN_)}
    function is_hexa_digit(param)
     {var _jL_=param - 48 | 0,switch$0=0;
      if(22 < _jL_ >>> 0)
       {if(! (5 < _jL_ - 49 >>> 0))switch$0 = 1}
      else
       if(6 < _jL_ - 10 >>> 0)switch$0 = 1;
      return switch$0?1:0}
    function scan_hexadecimal_int(_jJ_,_jK_)
     {return scan_digit_plus(cst_hexadecimal,is_hexa_digit,_jJ_,_jK_)}
    function scan_sign(width,ib)
     {var c=checked_peek_char(ib),switcher=c - 43 | 0;
      if(! (2 < switcher >>> 0))
       switch(switcher)
        {case 0:return store_char(width,ib,c);
         case 1:break;
         default:return store_char(width,ib,c)}
      return width}
    function scan_optionally_signed_decimal(width,ib)
     {var width$0=scan_sign(width,ib);
      return scan_unsigned_decimal_int(width$0,ib)}
    function scan_int_conversion(conv,width$1,ib)
     {switch(conv)
       {case 0:return scan_binary_int(width$1,ib);
        case 1:return scan_optionally_signed_decimal(width$1,ib);
        case 2:
         var width$0=scan_sign(width$1,ib),c=checked_peek_char(ib);
         if(48 === c)
          {var width=store_char(width$0,ib,c);
           if(0 === width)return width;
           var c$0=peek_char(ib);
           if(ib[1])return width;
           var switch$0=0;
           if(99 <= c$0)
            {if(111 === c$0)
              return scan_octal_int(store_char(width,ib,c$0),ib);
             if(120 === c$0)switch$0 = 1}
           else
            if(88 === c$0)
             switch$0 = 1;
            else
             if(98 <= c$0)return scan_binary_int(store_char(width,ib,c$0),ib);
           return switch$0
                   ?scan_hexadecimal_int(store_char(width,ib,c$0),ib)
                   :scan_decimal_digit_star(width,ib)}
         return scan_unsigned_decimal_int(width$0,ib);
        case 3:return scan_octal_int(width$1,ib);
        case 4:return scan_unsigned_decimal_int(width$1,ib);
        default:return scan_hexadecimal_int(width$1,ib)}}
    function scan_fractional_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      return ib[1]
              ?width
              :9 < c - 48 >>> 0
                ?width
                :scan_decimal_digit_star(store_char(width,ib,c),ib)}
    function scan_exponent_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      if(ib[1])return width;
      if(69 !== c && 101 !== c)return width;
      return scan_optionally_signed_decimal(store_char(width,ib,c),ib)}
    function scan_float(width$1,precision,ib)
     {var
       width=scan_sign(width$1,ib),
       width$0=scan_decimal_digit_star(width,ib);
      if(0 === width$0)return [0,width$0,precision];
      var c=peek_char(ib);
      if(ib[1])return [0,width$0,precision];
      if(46 === c)
       {var
         width$2=store_char(width$0,ib,c),
         precision$0=min$1(width$2,precision),
         width$3=
          width$2
          -
          (precision$0 - scan_fractional_part(precision$0,ib) | 0)
          |
          0;
        return [0,scan_exponent_part(width$3,ib),precision$0]}
      return [0,scan_exponent_part(width$0,ib),precision]}
    function check_case_insensitive_string(width,ib,error,str)
     {function lowercase(c)
       {return 25 < c - 65 >>> 0?c:char_of_int((c - 65 | 0) + 97 | 0)}
      var
       len=caml_ml_string_length(str),
       width$0=[0,width],
       _jG_=len - 1 | 0,
       _jF_=0;
      if(! (_jG_ < 0))
       {var i=_jF_;
        for(;;)
         {var c=peek_char(ib),_jH_=lowercase(caml_string_get(str,i));
          if(lowercase(c) !== _jH_)caml_call1(error,0);
          if(0 === width$0[1])caml_call1(error,0);
          width$0[1] = store_char(width$0[1],ib,c);
          var _jI_=i + 1 | 0;
          if(_jG_ !== i){var i=_jI_;continue}
          break}}
      return width$0[1]}
    function scan_hex_float(width,precision,ib)
     {var _js_=0 === width?1:0,_jt_=_js_ || end_of_input(ib);
      if(_jt_)bad_hex_float(0);
      var
       width$0=scan_sign(width,ib),
       _ju_=0 === width$0?1:0,
       _jv_=_ju_ || end_of_input(ib);
      if(_jv_)bad_hex_float(0);
      var c=peek_char(ib),switch$0=0;
      if(78 <= c)
       {var switcher=c - 79 | 0;
        if(30 < switcher >>> 0)
         {if(! (32 <= switcher))
           {var
             width$1=store_char(width$0,ib,c),
             _jw_=0 === width$1?1:0,
             _jx_=_jw_ || end_of_input(ib);
            if(_jx_)bad_hex_float(0);
            return check_case_insensitive_string
                    (width$1,ib,bad_hex_float,cst_an)}}
        else
         if(26 === switcher)switch$0 = 1}
      else
       {if(48 === c)
         {var
           width$3=store_char(width$0,ib,c),
           _jA_=0 === width$3?1:0,
           _jB_=_jA_ || end_of_input(ib);
          if(_jB_)bad_hex_float(0);
          var
           width$4=
            check_case_insensitive_string(width$3,ib,bad_hex_float,cst_x$2);
          if(0 !== width$4 && ! end_of_input(ib))
           {var match=peek_char(ib),_jC_=match - 46 | 0,switch$1=0;
            if(34 < _jC_ >>> 0)
             {if(66 === _jC_)switch$1 = 1}
            else
             if(32 < _jC_ - 1 >>> 0)switch$1 = 1;
            var width$5=switch$1?width$4:scan_hexadecimal_int(width$4,ib);
            if(0 !== width$5 && ! end_of_input(ib))
             {var c$0=peek_char(ib);
              if(46 === c$0)
               {var width$6=store_char(width$5,ib,c$0),switch$2=0;
                if(0 !== width$6 && ! end_of_input(ib))
                 {var match$0=peek_char(ib),switch$3=0;
                  if(80 !== match$0 && 112 !== match$0)
                   {var
                     precision$0=min$1(width$6,precision),
                     width$10=
                      width$6
                      -
                      (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                      |
                      0;
                    switch$3 = 1}
                  if(! switch$3)var width$10=width$6;
                  var width$7=width$10;
                  switch$2 = 1}
                if(! switch$2)var width$7=width$6;
                var width$8=width$7}
              else
               var width$8=width$5;
              if(0 !== width$8 && ! end_of_input(ib))
               {var c$1=peek_char(ib);
                if(80 !== c$1 && 112 !== c$1)return width$8;
                var
                 width$9=store_char(width$8,ib,c$1),
                 _jD_=0 === width$9?1:0,
                 _jE_=_jD_ || end_of_input(ib);
                if(_jE_)bad_hex_float(0);
                return scan_optionally_signed_decimal(width$9,ib)}
              return width$8}
            return width$5}
          return width$4}
        if(73 === c)switch$0 = 1}
      if(switch$0)
       {var
         width$2=store_char(width$0,ib,c),
         _jy_=0 === width$2?1:0,
         _jz_=_jy_ || end_of_input(ib);
        if(_jz_)bad_hex_float(0);
        return check_case_insensitive_string
                (width$2,ib,bad_hex_float,cst_nfinity)}
      return bad_hex_float(0)}
    function scan_caml_float_rest(width,precision,ib)
     {var _jo_=0 === width?1:0,_jp_=_jo_ || end_of_input(ib);
      if(_jp_)bad_float(0);
      var
       width$0=scan_decimal_digit_star(width,ib),
       _jq_=0 === width$0?1:0,
       _jr_=_jq_ || end_of_input(ib);
      if(_jr_)bad_float(0);
      var c=peek_char(ib),switcher=c - 69 | 0;
      if(32 < switcher >>> 0)
       {if(-23 === switcher)
         {var
           width$1=store_char(width$0,ib,c),
           precision$0=min$1(width$1,precision),
           width_precision=scan_fractional_part(precision$0,ib),
           frac_width=precision$0 - width_precision | 0,
           width$2=width$1 - frac_width | 0;
          return scan_exponent_part(width$2,ib)}}
      else
       if(30 < switcher - 1 >>> 0)return scan_exponent_part(width$0,ib);
      return bad_float(0)}
    function scan_caml_float(width,precision,ib)
     {var _ja_=0 === width?1:0,_jb_=_ja_ || end_of_input(ib);
      if(_jb_)bad_float(0);
      var
       width$0=scan_sign(width,ib),
       _jc_=0 === width$0?1:0,
       _jd_=_jc_ || end_of_input(ib);
      if(_jd_)bad_float(0);
      var c=peek_char(ib);
      if(49 <= c)
       {if(! (58 <= c))
         {var
           width$1=store_char(width$0,ib,c),
           _je_=0 === width$1?1:0,
           _jf_=_je_ || end_of_input(ib);
          if(_jf_)bad_float(0);
          return scan_caml_float_rest(width$1,precision,ib)}}
      else
       if(48 <= c)
        {var
          width$2=store_char(width$0,ib,c),
          _jg_=0 === width$2?1:0,
          _jh_=_jg_ || end_of_input(ib);
         if(_jh_)bad_float(0);
         var c$0=peek_char(ib);
         if(88 !== c$0 && 120 !== c$0)
          return scan_caml_float_rest(width$2,precision,ib);
         var
          width$3=store_char(width$2,ib,c$0),
          _ji_=0 === width$3?1:0,
          _jj_=_ji_ || end_of_input(ib);
         if(_jj_)bad_float(0);
         var
          width$4=scan_hexadecimal_int(width$3,ib),
          _jk_=0 === width$4?1:0,
          _jl_=_jk_ || end_of_input(ib);
         if(_jl_)bad_float(0);
         var c$1=peek_char(ib),switcher=c$1 - 80 | 0,switch$0=0;
         if(32 < switcher >>> 0)
          if(-34 === switcher)
           {var width$5=store_char(width$4,ib,c$1),switch$1=0;
            if(0 !== width$5 && ! end_of_input(ib))
             {var match=peek_char(ib),switch$2=0;
              if(80 !== match && 112 !== match)
               {var
                 precision$0=min$1(width$5,precision),
                 width$10=
                  width$5
                  -
                  (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                  |
                  0;
                switch$2 = 1}
              if(! switch$2)var width$10=width$5;
              var width$6=width$10;
              switch$1 = 1}
            if(! switch$1)var width$6=width$5;
            var width$7=width$6}
          else
           switch$0 = 1;
         else
          if(30 < switcher - 1 >>> 0)var width$7=width$4;else switch$0 = 1;
         var width$8=switch$0?bad_float(0):width$7;
         if(0 !== width$8 && ! end_of_input(ib))
          {var c$2=peek_char(ib);
           if(80 !== c$2 && 112 !== c$2)return width$8;
           var
            width$9=store_char(width$8,ib,c$2),
            _jm_=0 === width$9?1:0,
            _jn_=_jm_ || end_of_input(ib);
           if(_jn_)bad_hex_float(0);
           return scan_optionally_signed_decimal(width$9,ib)}
         return width$8}
      return bad_float(0)}
    function scan_string(stp,width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(stp)
         {var c$0=stp[1];
          if(c === c$0)return skip_char(width$0,ib);
          var width$1=store_char(width$0,ib,c),width$0=width$1;
          continue}
        var _i$_=c - 9 | 0,switch$0=0;
        if(4 < _i$_ >>> 0)
         {if(23 === _i$_)switch$0 = 1}
        else
         if(1 < _i$_ - 2 >>> 0)switch$0 = 1;
        if(switch$0)return width$0;
        var width$2=store_char(width$0,ib,c),width$0=width$2;
        continue}}
    function scan_char(width,ib)
     {return store_char(width,ib,checked_peek_char(ib))}
    function hexadecimal_value_of_char(d)
     {return 97 <= d?d - 87 | 0:65 <= d?d - 55 | 0:d - 48 | 0}
    function check_next_char(message,width,ib)
     {if(0 === width)return bad_token_length(message);
      var c=peek_char(ib);
      return ib[1]?bad_input(caml_call1(sprintf(_cu_),message)):c}
    function check_next_char_for_char(_i9_,_i__)
     {return check_next_char(cst_a_Char,_i9_,_i__)}
    function check_next_char_for_string(_i7_,_i8_)
     {return check_next_char(cst_a_String,_i7_,_i8_)}
    function scan_backslash_char(width,ib)
     {var c0=check_next_char_for_char(width,ib),switch$0=0;
      if(40 <= c0)
       {if(58 <= c0)
         {var switcher=c0 - 92 | 0;
          if(! (28 < switcher >>> 0))
           switch(switcher)
            {case 28:
              var
               get_digit=
                function(param)
                 {var c=next_char(ib),_i6_=c - 48 | 0,switch$0=0;
                  if(22 < _i6_ >>> 0)
                   {if(! (5 < _i6_ - 49 >>> 0))switch$0 = 1}
                  else
                   if(6 < _i6_ - 10 >>> 0)switch$0 = 1;
                  return switch$0?c:bad_input_escape(c)},
               c1=get_digit(0),
               c2=get_digit(0),
               _i2_=hexadecimal_value_of_char(c2),
               c$0=(16 * hexadecimal_value_of_char(c1) | 0) + _i2_ | 0,
               switch$1=0;
              if(0 <= c$0 && ! (255 < c$0))
               {var _i4_=char_of_int(c$0);switch$1 = 1}
              if(! switch$1)
               var _i4_=bad_input(caml_call2(sprintf(_cB_),c1,c2));
              return store_char(width - 2 | 0,ib,_i4_);
             case 0:
             case 6:
             case 18:
             case 22:
             case 24:switch$0 = 1;break
             }}
        else
         if(48 <= c0)
          {var
            get_digit$0=
             function(param)
              {var c=next_char(ib);
               return 9 < c - 48 >>> 0?bad_input_escape(c):c},
            c1$0=get_digit$0(0),
            c2$0=get_digit$0(0),
            c=
             ((100 * (c0 - 48 | 0) | 0) + (10 * (c1$0 - 48 | 0) | 0) | 0)
             +
             (c2$0 - 48 | 0)
             |
             0,
            switch$2=0;
           if(0 <= c && ! (255 < c)){var _i5_=char_of_int(c);switch$2 = 1}
           if(! switch$2)
            var _i5_=bad_input(caml_call3(sprintf(_cA_),c0,c1$0,c2$0));
           return store_char(width - 2 | 0,ib,_i5_)}}
      else
       if(34 === c0 || 39 <= c0)switch$0 = 1;
      if(switch$0)
       {var switch$3=0;
        if(110 <= c0)
         if(117 <= c0)
          switch$3 = 1;
         else
          switch(c0 - 110 | 0)
           {case 0:var _i3_=10;break;
            case 4:var _i3_=13;break;
            case 6:var _i3_=9;break;
            default:switch$3 = 1}
        else
         if(98 === c0)var _i3_=8;else switch$3 = 1;
        if(switch$3)var _i3_=c0;
        return store_char(width,ib,_i3_)}
      return bad_input_escape(c0)}
    function scan_caml_char(width,ib)
     {function find_stop(width)
       {var c=check_next_char_for_char(width,ib);
        return 39 === c?ignore_char(width,ib):character_mismatch(39,c)}
      var c=checked_peek_char(ib);
      if(39 === c)
       {var
         width$0=ignore_char(width,ib),
         c$0=check_next_char_for_char(width$0,ib);
        return 92 === c$0
                ?find_stop(scan_backslash_char(ignore_char(width$0,ib),ib))
                :find_stop(store_char(width$0,ib,c$0))}
      return character_mismatch(39,c)}
    function scan_caml_string(width,ib)
     {function find_stop$0(counter,width)
       {var width$0=width;
        for(;;)
         {var c=check_next_char_for_string(width$0,ib);
          if(34 === c)return ignore_char(width$0,ib);
          if(92 === c)
           {var
             width$1=ignore_char(width$0,ib),
             match=check_next_char_for_string(width$1,ib);
            if(10 === match)
             {var _i0_=ignore_char(width$1,ib);
              if(counter < 50)
               {var counter$0=counter + 1 | 0;
                return skip_spaces(counter$0,_i0_)}
              return caml_trampoline_return(skip_spaces,[0,_i0_])}
            if(13 === match)
             {var
               width$3=ignore_char(width$1,ib),
               match$0=check_next_char_for_string(width$3,ib);
              if(10 === match$0)
               {var _i1_=ignore_char(width$3,ib);
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return skip_spaces(counter$1,_i1_)}
                return caml_trampoline_return(skip_spaces,[0,_i1_])}
              var width$5=store_char(width$3,ib,13),width$0=width$5;
              continue}
            var width$4=scan_backslash_char(width$1,ib),width$0=width$4;
            continue}
          var width$2=store_char(width$0,ib,c),width$0=width$2;
          continue}}
      function skip_spaces(counter,width)
       {var width$0=width;
        for(;;)
         {var match=check_next_char_for_string(width$0,ib);
          if(32 === match)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return find_stop$0(counter$0,width$0)}
          return caml_trampoline_return(find_stop$0,[0,width$0])}}
      function find_stop(width){return caml_trampoline(find_stop$0(0,width))}
      var c=checked_peek_char(ib);
      return 34 === c
              ?find_stop(ignore_char(width,ib))
              :character_mismatch(34,c)}
    function scan_chars_in_char_set(char_set,scan_indic,width,ib)
     {function scan_chars(i,stp)
       {var i$0=i;
        for(;;)
         {var c=peek_char(ib),_iW_=0 < i$0?1:0;
          if(_iW_)
           {var _iX_=1 - ib[1];
            if(_iX_)
             var _iY_=is_in_char_set(char_set,c),_iZ_=_iY_?c !== stp?1:0:_iY_;
            else
             var _iZ_=_iX_}
          else
           var _iZ_=_iW_;
          if(_iZ_)
           {store_char(max_int,ib,c);var i$1=i$0 - 1 | 0,i$0=i$1;continue}
          return _iZ_}}
      if(scan_indic)
       {var c=scan_indic[1];
        scan_chars(width,c);
        var _iV_=1 - ib[1];
        if(_iV_)
         {var ci=peek_char(ib);
          return c === ci?invalidate_current_char(ib):character_mismatch(c,ci)}
        return _iV_}
      return scan_chars(width,-1)}
    function scanf_bad_input(ib,x)
     {if(x[1] === Scan_failure)
       var s=x[2];
      else
       {if(x[1] !== Failure)throw x;var s=x[2]}
      var i=char_count(ib);
      return bad_input(caml_call2(sprintf(_cD_),i,s))}
    function get_counter(ib,counter)
     {switch(counter)
       {case 0:return ib[5];case 1:return char_count(ib);default:return ib[6]}}
    function width_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return width}return max_int}
    function stopper_of_formatting_lit(fmting)
     {if(6 === fmting)return _cE_;
      var
       str=string_of_formatting_lit(fmting),
       stp=caml_string_get(str,1),
       sub_str=sub$0(str,2,caml_ml_string_length(str) - 2 | 0);
      return [0,stp,sub_str]}
    function take_format_readers$0(counter,k,fmt)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k,0);
       else
        switch(fmt$0[0])
         {case 0:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 1:var fmt$2=fmt$0[1],fmt$0=fmt$2;continue;
          case 2:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 3:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 4:var fmt$5=fmt$0[4],fmt$0=fmt$5;continue;
          case 5:var fmt$6=fmt$0[4],fmt$0=fmt$6;continue;
          case 6:var fmt$7=fmt$0[4],fmt$0=fmt$7;continue;
          case 7:var fmt$8=fmt$0[4],fmt$0=fmt$8;continue;
          case 8:var fmt$9=fmt$0[4],fmt$0=fmt$9;continue;
          case 9:var fmt$10=fmt$0[2],fmt$0=fmt$10;continue;
          case 10:var fmt$11=fmt$0[1],fmt$0=fmt$11;continue;
          case 11:var fmt$12=fmt$0[2],fmt$0=fmt$12;continue;
          case 12:var fmt$13=fmt$0[2],fmt$0=fmt$13;continue;
          case 13:var fmt$14=fmt$0[3],fmt$0=fmt$14;continue;
          case 14:
           var rest=fmt$0[3],fmtty=fmt$0[2],_iT_=erase_rel(symm(fmtty));
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return take_fmtty_format_readers$0(counter$0,k,_iT_,rest)}
           return caml_trampoline_return
                   (take_fmtty_format_readers$0,[0,k,_iT_,rest]);
          case 15:var fmt$15=fmt$0[1],fmt$0=fmt$15;continue;
          case 16:var fmt$16=fmt$0[1],fmt$0=fmt$16;continue;
          case 17:var fmt$17=fmt$0[2],fmt$0=fmt$17;continue;
          case 18:
           var _iU_=fmt$0[1];
           if(0 === _iU_[0])
            {var
              rest$0=fmt$0[2],
              match=_iU_[1],
              fmt$18=match[1],
              fmt$19=concat_fmt(fmt$18,rest$0),
              fmt$0=fmt$19;
             continue}
           var
            rest$1=fmt$0[2],
            match$0=_iU_[1],
            fmt$20=match$0[1],
            fmt$21=concat_fmt(fmt$20,rest$1),
            fmt$0=fmt$21;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_format_readers(new_k,fmt_rest)};
          case 20:var fmt$22=fmt$0[3],fmt$0=fmt$22;continue;
          case 21:var fmt$23=fmt$0[2],fmt$0=fmt$23;continue;
          case 22:var fmt$24=fmt$0[1],fmt$0=fmt$24;continue;
          case 23:
           var rest$2=fmt$0[2],ign=fmt$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:
               return function(reader)
                {function new_k(readers_rest)
                  {return caml_call1(k,[0,reader,readers_rest])}
                 return take_format_readers(new_k,rest$2)};
              default:var fmt$0=rest$2;continue}
           else
            switch(ign[0])
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:var fmt$0=rest$2;continue;
              case 3:var fmt$0=rest$2;continue;
              case 4:var fmt$0=rest$2;continue;
              case 5:var fmt$0=rest$2;continue;
              case 6:var fmt$0=rest$2;continue;
              case 7:var fmt$0=rest$2;continue;
              case 8:var fmt$0=rest$2;continue;
              case 9:
               var fmtty$0=ign[2];
               if(counter < 50)
                {var counter$1=counter + 1 | 0;
                 return take_fmtty_format_readers$0
                         (counter$1,k,fmtty$0,rest$2)}
               return caml_trampoline_return
                       (take_fmtty_format_readers$0,[0,k,fmtty$0,rest$2]);
              case 10:var fmt$0=rest$2;continue;
              default:var fmt$0=rest$2;continue}
          default:var fmt$25=fmt$0[3],fmt$0=fmt$25;continue}}
    function take_fmtty_format_readers$0(counter,k,fmtty,fmt)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        {if(counter < 50)
          {var counter$0=counter + 1 | 0;
           return take_format_readers$0(counter$0,k,fmt)}
         return caml_trampoline_return(take_format_readers$0,[0,k,fmt])}
       else
        switch(fmtty$0[0])
         {case 0:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 1:var fmtty$2=fmtty$0[1],fmtty$0=fmtty$2;continue;
          case 2:var fmtty$3=fmtty$0[1],fmtty$0=fmtty$3;continue;
          case 3:var fmtty$4=fmtty$0[1],fmtty$0=fmtty$4;continue;
          case 4:var fmtty$5=fmtty$0[1],fmtty$0=fmtty$5;continue;
          case 5:var fmtty$6=fmtty$0[1],fmtty$0=fmtty$6;continue;
          case 6:var fmtty$7=fmtty$0[1],fmtty$0=fmtty$7;continue;
          case 7:var fmtty$8=fmtty$0[1],fmtty$0=fmtty$8;continue;
          case 8:var fmtty$9=fmtty$0[2],fmtty$0=fmtty$9;continue;
          case 9:
           var
            rest=fmtty$0[3],
            ty2=fmtty$0[2],
            ty1=fmtty$0[1],
            ty=trans(symm(ty1),ty2),
            fmtty$10=concat_fmtty(ty,rest),
            fmtty$0=fmtty$10;
           continue;
          case 10:var fmtty$11=fmtty$0[1],fmtty$0=fmtty$11;continue;
          case 11:var fmtty$12=fmtty$0[1],fmtty$0=fmtty$12;continue;
          case 12:var fmtty$13=fmtty$0[1],fmtty$0=fmtty$13;continue;
          case 13:
           var fmt_rest=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest,fmt)};
          default:
           var fmt_rest$0=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest$0,fmt)}}}
    function take_format_readers(k,fmt)
     {return caml_trampoline(take_format_readers$0(0,k,fmt))}
    function take_fmtty_format_readers(k,fmtty,fmt)
     {return caml_trampoline(take_fmtty_format_readers$0(0,k,fmtty,fmt))}
    function make_scanf(ib,fmt,readers)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return 0;
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           scan_char(0,ib);
           var c=token_char(ib);
           return [0,c,make_scanf(ib,rest,readers)];
          case 1:
           var rest$0=fmt$0[1];
           scan_caml_char(0,ib);
           var c$0=token_char(ib);
           return [0,c$0,make_scanf(ib,rest$0,readers)];
          case 2:
           var _iG_=fmt$0[1],_iH_=fmt$0[2];
           if(typeof _iH_ !== "number")
            switch(_iH_[0])
             {case 17:
               var
                rest$2=_iH_[2],
                fmting_lit=_iH_[1],
                match=stopper_of_formatting_lit(fmting_lit),
                str=match[2],
                stp=match[1],
                scan$0=
                 function(width,param,ib)
                  {return scan_string([0,stp],width,ib)},
                str_rest=[11,str,rest$2];
               return pad_prec_scanf
                       (ib,str_rest,readers,_iG_,0,scan$0,token_string);
              case 18:
               var _iI_=_iH_[1];
               if(0 === _iI_[0])
                {var
                  rest$3=_iH_[2],
                  match$0=_iI_[1],
                  fmt$1=match$0[1],
                  scan$1=
                   function(width,param,ib){return scan_string(_cF_,width,ib)};
                 return pad_prec_scanf
                         (ib,
                          concat_fmt(fmt$1,rest$3),
                          readers,
                          _iG_,
                          0,
                          scan$1,
                          token_string)}
               var
                rest$4=_iH_[2],
                match$1=_iI_[1],
                fmt$2=match$1[1],
                scan$2=
                 function(width,param,ib){return scan_string(_cG_,width,ib)};
               return pad_prec_scanf
                       (ib,
                        concat_fmt(fmt$2,rest$4),
                        readers,
                        _iG_,
                        0,
                        scan$2,
                        token_string)
              }
           var
            rest$1=fmt$0[2],
            scan=function(width,param,ib){return scan_string(0,width,ib)};
           return pad_prec_scanf(ib,rest$1,readers,_iG_,0,scan,token_string);
          case 3:
           var
            rest$5=fmt$0[2],
            pad=fmt$0[1],
            scan$3=function(width,param,ib){return scan_caml_string(width,ib)};
           return pad_prec_scanf(ib,rest$5,readers,pad,0,scan$3,token_string);
          case 4:
           var
            rest$6=fmt$0[4],
            prec=fmt$0[3],
            pad$0=fmt$0[2],
            iconv=fmt$0[1],
            conv=integer_conversion_of_char(char_of_iconv(iconv)),
            scan$4=
             function(width,param,ib)
              {return scan_int_conversion(conv,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$6,
                    readers,
                    pad$0,
                    prec,
                    scan$4,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv,ib))});
          case 5:
           var
            rest$7=fmt$0[4],
            prec$0=fmt$0[3],
            pad$1=fmt$0[2],
            iconv$0=fmt$0[1],
            conv$0=integer_conversion_of_char(char_of_iconv(iconv$0)),
            scan$5=
             function(width,param,ib)
              {return scan_int_conversion(conv$0,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$7,
                    readers,
                    pad$1,
                    prec$0,
                    scan$5,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$0,ib))});
          case 6:
           var
            rest$8=fmt$0[4],
            prec$1=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$1=fmt$0[1],
            conv$1=integer_conversion_of_char(char_of_iconv(iconv$1)),
            scan$6=
             function(width,param,ib)
              {return scan_int_conversion(conv$1,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$8,
                    readers,
                    pad$2,
                    prec$1,
                    scan$6,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$1,ib))});
          case 7:
           var
            rest$9=fmt$0[4],
            prec$2=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$2=fmt$0[1],
            conv$2=integer_conversion_of_char(char_of_iconv(iconv$2)),
            scan$7=
             function(width,param,ib)
              {return scan_int_conversion(conv$2,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$9,
                    readers,
                    pad$3,
                    prec$2,
                    scan$7,
                    function(ib)
                     {return caml_int64_of_string(token_int_literal(conv$2,ib))});
          case 8:
           switch(fmt$0[1][2])
            {case 5:
             case 8:
              var rest$11=fmt$0[4],prec$4=fmt$0[3],pad$5=fmt$0[2];
              return pad_prec_scanf
                      (ib,
                       rest$11,
                       readers,
                       pad$5,
                       prec$4,
                       scan_caml_float,
                       token_float);
             case 6:
             case 7:
              var rest$12=fmt$0[4],prec$5=fmt$0[3],pad$6=fmt$0[2];
              return pad_prec_scanf
                      (ib,rest$12,readers,pad$6,prec$5,scan_hex_float,token_float);
             default:
              var rest$10=fmt$0[4],prec$3=fmt$0[3],pad$4=fmt$0[2];
              return pad_prec_scanf
                      (ib,rest$10,readers,pad$4,prec$3,scan_float,token_float)}
          case 9:
           var
            rest$13=fmt$0[2],
            pad$7=fmt$0[1],
            scan$8=
             function(param,_iS_,ib)
              {var
                c=checked_peek_char(ib),
                m=
                 102 === c
                  ?5
                  :116 === c?4:bad_input(caml_call1(sprintf(_cC_),c));
               return scan_string(0,m,ib)};
           return pad_prec_scanf(ib,rest$13,readers,pad$7,0,scan$8,token_bool);
          case 10:
           var rest$14=fmt$0[1];
           if(end_of_input(ib)){var fmt$0=rest$14;continue}
           return bad_input(cst_end_of_input_not_found);
          case 11:
           var rest$15=fmt$0[2],str$0=fmt$0[1];
           iter$4(function(_iR_){return check_char(ib,_iR_)},str$0);
           var fmt$0=rest$15;
           continue;
          case 12:
           var rest$16=fmt$0[2],chr=fmt$0[1];
           check_char(ib,chr);
           var fmt$0=rest$16;
           continue;
          case 13:
           var rest$17=fmt$0[3],fmtty=fmt$0[2],pad_opt=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt),ib);
           var s=token_string(ib);
           try
            {var _iJ_=format_of_string_fmtty(s,fmtty),fmt$3=_iJ_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var msg=exn[2],fmt$3=bad_input(msg)}
           return [0,fmt$3,make_scanf(ib,rest$17,readers)];
          case 14:
           var rest$18=fmt$0[3],fmtty$0=fmt$0[2],pad_opt$0=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt$0),ib);
           var s$0=token_string(ib);
           try
            {var
              match$2=fmt_ebb_of_string(0,s$0),
              fmt$6=match$2[1],
              match$3=fmt_ebb_of_string(0,s$0),
              fmt$7=match$3[1],
              fmt$8=type_format(fmt$7,erase_rel(symm(fmtty$0))),
              _iL_=type_format(fmt$6,erase_rel(fmtty$0)),
              fmt$5=fmt$8,
              fmt$4=_iL_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var
              msg$0=exn[2],
              _iK_=bad_input(msg$0),
              fmt$5=_iK_[2],
              fmt$4=_iK_[1]}
           return [0,
                   [0,fmt$4,s$0],
                   make_scanf(ib,concat_fmt(fmt$5,rest$18),readers)];
          case 15:return invalid_arg(cst_scanf_bad_conversion_a);
          case 16:return invalid_arg(cst_scanf_bad_conversion_t);
          case 17:
           var
            rest$19=fmt$0[2],
            formatting_lit=fmt$0[1],
            _iM_=string_of_formatting_lit(formatting_lit);
           iter$4(function(_iQ_){return check_char(ib,_iQ_)},_iM_);
           var fmt$0=rest$19;
           continue;
          case 18:
           var _iN_=fmt$0[1];
           if(0 === _iN_[0])
            {var rest$20=fmt$0[2],match$4=_iN_[1],fmt$9=match$4[1];
             check_char(ib,64);
             check_char(ib,123);
             var fmt$10=concat_fmt(fmt$9,rest$20),fmt$0=fmt$10;
             continue}
           var rest$21=fmt$0[2],match$5=_iN_[1],fmt$11=match$5[1];
           check_char(ib,64);
           check_char(ib,91);
           var fmt$12=concat_fmt(fmt$11,rest$21),fmt$0=fmt$12;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           if(readers)
            {var
              readers_rest=readers[2],
              reader=readers[1],
              x=caml_call1(reader,ib);
             return [0,x,make_scanf(ib,fmt_rest,readers_rest)]}
           return invalid_arg(cst_scanf_missing_reader);
          case 20:
           var _iO_=fmt$0[1],_iP_=fmt$0[3];
           if(typeof _iP_ !== "number" && 17 === _iP_[0])
            {var
              rest$23=_iP_[2],
              fmting_lit$0=_iP_[1],
              char_set$0=fmt$0[2],
              match$6=stopper_of_formatting_lit(fmting_lit$0),
              str$1=match$6[2],
              stp$0=match$6[1],
              width$0=width_of_pad_opt(_iO_);
             scan_chars_in_char_set(char_set$0,[0,stp$0],width$0,ib);
             var s$2=token_string(ib),str_rest$0=[11,str$1,rest$23];
             return [0,s$2,make_scanf(ib,str_rest$0,readers)]}
           var
            rest$22=fmt$0[3],
            char_set=fmt$0[2],
            width=width_of_pad_opt(_iO_);
           scan_chars_in_char_set(char_set,0,width,ib);
           var s$1=token_string(ib);
           return [0,s$1,make_scanf(ib,rest$22,readers)];
          case 21:
           var
            rest$24=fmt$0[2],
            counter=fmt$0[1],
            count=get_counter(ib,counter);
           return [0,count,make_scanf(ib,rest$24,readers)];
          case 22:
           var rest$25=fmt$0[1],c$1=checked_peek_char(ib);
           return [0,c$1,make_scanf(ib,rest$25,readers)];
          case 23:
           var
            rest$26=fmt$0[2],
            ign=fmt$0[1],
            match$7=param_format_of_ignored_format(ign,rest$26),
            fmt$13=match$7[1],
            match$8=make_scanf(ib,fmt$13,readers);
           if(match$8){var arg_rest=match$8[2];return arg_rest}
           throw [0,Assert_failure,_cH_];
          default:return invalid_arg(cst_scanf_bad_conversion_custo)}}
    function pad_prec_scanf(ib,fmt,readers,pad,prec,scan,token)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(prec)return invalid_arg(cst_scanf_bad_conversion);
          caml_call3(scan,max_int,max_int,ib);
          var x=caml_call1(token,ib);
          return [0,x,make_scanf(ib,fmt,readers)]}
        var p=prec[1];
        caml_call3(scan,max_int,p,ib);
        var x$0=caml_call1(token,ib);
        return [0,x$0,make_scanf(ib,fmt,readers)]}
      else
       {if(0 === pad[0])
         {if(pad[1])
           {var _iF_=pad[2];
            if(typeof prec === "number")
             {if(prec)return invalid_arg(cst_scanf_bad_conversion$0);
              caml_call3(scan,_iF_,max_int,ib);
              var x$1=caml_call1(token,ib);
              return [0,x$1,make_scanf(ib,fmt,readers)]}
            var p$0=prec[1];
            caml_call3(scan,_iF_,p$0,ib);
            var x$2=caml_call1(token,ib);
            return [0,x$2,make_scanf(ib,fmt,readers)]}
          return invalid_arg(cst_scanf_bad_conversion$1)}
        return invalid_arg(cst_scanf_bad_conversion$2)}}
    function kscanf(ib,ef,param)
     {var str=param[2],fmt=param[1];
      function apply(f,args)
       {var f$0=f,args$0=args;
        for(;;)
         {if(args$0)
           {var
             r=args$0[2],
             x=args$0[1],
             f$1=caml_call1(f$0,x),
             f$0=f$1,
             args$0=r;
            continue}
          return f$0}}
      function k(readers,f)
       {reset_token(ib);
        try
         {var _iE_=[0,make_scanf(ib,fmt,readers)],_iD_=_iE_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var switch$0=0;
          if
           (exc[1]
            !==
            Scan_failure
            &&
            exc[1]
            !==
            Failure
            &&
            exc
            !==
            End_of_file)
           {if(exc[1] !== Invalid_argument)throw exc;
            var
             msg=exc[2],
             _iC_=
              invalid_arg
               (cat(msg,cat(cst_in_format,cat(escaped$1(str),cst$88))));
            switch$0 = 1}
          if(! switch$0)var _iC_=[1,exc];
          var _iD_=_iC_}
        if(0 === _iD_[0]){var args=_iD_[1];return apply(f,args)}
        var exc=_iD_[1];
        return caml_call2(ef,ib,exc)}
      return take_format_readers(k,fmt)}
    function bscanf(ib,fmt){return kscanf(ib,scanf_bad_input,fmt)}
    function ksscanf(s,ef,fmt){return kscanf(from_string$1(s),ef,fmt)}
    function sscanf(s,fmt)
     {return kscanf(from_string$1(s),scanf_bad_input,fmt)}
    function scanf(fmt){return kscanf(stdib,scanf_bad_input,fmt)}
    function bscanf_format(ib,format,f)
     {scan_caml_string(max_int,ib);
      var str=token_string(ib);
      try
       {var _iB_=format_of_string_format(str,format),fmt=_iB_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] !== Failure)throw exn;
        var msg=exn[2],fmt=bad_input(msg)}
      return caml_call1(f,fmt)}
    function sscanf_format(s,format,f)
     {return bscanf_format(from_string$1(s),format,f)}
    function format_from_string(s,fmt)
     {function _iA_(x){return x}
      return sscanf_format(cat(cst$90,cat(escaped$1(s),cst$89)),fmt,_iA_)}
    function unescaped(s)
     {function _iz_(x){return x}
      return caml_call1(sscanf(cat(cst$92,cat(s,cst$91)),_cI_),_iz_)}
    function kfscanf(ic,ef,fmt){return kscanf(memo_from_channel(ic),ef,fmt)}
    function fscanf(ic,fmt)
     {return kscanf(memo_from_channel(ic),scanf_bad_input,fmt)}
    var
     Stdlib_Scanf=
      [0,
       [0,
        stdib,
        from_file,
        from_file_bin,
        close_in,
        from_file,
        from_file_bin,
        from_string$1,
        from_function$0,
        from_channel$0,
        end_of_input,
        beginning_of_input,
        name_of_input,
        stdib],
       Scan_failure,
       bscanf,
       sscanf,
       scanf,
       kscanf,
       ksscanf,
       bscanf_format,
       sscanf_format,
       format_from_string,
       unescaped,
       fscanf,
       kfscanf];
    caml_register_global(819,Stdlib_Scanf,"Stdlib__Scanf");
    function register(name,v){return caml_register_named_value(name,v)}
    function register_exception(name,exn)
     {var slot=caml_obj_tag(exn) === 248?exn:exn[1];
      return caml_register_named_value(name,slot)}
    var Stdlib_Callback=[0,register,register_exception];
    caml_register_global(820,Stdlib_Callback,"Stdlib__Callback");
    function copy$7(o){var o$0=o.slice();return caml_set_oo_id(o$0)}
    var params$0=[0,1,1,1,3,16],initial_object_size=2,dummy_item=0;
    function public_method_label(s)
     {var accu=[0,0],_iw_=caml_ml_string_length(s) - 1 | 0,_iv_=0;
      if(! (_iw_ < 0))
       {var i=_iv_;
        for(;;)
         {var _ix_=caml_string_get(s,i);
          accu[1] = (223 * accu[1] | 0) + _ix_ | 0;
          var _iy_=i + 1 | 0;
          if(_iw_ !== i){var i=_iy_;continue}
          break}}
      accu[1] = accu[1] & 2147483647;
      var tag=1073741823 < accu[1]?accu[1] + 2147483648 | 0:accu[1];
      return tag}
    function compare$14(x,y){return caml_string_compare(x,y)}
    var Vars=caml_call1(Stdlib_Map[1],[0,compare$14]);
    function compare$15(x,y){return caml_string_compare(x,y)}
    var
     Meths=caml_call1(Stdlib_Map[1],[0,compare$15]),
     compare$16=caml_int_compare,
     Labs=caml_call1(Stdlib_Map[1],[0,compare$16]),
     dummy_table=[0,0,[0,dummy_item],Meths[1],Labs[1],0,0,Vars[1],0],
     table_count=[0,0],
     dummy_met=caml_obj_block(0,0);
    function fit_size(n){return 2 < n?fit_size((n + 1 | 0) / 2 | 0) * 2 | 0:n}
    function new_table(pub_labels)
     {table_count[1]++;
      var
       len=pub_labels.length - 1,
       methods=caml_make_vect((len * 2 | 0) + 2 | 0,dummy_met);
      caml_check_bound(methods,0)[1] = len;
      var _ip_=((fit_size(len) * 32 | 0) / 8 | 0) - 1 | 0;
      caml_check_bound(methods,1)[2] = _ip_;
      var _ir_=len - 1 | 0,_iq_=0;
      if(! (_ir_ < 0))
       {var i=_iq_;
        for(;;)
         {var
           _it_=(i * 2 | 0) + 3 | 0,
           _is_=caml_check_bound(pub_labels,i)[1 + i];
          caml_check_bound(methods,_it_)[1 + _it_] = _is_;
          var _iu_=i + 1 | 0;
          if(_ir_ !== i){var i=_iu_;continue}
          break}}
      return [0,initial_object_size,methods,Meths[1],Labs[1],0,0,Vars[1],0]}
    function resize$1(array,new_size)
     {var old_size=array[2].length - 1,_in_=old_size < new_size?1:0;
      if(_in_)
       {var new_buck=caml_make_vect(new_size,dummy_met);
        blit$1(array[2],0,new_buck,0,old_size);
        array[2] = new_buck;
        var _io_=0}
      else
       var _io_=_in_;
      return _io_}
    var method_count=[0,0],inst_var_count=[0,0];
    function new_method(table)
     {var index=table[2].length - 1;
      resize$1(table,index + 1 | 0);
      return index}
    function get_method_label(table,name)
     {try
       {var _il_=caml_call2(Meths[28],name,table[3]);return _il_}
      catch(_im_)
       {_im_ = caml_wrap_exception(_im_);
        if(_im_ === Not_found)
         {var label=new_method(table);
          table[3] = caml_call3(Meths[4],name,label,table[3]);
          table[4] = caml_call3(Labs[4],label,1,table[4]);
          return label}
        throw _im_}}
    function get_method_labels(table,names)
     {return map$7(function(_ik_){return get_method_label(table,_ik_)},names)}
    function set_method(table,label,element)
     {method_count[1]++;
      return caml_call2(Labs[28],label,table[4])
              ?(resize$1(table,label + 1 | 0),
                caml_check_bound(table[2],label)[1 + label]
                =
                element,
                0)
              :(table[6] = [0,[0,label,element],table[6]],0)}
    function get_method(table,label)
     {try
       {var _ii_=assoc(label,table[6]);return _ii_}
      catch(_ij_)
       {_ij_ = caml_wrap_exception(_ij_);
        if(_ij_ === Not_found)
         return caml_check_bound(table[2],label)[1 + label];
        throw _ij_}}
    function to_list$3(arr){return 0 === arr?0:to_list$1(arr)}
    function narrow(table,vars,virt_meths,concr_meths)
     {var
       vars$0=to_list$3(vars),
       virt_meths$0=to_list$3(virt_meths),
       concr_meths$0=to_list$3(concr_meths),
       virt_meth_labs=
        map$4
         (function(_ih_){return get_method_label(table,_ih_)},virt_meths$0),
       concr_meth_labs=
        map$4
         (function(_ig_){return get_method_label(table,_ig_)},concr_meths$0);
      table[5]
      =
      [0,
       [0,table[3],table[4],table[6],table[7],virt_meth_labs,vars$0],
       table[5]];
      var _h9_=Vars[1],_h__=table[7];
      function _h$_(lab,info,tvars)
       {return mem(lab,vars$0)?caml_call3(Vars[4],lab,info,tvars):tvars}
      table[7] = caml_call3(Vars[13],_h$_,_h__,_h9_);
      var by_name=[0,Meths[1]],by_label=[0,Labs[1]];
      iter2$0
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          var _ic_=by_label[1];
          try
           {var _ie_=caml_call2(Labs[28],label,table[4]),_id_=_ie_}
          catch(_if_)
           {_if_ = caml_wrap_exception(_if_);
            if(_if_ !== Not_found)throw _if_;
            var _id_=1}
          by_label[1] = caml_call3(Labs[4],label,_id_,_ic_);
          return 0},
        concr_meths$0,
        concr_meth_labs);
      iter2$0
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          by_label[1] = caml_call3(Labs[4],label,0,by_label[1]);
          return 0},
        virt_meths$0,
        virt_meth_labs);
      table[3] = by_name[1];
      table[4] = by_label[1];
      var _ia_=0,_ib_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meth_labs)?hm:[0,met,hm]},
        _ib_,
        _ia_);
      return 0}
    function widen(table)
     {var
       match=hd(table[5]),
       vars=match[6],
       virt_meths=match[5],
       saved_vars=match[4],
       saved_hidden_meths=match[3],
       by_label=match[2],
       by_name=match[1];
      table[5] = tl(table[5]);
      table[7]
      =
      fold_left$0
       (function(s,v)
         {var _h8_=caml_call2(Vars[28],v,table[7]);
          return caml_call3(Vars[4],v,_h8_,s)},
        saved_vars,
        vars);
      table[3] = by_name;
      table[4] = by_label;
      var _h7_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meths)?hm:[0,met,hm]},
        _h7_,
        saved_hidden_meths);
      return 0}
    function new_slot(table)
     {var index=table[1];table[1] = index + 1 | 0;return index}
    function new_variable(table,name)
     {try
       {var _h5_=caml_call2(Vars[28],name,table[7]);return _h5_}
      catch(_h6_)
       {_h6_ = caml_wrap_exception(_h6_);
        if(_h6_ === Not_found)
         {var index=new_slot(table);
          if(caml_string_notequal(name,cst$93))
           table[7] = caml_call3(Vars[4],name,index,table[7]);
          return index}
        throw _h6_}}
    function to_array(arr){return caml_equal(arr,0)?[0]:arr}
    function new_methods_variables(table,meths,vals)
     {var
       meths$0=to_array(meths),
       nmeths=meths$0.length - 1,
       nvals=vals.length - 1,
       res=caml_make_vect(nmeths + nvals | 0,0),
       _hX_=nmeths - 1 | 0,
       _hW_=0;
      if(! (_hX_ < 0))
       {var i$0=_hW_;
        for(;;)
         {var
           _h3_=
            get_method_label(table,caml_check_bound(meths$0,i$0)[1 + i$0]);
          caml_check_bound(res,i$0)[1 + i$0] = _h3_;
          var _h4_=i$0 + 1 | 0;
          if(_hX_ !== i$0){var i$0=_h4_;continue}
          break}}
      var _hZ_=nvals - 1 | 0,_hY_=0;
      if(! (_hZ_ < 0))
       {var i=_hY_;
        for(;;)
         {var
           _h1_=i + nmeths | 0,
           _h0_=new_variable(table,caml_check_bound(vals,i)[1 + i]);
          caml_check_bound(res,_h1_)[1 + _h1_] = _h0_;
          var _h2_=i + 1 | 0;
          if(_hZ_ !== i){var i=_h2_;continue}
          break}}
      return res}
    function get_variable(table,name)
     {try
       {var _hU_=caml_call2(Vars[28],name,table[7]);return _hU_}
      catch(_hV_)
       {_hV_ = caml_wrap_exception(_hV_);
        if(_hV_ === Not_found)throw [0,Assert_failure,_cJ_];
        throw _hV_}}
    function get_variables(table,names)
     {return map$7(function(_hT_){return get_variable(table,_hT_)},names)}
    function add_initializer(table,f){table[8] = [0,f,table[8]];return 0}
    function create_table(public_methods)
     {if(0 === public_methods)return new_table([0]);
      var
       tags=map$7(public_method_label,public_methods),
       table=new_table(tags);
      iteri$3
       (function(i,met)
         {var lab=(i * 2 | 0) + 2 | 0;
          table[3] = caml_call3(Meths[4],met,lab,table[3]);
          table[4] = caml_call3(Labs[4],lab,1,table[4]);
          return 0},
        public_methods);
      return table}
    function init_class(table)
     {inst_var_count[1] = (inst_var_count[1] + table[1] | 0) - 1 | 0;
      table[8] = rev(table[8]);
      return resize$1
              (table,
               3 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0)}
    function inherits(cla,vals,virt_meths,concr_meths,param,top)
     {var env=param[4],super$0=param[2];
      narrow(cla,vals,virt_meths,concr_meths);
      var init=top?caml_call2(super$0,cla,env):caml_call1(super$0,cla);
      widen(cla);
      var
       _hO_=0,
       _hP_=to_array(concr_meths),
       _hQ_=
        [0,
         map$7
          (function(nm){return get_method(cla,get_method_label(cla,nm))},_hP_),
         _hO_],
       _hR_=to_array(vals);
      return caml_array_concat
              ([0,
                [0,init],
                [0,
                 map$7(function(_hS_){return get_variable(cla,_hS_)},_hR_),
                 _hQ_]])}
    function make_class(pub_meths,class_init)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      return [0,caml_call1(env_init,0),class_init,env_init,0]}
    function make_class_store(pub_meths,class_init,init_table)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      init_table[2] = class_init;
      init_table[1] = env_init;
      return 0}
    function dummy_class(loc)
     {function undef(param){throw [0,Undefined_recursive_module,loc]}
      return [0,undef,undef,undef,0]}
    function create_object(table)
     {var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function create_object_opt(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function iter_f(obj,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],f=param$0[1];
          caml_call1(f,obj);
          var param$0=l;
          continue}
        return 0}}
    function run_initializers(obj,table)
     {var inits=table[8],_hN_=0 !== inits?1:0;
      return _hN_?iter_f(obj,inits):_hN_}
    function run_initializers_opt(obj_0,obj,table)
     {if(obj_0)return obj;
      var inits=table[8];
      if(0 !== inits)iter_f(obj,inits);
      return obj}
    function create_object_and_run_initiali(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=create_object(table);
      run_initializers(obj,table);
      return obj}
    function get_data$0(param)
     {if(param)return param[2];throw [0,Assert_failure,_cN_]}
    function build_path(n,keys,tables)
     {var res=[0,0,0,0],r=[0,res],_hJ_=0;
      if(! (n < 0))
       {var i=_hJ_;
        for(;;)
         {var _hL_=r[1];
          r[1] = [0,caml_check_bound(keys,i)[1 + i],_hL_,0];
          var _hM_=i + 1 | 0;
          if(n !== i){var i=_hM_;continue}
          break}}
      var _hK_=r[1];
      if(tables){tables[2] = _hK_;return res}
      throw [0,Assert_failure,_cK_]}
    function lookup_tables(root,keys)
     {var tables$2=get_data$0(root);
      if(tables$2)
       {var i$1=keys.length - 1 - 1 | 0,i=i$1,tables=tables$2;
        a:
        for(;;)
         {if(0 <= i)
           {var key=caml_check_bound(keys,i)[1 + i],tables$0=tables;
            for(;;)
             {if(tables$0)
               {if(tables$0[1] === key)
                 {var tables$1=get_data$0(tables$0);
                  if(tables$1)
                   {var i$0=i - 1 | 0,i=i$0,tables=tables$1;continue a}
                  throw [0,Assert_failure,_cP_]}
                if(tables$0)
                 {var _hI_=tables$0[3];
                  if(_hI_){var tables$0=_hI_;continue}
                  var v=[0,key,0,0];
                  if(tables$0)
                   {tables$0[3] = v;return build_path(i - 1 | 0,keys,v)}
                  throw [0,Assert_failure,_cL_]}
                throw [0,Assert_failure,_cO_]}
              throw [0,Assert_failure,_cM_]}}
          return tables}}
      return build_path(keys.length - 1 - 1 | 0,keys,root)}
    function new_cache(table)
     {var n=new_method(table),switch$0=0;
      if
       (0
        !==
        (n % 2 | 0)
        &&
        !
        ((2 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0) < n))
       {var n$0=new_method(table);switch$0 = 1}
      if(! switch$0)var n$0=n;
      caml_check_bound(table[2],n$0)[1 + n$0] = 0;
      return n$0}
    function set_methods(table,methods)
     {var len=methods.length - 1,i=[0,0];
      for(;;)
       {if(i[1] < len)
         {var
           _hC_=i[1],
           label=caml_check_bound(methods,_hC_)[1 + _hC_],
           next=
            function(param)
             {i[1]++;
              var _hH_=i[1];
              return caml_check_bound(methods,_hH_)[1 + _hH_]},
           clo=next(0);
          if(typeof clo === "number")
           switch(clo)
            {case 0:
              var
               x=next(0),
               clo$0=function(x){return function(obj){return x}}(x);
              break;
             case 1:
              var
               n=next(0),
               clo$0=function(n){return function(obj){return obj[1 + n]}}(n);
              break;
             case 2:
              var
               e=next(0),
               n$0=next(0),
               clo$0=
                function(e,n){return function(obj){return obj[1 + e][1 + n]}}
                 (e,n$0);
              break;
             case 3:
              var
               n$1=next(0),
               clo$0=
                function(n)
                  {return function(obj){return caml_call1(obj[1][1 + n],obj)}}
                 (n$1);
              break;
             case 4:
              var
               n$2=next(0),
               clo$0=
                function(n){return function(obj,x){obj[1 + n] = x;return 0}}
                 (n$2);
              break;
             case 5:
              var
               f=next(0),
               x$0=next(0),
               clo$0=
                function(f,x){return function(obj){return caml_call1(f,x)}}
                 (f,x$0);
              break;
             case 6:
              var
               f$0=next(0),
               n$3=next(0),
               clo$0=
                function(f,n)
                  {return function(obj){return caml_call1(f,obj[1 + n])}}
                 (f$0,n$3);
              break;
             case 7:
              var
               f$1=next(0),
               e$0=next(0),
               n$4=next(0),
               clo$0=
                function(f,e,n)
                  {return function(obj)
                    {return caml_call1(f,obj[1 + e][1 + n])}}
                 (f$1,e$0,n$4);
              break;
             case 8:
              var
               f$2=next(0),
               n$5=next(0),
               clo$0=
                function(f,n)
                  {return function(obj)
                    {return caml_call1(f,caml_call1(obj[1][1 + n],obj))}}
                 (f$2,n$5);
              break;
             case 9:
              var
               f$3=next(0),
               x$1=next(0),
               y=next(0),
               clo$0=
                function(f,x,y)
                  {return function(obj){return caml_call2(f,x,y)}}
                 (f$3,x$1,y);
              break;
             case 10:
              var
               f$4=next(0),
               x$2=next(0),
               n$6=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj){return caml_call2(f,x,obj[1 + n])}}
                 (f$4,x$2,n$6);
              break;
             case 11:
              var
               f$5=next(0),
               x$3=next(0),
               e$1=next(0),
               n$7=next(0),
               clo$0=
                function(f,x,e,n)
                  {return function(obj)
                    {return caml_call2(f,x,obj[1 + e][1 + n])}}
                 (f$5,x$3,e$1,n$7);
              break;
             case 12:
              var
               f$6=next(0),
               x$4=next(0),
               n$8=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj)
                    {return caml_call2(f,x,caml_call1(obj[1][1 + n],obj))}}
                 (f$6,x$4,n$8);
              break;
             case 13:
              var
               f$7=next(0),
               n$9=next(0),
               x$5=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj){return caml_call2(f,obj[1 + n],x)}}
                 (f$7,n$9,x$5);
              break;
             case 14:
              var
               f$8=next(0),
               e$2=next(0),
               n$10=next(0),
               x$6=next(0),
               clo$0=
                function(f,e,n,x)
                  {return function(obj)
                    {return caml_call2(f,obj[1 + e][1 + n],x)}}
                 (f$8,e$2,n$10,x$6);
              break;
             case 15:
              var
               f$9=next(0),
               n$11=next(0),
               x$7=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj)
                    {return caml_call2(f,caml_call1(obj[1][1 + n],obj),x)}}
                 (f$9,n$11,x$7);
              break;
             case 16:
              var
               n$12=next(0),
               x$8=next(0),
               clo$0=
                function(n,x)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,x)}}
                 (n$12,x$8);
              break;
             case 17:
              var
               n$13=next(0),
               m=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + m])}}
                 (n$13,m);
              break;
             case 18:
              var
               n$14=next(0),
               e$3=next(0),
               m$0=next(0),
               clo$0=
                function(n,e,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + e][1 + m])}}
                 (n$14,e$3,m$0);
              break;
             case 19:
              var
               n$15=next(0),
               m$1=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {var _hF_=caml_call1(obj[1][1 + m],obj);
                     return caml_call2(obj[1][1 + n],obj,_hF_)}}
                 (n$15,m$1);
              break;
             case 20:
              var m$2=next(0),x$9=next(0);
              new_cache(table);
              var
               clo$0=
                function(m,x)
                  {return function(obj)
                    {return caml_call1(caml_get_public_method(x,m,0),x)}}
                 (m$2,x$9);
              break;
             case 21:
              var m$3=next(0),n$16=next(0);
              new_cache(table);
              var
               clo$0=
                function(m,n)
                  {return function(obj)
                    {var _hE_=obj[1 + n];
                     return caml_call1(caml_get_public_method(_hE_,m,0),_hE_)}}
                 (m$3,n$16);
              break;
             case 22:
              var m$4=next(0),e$4=next(0),n$17=next(0);
              new_cache(table);
              var
               clo$0=
                function(m,e,n)
                  {return function(obj)
                    {var _hD_=obj[1 + e][1 + n];
                     return caml_call1(caml_get_public_method(_hD_,m,0),_hD_)}}
                 (m$4,e$4,n$17);
              break;
             default:
              var m$5=next(0),n$18=next(0);
              new_cache(table);
              var
               clo$0=
                function(m,n)
                  {return function(obj)
                    {var _hG_=caml_call1(obj[1][1 + n],obj);
                     return caml_call1(caml_get_public_method(_hG_,m,0),_hG_)}}
                 (m$5,n$18)}
          else
           var clo$0=clo;
          set_method(table,label,clo$0);
          i[1]++;
          continue}
        return 0}}
    function stats$0(param)
     {return [0,table_count[1],method_count[1],inst_var_count[1]]}
    var
     CamlinternalOO=
      [0,
       public_method_label,
       new_method,
       new_variable,
       new_methods_variables,
       get_variable,
       get_variables,
       get_method_label,
       get_method_labels,
       get_method,
       set_method,
       set_methods,
       narrow,
       widen,
       add_initializer,
       dummy_table,
       create_table,
       init_class,
       inherits,
       make_class,
       make_class_store,
       dummy_class,
       copy$7,
       create_object,
       create_object_opt,
       run_initializers,
       run_initializers_opt,
       create_object_and_run_initiali,
       lookup_tables,
       params$0,
       stats$0];
    caml_register_global(821,CamlinternalOO,"CamlinternalOO");
    var Stdlib_Oo=[0,copy$7,public_method_label,public_method_label];
    caml_register_global(822,Stdlib_Oo,"Stdlib__Oo");
    function init_mod_block(loc,comps$0)
     {var
       length=comps$0.length - 1,
       modu=caml_obj_block(0,length),
       _hy_=length - 1 | 0,
       _hx_=0;
      if(! (_hy_ < 0))
       {var i=_hx_;
        for(;;)
         {var shape=caml_check_bound(comps$0,i)[1 + i];
          if(typeof shape === "number")
           switch(shape)
            {case 0:
              var
               fn$0=
                function(i)
                 {function fn(x)
                   {var fn$0=modu[1 + i];
                    if(fn === fn$0)throw [0,Undefined_recursive_module,loc];
                    return caml_call1(fn$0,x)}
                  return fn},
               fn=fn$0(i),
               init=fn;
              break;
             case 1:
              var l=[];
              runtime.caml_update_dummy
               (l,
                [246,
                 function(l,i)
                   {return function(_hA_)
                     {var l$0=modu[1 + i];
                      if(l === l$0)throw [0,Undefined_recursive_module,loc];
                      var _hB_=caml_obj_tag(l$0);
                      return 250 === _hB_
                              ?l$0[1]
                              :246 === _hB_?force_lazy_block(l$0):l$0}}
                  (l,i)]);
              var init=l;
              break;
             default:var init=dummy_class(loc)}
          else
           if(0 === shape[0])
            var comps=shape[1],init=init_mod_block(loc,comps);
           else
            var v=shape[1],init=v;
          modu[1 + i] = init;
          var _hz_=i + 1 | 0;
          if(_hy_ !== i){var i=_hz_;continue}
          break}}
      return modu}
    function init_mod(loc,shape)
     {if(typeof shape !== "number" && 0 === shape[0])
       {var comps=shape[1];return init_mod_block(loc,comps)}
      return failwith(cst_CamlinternalMod_init_mod_n)}
    function update_mod_block(comps$0,o,n)
     {if(0 === caml_obj_tag(n) && comps$0.length - 1 <= n.length - 1)
       {var _hv_=comps$0.length - 1 - 1 | 0,_hu_=0;
        if(! (_hv_ < 0))
         {var i=_hu_;
          for(;;)
           {var n$0=n[1 + i],shape=caml_check_bound(comps$0,i)[1 + i];
            if(typeof shape === "number")
             if(2 === shape)
              {var switch$0=0;
               if(0 === caml_obj_tag(n$0) && 4 === n$0.length - 1)
                {var cl=o[1 + i],j=0;
                 for(;;)
                  {cl[1 + j] = n$0[1 + j];
                   var _ht_=j + 1 | 0;
                   if(3 !== j){var j=_ht_;continue}
                   break}}
               else
                switch$0 = 1;
               if(switch$0)throw [0,Assert_failure,_cQ_]}
             else
              o[1 + i] = n$0;
            else
             if(0 === shape[0])
              {var comps=shape[1];update_mod_block(comps,o[1 + i],n$0)}
            var _hw_=i + 1 | 0;
            if(_hv_ !== i){var i=_hw_;continue}
            break}}
        return 0}
      throw [0,Assert_failure,_cR_]}
    function update_mod(shape,o,n)
     {if(typeof shape !== "number" && 0 === shape[0])
       {var comps=shape[1];return update_mod_block(comps,o,n)}
      return failwith(cst_CamlinternalMod_update_mod)}
    var CamlinternalMod=[0,init_mod,update_mod];
    caml_register_global(823,CamlinternalMod,"CamlinternalMod");
    var
     initial_buffer=caml_create_bytes(32),
     buffer=[0,initial_buffer],
     bufpos=[0,0];
    function reset_buffer(param)
     {buffer[1] = initial_buffer;bufpos[1] = 0;return 0}
    function store(c)
     {if(caml_ml_bytes_length(buffer[1]) <= bufpos[1])
       {var newbuffer=caml_create_bytes(2 * bufpos[1] | 0);
        blit(buffer[1],0,newbuffer,0,bufpos[1]);
        buffer[1] = newbuffer}
      caml_bytes_set(buffer[1],bufpos[1],c);
      bufpos[1]++;
      return 0}
    function get_string(param)
     {var s=sub_string(buffer[1],0,bufpos[1]);
      buffer[1] = initial_buffer;
      return s}
    function make_lexer(keywords)
     {var kwd_table=caml_call2(Stdlib_Hashtbl[1],0,17);
      iter$2
       (function(s){return caml_call3(Stdlib_Hashtbl[5],kwd_table,s,[0,s])},
        keywords);
      function ident_or_keyword(id)
       {try
         {var _hr_=caml_call2(Stdlib_Hashtbl[6],kwd_table,id);return _hr_}
        catch(_hs_)
         {_hs_ = caml_wrap_exception(_hs_);
          if(_hs_ === Not_found)return [1,id];
          throw _hs_}}
      function keyword_or_error(c)
       {var s=make$1(1,c);
        try
         {var _hp_=caml_call2(Stdlib_Hashtbl[6],kwd_table,s);return _hp_}
        catch(_hq_)
         {_hq_ = caml_wrap_exception(_hq_);
          if(_hq_ === Not_found)throw [0,Error,cat(cst_Illegal_character,s)];
          throw _hq_}}
      function comment(strm)
       {a:
        for(;;)
         {var match=peek$0(strm);
          if(match)
           {var switcher=match[1] - 40 | 0;
            if(! (2 < switcher >>> 0))
             switch(switcher)
              {case 0:
                junk(strm);
                var match$0=peek$0(strm);
                if(match$0)
                 {if(42 === match$0[1]){junk(strm);comment(strm);continue}
                  junk(strm);
                  continue}
                throw Failure$0;
               case 1:break;
               default:
                junk(strm);
                for(;;)
                 {var match$1=peek$0(strm);
                  if(match$1)
                   {var _ho_=match$1[1];
                    if(41 === _ho_){junk(strm);return 0}
                    if(42 === _ho_){junk(strm);continue}
                    junk(strm);
                    continue a}
                  throw Failure$0}}
            junk(strm);
            continue}
          throw Failure$0}}
      function escape(strm)
       {var match=peek$0(strm);
        if(match)
         {var _hl_=match[1];
          if(58 <= _hl_)
           {var switcher=_hl_ - 110 | 0;
            if(! (6 < switcher >>> 0))
             switch(switcher)
              {case 0:junk(strm);return 10;
               case 4:junk(strm);return 13;
               case 6:junk(strm);return 9
               }}
          else
           if(48 <= _hl_)
            {junk(strm);
             var match$0=peek$0(strm);
             if(match$0)
              {var _hm_=match$0[1];
               if(! (9 < _hm_ - 48 >>> 0))
                {junk(strm);
                 var match$1=peek$0(strm);
                 if(match$1)
                  {var _hn_=match$1[1];
                   if(! (9 < _hn_ - 48 >>> 0))
                    {junk(strm);
                     return chr
                             ((((_hl_ - 48 | 0) * 100 | 0)
                               +
                               ((_hm_ - 48 | 0) * 10 | 0)
                               |
                               0)
                              +
                              (_hn_ - 48 | 0)
                              |
                              0)}}
                 throw [0,Error,cst$99]}}
             throw [0,Error,cst$98]}
          junk(strm);
          return _hl_}
        throw Failure$0}
      function end_exponent_part(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _hk_=match[1];
            if(! (9 < _hk_ - 48 >>> 0)){junk(strm);store(_hk_);continue}}
          return [0,[3,caml_float_of_string(get_string(0))]]}}
      function exponent_part(strm)
       {var match=peek$0(strm);
        if(match)
         {var _hj_=match[1],switch$0=0;
          if(43 !== _hj_ && 45 !== _hj_)switch$0 = 1;
          if(! switch$0)
           {junk(strm);store(_hj_);return end_exponent_part(strm)}}
        return end_exponent_part(strm)}
      function number(s)
       {for(;;)
         {var match=peek$0(s);
          if(match)
           {var _hg_=match[1];
            if(58 <= _hg_)
             {var switch$0=0;
              if(69 === _hg_ || 101 === _hg_)switch$0 = 1;
              if(switch$0){junk(s);store(69);return exponent_part(s)}}
            else
             {if(46 === _hg_)
               {junk(s);
                store(46);
                for(;;)
                 {var match$0=peek$0(s);
                  if(match$0)
                   {var _hh_=match$0[1],_hi_=_hh_ - 69 | 0;
                    if(32 < _hi_ >>> 0)
                     {if(! (9 < _hi_ + 21 >>> 0)){junk(s);store(_hh_);continue}}
                    else
                     if(30 < _hi_ - 1 >>> 0)
                      {junk(s);store(69);return exponent_part(s)}}
                  return [0,[3,caml_float_of_string(get_string(0))]]}}
              if(48 <= _hg_){junk(s);store(_hg_);continue}}}
          return [0,[2,caml_int_of_string(get_string(0))]]}}
      function ident2(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _he_=match[1],switch$0=0;
            if(94 <= _he_)
             {var _hf_=_he_ - 95 | 0;
              if(30 < _hf_ >>> 0)
               {if(! (32 <= _hf_))switch$0 = 1}
              else
               if(29 === _hf_)switch$0 = 1}
            else
             if(65 <= _he_)
              {if(92 === _he_)switch$0 = 1}
             else
              if(33 <= _he_)
               switch(_he_ - 33 | 0)
                {case 0:
                 case 2:
                 case 3:
                 case 4:
                 case 5:
                 case 9:
                 case 10:
                 case 12:
                 case 14:
                 case 25:
                 case 27:
                 case 28:
                 case 29:
                 case 30:
                 case 31:switch$0 = 1;break
                 }
            if(switch$0){junk(strm);store(_he_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function neg_number(s)
       {var match=peek$0(s);
        if(match)
         {var _hd_=match[1];
          if(! (9 < _hd_ - 48 >>> 0))
           {junk(s);reset_buffer(0);store(45);store(_hd_);return number(s)}}
        reset_buffer(0);
        store(45);
        return ident2(s)}
      function ident(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _hb_=match[1],switch$0=0;
            if(91 <= _hb_)
             {var _hc_=_hb_ - 95 | 0;
              if(27 < _hc_ >>> 0)
               {if(97 <= _hc_)switch$0 = 1}
              else
               if(1 !== _hc_)switch$0 = 1}
            else
             if(48 <= _hb_)
              {if(6 < _hb_ - 58 >>> 0)switch$0 = 1}
             else
              if(39 === _hb_)switch$0 = 1;
            if(switch$0){junk(strm);store(_hb_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function next_token$0(counter,strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _g3_=match[1],switch$0=0;
            if(124 <= _g3_)
             {if(127 <= _g3_)
               {if(192 <= _g3_)switch$0 = 1}
              else
               if(125 !== _g3_)switch$0 = 2}
            else
             {var _g4_=_g3_ - 65 | 0;
              if(57 < _g4_ >>> 0)
               {if(! (58 <= _g4_))
                 switch(_g4_ + 65 | 0)
                  {case 34:
                    junk(strm);
                    reset_buffer(0);
                    for(;;)
                     {var match$1=peek$0(strm);
                      if(match$1)
                       {var _g6_=match$1[1];
                        if(34 === _g6_){junk(strm);return [0,[4,get_string(0)]]}
                        if(92 === _g6_)
                         {junk(strm);
                          try
                           {var c$0=escape(strm)}
                          catch(_ha_)
                           {_ha_ = caml_wrap_exception(_ha_);
                            if(_ha_ === Failure$0)throw [0,Error,cst$96];
                            throw _ha_;
                            var _g9_=_ha_}
                          store(c$0);
                          continue}
                        junk(strm);
                        store(_g6_);
                        continue}
                      throw Failure$0}
                   case 39:
                    junk(strm);
                    try
                     {var match$2=peek$0(strm);
                      if(! match$2)throw Failure$0;
                      var _g7_=match$2[1];
                      if(92 === _g7_)
                       {junk(strm);
                        try
                         {var _g8_=escape(strm)}
                        catch(_g$_)
                         {_g$_ = caml_wrap_exception(_g$_);
                          if(_g$_ === Failure$0)throw [0,Error,cst$97];
                          throw _g$_}
                        var c=_g8_}
                      else
                       {junk(strm);var c=_g7_}}
                    catch(_g__)
                     {_g__ = caml_wrap_exception(_g__);
                      if(_g__ === Failure$0)throw [0,Error,cst$94];
                      throw _g__}
                    var match$0=peek$0(strm);
                    if(match$0 && 39 === match$0[1])
                     {junk(strm);return [0,[5,c]]}
                    throw [0,Error,cst$95];
                   case 40:
                    junk(strm);
                    if(counter < 50)
                     {var counter$0=counter + 1 | 0;
                      return maybe_comment(counter$0,strm)}
                    return caml_trampoline_return(maybe_comment,[0,strm]);
                   case 45:junk(strm);return neg_number(strm);
                   case 9:
                   case 10:
                   case 12:
                   case 13:
                   case 26:
                   case 32:junk(strm);continue;
                   case 48:
                   case 49:
                   case 50:
                   case 51:
                   case 52:
                   case 53:
                   case 54:
                   case 55:
                   case 56:
                   case 57:
                    junk(strm);reset_buffer(0);store(_g3_);return number(strm);
                   case 33:
                   case 35:
                   case 36:
                   case 37:
                   case 38:
                   case 42:
                   case 43:
                   case 47:
                   case 58:
                   case 60:
                   case 61:
                   case 62:
                   case 63:
                   case 64:switch$0 = 2;break
                   }}
              else
               {var _g5_=_g4_ - 26 | 0;
                if(5 < _g5_ >>> 0)
                 switch$0 = 1;
                else
                 switch(_g5_)
                  {case 4:switch$0 = 1;break;case 1:case 3:switch$0 = 2;break}}}
            switch(switch$0)
             {case 0:junk(strm);return [0,keyword_or_error(_g3_)];
              case 1:
               junk(strm);reset_buffer(0);store(_g3_);return ident(strm);
              default:
               junk(strm);reset_buffer(0);store(_g3_);return ident2(strm)}}
          return 0}}
      function maybe_comment(counter,strm)
       {var match=peek$0(strm);
        if(match && 42 === match[1])
         {junk(strm);
          comment(strm);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return next_token$0(counter$0,strm)}
          return caml_trampoline_return(next_token$0,[0,strm])}
        return [0,keyword_or_error(40)]}
      function next_token(strm){return caml_trampoline(next_token$0(0,strm))}
      return function(input)
       {return from(function(count){return next_token(input)})}}
    var Stdlib_Genlex=[0,make_lexer];
    caml_register_global(824,Stdlib_Genlex,"Stdlib__Genlex");
    function MakeSeeded$0(H)
     {var prng=[246,function(_g2_){return caml_call1(_ci_[2],0)}];
      function create(opt,initial_size)
       {if(opt)
         var sth=opt[1],random=sth;
        else
         var random=caml_call1(Stdlib_Hashtbl[17],0);
        var x=16;
        for(;;)
         {if(! (initial_size <= x) && ! (max_array_length < (x * 2 | 0)))
           {var x$0=x * 2 | 0,x=x$0;continue}
          if(random)
           var
            _g0_=caml_obj_tag(prng),
            _g1_=250 === _g0_?prng[1]:246 === _g0_?force_lazy_block(prng):prng,
            seed=caml_call1(_ci_[4],_g1_);
          else
           var seed=0;
          return [0,0,caml_make_vect(x,0),seed,x]}}
      function clear(h)
       {h[1] = 0;
        var len=h[2].length - 1,_gY_=len - 1 | 0,_gX_=0;
        if(! (_gY_ < 0))
         {var i=_gX_;
          for(;;)
           {caml_check_bound(h[2],i)[1 + i] = 0;
            var _gZ_=i + 1 | 0;
            if(_gY_ !== i){var i=_gZ_;continue}
            break}}
        return 0}
      function reset(h)
       {var len=h[2].length - 1;
        return len === h[4]
                ?clear(h)
                :(h[1] = 0,h[2] = caml_make_vect(h[4],0),0)}
      function copy(init)
       {var _gU_=init[4],_gV_=init[3],_gW_=copy$1(init[2]);
        return [0,init[1],_gW_,_gV_,_gU_]}
      function key_index(h,hkey){return hkey & (h[2].length - 1 - 1 | 0)}
      function clean(h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var hkey=param$0[1],rest=param$0[3],c=param$0[2];
              if(caml_call1(H[7],c))
               {var rest$0=param$0[3],c$0=param$0[2];
                return [0,hkey,c$0,do_bucket(rest$0)]}
              h[1] = h[1] - 1 | 0;
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_gR_=d.length - 1 - 1 | 0,_gQ_=0;
        if(! (_gR_ < 0))
         {var i=_gQ_;
          for(;;)
           {var _gS_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _gS_;
            var _gT_=i + 1 | 0;
            if(_gR_ !== i){var i=_gT_;continue}
            break}}
        return 0}
      function resize(h)
       {var odata=h[2],osize=odata.length - 1,nsize=osize * 2 | 0;
        clean(h);
        var
         _gJ_=nsize < max_array_length?1:0,
         _gK_=_gJ_?(osize >>> 1 | 0) <= h[1]?1:0:_gJ_;
        if(_gK_)
         {var ndata=caml_make_vect(nsize,0);
          h[2] = ndata;
          var
           insert_bucket=
            function(param)
             {if(param)
               {var rest=param[3],data=param[2],hkey=param[1];
                insert_bucket(rest);
                var
                 nidx=key_index(h,hkey),
                 _gP_=[0,hkey,data,caml_check_bound(ndata,nidx)[1 + nidx]];
                caml_check_bound(ndata,nidx)[1 + nidx] = _gP_;
                return 0}
              return 0},
           _gM_=osize - 1 | 0,
           _gL_=0;
          if(! (_gM_ < 0))
           {var i=_gL_;
            for(;;)
             {insert_bucket(caml_check_bound(odata,i)[1 + i]);
              var _gO_=i + 1 | 0;
              if(_gM_ !== i){var i=_gO_;continue}
              break}}
          var _gN_=0}
        else
         var _gN_=_gK_;
        return _gN_}
      function add(h,key,info)
       {var
         hkey=caml_call2(H[2],h[3],key),
         i=key_index(h,hkey),
         container=caml_call2(H[1],key,info),
         bucket=[0,hkey,container,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _gI_=h[2].length - 1 << 1 < h[1]?1:0;
        return _gI_?resize(h):_gI_}
      function remove(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function remove_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var hk=param$0[1],next=param$0[3],c=param$0[2];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:h[1] = h[1] - 1 | 0;return next;
                  case 1:return [0,hk,c,remove_bucket(next)];
                  default:h[1] = h[1] - 1 | 0;var param$0=next;continue}}
              var next$0=param$0[3],c$0=param$0[2];
              return [0,hk,c$0,remove_bucket(next$0)]}
            return 0}}
        var
         i=key_index(h,hkey),
         _gH_=remove_bucket(caml_check_bound(h[2],i)[1 + i]);
        caml_check_bound(h[2],i)[1 + i] = _gH_;
        return 0}
      function find(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _gG_=key_index(h,hkey),
         param$1=caml_check_bound(h[2],_gG_)[1 + _gG_],
         param=param$1;
        for(;;)
         {if(param)
           {var hk=param[1],rest=param[3],c=param[2];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var match$0=caml_call1(H[4],c);
                 if(match$0){var d=match$0[1];return d}
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param$0=param[3],param=param$0;
            continue}
          throw Not_found}}
      function find_opt(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _gF_=key_index(h,hkey),
         param$1=caml_check_bound(h[2],_gF_)[1 + _gF_],
         param=param$1;
        for(;;)
         {if(param)
           {var hk=param[1],rest=param[3],c=param[2];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var d=caml_call1(H[4],c);
                 if(d)return d;
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param$0=param[3],param=param$0;
            continue}
          return 0}}
      function find_all(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var hk=param$0[1],rest=param$0[3],c=param$0[2];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:
                   var match$0=caml_call1(H[4],c);
                   if(match$0)
                    {var d=match$0[1];return [0,d,find_in_bucket(rest)]}
                   var param$0=rest;
                   continue;
                  case 1:var param$0=rest;continue;
                  default:var param$0=rest;continue}}
              var param$1=param$0[3],param$0=param$1;
              continue}
            return 0}}
        var _gE_=key_index(h,hkey);
        return find_in_bucket(caml_check_bound(h[2],_gE_)[1 + _gE_])}
      function replace(h,key,info)
       {var hkey=caml_call2(H[2],h[3],key);
        function replace_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var hk=param$0[1],next=param$0[3],c=param$0[2];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                if(match){var param$0=next;continue}
                return caml_call3(H[6],c,key,info)}
              var param$1=param$0[3],param$0=param$1;
              continue}
            throw Not_found}}
        var i=key_index(h,hkey),l=caml_check_bound(h[2],i)[1 + i];
        try
         {var _gC_=replace_bucket(l);return _gC_}
        catch(_gD_)
         {_gD_ = caml_wrap_exception(_gD_);
          if(_gD_ === Not_found)
           {var container=caml_call2(H[1],key,info);
            caml_check_bound(h[2],i)[1 + i] = [0,hkey,container,l];
            h[1] = h[1] + 1 | 0;
            var _gB_=h[2].length - 1 << 1 < h[1]?1:0;
            return _gB_?resize(h):_gB_}
          throw _gD_}}
      function mem(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _gA_=key_index(h,hkey),
         param$1=caml_check_bound(h[2],_gA_)[1 + _gA_],
         param=param$1;
        for(;;)
         {if(param)
           {var hk=param[1],rest=param[3],c=param[2];
            if(hk === hkey)
             {var match=caml_call2(H[3],c,key);
              if(match){var param=rest;continue}
              return 1}
            var param$0=param[3],param=param$0;
            continue}
          return 0}}
      function iter$0(f,h)
       {var d$0=h[2],_gy_=d$0.length - 1 - 1 | 0,_gx_=0;
        if(! (_gy_ < 0))
         {var i=_gx_;
          a:
          for(;;)
           {var param$0=caml_check_bound(d$0,i)[1 + i],param=param$0;
            for(;;)
             {if(param)
               {var
                 rest=param[3],
                 c=param[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c),
                 switch$0=0;
                if(match && match$0)
                 {var d=match$0[1],k=match[1];caml_call2(f,k,d);switch$0 = 1}
                var param=rest;
                continue}
              var _gz_=i + 1 | 0;
              if(_gy_ !== i){var i=_gz_;continue a}
              break}
            break}}
        return 0}
      function fold(f,h,init)
       {var d$0=h[2],accu$1=[0,init],_gu_=d$0.length - 1 - 1 | 0,_gt_=0;
        if(! (_gu_ < 0))
         {var i=_gt_;
          a:
          for(;;)
           {var
             _gv_=accu$1[1],
             b$0=caml_check_bound(d$0,i)[1 + i],
             b=b$0,
             accu=_gv_;
            for(;;)
             {if(b)
               {var
                 rest=b[3],
                 c=b[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c),
                 switch$0=0;
                if(match && match$0)
                 {var d=match$0[1],k=match[1],accu$0=caml_call3(f,k,d,accu);
                  switch$0 = 1}
                if(! switch$0)var accu$0=accu;
                var b=rest,accu=accu$0;
                continue}
              accu$1[1] = accu;
              var _gw_=i + 1 | 0;
              if(_gu_ !== i){var i=_gw_;continue a}
              break}
            break}}
        return accu$1[1]}
      function filter_map_inplace(f,h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var
               rest=param$0[3],
               c=param$0[2],
               hk=param$0[1],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match && match$0)
               {var d=match$0[1],k=match[1],match$1=caml_call2(f,k,d);
                if(match$1)
                 {var new_d=match$1[1];
                  caml_call3(H[6],c,k,new_d);
                  return [0,hk,c,do_bucket(rest)]}
                var param$0=rest;
                continue}
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_gq_=d.length - 1 - 1 | 0,_gp_=0;
        if(! (_gq_ < 0))
         {var i=_gp_;
          for(;;)
           {var _gr_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _gr_;
            var _gs_=i + 1 | 0;
            if(_gq_ !== i){var i=_gs_;continue}
            break}}
        return 0}
      function length(h){return h[1]}
      function bucket_length(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var
             param$1=param$0[3],
             accu$1=accu$0 + 1 | 0,
             accu$0=accu$1,
             param$0=param$1;
            continue}
          return accu$0}}
      function stats(h)
       {var
         _gl_=h[2],
         _gm_=0,
         mbl=
          fold_left$3
           (function(m,b){return max$1(m,bucket_length(0,b))},_gm_,_gl_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _gn_=h[2];
        iter$5
         (function(b)
           {var
             l=bucket_length(0,b),
             _go_=caml_check_bound(histo,l)[1 + l] + 1 | 0;
            caml_check_bound(histo,l)[1 + l] = _go_;
            return 0},
          _gn_);
        return [0,h[1],h[2].length - 1,mbl,histo]}
      function bucket_length_alive(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var rest=param$0[3],c=param$0[2];
            if(caml_call1(H[7],c))
             {var accu$1=accu$0 + 1 | 0,accu$0=accu$1,param$0=rest;continue}
            var param$1=param$0[3],param$0=param$1;
            continue}
          return accu$0}}
      function stats_alive(h)
       {var
         size=[0,0],
         _gh_=h[2],
         _gi_=0,
         mbl=
          fold_left$3
           (function(m,b){return max$1(m,bucket_length_alive(0,b))},_gi_,_gh_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _gj_=h[2];
        iter$5
         (function(b)
           {var l=bucket_length_alive(0,b);
            size[1] = size[1] + l | 0;
            var _gk_=caml_check_bound(histo,l)[1 + l] + 1 | 0;
            caml_check_bound(histo,l)[1 + l] = _gk_;
            return 0},
          _gj_);
        return [0,size[1],h[2].length - 1,mbl,histo]}
      function to_seq(tbl)
       {var tbl_data=tbl[2];
        function aux(i,buck,param)
         {var i$0=i,buck$0=buck;
          for(;;)
           {if(buck$0)
             {var
               next=buck$0[3],
               c=buck$0[2],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match && match$0)
               {var data=match$0[1],key=match[1];
                return [0,
                        [0,key,data],
                        function(_gg_){return aux(i$0,next,_gg_)}]}
              var buck$0=next;
              continue}
            if(i$0 === tbl_data.length - 1)return 0;
            var
             buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
             i$1=i$0 + 1 | 0,
             i$0=i$1,
             buck$0=buck$1;
            continue}}
        var _gd_=0,_ge_=0;
        return function(_gf_){return aux(_ge_,_gd_,_gf_)}}
      function to_seq_keys(m)
       {var _f$_=to_seq(m);
        function _ga_(_gc_){return _gc_[1]}
        return function(_gb_){return map$1(_ga_,_f$_,_gb_)}}
      function to_seq_values(m)
       {var _f7_=to_seq(m);
        function _f8_(_f__){return _f__[2]}
        return function(_f9_){return map$1(_f8_,_f7_,_f9_)}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$0,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$5(param){return caml_call1(_q_[1],1)}
    function get_key$0(t){return caml_call2(_q_[3],t,0)}
    function get_key_copy$0(t){return caml_call2(_q_[4],t,0)}
    function set_key$0(t,k){return caml_call3(_q_[5],t,0,k)}
    function unset_key$0(t){return caml_call2(_q_[6],t,0)}
    function check_key$0(t){return caml_call2(_q_[7],t,0)}
    function blit_key$0(t1,t2){return caml_call5(_q_[8],t1,0,t2,0,1)}
    function get_data$1(t){return caml_call1(_q_[9],t)}
    function get_data_copy(t){return caml_call1(_q_[10],t)}
    function set_data(t,d){return caml_call2(_q_[11],t,d)}
    function unset_data(t){return caml_call1(_q_[12],t)}
    function check_data(t){return caml_call1(_q_[13],t)}
    function blit_data(t1,t2){return caml_call2(_q_[14],t1,t2)}
    function make$4(key,data)
     {var eph=create$5(0);set_data(eph,data);set_key$0(eph,key);return eph}
    function query(eph,key)
     {var match=get_key$0(eph);
      if(match){var k=match[1];return k === key?get_data$1(eph):0}
      return 0}
    function MakeSeeded$1(H)
     {function create(k,d)
       {var c=create$5(0);set_data(c,d);set_key$0(c,k);return c}
      var hash=H[2];
      function equal(c,k)
       {var match=get_key$0(c);
        if(match){var k$0=match[1];return caml_call2(H[1],k,k$0)?0:1}
        return 2}
      function set_key_data(c,k,d)
       {unset_data(c);set_key$0(c,k);return set_data(c,d)}
      return MakeSeeded$0
              ([0,
                create,
                hash,
                equal,
                get_data$1,
                get_key$0,
                set_key_data,
                check_key$0])}
    function Make$2(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$1([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _f6_=include[1];
      function create(sz){return caml_call2(_f6_,_cS_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function make$5(param){return [0,0]}
    function add$1(b,k,d){var _f5_=b[1];b[1] = [0,make$4(k,d),_f5_];return 0}
    function test_key(k,e)
     {var match=get_key$0(e);
      if(match){var x=match[1];if(x === k)return 1}
      return 0}
    function remove$0(b,k)
     {var l=b[1],acc=0;
      for(;;)
       {if(l)
         {var h=l[1],t=l[2];
          if(test_key(k,h)){b[1] = rev_append(acc,t);return 0}
          var l$0=l[2],acc$0=[0,h,acc],l=l$0,acc=acc$0;
          continue}
        return 0}}
    function find$2(b,k)
     {var
       _f3_=b[1],
       match=find_opt(function(_f4_){return test_key(k,_f4_)},_f3_);
      if(match){var e=match[1];return get_data$1(e)}
      return 0}
    function length$7(b){return length$1(b[1])}
    function clear$3(b){b[1] = 0;return 0}
    function create$6(param){return caml_call1(_q_[1],2)}
    function get_key1(t){return caml_call2(_q_[3],t,0)}
    function get_key1_copy(t){return caml_call2(_q_[4],t,0)}
    function set_key1(t,k){return caml_call3(_q_[5],t,0,k)}
    function unset_key1(t){return caml_call2(_q_[6],t,0)}
    function check_key1(t){return caml_call2(_q_[7],t,0)}
    function get_key2(t){return caml_call2(_q_[3],t,1)}
    function get_key2_copy(t){return caml_call2(_q_[4],t,1)}
    function set_key2(t,k){return caml_call3(_q_[5],t,1,k)}
    function unset_key2(t){return caml_call2(_q_[6],t,1)}
    function check_key2(t){return caml_call2(_q_[7],t,1)}
    function blit_key1(t1,t2){return caml_call5(_q_[8],t1,0,t2,0,1)}
    function blit_key2(t1,t2){return caml_call5(_q_[8],t1,1,t2,1,1)}
    function blit_key12(t1,t2){return caml_call5(_q_[8],t1,0,t2,0,2)}
    function get_data$2(t){return caml_call1(_q_[9],t)}
    function get_data_copy$0(t){return caml_call1(_q_[10],t)}
    function set_data$0(t,d){return caml_call2(_q_[11],t,d)}
    function unset_data$0(t){return caml_call1(_q_[12],t)}
    function check_data$0(t){return caml_call1(_q_[13],t)}
    function blit_data$0(t1,t2){return caml_call2(_q_[14],t1,t2)}
    function make$6(key1,key2,data)
     {var eph=create$6(0);
      set_data$0(eph,data);
      set_key1(eph,key1);
      set_key2(eph,key2);
      return eph}
    function query$0(eph,key1,key2)
     {var match=get_key1(eph);
      if(match)
       {var k=match[1];
        if(k === key1)
         {var match$0=get_key2(eph);
          if(match$0)
           {var k$0=match$0[1];return k$0 === key2?get_data$2(eph):0}
          return 0}
        return 0}
      return 0}
    function MakeSeeded$2(H1,H2)
     {function create(param,d)
       {var k2=param[2],k1=param[1],c=create$6(0);
        set_data$0(c,d);
        set_key1(c,k1);
        set_key2(c,k2);
        return c}
      function hash(seed,param)
       {var
         k2=param[2],
         k1=param[1],
         _f2_=caml_call2(H2[2],seed,k2) * 65599 | 0;
        return caml_call2(H1[2],seed,k1) + _f2_ | 0}
      function equal(c,param)
       {var k2=param[2],k1=param[1],match=get_key1(c),match$0=get_key2(c);
        if(match && match$0)
         {var k2$0=match$0[1],k1$0=match[1];
          if(caml_call2(H1[1],k1,k1$0) && caml_call2(H2[1],k2,k2$0))return 0;
          return 1}
        return 2}
      function get_key(c)
       {var match=get_key1(c),match$0=get_key2(c);
        if(match && match$0)
         {var k2=match$0[1],k1=match[1];return [0,[0,k1,k2]]}
        return 0}
      function set_key_data(c,param,d)
       {var k2=param[2],k1=param[1];
        unset_data$0(c);
        set_key1(c,k1);
        set_key2(c,k2);
        return set_data$0(c,d)}
      function check_key(c)
       {var _f1_=check_key1(c);return _f1_?check_key2(c):_f1_}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$2,get_key,set_key_data,check_key])}
    function Make$3(H1,H2)
     {var equal=H2[1];
      function hash(seed,x){return caml_call1(H2[2],x)}
      var equal$0=H1[1],_fZ_=[0,equal,hash];
      function hash$0(seed,x){return caml_call1(H1[2],x)}
      var
       include=MakeSeeded$2([0,equal$0,hash$0],_fZ_),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _f0_=include[1];
      function create(sz){return caml_call2(_f0_,_cT_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function make$7(param){return [0,0]}
    function add$2(b,k1,k2,d)
     {var _fY_=b[1];b[1] = [0,make$6(k1,k2,d),_fY_];return 0}
    function test_keys(k1,k2,e)
     {var match=get_key1(e),match$0=get_key2(e);
      if(match && match$0)
       {var x2=match$0[1],x1=match[1];if(x1 === k1 && x2 === k2)return 1}
      return 0}
    function remove$1(b,k1,k2)
     {var l=b[1],acc=0;
      for(;;)
       {if(l)
         {var h=l[1],t=l[2];
          if(test_keys(k1,k2,h)){b[1] = rev_append(acc,t);return 0}
          var l$0=l[2],acc$0=[0,h,acc],l=l$0,acc=acc$0;
          continue}
        return 0}}
    function find$3(b,k1,k2)
     {var
       _fW_=b[1],
       match=find_opt(function(_fX_){return test_keys(k1,k2,_fX_)},_fW_);
      if(match){var e=match[1];return get_data$2(e)}
      return 0}
    function length$8(b){return length$1(b[1])}
    function clear$4(b){b[1] = 0;return 0}
    function create$7(n){return caml_call1(_q_[1],n)}
    function length$9(k){return caml_call1(_q_[2],k)}
    function get_key$1(t,n){return caml_call2(_q_[3],t,n)}
    function get_key_copy$1(t,n){return caml_call2(_q_[4],t,n)}
    function set_key$1(t,n,k){return caml_call3(_q_[5],t,n,k)}
    function unset_key$1(t,n){return caml_call2(_q_[6],t,n)}
    function check_key$1(t,n){return caml_call2(_q_[7],t,n)}
    function blit_key$1(t1,o1,t2,o2,l)
     {return caml_call5(_q_[8],t1,o1,t2,o2,l)}
    function get_data$3(t){return caml_call1(_q_[9],t)}
    function get_data_copy$1(t){return caml_call1(_q_[10],t)}
    function set_data$1(t,d){return caml_call2(_q_[11],t,d)}
    function unset_data$1(t){return caml_call1(_q_[12],t)}
    function check_data$1(t){return caml_call1(_q_[13],t)}
    function blit_data$1(t1,t2){return caml_call2(_q_[14],t1,t2)}
    function make$8(keys,data)
     {var l=keys.length - 1,eph=create$7(l);
      set_data$1(eph,data);
      var _fU_=l - 1 | 0,_fT_=0;
      if(! (_fU_ < 0))
       {var i=_fT_;
        for(;;)
         {set_key$1(eph,i,caml_check_bound(keys,i)[1 + i]);
          var _fV_=i + 1 | 0;
          if(_fU_ !== i){var i=_fV_;continue}
          break}}
      return eph}
    function query$1(eph,keys)
     {var l=length$9(eph);
      try
       {if(l !== keys.length - 1)throw Exit;
        var _fP_=l - 1 | 0,_fO_=0;
        if(! (_fP_ < 0))
         {var i=_fO_;
          for(;;)
           {var match=get_key$1(eph,i);
            if(! match)throw Exit;
            var k=match[1];
            if(k !== caml_check_bound(keys,i)[1 + i])throw Exit;
            var _fR_=i + 1 | 0;
            if(_fP_ !== i){var i=_fR_;continue}
            break}}
        var _fQ_=get_data$3(eph);
        return _fQ_}
      catch(_fS_)
       {_fS_ = caml_wrap_exception(_fS_);if(_fS_ === Exit)return 0;throw _fS_}}
    function MakeSeeded$3(H)
     {function create(k,d)
       {var c=create$7(k.length - 1);
        set_data$1(c,d);
        var _fM_=k.length - 1 - 1 | 0,_fL_=0;
        if(! (_fM_ < 0))
         {var i=_fL_;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _fN_=i + 1 | 0;
            if(_fM_ !== i){var i=_fN_;continue}
            break}}
        return c}
      function hash(seed,k)
       {var h=[0,0],_fH_=k.length - 1 - 1 | 0,_fG_=0;
        if(! (_fH_ < 0))
         {var i=_fG_;
          for(;;)
           {var _fI_=h[1],_fJ_=caml_check_bound(k,i)[1 + i];
            h[1] = (caml_call2(H[2],seed,_fJ_) * 65599 | 0) + _fI_ | 0;
            var _fK_=i + 1 | 0;
            if(_fH_ !== i){var i=_fK_;continue}
            break}}
        return h[1]}
      function equal(c,k)
       {var len=k.length - 1,len$0=length$9(c);
        if(len !== len$0)return 1;
        var i$1=len - 1 | 0,i=i$1;
        for(;;)
         {if(0 <= i)
           {var match=get_key$1(c,i);
            if(match)
             {var ki=match[1],_fF_=caml_check_bound(k,i)[1 + i];
              if(caml_call2(H[1],_fF_,ki)){var i$0=i - 1 | 0,i=i$0;continue}
              return 1}
            return 2}
          return 0}}
      function get_key(c)
       {var len=length$9(c);
        if(0 === len)return [0,[0]];
        var match=get_key$1(c,0);
        if(match)
         {var k0=match[1],a=caml_make_vect(len,k0),i$1=len - 1 | 0,i=i$1;
          for(;;)
           {if(1 <= i)
             {var match$0=get_key$1(c,i);
              if(match$0)
               {var ki=match$0[1];
                caml_check_bound(a,i)[1 + i] = ki;
                var i$0=i - 1 | 0,i=i$0;
                continue}
              return 0}
            return [0,a]}}
        return 0}
      function set_key_data(c,k,d)
       {unset_data$1(c);
        var _fD_=k.length - 1 - 1 | 0,_fC_=0;
        if(! (_fD_ < 0))
         {var i=_fC_;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _fE_=i + 1 | 0;
            if(_fD_ !== i){var i=_fE_;continue}
            break}}
        return set_data$1(c,d)}
      function check_key(c)
       {var i$1=length$9(c) - 1 | 0,i=i$1;
        for(;;)
         {var _fz_=i < 0?1:0;
          if(_fz_)
           var _fA_=_fz_;
          else
           {var _fB_=check_key$1(c,i);
            if(_fB_){var i$0=i - 1 | 0,i=i$0;continue}
            var _fA_=_fB_}
          return _fA_}}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$3,get_key,set_key_data,check_key])}
    function Make$4(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$3([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _fy_=include[1];
      function create(sz){return caml_call2(_fy_,_cU_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function make$9(param){return [0,0]}
    function add$3(b,k,d){var _fx_=b[1];b[1] = [0,make$8(k,d),_fx_];return 0}
    function test_keys$0(k,e)
     {try
       {if(length$9(e) !== k.length - 1)throw Exit;
        var _ft_=k.length - 1 - 1 | 0,_fs_=0;
        if(! (_ft_ < 0))
         {var i=_fs_;
          for(;;)
           {var match=get_key$1(e,i),switch$0=0;
            if(match)
             {var x=match[1];
              if(x === caml_check_bound(k,i)[1 + i])
               {var _fv_=i + 1 | 0;
                if(_ft_ !== i){var i=_fv_;continue}
                switch$0 = 1}}
            if(! switch$0)throw Exit;
            break}}
        var _fu_=1;
        return _fu_}
      catch(_fw_)
       {_fw_ = caml_wrap_exception(_fw_);if(_fw_ === Exit)return 0;throw _fw_}}
    function remove$2(b,k)
     {var l=b[1],acc=0;
      for(;;)
       {if(l)
         {var h=l[1],t=l[2];
          if(test_keys$0(k,h)){b[1] = rev_append(acc,t);return 0}
          var l$0=l[2],acc$0=[0,h,acc],l=l$0,acc=acc$0;
          continue}
        return 0}}
    function find$4(b,k)
     {var
       _fq_=b[1],
       match=find_opt(function(_fr_){return test_keys$0(k,_fr_)},_fq_);
      if(match){var e=match[1];return get_data$3(e)}
      return 0}
    function length$10(b){return length$1(b[1])}
    function clear$5(b){b[1] = 0;return 0}
    var
     Stdlib_Ephemeron=
      [0,
       [0,
        create$5,
        get_key$0,
        get_key_copy$0,
        set_key$0,
        unset_key$0,
        check_key$0,
        blit_key$0,
        get_data$1,
        get_data_copy,
        set_data,
        unset_data,
        check_data,
        blit_data,
        make$4,
        query,
        Make$2,
        MakeSeeded$1,
        [0,make$5,add$1,remove$0,find$2,length$7,clear$3]],
       [0,
        create$6,
        get_key1,
        get_key1_copy,
        set_key1,
        unset_key1,
        check_key1,
        get_key2,
        get_key2_copy,
        set_key2,
        unset_key2,
        check_key2,
        blit_key1,
        blit_key2,
        blit_key12,
        get_data$2,
        get_data_copy$0,
        set_data$0,
        unset_data$0,
        check_data$0,
        blit_data$0,
        make$6,
        query$0,
        Make$3,
        MakeSeeded$2,
        [0,make$7,add$2,remove$1,find$3,length$8,clear$4]],
       [0,
        create$7,
        get_key$1,
        get_key_copy$1,
        set_key$1,
        unset_key$1,
        check_key$1,
        blit_key$1,
        get_data$3,
        get_data_copy$1,
        set_data$1,
        unset_data$1,
        check_data$1,
        blit_data$1,
        make$8,
        query$1,
        Make$4,
        MakeSeeded$3,
        [0,make$9,add$3,remove$2,find$4,length$10,clear$5]],
       [0,
        function(_fp_)
         {return MakeSeeded$0
                  ([0,_fp_[3],_fp_[1],_fp_[2],_fp_[5],_fp_[4],_fp_[6],_fp_[7]])}]];
    caml_register_global(825,Stdlib_Ephemeron,"Stdlib__Ephemeron");
    function generic_basename(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$100))return current_dir_name;
      var n$3=caml_ml_string_length(name) - 1 | 0,n=n$3;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var p=n + 1 | 0,n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               return sub$0(name,n$1 + 1 | 0,(p - n$1 | 0) - 1 | 0);
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return sub$0(name,0,p)}}
        return sub$0(name,0,1)}}
    function generic_dirname(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$101))return current_dir_name;
      var n$5=caml_ml_string_length(name) - 1 | 0,n=n$5;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               {var n$3=n$1;
                for(;;)
                 {if(0 <= n$3)
                   {if(caml_call2(is_dir_sep,name,n$3))
                     {var n$4=n$3 - 1 | 0,n$3=n$4;continue}
                    return sub$0(name,0,n$3 + 1 | 0)}
                  return sub$0(name,0,1)}}
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return current_dir_name}}
        return sub$0(name,0,1)}}
    function is_dir_sep(s,i){return 47 === caml_string_get(s,i)?1:0}
    function is_relative(n)
     {var
       _fn_=caml_ml_string_length(n) < 1?1:0,
       _fo_=_fn_ || (47 !== caml_string_get(n,0)?1:0);
      return _fo_}
    function is_implicit(n)
     {var _fi_=is_relative(n);
      if(_fi_)
       {var
         _fj_=caml_ml_string_length(n) < 2?1:0,
         _fk_=_fj_ || caml_string_notequal(sub$0(n,0,2),cst$103);
        if(_fk_)
         var
          _fl_=caml_ml_string_length(n) < 3?1:0,
          _fm_=_fl_ || caml_string_notequal(sub$0(n,0,3),cst$102);
        else
         var _fm_=_fk_}
      else
       var _fm_=_fi_;
      return _fm_}
    function check_suffix(name,suff){return ends_with$0(suff,name)}
    function chop_suffix_opt(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var r=sub$0(filename,len_f - len_s | 0,len_s);
        return caml_string_equal(r,suffix)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _c3_=caml_sys_getenv(cst_TMPDIR),_cV_=_c3_}
    catch(_fh_)
     {_fh_ = caml_wrap_exception(_fh_);
      if(_fh_ !== Not_found)throw _fh_;
      var _cV_=cst_tmp}
    function quote(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,39);
      var _ff_=l - 1 | 0,_fe_=0;
      if(! (_ff_ < 0))
       {var i=_fe_;
        for(;;)
         {if(39 === caml_string_get(s,i))
           add_string(b,quotequote);
          else
           add_char(b,caml_string_get(s,i));
          var _fg_=i + 1 | 0;
          if(_ff_ !== i){var i=_fg_;continue}
          break}}
      add_char(b,39);
      return contents(b)}
    function quote_command(cmd,stdin,stdout,stderr,args)
     {if(stderr)
       var
        f=stderr[1],
        _e__=caml_equal(stderr,stdout)?cst_2_1:cat(cst_2,quote(f)),
        _e$_=_e__;
      else
       var _e$_=cst$109;
      if(stdout)
       var f$0=stdout[1],_fa_=cat(cst$104,quote(f$0));
      else
       var _fa_=cst$108;
      var _fb_=cat(_fa_,_e$_);
      if(stdin)
       var f$1=stdin[1],_fc_=cat(cst$105,quote(f$1));
      else
       var _fc_=cst$107;
      var _fd_=cat(_fc_,_fb_);
      return cat(concat$1(cst$106,map$4(quote,[0,cmd,args])),_fd_)}
    function basename(_e9_)
     {return generic_basename(is_dir_sep,current_dir_name,_e9_)}
    function dirname(_e8_)
     {return generic_dirname(is_dir_sep,current_dir_name,_e8_)}
    var
     Unix=
      [0,
       null$0,
       current_dir_name,
       parent_dir_name,
       dir_sep,
       is_dir_sep,
       is_relative,
       is_implicit,
       check_suffix,
       chop_suffix_opt,
       _cV_,
       quote,
       quote_command,
       basename,
       dirname];
    function is_dir_sep$0(s,i)
     {var c=caml_string_get(s,i),_e5_=47 === c?1:0;
      if(_e5_)
       var _e6_=_e5_;
      else
       var _e7_=92 === c?1:0,_e6_=_e7_ || (58 === c?1:0);
      return _e6_}
    function is_relative$0(n)
     {var
       _eZ_=caml_ml_string_length(n) < 1?1:0,
       _e0_=_eZ_ || (47 !== caml_string_get(n,0)?1:0);
      if(_e0_)
       {var
         _e1_=caml_ml_string_length(n) < 1?1:0,
         _e2_=_e1_ || (92 !== caml_string_get(n,0)?1:0);
        if(_e2_)
         var
          _e3_=caml_ml_string_length(n) < 2?1:0,
          _e4_=_e3_ || (58 !== caml_string_get(n,1)?1:0);
        else
         var _e4_=_e2_}
      else
       var _e4_=_e0_;
      return _e4_}
    function is_implicit$0(n)
     {var _eQ_=is_relative$0(n);
      if(_eQ_)
       {var
         _eR_=caml_ml_string_length(n) < 2?1:0,
         _eS_=_eR_ || caml_string_notequal(sub$0(n,0,2),cst$113);
        if(_eS_)
         {var
           _eT_=caml_ml_string_length(n) < 2?1:0,
           _eU_=_eT_ || caml_string_notequal(sub$0(n,0,2),cst$112);
          if(_eU_)
           {var
             _eV_=caml_ml_string_length(n) < 3?1:0,
             _eW_=_eV_ || caml_string_notequal(sub$0(n,0,3),cst$111);
            if(_eW_)
             var
              _eX_=caml_ml_string_length(n) < 3?1:0,
              _eY_=_eX_ || caml_string_notequal(sub$0(n,0,3),cst$110);
            else
             var _eY_=_eW_}
          else
           var _eY_=_eU_}
        else
         var _eY_=_eS_}
      else
       var _eY_=_eQ_;
      return _eY_}
    function check_suffix$0(name,suff)
     {var _eN_=caml_ml_string_length(suff) <= caml_ml_string_length(name)?1:0;
      if(_eN_)
       var
        s=
         sub$0
          (name,
           caml_ml_string_length(name) - caml_ml_string_length(suff) | 0,
           caml_ml_string_length(suff)),
        _eO_=lowercase_ascii$1(suff),
        _eP_=caml_string_equal(lowercase_ascii$1(s),_eO_);
      else
       var _eP_=_eN_;
      return _eP_}
    function chop_suffix_opt$0(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var
         r=sub$0(filename,len_f - len_s | 0,len_s),
         _eM_=lowercase_ascii$1(suffix);
        return caml_string_equal(lowercase_ascii$1(r),_eM_)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _c2_=caml_sys_getenv(cst_TEMP),temp_dir_name=_c2_}
    catch(_eL_)
     {_eL_ = caml_wrap_exception(_eL_);
      if(_eL_ !== Not_found)throw _eL_;
      var temp_dir_name=cst$114}
    function quote$0(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,34);
      function add_bs(n)
       {var _eJ_=1;
        if(! (n < 1))
         {var j=_eJ_;
          for(;;)
           {add_char(b,92);
            var _eK_=j + 1 | 0;
            if(n !== j){var j=_eK_;continue}
            break}}
        return 0}
      function loop$0(counter,i)
       {var i$0=i;
        for(;;)
         {if(i$0 === l)return add_char(b,34);
          var c=caml_string_get(s,i$0);
          if(34 === c)
           {var _eH_=0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;
              return loop_bs(counter$1,_eH_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_eH_,i$0])}
          if(92 === c)
           {var _eI_=0;
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return loop_bs(counter$0,_eI_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_eI_,i$0])}
          add_char(b,c);
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function loop_bs(counter,n,i)
       {var n$0=n,i$0=i;
        for(;;)
         {if(i$0 === l){add_char(b,34);return add_bs(n$0)}
          var match=caml_string_get(s,i$0);
          if(34 === match)
           {add_bs((2 * n$0 | 0) + 1 | 0);
            add_char(b,34);
            var _eG_=i$0 + 1 | 0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;return loop$0(counter$1,_eG_)}
            return caml_trampoline_return(loop$0,[0,_eG_])}
          if(92 === match)
           {var i$1=i$0 + 1 | 0,n$1=n$0 + 1 | 0,n$0=n$1,i$0=i$1;continue}
          add_bs(n$0);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop$0(counter$0,i$0)}
          return caml_trampoline_return(loop$0,[0,i$0])}}
      function loop(i){return caml_trampoline(loop$0(0,i))}
      loop(0);
      return contents(b)}
    function quote_cmd_filename(f)
     {if(! contains$0(f,34) && ! contains$0(f,37))
       return contains$0(f,32)?cat(cst$116,cat(f,cst$115)):f;
      return failwith(cat(cst_Filename_quote_command_bad,f))}
    function quote_command$0(cmd,stdin,stdout,stderr,args)
     {if(stderr)
       var
        f=stderr[1],
        _ex_=
         caml_equal(stderr,stdout)
          ?cst_2_1$0
          :cat(cst_2$0,quote_cmd_filename(f)),
        _ey_=_ex_;
      else
       var _ey_=cst$125;
      var _ez_=[0,_ey_,_cW_];
      if(stdout)
       var f$0=stdout[1],_eA_=cat(cst$117,quote_cmd_filename(f$0));
      else
       var _eA_=cst$124;
      var _eB_=[0,_eA_,_ez_];
      if(stdin)
       var f$1=stdin[1],_eC_=cat(cst$118,quote_cmd_filename(f$1));
      else
       var _eC_=cst$123;
      var
       s=concat$1(cst$119,map$4(quote$0,args)),
       b=create$2(caml_ml_string_length(s) + 20 | 0),
       _eD_=[0,_eC_,_eB_];
      iter$4
       (function(c)
         {var switch$0=0;
          if(62 <= c)
           {var _eF_=c - 63 | 0;
            if(60 < _eF_ >>> 0)
             {if(! (62 <= _eF_))switch$0 = 1}
            else
             if(31 === _eF_)switch$0 = 1}
          else
           if(42 <= c)
            {if(60 === c)switch$0 = 1}
           else
            if(33 <= c)
             switch(c - 33 | 0)
              {case 2:case 3:case 6:break;default:switch$0 = 1}
          return switch$0?(add_char(b,94),add_char(b,c)):add_char(b,c)},
        s);
      var _eE_=[0,cst$120,[0,contents(b),_eD_]];
      return concat$1(cst$122,[0,cst$121,[0,quote_cmd_filename(cmd),_eE_]])}
    function drive_and_path(s)
     {var _et_=2 <= caml_ml_string_length(s)?1:0;
      if(_et_)
       {var param=caml_string_get(s,0),switch$0=0;
        if(91 <= param)
         {if(! (25 < param - 97 >>> 0))switch$0 = 1}
        else
         if(65 <= param)switch$0 = 1;
        var _eu_=switch$0?1:0,_ev_=_eu_?58 === caml_string_get(s,1)?1:0:_eu_}
      else
       var _ev_=_et_;
      if(_ev_)
       {var _ew_=sub$0(s,2,caml_ml_string_length(s) - 2 | 0);
        return [0,sub$0(s,0,2),_ew_]}
      return [0,cst$126,s]}
    function dirname$0(s)
     {var
       match=drive_and_path(s),
       path=match[2],
       drive=match[1],
       dir=generic_dirname(is_dir_sep$0,current_dir_name$0,path);
      return cat(drive,dir)}
    function basename$0(s)
     {var match=drive_and_path(s),path=match[2];
      return generic_basename(is_dir_sep$0,current_dir_name$0,path)}
    var
     Win32=
      [0,
       null$1,
       current_dir_name$0,
       parent_dir_name$0,
       dir_sep$0,
       is_dir_sep$0,
       is_relative$0,
       is_implicit$0,
       check_suffix$0,
       chop_suffix_opt$0,
       temp_dir_name,
       quote$0,
       quote_command$0,
       basename$0,
       dirname$0];
    function basename$1(_es_)
     {return generic_basename(is_dir_sep$0,current_dir_name$1,_es_)}
    function dirname$1(_er_)
     {return generic_dirname(is_dir_sep$0,current_dir_name$1,_er_)}
    var
     Cygwin=
      [0,
       null$2,
       current_dir_name$1,
       parent_dir_name$1,
       dir_sep$1,
       is_dir_sep$0,
       is_relative$0,
       is_implicit$0,
       check_suffix$0,
       chop_suffix_opt$0,
       _cV_,
       quote,
       quote_command,
       basename$1,
       dirname$1],
     Sysdeps=
      caml_string_notequal(os_type,cst_Cygwin)
       ?caml_string_notequal(os_type,cst_Win32)?Unix:Win32
       :Cygwin,
     null$3=Sysdeps[1],
     current_dir_name$2=Sysdeps[2],
     parent_dir_name$2=Sysdeps[3],
     dir_sep$2=Sysdeps[4],
     is_dir_sep$1=Sysdeps[5],
     is_relative$1=Sysdeps[6],
     is_implicit$1=Sysdeps[7],
     check_suffix$1=Sysdeps[8],
     chop_suffix_opt$1=Sysdeps[9],
     temp_dir_name$0=Sysdeps[10],
     quote$1=Sysdeps[11],
     quote_command$1=Sysdeps[12],
     basename$2=Sysdeps[13],
     dirname$2=Sysdeps[14];
    function concat$4(dirname,filename)
     {var l=caml_ml_string_length(dirname);
      if(0 !== l && ! is_dir_sep$1(dirname,l - 1 | 0))
       return cat(dirname,cat(dir_sep$2,filename));
      return cat(dirname,filename)}
    function chop_suffix(name,suff)
     {return check_suffix$1(name,suff)
              ?sub$0
                (name,
                 0,
                 caml_ml_string_length(name) - caml_ml_string_length(suff) | 0)
              :invalid_arg(cst_Filename_chop_suffix)}
    function extension_len(name)
     {var i$4=caml_ml_string_length(name) - 1 | 0,i$1=i$4;
      for(;;)
       {if(0 <= i$1 && ! is_dir_sep$1(name,i$1))
         {if(46 === caml_string_get(name,i$1))
           {var i$2=i$1 - 1 | 0,i=i$2;
            for(;;)
             {if(0 <= i && ! is_dir_sep$1(name,i))
               {if(46 === caml_string_get(name,i))
                 {var i$0=i - 1 | 0,i=i$0;continue}
                return caml_ml_string_length(name) - i$1 | 0}
              return 0}}
          var i$3=i$1 - 1 | 0,i$1=i$3;
          continue}
        return 0}}
    function extension(name)
     {var l=extension_len(name);
      return 0 === l?cst$127:sub$0(name,caml_ml_string_length(name) - l | 0,l)}
    function chop_extension(name)
     {var l=extension_len(name);
      return 0 === l
              ?invalid_arg(cst_Filename_chop_extension)
              :sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    function remove_extension(name)
     {var l=extension_len(name);
      return 0 === l?name:sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    var prng$0=[246,function(_eq_){return caml_call1(_ci_[2],0)}];
    function temp_file_name(temp_dir,prefix,suffix)
     {var
       _eo_=caml_obj_tag(prng$0),
       _ep_=
        250 === _eo_?prng$0[1]:246 === _eo_?force_lazy_block(prng$0):prng$0,
       rnd=caml_call1(_ci_[4],_ep_) & 16777215;
      return concat$4(temp_dir,caml_call3(sprintf(_cX_),prefix,rnd,suffix))}
    var current_temp_dir_name=[0,temp_dir_name$0];
    function set_temp_dir_name(s){current_temp_dir_name[1] = s;return 0}
    function get_temp_dir_name(param){return current_temp_dir_name[1]}
    function temp_file(opt,prefix,suffix)
     {if(opt)
       var sth=opt[1],temp_dir=sth;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {runtime.caml_sys_close(caml_sys_open(name,_cY_,384));return name}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    function open_temp_file(opt,_em_,_el_,prefix,suffix)
     {if(opt)var sth=opt[1],mode=sth;else var mode=_cZ_;
      if(_em_)var sth$0=_em_[1],perms=sth$0;else var perms=384;
      if(_el_)
       var sth$1=_el_[1],temp_dir=sth$1;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {var _en_=[0,name,open_gen([0,1,[0,3,[0,5,mode]]],perms,name)];
            return _en_}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    var
     Stdlib_Filename=
      [0,
       current_dir_name$2,
       parent_dir_name$2,
       dir_sep$2,
       concat$4,
       is_relative$1,
       is_implicit$1,
       check_suffix$1,
       chop_suffix,
       chop_suffix_opt$1,
       extension,
       remove_extension,
       chop_extension,
       basename$2,
       dirname$2,
       null$3,
       temp_file,
       open_temp_file,
       get_temp_dir_name,
       set_temp_dir_name,
       temp_dir_name$0,
       quote$1,
       quote_command$1];
    caml_register_global(826,Stdlib_Filename,"Stdlib__Filename");
    function add$4(x,y){return [254,x[1] + y[1],x[2] + y[2]]}
    function sub$4(x,y){return [254,x[1] - y[1],x[2] - y[2]]}
    function neg(x){return [254,- x[1],- x[2]]}
    function conj(x){return [254,x[1],- x[2]]}
    function mul(x,y)
     {return [254,x[1] * y[1] - x[2] * y[2],x[1] * y[2] + x[2] * y[1]]}
    function div(x,y)
     {if(Math.abs(y[2]) <= Math.abs(y[1]))
       {var r=y[2] / y[1],d=y[1] + r * y[2];
        return [254,(x[1] + r * x[2]) / d,(x[2] - r * x[1]) / d]}
      var r$0=y[1] / y[2],d$0=y[2] + r$0 * y[1];
      return [254,(r$0 * x[1] + x[2]) / d$0,(r$0 * x[2] - x[1]) / d$0]}
    function inv(x){return div(one$4,x)}
    function norm2(x){return x[1] * x[1] + x[2] * x[2]}
    function norm(x)
     {var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(r == 0.)return i;
      if(i == 0.)return r;
      if(i <= r){var q=i / r;return r * Math.sqrt(1. + q * q)}
      var q$0=r / i;
      return i * Math.sqrt(1. + q$0 * q$0)}
    function arg(x){return Math.atan2(x[2],x[1])}
    function polar(n,a){return [254,Math.cos(a) * n,Math.sin(a) * n]}
    function sqrt(x)
     {if(x[1] == 0. && x[2] == 0.)return _c0_;
      var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(i <= r)
       var
        q=i / r,
        w=Math.sqrt(r) * Math.sqrt(0.5 * (1. + Math.sqrt(1. + q * q)));
      else
       var
        q$0=r / i,
        w=Math.sqrt(i) * Math.sqrt(0.5 * (q$0 + Math.sqrt(1. + q$0 * q$0)));
      if(0. <= x[1])return [254,w,0.5 * x[2] / w];
      var w$0=0. <= x[2]?w:- w;
      return [254,0.5 * i / w,w$0]}
    function exp(x)
     {var e=Math.exp(x[1]);return [254,e * Math.cos(x[2]),e * Math.sin(x[2])]}
    function log(x)
     {var _ek_=Math.atan2(x[2],x[1]);return [254,Math.log(norm(x)),_ek_]}
    function pow(x,y){return exp(mul(y,log(x)))}
    var
     Stdlib_Complex=
      [0,
       zero$4,
       one$4,
       i,
       neg,
       conj,
       add$4,
       sub$4,
       mul,
       inv,
       div,
       sqrt,
       norm2,
       norm,
       arg,
       polar,
       exp,
       log,
       pow];
    caml_register_global(827,Stdlib_Complex,"Stdlib__Complex");
    var
     Stdlib_ArrayLabels=
      [0,
       make_float,
       init$3,
       create_matrix,
       create_matrix,
       append$1,
       concat$2,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       iteri$3,
       map$7,
       mapi$3,
       fold_left$3,
       fold_left_map$0,
       fold_right$2,
       iter2$1,
       map2$1,
       for_all$3,
       exists$3,
       for_all2$1,
       exists2$1,
       mem$0,
       memq$0,
       find_opt$0,
       find_map$1,
       split$0,
       combine$0,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(828,Stdlib_ArrayLabels,"Stdlib__ArrayLabels");
    var
     Stdlib_ListLabels=
      [0,
       length$1,
       compare_lengths,
       compare_length_with,
       cons$0,
       hd,
       tl,
       nth,
       nth_opt,
       rev,
       init$0,
       append,
       rev_append,
       flatten,
       flatten,
       equal$6,
       compare$6,
       iter$2,
       iteri$0,
       map$4,
       mapi$0,
       rev_map,
       filter_map$0,
       concat_map,
       fold_left_map,
       fold_left$0,
       fold_right,
       iter2$0,
       map2$0,
       rev_map2,
       fold_left2$0,
       fold_right2,
       for_all$0,
       exists$0,
       for_all2$0,
       exists2$0,
       mem,
       memq,
       find$0,
       find_opt,
       find_map$0,
       find_all,
       find_all,
       filteri,
       partition$0,
       partition_map$0,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(829,Stdlib_ListLabels,"Stdlib__ListLabels");
    var
     Stdlib_BytesLabels=
      [0,
       make$0,
       init$1,
       empty$0,
       copy,
       to_bytes,
       of_bytes,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat$0,
       cat$0,
       iter$3,
       iteri$1,
       map$5,
       mapi$1,
       fold_left$1,
       fold_right$0,
       for_all$1,
       exists$1,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$8,
       equal$8,
       starts_with,
       ends_with,
       unsafe_to_string,
       unsafe_of_string,
       split_on_char,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_utf_8_uchar,
       set_utf_8_uchar,
       is_valid_utf_8,
       get_utf_16be_uchar,
       set_utf_16be_uchar,
       is_valid_utf_16be,
       get_utf_16le_uchar,
       set_utf_16le_uchar,
       is_valid_utf_16le,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le];
    caml_register_global(830,Stdlib_BytesLabels,"Stdlib__BytesLabels");
    var
     Stdlib_StringLabels=
      [0,
       make$1,
       init$2,
       empty$1,
       of_bytes,
       to_bytes,
       concat$1,
       cat,
       equal$9,
       compare$9,
       starts_with$0,
       ends_with$0,
       contains_from$0,
       rcontains_from$0,
       contains$0,
       sub$0,
       split_on_char$0,
       map$6,
       mapi$2,
       fold_left$2,
       fold_right$1,
       for_all$2,
       exists$2,
       trim$0,
       escaped$1,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       iter$4,
       iteri$2,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       to_seq$3,
       to_seqi$0,
       of_seq$1,
       get_utf_8_uchar$0,
       is_valid_utf_8$0,
       get_utf_16be_uchar$0,
       is_valid_utf_16be$0,
       get_utf_16le_uchar$0,
       is_valid_utf_16le$0,
       blit$0,
       copy$0,
       fill,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       get_uint8$0,
       get_int8$0,
       get_uint16_ne$0,
       get_uint16_be$0,
       get_uint16_le$0,
       get_int16_ne$0,
       get_int16_be$0,
       get_int16_le$0,
       get_int32_ne$0,
       get_int32_be$0,
       get_int32_le$0,
       get_int64_ne$0,
       get_int64_be$0,
       get_int64_le$0];
    caml_register_global(831,Stdlib_StringLabels,"Stdlib__StringLabels");
    var Stdlib_MoreLabels=[0,Stdlib_Hashtbl,Stdlib_Map,Stdlib_Set];
    caml_register_global(832,Stdlib_MoreLabels,"Stdlib__MoreLabels");
    var Stdlib_StdLabels=[0];
    caml_register_global(833,Stdlib_StdLabels,"Stdlib__StdLabels");
    var
     float32=0,
     float64=1,
     int8_signed=2,
     int8_unsigned=3,
     int16_signed=4,
     int16_unsigned=5,
     int32$1=6,
     int64$1=7,
     int$2=8,
     nativeint$1=9,
     complex32=10,
     complex64=11,
     char$0=12;
    function kind_size_in_bytes(param)
     {switch(param)
       {case 0:return 4;
        case 1:return 8;
        case 2:return 1;
        case 3:return 1;
        case 4:return 2;
        case 5:return 2;
        case 6:return 4;
        case 7:return 8;
        case 8:return 4;
        case 9:return 4;
        case 10:return 8;
        case 11:return 16;
        default:return 1}}
    var c_layout=0,fortran_layout=1;
    function cloop(arr,idx,f,col,max)
     {if(col === idx.length - 1)
       return caml_ba_set_generic(arr,idx,caml_call1(f,idx));
      var _ei_=caml_check_bound(max,col)[1 + col] - 1 | 0,_eh_=0;
      if(! (_ei_ < 0))
       {var j=_eh_;
        for(;;)
         {caml_check_bound(idx,col)[1 + col] = j;
          cloop(arr,idx,f,col + 1 | 0,max);
          var _ej_=j + 1 | 0;
          if(_ei_ !== j){var j=_ej_;continue}
          break}}
      return 0}
    function floop(arr,idx,f,col,max)
     {if(0 <= col)
       {var _ef_=caml_check_bound(max,col)[1 + col],_ee_=1;
        if(! (_ef_ < 1))
         {var j=_ee_;
          for(;;)
           {caml_check_bound(idx,col)[1 + col] = j;
            floop(arr,idx,f,col - 1 | 0,max);
            var _eg_=j + 1 | 0;
            if(_ef_ !== j){var j=_eg_;continue}
            break}}
        return 0}
      return caml_ba_set_generic(arr,idx,caml_call1(f,idx))}
    function init$6(kind,layout,dims,f)
     {var arr=caml_ba_create(kind,layout,dims),dlen=dims.length - 1;
      return 0 === dlen
              ?arr
              :layout
                ?(floop(arr,caml_make_vect(dlen,1),f,dlen - 1 | 0,dims),arr)
                :(cloop(arr,caml_make_vect(dlen,0),f,0,dims),arr)}
    function dims(a)
     {var n=caml_ba_num_dims(a),d=caml_make_vect(n,0),_eb_=n - 1 | 0,_ea_=0;
      if(! (_eb_ < 0))
       {var i=_ea_;
        for(;;)
         {var _ec_=runtime.caml_ba_dim(a,i);
          caml_check_bound(d,i)[1 + i] = _ec_;
          var _ed_=i + 1 | 0;
          if(_eb_ !== i){var i=_ed_;continue}
          break}}
      return d}
    function size_in_bytes(arr)
     {var _d$_=fold_left$3(caml_mul,1,dims(arr));
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_d$_)}
    function create$8(kind,layout){return caml_ba_create(kind,layout,[0])}
    function get$3(arr){return runtime.caml_ba_get_generic(arr,[0])}
    function set$2(arr)
     {var _d9_=[0];
      return function(_d__){return caml_ba_set_generic(arr,_d9_,_d__)}}
    function size_in_bytes$0(arr)
     {return kind_size_in_bytes(caml_ba_kind(arr))}
    function of_value(kind,layout,v)
     {var a=create$8(kind,layout);caml_call1(set$2(a),v);return a}
    function create$9(kind,layout,dim)
     {return caml_ba_create(kind,layout,[0,dim])}
    function size_in_bytes$1(arr)
     {var _d8_=caml_ba_dim_1(arr);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_d8_)}
    function slice(a,n)
     {var match=runtime.caml_ba_layout(a);
      return match?caml_ba_slice(a,[0,n]):caml_ba_slice(a,[0,n])}
    function init$7(kind,layout,dim,f)
     {var arr=create$9(kind,layout,dim);
      if(layout)
       {var _d6_=1;
        if(! (dim < 1))
         {var i$0=_d6_;
          for(;;)
           {caml_ba_set_1(arr,i$0,caml_call1(f,i$0));
            var _d7_=i$0 + 1 | 0;
            if(dim !== i$0){var i$0=_d7_;continue}
            break}}
        return arr}
      var _d4_=dim - 1 | 0,_d3_=0;
      if(! (_d4_ < 0))
       {var i=_d3_;
        for(;;)
         {caml_ba_set_1(arr,i,caml_call1(f,i));
          var _d5_=i + 1 | 0;
          if(_d4_ !== i){var i=_d5_;continue}
          break}}
      return arr}
    function of_array(kind,layout,data)
     {var
       ba=create$9(kind,layout,data.length - 1),
       ofs=layout?1:0,
       _d1_=data.length - 1 - 1 | 0,
       _d0_=0;
      if(! (_d1_ < 0))
       {var i=_d0_;
        for(;;)
         {caml_ba_set_1(ba,i + ofs | 0,caml_check_bound(data,i)[1 + i]);
          var _d2_=i + 1 | 0;
          if(_d1_ !== i){var i=_d2_;continue}
          break}}
      return ba}
    function create$10(kind,layout,dim1,dim2)
     {return caml_ba_create(kind,layout,[0,dim1,dim2])}
    function size_in_bytes$2(arr)
     {var _dY_=caml_ba_dim_2(arr),_dZ_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_dZ_),_dY_)}
    function slice_left(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right(a,n){return caml_ba_slice(a,[0,n])}
    function init$8(kind,layout,dim1,dim2,f)
     {var arr=create$10(kind,layout,dim1,dim2);
      if(layout)
       {var _dU_=1;
        if(! (dim2 < 1))
         {var j$0=_dU_;
          for(;;)
           {var _dV_=1;
            if(! (dim1 < 1))
             {var i$0=_dV_;
              for(;;)
               {caml_ba_set_2(arr,i$0,j$0,caml_call2(f,i$0,j$0));
                var _dX_=i$0 + 1 | 0;
                if(dim1 !== i$0){var i$0=_dX_;continue}
                break}}
            var _dW_=j$0 + 1 | 0;
            if(dim2 !== j$0){var j$0=_dW_;continue}
            break}}
        return arr}
      var _dP_=dim1 - 1 | 0,_dO_=0;
      if(! (_dP_ < 0))
       {var i=_dO_;
        for(;;)
         {var _dR_=dim2 - 1 | 0,_dQ_=0;
          if(! (_dR_ < 0))
           {var j=_dQ_;
            for(;;)
             {caml_ba_set_2(arr,i,j,caml_call2(f,i,j));
              var _dT_=j + 1 | 0;
              if(_dR_ !== j){var j=_dT_;continue}
              break}}
          var _dS_=i + 1 | 0;
          if(_dP_ !== i){var i=_dS_;continue}
          break}}
      return arr}
    function of_array$0(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       ba=create$10(kind,layout,dim1,dim2),
       ofs=layout?1:0,
       _dJ_=dim1 - 1 | 0,
       _dI_=0;
      if(! (_dJ_ < 0))
       {var i=_dI_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array2_of_array_n);
          var _dL_=dim2 - 1 | 0,_dK_=0;
          if(! (_dL_ < 0))
           {var j=_dK_;
            for(;;)
             {caml_ba_set_2
               (ba,i + ofs | 0,j + ofs | 0,caml_check_bound(row,j)[1 + j]);
              var _dN_=j + 1 | 0;
              if(_dL_ !== j){var j=_dN_;continue}
              break}}
          var _dM_=i + 1 | 0;
          if(_dJ_ !== i){var i=_dM_;continue}
          break}}
      return ba}
    function create$11(kind,layout,dim1,dim2,dim3)
     {return caml_ba_create(kind,layout,[0,dim1,dim2,dim3])}
    function size_in_bytes$3(arr)
     {var
       _dF_=runtime.caml_ba_dim_3(arr),
       _dG_=caml_ba_dim_2(arr),
       _dH_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul
                (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_dH_),_dG_),
               _dF_)}
    function slice_left_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_right_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_left_2(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right_2(a,n){return caml_ba_slice(a,[0,n])}
    function init$9(kind,layout,dim1,dim2,dim3,f)
     {var arr=create$11(kind,layout,dim1,dim2,dim3);
      if(layout)
       {var _dz_=1;
        if(! (dim3 < 1))
         {var k$0=_dz_;
          for(;;)
           {var _dA_=1;
            if(! (dim2 < 1))
             {var j$0=_dA_;
              for(;;)
               {var _dC_=1;
                if(! (dim1 < 1))
                 {var i$0=_dC_;
                  for(;;)
                   {caml_ba_set_3(arr,i$0,j$0,k$0,caml_call3(f,i$0,j$0,k$0));
                    var _dE_=i$0 + 1 | 0;
                    if(dim1 !== i$0){var i$0=_dE_;continue}
                    break}}
                var _dD_=j$0 + 1 | 0;
                if(dim2 !== j$0){var j$0=_dD_;continue}
                break}}
            var _dB_=k$0 + 1 | 0;
            if(dim3 !== k$0){var k$0=_dB_;continue}
            break}}
        return arr}
      var _dr_=dim1 - 1 | 0,_dq_=0;
      if(! (_dr_ < 0))
       {var i=_dq_;
        for(;;)
         {var _dt_=dim2 - 1 | 0,_ds_=0;
          if(! (_dt_ < 0))
           {var j=_ds_;
            for(;;)
             {var _dw_=dim3 - 1 | 0,_dv_=0;
              if(! (_dw_ < 0))
               {var k=_dv_;
                for(;;)
                 {caml_ba_set_3(arr,i,j,k,caml_call3(f,i,j,k));
                  var _dy_=k + 1 | 0;
                  if(_dw_ !== k){var k=_dy_;continue}
                  break}}
              var _dx_=j + 1 | 0;
              if(_dt_ !== j){var j=_dx_;continue}
              break}}
          var _du_=i + 1 | 0;
          if(_dr_ !== i){var i=_du_;continue}
          break}}
      return arr}
    function of_array$1(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       dim3=
        0 === dim2
         ?0
         :caml_check_bound(caml_check_bound(data,0)[1],0)[1].length - 1,
       ba=create$11(kind,layout,dim1,dim2,dim3),
       ofs=layout?1:0,
       _di_=dim1 - 1 | 0,
       _dh_=0;
      if(! (_di_ < 0))
       {var i=_dh_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array3_of_array_n);
          var _dk_=dim2 - 1 | 0,_dj_=0;
          if(! (_dk_ < 0))
           {var j=_dj_;
            for(;;)
             {var col=caml_check_bound(row,j)[1 + j];
              if(col.length - 1 !== dim3)
               invalid_arg(cst_Bigarray_Array3_of_array_n$0);
              var _dn_=dim3 - 1 | 0,_dm_=0;
              if(! (_dn_ < 0))
               {var k=_dm_;
                for(;;)
                 {caml_ba_set_3
                   (ba,
                    i + ofs | 0,
                    j + ofs | 0,
                    k + ofs | 0,
                    caml_check_bound(col,k)[1 + k]);
                  var _dp_=k + 1 | 0;
                  if(_dn_ !== k){var k=_dp_;continue}
                  break}}
              var _do_=j + 1 | 0;
              if(_dk_ !== j){var j=_do_;continue}
              break}}
          var _dl_=i + 1 | 0;
          if(_di_ !== i){var i=_dl_;continue}
          break}}
      return ba}
    function array0_of_genarray(a)
     {return 0 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array0_of_genarra)}
    function array1_of_genarray(a)
     {return 1 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array1_of_genarra)}
    function array2_of_genarray(a)
     {return 2 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array2_of_genarra)}
    function array3_of_genarray(a)
     {return 3 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array3_of_genarra)}
    function reshape_0(a){return caml_ba_reshape(a,[0])}
    function reshape_1(a,dim1){return caml_ba_reshape(a,[0,dim1])}
    function reshape_2(a,dim1,dim2){return caml_ba_reshape(a,[0,dim1,dim2])}
    function reshape_3(a,dim1,dim2,dim3)
     {return caml_ba_reshape(a,[0,dim1,dim2,dim3])}
    var
     Stdlib_Bigarray=
      [0,
       float32,
       float64,
       complex32,
       complex64,
       int8_signed,
       int8_unsigned,
       int16_signed,
       int16_unsigned,
       int$2,
       int32$1,
       int64$1,
       nativeint$1,
       char$0,
       kind_size_in_bytes,
       c_layout,
       fortran_layout,
       [0,init$6,dims,size_in_bytes],
       [0,
        create$8,
        of_value,
        caml_ba_change_layout,
        size_in_bytes$0,
        get$3,
        set$2,
        of_value],
       [0,
        create$9,
        init$7,
        caml_ba_change_layout,
        size_in_bytes$1,
        slice,
        of_array],
       [0,
        create$10,
        init$8,
        caml_ba_change_layout,
        size_in_bytes$2,
        slice_left,
        slice_right,
        of_array$0],
       [0,
        create$11,
        init$9,
        caml_ba_change_layout,
        size_in_bytes$3,
        slice_left_1,
        slice_right_1,
        slice_left_2,
        slice_right_2,
        of_array$1],
       array0_of_genarray,
       array1_of_genarray,
       array2_of_genarray,
       array3_of_genarray,
       caml_ba_reshape,
       reshape_0,
       reshape_1,
       reshape_2,
       reshape_3];
    caml_register_global(834,Stdlib_Bigarray,"Stdlib__Bigarray");
    function with_open(openfun,s,f)
     {var ic=caml_call1(openfun,s);
      function _dg_(param){return caml_call1(f,ic)}
      return protect(function(param){return close_noerr$0(ic)},_dg_)}
    function with_open_bin(s,f){return with_open(open_bin$0,s,f)}
    function with_open_text(s,f){return with_open(open_text$0,s,f)}
    function with_open_gen(flags,perm,s,f)
     {return with_open(function(_df_){return open_gen$0(flags,perm,_df_)},s,f)}
    var seek=_m_[4],pos=_m_[5],length$11=_m_[6];
    function input_char$0(ic)
     {try
       {var c=caml_ml_input_char(ic)}
      catch(_de_)
       {_de_ = caml_wrap_exception(_de_);
        if(_de_ === End_of_file)return 0;
        throw _de_}
      return [0,c]}
    function input_byte$0(ic)
     {try
       {var n=caml_ml_input_char(ic)}
      catch(_dd_)
       {_dd_ = caml_wrap_exception(_dd_);
        if(_dd_ === End_of_file)return 0;
        throw _dd_}
      return [0,n]}
    function input_line$0(ic)
     {try
       {var s=input_line(ic)}
      catch(_dc_)
       {_dc_ = caml_wrap_exception(_dc_);
        if(_dc_ === End_of_file)return 0;
        throw _dc_}
      return [0,s]}
    function really_input$0(ic,buf,pos,len)
     {try
       {really_input(ic,buf,pos,len);return _c1_}
      catch(_db_)
       {_db_ = caml_wrap_exception(_db_);
        if(_db_ === End_of_file)return 0;
        throw _db_}}
    function really_input_string$0(ic,len)
     {try
       {var s=really_input_string(ic,len)}
      catch(_da_)
       {_da_ = caml_wrap_exception(_da_);
        if(_da_ === End_of_file)return 0;
        throw _da_}
      return [0,s]}
    function read_upto(ic,buf,ofs,len)
     {var ofs$0=ofs,len$0=len;
      for(;;)
       {if(0 !== len$0)
         {var r=input(ic,buf,ofs$0,len$0);
          if(0 !== r)
           {var
             len$1=len$0 - r | 0,
             ofs$1=ofs$0 + r | 0,
             ofs$0=ofs$1,
             len$0=len$1;
            continue}}
        return ofs$0 - ofs | 0}}
    function ensure(buf,ofs,n)
     {var len=caml_ml_bytes_length(buf);
      if((ofs + n | 0) <= len)return buf;
      var new_len=[0,len];
      for(;;)
       {if(new_len[1] < (ofs + n | 0))
         {new_len[1] = (2 * new_len[1] | 0) + 1 | 0;continue}
        var
         new_len$0=new_len[1],
         new_len$1=
          new_len$0 <= max_string_length
           ?new_len$0
           :ofs < max_string_length
             ?max_string_length
             :failwith(cst_In_channel_input_all_chann),
         new_buf=caml_create_bytes(new_len$1);
        blit(buf,0,new_buf,0,ofs);
        return new_buf}}
    function input_all(ic)
     {var chunk_size=65536;
      try
       {var
         _c8_=caml_ml_pos_in(ic),
         _c9_=caml_ml_channel_size(ic) - _c8_ | 0,
         initial_size=_c9_}
      catch(_c$_)
       {_c$_ = caml_wrap_exception(_c$_);
        if(_c$_[1] !== Sys_error)throw _c$_;
        var initial_size=-1}
      var
       initial_size$0=0 <= initial_size?initial_size:chunk_size,
       initial_size$1=
        initial_size$0 <= max_string_length?initial_size$0:max_string_length,
       buf=caml_create_bytes(initial_size$1),
       nread=read_upto(ic,buf,0,initial_size$1);
      if(nread < initial_size$1)return sub_string(buf,0,nread);
      try
       {var c=caml_ml_input_char(ic)}
      catch(_c__)
       {_c__ = caml_wrap_exception(_c__);
        if(_c__ === End_of_file)return caml_string_of_bytes(buf);
        throw _c__}
      function loop(buf,ofs)
       {var buf$0=buf,ofs$0=ofs;
        for(;;)
         {var
           buf$1=ensure(buf$0,ofs$0,chunk_size),
           rem=caml_ml_bytes_length(buf$1) - ofs$0 | 0,
           r=read_upto(ic,buf$1,ofs$0,rem);
          if(r < rem)return sub_string(buf$1,0,ofs$0 + r | 0);
          var ofs$1=ofs$0 + rem | 0,buf$0=buf$1,ofs$0=ofs$1;
          continue}}
      var buf$0=ensure(buf,nread,65537);
      caml_bytes_set(buf$0,nread,c);
      return loop(buf$0,nread + 1 | 0)}
    var
     Stdlib_In_channel=
      [0,
       stdin,
       open_bin$0,
       open_text$0,
       open_gen$0,
       with_open_bin,
       with_open_text,
       with_open_gen,
       seek,
       pos,
       length$11,
       close$0,
       close_noerr$0,
       input_char$0,
       input_byte$0,
       input_line$0,
       input,
       really_input$0,
       really_input_string$0,
       input_all,
       set_binary_mode];
    caml_register_global(835,Stdlib_In_channel,"Stdlib__In_channel");
    function with_open$0(openfun,s,f)
     {var oc=caml_call1(openfun,s);
      function _c7_(param){return caml_call1(f,oc)}
      return protect(function(param){return close_noerr(oc)},_c7_)}
    function with_open_bin$0(s,f){return with_open$0(open_bin,s,f)}
    function with_open_text$0(s,f){return with_open$0(open_text,s,f)}
    function with_open_gen$0(flags,perm,s,f)
     {return with_open$0(function(_c6_){return open_gen(flags,perm,_c6_)},s,f)}
    var
     seek$0=_m_[1],
     pos$0=_m_[2],
     length$12=_m_[3],
     Stdlib_Out_channel=
      [0,
       stdout,
       stderr,
       open_bin,
       open_text,
       open_gen,
       with_open_bin$0,
       with_open_text$0,
       with_open_gen$0,
       seek$0,
       pos$0,
       length$12,
       close,
       close_noerr,
       flush,
       flush_all,
       output_char,
       output_byte,
       output_string,
       output_bytes,
       output,
       output_substring,
       set_binary_mode$0,
       runtime.caml_ml_set_buffered,
       runtime.caml_ml_is_buffered];
    caml_register_global(836,Stdlib_Out_channel,"Stdlib__Out_channel");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdGRsaWIuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
