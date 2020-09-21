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
    },
};

export default state;