const express = require('express');

const mapRoutes = express.Router();
let Ship = require('./ship.model');
let Map = require('./map.model');


const puppeteer = require("puppeteer");
mapRoutes.put('/:id/:source/:destination',
    async (req, res) => {
        try {
            console.log(req.params);
            console.log(req.body.source);
            console.log(req.body.destination);
            const src = req.body.source;
            const des = req.body.destination;
            const browser = await puppeteer.launch({
                headless: false,
            });
            
            const page = await browser.newPage();
            const session = await page.target().createCDPSession();
            await session.send("Page.enable");
            await session.send("Page.setWebLifecycleState", { state: "active" });
            await page.goto('https://www.vesselfinder.com/login');
            await page.type('#email', 'noobitamon13@gmail.com');
            await page.type('#password', 'itlab123');
            await page.click('#loginbtn');
                const page2 = await browser.newPage();
            await page2.goto('https://route.vesselfinder.com/', { waitUntil: 'networkidle0' })
            const session2 = await page2.target().createCDPSession();
            await session.send("Page.enable");
            await session.send("Page.setWebLifecycleState", { state: "active" });
                

            console.log('New Page URL:', page.url());
            console.log('New Page URL:', page2.url());

            await page2.focus(' #first-point-container .p-inputtext');            // CSS selector of the input element
            await page2.keyboard.down('Control');
            await page2.keyboard.press('A');
            await page2.keyboard.up('Control');
            await page2.keyboard.press('Backspace');
            await page2.keyboard.type(`${src}`);
            await page2.waitForSelector('#pv_id_1_0');
            await page2.click('#pv_id_1_0');

            await page2.focus(' #second-point-container .p-inputtext');            // CSS selector of the input element
            await page2.keyboard.down('Control');
            await page2.keyboard.press('A');
            await page2.keyboard.up('Control');
            await page2.keyboard.press('Backspace');
            await page2.keyboard.type(`${des}`);
            await page2.waitForSelector('#pv_id_2_0');
            await page2.click('#pv_id_2_0');

                let data = [];
            for (const track of trackData) {

                let dep = "2"
                let arr = "Null"


                console.log(dep);
                console.log(arr);
                try {
                    dep = await page2.evaluate(
                        
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

                data.push({ dep, arr });
                console.log(data);
            }
            res.status(200).send(data);
        } catch (error) {
            console.log(error.message);
        }
    })

module.exports = mapRoutes;