const PORT = process.env.PORT || 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.betexplorer.com/basketball/israel/wbl-women/bnei-herzliya-ramat-hasharon/0Qir0Tsg/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const matchResult = [];
    $('.table-main h-mb15'.html).each(function() {
      const anonym = $(this).text();
      const resultData = $(this).find('strong').text();
      matchResult.push(anonym);
    })

    console.log(matchResult)
  }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running well on port ${PORT}`))