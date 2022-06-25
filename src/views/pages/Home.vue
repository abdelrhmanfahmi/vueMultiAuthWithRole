<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Hello Welcome {{ user }}</h3>
                <button @click.prevent="logout" class="btn btn-danger">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'home-page',
        data(){
            return{
                error:null,
                user:null
            }
        },
        mounted(){
            this.user = JSON.parse(sessionStorage.getItem('user'));
        },
        methods:{
            async logout(){
                try{
                    await this.$store.dispatch('logout');
                    await this.$router.push({name: 'login-page'});
                }catch(e){
                    console.log(e);
                    this.error = e;
                }
            }
        }
    }
</script>

<style scoped>

</style>