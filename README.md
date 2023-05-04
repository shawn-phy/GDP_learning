# GDP_learning
a repo for all my learning on google developer profile 
This repo uses git submodules so various learning paths are hosted on their own repos within this main repo. 
## firestore leaderboard 
this is a very simple introduction to using leaderboards with firestore 

### Introduction 
At their core, leaderboards are just tables of scores with one complicating factor: reading a rank for any given score requires knowledge of all the other scores in some kind of order.
Also, if your game takes off, your leaderboards will grow large and be read from and written to frequently. 
To build a successful leaderboard, it needs to be able to handle this ranking operation quickly.

### what you will need 
- A recent version of Chrome (107 or later)
- Node.js 16 or higher (run nvm --version to see your version number if you're using nvm)
- A paid Firebase Blaze plan (optional)
- The Firebase CLI v11.16.0 or higher
use the following command to install it 
``` shell
npm install -g firebase-tools
```

- Knowledge of JavaScript, Cloud Firestore, Cloud Functions, and Chrome DevTools
