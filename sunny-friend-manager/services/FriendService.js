import axios from 'axios';

export class FriendService {
	static serverUrl = `http://localhost:9000`;

	static getALLFriends() {
		let dataURL = `${this.serverUrl}/friends`;
		return axios.get(dataURL);
	}

	static getFriend(friendId) {
		let dataURL = `${this.serverUrl}/friends/${friendId}`;
		return axios.get(dataURL);
	}

	static createFriend(friend) {
		let dataURL = `${this.serverUrl}/friends`;
		return axios.post(dataURL, friend);
	}

	static updateFriend(friend, friendId) {
		let dataURL = `${this.serverUrl}/friends/${friendId}`;
		return axios.put(dataURL, friend);
	}

	static deleteFriend(friendId) {
		let dataURL = `${this.serverUrl}/friends/${friendId}`;
		return axios.delete(dataURL);
	}

	static getAllGroups() {
		let dataURL = `${this.serverUrl}/groups`;
		return axios.get(dataURL);
	}

	static getGroup(friend) {
		let groupId = friend.groupID;
		let dataURL = `${this.serverUrl}/groups/${groupId}`;
		return axios.get(dataURL);
	}
}