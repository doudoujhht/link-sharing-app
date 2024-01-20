<script>
    import empty from '$lib/assets/images/illustration-empty.svg';
  import LinkElement from './LinkElement.svelte';
</script>

<button class="btn-secondary w-full mt-10 mb-8">+ Add new link</button>

<LinkElement />


<div class="flex flex-col items-center p-6 bg-white-lighter h-[469px] 1height:h-3/5 rounded-xl justify-center hidden">
    <img src="{empty}" alt="">
    <h2 class="mt-10 mb-6">Let's get you started</h2>
    <h4 class="text-center w-[488px]">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</h4>
</div>

