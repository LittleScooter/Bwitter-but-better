export function APICall(url, body){
    return new Promise(async (resolve, reject)=>{
        try{
            console.log(url);
            const fetchResponse = await fetch("http://localhost:3005"+url,{
                method: "POST",
                body: JSON.stringify(body),
                mode: "cors",
                credentials: "include",
                headers: {
                "Content-Type": "application/json"
        }});
        resolve(await fetchResponse.json());
        }
        catch(err){
            reject(err);
        }
        
    });
}