<script>
  let rating = null;
</script>

<div class="max-w-[400px] p-6 bg-dark-blue rounded-xl flex flex-col gap-6">
  <h1 class="text-lg font-bold text-white">How did we do?</h1>
  <p class="text-light-grey">
    Please let us know how we did with your support request. All feedback is
    appreciated to help us improve our offering!
  </p>
  <div class="flex justify-between text-light-grey">
    {#each [1, 2, 3, 4, 5] as item}
      <button
        class={`py-3 px-5 rounded-full bg-dark-grey ${
          item === rating && "border-orange border"
        }`}
        on:click={() => (rating = item)}>{item}</button
      >
    {/each}
  </div>
  <button class="w-full py-2 text-white rounded-full bg-orange">SUBMIT</button>
</div>
