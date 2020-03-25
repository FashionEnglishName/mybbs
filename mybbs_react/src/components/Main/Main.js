import React from 'react';
import ArticleBlock from './ArticleBlock/ArticleBlock';
import Header from './Header/Header';

import MainStyle from './main.module.css';

class Main extends React.Component {
    render() {
        return (
            <>
                <Header />
                
                <main className={MainStyle.main}>
                    <ArticleBlock></ArticleBlock>
                    <ArticleBlock></ArticleBlock>
                    <ArticleBlock></ArticleBlock>
                    <ArticleBlock></ArticleBlock>
                </main>
            </>
        )
    }
}

export default Main;