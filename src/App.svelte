<script>
  export let name;
  import Header from "./Header.svelte";
  import FeedMenu from "./FeedMenu.svelte";
  import Feed from "./Feed.svelte";
  import PersonalFeed from "./PersonalFeed.svelte";
  import GlobalFeed from "./GlobalFeed.svelte";
  import LoginPage from "./LoginPage.svelte";
  import RegistrationPage from "./RegistrationPage.svelte";

  let pageName = location.hash;

  window.onhashchange = () => (pageName = location.hash);

</script>

<style>
  main {
    text-align: center;
    max-width: 240px;
    padding: 0;
    margin: 0 auto;
    background-color: #3f3f40;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  {#if pageName == '#global'}
    <Header />
    <FeedMenu />
    <GlobalFeed />
  {:else if pageName == '#personal'}
    <Header />
    <FeedMenu />
    <PersonalFeed />
  {:else if pageName == '#Login'}
    <LoginPage/>
  {:else if pageName == '#Register'}
    <Header />
    <FeedMenu />
    <PersonalFeed />
  {:else}
    <Header />
    <FeedMenu />
    <Feed />
  {/if}

</main>
