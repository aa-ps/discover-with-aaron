---
title: "How To Generate Images Using OpenAI"
desc: "Learn how to use OpenAI's API to generate images using DALLE-3."
img: "alien"
date: "2024-03-11"
tags: ["Web Dev"]
---
# How To Generate Images Using OpenAI 
## Background Information
I kept seeing TikTok videos of people generating images using ChatGPT and I was amazed at the images that were generated. I wanted to generate some images as well, but found out that ChatGPT Plus is $20 a month! I was like hell nah, and since I already had some experience working with the OpenAI API, I did some research on how I can generate images for a cheaper price. In this post, you'll see how I learned to generate images using OpenAI.

## Prerequisites
_Before you continue reading, make sure you have the following:_
1. An OpenAI account.
2. An OpenAI API key.
3. Account funds.
4. Node.js installed.

## Create Folder & JavaScript File
Create a folder for your project and make a new file called _'**generate.js**'_. This is where we will do our coding! Now change your current directory to the new folder you created. 

## Install NPM Packages
```shell
npm i openai 
```
## Generate And Save Image Locally
```js
import OpenAI from "openai";
import { writeFile } from "fs";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt:
    "A seven foot blue alien driving a red porsche.",
  n: 1,
  size: "1024x1024",
  response_format: "b64_json", // use 'url' if you prefer to have a link to your image.
});

const imageBase64Data = response.data[0]["b64_json"];
const imageBufferData = Buffer.from(imageBase64Data, "base64");

// Specify the path and filename for the output image
const filePath = "./outputImage.png";

// Write the buffer to a file
writeFile(filePath, imageBufferData, (err) => {
  if (err) {
    console.error("Error saving the image file:", err);
  } else {
    // Shows the formatted prompt and the base64 code.
    console.log(response.data);
  }
});
```
## Generate Image And Get URL
```js
import OpenAI from "openai";
import { writeFile } from "fs";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt:
    "A seven foot blue alien driving a red porsche.",
  n: 1,
  size: "1024x1024",
  response_format: "url", // use 'url' if you prefer to have a link to your image.
});

console.log(response.data[0]) // Get response plus the URL to the image
```
## Run Code
```shell
node .\generate.js
```

## Result
![Image Generated By OpenAI](/images/how-to-generate-images-using-openai/alien.webp)
#### Sources
[OpenAI Vision Documentation](https://platform.openai.com/docs/guides/vision)
