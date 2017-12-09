<template>
<article class="deck-card" style="height:30%" v-bind:style="{backgroundColor : card.quality}">
        <img class="card-img-top img-fluid" :src="card.imageUrl" alt="Card image cap" width="10" style="width: 30%;">
        <div class="card-body">
            <h4 class="card-title">{{card.name}}</h4>
            <p class="card-text">{{card.description}}</p>
            <p class="card-text">Atk :{{card.attack}}</p>
            <p class="card-text">PV :{{card.health}}</p>
            </div>
            <p class="card-footer">Cost : {{card.mana}}</p>

</article>
</template>
<script>
export default {
    name : 'deck-card',
    props : {
        card : { type: Object, required : true }
    },
}
</script>
