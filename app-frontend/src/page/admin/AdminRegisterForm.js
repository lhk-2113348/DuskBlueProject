import CommonRoot from "../../common/CommonRoot";
import { useEffect, useState } from "react";
import styled from "styled-components"; // styled-components 임포트
import Dialog from "../../common/Dialog";
import CommonButton from "../../common/CommonButton";
import axios from "axios";

const ButtonProps = {
  background: "#D95F03",
  width: "100px",
  height: "65px",
  fontSize: "25px",
  $borderColor: "#D95F03",
  $hoverColor: "#D95F03",
};
const FormProps = {
  padding: "10px",
  fontSize: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "80%",
  margin: "0 auto",
  boxSizing: "border-box",
  display: "block",
};

const ButtonContainer = styled.div`
  display: flex; // 가로로 배치
  justify-content: center; // 중앙 정렬
  gap: 20px; // 버튼 간격
  margin-top: 5px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 75px;
  display: block;
`;
const SoldOutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const RadioContainer = styled.div`
  display: flex;
  gap: 10%;
  margin-left: 75px;
`;
const FormCheckbox = styled.input`
  width: 10%;
`;
const FormInput = styled.input`
  ${FormProps};
`;
const FormTextArea = styled.textarea`
  ${FormProps};
  height: 100px;
`;
const FormSelect = styled.select`
  ${FormProps};
`;

const AdminRegisterForm = ({
  showForm,
  setShowForm,
  onMenuSubmit,
  selectedMenu,
  onMenuEdit,
}) => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false); //등록 성공
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  //메뉴 관련 상태
  const [formData, setFormData] = useState({
    menuName: "",
    menuPrice: "",
    menuDescription: "",
    menuImage: "",
    menuCategory: "",
    menuSubCategory: "",
    hotIce: "",
    soldOut: false,
  });

  const checkboxItems = {
    0: [
      // Beverage
      { label: "커피", value: "coffee" },
      { label: "논커피", value: "nonCoffee" },
      { label: "칵테일&와인", value: "cockTailWine" },
      { label: "위스키&맥주", value: "whiskeyBeer" },
    ],
    1: [
      //Dessert

      { label: "레어크림치즈 & 케이크&아이스크림", value: "dessert1" },
      { label: "티라미수&스콘&크로플&안주", value: "dessert2" },
    ],
    2: [
      //Season

      { label: "봄&가을", value: "spring" },
      { label: "여름", value: "summer" },
      { label: "겨울", value: "winter" },
    ],
  };

  useEffect(() => {
    if (selectedMenu) {
      setFormData({
        menuName: selectedMenu.menuName,
        menuPrice: selectedMenu.menuPrice,
        menuDescription: selectedMenu.menuDescription,
        menuCategory: selectedMenu.menuCategory,
        menuSubCategory: selectedMenu.menuSubCategory || "",
        menuImage: selectedMenu.menuImage || null,
        soldOut: selectedMenu.soldOut || false,
        hotIce: selectedMenu.hotIce || "",
      });
    }
  }, [selectedMenu]);

  //등록 폼 닫기
  const handleCloseForm = () => {
    setShowForm(false);
  };
  //성공 다이어로그 닫기
  const handleClose = () => {
    setShowSuccessDialog(false);
    setShowEditDialog(false);
    handleCloseForm();
  };
  const handleFailClose = () => {
    setShowErrorDialog(false);
  };
  //카테고리 변경
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 파일 입력 처리
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e.target.files[0], // 선택된 파일을 formData에 반영
      }));
    } else if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked, // 체크박스 처리
      }));
    } else if (type === "radio") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // 라디오 버튼 처리
      }));
    } else {
      // 일반 input 필드 처리
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // 기본적으로 value 값 반영
      }));
    }
  };

  const handleCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      soldOut: !prevState.soldOut,
    }));
  };
  //등록
  const {
    menuName,
    menuPrice,
    menuDescription,
    menuCategory,
    menuSubCategory,
  } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();

    // 오류가 없으면 다이얼로그 표시 (유효성 검증 코드 넣기)
    if (
      !menuName ||
      !menuPrice ||
      !menuDescription ||
      !menuCategory ||
      !menuSubCategory
    ) {
      setShowErrorDialog(true);
      return;
    }

    //메뉴 데이터 넣기
    const newMenu = {
      ...formData,
      id: selectedMenu ? selectedMenu.id : new Date().getTime(),
    };
    axios
      .post("/api/menus", newMenu)
      .then((response) => {
        setShowSuccessDialog(true); // 성공 다이얼로그
        resetForm();
      })
      .catch((error) => {
        setShowErrorDialog(true); // 실패 다이얼로그
        console.error("메뉴 등록 실패:", error);
      });

    if (selectedMenu) {
      onMenuSubmit(newMenu);
      console.log("등록된 메뉴:", newMenu);
      setShowSuccessDialog(true);
      resetForm();
    }
  };
  //수정
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (
      !menuName ||
      !menuPrice ||
      !menuDescription ||
      !menuCategory ||
      !menuSubCategory
    ) {
      setShowErrorDialog(true);
      return;
    }

    const updatedMenu = {
      ...formData,
      id: selectedMenu ? selectedMenu.id : new Date().getTime(),
    };

    axios
      .put(`/api/menus/${selectedMenu.id}`, updatedMenu)
      .then((response) => {
        setShowEditDialog(true); // 수정 성공 다이얼로그
        resetForm();
      })
      .catch((error) => {
        setShowErrorDialog(true); // 실패 다이얼로그
        console.error("메뉴 수정 실패:", error);
      });
  };

  //폼리셋
  const resetForm = () => {
    setFormData({
      menuName: "",
      menuPrice: "",
      menuDescription: "",
      menuCategory: "",
      menuSubCategory: "",
      menuImage: null,
      soldOut: false,
      hotIce: "",
    });
  };

  const categoryOptions = [
    { value: "", label: "카테고리를 선택하세요" },
    { value: 0, label: "Drinks" },
    { value: 1, label: "Dessert" },
    { value: 2, label: "Season" },
  ];

  const inputFields = [
    {
      type: "file",
      label: "이미지 등록",
      name: "menuImage",
      value: formData.menuImage,
      onChange: handleChange,
    },
    {
      type: "text",
      label: "메뉴 이름",
      name: "menuName",
      value: formData.menuName,
      onChange: handleChange,
    },
    {
      label: "가격",
      name: "menuPrice",
      value: formData.menuPrice,
      onChange: handleChange,
      type: "number",
    },
    {
      label: "설명",
      name: "menuDescription",
      value: formData.menuDescription,
      onChange: handleChange,
      type: "textarea",
    },
  ];

  const buttonConfigs = [
    {
      type: "submit",
      text: "등록",
      onClick: handleSubmit,
    },
    {
      type: "submit",
      text: "수정",
      onClick: handleEditSubmit,
    },
    {
      type: "button",
      text: "닫기",
      onClick: handleCloseForm,
    },
  ];

  const dialogMap = {
    success: {
      title: "등록 성공",
      content: "메뉴가 성공적으로 등록되었습니다.",
      onClose: handleClose,
    },
    edit: {
      title: "수정 성공",
      content: "메뉴가 성공적으로 수정되었습니다.",
      onClose: handleClose,
    },
    error: {
      title: "모든 필드를 채워주세요",
      content: "모든 필드를 입력해야 합니다.",
      onClose: handleFailClose,
    },
  };
  const activeDialog = showEditDialog
    ? dialogMap.edit
    : showSuccessDialog
    ? dialogMap.success
    : showErrorDialog
    ? dialogMap.error
    : null;
  return (
    <CommonRoot>
      <Dialog open={showForm} title="메뉴 등록" onClose={handleCloseForm}>
        <FormContainer onSubmit={handleSubmit}>
          {inputFields.map(({ label, value, onChange, type, name }, index) => (
            <div key={index}>
              <FormLabel>{label}</FormLabel>
              {type === "file" ? (
                <FormInput
                  name={name}
                  type="file"
                  accept="image/*"
                  onChange={onChange} // handleChange로 연결
                />
              ) : type === "textarea" ? (
                <FormTextArea
                  name={name}
                  value={value || ""}
                  onChange={onChange} // handleChange로 연결
                />
              ) : (
                <FormInput
                  name={name}
                  type={type}
                  value={value || ""}
                  onChange={onChange} // handleChange로 연결
                />
              )}
            </div>
          ))}
          <FormLabel>메뉴 카테고리</FormLabel>
          <FormSelect
            name="menuCategory"
            value={formData.menuCategory}
            onChange={handleChange}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormSelect>
          <RadioContainer>
            {formData.menuCategory &&
              checkboxItems[formData.menuCategory].map((item) => (
                <label key={item.value}>
                  <input
                    type="radio"
                    name="menuSubCategory" // 이름을 카테고리마다 다르게 설정
                    value={item.value}
                    onChange={handleChange}
                    checked={formData.menuSubCategory === item.value} // 선택된 하위 메뉴 체크
                  />
                  {item.label}
                </label>
              ))}
          </RadioContainer>
          <FormLabel>Hot&Ice</FormLabel>
          <RadioContainer>
            {["Hot", "Ice", "Hot&Ice"].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="hotIce"
                  value={value}
                  onChange={handleChange}
                  checked={formData.hotIce === value}
                />
                {value}
              </label>
            ))}
          </RadioContainer>
          <SoldOutContainer>
            <FormLabel>SoldOut</FormLabel>

            {/* SoldOut 체크박스 추가 */}
            <FormCheckbox
              type="checkbox"
              checked={formData.soldOut}
              onChange={handleCheckboxChange}
            />
          </SoldOutContainer>
          <ButtonContainer aria-hidden="true">
            {buttonConfigs.map(({ type, text, onClick }, index) => (
              <CommonButton
                key={index}
                type={type}
                {...ButtonProps}
                text={text}
                onClick={onClick}
              />
            ))}
          </ButtonContainer>
        </FormContainer>
      </Dialog>

      {/*등록 성공/실패 다이어로그*/}
      {activeDialog && (
        <Dialog
          open={true}
          title={activeDialog.title}
          onClose={activeDialog.onClose}
          width="60%"
          backgroundColor="black"
          color="white"
        >
          <ButtonContainer>
            <CommonButton
              text="확인"
              onClick={activeDialog.onClose}
              {...ButtonProps}
            />
          </ButtonContainer>
        </Dialog>
      )}
    </CommonRoot>
  );
};
export default AdminRegisterForm;
