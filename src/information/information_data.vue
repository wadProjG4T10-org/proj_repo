<template>
    <div class="product">
        <picture>
            <img v-bind:src="img" alt= {{name}}>
        </picture>
        <!--modal-->
        <p><b-button class="open" v-on:click="open()">open</b-button></p>
            <div class="modal_container" id= {{modal_id}}>
                <b-card>
                        <p> {{name}}</p>
                        <b-button class="class" v-on:click="close()">close</b-button>
                </b-card>
            </div>
    </div>
</template>

<script> 
export default {
    name:"information_database",
    props:['modal_id','name','img'],
    data() {

    }
};
</script>