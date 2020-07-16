# chat-quack

## ToC

- [chat-quack](#chat-quack)
  - [ToC](#toc)
  - [Build Setup](#build-setup)
  - [Files](#files)
  - [IDs userd in the app](#ids-userd-in-the-app)
  - [Dev Notes](#dev-notes)
    - [Create Nuxt app](#create-nuxt-app)
    - [Firebase Settings (on the website)](#firebase-settings-on-the-website)
    - [Firebase (local)](#firebase-local)
  - [Study Notes on Nuxt.js](#study-notes-on-nuxtjs)
    - [Directory](#directory)
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

### Create Nuxt app

1. `npx create-nuxt-app chat-quack`
2. `cd chat-quack`
3. `npm run dev`

### Firebase Settings (on the website)

1. Create Firebase project
2. Get the SDK snippets at `Project Overview > Project Settings`
1. Create the DB at `Project > Database`
  - Firestore Region: Asia Northeast 1 (Tokyo)


### Firebase (local)

1. `npm install -g firebase-tools` if not installed
2. `firebase login`
3. `firebase init`

## Study Notes on Nuxt.js


### Directory

- pages: equivalent to "views" of Vue-CLI?
- packages.json
- 

## Study Notes on Firebase

