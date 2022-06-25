<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="color:#fff;background-color: goldenrod;text-align: center;">Login Form</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="col mb-3">
                                <label>E-mail</label>
                                <input type="text" name="email" class="form-control" id="email" v-model="user.email" placeholder="E-mail">
                            </div>
                            <div class="col mb-3">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" id="password" v-model="user.password" placeholder="Password">
                            </div>
                            <div class="col">
                                <button class="btn btn-warning text-white w-100">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'login-page',
        data(){
            return{
                user:{
                    email:null,
                    password:null
                },
                error:null
            }
        },
        methods:{
            async login(){
                this.error = null;

                try{
                    await this.$store.dispatch('login' , this.user);
                    await this.$router.push({name : 'home-page'});
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