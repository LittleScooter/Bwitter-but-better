<script>
    import {APICall} from "./APIHandler.js";;

    let email="";
    let code = "";
    let verify=false;
    async function login(e){
        e.preventDefault();
        try{
        const data = {
            email: email
        };
        fetchResponse = await APICall("/login",data);
        console.log(fetchResponse);
        verify=true;
        console.log(fetchResponse);
        }
        catch(err){
            console.log(err)
        }
        
    };
    async function verifyWithCode(e){

        fetchResponse = await APICall("/verifyWithCode",code)
        console.log(fetchResponse);
        if (fetchResponse.error) {
            alert("ERROR");
        } else {
            alert("Du är inloggad");
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