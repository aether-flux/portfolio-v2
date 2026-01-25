Rensa is a powerful yet lightweight backend framework designed for developers who value speed and simplicity.

# The Reason
One day while working on a backend server, I was wondering how a backend framework actually sets up routes and starts the server. As a result, I decided to dive deep by building a backend framework myself from the ground up.

# What It Does
- File-based routing (**Compose Mode**)
- Structured Layers (middleware)
- Built-in Layers/middlewares
- Rensa CLI (**rensa dev**, **rensa routes** and more)
- Flexible configuration via **rensa.config.js**
- Custom 404 handler support
- Support for view engine (ejs)

# Technical Design
- Rust-powered routing system
- Routing engine uses a trie + hashmap system for efficient routing ([learn more here](https://dev.to/aetherflux/the-hidden-complexity-of-routing-why-your-requests-take-longer-than-they-should-5bbf))
- A config file **rensa.config.js** which is detected automatically when running the CLI
- Uses Node.js's **http** module for starting the server
- **Compose mode** automatically sets up routes by scanning the folder structure
- CLI can scaffold a new project and a template config file, create new routes, and start the server while watching for changes

# Links
## Website
- [Website](https://rensa.vercel.app)
- [Documentation](https://rensa.vercel.app/docs/what-is-rensa)

## GitHub
- [Rensa](https://github.com/aether-flux/rensa)
- [Rensa CLI](https://github.com/aether-flux/rensa-cli)

## Packages
- [NPM](https://npmjs.com/package/rensa)

# Images
![Image 1](/projects/rensa/landing.png)
![Image 2](/projects/rensa/f1.png)
![Image 3](/projects/rensa/f2.png)
