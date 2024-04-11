<template>
    <div class="wrapper">
    <div>
        <h1>Liste des departement</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>nom</th>
                <th>description</th>
                <th>Date de creation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="departement in listeDepartement" :key="departement.id">
                <td>{{ departement.nom }}</td>
                <td>{{ departement.description }}</td>
                <td>{{ departement.date_creation }}</td>
                <td><button class="btn btn-primary" @click="update(departement.id)" >Update</button>
                    <!-- <button class="btn btn-success" @click="goToProfile(departement.id)">Details</button> -->
                    <button class="btn btn-danger" @click="supprimer(departement.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class=" btn-primary" @click="goToAddDepartement">Ajouter departememt</button>
    </div>
</div>
    
</template>

<script setup>
import useDepartment from "@/services/serviceDepartement";
import { onBeforeMount, ref } from "vue";

import { useRouter } from "vue-router";
const { getAllDepartement, deleteDepartement } = useDepartment()

const listeDepartement = ref([])
const router = useRouter()

const supprimer = id => {
    deleteDepartement(id)
        .then((res) => {
            console.log('suppression', res)
            getAllDepartement()
                .then((res) => listeDepartement.value = res.data)
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
}
const update = (id) => {
    router.push(`/update-student/${id}`)
}
onBeforeMount(() => {
    // getAllDepartement()
    //     .then((res) => listeDepartement.value = res.data)
    //     .catch(err => console.log(err))
})

const goToAddDepartement =() => router.push('/departements')

const goToProfile = id => {
    router.push(`/profile/${id}`)
}

</script>
<style></style>
