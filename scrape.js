const request = require('request');
const cheerio = require('cheerio');
const fetch = require("node-fetch");

request('https://secondactfitnessmpls.com/', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const siteHeading = $('.io-title-description');
    // console.log(siteHeading.text());
    const output = siteHeading.find('a').text();
    // console.log(output)

    $('.menu-item a').each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr('href');
      // console.log(link)
    });
  }
})