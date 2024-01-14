<script>
    import logo from '$lib/assets/images/logo-devlinks-large.svg';
    import TextField from '$lib/components/TextField.svelte';
    import emailImage from '$lib/assets/images/icon-email.svg';
    import passwordImage from '$lib/assets/images/icon-password.svg';
</script>

<div class=" flex justify-center items-center w-screen h-screen flex-col bg-white-lighter gap-[51px]  xs:justify-start xs:items-start xs:p-8 xs:bg-white " >
    <img src="{logo}" alt="the devlinks logo">
    <section class="w-[476px] p-10 bg-white flex flex-col gap-10 xs:p-0 xs:w-full" >
        <div>
            <h2>Login</h2>
            <h4>Add your details below to get back into the app</h4>
        </div>

        <form action="" class="flex flex-col gap-6">
            <TextField name="Email" imageSrc="{emailImage}" label="Email address" placeholder="e.g. alex@email.com"/>
            <TextField name="Password" imageSrc="{passwordImage}" label="Password" placeholder="Enter your password"/>
            <button class="btn-primary ">
                Login
            </button>
            <h4 class="text-center">Don't have an account? <a href="" class="text-purple">Create Account</a></h4>
        </form>
    </section>
</div>
