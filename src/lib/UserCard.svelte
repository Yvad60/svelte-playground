<script>
  export let name;
  export let coverImage;
  export let description;
</script>

<div class="mx-4 my-2 overflow-hidden bg-white rounded w-96">
  <div class="relative">
    <img src={coverImage} alt="cover" class="object-cover w-full h-44" />
    <div
      class="absolute bottom-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 rounded-full left-1/2 w-14 h-14"
    />
  </div>
  <div class="flex flex-col gap-3 px-4 pb-4 mt-10 text-center">
    <h3 class="text-lg font-medium text-center">{name}</h3>
    <p>
      {description}
    </p>
  </div>
</div>
