import styled from "styled-components";
import CommonRoot from "../../common/CommonRoot";
import { useEffect, useState } from "react";
import CommonButton from "../../common/CommonButton";
import AdminRegisterForm from "../admin/AdminRegisterForm";

const ButtonContainer = styled.div`
  display: flex; // 가로로 배치
  justify-content: center; // 중앙 정렬
  gap: 10px; // 버튼 간격
  margin-top: 10px;
`;
const ButtonProps = {
  background: "white",
  color: "black",
  width: "100px",
  height: "65px",
  fontSize: "25px",
  $borderColor: "#ddd",
  $hoverColor: "#D95F03",
};
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 100%;
  border-collapse: collapse; /* 테이블 셀 간 경계선 합침 */
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 25px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 25px;
  text-align: center;
`;
const TableTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const SearchInput = styled.input`
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const PageButtonProp = {
  backgroundColor: "white",
  border: "transparent",
  padding: "10px",
  fontSize: "20px",
  cursor: "pointer",
};
const PaginationButton = styled.button`
  background-color: white;
  color: black;
  &:hover {
    background-color: #f2f2f2;
  }
  ${PageButtonProp}
`;
const PageNumberButton = styled.button`
  ${PageButtonProp}
  color: ${({ $active }) => ($active ? "#d95f03" : "black")};
  &:hover {
    color: #d95f03;
  }
`;
const AdminMenuManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null); // 수정할 메뉴 선택
  const [menuList, setMenuList] = useState([]); // 메뉴 리스트 상태 관리
  const [nextId, setNextId] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredMenuList, setFilteredMenuList] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPage = 10;

  const categoryLabels = {
    0: "Drinks",
    1: "Dessert",
    2: "Season",
    // 추가 카테고리
  };
  const tableHeaders = [
    "SoldOut",
    "이미지",
    "메뉴 이름",
    "가격",
    "설명",
    "카테고리",
    "Hot&Ice",
    "수정/삭제",
  ];
  useEffect(() => {
    if (search === "") {
      setFilteredMenuList(menuList);
    } else {
      const filtered = menuList.filter((item) => {
        const menuName = item.menuName.toLowerCase();
        return menuName.includes(search.toLowerCase());
      });
      setFilteredMenuList(filtered);
    }
  }, [search, menuList]);
  const currentItems = filteredMenuList.slice(
    (currentPage - 1) * itemsPage,
    currentPage * itemsPage
  );
  const totalPages = Math.ceil(filteredMenuList.length / itemsPage);
  // 폼 열기/닫기
  const handleFormClick = (menu = null) => {
    setSelectedMenu(menu); // 선택된 메뉴를 폼에 전달
    setShowForm(true); // 폼 열기
  };

  const handleEditMenu = (updatedMenu) => {
    setMenuList((prevList) =>
      prevList.map(
        (menu) => (menu.id === updatedMenu.id ? updatedMenu : menu) // id 기준으로 수정
      )
    );
    setShowForm(false); // 폼 닫기
    setSelectedMenu(null);
  };

  const handleAddMenu = (newMenu) => {
    const newMenuWithId = { ...newMenu, id: nextId };
    setMenuList((prevList) => [...prevList, newMenuWithId]); // 새로운 메뉴 추가
    setNextId((prevId) => prevId + 1);
    setShowForm(false); // 폼 닫기
  };

  // 메뉴 삭제
  const handleDeleteMenu = (menuId) => {
    setMenuList((prevList) => prevList.filter((menu) => menu.id !== menuId));
  };

  return (
    <CommonRoot>
      <TableContainer>
        <TableTitle>메뉴 등록</TableTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="메뉴 이름으로 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // 실시간 검색어 입력
          />
        </SearchContainer>

        <Table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableData>{item.soldOut ? "SoldOut" : ""}</TableData>

                  <TableData>
                    {item.menuImage ? (
                      <img
                        src={item.menuImage}
                        alt={item.menuImage}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      "이미지 없음"
                    )}
                  </TableData>
                  <TableData>{item.menuName}</TableData>
                  <TableData>{item.menuPrice}원</TableData>
                  <TableData>{item.menuDescription}</TableData>
                  <TableData>
                    {categoryLabels[item.menuCategory] || item.menuCategory}
                  </TableData>
                  <TableData>{item.hotIce}</TableData>
                  <TableData>
                    <ButtonContainer>
                      <CommonButton
                        text="수정"
                        {...ButtonProps}
                        onClick={() => handleFormClick(item)}
                      />
                      <CommonButton
                        text="삭제"
                        {...ButtonProps}
                        onClick={() => handleDeleteMenu(item.id)}
                      />
                    </ButtonContainer>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan="8" style={{ textAlign: "center" }}>
                  등록된 메뉴가 없습니다.
                </TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
        <ButtonContainer>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </PaginationButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumberButton
              key={index}
              $active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageNumberButton>
          ))}
          <PaginationButton
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            다음
          </PaginationButton>
        </ButtonContainer>

        <ButtonContainer>
          <CommonButton
            text="등록"
            {...ButtonProps}
            onClick={handleFormClick}
          />
        </ButtonContainer>
        <AdminRegisterForm
          showForm={showForm}
          setShowForm={setShowForm}
          onMenuSubmit={handleAddMenu}
          onMenuEdit={handleEditMenu}
          selectedMenu={selectedMenu}
        />
      </TableContainer>
    </CommonRoot>
  );
};
export default AdminMenuManager;
