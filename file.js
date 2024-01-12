const fs = require("fs");

const create = (data) => {
  fs.readFile("input.json", "utf-8", function (err, json) {
    if (err) {
      return console.error(err);
    }
    const previousData = JSON.parse(json);
    previousData.push(data);
    // console.log(previousData);
  });
};

create({
  id: 11,
  first_name: "Bilguun",
  last_name: "Batchuluun",
  email: "Billy0@storify.com",
  gender: "Male",
  ip_address: "43.66.94.194",
});

// const update = (id, data) => {
//   fs.readFile('imput.json', 'utf-8', (err, json)=>{
//     if(err) return console.error(err);

//     const previousData-JSON.parse(json);
//     const previousData.find((element)=>element.id===id)
//   })
// };

// const delet = (id) => {
//   fs.readFile("input.json", "utf-8", (err, json) => {
//     if (err) console.log("errror:", err);
//     const data = JSON.parse(json);
//     const newArr = data.filter((info) => info.id !== id);
//     console.log(newArr);
//   });
// };
// delet(2);
