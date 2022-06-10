type Fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>;

export const loadShlinkUrl = async (url: string, fetch: Fetch): Promise<string | undefined> => {
    let shlinkUrl: string | undefined = undefined;
    if (!url.endsWith('.js')) {
        try {
            const niceRoute = url.replaceAll('/', '---');
            const localUrl = encodeURI(`${niceRoute}`);
            shlinkUrl = await (
                await fetch(`/shlinks/${localUrl}.txt`, {
                    credentials: 'same-origin',
                })
            ).text();
        } catch (e) {
            console.log('Error while reading shlinkUrl', e);
        }
    }
    return shlinkUrl;
}