<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md">
            <h3 class="title fw-bold"><b>Friend Manager </b>
                <router-link to="/friends/add" class="addbtn btn btn-sm"><i class="bi bi-person-plus"></i> New</router-link>
                </h3>
            </div>
            <div class="col-md justify-content-end">
                <form>
                    <input type="text" class="searchbar form-control" placeholder="Search Name">
                </form>
            </div>     
                <div class="col-md-1">
                    <button class="addbtn btn">Search</button>
                </div>   
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
        <div class="container mt-1" v-if="friends.length > 0">
            <div class="row" >

                <div class=" col-md-6 "
                     v-for="friend of friends" :key="friend"
                     >

                    <div class="row profile_containers my-2 bg-light rounded align-items-center">

                        <div class="col-sm-4">
                            <img :src="friend.photo" alt="..." class="contact-img" />
                        </div>
                        <div class="col-sm-7">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Name: <span class="fw-bold"><b>{{friend.name}}</b></span>
                                </li>
                                <li class="list-group-item">
                                    Phone: <span class="fw-bold"><b>{{friend.mobile}}</b></span>
                                </li>
                                <li class="list-group-item">
                                    Email: <span class="fw-bold"><b>{{friend.email}}</b></span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                            <router-link :to="`/friends/view/${friend.id}`" class="btn my-1 btn-primary btn-sm"><i class="bi bi-eye"></i></router-link>
                            <router-link :to="`/friends/edit/${friend.id}`" class="btn my-1 btn-warning btn-sm"><i class="bi bi-pencil"></i></router-link>
                            <button @click="clickDeleteFriend(friend.id)" class="my-1 btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FriendService } from "../../services/FriendService";

export default {
        name: 'FriendManager',
        data: function () {
            return {
                friends: [],
                errorMessage: null
            }
        },
        created: async function () {
            try {
                let response = await FriendService.getALLFriends();
                this.friends = response.data;
            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        },
        methods: {
            clickDeleteFriend: async function (friendId) {
                try {
                    let response = await FriendService.deleteFriend(friendId);
                    if (response) {
                        let response = await FriendService.getALLFriends();
                        this.friends = response.data;
                    }
                }
                catch (error) {
                    this.errorMessage = error;
                    this.loading = false;
                }
            }
        }
}
</script>

<style scoped>
    .addbtn, .searchbar, .profile_containers, .input {
        border: 1px solid black;
    }
    .addbtn{
        background-color:orange;
        color: white;
    }
    .title{
        color:black;
    }
    .profile_containers{
        margin-right:5px;
        color: black;
    }
</style>