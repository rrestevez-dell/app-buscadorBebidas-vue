import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFavoritosStore } from "./faboritos";
import { useBebidasStore } from "./bebidas";

export const useModalStore = defineStore('modal', () => {
    
    const faboritos = useFavoritosStore()
    const bebidas = useBebidasStore()
    const modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }

    const textoBoton = computed(() => {
        return faboritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
    })

    return {
        modal,
        textoBoton,
        handleClickModal,
    }
})