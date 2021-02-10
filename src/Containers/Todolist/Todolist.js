import React, { useEffect, useState } from "react";
import axios from "axios";
import Addtodo from "../../Components/Addtodo/Addtodo";
import Displaytodo from "../../Components/Displaytodo/Displaytodo";
import "./Todolist.css";
import Spinner from "../../Components/Spinner/Spinner";

const AXIOS_URL = "https://blog-mirafal-default-rtdb.firebaseio.com/";

const Todolist = () => {
  const [todo, setTodo] = useState({
    description: "",
  });
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  //
  axios.interceptors.request.use((req) => {
    console.log("[in request interceptor]", req);
    return req;
  });

  axios.interceptors.response.use(
    (res) => {
      console.log("[in response interceptor]", res);
      setLoading(false);
      return res;
    },
    (err) => {
      console.log("[ in response ERR interceptor]", err);
    }
  );
  //

  useEffect(() => {
    const getTaskList = async () => {
      const response = await axios.get(`${AXIOS_URL}/task.json`);
      const fetchedData = [];
      if (response.data !== null) {
        for (let key in response.data) {
          fetchedData.unshift({
            ...response.data[key],
            id: key,
          });
        }
        // setLoading(false);
        setTaskList(fetchedData);
      }
    };

    getTaskList().catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTask = async (event) => {
    event.preventDefault();
    const taskObj = {
      ...todo,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    try {
      await axios.post(`${AXIOS_URL}/task.json`, taskObj);
    } finally {
      setTodo({ description: "" });
    }
    window.location.reload();
  };

  const deleteTask = async (taskId) => {
    await axios
      .delete(`${AXIOS_URL}/task/${taskId}.json`)
      .then((response) => response);
    window.location.reload();
  };

  return (
    <div className="TodoList">
      <Addtodo
        description={todo.description}
        changeFunction={handleChange}
        add={addTask}
      />
      {loading && <Spinner />}
      {taskList.map((task) => {
        return (
          <Displaytodo
            key={task.id}
            description={task.description}
            created={task.createdAt}
            remove={() => deleteTask(task.id)}
          />
        );
      })}
    </div>
  );
};

export default Todolist;