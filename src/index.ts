import puppeteer from "puppeteer";
import clipboard from "clipboardy";
import type { OsuCookie, UserResponse } from "./types";

const Reset = "\x1b[0m";
const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

async function testCookie(cookie: string) {
    const me = (await fetch(`https://osu.ppy.sh/api/v2/me/osu`, {
        headers: { Cookie: `osu_session=${cookie}` },
    }).then((res) => res.json())) as UserResponse;

    if ("authentication" in me) {
        console.log(FgRed, "ERROR: Couldn't log in, please make sure you're logged in at https://osu.ppy.sh.", Reset);
        return false;
    }

    console.log(FgGreen, "Successfully logged in.", Reset);
    return me;
}

async function main() {
    console.log(FgMagenta, "Launching browser..", Reset);
    // Launch a headless browser
    const browser = await puppeteer.launch({ headless: "new" });

    console.log(FgBlue, "Navigating to https://osu.ppy.sh..", Reset);
    const page = await browser.newPage();

    // Go to osu.ppy.sh
    await page.goto("https://osu.ppy.sh");

    console.log(FgBlue, "Fetching cookies..", Reset);
    const cookies: Array<OsuCookie> = await page.cookies();
    const osuSessionCookies = cookies.find((x) => x.name === "osu_session");

    if (osuSessionCookies === undefined) {
        console.log(FgRed, "ERROR: Couldn't find cookies, maybe you're not logged in?", Reset);
        process.exit(0);
    }

    console.log(FgCyan, "Testing session cookie..", Reset);
    const me = await testCookie(osuSessionCookies.value);
    if(me === false) process.exit(0);
    
    clipboard.writeSync(osuSessionCookies.value);
    console.log(FgGreen, "osu! session cookie copied to clipboard.", Reset);
    console.log(FgGreen, "Some more info:", Reset);

    const osuThing = {
        sessionCookie: osuSessionCookies.value,
        username: me.username,
        country: me.country,
        playCount: me.statistics.play_count,
        globalRank: me.statistics.global_rank
    }
    console.info(osuThing);
    

    // Close the browser
    await browser.close();
}

main();
