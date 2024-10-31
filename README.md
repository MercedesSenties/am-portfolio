# AM portfolio

## Start the project

- Run `npm install`
- Run `npm run dev`

## Start development ready

- Run `npm build`
- Run `npm run start`

## Deploy to firebase hosting

- You need to have firebase globally installed. For that, run `npm i -g firebase-tools`
- Make sure you're logged in to the acccount where the project is. Run `firebase login`
- You need to start firebase frameworks to deploy a SSR site. Run `firebase experiments:enable webframeworks`
- You need to init firebase hosting. Run `firebase init hosting`
- To test the service is working and see the site as in production, run `firebase emulators:start`
- Deploy to hosting using `firebase deploy`

## Visual Studio Code Extensions

### Important

- Tailwind CSS IntelliSense
- Prettier - Code formatter

### Recommended

- GitLens
