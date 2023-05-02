# This is how to solve those task

## Making Node.js Project

In your main folder (I assume you're using Ubuntu) > Open in Terminal and run :

```
npm init --y
```

Edit package.JSON, becoming this :

```
 {
 "name": "submission",
  ...
  "scripts": {
    "start": "node src/server.js",
  }
}
```

Make Folder <b>src</b> > create new file <b>server.js</b>.

Open <b>server.js</b> ini IDE write this to make submission run on port 9000 :

```
"use strict";
"use strict;";
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();



```

<i> We'll edit it later, but keep it.</i>

<b>Task criteria 1 & 2 finished</b>

## Create API Which Can Store Books

```
npm install @hapi/hapi
npm install nodemon --save-dev
npm install nanoid@3.x.x
```

this project have structure like this :

```
notes-app-back-end
├── node_modules
├── src
│ ├── handler.js
│ ├── notes.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.json
├── package-lock.json
└── package.json
```
