import React from 'react'
import './home.css';


const Home = () => (
  <div>
    <div className="title">
        <h1 className="inner-text">Авторские онлайн‑курсы для профессионалов</h1>
        <h3>Цифровые навыки  от ведущих экспертов</h3>
    </div>
    <div className="category">
    <div className="header-content">
        <ul className="hr">
          <li><a href="#">Программирование</a></li>
          <li><a href="#">Эксплуатация</a></li>
          <li><a href="#">Data Science</a></li>
          <li><a href="#">Управление</a></li>
          <li><a href="#">Информационная безопасность</a></li>
        </ul>
    </div>
  </div>
  <div className="content"> 
             <div className="subtitle">
                <h3>Новоcти и Анонсы</h3>
             </div>
            <p> 01.09.2019 Наш сайт переехал на РЕакт </p>
        </div>
</div>

)

export default Home

