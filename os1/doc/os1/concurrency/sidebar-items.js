initSidebarItems({"mod":[["barrier","A module containing a barrier implementation"],["event","A module containing an event implementation"],["semaphore","A semaphore implementation based on the rust Mutex<T> type"]],"struct":[["Barrier","A Barrier implementation."],["Event","An Event data structure."],["Semaphore","`Semaphore` is a much more Rustic semaphore. It returns an RAII `SemaphoreGuard`, which automatically calls \"up\" when it goes out of scope. This semaphore takes ownership of the data it is guarding, so that Rust ownership and lifetime semantics can be used to guarantee safety of the resource."],["SemaphoreGuard","RAII SemaphoreGuard"],["StaticSemaphore","`StaticSemaphore` is a semaphore implementation that can be used in statics. It has a const constructor."]]});