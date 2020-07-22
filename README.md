# chat-quack

## ToC

- [chat-quack](#chat-quack)
  - [ToC](#toc)
  - [Build Setup](#build-setup)
  - [Files](#files)
  - [IDs userd in the app](#ids-userd-in-the-app)
  - [Dev Notes](#dev-notes)
    - [Nuxt.js: Create app](#nuxtjs-create-app)
    - [Firebase: set up the project & hosting](#firebase-set-up-the-project--hosting)
    - [Firestore Setup](#firestore-setup)
- [Study Notes on Firestore](#study-notes-on-firestore)
  - [Data Hierarchy](#data-hierarchy)
  - [CRUD](#crud)
- [Study Notes on Nuxt.js](#study-notes-on-nuxtjs)
  - [Dir](#dir)
  - [Routing](#routing)
    - [Basic Routes](#basic-routes)
    - [Dynamic Routes](#dynamic-routes)
    - [Nested Routes](#nested-routes)
    - [Nested Dynamic Routes](#nested-dynamic-routes)
    - [Named Views](#named-views)
  - [Views: Layouts & Pages](#views-layouts--pages)
  - [Vuex State](#vuex-state)
  - [Context](#context)
  - [Async Data](#async-data)
- [Study Notes on Firebase](#study-notes-on-firebase)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Files

- `default.vue`: Base with header & both side bars.
  - `_id.vue`: Dynamic routes. Wrapper for channel-specific contents.
    - `Message.vue`: Show the messages for the specified channel.
    - `Editor.vue`: Message editor on the page bottom.

## IDs userd in the app

- `User ID`: User IDs are used in the following cases:
  - `sender ID`: Who sent the message
  - `recipient ID`: Who got the message. This value will be `null` for group chats
  - `viewer ID`: Who is viewing the app
- `Channel ID`
  - Every channel is either of personal chat / group chat
  - Channel ID is used for Nuxt dynamic routing
- `Message ID`
  - Every message has the unique integer ID

## Dev Notes

### Nuxt.js: Create app

1. `npx create-nuxt-app chat-quack`
2. `cd chat-quack`
3. `npm run dev`
4. ~~`npm i -S nuxt`~~ (perhaps necessary)
5. Add `generate` command to the `package.json`
    - `"generate": "nuxt build && nuxt export"`
6. `npm run generate` to generate the static app files to `dist/`

### Firebase: set up the project & hosting

1. Create the project on the Firebase website
1. `npm install -g firebase-tools`
   - Firebase CLI
4. `firebase login`
5. `firebase init`
   - Do this at the Nuxt.js dir root
   - Enable `Hosting`, `Firestore`
   - Choose `Use an existing project`, then specify the project you created on the Firebase console
   - Choose `dist` dir instead of default `public`
   - Choose default `firestore.rules`
   - Choose default `firestore.indexes.json`
   - Choose not to use `single-page app` to choose SSR
   - Choose not to overwrite existing `index.html`
6. `firebase deploy`, then check if deployment is successful
   - URL: https://vue-auth-test-ff8ed.web.app

### Firestore Setup

1. `npm install -S firebase` (Alternatively, you can use CDN)
   - Firebase SDK for Node.js client required when the app access the Firestore, RTDB, storage, etc.
1. Create the DB at `Project > Database` on the website console
   - Firestore Region: Asia Northeast 1 (Tokyo)
   - Enabled `write` and `read` for everybody
1. Get the SDK snippets at `Project Overview > Project Settings`
1. Create `plugins/firebase.js`
   - Paste the snippets here
   - Optional: you can use `Vuefire` for handy syntax to access to Firebase. In that case you need `Vue.use(VueFire)`
1. Include the plugin with `nuxt.config.js`
1. Write the Firebase methods in the Vuex / Vue file

```js
// plugins/firebase.js
import firebase from 'firebase'
const app = firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
})
export const storage = app.storage()
export const db = app.firestore() 
export default app
```

# Study Notes on Firestore

## Data Hierarchy

- `database` > `collections` > (`subcollections`, if any) > `documents` > `data`

## CRUD

```js

/* CREATE */
// You don't have to create the collection (here "users") explicitly;
// it will be created when the first document is added
cdb.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

/* READ */
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
```

# Study Notes on Nuxt.js

## Dir

- pages
  - equivalent to "views" dir of Vue-CLI, maybe
- `assets/` Uncompiled Stylus, SASS, images, fonts
- `components/` Files inside this dir can't access to `asyncData`
- `layouts/`
- `middleware/`
- `pages/`
  - Like `src/views` of Vue-CLI
- `plugins/`
- `static/`
  - Relative paths to the files inside this dir will be mapped to the root
- `store/`
- `packages.json`
- `nuxt.config.js`
  - Configuration

## Routing

```html
<nuxt-link to="/">Home page</nuxt-link>
```

### Basic Routes

### Dynamic Routes

- Name starts with underscore; e.g. `_id.vue`
- Route strings can be validated

### Nested Routes

- Define route by putting the files in the appropriate structure

- `pages/`

  - `users/` container of child views; Name of this directory must be same as the parent view file "users.vue"
    - `_id.vue` child view
    - `index.vue` child view
  - `users.vue` parent view

- Use `<nuxt-child>` in the parent Vue component

### Nested Dynamic Routes

### Named Views

- When the multiple `<nuxt>` tag must be used in a page
- Specify which components to be inserted to `<nuxt name="blahblah">`, specify them in `nuxt.config.js`
-

## Views: Layouts & Pages

- Simplest layout

```html
<template>
  <nuxt />
</template>
```

## Vuex State

- `fetch`

## Context

- Context is the object/params passed from the Nuxt to the Vue instance
- Context is available at any lifetime; it's available even in `asyncData`

## Async Data

- `asyncData` is used for processes before the rendering of Vue components

# Study Notes on Firebase
