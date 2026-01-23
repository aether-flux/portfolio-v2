A configuration framework for Rust with schema validation, sample generation, and documentation support.

# The Reason
Config management in Rust was traditionally verbose: you define custom structs, parse files with Serde, and manually validate every field. I wanted a tool that makes **defining, validating, and documenting config schemas ergonomic** without sacrificing performance or type safety — especially for CLI tools, servers, and backend services. Profig was my attempt to explore *procedural macros* and metadata-driven design in Rust.

# What It Does
Profig lets you define configuration schemas using `#[derive(Profig)]` and enrich fields with metadata like validation rules, defaults, and documentation. It can:
- Load config from TOML, JSON, or YAML automatically based on file extension
- Validate values against constraints like maximum and minimum
- Generate sample config files using schema
- Produce documentation from the metadata in the struct definition

# Technical Design
Here's a minimal example of how a config struct is defined:
```rust
use profig::Profig;

#[derive(Profig)]
#[profig(format="toml, json")]
struct AppConfig {
    #[profig(min="4", max="10", doc="Number of worker threads")]
    threads: usize,

    #[profig(doc="Path to output directory")]
    output_dir: String,

    #[profig(default="false", doc="Enable debug mode")]
    debug: Option<bool>,
}
```

Then loading is as simple as:
```rust
let config = AppConfig::load("config.toml")?;
println!("Threads: {}", config.threads);
```

This design leverages Rust's procedural macros to automatically generate parsing, validation, and documentation logic from the struct definition.

# Challenges and Learnings
- Exploring procedural macros beefed up my understanding of compile-time code generation.
- Balancing ergonomic API design with strict validation rules was an interesting trade-off.
- Building support for multiple formats (TOML/JSON/YAML) clarified how feature flags can shape flexible dependency graphs.

# Usage
Profig is published on crates.io and can be added to your project using:
```bash
cargo add profig --features "toml,json,yaml"
```

# Links
- [GitHub Repo](https://github.com/aether-flux/profig)
- [Crates.io](https://crates.io/crates/profig)

# Images
![Profig-1](/projects/profig/profig1.png)
![Profig-2](/projects/profig/profig2.png)
![Profig-3](/projects/profig/profig3.png)
