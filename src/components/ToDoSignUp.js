import React, { useState } from "react";
import Footer from "../static/Footer";
import { useNavigate } from "react-router-dom";
const ToDoSignUp = () => {
  const details = {
    firstName: "",
    lastName: "",
    email: "",
    languages: [],
    feedback: "",
    gender: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(details);
  const submitSignUpForm = (e) => {
    e.preventDefault();
    // userData(user);
    console.log(user);
    navigate("/add-todo");
  };

  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <h1 className="mb-2 text-4xl text-gray-700 font-serif font-semibold ">
          SIGN-UP
        </h1>
        <form onSubmit={submitSignUpForm} id="userDetails">
          <div className="border-4 p-3 border-solid  border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <label className="text-gray-700 font-serif font-semibold mr-2">
              First Name:
            </label>
            <input
              type="text"
              className="ml-9 w-1/2 rounded-md text-center"
              placeholder="Enter first name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              required
            />
          </div>
          <div className="border-4  p-3 border-solid border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <label className="text-gray-700 font-serif font-semibold mr-2">
              Last Name:
            </label>
            <input
              type="text"
              className="ml-10 w-1/2 rounded-md text-center"
              placeholder="Enter last name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              required
            />
          </div>
          <div className="border-4 p-3 border-solid border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <label className="text-gray-700 font-serif font-semibold mr-2">
              Gender:
            </label>
            <select
              className="ml-16 rounded-xl w-2/4 p-2 text-sm"
              name="Gender"
              id="Gender"
              form="userDetails"
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option disabled selected>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="border-4 p-3 border-solid border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <fieldset>
              <div className="flex justify-between">
                <legend className="text-gray-700 font-serif font-semibold">
                  Language:
                </legend>
                <label className="flex flex-col text-center font-serif text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="Language"
                    value="English"
                    id="English"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        languages: [...user.languages, e.target.value],
                      })
                    }
                    className="peer"
                  />
                  <span className="peer-checked:text-gray-800">English</span>
                </label>
                <label className="flex flex-col text-center font-serif text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="Language"
                    value="Hindi"
                    id="Hindi"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        languages: [...user.languages, e.target.value],
                      })
                    }
                    className="peer"
                  />
                  <span className="peer-checked:text-gray-800">Hindi</span>
                </label>
                <label className="flex flex-col text-center font-serif text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="Language"
                    value="Tamil"
                    id="Tamil"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        languages: [...user.languages, e.target.value],
                      })
                    }
                    className="peer"
                  />
                  <span className="peer-checked:text-gray-800">Tamil</span>
                </label>
                <label className="flex flex-col text-center font-serif text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="Language"
                    value="Telugu"
                    id="Telugu"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        languages: [...user.languages, e.target.value],
                      })
                    }
                    className="peer"
                  />
                  <span className="peer-checked:text-gray-800">Telugu</span>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="text-center text-gray-700 font-serif font-bold border-4 p-3 border-solid border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <label for="email">Enter your email address:</label>
            <input
              type="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              size="30"
              className="m-1 w-3/4 rounded-lg p-2 font-thin font-serif"
              placeholder="sumit@example.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="border-4 p-3 border-solid border-indigo-200 border-b-indigo-400 hover:border-indigo-500 rounded-2xl bg-gray-300">
            <textarea
              className="w-full rounded-lg p-2 font-thin font-serif text-gray-500"
              rows="3"
              name="feedback"
              id="feedback"
              placeholder="Enter your feedback here..."
              value={user.feedback}
              onChange={(e) => setUser({ ...user, feedback: e.target.value })}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-cyan-400 to-blue-700 hover:form-cyan-600 hover:to-blue-900 text-white font-bold py-3 px-9 rounded-full m-2 focus:from-blue-700"
              type="submit"
            >
              SIGN-UP
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ToDoSignUp;

// registrationform

// 	firstname
// 	lastname
// 	gender - male,female and others
// 	languages known--english,hindi,telugu,tamil
// 	feedback
// 	email

//pass the name and greeting on the first page
