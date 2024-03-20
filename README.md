# WatchListify

This is a Next.js project for a watchlist website redesign called WatchListify. 

## Overview

Key features:

- User authentication with NextAuth.js
- Watchlist management
- Search anime and dramas  
- View anime and drama details
- Play anime and drama videos
- MongoDB database with Mongoose models
- Tailwind CSS for styling

## Usage 

### Environment Variables

Create a `.env.local` file with the following:



APP_URL=
API_URL=
NEXT_PUBLIC_API_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_APP_URL=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGO_USER=
MONGO_PASSWORD=
MONGO_CLUSTER=
MONGO_DATABASE=
NEXT_PUBLIC_GOOGLE_ID=


### Install Dependencies



npm install


### Run Development Server 



npm run dev


### Build for Production



npm run buildnpm run start


## File Structure

- `pages/api` - API routes
- `pages` - Page components
- `components` - Reusable components
- `models` - Mongoose models
- `states` - Global states (Zustand)
- `utils` - Utility functions  
- `lib` - Shared library code
- `styles` - Global styles
- `config.ts` - Configuration/env variables
- `middleware.ts` - Auth middleware

## Built With

- [Next.js](https://nextjs.org/) - React Framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [Zustand](https://github.com/pmndrs/zustand) - State Management

## License

This project is open source and available under the [MIT License](LICENSE).