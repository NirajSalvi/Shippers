const express = require('express');
// const shipRoutes = express.Router();
const mapRoutes = express.Router();
let Map = require('./map.model');

// const express = require('express');
const puppeteer = require("puppeteer");
// const router = express.Router();

// ROUTE 1: Get all the BlogItems using - GET "/api/blogItems/crawl"
mapRoutes.get('/',
    async (req, res) => {
        try {

            const browser = await puppeteer.launch({
                // headless: false,
                // defaultViewport: false,
                // userDataDir: "./tmp",
            });
            const page = await browser.newPage();
            await page.goto('https://www.vesselfinder.com/login', { waitUntil: 'networkidle0' });

            const loginData = await page.$$(
                'div.login' > '.form'
                // 'div.site-content > .content-area > .site-main.archive-posts > .category-fitness'
            );

            await page.type(el => el.querySelector("'div.login' > '.form' > '#email'"),'niraj.salvi@spit.ac.in')
            // let data = [];

            // await page.type('#email', 'niraj.salvi@spit.ac.in');
            // await page.type('#password', 'itlab123');
            // await page.click('#email');
            // await page.click('input[type=email]');
            // await page.keyboard.type('niraj.salvi@spit.ac.in');
            // // await page.click('#password');
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

            // console.log('New Page URL:', page.url());

            // await page.goto(
            //     'https://www.bornfitness.com/category/fitness/'
            // );

            // // const blogsHandles = await page.$$('div.site-main.archive-posts');
            // const blogsHandles = await page.$$(
            //     'div.site-content > .content-area > .site-main.archive-posts > .category-fitness'
            // );

            // let data = [];

            // for (const bloghandle of blogsHandles) {
            //     let title = "Null";
            //     let desp = "Null";
            //     let imageURL = "Null";
            //     let link = "Null";
            //     let tag = "Null";

            //     try {
            //         title = await page.evaluate(
            //             el => el.querySelector("header > h2 > a").textContent, bloghandle);
            //     }
            //     catch (error) { }

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
            //     data.push({ title, desp, imageURL, link, tag });

            // }
            res.status(200).send("Login successful");
        } catch (error) {
            // console.error(error.message);
            // res.status(500).send("Some error occured");
            console.log(error.message);
        }
    })

// module.exports = router


module.exports = mapRoutes;