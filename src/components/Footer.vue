<template>
    <div>
        <hr class="mt-5">
        <b-container class="mt-5 mb-5">
            <b-row align-h="center mb-4">
                <div> &copy; 2021 my-resepindo</div>
            </b-row>
            <b-row>
                <b-col 
                    cols="12"
                    md="4"
                    class="mb-3"
                >
                    <h4>Tentang Kami</h4>
                    <div class="text-muted">my-resepindo hadir sebagai platform penyedia resep-resep favorite untuk keluarga indonesia</div>
                </b-col>
                <b-col
                    cols="12"
                    md="4"
                    class="mb-3"
                >
                    <h4>Hubungi Kami</h4>
                    <div class="text-muted">Jl. Kaliurang Km. 10, Yogyakarta</div>
                    <div class="text-muted">support@myresepindo.id</div>
                    <div class="text-muted">0401-326-846</div>
                </b-col>
                <b-col
                    cols="12"
                    md="4"
                    class="mb-3"
                >
                    <h4>API Source</h4>
                    <div class="text-muted">
                        <a href="https://github.com/tomorisakura/unofficial-masakapahariini-api" target="_blank">MasakApaHariIniAPI </a> 
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

    a {
        color: #6c757d;
    }

    a:hover {
        text-decoration: none;
        color: #6c757d;
    }
</style>

