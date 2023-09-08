import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Details from "./views/Details/Details";
import NotFound_404 from "./views/NotFound_404/NotFound_404";
import Favorites from "./views/Favorites/Favorites.jsx";
import Login from "./views/Login/Login";
import Nav from "./components/Nav/Nav.jsx";
// import Cards from "./components/Cards/Cards.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const backToHome = () => {
    navigate("/home");
  };

  const URL = "http://localhost:3001/rickandmorty/character/";
  // const URL = `https://rickandmortyapi.com/api/character/${id}`
  // const EMAIL = 'juanperez@hotmail.com';
  // const PASSWORD = 'cocoloco1';

  // const EMAIL = "ejemplo@gmail.com";
  // const PASSWORD = "1Password";

  //login antes de server
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //     return true;
  //   } else return false;
  //   // setAccess(true);
  //   // navigate('/home');
  // }

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      // const  accesso  = data.access;
      // setAccess(data);
      setAccess(access);
      access && navigate("/home");
      if (!access)
        alert("Revise los datos ingresados, email o password incorrectos");
    });
  }

  function logOut() {
    access && setAccess(false);
    setCharacters([]);
    navigate("/");
  }

  // useEffect(() => {
  //    !access && navigate('/');
  // }, [access, navigate]);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id, random = false) => {
    backToHome();
    if (random) {
      id = Math.floor(Math.random() * 826);
    }
    if (isNaN(id) || id === "") {
      window.alert("¡Ingrese un ID válido!");
    } else if (characters.filter((char) => char.id === +id).length > 0) {
      window.alert("¡Ya existe un personaje con este ID!");
    } else {
      console.log(URL + id);
      axios
        .get(URL + id)
        .then((response) => {
          // Success
          setCharacters((characters) => [...characters, response.data]);
        })
        .catch((error) => {
          // Error
          window.alert("¡No hay personajes con este ID!");
          console.log("Error", error.message);
        });

      //   fetch(`https://rickandmortyapi.com/api/character/${id}`)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       setCharacters((characters) => [...characters, data]);
      //     })
      //     .catch(window.alert("¡No hay personajes con este ID!"));
      //   //setCharacters(...characters, data]) ES LO MISMO
      //   // .catch((error) => window.alert());//"¡No hay personajes con este ID!"
      // }
    }

    // !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    const inputDOM = document.getElementById("id-input");
    inputDOM.value = "";
    // !NO DEBERIA MANIPULAR EL DOM
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  return (
    <div className="App">
      <div className="Presentacion">
        {/* <h1 className='Bienvenidos'> Rick and Morty</h1> */}
        <img
          className="LogoRickMorty"
          src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01-1536x726.png"
          alt="No encuentro la imagen"
        />
      </div>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        {/* <Route path="/" element={<Form login={login} PASSWORD_DEFAULT={PASSWORD} EMAIL_DEFAULT={EMAIL}/>}/> */}
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailId" element={<Details />} />
        {/* <Route path="/details/:DetailId" element={<Details characters={characters} />}/> */}
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </div>
  );
}

export default App;

// Función para obtener todos los personajes
// const onSearch = (id) => {
//    if (isNaN(id)) {
//      alert("Por favor, ingresa un número válido como ID.");
//      return;
//    }

//    axios(`https://rickandmortyapi.com/api/character/${id}`)
//      .then(({ data }) => {
//        if (data.name) {
//          const characterExists = characters.some(
//            (character) => character.id === data.id
//          );

//          if (characterExists) {
//            alert("Este personaje ya se encuentra en la lista.");
//          } else {
//            setCharacters((characters) => [...characters, data]);
//          }
//        } else {
//          alert(`¡No hay personajes con el ID proporcionado!`);
//        }
//      })
//      .catch((error) => {
//        alert(
//          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
//        );
//        console.error(error);
//      });
//  };
