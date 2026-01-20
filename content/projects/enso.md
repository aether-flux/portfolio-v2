An experimental database written in Rust, focused on learning storage engines, persistence, and query execution.

# The Reason
I was wondering one day that how databases actually worked, and thought "why not just make one?". And then I started building EnsoDB to explore database internals, storage mechanisms, indexing data, exploring thread-safe practices.

# What It Does
- Implements a persistent data store with tables and databases
- Supports basic CRUD operations with a query language supporting CREATE TABLE, INSERT, SELECT, DELETE
- Provides a CLI interface, along with a TCP client for future client SDKs (currently only Rust SDK available)

# Technical Design
- Written in Rust for memory safety and performance
- Uses a log-structured model for storage layer
- Supports background compaction and segmentation

# Challenges
- Designing segmentation and compaction without corrupting data
- Trade-offs between simplicty and efficiency

# Links
## GitHub
- [Core repository](https://github.com/aether-flux/ensodb)
- [Rust SDK](https://github.com/aether-flux/enso-client)
## Crates.io
- [Core EnsoDB crate](https://crates.io/crates/enso)
- [EnsoDB Rust SDK](https://crates.io/crates/enso-client)

# Images
## EnsoDB CLI
![EnsoDB CLI 1](/projects/enso/enso1.png)
![EnsoDB CLI 2](/projects/enso/enso2.png)
## Rust Client SDK
![EnsoDB Rust Client](/projects/enso/enso3.png)
