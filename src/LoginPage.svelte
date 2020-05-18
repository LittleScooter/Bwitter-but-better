<script>
    import {APICall} from "./APIHandler.js";

    let email="";
    let code = "";
    let verify=false;
    async function login(e){
        e.preventDefault();
        try{
        const data = {
            email: email
        };
        const fetchResponse = await APICall("/login",data);
        console.log(fetchResponse);
        
        console.log(fetchResponse);
        if(fetchResponse.error){

        }
        else{
            verify=true;
        }
        }
        catch(err){
            console.log(err)
        }
        
    };
    async function verifyWithCode(e){
        e.preventDefault();
        const fetchResponse = await APICall("/verifyWithCode",{code:code})
        console.log(fetchResponse);
        if (fetchResponse.error) {
            alert("ERROR");
        } else {
            alert("Du är registered");
            location.hash="#personal"
        }
    }
</script>

<main>
{#if !verify}
    <form on:submit={login}>
        <input type="text" placeholder="email" bind:value={email}/>
        <button id="loginbutton">Next</button>
    </form>

{:else}
    <form on:submit={verifyWithCode}>
        <input type="text" placeholder="confirmation code" bind:value={code}/>
        <button id="loginbutton">Verify</button>
    </form>
{/if}
</main>