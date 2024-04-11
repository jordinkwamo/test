<template>
  <div class="wrapper">
    <div>
      <h1>Liste des événements</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date de début</th>
            <th>Lieu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="evenement in listesEvenement" :key="evenement.id">
            <td>{{ evenement.titre }}</td>
            <td>{{ evenement.date_debut }}</td>
            <td>{{ evenement.lieu }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn-primary" @click="goToAddEvenement">
        Ajouter un événement
      </button>
    </div>
  </div>
</template>

<script setup>
import useEvenement from "@/services/serviceEvenement";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const { getAllEvenement } = useEvenement();
const listesEvenement = ref([]);
const router = useRouter();

onBeforeMount(() => {
  getAllEvenement()
    .then((res) => (listesEvenement.value = res.data))
    .catch((err) => console.log(err));
});

const goToAddEvenement = () => router.push("/evenements1");

const goToProfile = (id) => {
  router.push(`/profile/${id}`);
};
</script>

<style>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
