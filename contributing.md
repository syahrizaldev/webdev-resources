# Contributing Guidelines

Please make sure your pull request adheres to the following guidelines:

- Search previous suggestions before making a new one, as yours may be duplicated.
- Additions should be added to the bottom of the relevant category.
- Make an individual pull request for each suggestion for easier review.
- Pull request title should be in the following format:
   - `add [resource name] to [resource category]`
   - `add netlify to hosting`
   - `add strapi to headless cms`
- Provide a link to the submitted suggestion in the pull request comment with following format:
   - `[resource name]: [resource link]`
   - `netlify: https://netlify.com`
   - `strapi: https://strapi.io`
- Keep descriptions short and simple, but descriptive.
   - The description should start with a capital.
   - The description should not be a title case.
   - The description should not repeat the item title.
   - The description should not be a marketing tagline.
- Make sure your editor is set to remove trailing whitespace.
- Double-check if the suggestion is truly free, freemium, or has free tiers.
- Thank you for your contributions and have a nice day.

## How to Contribute to This Project

- Fork this repository.
- Clone this repository to your local machine.
   ```bash
   git clone <forked repository address>
   ```
- Create an upstream.
   ```bash
   git remote add upstream <original repository address>
   ```
- Install the packages.
   ```bash
   pnpm install
   ```
- Create a new branch.
   ```bash
   git checkout -b <new branch-name>
   ```
- Make your changes or contributions.
- Add and commit your contributions.
   ```bash
   git add .
   git commit -m 'commit message'
   ```
- Pull from upstream to the branch.
   ```bash
   git pull upstream <new branch-name>
   ```
- Push to the branch you are working on.
   ```bash
   git push -u origin <new branch-name>
   ```
- Open for a pull request.
- Finish and congratulations.

## Updating Your Pull Request

Making a pull request to adhere to the standards above can be difficult.
If the maintainers notice anything that we would like changed due to spelling errors
or because your pull request did not match the guidelines, we will ask you to edit
your pull request before we merge it.
