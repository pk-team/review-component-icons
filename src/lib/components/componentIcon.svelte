<script lang="ts">
    export let componentCode = "";
    export let styleHeight = "16px";
  
    
    let iconUrl = `/icons/${componentCode}.svg`
  
  </script>
  
  <style>
      img {
          display: block;
          width: auto;
      }
  </style>
  
  <img
    style={`height: ${styleHeight}`}
    src={iconUrl}
    alt={`image of ${componentCode}`} 
  />
  