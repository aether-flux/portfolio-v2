Cues is a task and project management platform built for devs. It comes with a CLI to manage your tasks efficiently from your home turf (terminal), while also providing a web UI for those who prefer that.

# The Reason
I always liked Linear and wanted to use a platform like that to track my projects and tasks efficiently and keep track of my progress and upcoming plans. However, I found there was too much friction since I needed to switch from my terminal, go to my browser, and open the dashboard, just to mark a task done or create a new one. So I thought, "what if I make a CLI for managing tasks and projects which are synced with a web version?". And that's how Cues was born.

# What It Does
- A CLI with all the commands to manage your tasks and projects (visit the [CLI repo](https://github.com/aether-flux/cues-cli) for more info)
- A web interface with a pleasant UI for managing your tasks visually
- All tasks being automatically synced, ensuring no discrepancies between your local and website tasks

# Technical Design
- Rust for building a fast and pleasant-to-use CLI
- Uses keyrings for storing authentication details locally when using the CLI
- Next.js for designing and building the frontend
- [Rensa](./rensa) (my own framework 👀) for writing an efficient backend

# Challenges
- Making authentication work across Web and CLI
- Keeping the CLI fast and pleasant to use

# Links
## GitHub
- [Frontend Repo](https://github.com/aether-flux/cues-web)
- [Backend Repo](https://github.com/aether-flux/cues-backend)
- [CLI Repo](https://github.com/aether-flux/cues-cli)

# Images
![Cues-1](/projects/cues/cues1.png)
![Cues-2](/projects/cues/cues2.png)
![Cues-3](/projects/cues/cues3.png)
