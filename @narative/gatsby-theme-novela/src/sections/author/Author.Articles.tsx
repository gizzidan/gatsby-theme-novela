import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";
import { IArticle } from "@types";

import ArticlesList from "../articles/Articles.List";

interface AuthorArticlesProps {
  articles: IArticle[];
}

const AuthorArticles = ({ articles }: AuthorArticlesProps) => {
  return (
    <AuthorArticlesContainer>
      <ArticlesList articles={articles} alwaysShowAllDetails />
    </AuthorArticlesContainer>
  );
};

export default AuthorArticles;

const AuthorArticlesContainer = styled.div`
  
  border-radius: 8px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;
