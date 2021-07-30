//class instances
const chatroom = new Chatroom('gaming', 'shaun');

//get chats and render
chatroom.getChats((data) => {
	console.log(data);
});