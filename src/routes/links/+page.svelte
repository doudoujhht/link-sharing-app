<script lang="ts">
    import NavBar from '$lib/components/NavBar.svelte';
    import frame from '$lib/assets/images/illustration-phone-mockup.svg';
    import empty from '$lib/assets/images/illustration-empty.svg';
</script>

<NavBar />
<section class="section ">
    <div class="bg-purple h-full flex items-center justify-center mockup ">
        <img src="{frame}" alt="">
    </div>
    <div class="right">
        <div>
            <h2>Customize your links</h2>
            <h4 class="">Add/edit/remove links below and then share all your profiles with the world!</h4>
        </div>

        <button class="btn-secondary w-full button">+ Add new link</button>
        <div class="flex flex-col items-center sub">
            <img src="{empty}" alt="">
            <h2 class="let">Let's get you started</h2>
            <h4 class="text-center w-2/3">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</h4>
        </div>
        <div class="btn-container">
            <button class="btn-primary">Save</button>
        </div>

    </div>
</section>






<style>
    :global(body){
        background-color: #eee;
        padding: 24px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        
    }
    .section{
        display: flex;
        flex: 1;
        align-items: stretch;
        background-color: #eee;
        gap: 24px;
        max-height: max-content;
        
    }
    .mockup{
        width: 45%;
        padding: 24px;
        background-color: white;
        border-radius: 12px;
    }
    .button{
        margin-top: 40px;
        margin-bottom: 24px;
    }
    .w-2\/3{
        width: 488px
    }
    .right{
        flex: 1;
        padding: 40px;
        background-color: white;
        border-radius: 12px;
    }

    .sub{
        padding: 24px;
        background-color: #fafafa;
        height: 30vw;
        max-height: 50%;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .let{
        margin-top: 40px;
        margin-bottom: 24px;
    }

    .btn-container{
        display: flex;
        justify-content: flex-end;
        padding: 64px 0 24px 0;
    }

</style>