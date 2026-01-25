Decide is a local-first and scriptable permission engine built in Rust available to use in both Rust (crates.io) and JS/TS (NPM).

# The Reason
I was wondering about role-based and attribute-based access controls and how big systems managed permissions. While exploring these, I decided to dive deeper by building a small lightweight permission engine myself.

# What It Does
- Define different roles with their permissions in a simple JSON through conditions like "user_id == resource_owner"
- Provides a simple API for determining if a user (with specified roles) has permissions to access a resource
- Supports dynamic expressions and custom roles (through the JSON config)

## Example (JS/TS)
```js
import { Decide } from "decide-core/core";

const decide = new Decide({
  editor: {
    name: "editor",
    permissions: [
      { action: "edit_post", condition: "user_id == resource_owner" }
    ]
  }
});

const canEdit = decide.can({
    id: "123",
    roles: ["editor"]
}, "edit_post", {
    owner_id: "123",
    resource_name: "post-123",
    resource_type: "post"
});

console.log(canEdit);  // true
```

## Example (Rust)
```rust
use decide_core::types::*;
use decide_core::evaluator::Decide;

fn main() {
    let user = User {
        id: "123".to_string(),
        roles: vec!["editor".to_string()]
    };

    let resource = Resource {
        owner_id: "123".to_string(),
        resource_name: "post-123".to_string(),
        resource_type: "post".to_string()
    };

    let decide = Decide::default().unwrap();
    let result = match decide.can(&user, "edit_post", &resource) {
        Ok(res) => res,
        Err(_) => false,
    };

    println!("Can edit: {}", result);  // true
}
```

# Technical Design
- Written in Rust, and exposed to JS using **napi-rs**
- Dynamic expressions are powered by **Rhai**, a Rust crate

# Challenges
- Writing code efficiently such that core logic and napi-rs abstraction are separate

# Links
## GitHub
- [GitHub Repo](https://github.com/aether-flux/decide)

## Packages
- [Crates.io](https://crates.io/crates/decide-core)
- [NPM](https://npmjs.com/package/decide-core)

# Images
JavaScript:
![Javascript code](/projects/decide/decide-js.jpeg)

Rust:
![Rust code](/projects/decide/decide-rs.jpeg)

JSON (role definitions):
![JSON role definitions](/projects/decide/decide-jsondata.jpeg)
