# Segment Managed Component

Find out more about Managed Components [here](https://blog.cloudflare.com/zaraz-open-source-managed-components-and-webcm/) for inspiration and motivation details.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Released under the Apache license.](https://img.shields.io/badge/license-apache-blue.svg)](./LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 🚀 Quickstart local dev environment

1. Make sure you're running node version >=18.
2. Install dependencies with `npm i`
3. Run unit test watcher with `npm run test:dev`

## ⚙️ Tool Settings

> Settings are used to configure the tool in a Component Manager config file

### Segment Source Write Key `string` _required_

`writeKey` - You need to create an HTTP API source, and enter the Write Key here. [Learn more](https://segment.com/docs/connections/find-writekey/)

### Type `string` _required_

`callType` - Options are:

- Page - Record page views on your website
- Track - Record the actions your users perform
- Identify - Tie a user to their actions
- Alias - Associate one identity with another identity
- Group - Associate an individual user with a group

## 🧱 Fields Description

### Event Name `string` _required_

`event` - Name of the action that a user has performed. See the [Event field docs](https://segment.com/docs/connections/spec/track#event) for more details.

### Page Name `string`

`name` - Name of the page. For example, most sites have a "Signup" page that can be useful to tag, so you can see users as they move through your funnel.

### Anonymous ID `string`

`anonymousId` - A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. See the [Identities docs](https://segment.com/docs/connections/spec/identify#identities) for more details.

### User ID `string`

`userId` - Unique identifier for the user in your database. See the [Identities docs](https://segment.com/docs/connections/spec/identify#identities) for more details.

### Previous ID `string`

`previousId` - The existing ID you’ve referred to the user by. It might be an Anonymous ID assigned to that user or a User ID you previously identified them with.

## 📝 License

Licensed under the [Apache License](./LICENSE).

## 💜 Thanks

Thanks to everyone contributing in any manner for this repo and to everyone working on Open Source in general.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/simonabadoiu"><img src="https://avatars.githubusercontent.com/u/1610123?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Simona Badoiu</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/segment/commits?author=simonabadoiu" title="Code">💻</a></td>
    <td align="center"><a href="https://yoavmoshe.com/about"><img src="https://avatars.githubusercontent.com/u/55081?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Yo'av Moshe</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/segment/commits?author=bjesus" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jonnyparris"><img src="https://avatars.githubusercontent.com/u/6400000?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Ruskin</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/segment/commits?author=jonnyparris" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tomkln"><img src="https://avatars.githubusercontent.com/u/21014430?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Tom</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/segment/commits?author=tomkln" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
