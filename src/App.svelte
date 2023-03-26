<script>
  let count = 0;
</script>

<main class="bg-slate-200 flex justify-center items-center h-screen text-white">
  <button on:click={() => count++} class="px-5 py-2 bg-slate-500 rounded-md"
    >Increment +</button
  >
  <h1 class="mx-8 text-black text-3xl">{count}</h1>
  <button on:click={() => count--} class="px-5 py-2 bg-red-400 rounded-md"
    >decrement -</button
  >
</main>
