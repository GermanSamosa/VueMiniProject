<template>
    <div class="container mt-3">
        <div class="row">
            <h3 class="title text-black fw-bold"><b>Add Friend</b></h3>
        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4">
                    <form @submit.prevent="submitCreate()">
                        <div class="mb-2">
                            <input v-model="friend.name" type="text" class="input form-control" placeholder="Name" />
                        </div>
                        <div class="mb-2">
                            <input v-model="friend.photo" type="text" class="input form-control" placeholder="Photo URL" />
                        </div>
                        <div class="mb-2">
                            <input type="email" v-model="friend.email" class="input form-control" placeholder="Email" />
                        </div>
                        <div class="mb-2">
                            <input type="Number" v-model="friend.mobile" class="input form-control" placeholder="Mobile" />
                        </div>
                        <div class="mb-2">
                            <select class="input form-control" v-if="groups.length>0">
                                <option class="input" v-for="group of groups"
                                       :key="group.id" :value="group.id">{{group.name}}</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <input type="text" v-model="friend.company" class="input form-control" placeholder="Company" />
                        </div>
                        <div class="mb-2">
                            <input type="Submit" class="btn btn-dark" value="Create Friend" />
                        </div>
                    </form>
                </div>
                
                <div class="col-md-4">
                    <div v-if="friend.photo">
                        <img :src="friend.photo" class="contact-img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { FriendService } from "../../services/FriendService"

export default {
        name: "AddFriend",
        data: function () {
            return {
                friend: {
                    name: '',
                    company: '',
                    email: '',
                    mobile: '',
                    photo: '',
                    groupID: ''
                },
                groups : []
            }
        },
        created: async function () {
            try {
                let response = await FriendService.getAllGroups();
                this.groups = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        methods: {
            submitCreate: async function () {
                try {
                    let response = await FriendService.createFriend(this.friend);
                    if (response) {
                        return this.$router.push('/');
                    } else {
                        return this.$router.push('/friends/add');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
}
</script>

<style scoped>
    .input{
        border: 1px solid black;
    }
</style>