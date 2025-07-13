# GitHub 업로드 가이드

## 1단계: .gitignore 파일 확인 및 생성

Next.js 프로젝트에 필요한 .gitignore 파일을 생성합니다.

```bash
# 현재 .gitignore 파일이 있는지 확인
ls -la | grep gitignore
```

## 2단계: 프로젝트 파일들 커밋

```bash
# 모든 파일을 스테이징
git add .

# 커밋 메시지와 함께 커밋
git commit -m "Initial commit: Aimdot.dev Discord Bot Platform"
```

## 3단계: GitHub에서 새 리포지토리 생성

1. GitHub (https://github.com)에 로그인
2. 우측 상단의 "+" 버튼 클릭 → "New repository" 선택
3. Repository name 입력 (예: `aimdot-dev`)
4. Description 입력 (선택사항)
5. Public 또는 Private 선택
6. "Create repository" 클릭

⚠️ **중요**: "Initialize this repository with README" 체크하지 마세요!

## 4단계: 원격 저장소 연결

GitHub에서 생성한 리포지토리 URL을 사용하여 원격 저장소를 연결합니다.

```bash
# 기존 원격 저장소 제거 (있는 경우)
git remote remove origin

# 새로운 GitHub 리포지토리 연결
git remote add origin https://github.com/[사용자명]/[리포지토리명].git

# 기본 브랜치를 main으로 설정
git branch -M main
```

## 5단계: GitHub에 푸시

```bash
# GitHub에 업로드
git push -u origin main
```

## 추가 명령어들

### 파일 상태 확인

```bash
git status
```

### 커밋 히스토리 확인

```bash
git log --oneline
```

### 원격 저장소 확인

```bash
git remote -v
```

## 이후 업데이트 방법

프로젝트를 수정한 후 GitHub에 업데이트하는 방법:

```bash
# 변경사항 스테이징
git add .

# 커밋
git commit -m "커밋 메시지"

# GitHub에 푸시
git push
```

## 프로젝트 정보

- **프로젝트명**: Aimdot.dev
- **기술 스택**: Next.js 15, TypeScript, React 19
- **주요 기능**:
  - 디스코드 스타일 공용 레이아웃
  - 로딩 페이지
  - 사용자 프로필 관리
  - 독립적 페이지 구조

## 문제 해결

### 인증 오류가 발생하는 경우:

1. GitHub Personal Access Token 생성
2. 비밀번호 대신 토큰 사용

### 브랜치 충돌이 발생하는 경우:

```bash
git pull origin main --rebase
```
