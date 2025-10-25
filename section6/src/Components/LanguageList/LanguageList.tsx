import "./LanguageList.css";
import { languagesData } from "./LanguageListData";

function LanguageList() {
    const languageElements = languagesData.map((lang) => <span style={
                                                            {backgroundColor: lang.backgroundColor,
                                                            color: lang.color}}
                                                            key={lang.name}
                                                        >{lang.name}</span>)
    return(
        <section className="language-list-con">
            {languageElements}
        </section>
    )
}

export default LanguageList;