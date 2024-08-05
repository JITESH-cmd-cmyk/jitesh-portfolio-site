const path = require('path')
 
//  module.exports = {  
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//     ],
//   },
//  }

//  @type {import('next').NextConfig}



// TO build application's static version (html, css, js) comment the above, and uncomment the nextConfig object only. and run command "npm run build" it generates out folder containing static files and dependencies.

const nextConfig = {
 output: 'export',
}
 
// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
 // trailingSlash: true,

 // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
 // skipTrailingSlashRedirect: true,

 // Optional: Change the output directory `out` -> `dist`
 // distDir: 'dist',


module.exports = nextConfig