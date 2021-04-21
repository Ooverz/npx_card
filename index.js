#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Adriano Campisi"),
    github: chalk.gray("https://github.com/") + chalk.green("oover"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("adriano-campisi"),
    npx: chalk.red("npx") + " " + chalk.white("oover"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.magenta(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
                `${chalk.bold(
                    "Hi ! I'm Adriano, passionate about computer sciences and programming." 
                )}`,
                `${chalk.bold("Improving my skills every day")}`,
                `${chalk.bold(
                    " and finally work as developper and web designer."
                )}`
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);