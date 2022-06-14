import { proxy } from 'valtio';

const state = proxy({
	users: [],
	rooms:[],
	userChats: [],
	currentUserId: '',
	currentChatId: '',
});

export { state };
