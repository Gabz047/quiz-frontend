<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import '@passageidentity/passage-elements/passage-auth'
</script>

 <template>
    <main class="main-login">
        <section class="section-login">
            <div class="container-login">
                <h1>Login</h1>

                <div class="box-inputs">
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon class="vicon" name="account" :height="45" :width="45" fill="black" />
                        </div>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon class="vicon" name="at" :height="35" :width="35" />
                        </div>
                        <input type="text" placeholder="Email" >
                    </div>
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon class="vicon" name="lock" :height="35" :width="35" />
                        </div>
                        <input type="text" placeholder="Password" >
                    </div>
                </div>
                <div class="box-aditional-info">
                    <p>forgot password?</p>
                    <p>or</p>
                    <RouterLink to="/createuser">Create account</RouterLink>
                </div>
                <div class="box-btn-login">
                    <button>Login</button>
                </div>
                <div class="box-company-mark">
                    <img src="../assets/images/baboonblack.png">
                    <p>Banboo inc.</p>
                </div>
            </div>
        </section>
        <div class="authContainer">
            <passage-auth app-id="U4AeJFba6uqOaCeuhhmksac8"></passage-auth>
        </div>
    </main>
 </template>