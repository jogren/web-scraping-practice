const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Headers
writeStream.write(`Title,Link,Category \n`);

request('https://secondactfitnessmpls.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('.post').each((i, el) => {
      const title = $(el)
        .find('.entry-title')
        .text()
        .replace(/\s\s+/g, '');
      const link = $(el)
        .find('.entry-title a')
        .attr('href');
      const category = $(el)
        .find('.entry-meta a')
        .first()
        .text();
      writeStream.write(`${title}, ${link},${category} \n`);
    });
    console.log('Scraping Done...')
  }
})