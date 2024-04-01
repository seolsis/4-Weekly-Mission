import { useState } from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import eyeOn from "@/src/assets/icons/eye-on.png";
import eyeOff from "@/src/assets/icons/eye-off.png";

export default function Input({ inputType = "password" }) {
  //errorCase, errorMessage, placeholder
  const [showPassword, setShowPassword] = useState(true);
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const ERROR_TEXT = "내용을 다시 작성해주세요";

  const toggleInputType = () => {
    setShowPassword(!showPassword);
  };

  const toggleImage = showPassword ? eyeOn : eyeOff;

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsError(newValue.trim() === "");
  };

  return (
    <>
      <div>
        <input
          className={styles.Input}
          placeholder="내용 입력"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        ></input>
        {inputType === "password" && (
          <button className={styles.ButtonToggle} onClick={toggleInputType}>
            <Image
              className={styles.ImageToggle}
              src={toggleImage}
              alt="비밀번호 보기/가리기."
            ></Image>
          </button>
        )}
        {isError && <p className={styles.ErrorText}>{ERROR_TEXT}</p>}
      </div>
    </>
  );
}

//email
//p 이메일 입력
//ec 입력값이 없을 때 em 이메일을 입력해 주세요.
//ec 형식이 이상할 때 em 올바른 이메일 주소가 아닙니다.
//ec 로그인 실패 em 이메일을 확인해 주세요.

//password
//p 비밀번호 입력
//ec 형식이 이상할 때 em 비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.
//ec 로그인 실패 em 비밀번호를 확인해 주세요.

//checkPassword
//p 비밀번호 확인
//ec 입력값이 없을 때 em 비밀번호를 입력해 주세요.
//ec 비밀번호가 다를 때 em 비밀번호가 일치하지 않습니다.
