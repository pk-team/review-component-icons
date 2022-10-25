<script lang="ts">
	import { getComponents } from '../db';
	import ComponentIcon from './componentIcon.svelte';
	import Select from './select.svelte';

	let components = getComponents();
    const fontSizes = ['14px', '16px', '18px', '24px', '36px', '48px', '60px']

    let value = fontSizes[0]
    $: {
        console.log(value)
    }
</script>

<Select
    options={fontSizes}
    bind:value
/> {value}
<table>
	<thead>
		<tr>
			<th style="width: 70px" />
			<th>Code</th>
			<th>Name</th>
		</tr>
	</thead>
	<tbody>
        {#each components as c  (c.code)}
            <tr>
                <td>
                    <ComponentIcon 
                        componentCode={c.code}
                        styleHeight={value}
                    />
                </td>
                <td>{c.code}</td>
                <td>{c.name}</td>
            </tr>
        {/each}
    </tbody>
</table>



