# My Azure Site

A simple Node.js + Express website, deployed to **Azure App Service** from **GitHub** using GitHub Actions.

## Project structure

```
my-azure-site/
├── package.json      # app info + "start" script
├── server.js         # Express server (listens on process.env.PORT)
├── .gitignore
└── public/
    ├── index.html    # home page
    └── style.css     # styles
```

## Run locally (optional)

```bash
npm install
npm start
```

Open http://localhost:3000

## Azure App Service settings

| Setting | Value |
|---|---|
| Publish | Code |
| Runtime stack | Node 20 LTS (or newer) |
| Operating System | Linux |
| Region | Central India |
| Pricing plan | Free F1 |
| Continuous deployment | Enable → GitHub → this repo → main |

## Health check

`https://<your-app>.azurewebsites.net/health` returns `{"status":"ok"}`.
