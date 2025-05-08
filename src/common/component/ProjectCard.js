import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e5e7eb;  // 💡 연한 회색 테두리 추가
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusBadge = styled.div`
  background-color: #e0edff;
  color: #2563eb;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
`;

const ViewCount = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const Title = styled.div`
  font-size: 15px;
  margin: 12px 0;
  line-height: 1.4;
  strong {
    font-weight: bold;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const Tag = styled.div`
  background-color: #f3f4f6;
  color: #374151;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 9999px;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const DetailButton = styled.button`
  padding: 6px 14px;
  font-size: 13px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  border-radius: 9999px;
  background: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #eff6ff;
  }
`;
const ProjectCard = () => {
  const title="애니메이션 큐레이션 - AniPick"
  const subtitle="사이드 프로젝트"
  const tags=['React', 'TypeScript']
  const date="2023.05.31"
  const views=238
  const status="진행중"
  return (
    <Card>
      <CardTop>
        <StatusBadge>{status}</StatusBadge>
        <ViewCount>👁 {views}</ViewCount>
      </CardTop>

      <Title>
        [{subtitle}] <strong>{title}</strong>
      </Title>

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
        <hr/>
      <CardBottom>
        <DateText>{date}</DateText>
        <DetailButton>상세보기</DetailButton>
      </CardBottom>
    </Card>
  );
};

export default ProjectCard;


