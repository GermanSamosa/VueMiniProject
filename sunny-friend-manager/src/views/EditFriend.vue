<template>
    <pre>{{friend}}</pre>
        <div class="container mt-3">
            <div class="row">
                <h3 class="title text-black fw-bold"><b>Edit Friend</b></h3>
            </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-4">
                        <form>
                            <div class="mb-2">
                                <input type="text" v-model="friend.name" class="input form-control" placeholder="Name" />
                            </div>
                            <div class="mb-2">
                                <input type="text" v-model="friend.photo" class="input form-control" placeholder="Photo URL" />
                            </div>
                            <div class="mb-2">
                                <input type="email" v-model="friend.email" class="input form-control" placeholder="Email" />
                            </div>
                            <div class="mb-2">
                                <input type="Number" v-model="friend.mobile" class="input form-control" placeholder="Mobile" />
                            </div>
                            <div class="mb-2">
                                <select class="input form-control">
                                    <option class="input" value=""></option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <input type="text" class="input form-control" placeholder="Company" />
                            </div>
                            <div class="mb-2">
                                <input type="Submit" class="btn btn-dark" value="Update Friend" />
                            </div>
                        </form>
                    </div>

                    <div class="col-md-4">
                        <img src="https://img.freepik.com/premium-vector/hand-drawn-vector-abstract-cartoon-flat-minimalistic-modern-graphic-girl-avatar-portrait-character-with-earrings-stock-illustration-art-isolated-white-background_200084-2586.jpg?w=2000" class="contact-img" alt="..." />
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
                friend: {},
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
        }
}
</script>

<style scoped>
    .input {
        border: 1px solid black;
    }
</style>