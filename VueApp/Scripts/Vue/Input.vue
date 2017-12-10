<template>
<div>
<input v-model='inputModel' type='textbox' />
{{inputModel}}
</div>
</template>
<script>
export default{
data(){
    return{
        inputModel:''
    }
}
}
</script>