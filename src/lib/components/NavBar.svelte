<script lang="ts">
    import logo from '$lib/assets/images/logo-devlinks-large.svg';
</script>

<nav class="">
    <img src="{logo}" alt="">
    <div>
        <button class="text-purple active">Links</button>
        <button class="text-purple">Profile Details</button>
    </div>
    <button class="btn-secondary">Preview</button>
</nav>








<style>
    .active{
        background-color: #EFEBFF;
    }

    nav{
        display: flex;
        padding: 16px 16px 16px 24px;
        justify-content: space-between;  
        border-radius: 0.5rem;
        background-color: white;  
        margin-bottom: 24px;  
    }
</style>