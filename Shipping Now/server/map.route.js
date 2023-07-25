const express = require('express');
// const shipRoutes = express.Router();
const mapRoutes = express.Router();
let Ship = require('./ship.model');
let Map = require('./map.model');

// const express = require('express');
const puppeteer = require("puppeteer");
// const router = express.Router();

// ROUTE 1: Get all the BlogItems using - GET "/api/blogItems/crawl"
mapRoutes.put('/:id/:source/:destination',
    async (req, res) => {
        try {
            // let oldShip = await Ship.findById(req.params.id);
            // if (!oldShip) {
            //     res.status(404).send("Ship not found");
            // }
            // const src = oldShip.source;
            // const des = oldShip.destination;
            // console.log(src);
            // console.log(des);
            // const { source, destination } = req.body;
            // console.log(req);
            console.log(req.params);
            console.log(req.body.source);
            console.log(req.body.destination);
            const src = req.body.source;
            const des = req.body.destination;
            const browser = await puppeteer.launch({
                headless: false,
                // ignoreHTTPSErrors: true
                // defaultViewport: false,
                // userDataDir: "./tmp",
            });
            // const browser = await puppeteer.launch({headless: false,executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application'});
            const page = await browser.newPage();
            const session = await page.target().createCDPSession();
            await session.send("Page.enable");
            await session.send("Page.setWebLifecycleState", { state: "active" });
            // await page.click('input[type="email"]');            
            // await page.keyboard.type('niraj.salvi@spit.ac.in');            
            // await page.click('input[type=password]');
            // await page.keyboard.type('itlab123');
            // await page.click('loginbtn');
            // await page.waitForNavigation();
            
            // await Promise.all([
                //     page.click('#loginSubmit'),
                //     page.waitForNavigation({ waitUntil: 'networkidle0' }),
                // ]);
                
                // await page.click('#loginbtn');
                
                // await page.waitForNavigation(); // <------------------------- Wait for Navigation
            // await page.setDefaultNavigationTimeout(0);
            await page.goto('https://www.vesselfinder.com/login');
            // await page.goto('https://route.vesselfinder.com/', { waitUntil: 'networkidle0' }, {timeout: 0})
            // await page.waitForNavigation();
            // await page.type('#email', 'niraj.salvi@spit.ac.in');
            await page.type('#email', 'noobitamon13@gmail.com');
            await page.type('#password', 'itlab123');
            await page.click('#loginbtn');
            // await page.click('a[href="https://www.vesselfinder.com/login"]');   
                // await page.click('input[type="email"]');            
                // await page.keyboard.type('niraj.salvi@spit.ac.in');            
                // await page.click('input[type=password]');
                // await page.keyboard.type('itlab123');
                // await page.click('loginbtn');
    
                // await page.type('input[type="email"]', 'niraj.salvi@spit.ac.in');
                // await page.type('input[type="password"]', 'itlab123');
                // await page.click('#email');
            
                // await page.waitForNavigation();
                // console.log("success");
                const page2 = await browser.newPage();
            await page2.goto('https://route.vesselfinder.com/', { waitUntil: 'networkidle0' })
            const session2 = await page2.target().createCDPSession();
            await session.send("Page.enable");
            await session.send("Page.setWebLifecycleState", { state: "active" });
                // await page2.waitForNavigation();

            console.log('New Page URL:', page.url());
            console.log('New Page URL:', page2.url());

            // await page2.type(' #first-point-container .p-inputtext', 'mumbai');
            // await page2.type(' #second-point-container .p-inputtext', 'kochi');

            await page2.focus(' #first-point-container .p-inputtext');            // CSS selector of the input element
            await page2.keyboard.down('Control');
            await page2.keyboard.press('A');
            await page2.keyboard.up('Control');
            await page2.keyboard.press('Backspace');
            // await page2.keyboard.type('mumbai');
            // await page2.keyboard.type({ src });
            // await page2.keyboard.type(src);
            await page2.keyboard.type(`${src}`);
            await page2.waitForSelector('#pv_id_1_0');
            await page2.click('#pv_id_1_0');
            // await page2.keyboard.press('Tab');
//             await page2.keyboard.press('Enter');
//             await page.keyboard.press('NumpadEnter'); // Numeric Keypad Enter Key
// await page.keyboard.press('\n'); // Shortcut for Enter Key
// await page.keyboard.press('\r');
// await (await page2.$('#first-point-container .p-inputtext')).select('Mumbai');
// await (await page2.$('.p-autocomplete-panel')).click('#pv_id_1_0');

            await page2.focus(' #second-point-container .p-inputtext');            // CSS selector of the input element
            await page2.keyboard.down('Control');
            await page2.keyboard.press('A');
            await page2.keyboard.up('Control');
            await page2.keyboard.press('Backspace');
            // await page2.keyboard.type('chennai');
            // await page2.keyboard.type({ des });
            // await page2.keyboard.type( des );
            await page2.keyboard.type(`${des}`);
            await page2.waitForSelector('#pv_id_2_0');
            await page2.click('#pv_id_2_0');
            // await (await page2.$('#second-point-container .p-inputtext')).click('#pv_id_2_0');
            // await (await page2.$('#second-point-container .p-inputtext')).select('Kochi');
//             await page2.keyboard.press('Enter');
//             await page.keyboard.press('NumpadEnter'); // Numeric Keypad Enter Key
// await page.keyboard.press('\n'); // Shortcut for Enter Key
// await page.keyboard.press('\r');


            // const blogsHandles = await page.$$('div.site-main.archive-posts');
            // const blogsHandles = await page.$$(
            //     'div.site-content > .content-area > .site-main.archive-posts > .category-fitness'
            // );
            
            // const page2 = await browser.newPage();
            // await page2.setDefaultNavigationTimeout(0);
                // await page2.goto('https://route.vesselfinder.com/', { waitUntil: 'networkidle0' }, {timeout: 0})
                // await page2.waitForNavigation();
            // let text = "NULL"
            //     text=document.querySelector("div.p-card > .form-container > #first-point-container > .input-label ").innerText;
            // console.log(text);
                let data = [];
            // await page2.waitForSelector('#result-section-container');
            //     const trackData = await page2.$$(
            //         // 'div.site-content > .content-area > .site-main.archive-posts > .category-fitness'
            //         'div.p-card > .form-container '
            // );
            // console.log('New Page URL:', page2.url());
            for (const track of trackData) {
                // let title = "Null";
                // let desp = "Null";
                // let imageURL = "Null";
                // let link = "Null";
                // let tag = "Null";
                let dep = "2"
                let arr = "Null"

                // try {
                //     title = await page.evaluate(
                //         el => el.querySelector("header > h2 > a").textContent, bloghandle);
                // }
                // catch (error) { }
                console.log(dep);
                console.log(arr);
                try {
                    dep = await page2.evaluate(
                        // el => el.querySelector("#first-point-container > .input-label ").innerHTML, track);
                        el => el.querySelector("#first-point-container > .input-label ").innerText, track);
                        console.log(dep);
                }
                catch (error) { }

                try {
                    arr = await page2.evaluate(
                        el => el.querySelector("#second-point-container > .input-label ").innerText, track);
                        console.log(arr);
                }
                catch (error) { }
            // }
            //     try {
            //         desp = await page.evaluate(
            //             el => el.querySelector(".entry-content.base-content > p").textContent, bloghandle);
            //     } catch (error) { }

            //     try {
            //         imageURL = await page.evaluate(
            //             el => el.querySelector(".featured-image > img").getAttribute("src"), bloghandle);
            //     } catch (error) { }

            //     try {
            //         link = await page.evaluate(
            //             el => el.querySelector(".read-more__link").getAttribute("href"), bloghandle);
            //     } catch (error) { }

            //     try {
            //         tag = await page.evaluate(
            //             el => el.querySelector(".cat-links > a").textContent, bloghandle);
            //     } catch (error) { }


            //     // console.log(title, desp, imageURL);
                // data.push({ title, desp, imageURL, link, tag });
                data.push({ dep, arr });
                console.log(data);
            }
            res.status(200).send(data);
            // res.status(200).send("Login successful");
        } catch (error) {
            // console.error(error.message);
            // res.status(500).send("Some error occured");
            console.log(error.message);
        }
    })

// module.exports = router


module.exports = mapRoutes;