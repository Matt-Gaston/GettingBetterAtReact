import { clsx } from "clsx";

import "./LanguageList.css";


interface LanguageListProps{
    languagesData: {name: string,
                    backgroundColor: string,
                    color: string
                    }[]
    wrong_guesses: number
}

function LanguageList(props: LanguageListProps) {
    const languageElements = props.languagesData.map((lang, index) => <span style={
                                                            {backgroundColor: lang.backgroundColor,
                                                            color: lang.color}}
                                                            key={lang.name}
                                                            className={clsx(
                                                                index < props.wrong_guesses && "lost"
                                                            )}
                                                        >{lang.name}</span>)
    return(
        <section className="language-list-con">
            {languageElements}
        </section>
    )
}

export default LanguageList;