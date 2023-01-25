window.SIDEBAR_ITEMS = {"constant":[["MODULE_GLOBAL_PREFIX",""]],"enum":[["AutocommitError","Error returned when the autocommit function fails"],["DecodingError",""],["TestDbKeyPrefix",""]],"fn":[["decode_value",""],["expect_write_conflict",""],["verify_commit",""],["verify_find_by_prefix",""],["verify_insert_elements",""],["verify_module_db",""],["verify_module_prefix",""],["verify_phantom_entry",""],["verify_prevent_dirty_reads",""],["verify_prevent_nonrepeatable_reads",""],["verify_read_own_writes",""],["verify_remove_by_prefix",""],["verify_remove_existing",""],["verify_remove_nonexisting",""],["verify_rollback_to_savepoint",""],["verify_string_prefix",""]],"mod":[["mem_impl",""],["tests",""]],"struct":[["CommitTracker","A handle to a type-erased database implementation"],["Database",""],["DatabaseInner",""],["DatabaseTransaction","A handle to a type-erased database implementation"],["IsolatedDatabaseTransaction","IsolatedDatabaseTransaction is a wrapper around DatabaseTransaction that is responsible for inserting and striping prefixes before reading or writing to the database. It does this by implementing IDatabaseTransaction and manipulating the prefix bytes in the raw insert/get functions. This is done to isolate modules/module instances from each other inside the database, which allows the same module to be instantiated twice or two different modules to use the same key."],["ModuleDatabaseTransaction","`ModuleDatabaseTransaction` is an isolated database transaction that consumes an existing `DatabaseTransaction`. Unlike `IsolatedDatabaseTransaction`, `ModuleDatabaseTransaction` can be owned by the module as long as it has a handle to the isolated `Database`. This allows the module to make changes only affecting it’s own portion of the database and also being able to commit those changes. From the module’s perspective, the `Database` is isolated and calling `begin_transaction` will always produce a `ModuleDatabaseTransaction`, which is isolated from other modules by prepending a prefix to each key."]],"trait":[["DatabaseKey",""],["DatabaseKeyPrefix",""],["DatabaseKeyPrefixConst",""],["DatabaseValue",""],["IDatabase",""],["IDatabaseTransaction","Fedimint requires that the database implementation implement Snapshot Isolation. Snapshot Isolation is a database isolation level that guarantees consistent reads from the time that the snapshot was created (at transaction creation time). Transactions with Snapshot Isolation level will only commit if there has been no write to the modified keys since the snapshot (i.e. write-write conflicts are prevented)."],["SerializableDatabaseValue",""]],"type":[["PrefixIter",""]]};