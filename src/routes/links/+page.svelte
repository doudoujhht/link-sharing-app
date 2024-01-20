<script lang="ts">
    import NavBar from '$lib/components/NavBar.svelte';
    import LinkEditor from '$lib/components/LinkEditor.svelte';
    import Mockup from '$lib/components/Mockup.svelte';
</script>
<!-- TODO chnage all the css to tailwind -->
<NavBar />
<section class="section flex flex-1 items-stretch bg-[#eee] gap-6">
    <Mockup />
    <div class="flex-1 p-10 bg-white rounded-xl">
        <div>
            <h2>Customize your links</h2>
            <h4 class="">Add/edit/remove links below and then share all your profiles with the world!</h4>
        </div>
        <LinkEditor />
        <div class="flex justify-end pt-16 w-full">
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
    /* .sub{
        padding: 24px;
        background-color: #fafafa;
        height: 60%;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    } */

    /* .section{
        display: flex;
        flex: 1;
        align-items: stretch;
        background-color: #eee;
        gap: 24px;
        max-height: max-content;
        
    } */

    /* .button{
        margin-top: 40px;
        margin-bottom: 30px;
    } */
    /* .right{
        flex: 1;
        padding: 40px;
        background-color: white;
        border-radius: 12px;
    } */


    /* @media (min-height: 1000px){
        .sub{
            height: 469px;
        }
    } */

    /* .btn-container{
        display: flex;
        justify-content: flex-end;
        padding-top: 64px;
    } */

</style>