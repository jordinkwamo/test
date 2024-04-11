<template>
  <div class="card">
    <img src=".." class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">{{ etudiant.prenom }}</p>
      <p class="card-text">{{ etudiant.nom }}</p>
      <p class="card-text">{{ etudiant.date_de_naissance }}</p>
      <p class="card-text">{{ etudiant.email }}</p>
    </div>
  </div>
</template>

<script setup>
import useEtudiant from "@/services/servicesEtudiants";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
const etudiant = ref({});

const { getStudentById } = useEtudiant();
onBeforeMount(() => {
  getStudentById(id)
    .then((res) => {
      etudiant.value = res.data;
      // Vous devez également récupérer l'URL de la photo de profil de l'étudiant ici
      // et mettre à jour l'attribut src de l'image avec cette URL
    })
    .catch((err) =>
      console.log(
        "Erreur lors de la récupération des informations de l'étudiant :",
        err
      )
    );
});
</script>
