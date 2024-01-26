<div align="center">

<img src="./static/project-home.png" width="425" />

# WIP - Clone Die Zeit Verlagsgruppe

Done for educational purposes. Deploy [here](https://zeit-online.vercel.app/)

</div>

<div align="center">

![Svelte Badge](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-black?style=flat&logo=Vercel&logoColor=white)

</div>

## Features

- 🛠️ Rebuilt of the home page using Sveltekit
- 🎨 Clean code using TailwindCSS (No UI Libraries)
- 🔄 Fetching RSS from Die Zeit on a daily basis
- 🔤 100% written in TypeScript

## To Do List

- [ ] Create a function that will get me the RSS Feed from Die Zeit: https://newsfeed.zeit.de/index
- [ ] Bring this data in a more readable format (JSON?) to the client.
- [ ] Do a cron job using vercel to run this function on a daily basis (https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel)
