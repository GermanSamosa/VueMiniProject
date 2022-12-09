<template>
    <div class="container mt-3">
        <div class="row">
            <h3 class="title text-black fw-bold"><b>View Friend</b></h3>
        </div>

        <div v-if="errorMessage">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="bi-trash3 text-danger fw-bold">{{errorMessage}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-3" v-if="isDone()">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img :src="friend.photo" class="contact-img-big" alt="..." />
                </div>
                <div class="col-md-6">
                    <ul class="box list-group">
                        <li class="list-group-item">
                            Name: <span class="fw-bold"><b>{{friend.name}}</b></span>
                        </li>
                        <li class="list-group-item">
                            Phone: <span class="fw-bold"><b>{{friend.mobile}}</b></span>
                        </li>
                        <li class="list-group-item">
                            Email: <span class="fw-bold"><b>{{friend.email}}</b></span>
                        </li>
                        <li class="list-group-item">
                            Company: <span class="fw-bold"><b>{{friend.company}}</b></span>
                        </li>
                        <li class="list-group-item">
                            Group: <span class="fw-bold"><b>{{group.name}}</b></span>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col">
                        <router-link to="/" class="btn btn-dark my-3"><i class="bi bi-back"></i> Back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FriendService } from "../../services/FriendService"

export default {
        name: "ViewFriend",
        data: function () {
            return {
                friendId: this.$route.params.friendId,
                friend: {},
                errorMessage: null,
                group: {}
            }
        },
        created: async function () {
            try {
                let response = await FriendService.getFriend(this.friendId);
                this.friend = response.data;

                let groupResponse = await FriendService.getGroup(response.data);
                
                this.group = groupResponse.data;
            }
            catch (error) {
                this.errorMessage = error;
            }
        },
        methods: {
            isDone: function () {
                return Object.keys(this.friend).length > 0 && Object.keys(this.group).length > 0;
            }
        }
}
</script>

<style scoped>
    .box{
        border: 1px solid black;
    }
</style>