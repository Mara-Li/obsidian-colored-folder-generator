# Obsidian colored folder generator

A nodeJS script that generate CSS for colored folder in the Obsidian explorer. 

Not like the "rainbow" folder, here you can choose which folder you want to enable different colors. Colored can be changed using [Style Settings]() and will be named with prefix `bg-` and `fg-` for background and foreground color respectively.

# Installation
## Pre-requisite
- NodeJS
- [bun](https://bun.sh/) (preferred)/[tsx](https://www.npmjs.com/package/tsx)

## Steps
1. Clone this repository
2. Run `bun install` to install dependencies
 - If Bun is not installed and wanted, you can use any package manager to install the dependencies (`pnpm`, `npm`, `yarn`, etc.)
 - You will need to use `tsx` to run the script if you are not using Bun
3. Create a `.env.ts` file in the root directory with the following content:
    ```js
   export const config: Folders = [{
    name: "folder1",
    linked: ["important", "_important"]
   },
    {
     name: "folder2",
     linked: ["tools", "archive"]
    },
   {
    name: "folder3",
   }
   ]
    
    ```
    - `name`: The name of the folder you want to color
    - `linked`: The list of folders that will be colored with the same color as the `name` folder. 
4. Run `bun start` to generate the CSS file
5. Copy the generated CSS file to your Obsidian vault
