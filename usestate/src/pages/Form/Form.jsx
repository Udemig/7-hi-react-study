import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./form.css";
import FormInput from "../../components/FormInput/FormInput";
const Form = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);
  const [inputType, setInputType] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: new Date().getTime(),
      userName: name,
      userSurname: surname,
      userPassword: password,
    };

    //console.log(user)
    if (!name || !surname || !password) {
      alert("Tüm Alanları Doldurunuz");
    } else {
      setUsers([...users, user]);

      setName("");
      setSurname("");
      setPassword("");
    }
  };
  console.log(users);
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Form Alanı</h1>
        <FormInput
          value={name}
          label="İsim"
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          value={surname}
          label="Soy İsim"
          onChange={(e) => setSurname(e.target.value)}
        />
        <FormInput
          value={password}
          isIcon={true}
          type={inputType === true ? "password" : "text"}
          isShow={inputType}
          showPassword={() => setInputType(!inputType)}
          label={"Şifre"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          type="Submit"
          className={"formButton"}
          buttonTitle={"Gönder"}
          buttonType={"info"}
        />
      </form>

      <table className="table table-dark bg-dark">
        <thead>
          <th>İsim</th>
          <th>Soy İsim</th>
          <th>Şifre</th>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.userName}</td>
              <td>{user.userSurname}</td>
              <td>{user.userPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
