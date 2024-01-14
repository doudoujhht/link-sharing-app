<script lang="ts">
    export let name: string;
    export let imageSrc: string;
    export let label: string;
    export let placeholder: string = "";
    export let inputType: string = "text";
</script>

<div>
    <label for={name}>{label}</label>
    <div class="input-container">
    <input
        type={inputType}
        class="rounded-lg border px-4 py-3 w-full input-field"
        placeholder={placeholder}
        id={name}
    />
    {#if imageSrc}
        <img src={imageSrc} alt="icon of the {name} textfield" class="icon" />
    {/if}
    </div>
</div>

<style>
    .input-container {
        position: relative;
    }

    .input-field {
        padding-left: 40px;
        transition: all 0.2s ease-in-out;
    }

    .icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        height: 16px;
        width: 16px;
    }

    .input-field:active,
    .input-field:focus {
        outline: none;
        border-color: #633cff;
        background: white;
        box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
        transition: all 0.2s ease-in-out;
    }
</style>