import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers ( [
        { id: 1, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: false, fullname: "Лул Ожигов", status: "darova", location: {city: "Задрыщинск", country: "Россия"}},
      { id: 2, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: false, fullname: "Вадим Петушкин", status: "Cock", location: {city: "Москва", country: "Россия"}},
      { id: 3, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: true, fullname: "Гуру Мемов", status: "Запомните твари...Потом напомните", location: {city: "Москва", country: "Россия"}},
      { id: 4, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: true, fullname: "Orlun", status: "Hello", location: {city: "Oslo", country: "Norway"}},
    ])
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? 
                        <button onClick= { () => {props.unfollow(u.id)}}>unfollow</button> 
                        : 
                        <button onClick= { () => {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullname}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                        {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users