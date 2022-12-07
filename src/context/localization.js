import { createContext, useContext, useState } from "react";
import { message as enUSMessage } from "../locale/en-us"
import { message as hnINMessage } from "../locale/hn-in"
import { message as enINMessage } from "../locale/en-in"

const defaultLangauge = "en-us";
const messagesMap = {
    "en-us": enUSMessage,
    "hn-in": hnINMessage,
    "en-in": enINMessage
}

const localizationContext = createContext({ language: defaultLangauge, messages: messagesMap[defaultLangauge] });
const { Provider } = localizationContext;

const LocalizationProvider = (props)=>{

    const { children } = props;
    const [langauge, setLangauge] = useState(defaultLangauge)

    return <Provider value={{ setLangauge, langauge, messages: messagesMap[langauge] }}>
        {children}
    </Provider>
}

const useLangauge = ()=>{ return useContext(localizationContext) };

export {
    useLangauge,
    LocalizationProvider,
    localizationContext
}