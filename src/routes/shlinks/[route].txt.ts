import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }) => {
    let shlinkData = "https://link.skornel02.hu/t8I9I";

    const shlinkKey = process.env.SHLINK_KEY;
    if (shlinkKey !== undefined && shlinkKey.length !== 0) {
        try {
            const res = await fetch(`https://link.skornel02.hu/shorten.php?api-key=${shlinkKey}&service=skornel02&url=${params.route}`)
            shlinkData = (await res.text());
        } catch (e) {
            //console.error(e);
        }
    }

    return {
        body: shlinkData,
        status: 200,
    };
}