import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MegaMenu from "./MegaMenu";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

export default function About() {
  const [user, setUser] = useState({});
  const [newPasswordFirst, setNewPasswordFirst] = useState("");
  const [newPasswordSecond, setNewPasswordSecond] = useState("");

  async function getUser() {
    try {
      const response = await axios.get("https://dummyjson.com/users/1");
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function changePassword() {
    fetch("https://dummyjson.com/users/1", {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: newPasswordFirst,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log("newPasswordFirst", newPasswordFirst);
    console.log("newPasswordSecond", newPasswordSecond);
  }, [newPasswordFirst, newPasswordSecond]);

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <MegaMenu />
      <div className="">
        <div className="border-solid border-2 h-16 w-full rounded-md border-gray">
          <div className="kullanicibilgilerim font-bold text-lg m-4 ">
            Kullanıcı Bilgilerim{" "}
          </div>
        </div>
        <div className="flex">
          <div className="user-form mt-4 border-solid border-2  w-full rounded-md border-gray">
            <h1 className="text-orange-400 m-4 font-bold text-sm">
              Üyelik Bilgilerim
            </h1>
            <form className="">
              <div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Ad</label>
                  <label className="m-40 font-bold text-sm">Soyad</label>
                </div>
                <div className="">
                  <input
                    className="border-solid border-2 m-4 h-8 text-sm rounded-md bg-[#FBFBFB]"
                    value={user.firstName}
                  ></input>
                  <input
                    className="border-solid border-2 h-8 m-4 text-sm rounded-md bg-[#FBFBFB] "
                    value={user.lastName}
                  ></input>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">E-mail</label>
                </div>
                <div>
                  <input
                    className="border-solid border-2 w-10/12 h-8 m-4 text-sm rounded-md bg-[#FBFBFB]"
                    value={user.email}
                  ></input>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Cep Telefonu</label>
                </div>
                <div className="flex">
                  <select class="text-gray-900 text-sm rounded border-solid h-8 m-4 bg-[#FBFBFB] ">
                    <option selected>+90</option>
                    <option>+49</option>
                    <option>+43</option>
                    <option>+994</option>
                    <option>+32</option>
                  </select>
                  <input className="border-solid border-2 w-10/12  h-8 m-4 text-sm rounded-md bg-[#FBFBFB]"></input>
                  <button
                    type="button"
                    class=" justify-center item-center text-white bg-orange-400  font-medium rounded-lg text-sm h-8 mt-4 mx-1 px-2 "
                  >
                    Güncelle
                  </button>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">
                    Doğum Tarihiniz
                  </label>
                </div>
                <div className="flex">
                  <select class="text-gray-900 text-sm rounded border-solid h-8 w-full m-4 bg-[#FBFBFB] ">
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                  </select>
                  <select class="text-gray-900 text-sm rounded border-solid h-8 w-full m-4 bg-[#FBFBFB] ">
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select class="text-gray-900 text-sm rounded border-solid h-8 w-full m-4 bg-[#FBFBFB] ">
                    <option selected>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                  </select>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Cinsiyet</label>
                </div>
                <div className="flex">
                  <div class=" flex justify-center items-center m-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-orange-400  rounded focus:ring-orange-400 "
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-black "
                    >
                      Kadın
                    </label>
                  </div>
                  <div class=" flex justify-center items-center m-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-orange-400  rounded focus:ring-orange-400 "
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-black "
                    >
                      Erkek
                    </label>
                  </div>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Kurumsal</label>
                </div>
                <div className="flex">
                  <div class=" flex justify-center items-center m-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-orange-400  rounded focus:ring-orange-400 "
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm  text-black "
                    >
                      İş yeri alışverişlerim için fırsatlardan haberdar olmak
                      istiyorum.
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="border border-orange-400 text-black hover:bg-orange-400 font-medium rounded-lg text-sm h-8 mt-4 mx-1 px-2 w-10/12 ml-12 "
                  >
                    Güncelle
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="user-form mt-4 border-solid border-2 w-full rounded-md border-gray">
            <h1 className="text-orange-400 m-4 font-bold text-sm">
              Şifre Güncelleme
            </h1>
            <form className="w-full">
              <div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Şu Anki Şifre</label>
                </div>
                <div className="flex">
                  <input className="border-solid border-2 w-10/12 m-4 h-12 text-sm rounded-md bg-[#FBFBFB]"></input>
                  <AiFillEye className="-ml-2 mt-5 h-8 w-8" />
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">Yeni Şifre</label>
                </div>
                <div className="flex">
                  <input
                    className="border-solid border-2 w-10/12 h-12 m-4 text-sm rounded-md bg-[#FBFBFB]"
                    onChange={(e) => setNewPasswordFirst(e.target.value)}
                  />
                  <AiFillEye className="-ml-2 mt-5 h-8 w-8" />
                </div>
                <div>
                  <label className="m-4 text-sm">
                    Şifreniz en az 7 karakter ve en fazla 64 karakter olmalı,
                    harf ve rakam içermelidir.
                  </label>
                </div>
                <div className="">
                  <label className="m-4 font-bold text-sm">
                    Yeni Şifre Tekrar
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="border-solid border-2 w-10/12 h-12 m-4 text-sm rounded-md bg-[#FBFBFB]"
                    onChange={(e) => setNewPasswordSecond(e.target.value)}
                  />
                  <AiFillEye className="-ml-2 mt-5 h-8 w-8" />
                </div>
                <div>
                  <button
                    type="button"
                    class=" border border-none  text-black hover:bg-[orange-400] bg-[#DDDDDD] font-medium rounded-lg text-sm h-12 mt-4 mx-1 px-2 w-10/12 ml-5 "
                    onClick={changePassword}
                  >
                    Güncelle
                  </button>
                </div>
                <div className="flex justify-between w-10/12 rounded-md mt-4 ml-5  bg-[#DDDDDD]">
                  <div className="ml-4 py-4">
                    <label className="font-bold ">İKİ ADIMLI DOĞRULAMA</label>
                    <p className="text-xs">
                      İki adımlı doğrulama yöntemini etkinleştirdiğinizde,
                    </p>
                    <p className="text-xs">
                      kişisel şifrelerinize ek olarak kayıtlı cep telefonunuza{" "}
                    </p>
                    <p className="text-xs">
                      gelen doğrulama koduyla oturum açarsınız.
                    </p>
                  </div>
                  <div className="mt-8 mr-4">
                    <label class="relative  items-center cursor-pointer  ">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-400 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pink-900 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-400"></div>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
