# JMP
<img width="2364" height="1130" alt="Image" src="https://github.com/user-attachments/assets/f396f0d2-aa4f-4932-94d7-a4c658107053" />

---

## 📌 프로젝트 개요

**개발 기간** : 2025/03 ~ 2025/07  
**프로젝트 목표** :  
- 학생은 **실무 경험**을 쌓고 **포트폴리오**를 만들 수 있음  
- 기업은 **잠재적 인재를 테스트 및 발굴**할 수 있는 실질적 교류의 장 제공  

---

## 👥 팀 구성

| Name   | Position | GitHub / Blog |
|--------|----------|----------------|
| 김진태 | BE(팀장) | [GitHub]() |
| 표선영 | FE | [GitHub]() |
| 김주은 | FE | [GitHub]() |
| 강전하 | FE | [GitHub]() |

---

## 🔧 기술 스택

### Frontend
- HTML, CSS, JavaScript, React, Redux Toolkit, Axios
- React-Toastify, Formik, Yup, Framer Motion
- React-Select, React-Daum-Postcode

### Backend
- Spring Boot, Spring Security
- Spring Data JPA, MySQL
- JWT, SSE, Gemini API

### Collaboration & Tools
- Git, GitHub, Notion, Figma, Postman, VS Code, IntelliJ, Draw.io

---

## 🌐 배포 / 외부 링크

- **Notion 전체 문서** : [노션 바로가기](https://www.notion.so/1b487aecf1708010a97efba95f28007e?pvs=21)  
- **시연 영상 (YouTube)** : [보러가기](https://www.youtube.com/watch?v=EwVfLDis304)  
- **GitHub Repo**
  - [Frontend]()
  - [Backend]()

---

## 📒 화면 구성

### 메인페이지
<img width="1904" height="936" alt="Image" src="https://github.com/user-attachments/assets/f6167ba9-30c0-4f3b-9798-ed26eceb8ef7" />
<img width="1741" height="784" alt="Image" src="https://github.com/user-attachments/assets/df4a92fc-a6c8-46b0-befb-dc299261be4b" />
---

### 회원가입 & 로그인
| 개인 회원가입 | 기업 회원가입 | 로그인 |
|---------------|---------------|------------|
|<img width="801" height="916" alt="Image" src="https://github.com/user-attachments/assets/4a9fd9d3-2bf4-479b-9f3b-1fda04bf43ba" />  | <img width="656" height="922" alt="Image" src="https://github.com/user-attachments/assets/583d131a-c82b-4460-9e41-72ff3eef6204" /> | <img width="700" height="400" alt="Image" src="https://github.com/user-attachments/assets/d4893de7-ee2f-43a5-9324-9eb2f7efe0fc" /> |

---

### 마이페이지
| 지원한 프로젝트 | 이력서 관리 | 이력서 관리 | 이력서 관리 |
|----------------|------------|
| ![](./assets/mypage_apply.png) | ![](./assets/mypage_resume.png) |

---

### 이력서 등록
![](./assets/resume_upload.png)

---

### AI 프로젝트 매칭
![](./assets/ai_matching.gif)

---

### 관리자 페이지
![](./assets/admin.gif)

---

### 커뮤니티
| 게시글 CRUD | 태그 & 페이징 | 댓글 |
|-------------|---------------|------|
| ![](./assets/community_crud.gif) | ![](./assets/community_tags.gif) | ![](./assets/community_comment.gif) |

---

## 🧑‍💻 주요 기능

- 회원 관리
  - 기업/일반 회원가입, JWT 로그인/로그아웃/재발급, 마이페이지
  - Redux Toolkit + React-Toastify로 전역 상태 기반 알림 처리
- 프로젝트
  - 공고 작성, 지원, 지원자 선정, 스크랩 신청
- 이력서
  - 등록, 수정, 삭제 (사진 미리보기 + FormData 전송)
- AI 매칭
  - 이력서 기반 프로젝트 공고 추천
  - 로딩 UI + 매칭 점수 내림차순 정렬 표시
- 커뮤니티
  - 게시글 CRUD, 댓글 CRUD, 태그 기반 필터링 & 페이징
- 관리자
  - 기업 회원가입 승인/거절 (PATCH 요청 기반 성능 최적화)
- 알림 (작업 중)
  - SSE 기반 실시간 알림 구현 예정

---

## ⚡ 트러블슈팅 & 배운 점

- **Toast 메시지 중복 출력**  
  → Toast 닫힘 이벤트에서 Redux 상태 초기화 추가로 해결
- **이력서 업로드 실패**  
  → JSON+이미지를 단일 객체 전송 → `FormData + Blob`으로 분리 전송 후 해결
- **댓글 중복/비정상 출력**  
  → 게시글별 댓글 상태를 `commentsByBoardId`로 관리하여 해결
- **AI 매칭 UX 개선**  
  → 단순 대기 대신 진행중 메시지/애니메이션 추가

---

## 📂 디렉토리 구조 (예시)

