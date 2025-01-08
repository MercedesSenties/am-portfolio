# AM portfolio

## Start the project

- Run `npm install`
- Run `npm run dev`

## Start development ready

- Run `npm run build`
- Run `npm run start`

## Deploy to firebase hosting

- You need to have firebase globally installed. For that, run `npm i -g firebase-tools`
- Make sure you're logged in to the acccount where the project is. Run `firebase login`
- You need to start firebase frameworks to deploy a SSR site. Run `firebase experiments:enable webframeworks`
- You need to init firebase hosting. Run `firebase init hosting`
- To test the service is working and see the site as in production, run `firebase emulators:start`
- Deploy to hosting using `firebase deploy`

## Add new projects

- Add the images in the folder "public/images/projects". Name them "projectName-1.png", "projectName-2.png", etc.
- Add the texts in the 3 languages. You can add them in the files common.json under public/locales/es, public/locales/en and public/locales/it
- Add the project in the file src/data/projectsData.ts

## Visual Studio Code Extensions

### Important

- Tailwind CSS IntelliSense
- Prettier - Code formatter

### Recommended

- GitLens
