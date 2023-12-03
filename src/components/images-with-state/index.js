import { useEffect, useState } from "react";

const ImagesWithState = () => {
    const [todoList, setTodoList] = useState();
    
    useEffect(()=> {
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then((res)=> {
            setTodoList(res);
        }).catch((err)=> {
            console.log(err);
        });
    }, []);

    return(
        <div>
            {todoList.map((todo, index)=> {
                return(
                    <p></p>
                )
            })}
        </div>
    )
}

export default ImagesWithState;