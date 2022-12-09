<template>
        <div class="container mt-3">
            <div class="row">
                <h3 class="title text-black fw-bold"><b>Edit Friend</b></h3>
            </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-4">
                        <form @submit.prevent="updateSubmit()">
                            <div class="mb-2">
                                <input required  type="text" v-model="friend.name" class="input form-control" placeholder="Name" />
                            </div>
                            <div class="mb-2">
                                <input required  type="text" v-model="friend.photo" class="input form-control" placeholder="Photo URL" />
                            </div>
                            <div class="mb-2">
                                <input required  type="email" v-model="friend.email" class="input form-control" placeholder="Email" />
                            </div>
                            <div class="mb-2">
                                <input required  v-model="friend.mobile" type="number" class="input form-control" placeholder="Mobile" />
                            </div>
                            <div class="mb-2">
                                <select required v-model="friend.groupID" class="input form-control" v-if="groups.length>0">
                                    <option class="input" :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <input required  type="text" v-model="friend.company" class="input form-control" placeholder="Company" />
                            </div>
                            <div class="mb-2">
                                <input type="Submit" class="btn btn-dark" value="Update Friend" />
                            </div>
                        </form>
                    </div>

                    <div class="col-md-4">
                        <img :src="friend.photo" class="contact-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { FriendService } from "../../services/FriendService"

    export default {
        name: 'EditManager',
        data: function () {
            return {
                friendId: this.$route.params.friendId,
                friend: {
                    name: '',
                    company: '',
                    email: '',
                    mobile: '',
                    photo: '',
                    groupID: ''
                },
                errorMessage: null,
                groups: []
            }
        },
        created: async function () {
            try {
                let response = await FriendService.getFriend(this.friendId);
                this.friend = response.data;
                let groupResponse = await FriendService.getAllGroups();
                this.groups = groupResponse.data;
            }
            catch (error) {
                this.errorMessage = error;
            }
        },
        methods: {
            updateSubmit: async function () {
                try {
                    let response = await FriendService.updateFriend(this.friend, this.friendId);
                    if (response) {
                        return this.$router.push('/');
                    } else {
                        return this.$router.push(`/friends/edit/${this.friendId}`);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>
    .input {
        border: 1px solid black;
    }
</style>