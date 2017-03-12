# home-stream

![home-stream preview](https://zac.codes/img/other/home-stream_preview.png)

A coding challenge to display a stream of home listings using the SimplyRETS API, React, Firebase, and localStorage.

## Usage
```
git clone https://github.com/zacarellano/home-stream.git
cd home-stream
yarn
yarn start
```

then --> [localhost:3000](http://localhost:3000)

## Overview

This is what happens on initial page load.

1. `<AppContainer />` checks `localStorage` for a `userId` property, if it doesn't find one, it creates a 9-digit random integer, and has 1 state property—

    - `userId` (integer)


2. `<AppContainer />` passes along its' state to `<StreamContainer />` who uses the [axios](https://github.com/mzabriskie/axios) promise-based HTTP package to fetch the simpleRETS API listings. `<StreamContainer />` has 3 state properties—
    - `listings` (array)

    - `isLoading` (boolean)

    - `isError` (boolean)

3. `isLoading` state is initially set to `true` and renders `<Loading />` component.

4. Once axios returns a promise, `isLoading` is set to `false`. If the promise is successful, `listings` array is filled with data, if not, `isError` is set to `true` and will render `<Error />` component.

5. `<StreamContainer />` passes `listings` array to `<Stream />` presentational component, who maps over the array and returns a `<HomeListing />` functional container for each listing.

6. `<HomeContainer />` is the final stateful container in this project. It is comprised of 2 state properties—

    - `isSaved` (boolean)

    - `photo` (integer)

7. The `photo` state will pick a random number `0` or `1` and use that number for the listing image (simpleRETS API returns an array of 2 images). `<HomeContainer />` will check Firebase (https://home-stream.firebaseio.com) and see if the listing id is saved, will update its' state appropriately.

8. The last step in this process is creating a `saveListing()` function in `<HomeContainer />` and passing that along to a `<Save />` component. The `<Save />` is just a simple button that will display a `<Save />` or `<Check />` Google Material icon depending on its' `isSaved` state.

9. Finally, `<HomeContainer />` passes along all its' listing information to a `<Home />` presentational component who displays the data and makes it look nice.


## Packages

- [create-react-app](https://github.com/facebookincubator/create-react-app) - this project was bootstrapped using Facebook's create-react-app

- [axios](https://github.com/mzabriskie/axios) - promise-based HTTP client

- [firebase](https://github.com/firebase/) - to interact with Google Firebase data

- [react-icons](https://github.com/gorangajic/react-icons) - for grabbing the 2 Google Material Icons

- [velocity-react](https://github.com/twitter-fabric/velocity-react) - used Twitter's React animation library for the simple animation between `isSaved` states

- [gh-pages](https://github.com/tschaub/gh-pages) - for very easy deployment to github pages https://zacarellano.github.io/home-stream


## Firebase

This is how the Firebase database is set up.

- home-stream/

  - users/ - (saved users)

    - 11081799/ - (9-digit random integer)

      - homes/ - (saved homes)

        - 1005242/ - (mld id integer)

          - address/

          - agent/

          - geo/

           - photos/

           - etc../ - (all the listing information)

    - 313120421/

    - 257400343/

    - 814608816/
