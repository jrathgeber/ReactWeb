
const iex = require('iexcloud_api_wrapper'); // gets auth from .env automatically

console.log("Hello !!!!!!");
console.log(process.env);
console.log('The value of PORT is:', process.env.PORT);
console.log(iex);
//console.log(iex.AccountMetaData.IEXCLOUD_PUBLIC_KEY);

const getMoverData = async() => {
    try {
      const gainers = await iex.list('gainers');
      console.log(gainers);
    }
    catch(error) {
      //console.error(`Could not get data: ${error}`);
      process.exit(-1);  // nonzero exit code indicates failure
    }
  };
  

  const quote = async (sym) => {
    const quoteData = await iex.quote(sym);
    // do something with returned quote data
    //console.log(quoteData)
  };


  // temporary call to getMoverData() to look at output
  // console.log({Hello : getMoverData()});
  // console.log({Hello2 : ( quote("NFLX").toString())});

  const getMoverData2 = async() => {
    try {
      const gainers = await iex.list('gainers');
      const losers = await iex.list('losers');
      return { gainers, losers };
    }
    catch(error) {
      console.error(`Could not get data: ${error}`);
      process.exit(-1);  // nonzero exit code indicates failure
    }
  }






    const generateTable = (stockData) => {
      const rows = stockData.map(data => 
        `<tr>
          <td>${Math.round(data.changePercent * 10000) / 100}</td>
          <td>${data.symbol}</td>
          <td>${data.companyName}</td>
          <td>${data.latestPrice}</td>
          <td>${data.previousClose}</td>
          <td>${Math.round(data.ytdChange * 100) / 100}</td>
        </tr>`
      ).join('\n');
      return `
        <table>
          <thead>
            <tr>
              <th>% Change</th>
              <th>Symbol</th>
              <th>Company</th>
              <th>Close</th>
              <th>Previous Close</th>
              <th>YTD Change</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      `}

      const generateHtml = (gainers, losers) => {
        const gainerTable = generateTable(gainers)
        const loserTable = generateTable(losers)
        return `<html>
          <body>
            <h1>Today's Biggest Stock Movers</h1>
            <h2>Gainers</h2>
            <div>${gainerTable}</div>
            <h2>Losers</h2>
            <div>${loserTable}</div>
          </body>
        </html>`
      }


      const main = async () => {
        const { gainers, losers } = await getMoverData2();
        const htmlEmailContents = generateHtml(gainers, losers);

        console.log(htmlEmailContents);

      }
      
      main()
        .catch(error => console.error(error));


        export default reportWebVitals;