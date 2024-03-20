# WatchListify

Watch anime and drama online for free. 

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

Create a copy of `.env.example` file.


### Install Dependencies


```bash
npm install
```

### Run Development Server 


```bash
npm run dev
```

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
- [Consumet](https://github.com/consumet/api.consumet.org) - Anime and Drama API's
  
## License

This project is open source and available under the [MIT License](LICENSE).
