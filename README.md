# Mono DS

# Mono DS Analysis

> I enjoyed digging in your process below are my discussion pointers.

## Scope of Submission:
* Total hours spent: 12.
* code: 9
* analysis, docs and setup: 3
* I submitted only the form view.
* Within the form view i did not do the shipping radio select due time constraints.

## StoryBook Demo
```
npm i
npm run storybook
```

## SCSS Scope
* The focus had two focal points
* Core definitions for the design system
* UI for the form.

### Core Scope
* Creat scope based scalable architecture that can later be segmented into a packgae based mono-repo.
* Creat Tokens and Aliases from the design.
* Add Scss Maps for tokens
* Add Semantic functions
* Add only relevant Utils and helpers.
* Create Spacing systems with helpers,function and mixin.
* One array that Adapts to view port
* Create Basic Typography Classes.
* Create Basis UI
* Custom select
* Button
* Tabs
* Container

## Discussion points:
### Spacing
* Some numbers do not add up or scale correctly and do not follow some common conventions.
* We can see some References for Spacing Scales and discuss it:
* [carbon design system spacing](https://www.carbondesignsystem.com/guidelines/spacing/overview/)
* [polaris by shopify](https://polaris.shopify.com/design/spacing#section-the-spacing-system)

### Typography
* Some gaps from common comventions were identified
* Missing vertical rhythm
* Missing gutters (margin top, bottom)
* Some Typography is missing from some breakpoints
* Scale is not consistent
* We can dig into modular scale and scale types here
* [smashing magazine article](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)
* [Modular sacle](https://utopia.fyi/blog/css-modular-scales/)

### Breakpoints
* The breakpoints that were provided are 'adaptive' and not mobile first or min-width.
* For that reason i stayed within definitions
* I advise concidering some additional techniques and building more robust breakpoints mechanism
* The current solution is meant only for a scaffold.


## Development guidelines:
* I did not hook up any fancy frameworks, utils and so on if i did not need it.
* Since i wanted to set up, document and do proper holistic effort, i trimmed some over the edges due to my time constraints.
* We can review the code and discuss it :)

## Handoff
* Thanks for the great assets and screens.
* It is a big handoff, and I recommend considering some additional techniques than design centered value picking.
* I will be happy to show you some shortcuts using:
* Spreadsheets
* Jsons
* Rapid prototyping
* In Addition to my opinion:
    * Some values were missing
    * Some values are redundant.
    * let's discuss it so i can see if i can convince you from my view :)

## Storybook Submission:
* Form view in under Views
* UI elements are under UI tab
