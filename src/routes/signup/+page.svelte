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
            <h2>Create account</h2>
            <h4>Let's get you started sharing your links!</h4>
        </div>

        <form action="" class="flex flex-col gap-6">
            <TextField name="Email" imageSrc="{emailImage}" label="Email address" placeholder="e.g. alex@email.com"/>
            <TextField name="Password" imageSrc="{passwordImage}" label="Create password" placeholder="Enter your password"/>
            <TextField name="PasswordConfirmation" imageSrc="{passwordImage}" label="Confirm password" placeholder="Enter your password"/>
            <p>password must contain at least 8 characters</p>
            <button class="btn-primary ">
                Create new account
            </button>
            <h4 class="text-center">Already have an account? <a href="/login" class="text-purple">Login</a></h4>
        </form>
    </section>
</div>