# PaYou

Payment dashboard application for a fictional company. My solution to the Scello Front-end Developer Assessment Task.

## Project Requirements

 - The user interface is an admin data table containing users of a paid service. Users can have payment status of “paid”, “unpaid”, or “overdue”. This interface will be used by the administrator of the service; below is the user story.

 - As the admin, I will want to see the total payable amount on the table head as the sum of user amounts that are either unpaid or overdue.
 - There are tabs All, Paid, Unpaid, and Overdue corresponding with user payment status. Users under the “Paid” tab should be those with status “ Paid” , same applies to “ Unpaid” and “Overdue” , with “All” containing all users regardless of their payment status.
 - The datatable should be searchable using the search input on top of the table; the search should be done client side only.
 - Each row of users should be expandable to show details of the user.
 - As the admin, I would like to sort the table of users according to the users’ first name, last name, and email.
 - As the admin, I would like to select a user row previously marked as unpaid and mark it as paid by checking the checkbox on the row and clicking the pay dues button on the top right of the table. NB: this service is provided by the api endpoint labelled ‘mark-paid’.

NB: The stories above are what you will be expected to implement with the help of the UI/UX figma board.

NB: The framework to use are Vuejs , Vuex (state management).

NB: For the DATA, use your own fake data set store in an array. (VUEX store)

NB: The UI/UX figma board is available [here](https://www.figma.com/file/lxNl9Hj2GAOuyP4v1OMCsR/Data-Table-v2-(Community)?node-id=423%3 A4410)

## Tools and Frameworks
 - VueJS 3
 - Typescript
 - Vite - as my build tool
 - TailwindCSS
 - MomentJS

## Installation and Running

To run this project locally on your machine, first clone this repository. Open your terminal (command prompt) and install the dependencies with the following

```bash
pnpm install
```

After all dependencies have being successfully installed, run the following to apply linting to the codebase

```bash
pnpm lint 
```

After that you can begin the development server with the following command

```bash
pnpm dev
```

## About My Implementation
Following the Figma UI file, I built the frontend with VueJS and TailwindCSS. As per the instructions, I have my data stored in a local JSON file which is being loaded into the application as an array of object stored in Vuex state. I am also using the Vuex state to store my filter state as well as the sortBy state.
