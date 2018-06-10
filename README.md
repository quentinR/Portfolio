[![Build Status](https://travis-ci.com/quentinR/Portfolio.svg?token=kdZDptTz5h7MyjbGEvjz&branch=master)](https://travis-ci.com/quentinR/Portfolio)

# Portfolio
Personal Quentin Ribierre's portfolio website -> [quentinribierre.com](https://quentinribierre.com/)

#### Developer Notes
*Static website built with [Gatsby](https://www.gatsbyjs.org/).*
##### Development
Run `npm install && npm run dev` for development.

##### Production
Run `npm install && npm run build` to build the production static website in the `./public` folder.

You can run `npm run serve` to locally test the static website just built, or simply `open ./public/index.html`.

##### Deployment
Any branch merge into `master` will be deployed to Firebase with [Travis CI](./.travis) and will then be available at [quentinribierre.com](https://quentinribierre.com/).

*Note: Code can be merged on `master` only with a pull request, and pull requests cannot be merged without Quentin Ribierre's approval.*