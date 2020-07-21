# chat-quack

## ToC

- [chat-quack](#chat-quack)
  - [ToC](#toc)
  - [Build Setup](#build-setup)
  - [Files](#files)
  - [IDs userd in the app](#ids-userd-in-the-app)
  - [Dev Notes](#dev-notes)
    - [Nuxt.js: Create app](#nuxtjs-create-app)
    - [Nuxt.js: Generate static file](#nuxtjs-generate-static-file)
    - [Firebase: On the website](#firebase-on-the-website)
    - [Firebase: local](#firebase-local)
- [Study Notes on Nuxt.js](#study-notes-on-nuxtjs)
  - [Directory](#directory)
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

### Nuxt.js: Generate static file

1. Change Nuxt file generation destination in `nuxt.config.js`
2. `npm run generate`

### Firebase: On the website

1. Create Firebase project
2. Get the SDK snippets at `Project Overview > Project Settings`
3. Create the DB at `Project > Database`
   - Firestore Region: Asia Northeast 1 (Tokyo)

### Firebase: local

1. `npm install -g firebase-tools` if not installed
2. `firebase login`
3. `firebase init`
   - Do this at the Nuxt.js dir root
   - Enable `Hosting`, `Firestore`
   - Choose `Use an existing project`
   - Choose SSR over SPA
   - Choose not to overwrite existing `index.html`
4. `firebase deploy`

# Study Notes on Nuxt.js

## Directory

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
