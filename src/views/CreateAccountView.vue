<script setup>

</script>
<template>
    <main class="main-signin">
        <section class="section-signin">
            <div class="container-signin">
                <h1>Sign in</h1>

                <div class="box-inputs-signin">
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="account" :height="50" :width="50" fill="black" />
                        </div>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="at" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="lock" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Password">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="lock-check" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Confirm password">
                    </div>
                </div>
                
                <div class="box-btn-signin">
                    <button>Sign in</button>
                </div>
                <div class="box-company-mark">
                    <img src="../assets/images/baboonblack.png">
                    <p>Banboo inc.</p>
                </div>
            </div>
        </section>
    </main>

<div class="succed" v-if="succed">
<p>Conta criada com sucesso!</p>
<div class="loading-bar"></div>
</div>
</template>