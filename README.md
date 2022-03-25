# TeamsharesUI

JavaScript package to share frontend UI components, styles, configuration.

## _Setting up_ [Local Development](https://classic.yarnpkg.com/en/docs/cli/link)

Instructions on testing changes to this shared package _within another full Rails app in development_ (e.g. to have OS read your _local_ TeamsharesUI, without having to deploy all changes first).

0. Check this repo out _as a sibling of the primary Rails apps_ (e.g. I use `~/code`): `git clone git@github.com:teamshares/shared-ui.git teamshares-ui` (and then run `yarn` once to install dependencies)

1. CD into **this new directory**, then tell yarn that we want to register it as a local override available for other apps on this computer: `yarn link`

    You should see output including:
    > success Registered "@teamshares/ui".

2. CD into **the Rails app** that you want to use the local version, then configure yarn: `yarn link @teamshares/ui`

    You should see output including:
    > success Using linked package for "@teamshares/ui".

That's it! You're all configured.

## _Doing_ Local Development

Once the steps from above have been completed, to actually make changes you'll want to:

0. **In the Rails app** (e.g. `OS`): Start the Rails server and whatever script needs to be running to compile assets (`bin/webpack-dev-server` in older apps, probably something like `yarn build --watch` and `yarn build:css --watch` for Rails 7+). However you do it, make sure you're compiling _both_ JS and CSS.

1. **In this directory**: Start the compilation script with `yarn compile:watch`

2. Now make a change in this repo and it should show up immediately on the next page refresh from the consuming app (e.g. OS).

### Cleanup

When you're done doing local development you _can_ undo this config:

0. From _within this directory_: `yarn unlink`

1. From _within the linked Rails app_: `yarn unlink @teamshares/ui` and then `yarn install --force` to re-installed the previously-linked package from remote instead
