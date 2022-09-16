import styled from 'styled-components';

export const SidebarIcon = () => {
  return (
    <SSidebarIcon className="SidebarIcon">
      <SImg src="https://source.unsplash.com/xKms1imcGeA" alt="サイドバー画像" />
      <SP>sample@example.com</SP>
    </SSidebarIcon>
  );
}

const SSidebarIcon = styled.div`
  padding: 20px;
  padding-bottom: 15px;
  text-align: center;
`;

const SImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SP = styled.p`
  color: white;
  font-weight: 600;
  font-size: 13px;
`;
