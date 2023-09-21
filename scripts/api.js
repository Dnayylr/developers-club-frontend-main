// TODO: admin endpoint
const showDataAPI = async () => {
  const API = "https://developers-club-api.onrender.com/api/users";
  const response = await fetch(API);
  const transformData = await response.json();

  console.table(transformData);
};

// showDataAPI();

// TODO: user endpoint & save data user
const form = document.querySelector(".form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // TODO: Obtener datos del usuario del formulario
  const username = document.querySelector("#username").value;
  const numberControl = document.querySelector("#numberControl").value;
  const email = document.querySelector("#email").value;
  const question_one = document.querySelector("#question_one").value;
  const question_two = document.querySelector("#question_two").value;
  const question_tree = document.querySelector("#question_tree").value;
  const numberPhone = document.querySelector("#numberPhone").value;
  const carrera = document.querySelector("#carrera").value;
  
  // & Datos del usuario a envíar
  const user = {
    username: username,
    numberControl: numberControl,
    email: email,
    question_one: question_one,
    question_two: question_two,
    question_tree: question_tree,
    numberPhone: numberPhone,
    carrera: carrera,
  };

  console.log(user);
  try {
    const response = await fetch(
      "https://developers-club-api.onrender.com/api/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    // TODO: render data
    const responseData = await response.json();
    if (response.ok) {
      console.log("súbida de datos éxitosa!");
      console.log(responseData);
      username.value = "";
      numberControl.value = "";
      email.value = "";
      question_one.value = "";
      question_two.value = "";
      question_tree.value = "";
      numberPhone.value = "";
      carrera.value = "";
      window.location.reload();
    } else {
      console.log("error en la súbida de datos!", responseData.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// // TODO: admin endpoint
// const showDataAPI = async () => {
//   const API = "https://developers-club-api.onrender.com/api/users";
//   const response = await fetch(API);
//   const transformData = await response.json();

//   console.table(transformData);
// };

// // showDataAPI();

// // TODO: user endpoint & save data user
// const generateID = () => {
//   const timestamp = Date.now().toString(36);
//   const randomValue = Math.random().toString(36).substring(2, 5);

//   return `${timestamp} - ${randomValue}`;
// };

// const form = document.querySelector(".form");
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   // TODO: Obtener datos del usuario del formulario
//   const username = document.querySelector("#username").value;
//   const numberControl = document.querySelector("#numberControl").value;
//   const email = document.querySelector("#email").value;
//   const question_one = document.querySelector("#question_one").value;
//   const question_two = document.querySelector("#question_two").value;
//   const question_tree = document.querySelector("#question_tree").value;
//   const numberPhone = document.querySelector("#numberPhone").value;
//   const carrera = document.querySelector("#carrera").value;

//   const id = generateID() + username;

//   // & Datos del usuario a envíar
//   const user = {
//     _id: id,
//     username: username,
//     numberControl: numberControl,
//     email: email,
//     question_one: question_one,
//     question_two: question_two,
//     question_tree: question_tree,
//     numberPhone: numberPhone,
//     carrera: carrera,
//   };

//   console.log(user);
//   try {
//     const response = await fetch(
//       "https://developers-club-api.onrender.com/api/create",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       }
//     );

//     // TODO: render data
//     const responseData = await response.json();
//     if (response.ok) {
//       console.log("súbida de datos éxitosa!");
//       console.log(responseData);
//       username.value = "";
//       numberControl.value = "";
//       email.value = "";
//       question_one.value = "";
//       question_two.value = "";
//       question_tree.value = "";
//       numberPhone.value = "";
//       carrera.value = "";
//       window.location.reload();
//     } else {
//       console.log("error en la súbida de datos!", responseData.error);
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// // // TODO: admin endpoint
// // const showDataAPI = async () => {
// //   const API = "https://developers-club-api.onrender.com/api/users";
// //   const response = await fetch(API);
// //   const transformData = await response.json();

// //   console.table(transformData);
// // };

// // showDataAPI();

// // // TODO: user endpoint & save data user
// // const generateID = () => {
// //   const timestamp = Date.now().toString(36);
// //   const randomValue = Math.random().toString(36).substring(2, 5);

// //   return `${timestamp} - ${randomValue}`;
// // };

// // const form = document.querySelector(".form");
// // form.addEventListener("submit", async (e) => {
// //   e.preventDefault();

// //   // TODO: Obtener datos del usuario del formulario
// //   const username = document.querySelector("#username").value;
// //   const numberControl = document.querySelector("#numberControl").value;
// //   const email = document.querySelector("#email").value;
// //   const question_one = document.querySelector("#question_one").value;
// //   const question_two = document.querySelector("#question_two").value;
// //   const question_tree = document.querySelector("#question_tree").value;
// //   const numberPhone = document.querySelector("#numberPhone").value;
// //   const carrera = document.querySelector("#carrera").value;

// //   const id = generateID();

// //   // & Datos del usuario a envíar
// //   const user = {
// //     id: id,
// //     username: username,
// //     numberControl: numberControl,
// //     email: email,
// //     question_one: question_one,
// //     question_two: question_two,
// //     question_tree: question_tree,
// //     numberPhone: numberPhone,
// //     carrera: carrera,
// //   };

// //   console.log(user);
// //   try {
// //     const response = await fetch(
// //       "https://developers-club-api.onrender.com/api/create",
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(user),
// //       }
// //     );

// //     // TODO: render data
// //     const responseData = await response.json();
// //     if (response.ok) {
// //       console.log("súbida de datos éxitosa!");
// //       console.log(responseData);
// //       username.value = "";
// //       numberControl.value = "";
// //       email.value = "";
// //       question_one.value = "";
// //       question_two.value = "";
// //       question_tree.value = "";
// //       numberPhone.value = "";
// //       carrera.value = "";
// //       window.location.reload();
// //     } else {
// //       console.log("error en la súbida de datos!", responseData.error);
// //     }
// //   } catch (error) {
// //     throw new Error(error);
// //   }
// // });
