import React, { useState, useEffect } from "react";
import Header from "../../components/Header.jsx";
import styled from "@emotion/styled";
import { getUserInfo, updateUserInfo, withdrawUser } from "../../apis/user/index.js"; // 사용자 API 호출을 임포트

const MyPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    is_staff: false,
    joined_at: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await getUserInfo();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleEditClick = async () => {
    if (isEditMode) {
      try {
        await updateUserInfo(user);
        alert('사용자 정보가 성공적으로 업데이트되었습니다.');
      } catch (error) {
        console.error('Failed to update user info:', error);
        alert('사용자 정보 업데이트에 실패했습니다.');
      }
    }
    setIsEditMode(!isEditMode);
  };

  const handleWithdrawClick = async () => {
    try {
      await withdrawUser();
      alert('회원 탈퇴가 성공적으로 처리되었습니다.');
      // 필요에 따라 추가 로직 (예: 로그아웃 처리, 홈 페이지로 이동 등)
    } catch (error) {
      console.error('Failed to withdraw user:', error);
      alert('회원 탈퇴에 실패했습니다.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <ProfileSection>
          <ProfileImage
            // 프로필이미지 인스턴스는 서버 API 수정시 추가하기
            // src={user.profileImage}
            alt={`${user.id}의 프로필`}
          />
          <InfoBox>
            {isEditMode ? (
              <>
                <LabelInputContainer>
                  <Label>닉네임</Label>
                  <Input
                    type="text"
                    name="id"
                    value={user.id}
                    onChange={handleInputChange}
                    isEditMode={isEditMode}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label>이메일</Label>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    isEditMode={isEditMode}
                  />
                </LabelInputContainer>
              </>
            ) : (
              <>
                <LabelInfoContainer>
                  <Label>닉네임</Label>
                  <UserName>{user.id}</UserName>
                </LabelInfoContainer>
                <LabelInfoContainer>
                  <Label>이메일</Label>
                  <UserInfo>{user.email}</UserInfo>
                </LabelInfoContainer>
                <LabelInfoContainer>
                  <Label>가입일</Label>
                  <Affiliation>{user.joined_at}</Affiliation>
                </LabelInfoContainer>
              </>
            )}
            <ConsentContainer>
              반례 출력 동의
              <ConsentOptions>
                <ConsentOption>
                  <RadioLabel>
                    동의
                    <RadioInput
                      type="radio"
                      name="consent"
                      value="yes"
                      disabled={!isEditMode}
                    />
                  </RadioLabel>
                </ConsentOption>
                <ConsentOption>
                  <RadioLabel>
                    비동의
                    <RadioInput
                      type="radio"
                      name="consent"
                      value="no"
                      disabled={!isEditMode}
                    />
                  </RadioLabel>
                </ConsentOption>
              </ConsentOptions>
            </ConsentContainer>
            <ButtonContainer>
              <CorrectionButton onClick={handleEditClick}>
                {isEditMode ? "저장하기" : "수정하기"}
              </CorrectionButton>
              <SecessionButton onClick={handleWithdrawClick}>
                탈퇴하기
              </SecessionButton>
            </ButtonContainer>
          </InfoBox>
        </ProfileSection>
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;
const InfoBox = styled.div`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserInfo = styled.p`
  margin: 5px 0;
`;
const Affiliation = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  flex-direction: column;
`;

const LabelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 8px;
  width: calc(100% - 16px);
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 15px;

  ${({ isEditMode }) =>
    isEditMode &&
    `
      padding: 12px; 
      font-size: 17px; 
      width: calc(100% - 24px); 
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const CorrectionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #43e5a0;
  color: white;
  flex: 1;
  margin-right: 10px;
`;

const SecessionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e01e1e;
  color: white;
  flex: 1;
`;

const RadioInput = styled.input`
  margin-left: 10px;
  margin-right: 5px;
`;

const ConsentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ConsentOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const ConsentOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;
