<script lang="ts">
    export let options = ["one", "two"]
    export let value = options[0]
</script>

<select bind:value>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>