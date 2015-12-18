initSidebarItems({"constant":[["DEBUG","A flag to turn on and off debugging output"]],"fn":[["free","Deallocates the memory referenced by `ptr`."],["get_block_stats","Helper method to compute stats"],["init","Initialize the kernel heap"],["malloc","Return a pointer to `size` bytes of memory aligned to `align`."],["print_stats","Prints implementation-defined allocator statistics."],["round_to_block_align","Round up to the nearest multiple of `BLOCK_ALIGN`"],["round_to_n","Round the size to `n`. `n` must be a power of 2"],["usable_size","Returns the usable size of an allocation created with the specified the `size` and `align`."]],"static":[["BLOCK_ALIGN","A const representing the minimum alignment of any block. It is effectively a const, but it has to be initialized at startup because `size_of` is non-const."],["END","The end address of the kernel heap. That is, the first address that is not in the heap."],["FAIL_MALLOCS","The number of unsuccessful mallocs (for stats purposes)"],["FREES","The number of successful frees (for stats purposes)"],["START","The start address of the kernel heap"],["SUCC_MALLOCS","The number of successful mallocs (for stats purposes)"],["free_list","A pointer to the first free heap block"]],"struct":[["Block","A struct representing a heap block."]]});