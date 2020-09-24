let rerenderEntireTree = () => {
    console.log('state was changed');
}


let state = {
    profilePage: {
        posts: [{
                id: 1,
                name: "Александр Котовсков",
                countLike: 333,
                countLook: 222,
                datePublick: "13 августа",
            },
            {
                id: 2,
                name: "Лул Кекович",
                countLike: 11,
                countLook: 22,
                datePublick: "12 сентября",
            },
        ],
        newPostText: 'keklul'
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Даров" },
            { id: 2, message: "Ну ты даешь" },
            { id: 3, message: "Бяк" },
            { id: 4, message: "Как ты" },
            { id: 5, message: "Привет" },
            { id: 6, message: "Подожди" },
        ],
        dialogs: [
            { id: 1, name: "Александр" },
            { id: 2, name: "Марти" },
            { id: 3, name: "Сергей" },
            { id: 4, name: "Кекыч" },
            { id: 5, name: "Валик" },
        ],
        newMessageBody: ' ',
    },
};


export const addPost = () => {
    let newPost = {
        id: 5,
        name: state.profilePage.newPostText,
        countLike: 0,
        countLook: 0,
        datePublick: "13 августа",
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ' ';
   rerenderEntireTree(state);
} 

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
} 

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;