<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BiMenu from "svelte-icons-pack/bi/BiMenu";
  import { fade } from "svelte/transition";
  let isOpen = false;
</script>

<div
  class="hidden px-2 md:px-6 top-0 left-0 pt-4 md:flex md:flex-row justify-between fixed text-light w-full"
>
  <h1 />
  <div class="flex flex-row gap-4">
    <a href="#home">Home</a>
    <a href="#about">About Me</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="blog">Blog</a>
  </div>
</div>
<div class="md:hidden flex flex-row justify-end w-full text-light pt-4 px-6">
  <div
    class="flex flex-col relative items-end w-full h-auto transition-[height]"
  >
    <button
      class="mb-1"
      on:click={() => {
        isOpen = !isOpen;
      }}
    >
      <Icon src={BiMenu} color="#b0cdf1" className="text-xl text-light font-bold" />
    </button>
    {#if isOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        transition:fade
        on:click={()=>{isOpen=!isOpen}}
        class="flex flex-col gap-2 items-end bg-background w-full top-full absolute"
      >
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="blog">Blog</a>
      </div>
    {/if}
  </div>
</div>
