import i18next from 'i18next';
import React from 'react';

export function CitizenshipWho() {
    return (<div>
        <h1>{i18next.t('Who can get Ukrainian citizenship?')}</h1>

        <p>
            {i18next.t('Definitive answer is given in Law on Citizenship')}
            &nbsp;
            <a href="http://zakon.rada.gov.ua/go/2235-14" >http://zakon.rada.gov.ua/go/2235-14</a>
        </p>

        <ul>
            <li>{i18next.t('Children born on Ukrainian soil regardles of citizenship of their parents are considered Ukrainian citizens by birth (Article 7)')}</li>
            <li>{i18next.t('Children who have at least one parent who is Ukrainian citizen regardles of place of birth are considered Ukrainian citizens by birth (Article 7)')}</li>
            <li>{i18next.t('Everybody who has a parent or grandparent that was born or at least lived on territory that was part of Ukraine before 1991 can become Ukrainian citizen (Article 8)')}</li>
            <li>{i18next.t('Person that immigrated to Ukraine can apply for citizenship after 5 years (Article 9)')}</li>
            <li>{i18next.t('Person that is currently in marriage with Ukrainian citizen that was registered more than 2 years ago can apply for citizenship (Article 9)')}</li>
            <li>{i18next.t('Person that served for 3 years in Armed Forces can apply for citizenship (Article 9)')}</li>
            <li>{i18next.t('Person that renounced Ukrainian citizenship can restore it (Article 10)')}</li>
            <li>{i18next.t('If nothing applies to you - see "immigration" below')}</li>
        </ul>

        <p>
            {i18next.t('To sum it up - marriage for 2 years, army for 3 years, 5 years of residence or your grandparents were originally from here')}
        </p>

        <p>
            {i18next.t('There are however major differences in procedures between articles 7, 8 and 9. People who have it by birth go and ask authorities to register the fact, people who have ancestors can accept citizenship or not and everybody else asks President to grant them citizenship')}
        </p>

        <p>
        </p>
    </div>);
}

export function CitizenshipWhy() {
    return (<div>
        <h1>{i18next.t('Why would you get Ukrainian citizenship?')}</h1>

        <p>
            {i18next.t('There are number of reasons people apply for Ukrainian citizenship. Most obvious - if you want to stay in Ukraine longer than 90 days and be able to vote, work in government, buy land and travel on Ukrainian passport. For some people another reason to get Ukrainian citizenship is visa-free travel to European Union. That said, if you only need to stay in Ukraine longer than 90 years, you can as well apply for permanent residence permit (immigration) or temporary residence permit. You do not need citizenship or any residence permit to register business or become tax resident in Ukraine.')}
        </p>
    </div>);
}
