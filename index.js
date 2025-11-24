// You can also use package 'inquirer/prompts'; 
/*
    import { input } from "@inquirer/prompts";
    const answer = await input({message: 'Enter the URL:' }); 
*/

import inquirer from 'inquirer';
import { writeFile, createWriteStream } from "fs";
import {image} from "qr-image";


inquirer
  .prompt([
    {
    message: "Enter the URL for QR Code",
    name: "URL"
    },
  ])
  .then((answers) => {
    const answer = answers.URL;
    var qr_png = image(answer, {size: 10});
    qr_png.pipe(createWriteStream("qr_code_img.png"));
    
    writeFile("user-input-URL.txt", answer, (err) => {
    if (err) throw err;
    console.log("Your Link is accepted");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });