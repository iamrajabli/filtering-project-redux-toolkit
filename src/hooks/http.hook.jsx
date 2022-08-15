const useHttp = _ => {

    const request = async (url, method = 'GET', body = null, headers = { "Content-Type": "application/json" }) => {

        const res = await fetch(url, { method, body, headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${res.url}`)
        }

        return await res.json();

    }



    return { request };
}

export default useHttp;