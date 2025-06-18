import  './App.css'
import { useTranslation } from "react-i18next";
import "./i18n";
function App() {
   

    const { t, i18n } = useTranslation();
  return (
    <div >
      <header className='container'>
          <h2>LOGO</h2>
          <nav>
            <ul>
              <li><a href="#">{t("menu1")}</a></li>
              <li><a href="#">{t("menu2")}</a></li>
              <li><a href="#">{t("menu3")}</a></li>
              <select   onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}>
                 <option value="uz">Uzbek</option>
                 <option value="en">English</option>
                 <option value="ru">Russian</option>
              </select>
              <button>Dark Mode</button>
            </ul>
          </nav>
      </header>
      <main>
      <section className='hero'>
            <div className="container">
              <div className="texts">
                <h1>{t("title")}</h1>
                <p>{t("title2")}</p>
                <button className='btn2'>{t("title3")}</button>
              </div>
              <img src="./city.png" alt="" />
            </div>
          </section>
      </main>
    </div>
  )
}

export default App